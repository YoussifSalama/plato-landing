import { useState } from "react";
import { Link } from "wouter";
import { useI18n } from "@/lib/i18n";
import { useSEO } from "@/hooks/useSEO";
import { getDemoLink, config } from "@/lib/config";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/shared/ScrollReveal";
import DashboardMockup from "@/components/DashboardMockup";
import AboutAnalyticsDashboard from "@/components/AboutAnalyticsDashboard";
import { SiLinkedin, SiInstagram, SiTiktok } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import { Plus, Minus, Sparkles, Eye, Link2, Clock } from "lucide-react";

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

const featureIcons = [Sparkles, Eye, Link2, Clock];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-gray-200 dark:border-white/10">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left"
        data-testid={`faq-about-${question.slice(0, 20).replace(/\s+/g, "-").toLowerCase()}`}
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

function FeatureAccordion({ icon: Icon, title, desc, index }: { icon: React.ComponentType<{ className?: string }>; title: string; desc: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <div data-testid={`about-feature-${index}`}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start gap-4 text-left py-2"
        data-testid={`about-feature-toggle-${index}`}
      >
        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
          <Icon className="w-5 h-5 text-primary" />
        </div>
        <div className="flex-1 min-w-0 pt-2">
          <h3 className="text-sm font-bold text-foreground">{title}</h3>
        </div>
        {open ? (
          <Minus className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-2.5" />
        ) : (
          <Plus className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-2.5" />
        )}
      </button>
      {open && (
        <div className="ps-14 pb-2 text-sm text-muted-foreground leading-relaxed">
          {desc}
        </div>
      )}
    </div>
  );
}

export default function Employers() {
  const { t, lang, localePath } = useI18n();
  useSEO({ title: t.meta.pages.employers.title, description: t.meta.pages.employers.description });
  const p = t.employersPage;

  const features = [
    { title: p.feature1Title, desc: p.feature1Desc },
    { title: p.feature2Title, desc: p.feature2Desc },
    { title: p.feature3Title, desc: p.feature3Desc },
    { title: p.feature4Title, desc: p.feature4Desc },
  ];

  const whyItems = [
    { title: p.why1Title, desc: p.why1Desc },
    { title: p.why2Title, desc: p.why2Desc },
    { title: p.why3Title, desc: p.why3Desc },
    { title: p.why4Title, desc: p.why4Desc },
    { title: p.why5Title, desc: p.why5Desc },
    { title: p.why6Title, desc: p.why6Desc },
  ];

  return (
    <div className="relative" style={{ overflowX: "clip" }}>
      {/* Hero Gradient Glow */}
      <div className="absolute left-0 right-0 hidden dark:block pointer-events-none z-0" aria-hidden="true" style={{ top: "-60px", height: "760px" }}>
        <div className="absolute inset-0 bg-gradient-to-b from-[#071b2e] via-[#0a1628] to-transparent" />
        <div className="absolute left-1/2 -translate-x-1/2 w-[130%] h-[660px] bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(9,102,168,0.55),rgba(30,160,226,0.18)_40%,transparent_70%)]" style={{ top: "0px" }} />
        <div className="absolute left-1/2 -translate-x-1/2 w-[90%] h-[560px] bg-[radial-gradient(ellipse_60%_40%_at_50%_5%,rgba(14,80,140,0.4),transparent_60%)]" style={{ top: "0px" }} />
      </div>

      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-32 lg:pt-40 pb-16 sm:pb-20 z-[1]">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <ScrollReveal animation="fade-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]" data-testid="text-about-hero">
              {p.heroTitle}
            </h1>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={2}>
            <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {p.heroSubtitle}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Plato in Actions — Dashboard + Feature Cards */}
      <section className="py-16 sm:py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <ScrollReveal animation="fade-up">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-[1.1] mb-2" data-testid="text-in-actions-title">
              {p.inActionsTitle}
            </h2>
            <p className="text-muted-foreground text-base mb-12">
              {p.inActionsSubtitle}
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10 items-start">
            <ScrollReveal animation="fade-left" className="lg:col-span-3">
              <div className="rounded-[32px] bg-[#2183DF] p-4 sm:p-6 lg:p-7" data-testid="about-blue-frame">
                <div className="rounded-2xl overflow-hidden shadow-2xl" data-testid="about-dashboard-mockup">
                  <DashboardMockup compact />
                </div>
              </div>
            </ScrollReveal>

            <div className="lg:col-span-2 space-y-4 lg:pt-4">
              {features.map((f, i) => {
                const Icon = featureIcons[i];
                return (
                  <ScrollReveal key={i} animation="fade-right" delay={i + 1}>
                    <FeatureAccordion icon={Icon} title={f.title} desc={f.desc} index={i} />
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Unified Talent Intelligence Hub */}
      <section className="py-16 sm:py-20 lg:py-28 lg:overflow-visible">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 lg:overflow-visible">
          <ScrollReveal animation="fade-up">
            <div className="relative lg:overflow-visible">
              <div className="hidden lg:block absolute left-0 right-0 top-0 bottom-[80px] rounded-3xl bg-gradient-to-br from-[#0a3d6b] via-[#1260a0] to-[#1a7fd4]" data-testid="about-hub-panel" />
              <div className="lg:hidden rounded-3xl bg-gradient-to-br from-[#0a3d6b] via-[#1260a0] to-[#1a7fd4] p-8 sm:p-10 mb-6">
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-[1.15] mb-8 text-white" data-testid="text-hub-title-mobile">
                  {p.hubTitle}
                </h2>
                <p className="text-[15px] text-blue-100/80 leading-relaxed mb-6">
                  {p.hubDesc1}
                </p>
                <p className="text-[15px] text-blue-100/80 leading-relaxed">
                  {p.hubDesc2}
                </p>
              </div>
              <div className="hidden lg:flex relative z-[1] gap-0">
                <div className="w-[38%] flex-shrink-0 p-8 py-10 flex flex-col justify-center">
                  <h2 className="text-xl sm:text-2xl font-bold tracking-tight leading-[1.15] mb-4 text-white" data-testid="text-hub-title">
                    {p.hubTitle}
                  </h2>
                  <p className="text-xs text-blue-100/80 leading-relaxed mb-3">
                    {p.hubDesc1}
                  </p>
                  <p className="text-xs text-blue-100/80 leading-relaxed">
                    {p.hubDesc2}
                  </p>
                </div>
                <div className="flex-1 mt-[28px] mb-[-32px] dark rounded-l-2xl overflow-hidden bg-[#0d1117] shadow-2xl origin-top-left" style={{ marginRight: "calc(-1 * (100vw - 100%) / 2)", transform: "scale(0.78)", height: "fit-content" }} data-testid="about-analytics-dashboard">
                  <AboutAnalyticsDashboard />
                </div>
              </div>
              <div className="lg:hidden dark rounded-2xl overflow-hidden bg-[#0d1117] shadow-2xl" data-testid="about-analytics-dashboard-mobile">
                <AboutAnalyticsDashboard />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Why Plato */}
      <section className="py-16 sm:py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <ScrollReveal animation="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight italic" data-testid="text-why-title">
                {p.whyTitle}
              </h2>
              <p className="mt-4 text-muted-foreground text-base max-w-2xl mx-auto">
                {p.whySubtitle}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={2}>
            <div className="grid grid-cols-1 md:grid-cols-3 border-t border-gray-200 dark:border-white/10" data-testid="why-plato-grid">
              {whyItems.map((item, i) => (
                <div
                  key={i}
                  className={`p-6 sm:p-8 border-b border-gray-200 dark:border-white/10 ${
                    i % 3 !== 2 ? "md:border-r" : ""
                  }`}
                >
                  <h3 className="text-xs font-bold tracking-widest uppercase mb-3 text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <ScrollReveal animation="fade-in">
            <p className="text-center text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground mb-10" data-testid="text-about-trusted-by">
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
                  className="h-8 sm:h-10 w-auto max-w-[100px] sm:max-w-[120px] object-contain opacity-70 grayscale brightness-0 dark:brightness-0 dark:invert mx-6 sm:mx-10 flex-shrink-0"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 sm:py-28">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <ScrollReveal animation="fade-up">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight text-foreground" data-testid="text-about-faq-title">
                {t.faqSection.title}
              </h2>
              <p className="text-muted-foreground text-base lg:pt-2" data-testid="text-about-faq-subtitle">
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
      <ScrollReveal animation="fade-up">
        <section className="relative py-20 sm:py-28 lg:py-32 bg-gradient-to-br from-[#0a3d6b] via-[#0b4d85] to-[#0d5a9e] overflow-hidden">
          <div className="absolute inset-0 opacity-10" aria-hidden="true">
            <svg className="absolute right-0 top-0 w-[60%] h-full" viewBox="0 0 600 400" fill="none">
              <circle cx="450" cy="200" r="150" stroke="white" strokeWidth="1" opacity="0.3" />
              <circle cx="450" cy="200" r="100" stroke="white" strokeWidth="1" opacity="0.2" />
              <circle cx="450" cy="200" r="50" stroke="white" strokeWidth="1" opacity="0.15" />
              <path d="M350 50 L550 250 L350 350" stroke="white" strokeWidth="1.5" opacity="0.2" fill="none" />
              <path d="M400 100 L500 200 L400 300" stroke="white" strokeWidth="1" opacity="0.15" fill="none" />
              <rect x="480" y="80" width="80" height="80" rx="8" stroke="white" strokeWidth="1" opacity="0.2" fill="none" />
              <polygon points="520,130 540,170 500,170" stroke="white" strokeWidth="1" opacity="0.2" fill="none" />
            </svg>
          </div>

          <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 relative z-[1]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight" data-testid="text-about-cta-title">
                  {p.ctaTitle}{" "}
                  <span className="font-extrabold">{p.ctaTitleBold}</span>
                </h2>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a href={config.employerAppUrl} data-testid="button-about-start-trial">
                    <Button size="lg" className="rounded-full bg-white text-primary hover:bg-white/90 border-white no-default-hover-elevate">
                      {p.ctaStartTrial}
                    </Button>
                  </a>
                  <a href={getDemoLink()} data-testid="button-about-request-demo">
                    <Button variant="outline" size="lg" className="rounded-full text-white border-white/40 hover:bg-white/10 no-default-hover-elevate">
                      {p.ctaRequestDemo}
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Footer */}
      <footer className="border-t border-border pt-14 pb-8">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
            <div>
              <div className="flex items-center gap-1" style={{ direction: "ltr" }}>
                <div className="h-8 sm:h-9 overflow-hidden flex-shrink-0" style={{ width: '28px' }}>
                  <img src="/images/plato-logo.png" alt="" className="h-full w-auto max-w-none" />
                </div>
                <span className="text-[20px] sm:text-[22px] font-bold tracking-tight text-gray-900 dark:text-white" style={{ fontFamily: "'Roc Grotesk', sans-serif" }}>Plato</span>
              </div>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-[260px]">
                {t.footer.tagline}
              </p>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-foreground mb-4">{t.footer.companyTitle}</h4>
              <ul className="space-y-2.5">
                <li><Link href={localePath("/employers")}><span className="text-[13px] text-muted-foreground hover:text-foreground transition-colors cursor-pointer">{t.footerSection.about}</span></Link></li>
                <li><Link href={localePath("/pricing")}><span className="text-[13px] text-muted-foreground hover:text-foreground transition-colors cursor-pointer">Pricing</span></Link></li>
                <li><Link href={localePath("/blog")}><span className="text-[13px] text-muted-foreground hover:text-foreground transition-colors cursor-pointer">{t.footerSection.blog}</span></Link></li>
                <li><Link href={localePath("/faq")}><span className="text-[13px] text-muted-foreground hover:text-foreground transition-colors cursor-pointer">FAQs</span></Link></li>
                <li><Link href={localePath("/contact")}><span className="text-[13px] text-muted-foreground hover:text-foreground transition-colors cursor-pointer">{t.footer.contact}</span></Link></li>
                <li><Link href={localePath("/testimonials")}><span className="text-[13px] text-muted-foreground hover:text-foreground transition-colors cursor-pointer">{t.footerSection.customerStories}</span></Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-foreground mb-4">{t.footer.contactsTitle}</h4>
              <ul className="space-y-2.5">
                <li><a href="mailto:info@plato.com" className="text-[13px] text-muted-foreground hover:text-foreground transition-colors" dir="ltr">info@Plato.com</a></li>
                <li><a href="tel:+20101245567" className="text-[13px] text-muted-foreground hover:text-foreground transition-colors" dir="ltr">+20101245567</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-foreground mb-4">{t.footer.readyToGrow}</h4>
              <div className="flex flex-col gap-3">
                <a href={config.employerAppUrl} target="_blank" rel="noopener noreferrer">
                  <Button className="rounded-full w-full px-6">{t.footer.startForFree}</Button>
                </a>
                <a href={getDemoLink()} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="rounded-full w-full px-6">{t.footer.requestDemo}</Button>
                </a>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground/70">{t.footer.copyright}</p>
            <div className="flex items-center gap-4">
              <Link href={localePath("/terms")}><span className="text-xs text-muted-foreground/70 hover:text-foreground transition-colors cursor-pointer">{t.footer.termsAndConditions}</span></Link>
              <span className="text-xs text-muted-foreground/40">·</span>
              <Link href={localePath("/privacy")}><span className="text-xs text-muted-foreground/70 hover:text-foreground transition-colors cursor-pointer">{t.footer.privacy}</span></Link>
              <div className="flex items-center gap-3 ltr:ml-4 rtl:mr-4">
                <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground/70 hover:text-foreground transition-colors" aria-label="X"><FaXTwitter className="w-3.5 h-3.5" /></a>
                <a href="https://www.instagram.com/platohiring" target="_blank" rel="noopener noreferrer" className="text-muted-foreground/70 hover:text-foreground transition-colors" aria-label="Instagram"><SiInstagram className="w-3.5 h-3.5" /></a>
                <a href="https://www.tiktok.com/@platohiring" target="_blank" rel="noopener noreferrer" className="text-muted-foreground/70 hover:text-foreground transition-colors" aria-label="TikTok"><SiTiktok className="w-3.5 h-3.5" /></a>
                {config.linkedinUrl && (
                  <a href={config.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground/70 hover:text-foreground transition-colors" aria-label="LinkedIn"><SiLinkedin className="w-3.5 h-3.5" /></a>
                )}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
