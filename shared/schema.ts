import { sql } from "drizzle-orm";
import { pgTable, text, varchar, date, timestamp, uniqueIndex, integer, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export const demoBookings = pgTable("demo_bookings", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  bookingDate: date("booking_date").notNull(),
  bookingTime: text("booking_time").notNull(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
}, (table) => [
  uniqueIndex("unique_date_time").on(table.bookingDate, table.bookingTime),
]);

export const insertDemoBookingSchema = createInsertSchema(demoBookings).pick({
  bookingDate: true,
  bookingTime: true,
  name: true,
  email: true,
}).extend({
  bookingDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  bookingTime: z.string().regex(/^\d{1,2}:\d{2}\s?(AM|PM)$/i),
  name: z.string().min(1).max(200),
  email: z.string().email().max(300),
});

export type InsertDemoBooking = z.infer<typeof insertDemoBookingSchema>;
export type DemoBooking = typeof demoBookings.$inferSelect;

export const demoRequestStatusEnum = z.enum(["pending", "confirmed", "declined", "cancelled"]);
export const demoSlotLockStateEnum = z.enum(["held", "confirmed", "released"]);
export const demoEmailStatusEnum = z.enum(["pending", "sent", "failed"]);
export const demoEmailKindEnum = z.enum([
  "request_received_user",
  "new_request_admin",
  "request_confirmed_user",
  "request_declined_user",
  "pending_reminder_admin",
]);

export const demoRequests = pgTable("demo_requests", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  idempotencyKey: text("idempotency_key").notNull(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  description: text("description"),
  status: text("status").notNull().default("pending"),
  meetingLink: text("meeting_link"),
  confirmedSlotDateTime: timestamp("confirmed_slot_datetime"),
  declineReason: text("decline_reason"),
  reviewedBy: text("reviewed_by"),
  reviewedAt: timestamp("reviewed_at"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
}, (table) => [
  uniqueIndex("demo_requests_idempotency_key_unique").on(table.idempotencyKey),
]);

export const demoRequestSlots = pgTable("demo_request_slots", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  requestId: varchar("request_id").notNull().references(() => demoRequests.id, { onDelete: "cascade" }),
  slotDate: date("slot_date").notNull(),
  slotTime: text("slot_time").notNull(),
  slotDateTime: timestamp("slot_datetime").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
}, (table) => [
  uniqueIndex("demo_request_slots_request_slot_unique").on(table.requestId, table.slotDateTime),
]);

export const demoSlotLocks = pgTable("demo_slot_locks", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  requestId: varchar("request_id").references(() => demoRequests.id, { onDelete: "set null" }),
  slotDateTime: timestamp("slot_datetime").notNull(),
  state: text("state").notNull().default("confirmed"),
  expiresAt: timestamp("expires_at"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
}, (table) => [
  uniqueIndex("demo_slot_locks_slot_unique").on(table.slotDateTime),
]);

export const demoEmailEvents = pgTable("demo_email_events", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  requestId: varchar("request_id").references(() => demoRequests.id, { onDelete: "set null" }),
  kind: text("kind").notNull(),
  toEmail: text("to_email").notNull(),
  status: text("status").notNull().default("pending"),
  retryCount: integer("retry_count").notNull().default(0),
  errorMessage: text("error_message"),
  nextRetryAt: timestamp("next_retry_at"),
  lastAttemptAt: timestamp("last_attempt_at"),
  sentAt: timestamp("sent_at"),
  payload: jsonb("payload").$type<Record<string, unknown>>().notNull().default(sql`'{}'::jsonb`),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const preferredSlotSchema = z.object({
  slotDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  slotTime: z.string().regex(/^\d{1,2}:\d{2}\s?(AM|PM)$/i),
});

export const insertDemoRequestSchema = z.object({
  idempotencyKey: z.string().min(10).max(200),
  name: z.string().min(1).max(200),
  email: z.string().email().max(300),
  phone: z.string().max(40).optional().or(z.literal("")),
  description: z.string().max(4000).optional().or(z.literal("")),
  preferredSlots: z.array(preferredSlotSchema).min(1).max(6),
});

export const confirmDemoRequestSchema = z.object({
  requestId: z.string().min(1),
  meetingType: z.enum(["slot_based", "pre_scheduled"]),
  slotDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).optional(),
  slotTime: z.string().regex(/^\d{1,2}:\d{2}\s?(AM|PM)$/i).optional(),
  meetingLink: z.string().url().max(2000),
  reviewedBy: z.string().min(1).max(200),
}).superRefine((data, ctx) => {
  if (data.meetingType === "slot_based") {
    if (!data.slotDate) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["slotDate"],
        message: "slotDate is required for slot-based meetings.",
      });
    }
    if (!data.slotTime) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["slotTime"],
        message: "slotTime is required for slot-based meetings.",
      });
    }
  }
});

export const declineDemoRequestSchema = z.object({
  requestId: z.string().min(1),
  declineReason: z.string().min(3).max(2000),
  reviewedBy: z.string().min(1).max(200),
  alternativeSlots: z.array(preferredSlotSchema).max(6).optional(),
});

export const createEmailEventSchema = z.object({
  requestId: z.string().optional(),
  kind: demoEmailKindEnum,
  toEmail: z.string().email(),
  payload: z.record(z.unknown()).default({}),
});

export type DemoRequestStatus = z.infer<typeof demoRequestStatusEnum>;
export type DemoSlotLockState = z.infer<typeof demoSlotLockStateEnum>;
export type DemoEmailStatus = z.infer<typeof demoEmailStatusEnum>;
export type DemoEmailKind = z.infer<typeof demoEmailKindEnum>;
export type PreferredSlot = z.infer<typeof preferredSlotSchema>;
export type InsertDemoRequest = z.infer<typeof insertDemoRequestSchema>;
export type ConfirmDemoRequest = z.infer<typeof confirmDemoRequestSchema>;
export type DeclineDemoRequest = z.infer<typeof declineDemoRequestSchema>;
export type CreateEmailEvent = z.infer<typeof createEmailEventSchema>;

export type DemoRequest = typeof demoRequests.$inferSelect;
export type DemoRequestSlot = typeof demoRequestSlots.$inferSelect;
export type DemoSlotLock = typeof demoSlotLocks.$inferSelect;
export type DemoEmailEvent = typeof demoEmailEvents.$inferSelect;
