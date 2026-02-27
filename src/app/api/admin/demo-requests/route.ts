import { NextRequest, NextResponse } from "next/server";
import { storage } from "@/lib/server/storage";
import { demoRequestStatusEnum } from "@shared/schema";
import { getAdminSessionFromRequest } from "@/lib/server/admin-auth";

export async function GET(req: NextRequest) {
  const session = getAdminSessionFromRequest(req);
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const statusParam = req.nextUrl.searchParams.get("status");
  const parsedStatus = statusParam ? demoRequestStatusEnum.safeParse(statusParam) : null;
  const status = parsedStatus?.success ? parsedStatus.data : undefined;

  const requests = await storage.listDemoRequests(status);
  return NextResponse.json(requests);
}
