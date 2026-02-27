import "dotenv/config";
import cron from "node-cron";
import { storage } from "@/lib/server/storage";
import { sendEmailByKind } from "@/lib/server/email";
import { type DemoEmailKind } from "@shared/schema";

function log(message: string, extra?: Record<string, unknown>) {
  const entry = {
    at: new Date().toISOString(),
    service: "demo-worker",
    message,
    ...extra,
  };
  console.log(JSON.stringify(entry));
}

async function processEmailQueue(limit = 25) {
  const events = await storage.getRetryableEmailEvents(limit);
  if (!events.length) return;

  for (const event of events) {
    try {
      await sendEmailByKind(event.kind as DemoEmailKind, event.toEmail, (event.payload || {}) as Record<string, unknown>);
      await storage.markEmailEventSent(event.id);
      log("email.sent", { emailEventId: event.id, kind: event.kind, toEmail: event.toEmail });
    } catch (err: any) {
      const retryInMinutes = Math.min(60, 2 ** Math.max(1, event.retryCount));
      await storage.markEmailEventFailed(event.id, err?.message || "Email send failed", retryInMinutes);
      log("email.failed", { emailEventId: event.id, kind: event.kind, retryInMinutes, error: err?.message || "Unknown error" });
    }
  }
}

async function queuePendingReminders(hours = 6) {
  const pending = await storage.getPendingRequestsNeedingReminder(hours);
  let queued = 0;
  for (const request of pending) {
    const alreadyQueuedRecently = await storage.hasRecentEmailEvent(request.id, "pending_reminder_admin", 12 * 60);
    if (alreadyQueuedRecently) {
      continue;
    }
    await storage.createEmailEvent({
      requestId: request.id,
      kind: "pending_reminder_admin",
      toEmail: process.env.ADMIN_TO_EMAIL || "Demo@platohiring.com",
      payload: {
        name: request.name,
        email: request.email,
        phone: request.phone || "",
        description: request.description || "",
      },
    });
    queued += 1;
  }
  if (queued) {
    log("pending.reminder.queued", { count: queued });
  }
}

async function cancelStalePending(days = 3) {
  const count = await storage.cancelStalePendingRequests(days);
  if (count) {
    log("pending.cancelled", { count });
  }
}

async function runCycle() {
  await queuePendingReminders(6);
  await cancelStalePending(3);
  await processEmailQueue(25);
}

function schedule() {
  log("worker.start", { schedule: "*/5 * * * *" });
  cron.schedule("*/5 * * * *", () => {
    runCycle().catch((error) => {
      log("worker.cycle.error", { error: error?.message || "Unknown error" });
    });
  });

  // Immediate warm-up on startup.
  runCycle().catch((error) => {
    log("worker.initial.error", { error: error?.message || "Unknown error" });
  });
}

schedule();
