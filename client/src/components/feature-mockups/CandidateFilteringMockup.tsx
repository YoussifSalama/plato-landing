import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Users, Briefcase, Mail, Phone, Calendar } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const candidates = [
  { initials: "SJ", name: "Sarah Johnson", role: "Senior Frontend Developer", email: "sarah.johnson@email.com", phone: "+1 (555) 123-4567", applied: "Applied 2 days ago", color: "bg-emerald-500" },
  { initials: "MC", name: "Michael Chen", role: "Product Designer", email: "michael.chen@email.com", phone: "+1 (555) 234-5678", applied: "Applied 1 day ago", color: "bg-purple-500" },
];

export default function CandidateFilteringMockup() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const ctx = gsap.context(() => {
      const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReduced) return;

      const statCards = containerRef.current!.querySelectorAll("[data-stat-card]");
      gsap.set(statCards, { y: 40, opacity: 0, scale: 0.8 });

      const candidateRows = containerRef.current!.querySelectorAll("[data-candidate-row]");
      gsap.set(candidateRows, { x: -50, opacity: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "bottom 15%",
          toggleActions: "play reverse play reverse",
        },
      });

      tl.to(statCards, {
        y: 0, opacity: 1, scale: 1,
        duration: 0.6, stagger: 0.15,
        ease: "back.out(1.8)",
      }, 0);

      const numEls = containerRef.current!.querySelectorAll("[data-count-up]");
      numEls.forEach((el) => {
        const target = parseInt(el.getAttribute("data-count-up") || "0");
        const obj = { val: 0 };
        tl.to(obj, {
          val: target, duration: 1.2, ease: "power3.out",
          onUpdate: () => { (el as HTMLElement).textContent = Math.round(obj.val).toLocaleString(); },
        }, 0.2);
      });

      tl.to(candidateRows, {
        x: 0, opacity: 1,
        duration: 0.6, stagger: 0.2,
        ease: "power3.out",
      }, 0.4);

      const badges = containerRef.current!.querySelectorAll("[data-badge]");
      gsap.set(badges, { scale: 0 });
      tl.to(badges, {
        scale: 1, duration: 0.4, stagger: 0.1,
        ease: "back.out(3)",
      }, 0.8);

    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="bg-white dark:bg-[#1e293b] rounded-2xl p-5 shadow-lg border border-border select-none" style={{ fontSize: "12px" }}>
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div data-stat-card className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4 border border-blue-100 dark:border-blue-800/30">
          <div className="flex items-center justify-between mb-2">
            <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
              <Users className="w-4 h-4 text-white" />
            </div>
            <span data-badge className="text-[10px] text-emerald-500 font-semibold flex items-center gap-0.5">
              <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none"><path d="M2 8L6 4L10 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
              +12.5%
            </span>
          </div>
          <div className="text-[10px] text-muted-foreground" data-testid="text-total-candidates">Total Candidates</div>
          <div className="text-2xl font-bold text-foreground" data-count-up="156" data-testid="text-total-candidates-value">0</div>
        </div>
        <div data-stat-card className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4 border border-blue-100 dark:border-blue-800/30">
          <div className="flex items-center justify-between mb-2">
            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
              <Briefcase className="w-4 h-4 text-white" />
            </div>
            <span data-badge className="text-[10px] text-emerald-500 font-semibold flex items-center gap-0.5">
              <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none"><path d="M2 8L6 4L10 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
              +3
            </span>
          </div>
          <div className="text-[10px] text-muted-foreground" data-testid="text-in-review">In Review</div>
          <div className="text-2xl font-bold text-foreground" data-count-up="42" data-testid="text-in-review-value">0</div>
        </div>
      </div>

      <div className="space-y-3">
        {candidates.map((c, i) => (
          <div key={i} data-candidate-row data-testid={`card-candidate-${i}`} className="bg-gray-50 dark:bg-[#0f172a] rounded-xl p-4 border border-border">
            <div className="flex flex-wrap items-center gap-3">
              <div className={`w-10 h-10 rounded-full ${c.color} flex items-center justify-center text-white text-sm font-bold flex-shrink-0`}>
                {c.initials}
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-bold text-foreground text-[13px]">{c.name}</div>
                <div className="text-emerald-600 dark:text-emerald-400 font-semibold text-[11px]">{c.role}</div>
                <div className="flex flex-wrap items-center gap-4 mt-1.5 text-[10px] text-muted-foreground">
                  <span className="flex items-center gap-1"><Mail className="w-3 h-3" />{c.email}</span>
                  <span className="flex items-center gap-1"><Phone className="w-3 h-3" />{c.phone}</span>
                </div>
                <div className="flex items-center gap-1 mt-1 text-[10px] text-orange-500">
                  <Calendar className="w-3 h-3" />
                  {c.applied}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
