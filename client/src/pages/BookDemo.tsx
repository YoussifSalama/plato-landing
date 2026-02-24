import { useState, useMemo } from "react";
import { useI18n } from "@/lib/i18n";
import { useSEO } from "@/hooks/useSEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { useQuery, useMutation } from "@tanstack/react-query";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { ChevronLeft, ChevronRight, Clock, User, Mail, CheckCircle2 } from "lucide-react";

const TIME_SLOTS = [
  "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM",
  "11:00 AM", "11:30 AM", "1:00 PM", "1:30 PM",
  "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM",
  "4:00 PM", "4:30 PM",
];

const DAYS = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
const DAYS_AR = ["أحد", "إثن", "ثلا", "أرب", "خمي", "جمع", "سبت"];

function formatDate(d: Date): string {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

function getMonthName(month: number, lang: string): string {
  const months_en = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const months_ar = ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];
  return lang === "ar" ? months_ar[month] : months_en[month];
}

function getTimezone(): string {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  } catch {
    return "UTC";
  }
}

function getCurrentTime(): string {
  return new Date().toLocaleTimeString([], { hour: "numeric", minute: "2-digit" }).toLowerCase();
}

export default function BookDemo() {
  const { t, lang } = useI18n();
  useSEO({ title: t.meta.pages.bookDemo.title, description: t.meta.pages.bookDemo.description });
  const p = t.bookDemoPage;

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const getInitialDate = () => {
    const d = new Date(today);
    while (d.getDay() === 5 || d.getDay() === 6) {
      d.setDate(d.getDate() + 1);
    }
    return d;
  };

  const [initialDate] = useState(getInitialDate);
  const [currentMonth, setCurrentMonth] = useState(initialDate.getMonth());
  const [currentYear, setCurrentYear] = useState(initialDate.getFullYear());
  const [selectedDate, setSelectedDate] = useState<Date | null>(initialDate);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [booked, setBooked] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const dateStr = selectedDate ? formatDate(selectedDate) : "";

  const bookingsUrl = dateStr ? `/api/demo-bookings?date=${dateStr}` : "";
  const { data: bookedSlots = [] } = useQuery<{ time: string }[]>({
    queryKey: [bookingsUrl],
    enabled: !!dateStr,
  });

  const bookedTimes = useMemo(() => new Set(bookedSlots.map(s => s.time)), [bookedSlots]);

  const availableSlots = useMemo(() => {
    if (!selectedDate) return TIME_SLOTS;
    const isToday = formatDate(selectedDate) === formatDate(today);
    if (!isToday) return TIME_SLOTS.filter(s => !bookedTimes.has(s));
    const now = new Date();
    return TIME_SLOTS.filter(s => {
      if (bookedTimes.has(s)) return false;
      const [time, period] = s.split(" ");
      const [h, m] = time.split(":").map(Number);
      let hour24 = period === "PM" && h !== 12 ? h + 12 : h;
      if (period === "AM" && h === 12) hour24 = 0;
      const slotDate = new Date(selectedDate);
      slotDate.setHours(hour24, m, 0, 0);
      return slotDate > now;
    });
  }, [selectedDate, bookedTimes]);

  const bookMutation = useMutation({
    mutationFn: async (data: { bookingDate: string; bookingTime: string; name: string; email: string }) => {
      const res = await apiRequest("POST", "/api/demo-bookings", data);
      return res.json();
    },
    onSuccess: () => {
      setBooked(true);
      setError(null);
      queryClient.invalidateQueries({ queryKey: [bookingsUrl] });
    },
    onError: (err: Error) => {
      if (err.message.includes("409")) {
        setError(p.errorSlotTaken);
        queryClient.invalidateQueries({ queryKey: [bookingsUrl] });
      } else {
        setError(p.errorGeneric);
      }
    },
  });

  const handleSubmit = () => {
    if (!selectedDate || !selectedTime || !name.trim() || !email.trim()) return;
    setError(null);
    bookMutation.mutate({ bookingDate: dateStr, bookingTime: selectedTime, name: name.trim(), email: email.trim() });
  };

  const handleReset = () => {
    const freshDate = getInitialDate();
    setBooked(false);
    setSelectedDate(freshDate);
    setCurrentMonth(freshDate.getMonth());
    setCurrentYear(freshDate.getFullYear());
    setSelectedTime(null);
    setName("");
    setEmail("");
    setError(null);
  };

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

  const prevMonth = () => {
    if (currentMonth === 0) { setCurrentMonth(11); setCurrentYear(y => y - 1); }
    else setCurrentMonth(m => m - 1);
  };
  const nextMonth = () => {
    if (currentMonth === 11) { setCurrentMonth(0); setCurrentYear(y => y + 1); }
    else setCurrentMonth(m => m + 1);
  };

  const isPastDate = (day: number) => {
    const d = new Date(currentYear, currentMonth, day);
    d.setHours(0, 0, 0, 0);
    return d < today;
  };

  const isWeekend = (day: number) => {
    const d = new Date(currentYear, currentMonth, day).getDay();
    return d === 5 || d === 6;
  };

  const isToday = (day: number) => {
    return day === today.getDate() && currentMonth === today.getMonth() && currentYear === today.getFullYear();
  };

  const isSelected = (day: number) => {
    if (!selectedDate) return false;
    return selectedDate.getDate() === day && selectedDate.getMonth() === currentMonth && selectedDate.getFullYear() === currentYear;
  };

  const selectDay = (day: number) => {
    if (isPastDate(day) || isWeekend(day)) return;
    const d = new Date(currentYear, currentMonth, day);
    setSelectedDate(d);
    setSelectedTime(null);
  };

  const canGoBack = currentYear > today.getFullYear() || (currentYear === today.getFullYear() && currentMonth > today.getMonth());

  const dayLabels = lang === "ar" ? DAYS_AR : DAYS;

  return (
    <div className="relative min-h-screen" style={{ overflowX: "clip" }}>
      {/* Radial blue glow */}
      <div className="absolute left-0 right-0 pointer-events-none z-0" aria-hidden="true" style={{ top: "-60px", height: "600px" }}>
        <div className="absolute left-1/2 -translate-x-1/2 w-[90%] h-[520px] bg-[radial-gradient(ellipse_60%_55%_at_50%_0%,rgba(9,102,168,0.55),rgba(30,160,226,0.2)_38%,transparent_62%)]" style={{ top: "0px" }} />
        <div className="absolute left-1/2 -translate-x-1/2 w-[65%] h-[420px] bg-[radial-gradient(ellipse_45%_42%_at_50%_5%,rgba(14,80,140,0.35),transparent_52%)]" style={{ top: "0px" }} />
      </div>

      <section className="relative z-[1] pt-24 sm:pt-32 lg:pt-36 pb-20 sm:pb-28">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <ScrollReveal animation="fade-up">
            <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl" data-testid="book-demo-card">
              {/* Header */}
              <div className="flex items-center justify-between mb-8 pb-6 border-b border-border">
                <div className="flex items-center gap-4">
                  <div className="h-14 w-14 flex-shrink-0 rounded-full bg-[#0a0e14] flex items-center justify-center shadow-lg">
                    <img src="/images/plato-logo.png" alt="Plato" className="h-8 w-8 object-contain" />
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

              {booked ? (
                <div className="text-center py-12" data-testid="booking-success">
                  <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto mb-4" />
                  <h2 className="text-2xl font-bold mb-2">{p.successTitle}</h2>
                  <p className="text-muted-foreground mb-8 max-w-md mx-auto">{p.successMessage}</p>
                  <Button onClick={handleReset} className="rounded-full" data-testid="button-book-another">
                    {p.bookAnother}
                  </Button>
                </div>
              ) : (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Calendar */}
                  <div>
                    <h3 className="text-base font-semibold mb-4" data-testid="text-select-date">{p.selectDate}</h3>
                    <div className="select-none">
                      {/* Month navigation */}
                      <div className="flex items-center justify-between mb-4">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={prevMonth}
                          disabled={!canGoBack}
                          className="rounded-full w-8 h-8 p-0"
                          data-testid="button-prev-month"
                        >
                          <ChevronLeft className="w-4 h-4" />
                        </Button>
                        <span className="text-sm font-medium" data-testid="text-current-month">
                          {getMonthName(currentMonth, lang)} {currentYear}
                        </span>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={nextMonth}
                          className="rounded-full w-8 h-8 p-0"
                          data-testid="button-next-month"
                        >
                          <ChevronRight className="w-4 h-4" />
                        </Button>
                      </div>

                      {/* Day headers */}
                      <div className="grid grid-cols-7 gap-1 mb-2">
                        {dayLabels.map(d => (
                          <div key={d} className="text-center text-xs text-muted-foreground font-medium py-1">{d}</div>
                        ))}
                      </div>

                      {/* Days grid */}
                      <div className="grid grid-cols-7 gap-1" data-testid="calendar-grid">
                        {Array.from({ length: firstDayOfMonth }).map((_, i) => (
                          <div key={`empty-${i}`} />
                        ))}
                        {Array.from({ length: daysInMonth }).map((_, i) => {
                          const day = i + 1;
                          const past = isPastDate(day);
                          const weekend = isWeekend(day);
                          const disabled = past || weekend;
                          const sel = isSelected(day);
                          const todayMark = isToday(day);

                          return (
                            <Button
                              key={day}
                              variant={sel ? "default" : disabled ? "ghost" : "outline"}
                              size="sm"
                              onClick={() => selectDay(day)}
                              disabled={disabled}
                              className={`w-full aspect-square rounded-full text-sm font-medium p-0 ${todayMark && !sel ? "ring-2 ring-primary" : ""}`}
                              data-testid={`calendar-day-${day}`}
                            >
                              {day}
                            </Button>
                          );
                        })}
                      </div>

                      {/* Timezone */}
                      <div className="mt-4 pt-4 border-t border-border">
                        <p className="text-xs text-muted-foreground">{p.timezone}</p>
                        <p className="text-xs text-muted-foreground/70 mt-0.5">
                          {getTimezone()} ({getCurrentTime()})
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Time slots + Form */}
                  <div>
                    <h3 className="text-base font-semibold mb-4" data-testid="text-select-time">{p.selectTime}</h3>

                    {!selectedDate ? (
                      <p className="text-sm text-muted-foreground">{p.selectDate}</p>
                    ) : (
                      <>
                        {/* Time slots */}
                        <div className="flex flex-wrap gap-2 mb-6" data-testid="time-slots-grid">
                          {availableSlots.length === 0 ? (
                            <p className="text-sm text-muted-foreground">No available slots for this date.</p>
                          ) : (
                            availableSlots.map(slot => (
                              <Button
                                key={slot}
                                variant={selectedTime === slot ? "default" : "outline"}
                                size="sm"
                                onClick={() => setSelectedTime(slot)}
                                className="rounded-full text-xs"
                                data-testid={`button-time-${slot.replace(/[:\s]/g, "-")}`}
                              >
                                {slot}
                              </Button>
                            ))
                          )}
                        </div>

                        {/* Name field */}
                        <div className="mb-4">
                          <label className="flex items-center gap-1.5 text-sm font-medium mb-2">
                            <User className="w-4 h-4" />
                            {p.nameLabel}
                          </label>
                          <Input
                            value={name}
                            onChange={e => setName(e.target.value)}
                            placeholder={p.namePlaceholder}
                            className="!rounded-full h-11"
                            data-testid="input-name"
                          />
                        </div>

                        {/* Email field */}
                        <div className="mb-6">
                          <label className="flex items-center gap-1.5 text-sm font-medium mb-2">
                            <Mail className="w-4 h-4" />
                            {p.emailLabel}
                          </label>
                          <Input
                            type="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            placeholder={p.emailPlaceholder}
                            className="!rounded-full h-11"
                            data-testid="input-email"
                          />
                        </div>

                        {error && (
                          <p className="text-sm text-red-500 mb-4" data-testid="text-booking-error">{error}</p>
                        )}

                        {/* Submit */}
                        <Button
                          onClick={handleSubmit}
                          disabled={!selectedTime || !name.trim() || !email.trim() || bookMutation.isPending}
                          className="w-full rounded-full"
                          size="lg"
                          data-testid="button-submit-booking"
                        >
                          {bookMutation.isPending ? "..." : p.submitButton}
                        </Button>
                      </>
                    )}
                  </div>
                </div>
              )}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
