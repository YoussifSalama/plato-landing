import { NextRequest, NextResponse } from "next/server";
import { storage } from "@/lib/server/storage";
import { confirmDemoRequestSchema } from "@shared/schema";
import { getAdminSessionFromRequest, isCsrfValid } from "@/lib/server/admin-auth";
import { sendDemoConfirmedToUser } from "@/lib/server/email";
import { logWithRequestId, makeRequestId } from "@/lib/server/observability";

export async function POST(req: NextRequest, context: { params: Promise<{ id: string }> }) {
  const requestId = makeRequestId();
  const session = getAdminSessionFromRequest(req);
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const formData = await req.formData();
  const csrf = String(formData.get("csrfToken") || "");
  if (!isCsrfValid(req, csrf)) {
    return NextResponse.json({ error: "Invalid CSRF token." }, { status: 403 });
  }

  const { id } = await context.params;
  const parsed = confirmDemoRequestSchema.safeParse({
    requestId: id,
    meetingType: String(formData.get("meetingType") || "slot_based"),
    slotDate: String(formData.get("slotDate") || ""),
    slotTime: String(formData.get("slotTime") || ""),
    meetingLink: String(formData.get("meetingLink") || ""),
    reviewedBy: session.username,
  });

  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid confirm payload.", details: parsed.error.flatten() }, { status: 400 });
  }

  try {
    const updated = await storage.confirmDemoRequest(parsed.data);
    logWithRequestId(requestId, "demo_request.confirmed", { demoRequestId: updated.id, reviewedBy: session.username });
    const emailEvent = await storage.createEmailEvent({
      requestId: updated.id,
      kind: "request_confirmed_user",
      toEmail: updated.email,
      payload: {
        name: updated.name,
        meetingType: parsed.data.meetingType,
        slotDate: parsed.data.slotDate || "",
        slotTime: parsed.data.slotTime || "",
        meetingLink: parsed.data.meetingLink,
      },
    });
    sendDemoConfirmedToUser({
      name: updated.name,
      email: updated.email,
      meetingType: parsed.data.meetingType,
      slotDate: parsed.data.slotDate,
      slotTime: parsed.data.slotTime,
      meetingLink: parsed.data.meetingLink,
    })
      .then(() => storage.markEmailEventSent(emailEvent.id))
      .catch((error) => storage.markEmailEventFailed(emailEvent.id, error?.message || "Immediate send failed", 2));
    return NextResponse.redirect(new URL("/admin/demo-requests?ok=confirmed", req.url), 303);
  } catch (error: any) {
    logWithRequestId(requestId, "demo_request.confirm_failed", { error: error?.message || "Unknown error" });
    if (error?.code === "23505") {
      return NextResponse.redirect(new URL("/admin/demo-requests?error=slot_conflict", req.url), 303);
    }
    return NextResponse.redirect(new URL("/admin/demo-requests?error=confirm_failed", req.url), 303);
  }
}
