import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TrendingUp } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const overviewStats = [
  { label: "Total Jobs", value: 53, change: "+5%", prefix: "", suffix: "" },
  { label: "New Applicants", value: 2900, change: "+95%", prefix: "", suffix: "" },
  { label: "Interviews Scheduled", value: 2408, change: "+8%", prefix: "", suffix: "" },
];

const hiringProgress = [
  { dept: "Engineering", current: 45, target: 50, pct: 90, color: "#3b82f6" },
  { dept: "Sales", current: 32, target: 35, pct: 91, color: "#3b82f6" },
  { dept: "Marketing", current: 29, target: 30, pct: 93, color: "#22c55e" },
  { dept: "Design", current: 18, target: 20, pct: 90, color: "#ef4444" },
];

const weeklyData = [
  { day: "Mon", apps: 60, interviews: 30, offers: 10 },
  { day: "Tue", apps: 75, interviews: 45, offers: 15 },
  { day: "Wed", apps: 55, interviews: 50, offers: 20 },
  { day: "Thu", apps: 85, interviews: 60, offers: 18 },
  { day: "Fri", apps: 70, interviews: 55, offers: 25 },
  { day: "Sat", apps: 45, interviews: 35, offers: 12 },
  { day: "Sun", apps: 30, interviews: 20, offers: 8 },
];

const donutSegments = [
  { label: "New", pct: 35, color: "#3b82f6" },
  { label: "Review", pct: 28, color: "#f97316" },
  { label: "Interview", pct: 22, color: "#eab308" },
  { label: "Offer", pct: 10, color: "#22c55e" },
  { label: "Rejected", pct: 5, color: "#ef4444" },
];

function CountUp({ target, triggerRef }: { target: number; triggerRef: React.RefObject<HTMLDivElement | null> }) {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    if (!ref.current || !triggerRef.current) return;
    const obj = { val: 0 };
    const tween = gsap.to(obj, {
      val: target,
      duration: 1.4,
      ease: "power3.out",
      paused: true,
      onUpdate: () => {
        if (ref.current) ref.current.textContent = Math.round(obj.val).toLocaleString("en-US");
      },
    });
    const st = ScrollTrigger.create({
      trigger: triggerRef.current,
      start: "top 85%",
      onEnter: () => tween.restart(),
      onEnterBack: () => tween.restart(),
    });
    return () => { st.kill(); tween.kill(); };
  }, [target, triggerRef]);
  return <span ref={ref}>0</span>;
}

function WeeklyChart({ triggerRef }: { triggerRef: React.RefObject<HTMLDivElement | null> }) {
  const pathRef1 = useRef<SVGPathElement>(null);
  const pathRef2 = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (!triggerRef.current) return;
    const paths = [pathRef1.current, pathRef2.current].filter(Boolean) as SVGPathElement[];
    paths.forEach((p) => {
      const len = p.getTotalLength();
      gsap.set(p, { strokeDasharray: len, strokeDashoffset: len });
    });
    const st = ScrollTrigger.create({
      trigger: triggerRef.current,
      start: "top 80%",
      onEnter: () => {
        paths.forEach((p, i) => {
          gsap.to(p, { strokeDashoffset: 0, duration: 1.2, delay: i * 0.2, ease: "power2.out" });
        });
      },
    });
    return () => st.kill();
  }, [triggerRef]);

  const maxVal = 90;
  const w = 280;
  const h = 100;
  const pts1 = weeklyData.map((d, i) => `${(i / 6) * w},${h - (d.apps / maxVal) * h}`);
  const pts2 = weeklyData.map((d, i) => `${(i / 6) * w},${h - (d.interviews / maxVal) * h}`);

  return (
    <svg viewBox={`0 0 ${w} ${h + 10}`} className="w-full h-auto">
      <path ref={pathRef1} d={`M${pts1.join(" L")}`} fill="none" stroke="#3b82f6" strokeWidth="2" />
      <path ref={pathRef2} d={`M${pts2.join(" L")}`} fill="none" stroke="#f97316" strokeWidth="2" />
      <defs>
        <linearGradient id="area1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={`M${pts1.join(" L")} L${w},${h + 10} L0,${h + 10} Z`} fill="url(#area1)" opacity="0.5" />
      {weeklyData.map((d, i) => (
        <text key={d.day} x={(i / 6) * w} y={h + 10} textAnchor="middle" className="fill-gray-400 dark:fill-gray-500 text-[7px]">{d.day}</text>
      ))}
    </svg>
  );
}

function DonutChart() {
  let cumulative = 0;
  const radius = 36;
  const circumference = 2 * Math.PI * radius;

  return (
    <svg viewBox="0 0 100 100" className="w-20 h-20">
      {donutSegments.map((seg) => {
        const offset = circumference * (1 - cumulative / 100);
        const dashLen = circumference * (seg.pct / 100);
        cumulative += seg.pct;
        return (
          <circle
            key={seg.label}
            cx="50" cy="50" r={radius}
            fill="none"
            stroke={seg.color}
            strokeWidth="8"
            strokeDasharray={`${dashLen} ${circumference - dashLen}`}
            strokeDashoffset={offset}
            transform="rotate(-90 50 50)"
          />
        );
      })}
    </svg>
  );
}

const shellBg = "bg-gray-100 dark:bg-[#0c1929]";
const cardBg = "bg-white dark:bg-[#111d2e]";
const headingText = "text-gray-800 dark:text-gray-300";
const labelText = "text-gray-500 dark:text-gray-400";
const valueText = "text-gray-900 dark:text-white";
const progressTrack = "bg-gray-200 dark:bg-[#1a2a3d]";
const barInactive = "bg-gray-200 dark:bg-[#1e3a5f]";

export default function AboutAnalyticsDashboard() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className={`${shellBg} text-foreground p-4 sm:p-5 space-y-4`} data-testid="about-analytics">
      {/* Overview Statistics */}
      <div className={`${cardBg} rounded-lg p-4`}>
        <h3 className={`text-xs font-semibold mb-3 ${headingText}`}>Overview Statistics</h3>
        <div className="grid grid-cols-3 gap-3">
          {overviewStats.map((stat) => (
            <div key={stat.label}>
              <p className={`text-[10px] ${labelText} flex items-center gap-1`}>
                {stat.label} <TrendingUp className="w-2.5 h-2.5" />
              </p>
              <p className={`text-lg font-bold ${valueText}`}>
                <CountUp target={stat.value} triggerRef={containerRef} />
              </p>
              <span className="text-[9px] text-emerald-500 dark:text-emerald-400">{stat.change}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Weekly Activity + Application Status */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className={`sm:col-span-2 ${cardBg} rounded-lg p-4`}>
          <div className="flex items-center justify-between mb-3">
            <h3 className={`text-xs font-semibold ${headingText}`}>Weekly Activity</h3>
            <div className="flex items-center gap-3">
              <span className={`flex items-center gap-1 text-[9px] ${labelText}`}>
                <span className="w-2 h-2 rounded-full bg-blue-500 inline-block" /> Applications
              </span>
              <span className={`flex items-center gap-1 text-[9px] ${labelText}`}>
                <span className="w-2 h-2 rounded-full bg-orange-500 inline-block" /> Interviews
              </span>
            </div>
          </div>
          <WeeklyChart triggerRef={containerRef} />
        </div>

        <div className={`${cardBg} rounded-lg p-4`}>
          <h3 className={`text-xs font-semibold ${headingText} mb-2`}>Application Status</h3>
          <p className={`text-[9px] ${labelText} mb-3`}>Current distribution by stage</p>
          <div className="flex justify-center">
            <DonutChart />
          </div>
        </div>
      </div>

      {/* Department Hiring Progress + Monthly Growth */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className={`sm:col-span-2 ${cardBg} rounded-lg p-4`}>
          <h3 className={`text-xs font-semibold ${headingText} mb-1`}>Department Hiring Progress</h3>
          <p className={`text-[9px] ${labelText} mb-3`}>Current vs Target</p>
          <div className="space-y-3">
            {hiringProgress.map((dept) => (
              <div key={dept.dept} className="flex items-center gap-3">
                <span className={`text-[10px] ${labelText} w-20 flex-shrink-0`}>{dept.dept}</span>
                <div className={`flex-1 h-2 ${progressTrack} rounded-full overflow-hidden`}>
                  <div
                    className="h-full rounded-full transition-all duration-1000"
                    style={{ width: `${dept.pct}%`, backgroundColor: dept.color }}
                  />
                </div>
                <span className={`text-[9px] ${labelText} w-10 text-right flex-shrink-0`}>{dept.current} / {dept.target}</span>
                <span className={`text-[9px] ${labelText} w-8 text-right flex-shrink-0`}>{dept.pct}%</span>
              </div>
            ))}
          </div>
        </div>

        <div className={`${cardBg} rounded-lg p-4`}>
          <h3 className={`text-xs font-semibold ${headingText} mb-1`}>Monthly Growth</h3>
          <p className={`text-[9px] ${labelText} mb-3`}>Application volume trend</p>
          <div className="flex items-end gap-1 h-16">
            {[40, 55, 70, 60, 80, 95, 75, 90, 85, 100, 70, 88].map((v, i) => (
              <div
                key={i}
                className={`flex-1 rounded-sm ${i === 11 ? "bg-blue-500" : barInactive}`}
                style={{ height: `${v}%` }}
              />
            ))}
          </div>
          <div className="flex justify-between mt-1">
            <span className={`text-[8px] ${labelText}`}>Jan</span>
            <span className={`text-[8px] ${labelText}`}>Dec</span>
          </div>
        </div>
      </div>
    </div>
  );
}
