import { sql } from "drizzle-orm";
import { pgTable, text, varchar, date, timestamp, uniqueIndex } from "drizzle-orm/pg-core";
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
