import { useRef, useLayoutEffect } from "react";
import { useI18n } from "@/lib/i18n";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CandidateFilteringMockup from "@/components/feature-mockups/CandidateFilteringMockup";
import AICVAnalysisMockup from "@/components/feature-mockups/AICVAnalysisMockup";
import NotificationsMockup from "@/components/feature-mockups/NotificationsMockup";
import SaveTimeMockup from "@/components/feature-mockups/SaveTimeMockup";

gsap.registerPlugin(ScrollTrigger);

export default function FeatureCardsSection() {
  const { t } = useI18n();
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!sectionRef.current || !cardsContainerRef.current) return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const cards = cardsContainerRef.current.querySelectorAll<HTMLElement>("[data-feature-card]");
    if (!cards.length) return;

    const ctx = gsap.context(() => {
      gsap.set(cards, {
        y: (i: number) => -i * 40,
        scale: (i: number) => 1 - i * 0.03,
        opacity: (i: number) => i === 0 ? 1 : 0.4,
        rotateX: (i: number) => i * 3,
        zIndex: (i: number) => cards.length - i,
      });

      const scatterTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "top 20%",
          scrub: 0.8,
        },
      });

      scatterTl.to(cards, {
        y: 0,
        scale: 1,
        opacity: 1,
        rotateX: 0,
        stagger: 0.05,
        duration: 1,
        ease: "power2.out",
      });

      cards.forEach((card) => {
        ScrollTrigger.create({
          trigger: card,
          start: "top 60%",
          end: "bottom 40%",
          onEnter: () => highlightCard(card, cards),
          onEnterBack: () => highlightCard(card, cards),
          onLeave: () => resetCards(cards),
          onLeaveBack: () => resetCards(cards),
        });
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  function highlightCard(active: HTMLElement, all: NodeListOf<HTMLElement>) {
    all.forEach((card) => {
      if (card === active) {
        gsap.to(card, {
          scale: 1.03,
          y: -8,
          opacity: 1,
          boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
          duration: 0.4,
          ease: "power2.out",
          overwrite: true,
        });
      } else {
        gsap.to(card, {
          scale: 0.97,
          y: 0,
          opacity: 0.5,
          boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
          duration: 0.4,
          ease: "power2.out",
          overwrite: true,
        });
      }
    });
  }

  function resetCards(all: NodeListOf<HTMLElement>) {
    all.forEach((card) => {
      gsap.to(card, {
        scale: 1,
        y: 0,
        opacity: 1,
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
        duration: 0.3,
        ease: "power2.out",
        overwrite: true,
      });
    });
  }

  return (
    <section ref={sectionRef} className="py-12 sm:py-16" style={{ perspective: "1200px" }}>
      <div
        ref={cardsContainerRef}
        className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 space-y-6"
      >
        <div
          data-feature-card
          className="bg-muted rounded-2xl p-6 sm:p-8 border border-border transition-shadow"
          data-testid="feature-card-candidate-filtering"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            <div>
              <CandidateFilteringMockup />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2" data-testid="text-feature-candidate-filtering">
                {t.featuresSection.candidateFiltering}
              </h3>
              <p className="text-sm text-muted-foreground">
                {t.featuresSection.candidateFilteringDesc}
              </p>
            </div>
          </div>
        </div>

        <div
          data-feature-card
          className="bg-primary/5 dark:bg-primary/10 rounded-2xl p-6 sm:p-8 border border-border transition-shadow"
          data-testid="feature-card-cv-analysis"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            <div className="flex flex-col justify-center md:order-2">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2" data-testid="text-feature-cv-analysis">
                {t.featuresSection.cvAnalysis}
              </h3>
              <p className="text-sm text-muted-foreground">
                {t.featuresSection.cvAnalysisDesc}
              </p>
            </div>
            <div className="md:order-1">
              <AICVAnalysisMockup />
            </div>
          </div>
        </div>

        <div
          data-feature-card
          className="bg-muted rounded-2xl p-6 sm:p-8 border border-border transition-shadow"
          data-testid="feature-card-hiring-quality"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            <div>
              <NotificationsMockup />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2" data-testid="text-feature-hiring-quality">
                {t.featuresSection.hiringQuality}
              </h3>
              <p className="text-sm text-muted-foreground">
                {t.featuresSection.hiringQualityDesc}
              </p>
            </div>
          </div>
        </div>

        <div
          data-feature-card
          className="bg-emerald-500 dark:bg-emerald-600 rounded-2xl p-6 sm:p-8 border border-border transition-shadow"
          data-testid="feature-card-save-time"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            <div className="flex flex-col justify-center md:order-2">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2" data-testid="text-feature-save-time">
                {t.featuresSection.saveTime}
              </h3>
              <p className="text-sm text-white/80">
                {t.featuresSection.saveTimeDesc}
              </p>
            </div>
            <div className="md:order-1">
              <SaveTimeMockup />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
