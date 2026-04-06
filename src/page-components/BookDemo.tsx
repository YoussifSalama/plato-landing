"use client";
import { useMemo, useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { useI18n } from "@/lib/i18n";
import { useSEO } from "@/hooks/useSEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { apiRequest } from "@/lib/queryClient";
import { DEMO_TIME_SLOTS, todayAsDateInput } from "@/lib/demo-slots";
import { Clock, X } from "lucide-react";

export default function BookDemo() {
  const { t } = useI18n();
  useSEO({ title: t.meta.pages.bookDemo.title, description: t.meta.pages.bookDemo.description });
  const p = t.bookDemoPage;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");
  const [idempotencyKey, setIdempotencyKey] = useState(() => `demo_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`);
  const [selectedDate, setSelectedDate] = useState(todayAsDateInput());
  const [preferredSlots, setPreferredSlots] = useState<Array<{ slotDate: string; slotTime: string }>>([]);
  const [success, setSuccess] = useState(false);
  const [deduplicated, setDeduplicated] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const unavailableKey = `/api/demo-bookings?date=${selectedDate}`;
  const { data: unavailable = [] } = useQuery<{ time: string }[]>({
    queryKey: [unavailableKey],
    enabled: Boolean(selectedDate),
  });

  const unavailableSet = useMemo(() => new Set(unavailable.map((s: { time: string }) => s.time)), [unavailable]);

  const parseTime = (timeStr: string) => {
    const [time, modifier] = timeStr.split(" ");
    let [hours, minutes] = time.split(":").map(Number);
    if (modifier === "PM" && hours !== 12) hours += 12;
    if (modifier === "AM" && hours === 12) hours = 0;
    return { hours, minutes };
  };

  const availableSlots = useMemo(() => {
    const filtered = DEMO_TIME_SLOTS.filter((slot) => !unavailableSet.has(slot));
    if (selectedDate === todayAsDateInput()) {
      const now = new Date();
      const currentHours = now.getHours();
      const currentMinutes = now.getMinutes();
      return filtered.filter((slot) => {
        const { hours, minutes } = parseTime(slot);
        return hours > currentHours || (hours === currentHours && minutes > currentMinutes);
      });
    }
    return filtered;
  }, [unavailableSet, selectedDate]);

  const submitMutation = useMutation({
    mutationFn: async () => {
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      const payload = { idempotencyKey, name, email, phone, description, preferredSlots, timezone };
      const res = await apiRequest("POST", "/api/demo-bookings", payload);
      return res.json();
    },
    onSuccess: (result: { deduplicated?: boolean }) => {
      setSuccess(true);
      setDeduplicated(Boolean(result?.deduplicated));
      setError(null);
      setName("");
      setEmail("");
      setPhone("");
      setDescription("");
      setPreferredSlots([]);
      setIdempotencyKey(`demo_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`);
    },
    onError: (err: Error) => {
      setError(err.message || p.errorGeneric);
    },
  });

  const canSubmit = name.trim() && email.trim() && preferredSlots.length > 0 && !submitMutation.isPending;

  const isSlotSelected = (slot: string) =>
    preferredSlots.some((s) => s.slotDate === selectedDate && s.slotTime === slot);

  const toggleSlot = (slot: string) => {
    if (isSlotSelected(slot)) {
      removePreferredSlot(selectedDate, slot);
    } else {
      if (preferredSlots.length < 6) {
        setPreferredSlots((curr: Array<{ slotDate: string; slotTime: string }>) => [
          ...curr,
          { slotDate: selectedDate, slotTime: slot },
        ]);
      }
    }
  };

  const removePreferredSlot = (slotDate: string, slotTime: string) => {
    setPreferredSlots((curr: Array<{ slotDate: string; slotTime: string }>) =>
      curr.filter((slot: { slotDate: string; slotTime: string }) => !(slot.slotDate === slotDate && slot.slotTime === slotTime))
    );
  };

  const handleSubmit = () => {
    setError(null);
    submitMutation.mutate();
  };

  return (
    <div className="relative min-h-screen" style={{ overflowX: "clip" }}>
      <div className="absolute left-0 right-0 hidden dark:block pointer-events-none z-0" aria-hidden="true" style={{ top: "-60px", height: "600px" }}>
        <div className="absolute left-1/2 -translate-x-1/2 w-[90%] h-[520px] bg-[radial-gradient(ellipse_60%_55%_at_50%_0%,rgba(9,102,168,0.55),rgba(30,160,226,0.2)_38%,transparent_62%)]" style={{ top: "0px" }} />
        <div className="absolute left-1/2 -translate-x-1/2 w-[65%] h-[420px] bg-[radial-gradient(ellipse_45%_42%_at_50%_5%,rgba(14,80,140,0.35),transparent_52%)]" style={{ top: "0px" }} />
      </div>

      <section className="relative z-[1] pt-24 sm:pt-32 lg:pt-36 pb-20 sm:pb-28">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <ScrollReveal animation="fade-up">
            <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl" data-testid="book-demo-card">
              <div className="flex items-center justify-between mb-8 pb-6 border-b border-border">
                <div className="flex items-center gap-4">
                  <div className="relative h-14 w-14 flex-shrink-0 rounded-full overflow-hidden shadow-lg bg-white dark:bg-black border border-gray-200 dark:border-gray-700/50 flex items-center justify-center">
                    <img src="/images/brand/plato-logo.png" alt="Plato" className="h-8 w-8 object-contain" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{p.brandName}</p>
                    <h1 className="text-xl sm:text-2xl font-bold tracking-tight" data-testid="text-book-demo-title">{p.title}</h1>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-muted-foreground text-sm">
                  <Clock className="w-4 h-4" />
                  <span>{p.duration}</span>
                </div>
              </div>

              {success ? (
                <div className="text-center py-10">
                  <h2 className="text-2xl font-semibold mb-2">{p.successTitle}</h2>
                  <p className="text-muted-foreground mb-2">
                    {deduplicated
                      ? "You already submitted this demo request. We kept your original request and will contact you soon."
                      : p.successMessage}
                  </p>
                  <Button className="rounded-full mt-4" onClick={() => {
                    setSuccess(false);
                    setDeduplicated(false);
                  }}>
                    {p.bookAnother}
                  </Button>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium">{p.nameLabel}</label>
                      <Input value={name} onChange={(e) => setName(e.target.value)} placeholder={p.namePlaceholder} />
                    </div>
                    <div>
                      <label className="text-sm font-medium">{p.emailLabel}</label>
                      <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder={p.emailPlaceholder} />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Phone</label>
                      <Input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="e.g. +20..." />
                    </div>
                    <div>
                      <label className="text-sm font-medium">{p.selectDate}</label>
                      <Input type="date" value={selectedDate} min={todayAsDateInput()} onChange={(e) => setSelectedDate(e.target.value)} />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium">Business Context / Description</label>
                    <Textarea
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="Tell us about your hiring needs."
                      className="min-h-[120px]"
                    />
                  </div>

                  <div className="border border-border rounded-xl p-4">
                    <p className="text-sm font-medium mb-3">Select preferred time</p>
                    <div className="flex flex-wrap gap-2">
                      {availableSlots.map((slot) => (
                        <Button
                          key={slot}
                          variant={isSlotSelected(slot) ? "default" : "outline"}
                          size="sm"
                          onClick={() => toggleSlot(slot)}
                          className="transition-all duration-200"
                        >
                          {slot}
                          {isSlotSelected(slot) && <X className="w-3.5 h-3.5 ms-2 opacity-70" />}
                        </Button>
                      ))}
                      {availableSlots.length === 0 && (
                        <p className="text-sm text-muted-foreground italic">
                          No more slots available for this date.
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <p className="text-sm font-medium mb-2">Preferred slots ({preferredSlots.length}/6)</p>
                    <div className="flex flex-wrap gap-2">
                      {preferredSlots.map((slot) => (
                        <span key={`${slot.slotDate}-${slot.slotTime}`} className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-sm">
                          {slot.slotDate} - {slot.slotTime}
                          <button type="button" onClick={() => removePreferredSlot(slot.slotDate, slot.slotTime)} aria-label="Remove slot">
                            <X className="w-3 h-3" />
                          </button>
                        </span>
                      ))}
                    </div>
                  </div>

                  {error ? <p className="text-sm text-red-500">{error}</p> : null}

                  <Button onClick={handleSubmit} disabled={!canSubmit} className="rounded-full">
                    {submitMutation.isPending ? "Submitting..." : p.submitButton}
                  </Button>
                </div>
              )}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
