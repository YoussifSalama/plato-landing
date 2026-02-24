import { useState } from "react";
import { Link } from "wouter";
import { useI18n } from "@/lib/i18n";
import { useSEO } from "@/hooks/useSEO";
import { getDemoLink, config } from "@/lib/config";
import { Button } from "@/components/ui/button";
import { Plus, Minus } from "lucide-react";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { SiLinkedin, SiInstagram, SiTiktok } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";

function FAQItem({ question, answer, defaultOpen = false }: { question: string; answer: string; defaultOpen?: boolean }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-border" data-testid={`faq-item`}>
      <button
        className="w-full flex items-start justify-between gap-4 py-6 text-start"
        onClick={() => setIsOpen(!isOpen)}
        data-testid="button-faq-toggle"
      >
        <span className="text-[15px] sm:text-base font-medium text-foreground leading-snug pr-4">
          {question}
        </span>
        <span className="flex-shrink-0 mt-0.5 text-muted-foreground">
          {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
        </span>
      </button>
      {isOpen && (
        <div className="pb-6 -mt-1">
          <p className="text-sm text-muted-foreground leading-relaxed pr-10">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  const { t, lang, localePath } = useI18n();
  useSEO({ title: t.meta.pages.faq.title, description: t.meta.pages.faq.description });
  const p = t.faqPage;

  return (
    <div className="min-h-screen">
      {/* Hero Section with blue bokeh glow */}
      <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-background" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-30" aria-hidden="true">
          <div className="absolute top-[20%] left-[30%] w-[200px] h-[200px] rounded-full bg-blue-500/40 blur-[80px]" />
          <div className="absolute top-[10%] left-[50%] w-[250px] h-[250px] rounded-full bg-blue-600/30 blur-[100px]" />
          <div className="absolute top-[30%] left-[20%] w-[150px] h-[150px] rounded-full bg-blue-400/20 blur-[60px]" />
          <div className="absolute top-[15%] left-[60%] w-[180px] h-[180px] rounded-full bg-sky-500/25 blur-[90px]" />
        </div>

        <div className="relative z-[1] max-w-3xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <ScrollReveal animation="fade-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]" data-testid="text-faq-title">
              {p.title}
            </h1>
            <p className="mt-5 text-base sm:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed" data-testid="text-faq-subtitle">
              {p.subtitle}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="pb-20 sm:pb-28">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12">
          <ScrollReveal animation="fade-up">
            <div className="border-t border-border">
              {p.items.map((item, i) => (
                <FAQItem
                  key={i}
                  question={item.q}
                  answer={item.a}
                  defaultOpen={i === 0}
                />
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
                <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight" data-testid="text-faq-cta-title">
                  {t.blogPage.readyToTransform} {t.blogPage.yourHiringProcess}{" "}
                  <span className="font-extrabold">{t.blogPage.hiringProcessBold}</span>
                </h2>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a href={config.employerAppUrl} data-testid="button-faq-start-trial">
                    <Button size="lg" className="rounded-full bg-white text-primary hover:bg-white/90 border-white no-default-hover-elevate">
                      {t.blogPage.startFreeTrial}
                    </Button>
                  </a>
                  <a href={getDemoLink()} data-testid="button-faq-request-demo">
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
