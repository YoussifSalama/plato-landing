import { useState, useEffect, useRef, useLayoutEffect } from "react";
import { useI18n } from "@/lib/i18n";
import { useSEO } from "@/hooks/useSEO";
import { config, getDemoLink } from "@/lib/config";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { Mail, MapPin, Clock, CheckCircle, Plus, Minus } from "lucide-react";
import { SiLinkedin, SiInstagram, SiTiktok } from "react-icons/si";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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

gsap.registerPlugin(ScrollTrigger);

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
          <Minus className="w-5 h-5 text-muted-foreground flex-shrink-0 ltr:ml-4 rtl:mr-4" />
        ) : (
          <Plus className="w-5 h-5 text-muted-foreground flex-shrink-0 ltr:ml-4 rtl:mr-4" />
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

export default function Contact() {
  const { t, lang, localePath } = useI18n();
  useSEO({ title: t.meta.pages.contact.title, description: t.meta.pages.contact.description });
  const p = t.contactPage;
  const supabaseConfigured = !!(config.supabaseUrl && config.supabaseAnonKey);

  const [form, setForm] = useState({
    firstName: "",
    email: "",
    phone: "",
    inquiry: "",
    message: "",
  });
  const [agreed, setAgreed] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const infoCardsRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const formSectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReduced) return;

      const cards = infoCardsRef.current?.querySelectorAll("[data-info-card]");
      if (cards) {
        gsap.set(cards, { y: 40, opacity: 0, scale: 0.9 });
        ScrollTrigger.create({
          trigger: infoCardsRef.current,
          start: "top 85%",
          onEnter: () => {
            gsap.to(cards, {
              y: 0, opacity: 1, scale: 1,
              duration: 0.7, stagger: 0.15,
              ease: "back.out(1.5)",
            });
          },
        });
      }

      if (mapRef.current) {
        gsap.set(mapRef.current, { y: 60, opacity: 0, scale: 0.95 });
        ScrollTrigger.create({
          trigger: mapRef.current,
          start: "top 85%",
          onEnter: () => {
            gsap.to(mapRef.current, {
              y: 0, opacity: 1, scale: 1,
              duration: 0.8,
              ease: "power3.out",
            });
          },
        });

        const popup = mapRef.current.querySelector("[data-map-popup]");
        if (popup) {
          gsap.set(popup, { y: 30, opacity: 0, scale: 0.8 });
          ScrollTrigger.create({
            trigger: mapRef.current,
            start: "top 75%",
            onEnter: () => {
              gsap.to(popup, {
                y: 0, opacity: 1, scale: 1,
                duration: 0.6, delay: 0.4,
                ease: "back.out(2)",
              });
            },
          });
        }
      }

      if (formSectionRef.current) {
        const formFields = formSectionRef.current.querySelectorAll("[data-form-field]");
        if (formFields.length) {
          gsap.set(formFields, { y: 25, opacity: 0 });
          ScrollTrigger.create({
            trigger: formSectionRef.current,
            start: "top 80%",
            onEnter: () => {
              gsap.to(formFields, {
                y: 0, opacity: 1,
                duration: 0.5, stagger: 0.08,
                ease: "power2.out",
              });
            },
          });
        }
      }
    });

    return () => ctx.revert();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!supabaseConfigured) return;

    setSubmitting(true);
    setError("");

    try {
      const res = await fetch(`${config.supabaseUrl}/rest/v1/contact_leads`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: config.supabaseAnonKey,
          Authorization: `Bearer ${config.supabaseAnonKey}`,
          Prefer: "return=minimal",
        },
        body: JSON.stringify({
          name: form.firstName,
          email: form.email,
          company: "",
          role: "",
          hiring_volume: form.inquiry,
          message: form.message,
          source_page: "contact",
          language: lang,
        }),
      });

      if (!res.ok) throw new Error("Failed to submit");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again or email us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="relative" style={{ overflowX: "clip" }}>
      {/* Hero Gradient Glow */}
      <div className="absolute left-0 right-0 hidden dark:block pointer-events-none z-0" aria-hidden="true" style={{ top: "-60px", height: "760px" }}>
        <div className="absolute inset-0 bg-gradient-to-b from-[#071b2e] via-[#0a1628] to-transparent" />
        <div className="absolute left-1/2 -translate-x-1/2 w-[130%] h-[660px] bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(9,102,168,0.55),rgba(30,160,226,0.18)_40%,transparent_70%)]" style={{ top: "0px" }} />
        <div className="absolute left-1/2 -translate-x-1/2 w-[90%] h-[560px] bg-[radial-gradient(ellipse_60%_40%_at_50%_5%,rgba(14,80,140,0.4),transparent_60%)]" style={{ top: "0px" }} />
      </div>

      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-32 lg:pt-40 pb-12 sm:pb-16 z-[1]">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <ScrollReveal animation="fade-up">
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-foreground"
              data-testid="text-contact-title"
            >
              {p.title}
            </h1>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={2}>
            <p className="mt-6 text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {p.subtitle}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Info Cards */}
      <section className="relative z-[1] pb-12 sm:pb-16">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <div ref={infoCardsRef} className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div data-info-card className="flex flex-col items-center justify-center p-6 sm:p-8 rounded-xl border border-border bg-card text-center" data-testid="card-info-email">
              <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center mb-3">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <span className="text-sm font-medium text-foreground" dir="ltr">{p.infoCards.email}</span>
            </div>
            <div data-info-card className="flex flex-col items-center justify-center p-6 sm:p-8 rounded-xl border border-border bg-card text-center" data-testid="card-info-location">
              <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center mb-3">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <span className="text-sm font-medium text-foreground">{p.infoCards.location}</span>
            </div>
            <div data-info-card className="flex flex-col items-center justify-center p-6 sm:p-8 rounded-xl border border-border bg-card text-center" data-testid="card-info-hours">
              <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center mb-3">
                <Clock className="w-5 h-5 text-white" />
              </div>
              <span className="text-sm font-medium text-foreground" dir="ltr">{p.infoCards.hours}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="relative z-[1] pb-16 sm:pb-20">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <div ref={mapRef} className="relative rounded-2xl overflow-hidden h-[280px] sm:h-[340px] bg-gray-200 dark:bg-gray-800">
            <div className="absolute inset-0">
              <MapBackground />
            </div>
            <div data-map-popup className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl shadow-xl p-4 w-[200px] text-center z-10">
              <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center mx-auto mb-2">
                <span className="text-white font-bold text-sm">P</span>
              </div>
              <h4 className="text-sm font-bold text-gray-900 mb-1">{p.mapCard.title}</h4>
              <p className="text-[10px] text-gray-500 leading-relaxed">{p.mapCard.address}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="relative z-[1] pb-16 sm:pb-20">
        <div ref={formSectionRef} className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <ScrollReveal animation="fade-up">
            <div className="mb-8">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] text-foreground" data-testid="text-form-title">
                {p.formTitle} <span className="text-blue-600 dark:text-blue-400">{p.formTitleHighlight}</span>
              </h2>
              <p className="mt-4 text-sm sm:text-base text-muted-foreground max-w-lg">
                {p.formSubtitle}
              </p>
            </div>
          </ScrollReveal>

          {submitted ? (
            <ScrollReveal animation="scale-up">
              <div className="text-center py-16 bg-card rounded-2xl border border-border">
                <CheckCircle className="w-14 h-14 text-green-500 mx-auto mb-4" />
                <p className="text-lg font-medium text-foreground" data-testid="text-contact-success">
                  {p.successMessage}
                </p>
              </div>
            </ScrollReveal>
          ) : !supabaseConfigured ? (
            <div className="text-center py-12 bg-card rounded-2xl border border-border">
              <Mail className="w-10 h-10 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground mb-4">
                {p.fallbackMessage}{" "}
                <span className="font-medium text-foreground" dir="ltr">
                  {config.demoEmailFallback}
                </span>
              </p>
              <a href={`mailto:${config.demoEmailFallback}?subject=${encodeURIComponent("Contact from Plato Website")}`}>
                <Button data-testid="button-contact-email">
                  <Mail className="w-4 h-4" />
                  {p.emailUs}
                </Button>
              </a>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div data-form-field className="space-y-2">
                  <Label htmlFor="firstName">{p.firstNameLabel}</Label>
                  <Input
                    id="firstName"
                    placeholder={p.firstNamePlaceholder}
                    value={form.firstName}
                    onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                    required
                    data-testid="input-contact-firstname"
                  />
                </div>
                <div data-form-field className="space-y-2">
                  <Label htmlFor="email">{p.emailLabel}</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder={p.emailPlaceholder}
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                    data-testid="input-contact-email"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div data-form-field className="space-y-2">
                  <Label htmlFor="phone">{p.phoneLabel}</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder={p.phonePlaceholder}
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    data-testid="input-contact-phone"
                  />
                </div>
                <div data-form-field className="space-y-2">
                  <Label>{p.inquiryLabel}</Label>
                  <Select
                    value={form.inquiry}
                    onValueChange={(v) => setForm({ ...form, inquiry: v })}
                  >
                    <SelectTrigger data-testid="select-contact-inquiry">
                      <SelectValue placeholder={p.inquiryPlaceholder} />
                    </SelectTrigger>
                    <SelectContent>
                      {p.inquiryOptions.map((opt) => (
                        <SelectItem key={opt} value={opt}>
                          {opt}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div data-form-field className="space-y-2">
                <Label htmlFor="message">{p.messageLabel}</Label>
                <Textarea
                  id="message"
                  placeholder={p.messagePlaceholder}
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  data-testid="input-contact-message"
                />
              </div>

              <div data-form-field className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
                <div className="flex items-center gap-2">
                  <Checkbox
                    id="terms"
                    checked={agreed}
                    onCheckedChange={(v) => setAgreed(v === true)}
                    data-testid="checkbox-contact-terms"
                  />
                  <label htmlFor="terms" className="text-sm text-muted-foreground cursor-pointer">
                    {p.termsAgree}{" "}
                    <a href={localePath("/terms")} className="underline text-foreground">{p.termsOfUse}</a>
                    {" "}{p.andText}{" "}
                    <a href={localePath("/privacy")} className="underline text-foreground">{p.privacyPolicy}</a>
                  </label>
                </div>
                <Button
                  type="submit"
                  disabled={submitting || !agreed}
                  className="rounded-full px-8"
                  data-testid="button-contact-submit"
                >
                  {submitting ? "..." : p.submit}
                </Button>
              </div>

              {error && <p className="text-sm text-destructive">{error}</p>}
            </form>
          )}
        </div>
      </section>

      {/* Trusted By Logos */}
      <section className="py-12 sm:py-16 border-t border-border">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <ScrollReveal animation="fade-in">
            <p className="text-center text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground mb-10" data-testid="text-contact-trusted-by">
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
      <section className="py-20 sm:py-28 bg-muted">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <ScrollReveal animation="fade-up">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight text-foreground whitespace-pre-line" data-testid="text-contact-faq-title">
                {p.faqTitle}
              </h2>
              <p className="text-muted-foreground text-base lg:pt-2" data-testid="text-contact-faq-subtitle">
                {p.faqSubtitle}
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={1}>
            <div>
              {p.faqItems.map((item, i) => (
                <FAQItem key={i} question={item.q} answer={item.a} />
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <ScrollReveal animation="scale-up">
        <section className="relative overflow-hidden">
          <a href={config.employerAppUrl} data-testid="button-contact-start-trial" className="block">
            <img
              src="/images/cta-banner.png"
              alt="Ready to transform your hiring process? Start Free Trial or Request Demo"
              className="w-full h-auto"
              data-testid="img-contact-cta"
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
                  <li><span className="text-xs text-muted-foreground hover:text-foreground transition-colors cursor-pointer">{t.footerSection.changelog}</span></li>
                  <li><span className="text-xs text-muted-foreground hover:text-foreground transition-colors cursor-pointer">{t.footerSection.customerStories}</span></li>
                  <li><a href={localePath("/security")} className="text-xs text-muted-foreground hover:text-foreground transition-colors">{t.footerSection.security}</a></li>
                  <li><span className="text-xs text-muted-foreground hover:text-foreground transition-colors cursor-pointer">{t.footerSection.chromeExtension} ↗</span></li>
                  <li><span className="text-xs text-muted-foreground hover:text-foreground transition-colors cursor-pointer">{t.footerSection.iosApp} ↗</span></li>
                  <li><span className="text-xs text-muted-foreground hover:text-foreground transition-colors cursor-pointer">{t.footerSection.androidApp} ↗</span></li>
                  <li><span className="text-xs text-muted-foreground hover:text-foreground transition-colors cursor-pointer">{t.footerSection.zapier} ↗</span></li>
                  <li><span className="text-xs text-muted-foreground hover:text-foreground transition-colors cursor-pointer">{t.footerSection.integromat} ↗</span></li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold mb-4 text-foreground">{t.footerSection.company}</h4>
                <ul className="space-y-2.5">
                  <li><span className="text-xs text-muted-foreground hover:text-foreground transition-colors cursor-pointer">{t.footerSection.about}</span></li>
                  <li><span className="text-xs text-muted-foreground hover:text-foreground transition-colors cursor-pointer">{t.footerSection.careers}</span></li>
                  <li><a href={localePath("/blog")} className="text-xs text-muted-foreground hover:text-foreground transition-colors">{t.footerSection.blog}</a></li>
                  <li><span className="text-xs text-muted-foreground hover:text-foreground transition-colors cursor-pointer">{t.footerSection.startupProgram}</span></li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold mb-4 text-foreground">{t.footerSection.platoFor}</h4>
                <ul className="space-y-2.5">
                  <li><span className="text-xs text-muted-foreground hover:text-foreground transition-colors cursor-pointer">{t.footerSection.startups}</span></li>
                  <li><span className="text-xs text-muted-foreground hover:text-foreground transition-colors cursor-pointer">{t.footerSection.agencies}</span></li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold mb-4 text-foreground">{t.footerSection.support}</h4>
                <ul className="space-y-2.5">
                  <li><span className="text-xs text-muted-foreground hover:text-foreground transition-colors cursor-pointer">{t.footerSection.helpCenter}</span></li>
                  <li><a href={localePath("/contact")} className="text-xs text-muted-foreground hover:text-foreground transition-colors">{t.footerSection.talkToSupport}</a></li>
                  <li><span className="text-xs text-muted-foreground hover:text-foreground transition-colors cursor-pointer">{t.footerSection.apiDocs} ↗</span></li>
                  <li><span className="text-xs text-muted-foreground hover:text-foreground transition-colors cursor-pointer">{t.footerSection.systemStatus} ↗</span></li>
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
            <p className="text-xs text-muted-foreground/70">
              {t.footerSection.copyright}
            </p>
            <div className="flex items-center gap-4">
              <a href={localePath("/terms")} className="text-xs text-muted-foreground/70 hover:text-muted-foreground transition-colors">
                {t.footerSection.termsAndConditions}
              </a>
              <span className="text-muted-foreground/30">·</span>
              <a href={localePath("/privacy")} className="text-xs text-muted-foreground/70 hover:text-muted-foreground transition-colors">
                {t.footerSection.privacyPolicy}
              </a>
            </div>
            <div className="flex items-center gap-3">
              {config.linkedinUrl && (
                <a href={config.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="LinkedIn">
                  <SiLinkedin className="w-4 h-4" />
                </a>
              )}
              <a href="https://www.instagram.com/platohiring?igsh=M2puazltZDQxOXFu&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Instagram">
                <SiInstagram className="w-4 h-4" />
              </a>
              <a href="https://www.tiktok.com/@platohiring?_r=1&_t=ZN-948glBbZIgA" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="TikTok">
                <SiTiktok className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function MapBackground() {
  return (
    <svg viewBox="0 0 800 400" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="mapBg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1a1a2e" />
          <stop offset="100%" stopColor="#16213e" />
        </linearGradient>
      </defs>
      <rect width="800" height="400" fill="url(#mapBg)" />

      <g className="opacity-20">
        {Array.from({ length: 12 }).map((_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 35} x2="800" y2={i * 35} stroke="#3b82f6" strokeWidth="0.3" />
        ))}
        {Array.from({ length: 24 }).map((_, i) => (
          <line key={`v${i}`} x1={i * 35} y1="0" x2={i * 35} y2="400" stroke="#3b82f6" strokeWidth="0.3" />
        ))}
      </g>

      <g className="opacity-30">
        <path d="M100,50 L180,80 L220,60 L300,90 L280,140 L320,180 L250,200 L180,170 L120,190 L80,140 Z" fill="none" stroke="#4a5568" strokeWidth="1" />
        <path d="M350,30 L450,50 L500,40 L540,80 L520,130 L480,160 L420,140 L380,170 L340,120 L360,80 Z" fill="none" stroke="#4a5568" strokeWidth="1" />
        <path d="M550,100 L650,80 L720,120 L700,180 L660,220 L580,200 L540,160 Z" fill="none" stroke="#4a5568" strokeWidth="1" />
        <path d="M50,250 L150,230 L200,260 L180,310 L120,330 L60,300 Z" fill="none" stroke="#4a5568" strokeWidth="1" />
        <path d="M250,240 L350,220 L400,250 L420,310 L380,350 L300,340 L260,290 Z" fill="none" stroke="#4a5568" strokeWidth="1" />
        <path d="M500,230 L600,210 L680,250 L660,320 L580,350 L510,310 Z" fill="none" stroke="#4a5568" strokeWidth="1" />
      </g>

      <g className="opacity-40">
        <path d="M100,120 Q200,100 250,150 Q300,200 350,170" fill="none" stroke="#6b7280" strokeWidth="0.8" strokeDasharray="4,4" />
        <path d="M400,80 Q450,110 470,150 Q490,200 530,180" fill="none" stroke="#6b7280" strokeWidth="0.8" strokeDasharray="4,4" />
        <path d="M180,250 Q250,230 320,270 Q380,300 420,280" fill="none" stroke="#6b7280" strokeWidth="0.8" strokeDasharray="4,4" />
      </g>

      <g className="opacity-50">
        <text x="120" y="145" fill="#6b7280" fontSize="7" fontFamily="sans-serif">Spring St</text>
        <text x="300" y="105" fill="#6b7280" fontSize="7" fontFamily="sans-serif">Prince</text>
        <text x="500" y="165" fill="#6b7280" fontSize="7" fontFamily="sans-serif">2nd Avenue</text>
        <text x="80" y="280" fill="#6b7280" fontSize="7" fontFamily="sans-serif">Canal St</text>
        <text x="350" y="355" fill="#6b7280" fontSize="7" fontFamily="sans-serif">Spring Street</text>
      </g>

      <g>
        {[
          { x: 150, y: 130, color: "#22c55e" },
          { x: 350, y: 95, color: "#22c55e" },
          { x: 550, y: 160, color: "#22c55e" },
          { x: 250, y: 270, color: "#22c55e" },
          { x: 600, y: 280, color: "#22c55e" },
        ].map((p, i) => (
          <g key={i}>
            <circle cx={p.x} cy={p.y} r="3" fill={p.color} opacity="0.6" />
            <text x={p.x + 5} y={p.y + 3} fill={p.color} fontSize="5" opacity="0.5" fontFamily="sans-serif">M</text>
          </g>
        ))}
      </g>

      <circle cx="400" cy="200" r="6" fill="#3b82f6" opacity="0.8" />
      <circle cx="400" cy="200" r="10" fill="none" stroke="#3b82f6" strokeWidth="1" opacity="0.4" />
      <circle cx="400" cy="200" r="16" fill="none" stroke="#3b82f6" strokeWidth="0.5" opacity="0.2" />
    </svg>
  );
}
