import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Calendar, TrendingUp, Clock, CheckCircle } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const cards = [
  { icon: Calendar, label: "Total", value: 8, color: "bg-blue-800", textColor: "text-white" },
  { icon: TrendingUp, label: "Week", value: 3, color: "bg-orange-400", textColor: "text-white" },
  { icon: Clock, label: "Today", value: 3, color: "bg-purple-400", textColor: "text-white" },
  { icon: CheckCircle, label: "Done", value: 47, color: "bg-blue-600", textColor: "text-white" },
];

export default function SaveTimeMockup() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const ctx = gsap.context(() => {
      const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReduced) return;

      const stackCards = containerRef.current!.querySelectorAll("[data-stack-card]");
      const totalCards = stackCards.length;

      gsap.set(stackCards, {
        y: (i: number) => i * 3,
        x: 0,
        opacity: (i: number) => i === 0 ? 1 : 0,
        scale: (i: number) => 1 - i * 0.02,
        rotation: 0,
        zIndex: (i: number) => totalCards - i,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          end: "top 25%",
          scrub: 0.5,
        },
      });

      stackCards.forEach((card, i) => {
        tl.to(card, {
          y: i * 60,
          x: i * 15,
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 1.2,
          ease: "power3.out",
        }, 0.12 * i);
      });

      const countTl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
          end: "bottom 15%",
          toggleActions: "play reverse play reverse",
        },
      });

      const numEls = containerRef.current!.querySelectorAll("[data-count-up]");
      numEls.forEach((el, i) => {
        const target = parseInt(el.getAttribute("data-count-up") || "0");
        const obj = { val: 0 };
        countTl.to(obj, {
          val: target, duration: 1, ease: "power3.out",
          onUpdate: () => { (el as HTMLElement).textContent = String(Math.round(obj.val)); },
        }, 0.3 + i * 0.1);
      });

      const badges = containerRef.current!.querySelectorAll("[data-badge]");
      gsap.set(badges, { scale: 0 });
      countTl.to(badges, {
        scale: 1, duration: 0.4, stagger: 0.1,
        ease: "back.out(3)",
      }, 0.5);

    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="select-none py-4 px-2" style={{ fontSize: "12px" }}>
      <div className="relative" style={{ height: "280px" }}>
        {cards.map((card, i) => (
          <div
            key={i}
            data-stack-card
            className={`absolute left-0 right-0 ${card.color} rounded-2xl p-5 shadow-xl`}
            style={{
              top: "0px",
              zIndex: cards.length - i,
              marginLeft: "0px",
              marginRight: "0px",
            }}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                <card.icon className={`w-5 h-5 ${card.textColor}`} />
              </div>
              <span data-badge className="bg-white text-gray-800 text-[10px] font-semibold px-3 py-1 rounded-full">
                {card.label}
              </span>
            </div>
            <div className={`text-3xl font-bold ${card.textColor}`} data-count-up={String(card.value)}>0</div>
          </div>
        ))}
      </div>
    </div>
  );
}
