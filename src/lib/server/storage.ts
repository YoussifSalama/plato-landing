import {
  type User,
  type InsertUser,
  type DemoBooking,
  type InsertDemoBooking,
  type InsertDemoRequest,
  type DemoRequest,
  type DemoRequestSlot,
  type PreferredSlot,
  type ConfirmDemoRequest,
  type DeclineDemoRequest,
  type DemoEmailEvent,
  type CreateEmailEvent,
  type DemoRequestStatus,
  type DemoEmailKind,
  demoBookings,
  demoRequests,
  demoRequestSlots,
  demoSlotLocks,
  demoEmailEvents,
} from "@shared/schema";
import { randomUUID } from "crypto";
import { db } from "./db";
import { and, asc, desc, eq, gte, inArray, isNull, lt, lte, or, sql } from "drizzle-orm";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  getBookingsByDate(date: string): Promise<DemoBooking[]>;
  createBooking(booking: InsertDemoBooking): Promise<DemoBooking>;
  createDemoRequest(input: InsertDemoRequest): Promise<DemoRequest>;
  getDemoRequestByIdempotencyKey(idempotencyKey: string): Promise<DemoRequest | undefined>;
  getUnavailableSlotsByDate(date: string): Promise<{ time: string }[]>;
  listDemoRequests(status?: DemoRequestStatus): Promise<Array<DemoRequest & { preferredSlots: DemoRequestSlot[] }>>;
  getDemoRequestById(id: string): Promise<(DemoRequest & { preferredSlots: DemoRequestSlot[] }) | undefined>;
  confirmDemoRequest(input: ConfirmDemoRequest): Promise<DemoRequest>;
  declineDemoRequest(input: DeclineDemoRequest): Promise<DemoRequest>;
  createEmailEvent(input: CreateEmailEvent): Promise<DemoEmailEvent>;
  markEmailEventSent(id: string): Promise<void>;
  markEmailEventFailed(id: string, errorMessage: string, retryInMinutes: number): Promise<void>;
  hasRecentEmailEvent(requestId: string, kind: DemoEmailKind, withinMinutes: number): Promise<boolean>;
  getRetryableEmailEvents(limit: number): Promise<DemoEmailEvent[]>;
  getPendingRequestsNeedingReminder(hoursSinceCreated: number): Promise<DemoRequest[]>;
  cancelStalePendingRequests(daysOld: number): Promise<number>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;

  constructor() {
    this.users = new Map();
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getBookingsByDate(date: string): Promise<DemoBooking[]> {
    return db.select().from(demoBookings).where(eq(demoBookings.bookingDate, date));
  }

  async createBooking(booking: InsertDemoBooking): Promise<DemoBooking> {
    const [result] = await db.insert(demoBookings).values(booking).returning();
    return result;
  }

  private toSlotDateTime(slot: PreferredSlot): Date {
    const match = slot.slotTime.match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i);
    if (!match) {
      throw new Error(`Invalid slot time format: ${slot.slotTime}`);
    }
    let hour = Number(match[1]);
    const minute = Number(match[2]);
    const period = match[3].toUpperCase();
    if (period === "PM" && hour !== 12) hour += 12;
    if (period === "AM" && hour === 12) hour = 0;
    // Store slot timestamps as UTC to avoid host timezone drift.
    const [year, month, day] = slot.slotDate.split("-").map(Number);
    return new Date(Date.UTC(year, month - 1, day, hour, minute, 0, 0));
  }

  async createDemoRequest(input: InsertDemoRequest): Promise<DemoRequest> {
    return db.transaction(async (tx) => {
      const [request] = await tx.insert(demoRequests).values({
        idempotencyKey: input.idempotencyKey,
        name: input.name,
        email: input.email,
        phone: input.phone || null,
        description: input.description || null,
        status: "pending",
      }).returning();

      await tx.insert(demoRequestSlots).values(input.preferredSlots.map((slot) => ({
        requestId: request.id,
        slotDate: slot.slotDate,
        slotTime: slot.slotTime,
        slotDateTime: this.toSlotDateTime(slot),
      })));

      return request;
    });
  }

  async getDemoRequestByIdempotencyKey(idempotencyKey: string): Promise<DemoRequest | undefined> {
    const [request] = await db
      .select()
      .from(demoRequests)
      .where(eq(demoRequests.idempotencyKey, idempotencyKey))
      .limit(1);
    return request;
  }

  async getUnavailableSlotsByDate(date: string): Promise<{ time: string }[]> {
    const [year, month, day] = date.split("-").map(Number);
    const startUtc = new Date(Date.UTC(year, month - 1, day, 0, 0, 0, 0));
    const endUtc = new Date(Date.UTC(year, month - 1, day + 1, 0, 0, 0, 0));

    const rows = await db
      .select({ slotDateTime: demoSlotLocks.slotDateTime })
      .from(demoSlotLocks)
      .where(and(
        gte(demoSlotLocks.slotDateTime, startUtc),
        lt(demoSlotLocks.slotDateTime, endUtc),
        inArray(demoSlotLocks.state, ["held", "confirmed"]),
      ));

    return rows.map((row) => {
      const dt = new Date(row.slotDateTime);
      const hour = dt.getUTCHours();
      const minute = dt.getUTCMinutes();
      const period = hour >= 12 ? "PM" : "AM";
      const hour12 = hour % 12 === 0 ? 12 : hour % 12;
      return { time: `${hour12}:${String(minute).padStart(2, "0")} ${period}` };
    });
  }

  async listDemoRequests(status?: DemoRequestStatus): Promise<Array<DemoRequest & { preferredSlots: DemoRequestSlot[] }>> {
    const baseQuery = db
      .select()
      .from(demoRequests)
      .orderBy(desc(demoRequests.createdAt));
    const requests = status
      ? await baseQuery.where(eq(demoRequests.status, status))
      : await baseQuery;
    if (requests.length === 0) return [];

    const slots = await db
      .select()
      .from(demoRequestSlots)
      .where(inArray(demoRequestSlots.requestId, requests.map((r) => r.id)))
      .orderBy(asc(demoRequestSlots.slotDateTime));

    const grouped = new Map<string, DemoRequestSlot[]>();
    for (const slot of slots) {
      const curr = grouped.get(slot.requestId) || [];
      curr.push(slot);
      grouped.set(slot.requestId, curr);
    }

    return requests.map((request) => ({ ...request, preferredSlots: grouped.get(request.id) || [] }));
  }

  async getDemoRequestById(id: string): Promise<(DemoRequest & { preferredSlots: DemoRequestSlot[] }) | undefined> {
    const [request] = await db.select().from(demoRequests).where(eq(demoRequests.id, id));
    if (!request) return undefined;
    const slots = await db.select().from(demoRequestSlots).where(eq(demoRequestSlots.requestId, id)).orderBy(asc(demoRequestSlots.slotDateTime));
    return { ...request, preferredSlots: slots };
  }

  async confirmDemoRequest(input: ConfirmDemoRequest): Promise<DemoRequest> {
    const slotDateTime = input.meetingType === "slot_based" && input.slotDate && input.slotTime
      ? this.toSlotDateTime({ slotDate: input.slotDate, slotTime: input.slotTime })
      : null;
    return db.transaction(async (tx) => {
      const [request] = await tx.select().from(demoRequests).where(eq(demoRequests.id, input.requestId));
      if (!request) throw new Error("Request not found");
      if (request.status !== "pending") throw new Error("Request is not pending");

      if (slotDateTime) {
        await tx.insert(demoSlotLocks).values({
          requestId: request.id,
          slotDateTime,
          state: "confirmed",
        });
      }

      const [updated] = await tx
        .update(demoRequests)
        .set({
          status: "confirmed",
          meetingLink: input.meetingLink,
          confirmedSlotDateTime: slotDateTime,
          reviewedBy: input.reviewedBy,
          reviewedAt: new Date(),
          updatedAt: new Date(),
        })
        .where(eq(demoRequests.id, input.requestId))
        .returning();
      return updated;
    });
  }

  async declineDemoRequest(input: DeclineDemoRequest): Promise<DemoRequest> {
    const [updated] = await db
      .update(demoRequests)
      .set({
        status: "declined",
        declineReason: input.declineReason,
        reviewedBy: input.reviewedBy,
        reviewedAt: new Date(),
        updatedAt: new Date(),
      })
      .where(eq(demoRequests.id, input.requestId))
      .returning();

    if (!updated) {
      throw new Error("Request not found");
    }

    if (input.alternativeSlots && input.alternativeSlots.length > 0) {
      await db.insert(demoRequestSlots).values(
        input.alternativeSlots.map((slot) => ({
          requestId: updated.id,
          slotDate: slot.slotDate,
          slotTime: slot.slotTime,
          slotDateTime: this.toSlotDateTime(slot),
        })),
      ).onConflictDoNothing();
    }

    return updated;
  }

  async createEmailEvent(input: CreateEmailEvent): Promise<DemoEmailEvent> {
    const [event] = await db.insert(demoEmailEvents).values({
      requestId: input.requestId || null,
      kind: input.kind,
      toEmail: input.toEmail,
      status: "pending",
      payload: input.payload || {},
    }).returning();
    return event;
  }

  async markEmailEventSent(id: string): Promise<void> {
    await db.update(demoEmailEvents).set({
      status: "sent",
      sentAt: new Date(),
      lastAttemptAt: new Date(),
      updatedAt: new Date(),
      errorMessage: null,
      nextRetryAt: null,
    }).where(eq(demoEmailEvents.id, id));
  }

  async markEmailEventFailed(id: string, errorMessage: string, retryInMinutes: number): Promise<void> {
    await db
      .update(demoEmailEvents)
      .set({
        status: "failed",
        lastAttemptAt: new Date(),
        errorMessage,
        retryCount: sql`${demoEmailEvents.retryCount} + 1`,
        nextRetryAt: new Date(Date.now() + retryInMinutes * 60 * 1000),
        updatedAt: new Date(),
      })
      .where(eq(demoEmailEvents.id, id));
  }

  async hasRecentEmailEvent(requestId: string, kind: DemoEmailKind, withinMinutes: number): Promise<boolean> {
    const threshold = new Date(Date.now() - withinMinutes * 60 * 1000);
    const recent = await db
      .select({ id: demoEmailEvents.id })
      .from(demoEmailEvents)
      .where(and(
        eq(demoEmailEvents.requestId, requestId),
        eq(demoEmailEvents.kind, kind),
        gte(demoEmailEvents.createdAt, threshold),
      ))
      .limit(1);
    return recent.length > 0;
  }

  async getRetryableEmailEvents(limit: number): Promise<DemoEmailEvent[]> {
    return db.select().from(demoEmailEvents).where(
      and(
        inArray(demoEmailEvents.status, ["pending", "failed"]),
        or(isNull(demoEmailEvents.nextRetryAt), lte(demoEmailEvents.nextRetryAt, new Date())),
      ),
    ).orderBy(asc(demoEmailEvents.createdAt)).limit(limit);
  }

  async getPendingRequestsNeedingReminder(hoursSinceCreated: number): Promise<DemoRequest[]> {
    const threshold = new Date(Date.now() - hoursSinceCreated * 60 * 60 * 1000);
    return db
      .select()
      .from(demoRequests)
      .where(and(eq(demoRequests.status, "pending"), lte(demoRequests.createdAt, threshold)))
      .orderBy(asc(demoRequests.createdAt));
  }

  async cancelStalePendingRequests(daysOld: number): Promise<number> {
    const threshold = new Date(Date.now() - daysOld * 24 * 60 * 60 * 1000);
    const result = await db
      .update(demoRequests)
      .set({ status: "cancelled", updatedAt: new Date() })
      .where(and(eq(demoRequests.status, "pending"), lte(demoRequests.createdAt, threshold)))
      .returning({ id: demoRequests.id });
    return result.length;
  }
}

export const storage = new MemStorage();
