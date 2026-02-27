import { NextRequest, NextResponse } from "next/server";
import { storage } from "@/lib/server/storage";
import { declineDemoRequestSchema } from "@shared/schema";
import { getAdminSessionFromRequest, isCsrfValid } from "@/lib/server/admin-auth";
import { sendDemoDeclinedToUser } from "@/lib/server/email";
import { logWithRequestId, makeRequestId } from "@/lib/server/observability";

function parseAlternativeSlots(value: string) {
  return value
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean)
    .map((item) => {
      const [slotDate, slotTime] = item.split("|").map((s) => s.trim());
      return { slotDate, slotTime };
    })
    .filter((slot) => slot.slotDate && slot.slotTime);
}

function parseAlternativeSlotsJson(value: string) {
  try {
    const parsed = JSON.parse(value);
    if (!Array.isArray(parsed)) return [];
    return parsed
      .map((slot) => ({
        slotDate: String(slot?.slotDate || "").trim(),
        slotTime: String(slot?.slotTime || "").trim(),
      }))
      .filter((slot) => slot.slotDate && slot.slotTime);
  } catch {
    return [];
  }
}

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
  const jsonAlternatives = parseAlternativeSlotsJson(String(formData.get("alternativeSlotsJson") || ""));
  const csvAlternatives = parseAlternativeSlots(String(formData.get("alternativeSlots") || ""));
  const parsed = declineDemoRequestSchema.safeParse({
    requestId: id,
    declineReason: String(formData.get("declineReason") || ""),
    reviewedBy: session.username,
    alternativeSlots: jsonAlternatives.length > 0 ? jsonAlternatives : csvAlternatives,
  });

  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid decline payload.", details: parsed.error.flatten() }, { status: 400 });
  }

  const updated = await storage.declineDemoRequest(parsed.data);
  logWithRequestId(requestId, "demo_request.declined", { demoRequestId: updated.id, reviewedBy: session.username });
  const emailEvent = await storage.createEmailEvent({
    requestId: updated.id,
    kind: "request_declined_user",
    toEmail: updated.email,
    payload: {
      name: updated.name,
      declineReason: parsed.data.declineReason,
      alternativeSlots: parsed.data.alternativeSlots || [],
    },
  });
  sendDemoDeclinedToUser({
    name: updated.name,
    email: updated.email,
    declineReason: parsed.data.declineReason,
    alternativeSlots: parsed.data.alternativeSlots || [],
  })
    .then(() => storage.markEmailEventSent(emailEvent.id))
    .catch((error) => storage.markEmailEventFailed(emailEvent.id, error?.message || "Immediate send failed", 2));
  return NextResponse.redirect(new URL("/admin/demo-requests?ok=declined", req.url), 303);
}
