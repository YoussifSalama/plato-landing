import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
        if (areaRef.current) gsap.to(areaRef.current, { opacity: 0.5, duration: 0.8, delay: 0.3 });
      },
    });
    return () => st.kill();
  }, [triggerRef]);

  const maxVal = 80;
  const padL = 28;
  const padR = 8;
  const padT = 8;
  const padB = 22;
  const w = 380;
  const h = 180;
  const chartW = w - padL - padR;
  const chartH = h - padT - padB;

  const toX = (i: number) => padL + (i / (weeklyData.length - 1)) * chartW;
  const toY = (v: number) => padT + chartH - (v / maxVal) * chartH;

  const smoothPath = (points: { x: number; y: number }[]) => {
    if (points.length < 2) return "";
    let d = `M${points[0].x},${points[0].y}`;
    for (let i = 0; i < points.length - 1; i++) {
      const p0 = points[Math.max(0, i - 1)];
      const p1 = points[i];
      const p2 = points[i + 1];
      const p3 = points[Math.min(points.length - 1, i + 2)];
      const cp1x = p1.x + (p2.x - p0.x) / 6;
      const cp1y = p1.y + (p2.y - p0.y) / 6;
      const cp2x = p2.x - (p3.x - p1.x) / 6;
      const cp2y = p2.y - (p3.y - p1.y) / 6;
      d += ` C${cp1x},${cp1y} ${cp2x},${cp2y} ${p2.x},${p2.y}`;
    }
    return d;
  };

  const appPoints = weeklyData.map((d, i) => ({ x: toX(i), y: toY(d.apps) }));
  const intPoints = weeklyData.map((d, i) => ({ x: toX(i), y: toY(d.interviews) }));

  const appPath = smoothPath(appPoints);
  const intPath = smoothPath(intPoints);

  const areaPath = appPath + ` L${toX(6)},${toY(0)} L${toX(0)},${toY(0)} Z`;

  const gridLines = [0, 20, 40, 60, 80];

  return (
    <div className="relative">
      <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-auto" onMouseLeave={() => setTooltip(null)}>
        {gridLines.map((v) => (
          <g key={v}>
            <line x1={padL} x2={w - padR} y1={toY(v)} y2={toY(v)} stroke="#1a2d44" strokeWidth="0.5" strokeDasharray="4,4" />
            <text x={padL - 5} y={toY(v) + 3} textAnchor="end" className="fill-gray-600 text-[8px]">{v}</text>
          </g>
        ))}

        <defs>
          <linearGradient id="appAreaGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.02" />
          </linearGradient>
        </defs>

        <path ref={areaRef} d={areaPath} fill="url(#appAreaGrad)" />
        <path ref={pathRef1} d={appPath} fill="none" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path ref={pathRef2} d={intPath} fill="none" stroke="#f97316" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />

        {weeklyData.map((d, i) => (
          <g key={d.day}>
            <text x={toX(i)} y={h - 5} textAnchor="middle" className="fill-gray-500 text-[9px]">{d.day}</text>
            <rect
              x={toX(i) - 20}
              y={padT}
              width={40}
              height={chartH}
              fill="transparent"
              className="cursor-pointer"
              onMouseEnter={() => setTooltip({ x: toX(i), y: toY(d.apps), day: d.day, apps: d.apps, interviews: d.interviews })}
            />
          </g>
        ))}

        {weeklyData.map((d, i) => (
          <g key={`dots-${i}`}>
            <circle cx={toX(i)} cy={toY(d.apps)} r="3" fill="#3b82f6" stroke="#111d2e" strokeWidth="2" />
            <circle cx={toX(i)} cy={toY(d.interviews)} r="3" fill="#f97316" stroke="#111d2e" strokeWidth="2" />
          </g>
        ))}
      </svg>

      {tooltip && (
        <div
          className="absolute pointer-events-none bg-[#162436] border border-[#253d56] rounded-lg px-3 py-2 shadow-xl z-10"
          style={{ left: `${(tooltip.x / w) * 100}%`, top: `${(tooltip.y / h) * 100 - 18}%`, transform: "translateX(-50%)" }}
        >
          <p className="text-[10px] text-gray-200 font-semibold mb-1">{tooltip.day}</p>
          <p className="text-[9px] text-blue-400">Applications: {tooltip.apps}</p>
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
  const radius = 50;
  const circumference = 2 * Math.PI * radius;

  return (
    <div className="flex items-center justify-between gap-6 pt-2">
      <svg ref={svgRef} viewBox="0 0 130 130" className="w-32 h-32 flex-shrink-0">
        <circle cx="65" cy="65" r={radius} fill="none" stroke="#1a2a3d" strokeWidth="16" />
        {donutSegments.map((seg, idx) => {
          const offset = circumference * (1 - cumulative / 100);
          const dashLen = circumference * (seg.pct / 100);
          cumulative += seg.pct;
          return (
            <circle
              key={seg.label}
              data-seg
              cx="65" cy="65" r={radius}
              fill="none"
              stroke={seg.color}
              strokeWidth={hovered === idx ? "18" : "16"}
              strokeDasharray={`${dashLen} ${circumference - dashLen}`}
              strokeDashoffset={offset}
              strokeLinecap="round"
              transform="rotate(-90 65 65)"
              className="transition-all duration-200 cursor-pointer"
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
            />
          );
        })}
      </svg>
      <div className="space-y-2.5 flex-shrink-0">
        {donutSegments.map((seg, idx) => (
          <div
            key={seg.label}
            className={`flex items-center gap-3 cursor-pointer transition-opacity duration-200 ${hovered !== null && hovered !== idx ? "opacity-40" : "opacity-100"}`}
            onMouseEnter={() => setHovered(idx)}
            onMouseLeave={() => setHovered(null)}
          >
            <span className="w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: seg.color }} />
            <span className="text-[12px] text-gray-400 w-[70px]">{seg.label}</span>
            <span className="text-[13px] text-white font-bold">{seg.pct}%</span>
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
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-[18px] w-[28px] flex flex-col justify-between">
          {[800, 600, 400, 200].map((v) => (
            <span key={v} className="text-[9px] text-gray-500 text-right pr-1">{v}</span>
          ))}
        </div>
        <div ref={barsRef} className="flex items-end gap-3 h-32 ml-[32px]">
          {monthlyData.map((d, i) => (
            <div key={d.month} className="flex-1 flex flex-col items-center relative">
              <div className="w-full relative" style={{ height: "128px" }}>
                <div
                  data-bar
                  className={`absolute bottom-0 w-full rounded-t transition-colors duration-200 ${hoveredBar === i ? "bg-[#45a5f5]" : "bg-[#2196f3]"}`}
                  style={{ height: `${(d.value / maxVal) * 100}%` }}
                  onMouseEnter={() => setHoveredBar(i)}
                  onMouseLeave={() => setHoveredBar(null)}
                />
                {hoveredBar === i && (
                  <div className="absolute -top-7 left-1/2 -translate-x-1/2 bg-[#162436] border border-[#253d56] rounded px-2 py-1 text-[10px] text-white whitespace-nowrap z-10 shadow-lg font-semibold">
                    {d.value}
                  </div>
                )}
              </div>
              <span className="text-[10px] text-gray-500 mt-1.5">{d.month}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4 pt-3 border-t border-[#1a2d44] text-center">
        <span className="text-[10px] text-gray-500 uppercase tracking-[0.15em] font-semibold">Current Month</span>
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
    <div ref={barsRef} className="space-y-5">
      {hiringProgress.map((dept) => (
        <div key={dept.dept}>
          <div className="flex items-center justify-between mb-2">
            <span className="text-[13px] text-white font-semibold">{dept.dept}</span>
            <div className="flex items-center gap-4">
              <span className="text-[12px] text-gray-400">{dept.current} / {dept.target}</span>
              <span className="text-[13px] text-white font-bold">{dept.pct}%</span>
            </div>
          </div>
          <div className="h-3 bg-[#1a2a3d] rounded-full overflow-hidden">
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
    <div ref={containerRef} className="bg-[#0d1117] text-foreground p-5 sm:p-6 h-full flex flex-col" data-testid="about-analytics">
      <div className="flex justify-center gap-2 mb-5">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className={`w-2 h-2 rounded-full ${i === 0 ? "bg-gray-400" : "bg-gray-700"}`} />
        ))}
      </div>

      <div className="space-y-5 flex-1">
        <div className="bg-[#111d2e] rounded-xl p-5 border border-[#1a2d44]/60">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-[15px] font-bold text-gray-100">Overview Statistics</h3>
            <span className="text-[12px] text-[#2dd4bf] cursor-pointer hover:text-[#5eead4] transition-colors font-medium">View All</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {overviewStats.map((stat) => (
              <div key={stat.label} data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, '-')}`}>
                <p className="text-[11px] text-gray-500 flex items-center gap-1 mb-1.5">
                  {stat.label} <span className="text-gray-600">↑</span>
                </p>
                <div className="flex items-baseline gap-2">
                  <p className="text-[22px] font-bold text-white leading-none">
                    <CountUp target={stat.value} suffix={stat.suffix} triggerRef={containerRef} />
                  </p>
                  <span className="text-[11px] text-emerald-400 font-medium">{stat.change}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-5 gap-5">
          <div className="sm:col-span-3 bg-[#111d2e] rounded-xl p-5 border border-[#1a2d44]/60">
            <div className="flex items-center justify-between mb-2">
              <div>
                <h3 className="text-[15px] font-bold text-gray-100">Weekly Activity</h3>
                <p className="text-[10px] text-gray-500 mt-0.5">Applications, Interviews & Offers</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1.5 text-[11px] text-gray-400">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-500 inline-block" /> Applications
                </span>
                <span className="flex items-center gap-1.5 text-[11px] text-gray-400">
                  <span className="w-2.5 h-2.5 rounded-full bg-orange-500 inline-block" /> Interviews
                </span>
              </div>
            </div>
            <WeeklyChart triggerRef={containerRef} />
          </div>

          <div className="sm:col-span-2 bg-[#111d2e] rounded-xl p-5 border border-[#1a2d44]/60">
            <h3 className="text-[15px] font-bold text-gray-100">Application Status</h3>
            <p className="text-[10px] text-gray-500 mt-0.5 mb-3">Current distribution by stage</p>
            <DonutChart triggerRef={containerRef} />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="bg-[#111d2e] rounded-xl p-5 border border-[#1a2d44]/60">
            <h3 className="text-[15px] font-bold text-gray-100">Department Hiring Progress</h3>
            <p className="text-[10px] text-gray-500 mt-0.5 mb-5">Current vs Target</p>
            <HiringBars triggerRef={containerRef} />
          </div>

          <div className="bg-[#111d2e] rounded-xl p-5 border border-[#1a2d44]/60">
            <h3 className="text-[15px] font-bold text-gray-100">Monthly Growth</h3>
            <p className="text-[10px] text-gray-500 mt-0.5 mb-4">Application volume trend</p>
            <BarChart triggerRef={containerRef} />
          </div>
        </div>
      </div>
    </div>
  );
}
