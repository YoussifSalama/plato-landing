import test from "node:test";
import assert from "node:assert/strict";
import { insertDemoRequestSchema } from "@shared/schema";

test("valid demo request payload passes validation", () => {
  const parsed = insertDemoRequestSchema.safeParse({
    idempotencyKey: "demo_test_key_12345",
    name: "Jane Doe",
    email: "jane@example.com",
    phone: "+20 123456789",
    description: "Need help hiring sales reps.",
    preferredSlots: [
      { slotDate: "2026-03-01", slotTime: "2:30 PM" },
      { slotDate: "2026-03-02", slotTime: "11:00 AM" },
    ],
  });

  assert.equal(parsed.success, true);
});

test("payload without preferred slots fails validation", () => {
  const parsed = insertDemoRequestSchema.safeParse({
    idempotencyKey: "demo_test_key_12345",
    name: "Jane Doe",
    email: "jane@example.com",
    preferredSlots: [],
  });

  assert.equal(parsed.success, false);
});
