"use client";
import Link from "next/link";
import { useI18n } from "@/lib/i18n";
import { useSEO } from "@/hooks/useSEO";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { config, getDemoLink } from "@/lib/config";
import { SiLinkedin, SiInstagram, SiTiktok } from "react-icons/si";

export default function Privacy() {
  const { t, lang, localePath } = useI18n();
  useSEO({ title: t.meta.pages.privacy.title, description: t.meta.pages.privacy.description });
  const p = t.privacyPage;

  return (
    <div className="relative min-h-screen" style={{ overflowX: "clip" }}>
      {/* Radial blue glow — matching FAQ/Terms */}
      <div className="absolute left-0 right-0 hidden dark:block pointer-events-none z-0" aria-hidden="true" style={{ top: "-60px", height: "600px" }}>
        <div className="absolute left-1/2 -translate-x-1/2 w-[90%] h-[520px] bg-[radial-gradient(ellipse_60%_55%_at_50%_0%,rgba(9,102,168,0.55),rgba(30,160,226,0.2)_38%,transparent_62%)]" style={{ top: "0px" }} />
        <div className="absolute left-1/2 -translate-x-1/2 w-[65%] h-[420px] bg-[radial-gradient(ellipse_45%_42%_at_50%_5%,rgba(14,80,140,0.35),transparent_52%)]" style={{ top: "0px" }} />
      </div>

      {/* Hero */}
      <section className="relative z-[1] pt-24 sm:pt-32 lg:pt-36 pb-8 sm:pb-12">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <ScrollReveal animation="fade-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]" data-testid="text-privacy-title">
              {p.title}
            </h1>
            <p className="mt-5 text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed" data-testid="text-privacy-subtitle">
              {p.subtitle}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Sections */}
      <section className="relative z-[1] pb-20 sm:pb-28">
        {/* 3D coil decoration — right side of content */}
        <div className="hidden dark:lg:block absolute right-0 top-0 bottom-0 w-[25%] pointer-events-none z-0" aria-hidden="true">
          <img src="/images/coil-3d.png" alt="" className="absolute right-0 top-[20%] h-[50%] w-auto max-w-none object-contain object-right opacity-40" />
        </div>
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 relative z-[1]">
          <div className="space-y-10">
            {p.sections.map((section: { title: string; items: string[] }, i: number) => (
              <ScrollReveal key={i} animation="fade-up">
                <div data-testid={`section-privacy-${i}`}>
                  <h2 className="text-xl sm:text-2xl font-bold tracking-tight mb-4" data-testid={`text-privacy-section-title-${i}`}>
                    {section.title}
                  </h2>
                  <ul className="space-y-2 ltr:pl-5 rtl:pr-5">
                    {section.items.map((item: string, j: number) => (
                      <li key={j} className="text-sm sm:text-[15px] text-muted-foreground leading-relaxed list-disc" data-testid={`text-privacy-item-${i}-${j}`}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
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
                <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight" data-testid="text-privacy-cta-title">
                  {t.blogPage.readyToTransform} {t.blogPage.yourHiringProcess}{" "}
                  <span className="font-extrabold">{t.blogPage.hiringProcessBold}</span>
                </h2>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button asChild size="lg" className="rounded-full bg-white text-primary border-white">
                    <Link href={localePath("/signup")} data-testid="button-privacy-start-trial">
                    {t.blogPage.startFreeTrial}
                    </Link>
                  </Button>
                                      <Button asChild variant="outline" size="lg" className="rounded-full text-white border-white/40">
                      <a href={getDemoLink()} data-testid="button-privacy-request-demo">
                      {t.footerSection.requestDemo}
                    </a>
                    </Button>
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
                  <img src="/images/plato-logo.png"
                  alt="Plato" className="h-full w-auto max-w-none" />
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
                <li><a href="mailto:info@platohiring.com" className="text-[13px] text-muted-foreground hover:text-foreground transition-colors" dir="ltr">info@platohiring.com</a></li>
                <li><a href="tel:+201022330092" className="text-[13px] text-muted-foreground hover:text-foreground transition-colors" dir="ltr">+201022330092</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-foreground mb-4">{t.footer.readyToGrow}</h4>
              <div className="flex flex-col gap-3">
                <Button asChild className="rounded-full w-full px-6"><Link href={localePath("/signup")}>{t.footer.startForFree}</Link></Button>
                <Button asChild variant="outline" className="rounded-full w-full px-6"><Link href={localePath("/book-demo")}>{t.footer.requestDemo}</Link></Button>
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
                <a href="https://www.linkedin.com/company/aere-capital/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground/70 hover:text-foreground transition-colors" aria-label="LinkedIn"><SiLinkedin className="w-3.5 h-3.5" /></a>
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
