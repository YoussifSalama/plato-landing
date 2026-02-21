import { useState } from "react";
import { useI18n } from "@/lib/i18n";
import { useSEO } from "@/hooks/useSEO";
import { getDemoLink, config } from "@/lib/config";
import { Button } from "@/components/ui/button";
import { Plus, Minus } from "lucide-react";
import { SiLinkedin, SiInstagram } from "react-icons/si";
import { FaCog } from "react-icons/fa";

import platoLogo from "@/assets/plato-logo.png";
import dashboardMockup from "@/assets/dashboard-mockup.png";
import smartJobImg from "@/assets/features/smart-job-management.png";
import candidateFilterImg from "@/assets/features/candidate-filtering.png";
import cvAnalysisImg from "@/assets/features/cv-analysis.png";
import notificationsImg from "@/assets/features/notifications.png";
import saveTimeImg from "@/assets/features/save-time.png";

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

export default function Home() {
  const { t, lang, localePath } = useI18n();
  useSEO({ description: t.meta.pages.home.description });

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-24 sm:pt-32 lg:pt-40 pb-16 sm:pb-20">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-foreground"
            data-testid="text-hero-headline"
          >
            {t.hero.headline}
          </h1>
          <p
            className="mt-6 text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            data-testid="text-hero-subheadline"
          >
            {t.hero.subheadline}
          </p>
        </div>
      </section>

      {/* Dashboard Mockup */}
      <section className="pb-16 sm:pb-20">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="rounded-2xl overflow-hidden border border-border shadow-2xl">
            <img
              src={dashboardMockup}
              alt="Plato Dashboard"
              className="w-full h-auto"
              data-testid="img-dashboard-mockup"
            />
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <p className="text-center text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground mb-10" data-testid="text-trusted-by">
            {t.trustedBy.title}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-6 sm:gap-x-12">
            {clientLogos.map((logo) => (
              <img
                key={logo.alt}
                src={logo.src}
                alt={logo.alt}
                className="h-8 sm:h-10 w-auto max-w-[100px] sm:max-w-[120px] object-contain opacity-70 dark:brightness-0 dark:invert grayscale"
                data-testid={`logo-${logo.alt.toLowerCase().replace(/\s+/g, "-")}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Statement Section */}
      <section className="py-20 sm:py-28 lg:py-36">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="space-y-2">
            <p className="text-2xl sm:text-3xl lg:text-4xl font-medium text-foreground/80 leading-snug" data-testid="text-statement-1">
              {t.statementSection.line1}
            </p>
            <p className="text-2xl sm:text-3xl lg:text-4xl font-medium text-foreground leading-snug" data-testid="text-statement-2">
              {t.statementSection.line2}
            </p>
          </div>
          <div className="mt-8 space-y-1">
            <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground leading-snug" data-testid="text-statement-3">
              {t.statementSection.line3}
            </p>
            <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground/70 leading-snug" data-testid="text-statement-4">
              {t.statementSection.line4}
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 space-y-6">
          {/* Smart Job Management - Full Width */}
          <div className="bg-muted rounded-2xl p-8 sm:p-10 border border-border">
            <h3 className="text-xl sm:text-2xl font-bold mb-2 text-foreground" data-testid="text-feature-smart-job">
              {t.featuresSection.smartJobManagement}
            </h3>
            <p className="text-sm text-muted-foreground mb-6">
              {t.featuresSection.smartJobManagementDesc}
            </p>
            <div className="rounded-xl overflow-hidden border border-border">
              <img
                src={smartJobImg}
                alt="Smart Job Management"
                className="w-full h-auto"
                data-testid="img-smart-job"
              />
            </div>
          </div>

          {/* 2x2 Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Advanced Candidate Filtering - accent blue */}
            <div className="bg-accent rounded-2xl p-6 sm:p-8 border border-border">
              <div className="rounded-xl overflow-hidden mb-6 border border-border">
                <img
                  src={candidateFilterImg}
                  alt="Candidate Filtering"
                  className="w-full h-auto"
                  data-testid="img-candidate-filter"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2" data-testid="text-feature-filtering">
                {t.featuresSection.candidateFiltering}
              </h3>
              <p className="text-sm text-muted-foreground">
                {t.featuresSection.candidateFilteringDesc}
              </p>
            </div>

            {/* AI CV Analysis */}
            <div className="bg-muted rounded-2xl p-6 sm:p-8 border border-border">
              <h3 className="text-lg sm:text-xl font-bold mb-2 text-foreground" data-testid="text-feature-cv-analysis">
                {t.featuresSection.cvAnalysis}
              </h3>
              <p className="text-sm text-muted-foreground mb-6">
                {t.featuresSection.cvAnalysisDesc}
              </p>
              <div className="rounded-xl overflow-hidden border border-border">
                <img
                  src={cvAnalysisImg}
                  alt="CV Analysis"
                  className="w-full h-auto"
                  data-testid="img-cv-analysis"
                />
              </div>
            </div>

            {/* Improve Hiring Quality */}
            <div className="bg-muted rounded-2xl p-6 sm:p-8 border border-border">
              <div className="rounded-xl overflow-hidden mb-6 border border-border">
                <img
                  src={notificationsImg}
                  alt="Notifications"
                  className="w-full h-auto"
                  data-testid="img-notifications"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 text-foreground" data-testid="text-feature-hiring-quality">
                {t.featuresSection.hiringQuality}
              </h3>
              <p className="text-sm text-muted-foreground">
                {t.featuresSection.hiringQualityDesc}
              </p>
            </div>

            {/* Save Time - Green */}
            <div className="bg-gradient-to-br from-emerald-500 to-green-400 dark:from-emerald-600 dark:to-green-500 rounded-2xl p-6 sm:p-8">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2" data-testid="text-feature-save-time">
                {t.featuresSection.saveTime}
              </h3>
              <p className="text-sm text-white/80 mb-6">
                {t.featuresSection.saveTimeDesc}
              </p>
              <div className="rounded-xl overflow-hidden">
                <img
                  src={saveTimeImg}
                  alt="Save Time"
                  className="w-full h-auto"
                  data-testid="img-save-time"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-foreground" data-testid="text-comparison-title">
            {t.comparisonSection.title}
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg mb-16" data-testid="text-comparison-subtitle">
            {t.comparisonSection.subtitle}
          </p>

          {/* Time Comparison Card */}
          <div className="bg-card rounded-2xl p-8 sm:p-10 border border-border mb-16 text-left">
            <h3 className="text-xl sm:text-2xl font-bold mb-8 text-foreground" data-testid="text-time-comparison">
              {t.comparisonSection.timeTitle}
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="bg-destructive/10 text-destructive text-sm font-medium px-4 py-2.5 rounded-lg whitespace-nowrap">
                  {t.comparisonSection.withoutPlato}
                </div>
                <div className="flex-1 h-3 bg-destructive/20 rounded-full" />
                <span className="text-muted-foreground text-sm font-medium whitespace-nowrap">{t.comparisonSection.timeBefore}</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-primary text-primary-foreground text-sm font-medium px-4 py-2.5 rounded-lg whitespace-nowrap">
                  {t.comparisonSection.withPlato}
                </div>
                <div className="w-12 h-3 bg-primary/30 rounded-full" />
                <span className="text-foreground font-bold text-sm whitespace-nowrap">{t.comparisonSection.timeAfter}</span>
              </div>
            </div>
          </div>

          {/* Cut Costs */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-foreground" data-testid="text-cost-title">
            {t.comparisonSection.costTitle}
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg mb-12">
            {t.comparisonSection.costSubtitle}
          </p>

          {/* Cost Comparison Card */}
          <div className="bg-card rounded-2xl p-8 sm:p-10 border border-border text-left">
            <h3 className="text-xl sm:text-2xl font-bold mb-8 text-foreground" data-testid="text-cost-comparison">
              {t.comparisonSection.costCardTitle}
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="bg-destructive/10 text-destructive text-sm font-medium px-4 py-2.5 rounded-lg whitespace-nowrap">
                  {t.comparisonSection.withoutPlato}
                </div>
                <div className="w-8 h-3 bg-destructive/20 rounded-full" />
                <span className="text-muted-foreground text-sm font-medium whitespace-nowrap">{t.comparisonSection.costBefore}</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-primary text-primary-foreground text-sm font-medium px-4 py-2.5 rounded-lg whitespace-nowrap">
                  {t.comparisonSection.withPlato}
                </div>
                <div className="flex-1 h-3 bg-primary/30 rounded-full" />
                <span className="text-foreground font-bold text-sm whitespace-nowrap">{t.comparisonSection.costAfter}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 sm:py-28 bg-muted">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight text-foreground" data-testid="text-faq-title">
              {t.faqSection.title}
            </h2>
            <p className="text-muted-foreground text-base lg:pt-2" data-testid="text-faq-subtitle">
              {t.faqSection.subtitle}
            </p>
          </div>
          <div>
            {t.faqSection.items.map((item, i) => (
              <FAQItem key={i} question={item.q} answer={item.a} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-28 bg-accent relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight mb-8 text-foreground" data-testid="text-cta-title">
                {t.ctaSection.title}{" "}
                <span className="font-extrabold">{t.ctaSection.titleBold}</span>
              </h2>
              <div className="flex flex-wrap gap-4">
                <a href={config.employerAppUrl} data-testid="button-start-trial">
                  <Button
                    size="lg"
                    className="rounded-full px-8"
                  >
                    {t.ctaSection.startTrial}
                  </Button>
                </a>
                <a href={getDemoLink()} data-testid="button-request-demo-cta">
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-full px-8"
                  >
                    {t.ctaSection.requestDemo}
                  </Button>
                </a>
              </div>
            </div>
            <div className="hidden lg:flex justify-end">
              <div className="relative w-64 h-64 opacity-10 dark:opacity-20">
                <svg viewBox="0 0 200 200" className="w-full h-full" stroke="currentColor" strokeWidth="0.5" fill="none">
                  <circle cx="60" cy="60" r="8" />
                  <circle cx="140" cy="60" r="8" />
                  <circle cx="100" cy="140" r="8" />
                  <circle cx="60" cy="140" r="8" />
                  <circle cx="140" cy="140" r="8" />
                  <line x1="60" y1="60" x2="140" y2="60" />
                  <line x1="60" y1="60" x2="60" y2="140" />
                  <line x1="140" y1="60" x2="140" y2="140" />
                  <line x1="60" y1="140" x2="140" y2="140" />
                  <line x1="60" y1="60" x2="100" y2="140" />
                  <line x1="140" y1="60" x2="100" y2="140" />
                  <polygon points="80,30 120,30 140,60 100,90 60,60" strokeWidth="1" />
                  <polygon points="100,90 140,60 160,90 140,140 100,140" strokeWidth="1" />
                  <polygon points="100,90 60,60 40,90 60,140 100,140" strokeWidth="1" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border pt-16 pb-8">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
            {/* Product */}
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

            {/* Company */}
            <div>
              <h4 className="text-sm font-semibold mb-4 text-foreground">{t.footerSection.company}</h4>
              <ul className="space-y-2.5">
                <li><span className="text-xs text-muted-foreground hover:text-foreground transition-colors cursor-pointer" data-testid="link-footer-about">{t.footerSection.about}</span></li>
                <li><span className="text-xs text-muted-foreground hover:text-foreground transition-colors cursor-pointer" data-testid="link-footer-careers">{t.footerSection.careers}</span></li>
                <li><a href={localePath("/blog")} className="text-xs text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-blog">{t.footerSection.blog}</a></li>
                <li><span className="text-xs text-muted-foreground hover:text-foreground transition-colors cursor-pointer" data-testid="link-footer-startup-program">{t.footerSection.startupProgram}</span></li>
              </ul>
            </div>

            {/* Plato for */}
            <div>
              <h4 className="text-sm font-semibold mb-4 text-foreground">{t.footerSection.platoFor}</h4>
              <ul className="space-y-2.5">
                <li><span className="text-xs text-muted-foreground hover:text-foreground transition-colors cursor-pointer" data-testid="link-footer-startups">{t.footerSection.startups}</span></li>
                <li><span className="text-xs text-muted-foreground hover:text-foreground transition-colors cursor-pointer" data-testid="link-footer-agencies">{t.footerSection.agencies}</span></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-sm font-semibold mb-4 text-foreground">{t.footerSection.support}</h4>
              <ul className="space-y-2.5">
                <li><span className="text-xs text-muted-foreground hover:text-foreground transition-colors cursor-pointer" data-testid="link-footer-help">{t.footerSection.helpCenter}</span></li>
                <li><a href={localePath("/contact")} className="text-xs text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-support">{t.footerSection.talkToSupport}</a></li>
                <li><span className="text-xs text-muted-foreground hover:text-foreground transition-colors cursor-pointer" data-testid="link-footer-api-docs">{t.footerSection.apiDocs} ↗</span></li>
                <li><span className="text-xs text-muted-foreground hover:text-foreground transition-colors cursor-pointer" data-testid="link-footer-system-status">{t.footerSection.systemStatus} ↗</span></li>
              </ul>
            </div>

            {/* Ready to build CTA */}
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

          {/* Bottom bar */}
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
