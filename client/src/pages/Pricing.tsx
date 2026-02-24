import { useState, useEffect, useRef } from "react";
import { useI18n } from "@/lib/i18n";
import { useSEO } from "@/hooks/useSEO";
import { getDemoLink, config } from "@/lib/config";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { Check, ChevronDown } from "lucide-react";
import { Link } from "wouter";
import { SiLinkedin, SiInstagram, SiTiktok } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PLAN_KEYS = ["intro", "base", "pro", "enterprise"] as const;

export default function Pricing() {
  const { t, localePath } = useI18n();
  useSEO({ title: t.meta.pages.pricing.title, description: t.meta.pages.pricing.description });
  const p = t.pricingPage;
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");
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
        y: 0, opacity: 1, scale: 1,
        duration: 0.7, stagger: 0.12, ease: "power3.out",
        scrollTrigger: { trigger: cardsRef.current, start: "top 80%", toggleActions: "play none none reverse" },
      });
    }, cardsRef);

    return () => ctx.revert();
  }, []);

  const plans = [
    { key: "intro" as const, plan: p.plans.intro, highlighted: false },
    { key: "base" as const, plan: p.plans.base, highlighted: false },
    { key: "pro" as const, plan: p.plans.pro, highlighted: true },
    { key: "enterprise" as const, plan: p.plans.enterprise, highlighted: false },
  ];

  return (
    <div className="relative" style={{ overflowX: "clip" }}>
      {/* Radial blue glow */}
      <div className="absolute left-0 right-0 pointer-events-none z-0" aria-hidden="true" style={{ top: "-60px", height: "600px" }}>
        <div className="absolute left-1/2 -translate-x-1/2 w-[90%] h-[520px] bg-[radial-gradient(ellipse_60%_55%_at_50%_0%,rgba(9,102,168,0.55),rgba(30,160,226,0.2)_38%,transparent_62%)]" style={{ top: "0px" }} />
        <div className="absolute left-1/2 -translate-x-1/2 w-[65%] h-[420px] bg-[radial-gradient(ellipse_45%_42%_at_50%_5%,rgba(14,80,140,0.35),transparent_52%)]" style={{ top: "0px" }} />
      </div>
      {/* 3D coil decoration — hero area */}
      <div className="hidden lg:block absolute right-0 top-0 w-[25%] h-[500px] pointer-events-none z-0" aria-hidden="true">
        <img src="/images/coil-3d.png" alt="" className="absolute right-0 top-[60px] h-[80%] w-auto max-w-none object-contain object-right opacity-40" />
      </div>

      {/* Hero */}
      <section className="relative pt-24 sm:pt-32 lg:pt-36 pb-8 sm:pb-12 z-[1]">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <ScrollReveal animation="fade-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]" data-testid="text-pricing-title">
              {p.title}
            </h1>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={2}>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground">{p.subtitle}</p>
          </ScrollReveal>

          {/* Monthly / Yearly Toggle */}
          <ScrollReveal animation="fade-up" delay={3}>
            <div className="mt-8 inline-flex items-center rounded-full border border-border bg-card p-1" data-testid="toggle-billing-cycle">
              <Button
                variant={billingCycle === "monthly" ? "default" : "ghost"}
                size="sm"
                onClick={() => setBillingCycle("monthly")}
                className="rounded-full px-5"
                data-testid="button-billing-monthly"
              >
                {p.monthly}
              </Button>
              <Button
                variant={billingCycle === "yearly" ? "default" : "ghost"}
                size="sm"
                onClick={() => setBillingCycle("yearly")}
                className="rounded-full px-5"
                data-testid="button-billing-yearly"
              >
                {p.yearly}
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="relative z-[1] pb-20 sm:pb-28">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-end">
            {plans.map(({ key, plan, highlighted }) => {
              const isEnterprise = key === "enterprise";
              const price = billingCycle === "monthly" ? plan.monthlyPrice : plan.yearlyPrice;

              return (
                <div
                  key={key}
                  data-pricing-card
                  data-testid={`card-pricing-${key}`}
                  className={`relative rounded-2xl p-6 flex flex-col transition-all duration-300 ${
                    highlighted
                      ? "bg-card border-2 border-primary/50 shadow-lg shadow-primary/10 -mt-4 pb-8"
                      : "bg-card border border-border"
                  }`}
                >
                  {highlighted && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="bg-primary text-primary-foreground text-[10px] font-bold px-3 py-1 rounded-full tracking-wider" data-testid="text-popular-badge">
                        {p.popular}
                      </span>
                    </div>
                  )}

                  <div className="mb-4">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl sm:text-4xl font-bold text-foreground" data-testid={`text-plan-price-${key}`}>
                        {price}
                      </span>
                      {!isEnterprise && (
                        <span className="text-sm text-muted-foreground">{p.perMonth}</span>
                      )}
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-foreground mb-2" data-testid={`text-plan-name-${key}`}>
                    {plan.name}
                  </h3>

                  <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                    {plan.description}
                  </p>

                  <ul className="space-y-3 mb-6 flex-1">
                    {plan.features.map((feature: string, i: number) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-foreground/80">
                        <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a href={isEnterprise ? getDemoLink() : config.employerAppUrl} data-testid={`button-plan-cta-${key}`}>
                    <Button
                      variant={highlighted ? "default" : "outline"}
                      className="w-full rounded-full"
                      size="lg"
                    >
                      {p.choosePlan}
                    </Button>
                  </a>
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
          <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 relative z-[1]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight" data-testid="text-pricing-cta-title">
                  {t.blogPage.readyToTransform} {t.blogPage.yourHiringProcess}{" "}
                  <span className="font-extrabold">{t.blogPage.hiringProcessBold}</span>
                </h2>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a href={config.employerAppUrl} data-testid="button-pricing-start-trial">
                    <Button size="lg" className="rounded-full bg-white text-primary border-white">
                      {p.startFreeTrial}
                    </Button>
                  </a>
                  <a href={getDemoLink()} data-testid="button-pricing-request-demo">
                    <Button variant="outline" size="lg" className="rounded-full text-white border-white/40">
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
