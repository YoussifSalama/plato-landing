import { type User, type InsertUser, type DemoBooking, type InsertDemoBooking, demoBookings } from "@shared/schema";
import { randomUUID } from "crypto";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  getBookingsByDate(date: string): Promise<DemoBooking[]>;
  createBooking(booking: InsertDemoBooking): Promise<DemoBooking>;
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
}

export const storage = new MemStorage();
