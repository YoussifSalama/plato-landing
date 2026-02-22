import { useState, useEffect } from "react";
import { useI18n } from "@/lib/i18n";
import { useSEO } from "@/hooks/useSEO";
import { getDemoLink, config } from "@/lib/config";
import { Button } from "@/components/ui/button";
import { Plus, Minus } from "lucide-react";
import { SiLinkedin, SiInstagram } from "react-icons/si";
import { FaCog } from "react-icons/fa";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

import logoAccentia from "@/assets/logos/accentia.png";
import logoImplex from "@/assets/logos/implex.png";
import logoAicansell from "@/assets/logos/aicansell.png";
import logoIaugmentor from "@/assets/logos/iaugmentor.png";
import logoSkillcreds from "@/assets/logos/skillcreds.png";
import logoNeuroespitalia from "@/assets/logos/neuroespitalia.png";
import logoPolygonPharma from "@/assets/logos/polygon-pharma.png";
import logoGrove from "@/assets/logos/grove.png";
import logoMelanite from "@/assets/logos/melanite.png";
import logoBenchmark from "@/assets/logos/benchmark.png";
import logoQuanta from "@/assets/logos/quanta.png";
import logoEslsca from "@/assets/logos/eslsca.png";
import logoMisrCement from "@/assets/logos/misr-cement.png";
import logoVenezia from "@/assets/logos/venezia.png";
import logoIkon from "@/assets/logos/ikon.png";

const clientLogos = [
  { src: logoAccentia, alt: "Accentia Middle East" },
  { src: logoImplex, alt: "Implex" },
  { src: logoAicansell, alt: "AiCanSell" },
  { src: logoIaugmentor, alt: "iAugmentor" },
  { src: logoSkillcreds, alt: "SkillCreds" },
  { src: logoNeuroespitalia, alt: "NeuroEspitalia" },
  { src: logoPolygonPharma, alt: "Polygon Pharma" },
  { src: logoGrove, alt: "Grove" },
  { src: logoMelanite, alt: "Melanite" },
  { src: logoBenchmark, alt: "Benchmark Engineering" },
  { src: logoQuanta, alt: "Quanta" },
  { src: logoEslsca, alt: "ESLSCA University" },
  { src: logoMisrCement, alt: "Misr Beni Suef Cement" },
  { src: logoVenezia, alt: "Ceramica Venezia" },
  { src: logoIkon, alt: "Ikon Industries" },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-gray-200 dark:border-white/10">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left"
        data-testid={`faq-item-${question.slice(0, 20).replace(/\s+/g, "-").toLowerCase()}`}
      >
        <span className="text-sm sm:text-base font-medium text-foreground">{question}</span>
        {open ? (
          <Minus className="w-5 h-5 text-muted-foreground flex-shrink-0 ml-4" />
        ) : (
          <Plus className="w-5 h-5 text-muted-foreground flex-shrink-0 ml-4" />
        )}
      </button>
      {open && (
        <div className="pb-5 text-sm text-muted-foreground leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
}

function DashboardAssembly() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.05, rootMargin: "0px 0px -30px 0px" });

  return (
    <div
      ref={ref}
      className={`dashboard-assembly rounded-2xl border border-border shadow-2xl overflow-hidden ${isVisible ? "is-visible" : ""}`}
      data-testid="img-dashboard-mockup"
    >
      <div className="dashboard-piece dashboard-piece-1">
        <img
          src="/images/dashboard-top.png"
          alt="Plato Dashboard — Overview"
          fetchPriority="high"
          loading="eager"
        />
      </div>
      <div className="dashboard-piece dashboard-piece-2">
        <img
          src="/images/dashboard-middle.png"
          alt="Plato Dashboard — Charts & Analytics"
        />
      </div>
      <div className="dashboard-piece dashboard-piece-3">
        <img
          src="/images/dashboard-bottom.png"
          alt="Plato Dashboard — Recent Activity"
        />
      </div>
    </div>
  );
}

export default function Home() {
  const { t, lang, localePath } = useI18n();
  useSEO({ description: t.meta.pages.home.description });

  useEffect(() => {
    ["/images/dashboard-top.png", "/images/dashboard-middle.png", "/images/dashboard-bottom.png"].forEach((s) => {
      const img = new Image();
      img.src = s;
    });
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-24 sm:pt-32 lg:pt-40 pb-16 sm:pb-20">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <ScrollReveal animation="fade-up">
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-foreground"
              data-testid="text-hero-headline"
            >
              {t.hero.headline}
            </h1>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={2}>
            <p
              className="mt-6 text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed"
              data-testid="text-hero-subheadline"
            >
              {t.hero.subheadline}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Dashboard Mockup — Animated Assembly */}
      <section className="pb-16 sm:pb-20">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <DashboardAssembly />
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <ScrollReveal animation="fade-in">
            <p className="text-center text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground mb-10" data-testid="text-trusted-by">
              {t.trustedBy.title}
            </p>
          </ScrollReveal>
          <div className="marquee-container">
            <div className="marquee-track">
              {[...clientLogos, ...clientLogos].map((logo, i) => (
                <img
                  key={`${logo.alt}-${i}`}
                  src={logo.src}
                  alt={logo.alt}
                  className="h-8 sm:h-10 w-auto max-w-[100px] sm:max-w-[120px] object-contain opacity-60 dark:brightness-0 dark:invert grayscale mx-6 sm:mx-10 flex-shrink-0"
                  data-testid={i < clientLogos.length ? `logo-${logo.alt.toLowerCase().replace(/\s+/g, "-")}` : undefined}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Statement Section */}
      <section className="py-20 sm:py-28 lg:py-36">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <ScrollReveal animation="fade-left">
            <div className="space-y-2">
              <p className="text-2xl sm:text-3xl lg:text-4xl font-medium text-foreground/80 leading-snug" data-testid="text-statement-1">
                {t.statementSection.line1}
              </p>
              <p className="text-2xl sm:text-3xl lg:text-4xl font-medium text-foreground leading-snug" data-testid="text-statement-2">
                {t.statementSection.line2}
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal animation="fade-right" delay={2}>
            <div className="mt-8 space-y-1">
              <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground leading-snug" data-testid="text-statement-3">
                {t.statementSection.line3}
              </p>
              <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground/70 leading-snug" data-testid="text-statement-4">
                {t.statementSection.line4}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 space-y-6">
          <ScrollReveal animation="fade-up">
            <div className="bg-muted rounded-2xl p-8 sm:p-10 border border-border">
              <h3 className="text-xl sm:text-2xl font-bold mb-2 text-foreground" data-testid="text-feature-smart-job">
                {t.featuresSection.smartJobManagement}
              </h3>
              <p className="text-sm text-muted-foreground mb-6">
                {t.featuresSection.smartJobManagementDesc}
              </p>
              <div className="rounded-xl overflow-hidden border border-border">
                <img
                  src="/images/smart-job.png"
                  alt="Smart Job Management"
                  className="w-full h-auto"
                  data-testid="img-smart-job"
                />
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-left" delay={1}>
            <div className="rounded-2xl overflow-hidden">
              <img
                src="/images/features-row1.png"
                alt="Advanced Candidate Filtering and AI CV Analysis"
                className="w-full h-auto"
                data-testid="img-feature-cards-row1"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-right" delay={1}>
            <div className="rounded-2xl overflow-hidden">
              <img
                src="/images/features-row2.png"
                alt="Improve Hiring Quality and Save Time"
                className="w-full h-auto"
                data-testid="img-feature-cards-row2"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <ScrollReveal animation="fade-up">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-foreground" data-testid="text-comparison-title">
              {t.comparisonSection.title}
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg mb-16" data-testid="text-comparison-subtitle">
              {t.comparisonSection.subtitle}
            </p>
          </ScrollReveal>

          <ScrollReveal animation="fade-left" delay={2}>
            <div className="rounded-2xl overflow-hidden mb-16">
              <img
                src="/images/time-comparison.png"
                alt="Hire the Best Talent / Time - without Plato AI: 7 days, with Plato AI: 2 mins"
                className="w-full h-auto"
                data-testid="img-time-comparison"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-up">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-foreground" data-testid="text-cost-title">
              {t.comparisonSection.costTitle}
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg mb-12">
              {t.comparisonSection.costSubtitle}
            </p>
          </ScrollReveal>

          <ScrollReveal animation="fade-right" delay={2}>
            <div className="rounded-2xl overflow-hidden">
              <img
                src="/images/cost-comparison.png"
                alt="Recruitment Expenses Cost - without Plato AI: 5% Cost Save, with Plato AI: 90% Cost Save"
                className="w-full h-auto"
                data-testid="img-cost-comparison"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 sm:py-28 bg-muted">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <ScrollReveal animation="fade-up">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight text-foreground" data-testid="text-faq-title">
                {t.faqSection.title}
              </h2>
              <p className="text-muted-foreground text-base lg:pt-2" data-testid="text-faq-subtitle">
                {t.faqSection.subtitle}
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={1}>
            <div>
              {t.faqSection.items.map((item, i) => (
                <FAQItem key={i} question={item.q} answer={item.a} />
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <ScrollReveal animation="scale-up">
        <section className="relative overflow-hidden">
          <a href={config.employerAppUrl} data-testid="button-start-trial" className="block">
            <img
              src="/images/cta-banner.png"
              alt="Ready to transform your hiring process? Start Free Trial or Request Demo"
              className="w-full h-auto"
              data-testid="img-cta-section"
            />
          </a>
        </section>
      </ScrollReveal>

      {/* Footer */}
      <footer className="bg-card border-t border-border pt-16 pb-8">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <ScrollReveal animation="fade-up">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
              <div>
                <h4 className="text-sm font-semibold mb-4 text-foreground">{t.footerSection.product}</h4>
                <ul className="space-y-2.5">
                  <li><span className="text-xs text-muted-foreground hover:text-foreground transition-colors cursor-pointer" data-testid="link-footer-changelog">{t.footerSection.changelog}</span></li>
                  <li><span className="text-xs text-muted-foreground hover:text-foreground transition-colors cursor-pointer" data-testid="link-footer-customer-stories">{t.footerSection.customerStories}</span></li>
                  <li><a href={localePath("/security")} className="text-xs text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-security">{t.footerSection.security}</a></li>
                  <li><span className="text-xs text-muted-foreground hover:text-foreground transition-colors cursor-pointer" data-testid="link-footer-chrome">{t.footerSection.chromeExtension} ↗</span></li>
                  <li><span className="text-xs text-muted-foreground hover:text-foreground transition-colors cursor-pointer" data-testid="link-footer-ios">{t.footerSection.iosApp} ↗</span></li>
                  <li><span className="text-xs text-muted-foreground hover:text-foreground transition-colors cursor-pointer" data-testid="link-footer-android">{t.footerSection.androidApp} ↗</span></li>
                  <li><span className="text-xs text-muted-foreground hover:text-foreground transition-colors cursor-pointer" data-testid="link-footer-zapier">{t.footerSection.zapier} ↗</span></li>
                  <li><span className="text-xs text-muted-foreground hover:text-foreground transition-colors cursor-pointer" data-testid="link-footer-integromat">{t.footerSection.integromat} ↗</span></li>
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-semibold mb-4 text-foreground">{t.footerSection.company}</h4>
                <ul className="space-y-2.5">
                  <li><span className="text-xs text-muted-foreground hover:text-foreground transition-colors cursor-pointer" data-testid="link-footer-about">{t.footerSection.about}</span></li>
                  <li><span className="text-xs text-muted-foreground hover:text-foreground transition-colors cursor-pointer" data-testid="link-footer-careers">{t.footerSection.careers}</span></li>
                  <li><a href={localePath("/blog")} className="text-xs text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-blog">{t.footerSection.blog}</a></li>
                  <li><span className="text-xs text-muted-foreground hover:text-foreground transition-colors cursor-pointer" data-testid="link-footer-startup-program">{t.footerSection.startupProgram}</span></li>
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-semibold mb-4 text-foreground">{t.footerSection.platoFor}</h4>
                <ul className="space-y-2.5">
                  <li><span className="text-xs text-muted-foreground hover:text-foreground transition-colors cursor-pointer" data-testid="link-footer-startups">{t.footerSection.startups}</span></li>
                  <li><span className="text-xs text-muted-foreground hover:text-foreground transition-colors cursor-pointer" data-testid="link-footer-agencies">{t.footerSection.agencies}</span></li>
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-semibold mb-4 text-foreground">{t.footerSection.support}</h4>
                <ul className="space-y-2.5">
                  <li><span className="text-xs text-muted-foreground hover:text-foreground transition-colors cursor-pointer" data-testid="link-footer-help">{t.footerSection.helpCenter}</span></li>
                  <li><a href={localePath("/contact")} className="text-xs text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-support">{t.footerSection.talkToSupport}</a></li>
                  <li><span className="text-xs text-muted-foreground hover:text-foreground transition-colors cursor-pointer" data-testid="link-footer-api-docs">{t.footerSection.apiDocs} ↗</span></li>
                  <li><span className="text-xs text-muted-foreground hover:text-foreground transition-colors cursor-pointer" data-testid="link-footer-system-status">{t.footerSection.systemStatus} ↗</span></li>
                </ul>
              </div>

              <div className="col-span-2">
                <h4 className="text-sm font-semibold mb-4 text-foreground">{t.footerSection.readyToBuild}</h4>
                <div className="flex flex-col gap-3">
                  <a href={config.employerAppUrl} data-testid="button-footer-start-free">
                    <Button className="w-full rounded-full" size="lg">
                      {t.footerSection.startForFree}
                    </Button>
                  </a>
                  <a href={getDemoLink()} data-testid="button-footer-request-demo">
                    <Button variant="outline" className="w-full rounded-full" size="lg">
                      {t.footerSection.requestDemo}
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <div className="pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground/70" data-testid="text-copyright">
              {t.footerSection.copyright}
            </p>
            <div className="flex items-center gap-4">
              <a href={localePath("/terms")} className="text-xs text-muted-foreground/70 hover:text-muted-foreground transition-colors" data-testid="link-footer-terms">
                {t.footerSection.termsAndConditions}
              </a>
              <span className="text-muted-foreground/30">·</span>
              <a href={localePath("/privacy")} className="text-xs text-muted-foreground/70 hover:text-muted-foreground transition-colors" data-testid="link-footer-privacy">
                {t.footerSection.privacyPolicy}
              </a>
            </div>
            <div className="flex items-center gap-3">
              {config.linkedinUrl && (
                <a
                  href={config.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="LinkedIn"
                  data-testid="link-linkedin"
                >
                  <SiLinkedin className="w-4 h-4" />
                </a>
              )}
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Instagram" data-testid="link-footer-instagram">
                <SiInstagram className="w-4 h-4" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Settings" data-testid="link-footer-settings">
                <FaCog className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
