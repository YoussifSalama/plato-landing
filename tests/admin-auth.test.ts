import test from "node:test";
import assert from "node:assert/strict";
import { createAdminSessionToken, verifyAdminSessionToken } from "@/lib/server/admin-auth";

test("admin session token roundtrip", () => {
  process.env.ADMIN_SESSION_SECRET = "unit-test-secret-1234567890";
  const token = createAdminSessionToken("admin", 1);
  const payload = verifyAdminSessionToken(token);
  assert.ok(payload);
  assert.equal(payload?.username, "admin");
});

test("invalid token signature is rejected", () => {
  process.env.ADMIN_SESSION_SECRET = "unit-test-secret-1234567890";
  const token = createAdminSessionToken("admin", 1);
  const tampered = `${token}tampered`;
  const payload = verifyAdminSessionToken(tampered);
  assert.equal(payload, null);
});
