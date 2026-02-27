import { randomUUID } from "crypto";

export function makeRequestId(): string {
  return randomUUID();
}

export function logWithRequestId(requestId: string, event: string, details?: Record<string, unknown>) {
  console.log(JSON.stringify({
    at: new Date().toISOString(),
    requestId,
    event,
    ...(details || {}),
  }));
}
