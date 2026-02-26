"use client";
import { useEffect, useRef, useLayoutEffect } from "react";
import { useI18n } from "@/lib/i18n";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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
  TrendingUp,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

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
  { label: "Total Jobs", numVal: 53, change: "+5%" },
  { label: "New Applicants", numVal: 2300, change: "+95%" },
  { label: "Interviews Scheduled", numVal: 2408, change: "+8%" },
  { label: "Hiring Success Rate", numVal: 87, change: "+6%", suffix: "%" },
];

const donutSegments = [
  { label: "New", pct: 35, color: "#3b82f6" },
  { label: "Review", pct: 28, color: "#f97316" },
  { label: "Interview", pct: 22, color: "#eab308" },
  { label: "Offer", pct: 10, color: "#22c55e" },
  { label: "Rejected", pct: 5, color: "#ef4444" },
];

function CountUpNumber({ target, suffix = "", triggerRef }: { target: number; suffix?: string; triggerRef: React.RefObject<HTMLDivElement | null> }) {
  const numRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!numRef.current || !triggerRef.current) return;
    const obj = { val: 0 };
    const tween = gsap.to(obj, {
      val: target,
      duration: 1.6,
      ease: "power3.out",
      paused: true,
      onUpdate: () => {
        if (numRef.current) {
          numRef.current.textContent = Math.round(obj.val).toLocaleString("en-US") + suffix;
        }
      },
    });

    const st = ScrollTrigger.create({
      trigger: triggerRef.current,
      start: "top 85%",
      end: "bottom 15%",
      onEnter: () => tween.restart(),
      onEnterBack: () => tween.restart(),
      onLeave: () => {
        tween.pause(0);
        if (numRef.current) numRef.current.textContent = "0" + suffix;
      },
      onLeaveBack: () => {
        tween.pause(0);
        if (numRef.current) numRef.current.textContent = "0" + suffix;
      },
    });

    return () => {
      tween.kill();
      st.kill();
    };
  }, [target, suffix, triggerRef]);

  return <span ref={numRef}>0{suffix}</span>;
}

export default function SmartJobMockup() {
  const { lang } = useI18n();
  const isRtl = lang === "ar";

  const containerRef = useRef<HTMLDivElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const topBarRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const statCardsRef = useRef<HTMLDivElement>(null);
  const overviewRef = useRef<HTMLDivElement>(null);
  const chartsRef = useRef<HTMLDivElement>(null);
  const weeklyCardRef = useRef<HTMLDivElement>(null);
  const donutCardRef = useRef<HTMLDivElement>(null);
  const donutRef = useRef<SVGSVGElement>(null);
  const areaPathRef1 = useRef<SVGPathElement>(null);
  const areaPathRef2 = useRef<SVGPathElement>(null);
  const areaFillRef1 = useRef<SVGPathElement>(null);
  const areaFillRef2 = useRef<SVGPathElement>(null);

  useLayoutEffect(() => {
    if (!containerRef.current) return;
    const ctx = gsap.context(() => {
      const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReduced) return;

      gsap.set(sidebarRef.current, { x: isRtl ? 120 : -120, opacity: 0 });
      gsap.set(topBarRef.current, { y: -50, opacity: 0 });
      gsap.set(headerRef.current, { y: 40, opacity: 0, scale: 0.9 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play reverse play reverse",
        },
      });

      tl.to(sidebarRef.current, {
        x: 0, opacity: 1, duration: 0.8,
        ease: "back.out(1.4)",
      }, 0);

      tl.to(topBarRef.current, {
        y: 0, opacity: 1, duration: 0.6,
        ease: "power3.out",
      }, 0.15);

      tl.to(headerRef.current, {
        y: 0, opacity: 1, scale: 1, duration: 0.7,
        ease: "back.out(1.7)",
      }, 0.25);

      const cards = statCardsRef.current?.children;
      if (cards) {
        gsap.set(cards, { y: -40, opacity: 0, scale: 0.7 });
        tl.to(cards, {
          y: 0, opacity: 1, scale: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: "elastic.out(1.2, 0.5)",
        }, 0.35);
      }

      gsap.set(overviewRef.current, { y: 30, opacity: 0, scaleY: 0.8 });
      tl.to(overviewRef.current, {
        y: 0, opacity: 1, scaleY: 1, duration: 0.6,
        ease: "power3.out",
      }, 0.7);

      const overviewItems = overviewRef.current?.querySelectorAll("[data-overview-item]");
      if (overviewItems) {
        gsap.set(overviewItems, { y: 20, opacity: 0 });
        tl.to(overviewItems, {
          y: 0, opacity: 1, duration: 0.5,
          stagger: 0.1,
          ease: "power2.out",
        }, 0.85);
      }

      gsap.set(weeklyCardRef.current, { x: isRtl ? 80 : -80, opacity: 0, rotateY: isRtl ? -15 : 15, scale: 0.85 });
      gsap.set(donutCardRef.current, { x: isRtl ? -80 : 80, opacity: 0, rotateY: isRtl ? 15 : -15, scale: 0.85 });

      tl.to(weeklyCardRef.current, {
        x: 0, opacity: 1, rotateY: 0, scale: 1, duration: 0.9,
        ease: "power3.out",
      }, 1.0);

      tl.to(donutCardRef.current, {
        x: 0, opacity: 1, rotateY: 0, scale: 1, duration: 0.9,
        ease: "power3.out",
      }, 1.1);

      if (areaPathRef1.current) {
        const len1 = areaPathRef1.current.getTotalLength?.() || 500;
        gsap.set(areaPathRef1.current, { strokeDasharray: len1, strokeDashoffset: len1 });
        gsap.set(areaFillRef1.current, { opacity: 0 });
        tl.to(areaPathRef1.current, { strokeDashoffset: 0, duration: 1.2, ease: "power2.inOut" }, 1.2);
        tl.to(areaFillRef1.current, { opacity: 1, duration: 0.8, ease: "power1.in" }, 1.5);
      }
      if (areaPathRef2.current) {
        const len2 = areaPathRef2.current.getTotalLength?.() || 500;
        gsap.set(areaPathRef2.current, { strokeDasharray: len2, strokeDashoffset: len2 });
        gsap.set(areaFillRef2.current, { opacity: 0 });
        tl.to(areaPathRef2.current, { strokeDashoffset: 0, duration: 1.2, ease: "power2.inOut" }, 1.3);
        tl.to(areaFillRef2.current, { opacity: 1, duration: 0.8, ease: "power1.in" }, 1.6);
      }

      const donutCircles = donutRef.current?.querySelectorAll("circle");
      if (donutCircles) {
        const circumference = 2 * Math.PI * 40;
        donutCircles.forEach((c) => {
          gsap.set(c, { strokeDashoffset: circumference, attr: { "stroke-opacity": 0 } });
        });
        tl.to(donutCircles, {
          strokeDashoffset: 0,
          attr: { "stroke-opacity": 1 },
          duration: 1.4,
          stagger: 0.15,
          ease: "power2.out",
        }, 1.2);
        tl.fromTo(donutRef.current, { rotation: -90, transformOrigin: "center center" },
          { rotation: 0, duration: 1.5, ease: "power2.out" }, 1.1);
      }

      const donutLegend = donutCardRef.current?.querySelectorAll("[data-legend-item]");
      if (donutLegend) {
        gsap.set(donutLegend, { x: 20, opacity: 0 });
        tl.to(donutLegend, {
          x: 0, opacity: 1, duration: 0.4,
          stagger: 0.08,
          ease: "power2.out",
        }, 1.5);
      }

      const navItems = sidebarRef.current?.querySelectorAll("[data-nav-item]");
      if (navItems) {
        gsap.set(navItems, { x: isRtl ? 20 : -20, opacity: 0 });
        tl.to(navItems, {
          x: 0, opacity: 1, duration: 0.4,
          stagger: 0.06,
          ease: "power2.out",
        }, 0.4);
      }

      const sidebarBottom = sidebarRef.current?.querySelectorAll("[data-sidebar-bottom]");
      if (sidebarBottom) {
        gsap.set(sidebarBottom, { y: 20, opacity: 0 });
        tl.to(sidebarBottom, {
          y: 0, opacity: 1, duration: 0.5,
          stagger: 0.1,
          ease: "power2.out",
        }, 0.7);
      }

      gsap.utils.toArray<HTMLElement>("[data-sjm-float]").forEach((el, i) => {
        gsap.to(el, {
          y: "random(-3, 3)",
          duration: "random(2, 3.5)",
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: i * 0.3,
        });
      });

    }, containerRef);

    return () => ctx.revert();
  }, [isRtl]);

  const cardBg = "bg-white dark:bg-[#1e293b]";
  const mainBg = "bg-gray-100 dark:bg-[#111827]";

  const appData = [30, 45, 35, 55, 60, 50, 40];
  const intData = [15, 20, 25, 30, 25, 20, 15];
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const chartW = 280;
  const chartH = 100;
  const pad = 10;
  const maxVal = 80;

  function toPath(data: number[]) {
    const stepX = (chartW - pad * 2) / (data.length - 1);
    return data.map((v, i) => {
      const x = pad + i * stepX;
      const y = chartH - pad - (v / maxVal) * (chartH - pad * 2);
      return `${i === 0 ? "M" : "L"}${x},${y}`;
    }).join(" ");
  }

  function toArea(data: number[]) {
    const stepX = (chartW - pad * 2) / (data.length - 1);
    const line = data.map((v, i) => {
      const x = pad + i * stepX;
      const y = chartH - pad - (v / maxVal) * (chartH - pad * 2);
      return `${x},${y}`;
    }).join(" L");
    const lastX = pad + (data.length - 1) * stepX;
    return `M${pad},${chartH - pad} L${line} L${lastX},${chartH - pad} Z`;
  }

  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  let cumulative = 0;

  return (
    <div
      ref={containerRef}
      className={`select-none overflow-hidden rounded-2xl ${isRtl ? "direction-rtl" : ""}`}
      style={{ fontSize: "11px", lineHeight: 1.4, perspective: "1000px" }}
      data-testid="smart-job-mockup"
    >
      <div className="flex flex-wrap">
        <div ref={sidebarRef} className="hidden sm:flex w-[120px] flex-shrink-0 bg-white dark:bg-[#0f172a] flex-col border-r border-border ltr:rounded-l-2xl rtl:rounded-r-2xl">
          <div className="px-3 py-4 flex flex-wrap items-center gap-2">
            <div className="flex items-center gap-0.5" style={{ direction: "ltr" }}>
              <div className="h-5 overflow-hidden flex-shrink-0" style={{ width: '18px' }}>
                <img src="/images/plato-logo.png"
                  alt="Plato" className="h-full w-auto max-w-none" />
              </div>
              <span className="text-[13px] font-bold tracking-tight text-gray-900 dark:text-white" style={{ fontFamily: "'Roc Grotesk', sans-serif" }}>Plato</span>
            </div>
          </div>

          <nav className="flex-1 px-2 space-y-0.5 mt-1">
            {sidebarNav.map((item, i) => (
              <div
                key={i}
                data-nav-item
                data-testid={`nav-item-${item.label.toLowerCase()}`}
                className={`flex flex-wrap items-center gap-2 px-2 py-1.5 rounded-md text-[10px] ${
                  item.active ? "bg-blue-600 text-white font-medium" : "text-muted-foreground"
                }`}
              >
                <item.icon className="w-3.5 h-3.5" />
                <span>{item.label}</span>
                {item.badge && (
                  <span className="ltr:ml-auto rtl:mr-auto bg-red-500 text-white text-[7px] w-3.5 h-3.5 rounded-full flex items-center justify-center font-bold">
                    {item.badge}
                  </span>
                )}
              </div>
            ))}
          </nav>

          <div className="px-2 pb-2 space-y-0.5 mt-auto">
            <div data-sidebar-bottom className="flex flex-wrap items-center gap-2 px-2 py-1.5 rounded-md text-[10px] text-muted-foreground">
              <Settings className="w-3.5 h-3.5" />
              <span>Settings</span>
            </div>
            <div data-sidebar-bottom className="flex flex-wrap items-center gap-2 px-2 py-1.5 rounded-md text-[10px] text-muted-foreground">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Help Center</span>
            </div>
          </div>
        </div>

        <div className="flex-1 min-w-0 rounded-2xl ltr:sm:rounded-l-none rtl:sm:rounded-r-none overflow-hidden">
          <div ref={topBarRef} className="h-10 bg-white dark:bg-[#1e293b] border-b border-border flex items-center px-3 sm:px-4 gap-2 sm:gap-3 overflow-hidden">
            <div className="flex items-center gap-2 bg-gray-100 dark:bg-[#0f172a] rounded-lg px-2 sm:px-3 py-1.5 min-w-0">
              <Search className="w-3 h-3 text-muted-foreground flex-shrink-0" />
              <span className="text-[9px] text-muted-foreground hidden sm:inline truncate">Search jobs, candidates, or anything...</span>
            </div>
            <div className="ltr:ml-auto rtl:mr-auto flex items-center gap-2 sm:gap-3 flex-shrink-0">
              <div className="relative">
                <Bell className="w-3.5 h-3.5 text-muted-foreground" />
                <span className="absolute -top-1 ltr:-right-1 rtl:-left-1 w-2 h-2 bg-red-500 rounded-full animate-ping" />
                <span className="absolute -top-1 ltr:-right-1 rtl:-left-1 w-2 h-2 bg-red-500 rounded-full" />
              </div>
              <span className="text-[9px] text-foreground font-medium hidden sm:inline">HR Manager</span>
              <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-[8px] font-bold text-white">HR</div>
              <Moon className="w-3.5 h-3.5 text-muted-foreground" />
            </div>
          </div>

          <div className={`${mainBg} p-4 space-y-3`}>
            <div ref={headerRef} className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h2 className="text-[15px] font-bold text-foreground" data-testid="text-sjm-dashboard-title">Agency Dashboard</h2>
                <p className="text-[9px] text-muted-foreground">Welcome back! Here's what's happening today.</p>
              </div>
              <div className="flex flex-wrap items-center gap-1 bg-blue-600 text-white rounded-lg px-3 py-1.5 text-[9px] font-medium" data-testid="button-sjm-post-job">
                <Plus className="w-3 h-3" />
                Post New Job
              </div>
            </div>

            <div ref={statCardsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
              {statCards.map((card, i) => (
                <div key={i} className={`${cardBg} rounded-xl p-3 border border-border`} data-testid={`stat-card-${card.label.toLowerCase().replace(/\s+/g, "-")}`}>
                  <div className={`w-7 h-7 ${card.color} rounded-lg flex items-center justify-center mb-2`}>
                    <card.icon className="w-3.5 h-3.5 text-white" />
                  </div>
                  <div className="text-[8px] text-muted-foreground">{card.label}</div>
                  <div className="text-[16px] font-bold text-foreground leading-tight">
                    <CountUpNumber target={card.value} triggerRef={containerRef} />
                  </div>
                </div>
              ))}
            </div>

            <div ref={overviewRef} className={`${cardBg} rounded-xl p-3 border border-border`}>
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <h3 className="text-[11px] font-bold text-foreground" data-testid="text-sjm-overview-title">Overview Statistics</h3>
                <span className="text-[8px] text-blue-500 font-medium" data-testid="link-sjm-view-all">View All</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {overviewStats.map((stat, i) => (
                  <div key={i} data-overview-item data-testid={`text-sjm-overview-${stat.label.toLowerCase().replace(/\s+/g, "-")}`}>
                    <div className="flex flex-wrap items-center gap-1 text-[8px] text-muted-foreground mb-0.5">
                      {stat.label}
                      <TrendingUp className="w-2.5 h-2.5 text-emerald-500" />
                    </div>
                    <div className="flex flex-wrap items-baseline gap-1">
                      <span className="text-[14px] font-bold text-foreground" data-testid={`text-sjm-stat-value-${i}`}>
                        <CountUpNumber target={stat.numVal} suffix={stat.suffix || ""} triggerRef={containerRef} />
                      </span>
                      <span className="text-[7px] text-emerald-500 font-medium">{stat.change}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div ref={chartsRef} className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <div ref={weeklyCardRef} className={`${cardBg} rounded-xl p-3 border border-border`}>
                <h3 className="text-[11px] font-bold text-foreground mb-0.5">Weekly Activity</h3>
                <p className="text-[7px] text-muted-foreground mb-2">Applications, Interviews & Offers</p>
                <div className="flex flex-wrap items-center gap-4 mb-2 text-[8px]">
                  <div className="flex flex-wrap items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-blue-500" />
                    <span className="text-muted-foreground">Applications</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span className="text-muted-foreground">Interviews</span>
                  </div>
                </div>
                <svg viewBox={`0 0 ${chartW} ${chartH}`} className="w-full h-auto">
                  <path ref={areaFillRef1} d={toArea(appData)} fill="hsl(210 80% 60% / 0.15)" />
                  <path ref={areaPathRef1} d={toPath(appData)} fill="none" stroke="hsl(210 80% 55%)" strokeWidth="2" />
                  <path ref={areaFillRef2} d={toArea(intData)} fill="hsl(150 60% 50% / 0.12)" />
                  <path ref={areaPathRef2} d={toPath(intData)} fill="none" stroke="hsl(150 60% 45%)" strokeWidth="2" />
                  {days.map((d, i) => {
                    const x = pad + i * ((chartW - pad * 2) / (days.length - 1));
                    return (
                      <text key={i} x={x} y={chartH - 1} textAnchor="middle" className="fill-muted-foreground" style={{ fontSize: 7 }}>{d}</text>
                    );
                  })}
                </svg>
              </div>

              <div ref={donutCardRef} className={`${cardBg} rounded-xl p-3 border border-border`}>
                <h3 className="text-[11px] font-bold text-foreground mb-0.5">Application Status</h3>
                <p className="text-[7px] text-muted-foreground mb-2">Current distribution by stage</p>
                <div className="flex flex-wrap items-center gap-6">
                  <svg ref={donutRef} viewBox="0 0 100 100" className="w-28 h-28 flex-shrink-0">
                    {donutSegments.map((seg, i) => {
                      const offset = cumulative;
                      cumulative += seg.pct;
                      const fullDash = (seg.pct / 100) * circumference;
                      const dashOffset = -(offset / 100) * circumference;
                      return (
                        <circle
                          key={i}
                          cx="50" cy="50" r={radius}
                          fill="none" stroke={seg.color} strokeWidth="12"
                          strokeDasharray={`${fullDash} ${circumference - fullDash}`}
                          strokeDashoffset={dashOffset}
                          strokeLinecap="round"
                          transform="rotate(-90 50 50)"
                        />
                      );
                    })}
                  </svg>
                  <div className="space-y-1.5 text-[9px]">
                    {donutSegments.map((seg, i) => (
                      <div key={i} data-legend-item className="flex flex-wrap items-center justify-between gap-4">
                        <div className="flex flex-wrap items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: seg.color }} />
                          <span className="text-muted-foreground">{seg.label}</span>
                        </div>
                        <span className="font-semibold text-foreground">{seg.pct}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
