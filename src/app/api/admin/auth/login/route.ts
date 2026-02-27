import { NextRequest, NextResponse } from "next/server";
import {
  ADMIN_CSRF_COOKIE,
  ADMIN_SESSION_COOKIE,
  createAdminSessionToken,
  generateCsrfToken,
  isAdminPasswordValid,
} from "@/lib/server/admin-auth";

type AttemptState = { count: number; firstAt: number; lockedUntil?: number };
const attemptStore = new Map<string, AttemptState>();
const MAX_ATTEMPTS = 5;
const WINDOW_MS = 15 * 60 * 1000;
const LOCK_MS = 15 * 60 * 1000;

function getClientIp(req: NextRequest): string {
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return "unknown";
}

function recordFailure(key: string, now: number): AttemptState {
  const existing = attemptStore.get(key);
  if (!existing || now - existing.firstAt > WINDOW_MS) {
    const next = { count: 1, firstAt: now } satisfies AttemptState;
    attemptStore.set(key, next);
    return next;
  }

  const updated: AttemptState = { ...existing, count: existing.count + 1 };
  if (updated.count >= MAX_ATTEMPTS) {
    updated.lockedUntil = now + LOCK_MS;
  }
  attemptStore.set(key, updated);
  return updated;
}

export async function POST(req: NextRequest) {
  const contentType = req.headers.get("content-type") || "";
  let username = "admin";
  let password = "";

  if (contentType.includes("application/json")) {
    const body = await req.json();
    username = String(body.username || "admin");
    password = String(body.password || "");
  } else {
    const formData = await req.formData();
    username = String(formData.get("username") || "admin");
    password = String(formData.get("password") || "");
  }

  const expectedUsername = process.env.ADMIN_LOGIN_USERNAME || "admin";
  const key = `${username}:${getClientIp(req)}`;
  const now = Date.now();
  const state = attemptStore.get(key);
  if (state?.lockedUntil && state.lockedUntil > now) {
    return NextResponse.json({ error: "Too many failed attempts. Try again later." }, { status: 429 });
  }

  if (username !== expectedUsername || !isAdminPasswordValid(password)) {
    recordFailure(key, now);
    return NextResponse.json({ error: "Invalid admin credentials." }, { status: 401 });
  }
  attemptStore.delete(key);

  const response = NextResponse.json({ success: true });
  const sessionToken = createAdminSessionToken(username);
  const csrfToken = generateCsrfToken();

  response.cookies.set(ADMIN_SESSION_COOKIE, sessionToken, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 12,
  });

  response.cookies.set(ADMIN_CSRF_COOKIE, csrfToken, {
    httpOnly: false,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 12,
  });

  return response;
}
