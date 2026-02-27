import { NextRequest, NextResponse } from "next/server";
import { ADMIN_CSRF_COOKIE, getAdminSessionFromRequest } from "@/lib/server/admin-auth";

export async function GET(req: NextRequest) {
  const session = getAdminSessionFromRequest(req);
  if (!session) {
    return NextResponse.json({ authenticated: false }, { status: 401 });
  }
  return NextResponse.json({
    authenticated: true,
    username: session.username,
    csrfToken: req.cookies.get(ADMIN_CSRF_COOKIE)?.value || "",
  });
}
