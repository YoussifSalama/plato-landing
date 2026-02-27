"use client";

import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { DEMO_TIME_SLOTS, todayAsDateInput } from "@/lib/demo-slots";

interface DeclineRequestFormProps {
  requestId: string;
  csrfToken: string;
}

export default function DeclineRequestForm({ requestId, csrfToken }: DeclineRequestFormProps) {
  const [declineReason, setDeclineReason] = useState("");
  const [selectedDate, setSelectedDate] = useState(todayAsDateInput());
  const [selectedTime, setSelectedTime] = useState("");
  const [loading, setLoading] = useState(false);
  const [unavailable, setUnavailable] = useState<string[]>([]);
  const [alternativeSlots, setAlternativeSlots] = useState<Array<{ slotDate: string; slotTime: string }>>([]);

  useEffect(() => {
    let ignore = false;
    async function loadUnavailable() {
      setLoading(true);
      try {
        const res = await fetch(`/api/demo-bookings?date=${selectedDate}`, { cache: "no-store" });
        const data = res.ok ? ((await res.json()) as Array<{ time: string }>) : [];
        if (!ignore) {
          setUnavailable(data.map((item) => item.time));
        }
      } finally {
        if (!ignore) setLoading(false);
      }
    }
    loadUnavailable();
    return () => {
      ignore = true;
    };
  }, [selectedDate]);

  const availableTimes = useMemo(() => {
    const taken = new Set(unavailable);
    return DEMO_TIME_SLOTS.filter((t) => !taken.has(t));
  }, [unavailable]);

  useEffect(() => {
    if (!availableTimes.length) {
      setSelectedTime("");
      return;
    }
    if (!selectedTime || !availableTimes.includes(selectedTime as (typeof DEMO_TIME_SLOTS)[number])) {
      setSelectedTime(availableTimes[0]);
    }
  }, [availableTimes, selectedTime]);

  function addAlternative() {
    if (!selectedDate || !selectedTime) return;
    if (alternativeSlots.some((s) => s.slotDate === selectedDate && s.slotTime === selectedTime)) return;
    if (alternativeSlots.length >= 6) return;
    setAlternativeSlots((curr) => [...curr, { slotDate: selectedDate, slotTime: selectedTime }]);
  }

  function removeAlternative(slotDate: string, slotTime: string) {
    setAlternativeSlots((curr) => curr.filter((s) => !(s.slotDate === slotDate && s.slotTime === slotTime)));
  }

  return (
    <form action={`/api/admin/demo-requests/${requestId}/decline`} method="post" className="rounded-lg border border-border p-4 space-y-3">
      <h3 className="font-medium">Decline request</h3>
      <input type="hidden" name="csrfToken" value={csrfToken} />
      <input type="hidden" name="alternativeSlotsJson" value={JSON.stringify(alternativeSlots)} />

      <div>
        <label className="text-xs">Decline reason</label>
        <Textarea
          name="declineReason"
          className="min-h-[96px]"
          required
          value={declineReason}
          onChange={(e) => setDeclineReason(e.target.value)}
        />
      </div>

      <div className="rounded-md border border-border p-3 space-y-2">
        <p className="text-xs font-medium">Alternative slots (optional)</p>
        <div className="grid grid-cols-2 gap-2">
          <Input type="date" min={todayAsDateInput()} value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} />
          <select
            className="rounded-md border border-input bg-background px-3 py-2 text-sm"
            value={selectedTime}
            onChange={(e) => setSelectedTime(e.target.value)}
            disabled={loading || availableTimes.length === 0}
          >
            {availableTimes.length === 0 ? (
              <option value="">No available times</option>
            ) : (
              availableTimes.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))
            )}
          </select>
        </div>
        <Button type="button" variant="secondary" onClick={addAlternative} disabled={!selectedDate || !selectedTime || alternativeSlots.length >= 6}>
          Add alternative slot
        </Button>
        {alternativeSlots.length ? (
          <div className="flex flex-wrap gap-2">
            {alternativeSlots.map((slot) => (
              <button
                key={`${slot.slotDate}-${slot.slotTime}`}
                type="button"
                onClick={() => removeAlternative(slot.slotDate, slot.slotTime)}
                className="rounded-full border border-border px-3 py-1 text-xs hover:bg-muted"
              >
                {slot.slotDate} - {slot.slotTime} ×
              </button>
            ))}
          </div>
        ) : (
          <p className="text-xs text-muted-foreground">No alternatives selected.</p>
        )}
      </div>

      <Button type="submit" variant="outline" className="w-full">
        Decline
      </Button>
    </form>
  );
}
