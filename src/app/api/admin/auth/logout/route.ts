import { NextResponse } from "next/server";
import { ADMIN_CSRF_COOKIE, ADMIN_SESSION_COOKIE } from "@/lib/server/admin-auth";

function clearAuthCookies(response: NextResponse) {
  response.cookies.set(ADMIN_SESSION_COOKIE, "", {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 0,
  });
  response.cookies.set(ADMIN_CSRF_COOKIE, "", {
    httpOnly: false,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 0,
  });
}

export async function POST(req: Request) {
  const response = NextResponse.redirect(new URL("/admin/login", req.url));
  clearAuthCookies(response);
  return response;
}

export async function GET(req: Request) {
  const response = NextResponse.redirect(new URL("/admin/login", req.url));
  clearAuthCookies(response);
  return response;
}
