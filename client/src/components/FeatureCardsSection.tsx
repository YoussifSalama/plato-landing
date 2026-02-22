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

    const rows = cardsContainerRef.current.querySelectorAll<HTMLElement>("[data-feature-row]");
    if (!rows.length) return;

    const ctx = gsap.context(() => {
      gsap.set(rows, {
        y: (i: number) => -i * 30,
        scale: (i: number) => 1 - i * 0.03,
        opacity: (i: number) => i === 0 ? 1 : 0.35,
        rotateX: (i: number) => i * 3,
        zIndex: (i: number) => rows.length - i,
      });

      const scatterTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "top 20%",
          scrub: 0.8,
        },
      });

      scatterTl.to(rows, {
        y: 0,
        scale: 1,
        opacity: 1,
        rotateX: 0,
        stagger: 0.1,
        duration: 1,
        ease: "power2.out",
      });

      rows.forEach((row) => {
        ScrollTrigger.create({
          trigger: row,
          start: "top 60%",
          end: "bottom 40%",
          onEnter: () => highlightRow(row, rows),
          onEnterBack: () => highlightRow(row, rows),
          onLeave: () => resetRows(rows),
          onLeaveBack: () => resetRows(rows),
        });
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  function highlightRow(active: HTMLElement, all: NodeListOf<HTMLElement>) {
    all.forEach((row) => {
      if (row === active) {
        gsap.to(row, {
          scale: 1.01,
          y: -4,
          opacity: 1,
          boxShadow: "0 20px 60px rgba(0,0,0,0.12)",
          duration: 0.4,
          ease: "power2.out",
          overwrite: true,
        });
      } else {
        gsap.to(row, {
          scale: 0.98,
          y: 0,
          opacity: 0.45,
          boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
          duration: 0.4,
          ease: "power2.out",
          overwrite: true,
        });
      }
    });
  }

  function resetRows(all: NodeListOf<HTMLElement>) {
    all.forEach((row) => {
      gsap.to(row, {
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
        <div data-feature-row className="grid grid-cols-1 md:grid-cols-2 gap-6 rounded-2xl" data-testid="feature-cards-row1">
          <div
            className="bg-muted rounded-2xl p-6 sm:p-8 border border-border transition-shadow space-y-4"
            data-testid="feature-card-candidate-filtering"
          >
            <CandidateFilteringMockup />
            <div className="px-1">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground" data-testid="text-feature-candidate-filtering">
                {t.featuresSection.candidateFiltering}
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                {t.featuresSection.candidateFilteringDesc}
              </p>
            </div>
          </div>

          <div
            className="bg-primary/5 dark:bg-primary/10 rounded-2xl p-6 sm:p-8 border border-border transition-shadow"
            data-testid="feature-card-cv-analysis"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2" data-testid="text-feature-cv-analysis">
              {t.featuresSection.cvAnalysis}
            </h3>
            <p className="text-sm text-muted-foreground mb-5">
              {t.featuresSection.cvAnalysisDesc}
            </p>
            <AICVAnalysisMockup />
          </div>
        </div>

        <div data-feature-row className="grid grid-cols-1 md:grid-cols-2 gap-6 rounded-2xl" data-testid="feature-cards-row2">
          <div
            className="bg-muted rounded-2xl p-6 sm:p-8 border border-border transition-shadow space-y-4"
            data-testid="feature-card-hiring-quality"
          >
            <NotificationsMockup />
            <div className="px-1">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground" data-testid="text-feature-hiring-quality">
                {t.featuresSection.hiringQuality}
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                {t.featuresSection.hiringQualityDesc}
              </p>
            </div>
          </div>

          <div
            className="bg-emerald-500 dark:bg-emerald-600 rounded-2xl p-6 sm:p-8 border border-border transition-shadow"
            data-testid="feature-card-save-time"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2" data-testid="text-feature-save-time">
              {t.featuresSection.saveTime}
            </h3>
            <p className="text-sm text-white/80 mb-2">
              {t.featuresSection.saveTimeDesc}
            </p>
            <SaveTimeMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
