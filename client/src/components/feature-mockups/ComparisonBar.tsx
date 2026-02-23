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

      const rows = containerRef.current!.querySelectorAll("[data-bar-row]");
      gsap.set(rows, { opacity: 0, y: 15 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "bottom 15%",
          toggleActions: "play reverse play reverse",
        },
      });

      tl.to(heading, { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" }, 0);

      if (rows.length >= 2) {
        tl.to(rows[0], { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }, 0.2);

        tl.to(barWithout, {
          width: `${withoutWidth}%`,
          duration: 1.2,
          ease: "power3.out",
        }, 0.4);

        tl.to(rows[1], { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }, 0.6);

        tl.to(barWith, {
          width: `${withWidth}%`,
          duration: 0.8,
          ease: "back.out(1.5)",
        }, 0.8);
      }

    }, containerRef);
    return () => ctx.revert();
  }, [withoutWidth, withWidth]);

  return (
    <div ref={containerRef} className="rounded-2xl bg-transparent p-4 sm:p-6 md:p-8 border border-gray-400/40 dark:border-gray-600/50" style={{ fontSize: "14px" }}>
      <h3 data-comp-title className="text-base sm:text-lg md:text-xl font-bold text-foreground mb-4 sm:mb-6 text-left">{title}</h3>

      <div className="space-y-4">
        <div data-bar-row>
          <div className="flex items-center gap-3">
            <div
              data-bar-without
              className="h-10 sm:h-12 rounded-lg bg-red-900/80 dark:bg-red-900/60 border border-red-700/60 dark:border-red-600/50 flex items-center px-3 sm:px-4 overflow-hidden flex-shrink-0"
              style={{ width: "0%", minWidth: "8px" }}
            >
              <span className="text-xs sm:text-sm font-semibold text-gray-200 dark:text-gray-300 whitespace-nowrap">{withoutLabel}</span>
            </div>
            <span className="text-sm sm:text-base font-bold text-gray-500 dark:text-gray-400 whitespace-nowrap">{withoutValue}</span>
          </div>
        </div>

        <div data-bar-row>
          <div className="flex items-center gap-3">
            <div
              data-bar-with
              className="h-10 sm:h-12 rounded-lg bg-blue-700/80 dark:bg-blue-800/70 border border-blue-500/60 dark:border-blue-500/50 flex items-center px-3 sm:px-4 overflow-hidden flex-shrink-0"
              style={{ width: "0%", minWidth: "8px" }}
            >
              <span className="text-xs sm:text-sm font-semibold text-gray-100 dark:text-gray-200 whitespace-nowrap">{withLabel}</span>
            </div>
            <span className="text-sm sm:text-base font-bold text-gray-500 dark:text-gray-400 whitespace-nowrap">{withValue}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
