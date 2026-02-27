"use client";

import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DEMO_TIME_SLOTS, todayAsDateInput } from "@/lib/demo-slots";

interface ConfirmRequestFormProps {
  requestId: string;
  csrfToken: string;
  preferredSlots: Array<{ slotDate: string; slotTime: string }>;
}

export default function ConfirmRequestForm({
  requestId,
  csrfToken,
  preferredSlots,
}: ConfirmRequestFormProps) {
  const initialDate = preferredSlots[0]?.slotDate || todayAsDateInput();
  const [meetingType, setMeetingType] = useState<"slot_based" | "pre_scheduled">("slot_based");
  const [slotDate, setSlotDate] = useState(initialDate);
  const [slotTime, setSlotTime] = useState(preferredSlots[0]?.slotTime || "");
  const [meetingLink, setMeetingLink] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [unavailable, setUnavailable] = useState<string[]>([]);

  useEffect(() => {
    let ignore = false;
    async function loadUnavailable() {
      if (!slotDate || meetingType !== "slot_based") return;
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`/api/demo-bookings?date=${slotDate}`, { cache: "no-store" });
        if (!res.ok) {
          throw new Error("Failed to load slot availability.");
        }
        const data = (await res.json()) as Array<{ time: string }>;
        if (!ignore) {
          setUnavailable(data.map((item) => item.time));
        }
      } catch (err: any) {
        if (!ignore) {
          setError(err?.message || "Failed to load availability.");
          setUnavailable([]);
        }
      } finally {
        if (!ignore) {
          setLoading(false);
        }
      }
    }
    loadUnavailable();
    return () => {
      ignore = true;
    };
  }, [meetingType, slotDate]);

  const availableSlots = useMemo(() => {
    const unavailableSet = new Set(unavailable);
    return DEMO_TIME_SLOTS.filter((time) => !unavailableSet.has(time));
  }, [unavailable]);

  useEffect(() => {
    if (!availableSlots.length) {
      setSlotTime("");
      return;
    }
    if (!slotTime || !availableSlots.includes(slotTime as (typeof DEMO_TIME_SLOTS)[number])) {
      setSlotTime(availableSlots[0]);
    }
  }, [availableSlots, slotTime]);

  return (
    <form
      action={`/api/admin/demo-requests/${requestId}/confirm`}
      method="post"
      className="rounded-lg border border-border p-4 space-y-3"
    >
      <h3 className="font-medium">Confirm request</h3>
      <input type="hidden" name="csrfToken" value={csrfToken} />
      <input type="hidden" name="meetingType" value={meetingType} />
      <input type="hidden" name="slotTime" value={slotTime} />

      <div className="space-y-2">
        <label className="text-xs">Meeting scheduling type</label>
        <div className="grid grid-cols-1 gap-2">
          <label className="flex items-center gap-2 rounded-md border border-border px-3 py-2 text-sm cursor-pointer">
            <input
              type="radio"
              name="meetingTypeChoice"
              checked={meetingType === "slot_based"}
              onChange={() => setMeetingType("slot_based")}
            />
            <span>Choose slot date + time now</span>
          </label>
          <label className="flex items-center gap-2 rounded-md border border-border px-3 py-2 text-sm cursor-pointer">
            <input
              type="radio"
              name="meetingTypeChoice"
              checked={meetingType === "pre_scheduled"}
              onChange={() => setMeetingType("pre_scheduled")}
            />
            <span>Meeting already scheduled (link only)</span>
          </label>
        </div>
      </div>

      {meetingType === "slot_based" ? (
        <>
          <div>
            <label className="text-xs">Slot date</label>
            <Input
              name="slotDate"
              type="date"
              min={todayAsDateInput()}
              value={slotDate}
              onChange={(e) => setSlotDate(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="text-xs">Available slot time</label>
            <select
              className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              value={slotTime}
              onChange={(e) => setSlotTime(e.target.value)}
              disabled={loading || availableSlots.length === 0}
              required
            >
              {availableSlots.length === 0 ? (
                <option value="">No available slots for this date</option>
              ) : (
                availableSlots.map((time) => (
                  <option value={time} key={time}>
                    {time}
                  </option>
                ))
              )}
            </select>
            <p className="mt-1 text-xs text-muted-foreground">
              {loading
                ? "Checking availability..."
                : `${availableSlots.length} available of ${DEMO_TIME_SLOTS.length} total slots`}
            </p>
            {error ? <p className="mt-1 text-xs text-red-500">{error}</p> : null}
          </div>
        </>
      ) : (
        <input type="hidden" name="slotDate" value="" />
      )}

      {meetingType === "slot_based" && preferredSlots.length > 0 ? (
        <div>
          <p className="text-xs font-medium mb-1">Candidate preferred slots</p>
          <div className="flex flex-wrap gap-1.5">
            {preferredSlots.map((slot) => (
              <button
                key={`${slot.slotDate}-${slot.slotTime}`}
                type="button"
                className="rounded-full border border-border px-2.5 py-1 text-[11px] hover:bg-muted"
                onClick={() => {
                  setSlotDate(slot.slotDate);
                  setSlotTime(slot.slotTime);
                }}
              >
                {slot.slotDate} - {slot.slotTime}
              </button>
            ))}
          </div>
        </div>
      ) : null}

      <div>
        <label className="text-xs">Meeting link</label>
        <Input
          name="meetingLink"
          placeholder="https://meet.google.com/..."
          required
          value={meetingLink}
          onChange={(e) => setMeetingLink(e.target.value)}
        />
      </div>

      <Button
        type="submit"
        className="w-full"
        disabled={
          !meetingLink
          || (meetingType === "slot_based" && (!slotDate || !slotTime))
        }
      >
        Confirm
      </Button>
    </form>
  );
}
