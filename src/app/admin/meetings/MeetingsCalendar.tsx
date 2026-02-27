"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";

type MeetingItem = {
  id: string;
  name: string;
  email: string;
  meetingLink: string | null;
  confirmedSlotDateTime: string | null;
};

interface MeetingsCalendarProps {
  meetings: MeetingItem[];
}

function startOfMonth(d: Date) {
  return new Date(d.getFullYear(), d.getMonth(), 1);
}

function monthLabel(d: Date) {
  return d.toLocaleDateString("en-US", { month: "long", year: "numeric" });
}

function dateKey(d: Date) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

function formatSlotTimeFromUtcIso(iso: string) {
  const dt = new Date(iso);
  const hour = dt.getUTCHours();
  const minute = dt.getUTCMinutes();
  const period = hour >= 12 ? "PM" : "AM";
  const hour12 = hour % 12 === 0 ? 12 : hour % 12;
  return `${hour12}:${String(minute).padStart(2, "0")} ${period}`;
}

export default function MeetingsCalendar({ meetings }: MeetingsCalendarProps) {
  const [monthCursor, setMonthCursor] = useState(() => startOfMonth(new Date()));

  const meetingsWithDate = useMemo(
    () =>
      meetings
        .filter((m) => m.confirmedSlotDateTime)
        .map((m) => ({
          ...m,
          date: new Date(m.confirmedSlotDateTime!),
          // Keep the same date/time picked by admin (stored in UTC).
          slotDateKey: m.confirmedSlotDateTime!.slice(0, 10),
          slotTimeLabel: formatSlotTimeFromUtcIso(m.confirmedSlotDateTime!),
        })),
    [meetings],
  );
  const preScheduledOnly = useMemo(() => meetings.filter((m) => !m.confirmedSlotDateTime), [meetings]);

  const meetingsByDay = useMemo(() => {
    const map = new Map<string, MeetingItem[]>();
    for (const meeting of meetingsWithDate) {
      const key = meeting.slotDateKey;
      const curr = map.get(key) || [];
      curr.push(meeting);
      map.set(key, curr);
    }
    for (const [, value] of map) {
      value.sort((a, b) => (a.confirmedSlotDateTime || "").localeCompare(b.confirmedSlotDateTime || ""));
    }
    return map;
  }, [meetingsWithDate]);

  const gridDays = useMemo(() => {
    const first = startOfMonth(monthCursor);
    const firstWeekday = first.getDay();
    const start = new Date(first);
    start.setDate(first.getDate() - firstWeekday);
    const days: Date[] = [];
    for (let i = 0; i < 42; i += 1) {
      const day = new Date(start);
      day.setDate(start.getDate() + i);
      days.push(day);
    }
    return days;
  }, [monthCursor]);

  return (
    <section className="rounded-xl border border-border bg-card p-4 space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Confirmed meetings calendar</h2>
        <div className="flex items-center gap-2">
          <Button
            type="button"
            variant="outline"
            onClick={() => setMonthCursor((curr) => new Date(curr.getFullYear(), curr.getMonth() - 1, 1))}
          >
            Prev
          </Button>
          <p className="text-sm font-medium min-w-[180px] text-center">{monthLabel(monthCursor)}</p>
          <Button
            type="button"
            variant="outline"
            onClick={() => setMonthCursor((curr) => new Date(curr.getFullYear(), curr.getMonth() + 1, 1))}
          >
            Next
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-2 text-xs font-medium text-muted-foreground">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} className="px-2 py-1">{day}</div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-2">
        {gridDays.map((day) => {
          const key = dateKey(day);
          const dayMeetings = meetingsByDay.get(key) || [];
          const inCurrentMonth = day.getMonth() === monthCursor.getMonth();
          return (
            <div
              key={key}
              className={`min-h-[110px] rounded-md border p-2 ${inCurrentMonth ? "border-border bg-background" : "border-border/40 bg-muted/30"}`}
            >
              <p className={`text-xs font-semibold ${inCurrentMonth ? "" : "text-muted-foreground"}`}>{day.getDate()}</p>
              <div className="mt-1 space-y-1">
                {dayMeetings.slice(0, 3).map((meeting) => {
                  const time = "slotTimeLabel" in meeting ? String(meeting.slotTimeLabel) : "TBD";
                  return (
                    <div key={meeting.id} className="rounded bg-primary/10 px-1.5 py-1">
                      <p className="text-[11px] font-medium leading-tight">{time} - {meeting.name}</p>
                    </div>
                  );
                })}
                {dayMeetings.length > 3 ? (
                  <p className="text-[11px] text-muted-foreground">+{dayMeetings.length - 3} more</p>
                ) : null}
              </div>
            </div>
          );
        })}
      </div>

      {preScheduledOnly.length > 0 ? (
        <div className="rounded-lg border border-border p-3">
          <h3 className="text-sm font-semibold mb-2">Pre-scheduled meetings (no slot date/time)</h3>
          <div className="space-y-2">
            {preScheduledOnly.map((meeting) => (
              <div key={meeting.id} className="rounded border border-border px-3 py-2">
                <p className="text-sm font-medium">{meeting.name} - {meeting.email}</p>
                {meeting.meetingLink ? (
                  <a href={meeting.meetingLink} target="_blank" rel="noopener noreferrer" className="text-xs text-primary underline">
                    Open meeting link
                  </a>
                ) : (
                  <p className="text-xs text-muted-foreground">No meeting link</p>
                )}
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </section>
  );
}
