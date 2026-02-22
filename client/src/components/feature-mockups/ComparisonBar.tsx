import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ComparisonBarProps {
  title: string;
  withoutLabel: string;
  withLabel: string;
  withoutValue: string;
  withValue: string;
  withoutWidth?: number;
  withWidth?: number;
}

export default function ComparisonBar({
  title,
  withoutLabel,
  withLabel,
  withoutValue,
  withValue,
  withoutWidth = 85,
  withWidth = 25,
}: ComparisonBarProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const ctx = gsap.context(() => {
      const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReduced) return;

      const heading = containerRef.current!.querySelector("[data-comp-title]");
      gsap.set(heading, { y: 20, opacity: 0 });

      const barWithout = containerRef.current!.querySelector("[data-bar-without]") as HTMLElement;
      const barWith = containerRef.current!.querySelector("[data-bar-with]") as HTMLElement;
      gsap.set(barWithout, { width: "0%" });
      gsap.set(barWith, { width: "0%" });

      const labels = containerRef.current!.querySelectorAll("[data-bar-label]");
      gsap.set(labels, { opacity: 0, x: -20 });

      const values = containerRef.current!.querySelectorAll("[data-bar-value]");
      gsap.set(values, { opacity: 0, x: 20 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "bottom 15%",
          toggleActions: "play reverse play reverse",
        },
      });

      tl.to(heading, { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" }, 0);

      tl.to(barWithout, {
        width: `${withoutWidth}%`,
        duration: 1.2,
        ease: "power3.out",
      }, 0.3);

      tl.to(barWith, {
        width: `${withWidth}%`,
        duration: 0.8,
        ease: "back.out(1.5)",
      }, 0.5);

      tl.to(labels, {
        opacity: 1, x: 0,
        duration: 0.4, stagger: 0.15,
        ease: "power2.out",
      }, 0.4);

      tl.to(values, {
        opacity: 1, x: 0,
        duration: 0.4, stagger: 0.15,
        ease: "power2.out",
      }, 0.8);

    }, containerRef);
    return () => ctx.revert();
  }, [withoutWidth, withWidth]);

  return (
    <div ref={containerRef} className="rounded-2xl bg-gray-100 dark:bg-[#0a0e1a] p-6 sm:p-8 border border-border" style={{ fontSize: "14px" }}>
      <h3 data-comp-title className="text-lg sm:text-xl font-bold text-foreground mb-6">{title}</h3>

      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <div
            data-bar-without
            className="h-12 sm:h-14 rounded-lg bg-gradient-to-r from-red-700 to-red-600 dark:from-red-800/80 dark:to-red-700/60 border border-red-400/40 dark:border-red-500/40 flex items-center px-4"
            style={{ width: "0%" }}
          >
            <span data-bar-label className="text-white font-semibold text-sm sm:text-base whitespace-nowrap">{withoutLabel}</span>
          </div>
          <span data-bar-value className="text-gray-600 dark:text-gray-400 font-bold text-base sm:text-lg whitespace-nowrap">{withoutValue}</span>
        </div>

        <div className="flex items-center gap-4">
          <div
            data-bar-with
            className="h-12 sm:h-14 rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 dark:from-blue-700 dark:to-blue-600 border border-blue-300/40 dark:border-blue-400/40 flex items-center px-4"
            style={{ width: "0%" }}
          >
            <span data-bar-label className="text-white font-semibold text-sm sm:text-base whitespace-nowrap">{withLabel}</span>
          </div>
          <span data-bar-value className="text-gray-600 dark:text-gray-400 font-bold text-base sm:text-lg whitespace-nowrap">{withValue}</span>
        </div>
      </div>
    </div>
  );
}
