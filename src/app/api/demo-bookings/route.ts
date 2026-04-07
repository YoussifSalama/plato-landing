import { NextRequest, NextResponse } from "next/server";
import { storage } from "@/lib/server/storage";
import { insertDemoRequestSchema } from "@shared/schema";
import { sendBookingConfirmation, sendDemoRequestNotificationToAdmin } from "@/lib/server/email";
import { createDemoEvent } from "@/lib/server/calendar";
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

    const slot = parsed.data.preferredSlots[0];
    const unavailableInDb = await storage.getUnavailableSlotsByDate(slot.slotDate);
    const isSlotTaken = unavailableInDb.some(s => s.time === slot.slotTime);

    if (isSlotTaken) {
      await storage.createEmailEvent({
        requestId: demoRequest.id,
        kind: "new_request_admin",
        toEmail: process.env.ADMIN_TO_EMAIL || "Demo@platohiring.com",
        payload: { ...parsed.data, status: "pending_conflict" },
      });
      return NextResponse.json({ id: demoRequest.id, status: "pending" }, { status: 201 });
    }

    const { meetLink, eventLink } = await createDemoEvent({
      name: parsed.data.name,
      email: parsed.data.email,
      bookingDate: slot.slotDate,
      bookingTime: slot.slotTime,
      timezone: parsed.data.timezone,
    });

    await storage.confirmDemoRequest({
      requestId: demoRequest.id,
      meetingType: "slot_based",
      slotDate: slot.slotDate,
      slotTime: slot.slotTime,
      meetingLink: meetLink,
      reviewedBy: "System Automation",
    });

    const emailPayload = {
      name: parsed.data.name,
      email: parsed.data.email,
      bookingDate: slot.slotDate,
      bookingTime: slot.slotTime,
      meetLink,
      eventLink,
    };

    const userEvent = await storage.createEmailEvent({
      requestId: demoRequest.id,
      kind: "request_confirmed_user",
      toEmail: parsed.data.email,
      payload: emailPayload,
    });

    const adminEvent = await storage.createEmailEvent({
      requestId: demoRequest.id,
      kind: "new_request_admin",
      toEmail: process.env.ADMIN_TO_EMAIL || "Demo@platohiring.com",
      payload: { ...emailPayload, status: "auto_confirmed" },
    });

    sendBookingConfirmation(emailPayload)
      .then(() => storage.markEmailEventSent(userEvent.id))
      .catch((error) => storage.markEmailEventFailed(userEvent.id, error?.message || "Immediate send failed", 2));

    sendDemoRequestNotificationToAdmin({ ...parsed.data, preferredSlots: parsed.data.preferredSlots })
      .then(() => storage.markEmailEventSent(adminEvent.id))
      .catch((error) => storage.markEmailEventFailed(adminEvent.id, error?.message || "Immediate send failed", 2));

    return NextResponse.json({ id: demoRequest.id, status: "confirmed", meetLink }, { status: 201 });
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
