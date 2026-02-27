import { createHmac, randomBytes, timingSafeEqual } from "crypto";
import { NextRequest } from "next/server";

export const ADMIN_SESSION_COOKIE = "plato_admin_session";
export const ADMIN_CSRF_COOKIE = "plato_admin_csrf";

type SessionPayload = {
  username: string;
  exp: number;
};

function getSecret(): string {
  const secret = process.env.ADMIN_SESSION_SECRET;
  if (!secret) {
    throw new Error("ADMIN_SESSION_SECRET is required for admin auth.");
  }
  return secret;
}

function sign(payloadBase64: string): string {
  return createHmac("sha256", getSecret()).update(payloadBase64).digest("hex");
}

export function createAdminSessionToken(username: string, hours = 12): string {
  const payload: SessionPayload = {
    username,
    exp: Date.now() + hours * 60 * 60 * 1000,
  };
  const payloadBase64 = Buffer.from(JSON.stringify(payload)).toString("base64url");
  const signature = sign(payloadBase64);
  return `${payloadBase64}.${signature}`;
}

export function verifyAdminSessionToken(token?: string): SessionPayload | null {
  if (!token) return null;
  const [payloadBase64, signature] = token.split(".");
  if (!payloadBase64 || !signature) return null;
  const expected = sign(payloadBase64);
  const actual = signature;
  if (expected.length !== actual.length) return null;
  if (!timingSafeEqual(Buffer.from(expected), Buffer.from(actual))) return null;

  try {
    const payload = JSON.parse(Buffer.from(payloadBase64, "base64url").toString("utf8")) as SessionPayload;
    if (!payload.username || !payload.exp || payload.exp < Date.now()) return null;
    return payload;
  } catch {
    return null;
  }
}

export function generateCsrfToken(): string {
  return randomBytes(24).toString("hex");
}

export function getAdminSessionFromRequest(req: NextRequest): SessionPayload | null {
  return verifyAdminSessionToken(req.cookies.get(ADMIN_SESSION_COOKIE)?.value);
}

export function isAdminPasswordValid(password: string): boolean {
  const expected = process.env.ADMIN_LOGIN_PASSWORD;
  if (!expected) {
    throw new Error("ADMIN_LOGIN_PASSWORD is required for admin auth.");
  }
  const expectedBuffer = Buffer.from(expected);
  const actualBuffer = Buffer.from(password);
  if (expectedBuffer.length !== actualBuffer.length) return false;
  return timingSafeEqual(expectedBuffer, actualBuffer);
}

export function isCsrfValid(req: NextRequest, submittedToken?: string | null): boolean {
  const cookieToken = req.cookies.get(ADMIN_CSRF_COOKIE)?.value;
  if (!cookieToken || !submittedToken) return false;
  return cookieToken === submittedToken;
}
