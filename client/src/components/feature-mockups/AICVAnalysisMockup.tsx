import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Users, Sparkles, FileText, Eye } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const rows = [
  { applicants: 45 },
  { applicants: 32 },
  { applicants: 28 },
  { applicants: 0 },
];

export default function AICVAnalysisMockup() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const ctx = gsap.context(() => {
      const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReduced) return;

      const tableRows = containerRef.current!.querySelectorAll("[data-table-row]");
      gsap.set(tableRows, { y: 30, opacity: 0, scale: 0.95 });

      const buttons = containerRef.current!.querySelectorAll("[data-action-btn]");
      gsap.set(buttons, { scale: 0, rotation: -10 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "bottom 15%",
          toggleActions: "play reverse play reverse",
        },
      });

      tl.to(tableRows, {
        y: 0, opacity: 1, scale: 1,
        duration: 0.5, stagger: 0.15,
        ease: "power3.out",
      }, 0);

      tl.to(buttons, {
        scale: 1, rotation: 0,
        duration: 0.4, stagger: 0.06,
        ease: "back.out(2.5)",
      }, 0.3);

      const numEls = containerRef.current!.querySelectorAll("[data-count-up]");
      numEls.forEach((el) => {
        const target = parseInt(el.getAttribute("data-count-up") || "0");
        if (target === 0) return;
        const obj = { val: 0 };
        tl.to(obj, {
          val: target, duration: 1, ease: "power3.out",
          onUpdate: () => { (el as HTMLElement).textContent = String(Math.round(obj.val)); },
        }, 0.2);
      });

    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="bg-white dark:bg-[#1e293b] rounded-2xl shadow-lg border border-border select-none overflow-hidden" style={{ fontSize: "12px" }}>
      <div className="grid grid-cols-[1fr_1fr_auto] items-center px-5 py-3 border-b border-border bg-gray-50 dark:bg-[#0f172a]">
        <span className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">Applicants</span>
        <span className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">Actions</span>
        <span className="w-6" />
      </div>

      {rows.map((row, i) => (
        <div key={i} data-table-row className="grid grid-cols-[1fr_1fr_auto] items-center px-5 py-4 border-b border-border last:border-b-0">
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-blue-500" />
            <span className="text-[14px] font-bold text-foreground" data-count-up={String(row.applicants)}>
              {row.applicants === 0 ? "0" : "0"}
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <button data-action-btn data-testid={`button-analyze-${i}`} className="flex items-center gap-1.5 bg-blue-600 text-white rounded-full px-4 py-1.5 text-[10px] font-semibold">
              <Sparkles className="w-3 h-3" />
              Analyze Resumes
            </button>
            <button data-action-btn data-testid={`button-view-resumes-${i}`} className="flex items-center gap-1.5 bg-white dark:bg-[#0f172a] text-blue-600 border border-blue-300 dark:border-blue-700 rounded-full px-4 py-1.5 text-[10px] font-semibold">
              <FileText className="w-3 h-3" />
              View Resumes
            </button>
          </div>
          <button data-action-btn data-testid={`button-eye-${i}`} className="w-6 h-6 flex items-center justify-center text-muted-foreground">
            <Eye className="w-4 h-4" />
          </button>
        </div>
      ))}
    </div>
  );
}
