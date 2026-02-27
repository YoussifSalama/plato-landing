import { NextRequest, NextResponse } from "next/server";
import { storage } from "@/lib/server/storage";
import { insertDemoRequestSchema } from "@shared/schema";
import { sendDemoRequestNotificationToAdmin, sendDemoRequestReceivedToUser } from "@/lib/server/email";
import { logWithRequestId, makeRequestId } from "@/lib/server/observability";

export async function GET(req: NextRequest) {
  const date = req.nextUrl.searchParams.get("date");
  if (!date || !/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    return NextResponse.json({ error: "Invalid date format. Use YYYY-MM-DD." }, { status: 400 });
  }
  const unavailable = await storage.getUnavailableSlotsByDate(date);
  return NextResponse.json(unavailable);
}

export async function POST(req: NextRequest) {
  const requestId = makeRequestId();
  const body = await req.json();
  const parsed = insertDemoRequestSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid request data.", details: parsed.error.flatten() }, { status: 400 });
  }

  try {
    const demoRequest = await storage.createDemoRequest(parsed.data);
    logWithRequestId(requestId, "demo_request.created", { demoRequestId: demoRequest.id });

    const payload = {
      name: parsed.data.name,
      email: parsed.data.email,
      phone: parsed.data.phone,
      description: parsed.data.description,
      preferredSlots: parsed.data.preferredSlots,
    };

    // Persist email jobs for retryable automation.
    const adminEvent = await storage.createEmailEvent({
      requestId: demoRequest.id,
      kind: "new_request_admin",
      toEmail: process.env.ADMIN_TO_EMAIL || "Demo@platohiring.com",
      payload,
    });
    const userEvent = await storage.createEmailEvent({
      requestId: demoRequest.id,
      kind: "request_received_user",
      toEmail: parsed.data.email,
      payload: { name: parsed.data.name },
    });

    // Immediate attempt: mark events to prevent duplicate worker sends.
    sendDemoRequestNotificationToAdmin(payload)
      .then(() => storage.markEmailEventSent(adminEvent.id))
      .catch((error) => storage.markEmailEventFailed(adminEvent.id, error?.message || "Immediate send failed", 2));

    sendDemoRequestReceivedToUser({ name: parsed.data.name, email: parsed.data.email })
      .then(() => storage.markEmailEventSent(userEvent.id))
      .catch((error) => storage.markEmailEventFailed(userEvent.id, error?.message || "Immediate send failed", 2));

    return NextResponse.json({ id: demoRequest.id, status: demoRequest.status }, { status: 201 });
  } catch (err: any) {
    if (err?.code === "23505") {
      const existing = await storage.getDemoRequestByIdempotencyKey(parsed.data.idempotencyKey);
      if (existing) {
        return NextResponse.json({ id: existing.id, status: existing.status, deduplicated: true }, { status: 200 });
      }
    }
    logWithRequestId(requestId, "demo_request.create_failed", { error: err?.message || "Unknown error" });
    return NextResponse.json({ error: "Failed to create demo request." }, { status: 500 });
  }
}
