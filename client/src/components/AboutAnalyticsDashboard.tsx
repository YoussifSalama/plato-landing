import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TrendingUp } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const overviewStats = [
  { label: "Total Jobs", value: 53, change: "+5%", suffix: "" },
  { label: "New Applicants", value: 2300, change: "+95%", suffix: "" },
  { label: "Interviews Scheduled", value: 2408, change: "+5%", suffix: "" },
  { label: "Hiring Success Rate", value: 87, change: "+5%", suffix: "%" },
];

const hiringProgress = [
  { dept: "Engineering", current: 45, target: 50, pct: 90, color: "#3b82f6" },
  { dept: "Sales", current: 32, target: 35, pct: 91, color: "#a855f7" },
  { dept: "Marketing", current: 28, target: 30, pct: 93, color: "#22c55e" },
  { dept: "Design", current: 18, target: 20, pct: 90, color: "#ef4444" },
];

const weeklyData = [
  { day: "Mon", apps: 35, interviews: 20 },
  { day: "Tue", apps: 42, interviews: 28 },
  { day: "Wed", apps: 38, interviews: 32 },
  { day: "Thu", apps: 65, interviews: 45 },
  { day: "Fri", apps: 55, interviews: 40 },
  { day: "Sat", apps: 48, interviews: 30 },
  { day: "Sun", apps: 30, interviews: 18 },
];

const donutSegments = [
  { label: "New", pct: 35, color: "#3b82f6" },
  { label: "Review", pct: 28, color: "#d946ef" },
  { label: "Interview", pct: 22, color: "#eab308" },
  { label: "Offer", pct: 10, color: "#22c55e" },
  { label: "Rejected", pct: 5, color: "#ef4444" },
];

const monthlyData = [
  { month: "Jan", value: 420 },
  { month: "Feb", value: 580 },
  { month: "Mar", value: 650 },
  { month: "Apr", value: 620 },
  { month: "May", value: 680 },
  { month: "Jun", value: 550 },
];

function CountUp({ target, suffix, triggerRef }: { target: number; suffix: string; triggerRef: React.RefObject<HTMLDivElement | null> }) {
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
        if (ref.current) ref.current.textContent = Math.round(obj.val).toLocaleString("en-US") + suffix;
      },
    });
    const st = ScrollTrigger.create({
      trigger: triggerRef.current,
      start: "top 85%",
      onEnter: () => tween.restart(),
      onEnterBack: () => tween.restart(),
    });
    return () => { st.kill(); tween.kill(); };
  }, [target, suffix, triggerRef]);
  return <span ref={ref}>0{suffix}</span>;
}

function WeeklyChart({ triggerRef }: { triggerRef: React.RefObject<HTMLDivElement | null> }) {
  const pathRef1 = useRef<SVGPathElement>(null);
  const pathRef2 = useRef<SVGPathElement>(null);
  const areaRef = useRef<SVGPathElement>(null);
  const [tooltip, setTooltip] = useState<{ x: number; y: number; day: string; apps: number; interviews: number } | null>(null);

  useEffect(() => {
    if (!triggerRef.current) return;
    const paths = [pathRef1.current, pathRef2.current].filter(Boolean) as SVGPathElement[];
    paths.forEach((p) => {
      const len = p.getTotalLength();
      gsap.set(p, { strokeDasharray: len, strokeDashoffset: len });
    });
    if (areaRef.current) gsap.set(areaRef.current, { opacity: 0 });
    const st = ScrollTrigger.create({
      trigger: triggerRef.current,
      start: "top 80%",
      onEnter: () => {
        paths.forEach((p, i) => {
          gsap.to(p, { strokeDashoffset: 0, duration: 1.2, delay: i * 0.15, ease: "power2.out" });
        });
        if (areaRef.current) gsap.to(areaRef.current, { opacity: 0.4, duration: 0.8, delay: 0.3 });
      },
    });
    return () => st.kill();
  }, [triggerRef]);

  const maxVal = 80;
  const padL = 30;
  const padR = 10;
  const padT = 5;
  const padB = 20;
  const w = 400;
  const h = 160;
  const chartW = w - padL - padR;
  const chartH = h - padT - padB;

  const toX = (i: number) => padL + (i / (weeklyData.length - 1)) * chartW;
  const toY = (v: number) => padT + chartH - (v / maxVal) * chartH;

  const pts1 = weeklyData.map((d, i) => `${toX(i)},${toY(d.apps)}`);
  const pts2 = weeklyData.map((d, i) => `${toX(i)},${toY(d.interviews)}`);

  const gridLines = [0, 20, 40, 60, 80];

  return (
    <div className="relative">
      <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-auto" onMouseLeave={() => setTooltip(null)}>
        {gridLines.map((v) => (
          <g key={v}>
            <line x1={padL} x2={w - padR} y1={toY(v)} y2={toY(v)} stroke="#1e3a5f" strokeWidth="0.5" strokeDasharray="3,3" />
            <text x={padL - 4} y={toY(v) + 3} textAnchor="end" className="fill-gray-500 text-[8px]">{v}</text>
          </g>
        ))}

        <defs>
          <linearGradient id="appAreaGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.02" />
          </linearGradient>
          <linearGradient id="intAreaGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f97316" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#f97316" stopOpacity="0.01" />
          </linearGradient>
        </defs>

        <path
          ref={areaRef}
          d={`M${pts1.join(" L")} L${toX(6)},${toY(0)} L${toX(0)},${toY(0)} Z`}
          fill="url(#appAreaGrad)"
        />

        <path ref={pathRef1} d={`M${pts1.join(" L")}`} fill="none" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path ref={pathRef2} d={`M${pts2.join(" L")}`} fill="none" stroke="#f97316" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />

        {weeklyData.map((d, i) => (
          <g key={d.day}>
            <text x={toX(i)} y={h - 4} textAnchor="middle" className="fill-gray-500 text-[9px]">{d.day}</text>
            <rect
              x={toX(i) - 15}
              y={padT}
              width={30}
              height={chartH}
              fill="transparent"
              className="cursor-pointer"
              onMouseEnter={() => setTooltip({ x: toX(i), y: toY(d.apps), day: d.day, apps: d.apps, interviews: d.interviews })}
            />
          </g>
        ))}

        {weeklyData.map((d, i) => (
          <g key={`dots-${i}`}>
            <circle cx={toX(i)} cy={toY(d.apps)} r="3" fill="#3b82f6" stroke="#0c1929" strokeWidth="1.5" />
            <circle cx={toX(i)} cy={toY(d.interviews)} r="3" fill="#f97316" stroke="#0c1929" strokeWidth="1.5" />
          </g>
        ))}
      </svg>

      {tooltip && (
        <div
          className="absolute pointer-events-none bg-[#1a2d44] border border-[#2a4060] rounded-lg px-3 py-2 shadow-xl z-10"
          style={{ left: `${(tooltip.x / w) * 100}%`, top: `${(tooltip.y / h) * 100 - 15}%`, transform: "translateX(-50%)" }}
        >
          <p className="text-[10px] text-gray-300 font-medium mb-1">{tooltip.day}</p>
          <p className="text-[9px] text-blue-400">Apps: {tooltip.apps}</p>
          <p className="text-[9px] text-orange-400">Interviews: {tooltip.interviews}</p>
        </div>
      )}
    </div>
  );
}

function DonutChart({ triggerRef }: { triggerRef: React.RefObject<HTMLDivElement | null> }) {
  const [hovered, setHovered] = useState<number | null>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!triggerRef.current || !svgRef.current) return;
    const circles = svgRef.current.querySelectorAll("circle[data-seg]");
    circles.forEach((c) => {
      gsap.set(c, { opacity: 0, scale: 0.8, transformOrigin: "50% 50%" });
    });
    const st = ScrollTrigger.create({
      trigger: triggerRef.current,
      start: "top 80%",
      onEnter: () => {
        circles.forEach((c, i) => {
          gsap.to(c, { opacity: 1, scale: 1, duration: 0.6, delay: i * 0.1, ease: "back.out(1.5)" });
        });
      },
    });
    return () => st.kill();
  }, [triggerRef]);

  let cumulative = 0;
  const radius = 42;
  const circumference = 2 * Math.PI * radius;

  return (
    <div className="flex items-center gap-4">
      <svg ref={svgRef} viewBox="0 0 120 120" className="w-28 h-28 flex-shrink-0">
        <circle cx="60" cy="60" r={radius} fill="none" stroke="#1a2a3d" strokeWidth="12" />
        {donutSegments.map((seg, idx) => {
          const offset = circumference * (1 - cumulative / 100);
          const dashLen = circumference * (seg.pct / 100);
          cumulative += seg.pct;
          return (
            <circle
              key={seg.label}
              data-seg
              cx="60" cy="60" r={radius}
              fill="none"
              stroke={seg.color}
              strokeWidth={hovered === idx ? "14" : "12"}
              strokeDasharray={`${dashLen} ${circumference - dashLen}`}
              strokeDashoffset={offset}
              strokeLinecap="round"
              transform="rotate(-90 60 60)"
              className="transition-all duration-200 cursor-pointer"
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
            />
          );
        })}
      </svg>
      <div className="space-y-1.5">
        {donutSegments.map((seg, idx) => (
          <div
            key={seg.label}
            className={`flex items-center gap-2 cursor-pointer transition-opacity duration-200 ${hovered !== null && hovered !== idx ? "opacity-40" : "opacity-100"}`}
            onMouseEnter={() => setHovered(idx)}
            onMouseLeave={() => setHovered(null)}
          >
            <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: seg.color }} />
            <span className="text-[11px] text-gray-400 w-16">{seg.label}</span>
            <span className="text-[11px] text-white font-semibold">{seg.pct}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function BarChart({ triggerRef }: { triggerRef: React.RefObject<HTMLDivElement | null> }) {
  const barsRef = useRef<HTMLDivElement>(null);
  const [hoveredBar, setHoveredBar] = useState<number | null>(null);

  useEffect(() => {
    if (!triggerRef.current || !barsRef.current) return;
    const bars = barsRef.current.querySelectorAll("[data-bar]");
    bars.forEach((b) => gsap.set(b, { scaleY: 0, transformOrigin: "bottom" }));
    const st = ScrollTrigger.create({
      trigger: triggerRef.current,
      start: "top 80%",
      onEnter: () => {
        bars.forEach((b, i) => {
          gsap.to(b, { scaleY: 1, duration: 0.6, delay: i * 0.08, ease: "back.out(1.2)" });
        });
      },
    });
    return () => st.kill();
  }, [triggerRef]);

  const maxVal = 800;

  return (
    <div>
      <div className="flex items-center justify-between mb-1">
        <div className="flex items-end gap-1">
          {[800, 600, 400, 200, 0].map((v) => (
            <div key={v} className="hidden" />
          ))}
        </div>
      </div>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-5 w-8 flex flex-col justify-between">
          {[800, 600, 400, 200].map((v) => (
            <span key={v} className="text-[8px] text-gray-500 text-right pr-1">{v}</span>
          ))}
        </div>
        <div ref={barsRef} className="flex items-end gap-2 h-28 ml-8">
          {monthlyData.map((d, i) => (
            <div key={d.month} className="flex-1 flex flex-col items-center relative">
              <div className="w-full relative" style={{ height: "112px" }}>
                <div
                  data-bar
                  className={`absolute bottom-0 w-full rounded-t-sm transition-colors duration-200 ${hoveredBar === i ? "bg-blue-400" : "bg-blue-500"}`}
                  style={{ height: `${(d.value / maxVal) * 100}%` }}
                  onMouseEnter={() => setHoveredBar(i)}
                  onMouseLeave={() => setHoveredBar(null)}
                />
                {hoveredBar === i && (
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#1a2d44] border border-[#2a4060] rounded px-2 py-0.5 text-[9px] text-white whitespace-nowrap z-10 shadow-lg">
                    {d.value}
                  </div>
                )}
              </div>
              <span className="text-[9px] text-gray-500 mt-1">{d.month}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function HiringBars({ triggerRef }: { triggerRef: React.RefObject<HTMLDivElement | null> }) {
  const barsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!triggerRef.current || !barsRef.current) return;
    const fills = barsRef.current.querySelectorAll("[data-fill]");
    fills.forEach((f) => gsap.set(f, { width: 0 }));
    const st = ScrollTrigger.create({
      trigger: triggerRef.current,
      start: "top 80%",
      onEnter: () => {
        fills.forEach((f, i) => {
          const target = f.getAttribute("data-width") || "0%";
          gsap.to(f, { width: target, duration: 1, delay: i * 0.15, ease: "power2.out" });
        });
      },
    });
    return () => st.kill();
  }, [triggerRef]);

  return (
    <div ref={barsRef} className="space-y-4">
      {hiringProgress.map((dept) => (
        <div key={dept.dept}>
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[12px] text-white font-medium">{dept.dept}</span>
            <div className="flex items-center gap-3">
              <span className="text-[11px] text-gray-400">{dept.current} / {dept.target}</span>
              <span className="text-[11px] text-white font-semibold">{dept.pct}%</span>
            </div>
          </div>
          <div className="h-2.5 bg-[#1a2a3d] rounded-full overflow-hidden">
            <div
              data-fill
              data-width={`${dept.pct}%`}
              className="h-full rounded-full"
              style={{ backgroundColor: dept.color }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default function AboutAnalyticsDashboard() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="bg-[#0c1929] text-foreground p-5 sm:p-6 space-y-4 h-full" data-testid="about-analytics">
      <div className="bg-[#111d2e] rounded-xl p-5 border border-[#1a2d44]">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-semibold text-gray-200">Overview Statistics</h3>
          <span className="text-[11px] text-blue-400 cursor-pointer hover:text-blue-300 transition-colors">View All</span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {overviewStats.map((stat) => (
            <div key={stat.label} data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, '-')}`}>
              <p className="text-[11px] text-gray-400 flex items-center gap-1 mb-1">
                {stat.label} <TrendingUp className="w-3 h-3 text-gray-500" />
              </p>
              <div className="flex items-baseline gap-2">
                <p className="text-2xl font-bold text-white">
                  <CountUp target={stat.value} suffix={stat.suffix} triggerRef={containerRef} />
                </p>
                <span className="text-[11px] text-emerald-400 font-medium">{stat.change}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
        <div className="sm:col-span-3 bg-[#111d2e] rounded-xl p-5 border border-[#1a2d44]">
          <div className="flex items-center justify-between mb-1">
            <div>
              <h3 className="text-sm font-semibold text-gray-200">Weekly Activity</h3>
              <p className="text-[10px] text-gray-500">Applications, Interviews & Offers</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1.5 text-[10px] text-gray-400">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-500 inline-block" /> Applications
              </span>
              <span className="flex items-center gap-1.5 text-[10px] text-gray-400">
                <span className="w-2.5 h-2.5 rounded-full bg-orange-500 inline-block" /> Interviews
              </span>
            </div>
          </div>
          <WeeklyChart triggerRef={containerRef} />
        </div>

        <div className="sm:col-span-2 bg-[#111d2e] rounded-xl p-5 border border-[#1a2d44]">
          <h3 className="text-sm font-semibold text-gray-200 mb-1">Application Status</h3>
          <p className="text-[10px] text-gray-500 mb-4">Current distribution by stage</p>
          <DonutChart triggerRef={containerRef} />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-[#111d2e] rounded-xl p-5 border border-[#1a2d44]">
          <h3 className="text-sm font-semibold text-gray-200 mb-1">Department Hiring Progress</h3>
          <p className="text-[10px] text-gray-500 mb-4">Current vs Target</p>
          <HiringBars triggerRef={containerRef} />
        </div>

        <div className="bg-[#111d2e] rounded-xl p-5 border border-[#1a2d44]">
          <h3 className="text-sm font-semibold text-gray-200 mb-1">Monthly Growth</h3>
          <p className="text-[10px] text-gray-500 mb-3">Application volume trend</p>
          <BarChart triggerRef={containerRef} />
          <div className="mt-3 pt-2 border-t border-[#1a2d44] text-center">
            <span className="text-[9px] text-gray-500 uppercase tracking-wider font-medium">Current Month</span>
          </div>
        </div>
      </div>
    </div>
  );
}
