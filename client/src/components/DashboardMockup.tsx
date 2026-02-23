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
  LogOut,
  TrendingUp,
  ChevronLeft,
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
  { icon: Mail, label: "Messages", value: 8, color: "bg-violet-500" },
];

const overviewStats = [
  { label: "Total Jobs", numVal: 53, change: "+5%" },
  { label: "New Applicants", numVal: 2300, change: "+95%" },
  { label: "Interviews Scheduled", numVal: 2408, change: "+8%" },
  { label: "Hiring Success Rate", numVal: 87, change: "+6%", suffix: "%" },
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

function CountUpNumber({ target, suffix = "", triggerRef }: { target: number; suffix?: string; triggerRef: { current: HTMLDivElement | null } }) {
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

export default function DashboardMockup({ compact = false }: { compact?: boolean }) {
  const { lang } = useI18n();
  const isRtl = lang === "ar";

  const containerRef = useRef<HTMLDivElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const topBarRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const statCardsRef = useRef<HTMLDivElement>(null);
  const overviewRef = useRef<HTMLDivElement>(null);
  const weeklyCardRef = useRef<HTMLDivElement>(null);
  const donutCardRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const growthRef = useRef<HTMLDivElement>(null);
  const activityRef = useRef<HTMLDivElement>(null);
  const sec1Ref = useRef<HTMLDivElement>(null);
  const sec2Ref = useRef<HTMLDivElement>(null);
  const sec3Ref = useRef<HTMLDivElement>(null);
  const sec4Ref = useRef<HTMLDivElement>(null);

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

      const tl1 = gsap.timeline({
        scrollTrigger: {
          trigger: sec1Ref.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play reverse play reverse",
        },
      });

      tl1.to(sidebarRef.current, {
        x: 0, opacity: 1, duration: 0.8,
        ease: "back.out(1.4)",
      }, 0);

      tl1.to(topBarRef.current, {
        y: 0, opacity: 1, duration: 0.6,
        ease: "power3.out",
      }, 0.15);

      tl1.to(headerRef.current, {
        y: 0, opacity: 1, scale: 1, duration: 0.7,
        ease: "back.out(1.7)",
      }, 0.25);

      const cards = statCardsRef.current?.children;
      if (cards) {
        gsap.set(cards, { y: -40, opacity: 0, scale: 0.7 });
        tl1.to(cards, {
          y: 0, opacity: 1, scale: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: "elastic.out(1.2, 0.5)",
        }, 0.35);
      }

      gsap.set(overviewRef.current, { y: 30, opacity: 0, scaleY: 0.8 });
      tl1.to(overviewRef.current, {
        y: 0, opacity: 1, scaleY: 1, duration: 0.6,
        ease: "power3.out",
      }, 0.7);

      const overviewItems = overviewRef.current?.querySelectorAll("[data-overview-item]");
      if (overviewItems) {
        gsap.set(overviewItems, { y: 20, opacity: 0 });
        tl1.to(overviewItems, {
          y: 0, opacity: 1, duration: 0.5,
          stagger: 0.1,
          ease: "power2.out",
        }, 0.85);
      }

      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: sec2Ref.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play reverse play reverse",
        },
      });

      gsap.set(weeklyCardRef.current, { x: isRtl ? 80 : -80, opacity: 0, rotateY: isRtl ? -15 : 15, scale: 0.85 });
      gsap.set(donutCardRef.current, { x: isRtl ? -80 : 80, opacity: 0, rotateY: isRtl ? 15 : -15, scale: 0.85 });

      tl2.to(weeklyCardRef.current, {
        x: 0, opacity: 1, rotateY: 0, scale: 1, duration: 0.9,
        ease: "power3.out",
      }, 0);

      tl2.to(donutCardRef.current, {
        x: 0, opacity: 1, rotateY: 0, scale: 1, duration: 0.9,
        ease: "power3.out",
      }, 0.15);

      if (areaPathRef1.current) {
        const len1 = areaPathRef1.current.getTotalLength?.() || 500;
        gsap.set(areaPathRef1.current, { strokeDasharray: len1, strokeDashoffset: len1 });
        gsap.set(areaFillRef1.current, { opacity: 0 });
        tl2.to(areaPathRef1.current, { strokeDashoffset: 0, duration: 1.2, ease: "power2.inOut" }, 0.4);
        tl2.to(areaFillRef1.current, { opacity: 1, duration: 0.8, ease: "power1.in" }, 0.8);
      }
      if (areaPathRef2.current) {
        const len2 = areaPathRef2.current.getTotalLength?.() || 500;
        gsap.set(areaPathRef2.current, { strokeDasharray: len2, strokeDashoffset: len2 });
        gsap.set(areaFillRef2.current, { opacity: 0 });
        tl2.to(areaPathRef2.current, { strokeDashoffset: 0, duration: 1.2, ease: "power2.inOut" }, 0.6);
        tl2.to(areaFillRef2.current, { opacity: 1, duration: 0.8, ease: "power1.in" }, 1.0);
      }

      const donutCircles = donutRef.current?.querySelectorAll("circle");
      if (donutCircles) {
        donutCircles.forEach((c) => {
          const r = 40;
          const circ = 2 * Math.PI * r;
          gsap.set(c, { strokeDashoffset: circ, attr: { "stroke-opacity": 0 } });
        });

        tl2.to(donutCircles, {
          strokeDashoffset: 0,
          attr: { "stroke-opacity": 1 },
          duration: 1.4,
          stagger: 0.15,
          ease: "power2.out",
        }, 0.5);

        tl2.fromTo(donutRef.current, { rotation: -90, transformOrigin: "center center" },
          { rotation: 0, duration: 1.5, ease: "power2.out" }, 0.3);
      }

      const donutLegend = donutCardRef.current?.querySelectorAll("[data-legend-item]");
      if (donutLegend) {
        gsap.set(donutLegend, { x: 20, opacity: 0 });
        tl2.to(donutLegend, {
          x: 0, opacity: 1, duration: 0.4,
          stagger: 0.08,
          ease: "power2.out",
        }, 1.0);
      }

      if (!compact) {
        const tl3 = gsap.timeline({
          scrollTrigger: {
            trigger: sec3Ref.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play reverse play reverse",
          },
        });

        gsap.set(progressRef.current, { y: 50, opacity: 0, scale: 0.9 });
        gsap.set(growthRef.current, { y: 50, opacity: 0, scale: 0.9 });

        tl3.to(progressRef.current, {
          y: 0, opacity: 1, scale: 1, duration: 0.7,
          ease: "back.out(1.4)",
        }, 0);

        tl3.to(growthRef.current, {
          y: 0, opacity: 1, scale: 1, duration: 0.7,
          ease: "back.out(1.4)",
        }, 0.15);

        const progressBars = progressRef.current?.querySelectorAll("[data-progress-fill]");
        if (progressBars) {
          gsap.set(progressBars, { width: "0%" });
          progressBars.forEach((bar, i) => {
            const targetWidth = bar.getAttribute("data-target-width") || "0%";
            tl3.to(bar, {
              width: targetWidth,
              duration: 1.0,
              delay: i * 0.15,
              ease: "elastic.out(1, 0.5)",
            }, 0.4);
          });
        }

        const progressRows = progressRef.current?.querySelectorAll("[data-progress-row]");
        if (progressRows) {
          gsap.set(progressRows, { x: isRtl ? 30 : -30, opacity: 0 });
          tl3.to(progressRows, {
            x: 0, opacity: 1, duration: 0.5,
            stagger: 0.12,
            ease: "power2.out",
          }, 0.3);
        }

        const barElements = growthRef.current?.querySelectorAll("[data-bar]");
        if (barElements) {
          gsap.set(barElements, { scaleY: 0, transformOrigin: "bottom center" });
          tl3.to(barElements, {
            scaleY: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: "elastic.out(1.2, 0.4)",
          }, 0.5);
        }

        const tl4 = gsap.timeline({
          scrollTrigger: {
            trigger: sec4Ref.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play reverse play reverse",
          },
        });

        gsap.set(activityRef.current, { y: 40, opacity: 0 });
        tl4.to(activityRef.current, {
          y: 0, opacity: 1, duration: 0.6,
          ease: "power3.out",
        }, 0);

        const actItems = activityRef.current?.querySelectorAll("[data-activity-item]");
        if (actItems) {
          gsap.set(actItems, { x: isRtl ? -40 : 40, opacity: 0, scale: 0.9 });
          tl4.to(actItems, {
            x: 0, opacity: 1, scale: 1,
            duration: 0.5,
            stagger: 0.1,
            ease: "back.out(1.5)",
          }, 0.25);
        }
      }

      const navItems = sidebarRef.current?.querySelectorAll("[data-nav-item]");
      if (navItems) {
        gsap.set(navItems, { x: isRtl ? 20 : -20, opacity: 0 });
        tl1.to(navItems, {
          x: 0, opacity: 1, duration: 0.4,
          stagger: 0.06,
          ease: "power2.out",
        }, 0.4);
      }

      const sidebarBottom = sidebarRef.current?.querySelectorAll("[data-sidebar-bottom]");
      if (sidebarBottom) {
        gsap.set(sidebarBottom, { y: 20, opacity: 0 });
        tl1.to(sidebarBottom, {
          y: 0, opacity: 1, duration: 0.5,
          stagger: 0.1,
          ease: "power2.out",
        }, 0.7);
      }

      gsap.utils.toArray<HTMLElement>("[data-pulse]").forEach((el) => {
        gsap.to(el, {
          boxShadow: "0 0 8px 2px rgba(59, 130, 246, 0.3)",
          duration: 1.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });

    }, containerRef);

    return () => ctx.revert();
  }, [isRtl, compact]);

  const shellBg = "bg-gray-100 dark:bg-[#0f172a]";
  const cardBg = "bg-white dark:bg-[#1e293b]";
  const mainBg = "bg-gray-50 dark:bg-[#111827]";
  const borderColor = "border-gray-200 dark:border-white/5";
  const headingText = "text-gray-900 dark:text-white";
  const labelText = "text-gray-500 dark:text-gray-400";
  const subtleText = "text-gray-400 dark:text-gray-500";

  const appData = [25, 40, 30, 50, 65, 45, 35];
  const intData = [10, 15, 18, 25, 20, 15, 10];
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const chartW = 300;
  const chartH = 130;
  const padL = 28;
  const padR = 10;
  const padT = 10;
  const padB = 20;
  const maxVal = 80;
  const yLabels = [0, 20, 40, 60, 80];

  function toPath(data: number[]) {
    const stepX = (chartW - padL - padR) / (data.length - 1);
    return data.map((v, i) => {
      const x = padL + i * stepX;
      const y = chartH - padB - (v / maxVal) * (chartH - padT - padB);
      return `${i === 0 ? "M" : "L"}${x},${y}`;
    }).join(" ");
  }

  function toArea(data: number[]) {
    const stepX = (chartW - padL - padR) / (data.length - 1);
    const line = data.map((v, i) => {
      const x = padL + i * stepX;
      const y = chartH - padB - (v / maxVal) * (chartH - padT - padB);
      return `${x},${y}`;
    }).join(" L");
    const lastX = padL + (data.length - 1) * stepX;
    return `M${padL},${chartH - padB} L${line} L${lastX},${chartH - padB} Z`;
  }

  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  let cumulative = 0;

  const bars = [280, 380, 350, 420, 480, 450];
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
  const maxBar = 600;

  return (
    <div
      ref={containerRef}
      className={`select-none ${isRtl ? "direction-rtl" : ""}`}
      style={{ fontSize: "11px", lineHeight: 1.4, perspective: "1000px" }}
      data-testid="dashboard-mockup"
    >
      <div className={`flex rounded-2xl overflow-hidden ${shellBg}`}>
        {/* === SIDEBAR === */}
        <div ref={sidebarRef} style={{ width: "15%", minWidth: 90, maxWidth: 140 }} className={`flex flex-shrink-0 ${shellBg} flex-col border-r ${borderColor}`}>
          <div className="px-2 pt-3 pb-2">
            <div className="flex items-center justify-between gap-1">
              <div className="flex items-center gap-1" style={{ direction: "ltr" }}>
                <div className="w-6 h-6 rounded-lg overflow-hidden flex-shrink-0">
                  <img src="/images/plato-logo.png" alt="" className="w-full h-full object-contain" />
                </div>
                <div className="min-w-0">
                  <span className={`text-[11px] font-bold tracking-tight ${headingText} block leading-tight truncate`} style={{ fontFamily: "'Host Grotesk', sans-serif" }}>Plato</span>
                </div>
              </div>
              <ChevronLeft className={`w-3 h-3 ${subtleText} flex-shrink-0`} />
            </div>
          </div>

          <nav className="flex-1 px-1.5 space-y-px mt-1">
            {sidebarNav.map((item, i) => (
              <div
                key={i}
                data-nav-item
                className={`flex items-center gap-1.5 px-2 py-1 rounded-md text-[9px] ${
                  item.active ? "bg-blue-600 text-white font-medium" : labelText
                }`}
              >
                <item.icon className="w-3 h-3 flex-shrink-0" />
                <span className="truncate">{item.label}</span>
                {item.badge && (
                  <span className="ml-auto bg-red-500 text-white text-[6px] w-3 h-3 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    {item.badge}
                  </span>
                )}
              </div>
            ))}
          </nav>

          <div className="px-1.5 pb-1.5 space-y-px mt-auto">
            <div data-sidebar-bottom className={`flex items-center gap-1.5 px-2 py-1 rounded-md text-[9px] ${labelText}`}>
              <Settings className="w-3 h-3 flex-shrink-0" />
              <span className="truncate">Settings</span>
            </div>
            <div data-sidebar-bottom className={`flex items-center gap-1.5 px-2 py-1 rounded-md text-[9px] ${labelText}`}>
              <HelpCircle className="w-3 h-3 flex-shrink-0" />
              <span className="truncate">Help Center</span>
            </div>
          </div>

          <div data-sidebar-bottom className="mx-1.5 mb-2 bg-blue-100 dark:bg-blue-900/80 rounded-lg p-1.5">
            <div className="flex items-center gap-1.5">
              <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center text-[7px] font-bold text-white flex-shrink-0" data-pulse>HR</div>
              <div className="min-w-0">
                <div className={`text-[8px] font-semibold ${headingText} truncate`}>HR Manager</div>
                <div className="text-[6px] text-blue-600 dark:text-blue-200/70 truncate">hr@company.com</div>
              </div>
            </div>
            <div className="mt-1 flex items-center justify-center gap-0.5 text-[7px] text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 rounded py-0.5">
              <LogOut className="w-2 h-2" />
              Logout
            </div>
          </div>
        </div>

        {/* === MAIN CONTENT === */}
        <div className="flex-1 min-w-0">
          {/* Top Bar */}
          <div ref={topBarRef} className={`h-8 ${shellBg} border-b ${borderColor} flex items-center px-3 gap-2 overflow-hidden`}>
            <div className={`flex items-center gap-1.5 ${cardBg} rounded-md px-2 py-1 min-w-0 flex-1`} style={{ maxWidth: "55%" }}>
              <Search className={`w-2.5 h-2.5 ${subtleText} flex-shrink-0`} />
              <span className={`text-[8px] ${subtleText} truncate`}>Search jobs, candidates, or anything...</span>
            </div>
            <div className="ml-auto flex items-center gap-2 flex-shrink-0">
              <div className="relative">
                <Bell className={`w-3 h-3 ${labelText}`} />
                <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-red-500 rounded-full" />
              </div>
              <div className="h-3 w-px bg-gray-300 dark:bg-white/10" />
              <div className="flex items-center gap-1.5">
                <div className="text-right">
                  <span className={`text-[8px] ${headingText} font-medium block leading-tight`}>HR Manager</span>
                  <span className={`text-[6px] ${labelText} block leading-tight`}>Admin</span>
                </div>
                <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center text-[7px] font-bold text-white">HR</div>
              </div>
              <Moon className={`w-3 h-3 ${labelText}`} />
            </div>
          </div>

          {/* === SECTION 1: Header + Stat Cards + Overview === */}
          <div ref={sec1Ref} className={`${mainBg} p-3 space-y-2.5`}>
            <div ref={headerRef} className="flex items-start justify-between">
              <div>
                <h2 className={`text-[13px] font-bold ${headingText}`}>Agency Dashboard</h2>
                <p className={`text-[8px] ${labelText}`}>Welcome back! Here's what's happening today.</p>
              </div>
              <div className="flex items-center gap-1 bg-blue-600 text-white rounded-md px-2 py-1 text-[8px] font-medium flex-shrink-0" data-pulse>
                <Plus className="w-2.5 h-2.5" />
                Post New Job
              </div>
            </div>

            <div ref={statCardsRef} style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "6px" }}>
              {statCards.map((card, i) => (
                <div key={i} className={`${cardBg} rounded-lg p-2 border ${borderColor}`}>
                  <div className={`w-6 h-6 ${card.color} rounded-md flex items-center justify-center mb-1.5`}>
                    <card.icon className="w-3 h-3 text-white" />
                  </div>
                  <div className={`text-[7px] ${labelText}`}>{card.label}</div>
                  <div className={`text-[14px] font-bold ${headingText} leading-tight`}>
                    <CountUpNumber target={card.value} triggerRef={sec1Ref} />
                  </div>
                </div>
              ))}
            </div>

            <div ref={overviewRef} className={`${cardBg} rounded-lg p-2.5 border ${borderColor}`}>
              <div className="flex items-center justify-between mb-1.5">
                <h3 className={`text-[10px] font-bold ${headingText}`}>Overview Statistics</h3>
                <span className="text-[7px] text-blue-500 dark:text-blue-400 font-medium">View All</span>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "8px" }}>
                {overviewStats.map((stat, i) => (
                  <div key={i} data-overview-item>
                    <div className={`flex items-center gap-0.5 text-[7px] ${labelText} mb-0.5`}>
                      <span className="truncate">{stat.label}</span>
                      <TrendingUp className="w-2 h-2 text-emerald-500 dark:text-emerald-400 flex-shrink-0" />
                    </div>
                    <div className="flex items-baseline gap-0.5">
                      <span className={`text-[13px] font-bold ${headingText}`}>
                        <CountUpNumber target={stat.numVal} suffix={stat.suffix || ""} triggerRef={sec1Ref} />
                      </span>
                      <span className="text-[6px] text-emerald-500 dark:text-emerald-400 font-medium">{stat.change}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* === SECTION 2: Charts Row === */}
          <div ref={sec2Ref} className={`${mainBg} px-3 pb-3 ${compact ? "rounded-b-2xl" : ""}`}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6px" }}>
              <div ref={weeklyCardRef} className={`${cardBg} rounded-lg p-2.5 border ${borderColor}`}>
                <div className="flex items-center justify-between mb-0.5">
                  <h3 className={`text-[10px] font-bold ${headingText}`}>Weekly Activity</h3>
                  <div className="flex items-center gap-3 text-[7px]">
                    <div className="flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                      <span className={labelText}>Applications</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                      <span className={labelText}>Interviews</span>
                    </div>
                  </div>
                </div>
                <p className={`text-[6px] ${labelText} mb-1.5`}>Applications, Interviews & Offers</p>
                <svg viewBox={`0 0 ${chartW} ${chartH}`} className="w-full h-auto">
                  {yLabels.map((val) => {
                    const y = chartH - padB - (val / maxVal) * (chartH - padT - padB);
                    return (
                      <g key={val}>
                        <text x={padL - 4} y={y + 3} textAnchor="end" className="fill-gray-400 dark:fill-gray-500" style={{ fontSize: 7 }}>{val}</text>
                        <line x1={padL} y1={y} x2={chartW - padR} y2={y} className="stroke-gray-200 dark:stroke-white/5" strokeWidth="0.5" />
                      </g>
                    );
                  })}
                  {days.map((_d, i) => {
                    const x = padL + i * ((chartW - padL - padR) / (days.length - 1));
                    return (
                      <g key={`vline-${i}`}>
                        <line x1={x} y1={padT} x2={x} y2={chartH - padB} className="stroke-gray-200 dark:stroke-white/[0.04]" strokeWidth="0.5" strokeDasharray="3,3" />
                      </g>
                    );
                  })}
                  <path ref={areaFillRef1} d={toArea(appData)} className="fill-indigo-500/20 dark:fill-indigo-500/20" />
                  <path ref={areaPathRef1} d={toPath(appData)} fill="none" stroke="#818cf8" strokeWidth="2" strokeLinejoin="round" />
                  <path ref={areaFillRef2} d={toArea(intData)} className="fill-amber-500/10 dark:fill-amber-500/[0.08]" />
                  <path ref={areaPathRef2} d={toPath(intData)} fill="none" stroke="#f59e0b" strokeWidth="1.5" strokeLinejoin="round" />
                  {days.map((d, i) => {
                    const x = padL + i * ((chartW - padL - padR) / (days.length - 1));
                    return (
                      <text key={i} x={x} y={chartH - 4} textAnchor="middle" className="fill-gray-400 dark:fill-gray-500" style={{ fontSize: 7 }}>{d}</text>
                    );
                  })}
                </svg>
              </div>

              <div ref={donutCardRef} className={`${cardBg} rounded-lg p-2.5 border ${borderColor}`}>
                <h3 className={`text-[10px] font-bold ${headingText} mb-0.5`}>Application Status</h3>
                <p className={`text-[6px] ${labelText} mb-2`}>Current distribution by stage</p>
                <div className="flex items-center gap-3">
                  <svg ref={donutRef} viewBox="0 0 100 100" className="flex-shrink-0" style={{ width: "45%", maxWidth: 110 }}>
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
                  <div className="space-y-1 text-[8px] flex-1 min-w-0">
                    {donutSegments.map((seg, i) => (
                      <div key={i} data-legend-item className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-1 min-w-0">
                          <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: seg.color }} />
                          <span className={`${labelText} truncate`}>{seg.label}</span>
                        </div>
                        <span className={`font-semibold ${headingText} flex-shrink-0`}>{seg.pct}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {!compact && (
          <>
          {/* === SECTION 3: Progress + Growth === */}
          <div ref={sec3Ref} className={`${mainBg} px-3 pb-2.5`}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6px" }}>
              <div ref={progressRef} className={`${cardBg} rounded-lg p-2.5 border ${borderColor}`}>
                <h3 className={`text-[10px] font-bold ${headingText} mb-0.5`}>Department Hiring Progress</h3>
                <p className={`text-[6px] ${labelText} mb-2`}>Current vs Target</p>
                <div className="space-y-2">
                  {hiringProgress.map((item, i) => (
                    <div key={i} data-progress-row>
                      <div className="flex items-center justify-between mb-0.5">
                        <span className={`text-[8px] font-semibold ${headingText}`}>{item.dept}</span>
                        <span className={`text-[6px] ${labelText}`}>{item.current} / {item.target}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <div className="flex-1 h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full ${item.color}`}
                            data-progress-fill
                            data-target-width={`${item.pct}%`}
                            style={{ width: "0%" }}
                          />
                        </div>
                        <span className={`text-[7px] font-medium ${headingText} w-6 text-right`}>{item.pct}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div ref={growthRef} className={`${cardBg} rounded-lg p-2.5 border ${borderColor}`}>
                <h3 className={`text-[10px] font-bold ${headingText} mb-0.5`}>Monthly Growth</h3>
                <p className={`text-[6px] ${labelText} mb-2`}>Application volume trend</p>
                <div className="flex items-end gap-1.5 h-20">
                  {bars.map((val, i) => (
                    <div key={i} className="flex flex-col items-center gap-0.5 flex-1">
                      <div
                        data-bar
                        className="w-full rounded-t bg-gradient-to-t from-blue-600 to-blue-400"
                        style={{ height: `${(val / maxBar) * 100}%`, minWidth: 8 }}
                      />
                      <span className={`text-[6px] ${labelText}`}>{months[i]}</span>
                    </div>
                  ))}
                </div>
                <div className={`flex items-center justify-between mt-1.5 pt-1.5 border-t ${borderColor}`}>
                  <div>
                    <div className={`text-[6px] ${labelText} uppercase`}>Current Month</div>
                    <div className={`text-[12px] font-bold ${headingText}`}>
                      <CountUpNumber target={797} triggerRef={sec3Ref} />
                    </div>
                  </div>
                  <div className="flex items-center gap-0.5 text-[8px] text-emerald-500 dark:text-emerald-400 font-medium">
                    <TrendingUp className="w-2.5 h-2.5" />
                    +17.2%
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* === SECTION 4: Recent Activity === */}
          <div ref={sec4Ref} className={`${mainBg} px-3 pb-3 rounded-br-2xl`}>
            <div ref={activityRef} className={`${cardBg} rounded-lg p-2.5 border ${borderColor}`}>
              <div className="flex items-center justify-between mb-1.5">
                <div>
                  <h3 className={`text-[10px] font-bold ${headingText}`}>Recent Activity</h3>
                  <p className="text-[6px] text-emerald-500 dark:text-emerald-400">+23% than last week</p>
                </div>
                <span className="text-[7px] text-blue-500 dark:text-blue-400 font-medium">View All Analytics</span>
              </div>
              <div className="space-y-1.5">
                {activityItems.map((item, i) => (
                  <div key={i} data-activity-item className="flex items-center gap-1.5">
                    <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${item.dot}`} />
                    <div className="flex-1 min-w-0">
                      <div className={`text-[8px] font-medium ${headingText} truncate`}>{item.text}</div>
                      <div className={`text-[6px] ${labelText}`}>{item.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          </>
          )}
        </div>
      </div>
    </div>
  );
}
