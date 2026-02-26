"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Bell, Briefcase, Video, Mail, Settings, Calendar } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const tabs = [
  { icon: Bell, label: "All", count: 10, active: true },
  { icon: Briefcase, label: "Applications" },
  { icon: Calendar, label: "Interviews" },
  { icon: Mail, label: "Messages" },
  { icon: Settings, label: "System" },
];

const notifications = [
  {
    initials: "MC", color: "bg-blue-600",
    title: "New Application Received",
    desc: "Michael Chen applied for Senior Backend Developer position",
    time: "2 minutes ago",
    borderColor: "ltr:border-l-blue-600 rtl:border-r-blue-600",
  },
  {
    icon: Calendar, color: "bg-orange-400",
    title: "Interview Reminder",
    desc: "Interview with Sarah Johnson scheduled in 30 minutes",
    time: "28 minutes ago",
    borderColor: "ltr:border-l-orange-400 rtl:border-r-orange-400",
  },
];

export default function NotificationsMockup() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const ctx = gsap.context(() => {
      const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReduced) return;

      const header = containerRef.current!.querySelector("[data-notif-header]");
      gsap.set(header, { y: -30, opacity: 0 });

      const tabEls = containerRef.current!.querySelectorAll("[data-notif-tab]");
      gsap.set(tabEls, { y: 15, opacity: 0, scale: 0.9 });

      const items = containerRef.current!.querySelectorAll("[data-notif-item]");
      gsap.set(items, { x: -40, opacity: 0, scale: 0.95 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "bottom 15%",
          toggleActions: "play reverse play reverse",
        },
      });

      tl.to(header, { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" }, 0);

      tl.to(tabEls, {
        y: 0, opacity: 1, scale: 1,
        duration: 0.4, stagger: 0.08,
        ease: "back.out(1.5)",
      }, 0.2);

      tl.to(items, {
        x: 0, opacity: 1, scale: 1,
        duration: 0.6, stagger: 0.2,
        ease: "power3.out",
      }, 0.5);

      const dots = containerRef.current!.querySelectorAll("[data-timeline-dot]");
      gsap.set(dots, { scale: 0 });
      tl.to(dots, {
        scale: 1, duration: 0.3, stagger: 0.15,
        ease: "back.out(3)",
      }, 0.7);

    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="bg-white dark:bg-[#1e293b] rounded-2xl p-5 shadow-lg border border-border select-none" style={{ fontSize: "12px" }}>
      <div data-notif-header>
        <h3 className="text-[16px] font-bold text-foreground">Notifications</h3>
        <p className="text-[10px] text-muted-foreground mt-0.5">You have 4 unread notifications</p>
      </div>

      <div className="flex flex-wrap items-center gap-1 mt-4 mb-4">
        {tabs.map((tab, i) => (
          <div
            key={i}
            data-notif-tab
            data-testid={`tab-notif-${tab.label.toLowerCase()}`}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-medium ${
              tab.active
                ? "bg-blue-600 text-white"
                : "text-muted-foreground bg-gray-100 dark:bg-[#0f172a]"
            }`}
          >
            <tab.icon className="w-3 h-3" />
            {tab.label}
            {tab.count && (
              <span className="bg-white/20 text-white text-[8px] px-1.5 py-0.5 rounded-full font-bold">
                {tab.count}
              </span>
            )}
          </div>
        ))}
      </div>

      <div className="text-[9px] font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-3">Today</div>

      <div className="space-y-3 relative">
        <div className="absolute ltr:left-[19px] rtl:right-[19px] top-2 bottom-2 w-0.5 bg-blue-200 dark:bg-blue-800" />
        {notifications.map((n, i) => (
          <div key={i} data-notif-item data-testid={`card-notification-${i}`} className={`relative bg-gray-50 dark:bg-[#0f172a] rounded-xl p-4 border ltr:border-l-4 rtl:border-r-4 border-border ${n.borderColor} ltr:ml-6 rtl:mr-6`}>
            <div data-timeline-dot className={`absolute ltr:-left-[30px] rtl:-right-[30px] top-4 w-4 h-4 rounded-full ${n.color} border-2 border-white dark:border-[#1e293b] z-10`} />
            <div className="flex flex-wrap items-start gap-3">
              {n.initials ? (
                <div className={`w-9 h-9 rounded-full ${n.color} flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0`}>
                  {n.initials}
                </div>
              ) : n.icon ? (
                <div className={`w-9 h-9 rounded-lg ${n.color} flex items-center justify-center flex-shrink-0`}>
                  <n.icon className="w-4 h-4 text-white" />
                </div>
              ) : null}
              <div>
                <div className="font-bold text-foreground text-[12px]">{n.title}</div>
                <div className="text-[10px] text-muted-foreground mt-0.5">{n.desc}</div>
                <div className="text-[9px] text-orange-500 mt-1">{n.time}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
