import { useEffect, useRef } from "react";
import { useI18n } from "@/lib/i18n";
import { useSEO } from "@/hooks/useSEO";
import { getDemoLink, config } from "@/lib/config";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { Check, Zap, Crown, Rocket, Building2, ChevronDown } from "lucide-react";
import { Link } from "wouter";
import { SiLinkedin, SiInstagram, SiTiktok } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PLAN_ICONS = [Zap, Rocket, Crown, Building2];
const PLAN_KEYS = ["starter", "growth", "pro", "enterprise"] as const;
const PLAN_GRADIENTS = [
  "from-blue-500/20 to-cyan-500/20",
  "from-blue-500/20 to-indigo-500/20",
  "from-indigo-500/20 to-purple-500/20",
  "from-purple-500/20 to-pink-500/20",
];
const PLAN_ICON_COLORS = [
  "text-cyan-500",
  "text-blue-500",
  "text-indigo-500",
  "text-purple-500",
];
const PLAN_BORDER_COLORS = [
  "border-cyan-500/20 dark:border-cyan-500/30",
  "border-blue-500/20 dark:border-blue-500/30",
  "border-indigo-500/30 dark:border-indigo-500/40",
  "border-purple-500/20 dark:border-purple-500/30",
];

export default function Pricing() {
  const { t, localePath, dir } = useI18n();
  useSEO({ title: t.meta.pages.pricing.title, description: t.meta.pages.pricing.description });
  const p = t.pricingPage;

  const cardsRef = useRef<HTMLDivElement>(null);
  const faqRefs = useRef<(HTMLDetailsElement | null)[]>([]);

  useEffect(() => {
    if (!cardsRef.current) return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const cards = cardsRef.current.querySelectorAll("[data-pricing-card]");

    const ctx = gsap.context(() => {
      gsap.set(cards, { y: 60, opacity: 0, scale: 0.95 });

      gsap.to(cards, {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.7,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    }, cardsRef);

    return () => ctx.revert();
  }, []);

  const plans = [
    { key: "starter" as const, plan: p.plans.starter, highlighted: false },
    { key: "growth" as const, plan: p.plans.growth, highlighted: false },
    { key: "pro" as const, plan: p.plans.pro, highlighted: true },
    { key: "enterprise" as const, plan: p.plans.enterprise, highlighted: false },
  ];

  return (
    <div className="relative" style={{ overflowX: "clip" }}>
      <div className="absolute left-0 right-0 hidden dark:block pointer-events-none z-0" aria-hidden="true" style={{ top: "-60px", height: "620px" }}>
        <div className="absolute inset-0 bg-gradient-to-b from-[#071b2e] via-[#0a1628] to-transparent" />
        <div className="absolute left-1/2 -translate-x-1/2 w-[130%] h-[520px] bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(9,102,168,0.45),rgba(30,160,226,0.15)_40%,transparent_70%)]" style={{ top: "0px" }} />
        <div className="absolute left-1/2 -translate-x-1/2 w-[90%] h-[420px] bg-[radial-gradient(ellipse_60%_40%_at_50%_5%,rgba(14,80,140,0.3),transparent_60%)]" style={{ top: "0px" }} />
      </div>

      {/* Hero */}
      <section className="relative pt-24 sm:pt-32 lg:pt-36 pb-12 sm:pb-16 z-[1]">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <ScrollReveal animation="fade-up">
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-[1.1]" data-testid="text-pricing-title">
              {p.title}
            </h1>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={2}>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">{p.subtitle}</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="relative z-[1] pb-20 sm:pb-28">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map(({ key, plan, highlighted }, idx) => {
              const Icon = PLAN_ICONS[idx];
              const isEnterprise = key === "enterprise";

              return (
                <div
                  key={key}
                  data-pricing-card
                  data-testid={`card-pricing-${key}`}
                  className={`relative rounded-2xl p-6 flex flex-col transition-all duration-300 ${
                    highlighted
                      ? `bg-gradient-to-b ${PLAN_GRADIENTS[idx]} border-2 ${PLAN_BORDER_COLORS[idx]} shadow-lg shadow-indigo-500/10 dark:shadow-indigo-500/20`
                      : `bg-card border ${PLAN_BORDER_COLORS[idx]}`
                  }`}
                >
                  {highlighted && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-[11px] font-semibold px-4 py-1 rounded-full shadow-md" data-testid="text-popular-badge">
                        {p.popular}
                      </span>
                    </div>
                  )}

                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${PLAN_GRADIENTS[idx]} flex items-center justify-center mb-4`}>
                    <Icon className={`w-5 h-5 ${PLAN_ICON_COLORS[idx]}`} />
                  </div>

                  <h3 className="text-lg font-bold text-foreground" data-testid={`text-plan-name-${key}`}>
                    {plan.name}
                  </h3>

                  <div className="mt-2 mb-3 flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-foreground" data-testid={`text-plan-price-${key}`}>
                      {plan.price}
                    </span>
                    {!isEnterprise && (
                      <span className="text-sm text-muted-foreground">{p.perMonth}</span>
                    )}
                  </div>

                  <div className="mb-4">
                    <span className={`inline-flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full bg-gradient-to-r ${PLAN_GRADIENTS[idx]}`}>
                      <Zap className="w-3 h-3" />
                      {plan.creditsAmount} {p.credits}
                    </span>
                  </div>

                  <p className="text-sm text-muted-foreground mb-6 leading-relaxed flex-grow-0">
                    {plan.description}
                  </p>

                  <ul className="space-y-2.5 mb-6 flex-1">
                    {plan.features.map((feature: string, i: number) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-foreground/80">
                        <Check className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {isEnterprise ? (
                    <a href={getDemoLink()} data-testid={`button-plan-cta-${key}`}>
                      <Button variant="outline" className="w-full rounded-full" size="lg">
                        {p.contactSales}
                      </Button>
                    </a>
                  ) : (
                    <a href={getDemoLink()} data-testid={`button-plan-cta-${key}`}>
                      <Button
                        className={`w-full rounded-full ${highlighted ? "shadow-md shadow-indigo-500/20" : ""}`}
                        variant={highlighted ? "default" : "outline"}
                        size="lg"
                      >
                        {p.getStarted}
                      </Button>
                    </a>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative z-[1] pb-20 sm:pb-28">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12">
          <ScrollReveal animation="fade-up">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-center mb-4" data-testid="text-pricing-faq-title">
              {p.faqTitle}{" "}
              <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                {p.faqTitleHighlight}
              </span>
            </h2>
            <p className="text-muted-foreground text-center mb-10">{p.faqSubtitle}</p>
          </ScrollReveal>

          <div className="space-y-3">
            {p.faqs.map((faq: { q: string; a: string }, i: number) => (
              <ScrollReveal key={i} animation="fade-up" delay={i * 1}>
                <details
                  ref={(el) => { faqRefs.current[i] = el; }}
                  className="group rounded-xl border border-border bg-transparent overflow-hidden"
                  data-testid={`faq-item-${i}`}
                >
                  <summary className="flex items-center justify-between px-5 py-4 cursor-pointer text-sm font-medium text-foreground select-none list-none [&::-webkit-details-marker]:hidden">
                    <span>{faq.q}</span>
                    <ChevronDown className="w-4 h-4 text-muted-foreground transition-transform duration-200 group-open:rotate-180 flex-shrink-0 ms-3" />
                  </summary>
                  <div className="px-5 pb-4 text-sm text-muted-foreground leading-relaxed">
                    {faq.a}
                  </div>
                </details>
              </ScrollReveal>
            ))}
          </div>
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
                <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight" data-testid="text-pricing-cta-title">
                  {t.blogPage.readyToTransform} {t.blogPage.yourHiringProcess}{" "}
                  <span className="font-extrabold">{t.blogPage.hiringProcessBold}</span>
                </h2>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a href={config.employerAppUrl} data-testid="button-pricing-start-trial">
                    <Button size="lg" className="rounded-full bg-white text-primary hover:bg-white/90 border-white no-default-hover-elevate">
                      {p.startFreeTrial}
                    </Button>
                  </a>
                  <a href={getDemoLink()} data-testid="button-pricing-request-demo">
                    <Button variant="outline" size="lg" className="rounded-full text-white border-white/40 hover:bg-white/10 no-default-hover-elevate">
                      {t.footerSection.requestDemo}
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
