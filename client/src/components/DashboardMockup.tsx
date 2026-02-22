import { useState, useEffect, useRef } from "react";
import { useI18n } from "@/lib/i18n";
import platoLogo from "@/assets/plato-logo.png";
import {
  LayoutDashboard,
  Briefcase,
  Users,
  Video,
  Mail,
  BarChart3,
  Settings,
  HelpCircle,
  Search,
  Bell,
  Moon,
  Plus,
  LogOut,
  TrendingUp,
  ChevronLeft,
} from "lucide-react";

const sidebarNav = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: Briefcase, label: "Jobs" },
  { icon: Users, label: "Candidates" },
  { icon: Video, label: "Interviews" },
  { icon: Mail, label: "Inbox", badge: 3 },
  { icon: BarChart3, label: "Analytics" },
];

const statCards = [
  { icon: Briefcase, label: "Active Jobs", value: 24, color: "bg-blue-500" },
  { icon: Users, label: "Candidates", value: 156, color: "bg-orange-500" },
  { icon: Video, label: "Interviews", value: 12, color: "bg-emerald-500" },
  { icon: Mail, label: "Messages", value: 8, color: "bg-sky-500" },
];

const overviewStats = [
  { label: "Total Jobs", numVal: 53, display: "53", change: "+5%" },
  { label: "New Applicants", numVal: 2300, display: "2,300", change: "+95%" },
  { label: "Interviews Scheduled", numVal: 2408, display: "2,408", change: "+8%" },
  { label: "Hiring Success Rate", numVal: 87, display: "87%", change: "+6%", suffix: "%" },
];

const hiringProgress = [
  { dept: "Engineering", current: 40, target: 50, pct: 90, color: "bg-blue-500" },
  { dept: "Sales", current: 32, target: 35, pct: 91, color: "bg-blue-600" },
  { dept: "Marketing", current: 28, target: 30, pct: 93, color: "bg-gradient-to-r from-emerald-500 to-green-400" },
  { dept: "Design", current: 18, target: 20, pct: 90, color: "bg-red-500" },
];

const activityItems = [
  { text: "New application for Senior Developer", time: "5 min ago", dot: "bg-emerald-500" },
  { text: "Interview scheduled with John Doe", time: "1 hour ago", dot: "bg-orange-500" },
  { text: "Job posting published: Marketing Manager", time: "2 hours ago", dot: "bg-emerald-500" },
  { text: "Offer accepted by Sarah Smith", time: "3 hours ago", dot: "bg-blue-500" },
  { text: "New message from candidate", time: "5 hours ago", dot: "bg-red-500" },
];

const donutSegments = [
  { label: "New", pct: 35, color: "#3b82f6" },
  { label: "Review", pct: 28, color: "#f97316" },
  { label: "Interview", pct: 22, color: "#eab308" },
  { label: "Offer", pct: 10, color: "#22c55e" },
  { label: "Rejected", pct: 5, color: "#ef4444" },
];

function useSectionVisible(threshold = 0.3) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) { setVisible(true); return; }
    const obs = new IntersectionObserver(
      ([entry]) => { setVisible(entry.isIntersecting); },
      { threshold, rootMargin: "0px 0px -20px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, visible };
}

function useCountUp(target: number, visible: boolean, duration = 1200) {
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!visible) { setVal(0); return; }
    let start = 0;
    const startTime = performance.now();
    function tick(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setVal(Math.round(eased * target));
      if (progress < 1) start = requestAnimationFrame(tick);
    }
    start = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(start);
  }, [visible, target, duration]);

  return val;
}

function formatNum(n: number): string {
  return n.toLocaleString("en-US");
}

function AnimatedNumber({ target, visible, suffix = "", duration = 1200 }: { target: number; visible: boolean; suffix?: string; duration?: number }) {
  const val = useCountUp(target, visible, duration);
  return <>{formatNum(val)}{suffix}</>;
}

function DonutChart({ visible }: { visible: boolean }) {
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!visible) { setProgress(0); return; }
    let start = 0;
    const startTime = performance.now();
    function tick(now: number) {
      const elapsed = now - startTime;
      const p = Math.min(elapsed / 1400, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setProgress(eased);
      if (p < 1) start = requestAnimationFrame(tick);
    }
    start = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(start);
  }, [visible]);

  let cumulative = 0;

  return (
    <div className="flex items-center gap-6">
      <svg viewBox="0 0 100 100" className="w-28 h-28 flex-shrink-0">
        {donutSegments.map((seg, i) => {
          const offset = cumulative;
          cumulative += seg.pct;
          const fullDash = (seg.pct / 100) * circumference;
          const dashLength = fullDash * progress;
          const dashOffset = -(offset / 100) * circumference * progress;
          return (
            <circle
              key={i}
              cx="50"
              cy="50"
              r={radius}
              fill="none"
              stroke={seg.color}
              strokeWidth="12"
              strokeDasharray={`${dashLength} ${circumference - dashLength}`}
              strokeDashoffset={dashOffset}
              strokeLinecap="round"
              transform="rotate(-90 50 50)"
              style={{ transition: "none" }}
            />
          );
        })}
      </svg>
      <div className="space-y-1.5 text-[9px]">
        {donutSegments.map((seg, i) => (
          <div key={i} className="flex items-center justify-between gap-4" style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateX(0)" : "translateX(10px)",
            transition: `opacity 400ms ${200 + i * 100}ms, transform 400ms ${200 + i * 100}ms`
          }}>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: seg.color }} />
              <span className="text-muted-foreground">{seg.label}</span>
            </div>
            <span className="font-semibold text-foreground">{seg.pct}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function MiniBarChart({ visible }: { visible: boolean }) {
  const bars = [280, 380, 350, 420, 480, 450];
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
  const maxVal = 600;

  return (
    <div className="flex items-end gap-2 h-24">
      {bars.map((val, i) => (
        <div key={i} className="flex flex-col items-center gap-1 flex-1">
          <div
            className="w-full rounded-t bg-gradient-to-t from-blue-600 to-blue-400 min-w-[12px]"
            style={{
              height: visible ? `${(val / maxVal) * 100}%` : "0%",
              transition: `height 800ms cubic-bezier(0.34, 1.56, 0.64, 1) ${i * 120}ms`,
            }}
          />
          <span className="text-[7px] text-muted-foreground">{months[i]}</span>
        </div>
      ))}
    </div>
  );
}

function AreaChartMini({ visible }: { visible: boolean }) {
  const appData = [30, 45, 35, 55, 60, 50, 40];
  const intData = [15, 20, 25, 30, 25, 20, 15];
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const w = 280;
  const h = 100;
  const pad = 10;

  function toPath(data: number[], maxVal: number) {
    const stepX = (w - pad * 2) / (data.length - 1);
    return data
      .map((v, i) => {
        const x = pad + i * stepX;
        const y = h - pad - (v / maxVal) * (h - pad * 2);
        return `${i === 0 ? "M" : "L"}${x},${y}`;
      })
      .join(" ");
  }

  function toArea(data: number[], maxVal: number) {
    const stepX = (w - pad * 2) / (data.length - 1);
    const line = data
      .map((v, i) => {
        const x = pad + i * stepX;
        const y = h - pad - (v / maxVal) * (h - pad * 2);
        return `${x},${y}`;
      })
      .join(" L");
    const lastX = pad + (data.length - 1) * stepX;
    return `M${pad},${h - pad} L${line} L${lastX},${h - pad} Z`;
  }

  const maxVal = 80;
  const appPath = toPath(appData, maxVal);
  const intPath = toPath(intData, maxVal);
  const pathLength = 500;

  return (
    <div>
      <div className="flex items-center gap-4 mb-2 text-[8px]">
        <div className="flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-blue-500" />
          <span className="text-muted-foreground">Applications</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          <span className="text-muted-foreground">Interviews</span>
        </div>
      </div>
      <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-auto">
        <path
          d={toArea(appData, maxVal)}
          fill="hsl(210 80% 60% / 0.15)"
          style={{ opacity: visible ? 1 : 0, transition: "opacity 1000ms 400ms" }}
        />
        <path
          d={appPath}
          fill="none"
          stroke="hsl(210 80% 55%)"
          strokeWidth="2"
          strokeDasharray={pathLength}
          strokeDashoffset={visible ? 0 : pathLength}
          style={{ transition: `stroke-dashoffset 1200ms cubic-bezier(0.4, 0, 0.2, 1)` }}
        />
        <path
          d={toArea(intData, maxVal)}
          fill="hsl(150 60% 50% / 0.12)"
          style={{ opacity: visible ? 1 : 0, transition: "opacity 1000ms 600ms" }}
        />
        <path
          d={intPath}
          fill="none"
          stroke="hsl(150 60% 45%)"
          strokeWidth="2"
          strokeDasharray={pathLength}
          strokeDashoffset={visible ? 0 : pathLength}
          style={{ transition: `stroke-dashoffset 1200ms 200ms cubic-bezier(0.4, 0, 0.2, 1)` }}
        />
        {days.map((d, i) => {
          const x = pad + i * ((w - pad * 2) / (days.length - 1));
          return (
            <text key={i} x={x} y={h - 1} textAnchor="middle" className="fill-muted-foreground" style={{ fontSize: 7 }}>
              {d}
            </text>
          );
        })}
      </svg>
    </div>
  );
}

export default function DashboardMockup() {
  const { lang } = useI18n();
  const isRtl = lang === "ar";

  const sec1 = useSectionVisible(0.2);
  const sec2 = useSectionVisible(0.2);
  const sec3 = useSectionVisible(0.2);
  const sec4 = useSectionVisible(0.2);

  const cardBg = "bg-white dark:bg-[#1e293b]";
  const mainBg = "bg-gray-100 dark:bg-[#111827]";

  return (
    <div
      className={`select-none ${isRtl ? "direction-rtl" : ""}`}
      style={{ fontSize: "11px", lineHeight: 1.4 }}
      data-testid="dashboard-mockup"
    >
      <div className="flex">
        {/* Sidebar — sticky on the left, spans all sections */}
        <div className="w-[120px] flex-shrink-0 bg-white dark:bg-[#0f172a] flex flex-col border-r border-border rounded-l-2xl">
          <div className="px-3 py-4 flex items-center gap-2">
            <img src={platoLogo} alt="Plato" className="w-7 h-7 object-contain dark:invert" />
            <div className="flex-1 min-w-0">
              <div className="font-bold text-[11px] text-foreground leading-none">Plato</div>
              <div className="text-[7px] text-muted-foreground">Plato Agency</div>
            </div>
            <ChevronLeft className="w-3 h-3 text-muted-foreground flex-shrink-0" />
          </div>

          <nav className="flex-1 px-2 space-y-0.5 mt-1">
            {sidebarNav.map((item, i) => (
              <div
                key={i}
                className={`flex items-center gap-2 px-2 py-1.5 rounded-md text-[10px] ${
                  item.active
                    ? "bg-blue-600 text-white font-medium"
                    : "text-muted-foreground"
                }`}
              >
                <item.icon className="w-3.5 h-3.5" />
                <span>{item.label}</span>
                {item.badge && (
                  <span className="ml-auto bg-red-500 text-white text-[7px] w-3.5 h-3.5 rounded-full flex items-center justify-center font-bold">
                    {item.badge}
                  </span>
                )}
              </div>
            ))}
          </nav>

          <div className="px-2 pb-2 space-y-0.5 mt-auto">
            <div className="flex items-center gap-2 px-2 py-1.5 rounded-md text-[10px] text-muted-foreground">
              <Settings className="w-3.5 h-3.5" />
              <span>Settings</span>
            </div>
            <div className="flex items-center gap-2 px-2 py-1.5 rounded-md text-[10px] text-muted-foreground">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Help Center</span>
            </div>
          </div>

          <div className="mx-2 mb-3 bg-blue-900/90 dark:bg-blue-900/80 rounded-lg p-2">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-[8px] font-bold text-white">HR</div>
              <div>
                <div className="text-[9px] font-semibold text-white">HR Manager</div>
                <div className="text-[7px] text-blue-200">hr@company.com</div>
              </div>
            </div>
            <div className="mt-1.5 flex items-center justify-center gap-1 text-[8px] text-red-300 bg-white/10 rounded py-0.5">
              <LogOut className="w-2.5 h-2.5" />
              Logout
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 min-w-0 rounded-r-2xl overflow-hidden">
          {/* Top Bar — always visible */}
          <div className="h-10 bg-white dark:bg-[#1e293b] border-b border-border flex items-center px-4 gap-3">
            <div className="flex items-center gap-2 bg-gray-100 dark:bg-[#0f172a] rounded-lg px-3 py-1.5 flex-1 max-w-[300px]">
              <Search className="w-3 h-3 text-muted-foreground" />
              <span className="text-[9px] text-muted-foreground">Search jobs, candidates, or anything...</span>
            </div>
            <div className="ml-auto flex items-center gap-3">
              <div className="relative">
                <Bell className="w-3.5 h-3.5 text-muted-foreground" />
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full" />
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-[9px] text-foreground font-medium">HR Manager</span>
                <span className="text-[7px] text-muted-foreground">Admin</span>
              </div>
              <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-[8px] font-bold text-white">HR</div>
              <Moon className="w-3.5 h-3.5 text-muted-foreground" />
            </div>
          </div>

          {/* === SECTION 1: Header + Stat Cards + Overview === */}
          <div ref={sec1.ref} className={`${mainBg} p-4 space-y-3`}>
            <div className="flex items-start justify-between" style={{
              opacity: sec1.visible ? 1 : 0,
              transform: sec1.visible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 600ms, transform 600ms"
            }}>
              <div>
                <h2 className="text-[15px] font-bold text-foreground">Agency Dashboard</h2>
                <p className="text-[9px] text-muted-foreground">Welcome back! Here's what's happening today.</p>
              </div>
              <div className="flex items-center gap-1 bg-blue-600 text-white rounded-lg px-3 py-1.5 text-[9px] font-medium">
                <Plus className="w-3 h-3" />
                Post New Job
              </div>
            </div>

            <div className="grid grid-cols-4 gap-2">
              {statCards.map((card, i) => (
                <div key={i} className={`${cardBg} rounded-xl p-3 border border-border`} style={{
                  opacity: sec1.visible ? 1 : 0,
                  transform: sec1.visible ? "translateY(0) scale(1)" : "translateY(24px) scale(0.95)",
                  transition: `opacity 500ms ${150 + i * 100}ms, transform 500ms ${150 + i * 100}ms cubic-bezier(0.34, 1.56, 0.64, 1)`
                }}>
                  <div className={`w-7 h-7 ${card.color} rounded-lg flex items-center justify-center mb-2`}>
                    <card.icon className="w-3.5 h-3.5 text-white" />
                  </div>
                  <div className="text-[8px] text-muted-foreground">{card.label}</div>
                  <div className="text-[16px] font-bold text-foreground leading-tight">
                    <AnimatedNumber target={card.value} visible={sec1.visible} duration={1000} />
                  </div>
                </div>
              ))}
            </div>

            <div className={`${cardBg} rounded-xl p-3 border border-border`} style={{
              opacity: sec1.visible ? 1 : 0,
              transform: sec1.visible ? "translateY(0)" : "translateY(16px)",
              transition: "opacity 600ms 500ms, transform 600ms 500ms"
            }}>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-[11px] font-bold text-foreground">Overview Statistics</h3>
                <span className="text-[8px] text-blue-500 font-medium">View All</span>
              </div>
              <div className="grid grid-cols-4 gap-3">
                {overviewStats.map((stat, i) => (
                  <div key={i}>
                    <div className="flex items-center gap-1 text-[8px] text-muted-foreground mb-0.5">
                      {stat.label}
                      <TrendingUp className="w-2.5 h-2.5 text-emerald-500" />
                    </div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-[14px] font-bold text-foreground">
                        <AnimatedNumber target={stat.numVal} visible={sec1.visible} suffix={stat.suffix} duration={1400} />
                      </span>
                      <span className="text-[7px] text-emerald-500 font-medium">{stat.change}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* === SECTION 2: Charts Row === */}
          <div ref={sec2.ref} className={`${mainBg} px-4 pb-3 space-y-3`}>
            <div className="grid grid-cols-2 gap-2">
              <div className={`${cardBg} rounded-xl p-3 border border-border`} style={{
                opacity: sec2.visible ? 1 : 0,
                transform: sec2.visible ? "translateX(0)" : "translateX(-30px)",
                transition: "opacity 700ms, transform 700ms cubic-bezier(0.16, 1, 0.3, 1)"
              }}>
                <h3 className="text-[11px] font-bold text-foreground mb-0.5">Weekly Activity</h3>
                <p className="text-[7px] text-muted-foreground mb-2">Applications, Interviews & Offers</p>
                <AreaChartMini visible={sec2.visible} />
              </div>
              <div className={`${cardBg} rounded-xl p-3 border border-border`} style={{
                opacity: sec2.visible ? 1 : 0,
                transform: sec2.visible ? "translateX(0)" : "translateX(30px)",
                transition: "opacity 700ms 100ms, transform 700ms 100ms cubic-bezier(0.16, 1, 0.3, 1)"
              }}>
                <h3 className="text-[11px] font-bold text-foreground mb-0.5">Application Status</h3>
                <p className="text-[7px] text-muted-foreground mb-2">Current distribution by stage</p>
                <DonutChart visible={sec2.visible} />
              </div>
            </div>
          </div>

          {/* === SECTION 3: Progress + Growth === */}
          <div ref={sec3.ref} className={`${mainBg} px-4 pb-3 space-y-3`}>
            <div className="grid grid-cols-2 gap-2">
              <div className={`${cardBg} rounded-xl p-3 border border-border`} style={{
                opacity: sec3.visible ? 1 : 0,
                transform: sec3.visible ? "translateY(0)" : "translateY(24px)",
                transition: "opacity 600ms, transform 600ms cubic-bezier(0.16, 1, 0.3, 1)"
              }}>
                <h3 className="text-[11px] font-bold text-foreground mb-0.5">Department Hiring Progress</h3>
                <p className="text-[7px] text-muted-foreground mb-2">Current vs Target</p>
                <div className="space-y-2.5">
                  {hiringProgress.map((item, i) => (
                    <div key={i} style={{
                      opacity: sec3.visible ? 1 : 0,
                      transform: sec3.visible ? "translateX(0)" : "translateX(-16px)",
                      transition: `opacity 400ms ${200 + i * 120}ms, transform 400ms ${200 + i * 120}ms`
                    }}>
                      <div className="flex items-center justify-between mb-0.5">
                        <span className="text-[9px] font-semibold text-foreground">{item.dept}</span>
                        <span className="text-[7px] text-muted-foreground">
                          {item.current} / {item.target}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex-1 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full ${item.color}`}
                            style={{
                              width: sec3.visible ? `${item.pct}%` : "0%",
                              transition: `width 900ms ${300 + i * 150}ms cubic-bezier(0.34, 1.56, 0.64, 1)`,
                            }}
                          />
                        </div>
                        <span className="text-[8px] font-medium text-foreground w-7 text-right">{item.pct}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className={`${cardBg} rounded-xl p-3 border border-border`} style={{
                opacity: sec3.visible ? 1 : 0,
                transform: sec3.visible ? "translateY(0)" : "translateY(24px)",
                transition: "opacity 600ms 100ms, transform 600ms 100ms cubic-bezier(0.16, 1, 0.3, 1)"
              }}>
                <h3 className="text-[11px] font-bold text-foreground mb-0.5">Monthly Growth</h3>
                <p className="text-[7px] text-muted-foreground mb-2">Application volume trend</p>
                <MiniBarChart visible={sec3.visible} />
                <div className="flex items-center justify-between mt-2 pt-2 border-t border-border">
                  <div>
                    <div className="text-[7px] text-muted-foreground uppercase">Current Month</div>
                    <div className="text-[14px] font-bold text-foreground">
                      <AnimatedNumber target={797} visible={sec3.visible} duration={1200} />
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-[9px] text-emerald-500 font-medium">
                    <TrendingUp className="w-3 h-3" />
                    +17.2%
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* === SECTION 4: Recent Activity === */}
          <div ref={sec4.ref} className={`${mainBg} px-4 pb-4 rounded-br-2xl`}>
            <div className={`${cardBg} rounded-xl p-3 border border-border`} style={{
              opacity: sec4.visible ? 1 : 0,
              transform: sec4.visible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 600ms, transform 600ms"
            }}>
              <div className="flex items-center justify-between mb-2">
                <div>
                  <h3 className="text-[11px] font-bold text-foreground">Recent Activity</h3>
                  <p className="text-[7px] text-emerald-500">+23% than last week</p>
                </div>
                <span className="text-[8px] text-blue-500 font-medium">View All Analytics</span>
              </div>
              <div className="space-y-2">
                {activityItems.map((item, i) => (
                  <div key={i} className="flex items-center gap-2" style={{
                    opacity: sec4.visible ? 1 : 0,
                    transform: sec4.visible ? "translateX(0)" : "translateX(-20px)",
                    transition: `opacity 400ms ${200 + i * 120}ms, transform 400ms ${200 + i * 120}ms cubic-bezier(0.16, 1, 0.3, 1)`
                  }}>
                    <span className={`w-2 h-2 rounded-full flex-shrink-0 ${item.dot}`} />
                    <div className="flex-1 min-w-0">
                      <div className="text-[9px] font-medium text-foreground truncate">{item.text}</div>
                      <div className="text-[7px] text-muted-foreground">{item.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
