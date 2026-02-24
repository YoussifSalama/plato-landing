import { useState, useEffect, useRef, useLayoutEffect } from "react";
import { useI18n } from "@/lib/i18n";
import { useAppTheme } from "@/lib/theme";
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
import { Mail, MapPin, Clock, Phone, CheckCircle, Plus, Minus } from "lucide-react";
import { SiLinkedin, SiInstagram, SiTiktok } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
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
  const { isDark } = useAppTheme();
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
          <div ref={infoCardsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div data-info-card className="flex flex-col items-center justify-center p-6 sm:p-8 rounded-xl border border-border bg-card text-center" data-testid="card-info-email">
              <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center mb-3">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <span className="text-sm font-medium text-foreground" dir="ltr">{p.infoCards.email}</span>
            </div>
            <div data-info-card className="flex flex-col items-center justify-center p-6 sm:p-8 rounded-xl border border-border bg-card text-center" data-testid="card-info-phone">
              <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center mb-3">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <span className="text-sm font-medium text-foreground" dir="ltr">{p.infoCards.phone}</span>
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
          <div ref={mapRef} className="relative rounded-2xl overflow-hidden h-[320px] sm:h-[400px] border border-border">
            <iframe
              key={isDark ? "dark" : "light"}
              src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.7!2d31.2!3d30.04!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDAyJzI0LjAiTiAzMcKwMTInMDAuMCJF!5e0!3m2!1sen!2seg!4v1700000000000`}
              width="100%"
              height="100%"
              style={{ border: 0, filter: isDark ? "invert(0.9) hue-rotate(180deg) saturate(0.3) brightness(0.8)" : "none" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Plato Office Location"
              className="absolute inset-0"
            />
            <div data-map-popup className="absolute bottom-4 ltr:left-4 rtl:right-4 bg-white dark:bg-gray-900 rounded-xl shadow-xl p-4 w-[260px] z-10 border border-gray-200 dark:border-gray-700">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">P</span>
                </div>
                <div className="min-w-0">
                  <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-1">{p.mapCard.title}</h4>
                  <p className="text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed">{p.mapCard.address}</p>
                  <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-1" dir="ltr">{p.mapCard.phone}</p>
                  <p className="text-[11px] text-gray-500 dark:text-gray-400" dir="ltr">{p.mapCard.email}</p>
                </div>
              </div>
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
            <div className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div data-form-field className="space-y-2">
                  <Label>{p.firstNameLabel}</Label>
                  <Input
                    placeholder={p.firstNamePlaceholder}
                    value={form.firstName}
                    onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                    data-testid="input-contact-firstname-fallback"
                  />
                </div>
                <div data-form-field className="space-y-2">
                  <Label>{p.emailLabel}</Label>
                  <Input
                    placeholder={p.emailPlaceholder}
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    data-testid="input-contact-email-fallback"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div data-form-field className="space-y-2">
                  <Label>{p.phoneLabel}</Label>
                  <Input
                    placeholder={p.phonePlaceholder}
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    data-testid="input-contact-phone-fallback"
                  />
                </div>
                <div data-form-field className="space-y-2">
                  <Label>{p.inquiryLabel}</Label>
                  <Select
                    value={form.inquiry}
                    onValueChange={(v) => setForm({ ...form, inquiry: v })}
                  >
                    <SelectTrigger data-testid="select-contact-inquiry-fallback">
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
                <Label>{p.messageLabel}</Label>
                <Textarea
                  placeholder={p.messagePlaceholder}
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  data-testid="input-contact-message-fallback"
                />
              </div>
              <div data-form-field className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
                <div className="flex items-center gap-2">
                  <Checkbox
                    id="terms-fallback"
                    checked={agreed}
                    onCheckedChange={(v) => setAgreed(v === true)}
                    data-testid="checkbox-contact-terms-fallback"
                  />
                  <label htmlFor="terms-fallback" className="text-sm text-muted-foreground cursor-pointer">
                    {p.termsAgree}{" "}
                    <a href={localePath("/terms")} className="underline text-foreground">{p.termsOfUse}</a>
                    {" "}{p.andText}{" "}
                    <a href={localePath("/privacy")} className="underline text-foreground">{p.privacyPolicy}</a>
                  </label>
                </div>
                <a href={`mailto:info@platohiring.com?subject=${encodeURIComponent("Contact from Plato Website")}&body=${encodeURIComponent(`Name: ${form.firstName}\nEmail: ${form.email}\nPhone: ${form.phone}\nInquiry: ${form.inquiry}\n\n${form.message}`)}`}>
                  <Button className="rounded-full px-8" disabled={!agreed} data-testid="button-contact-submit-fallback">
                    {p.submit}
                  </Button>
                </a>
              </div>
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
      <section className="py-12 sm:py-16">
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
      <section className="py-20 sm:py-28">
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
                <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight" data-testid="text-contact-cta-title">
                  {t.blogPage.readyToTransform} {t.blogPage.yourHiringProcess}{" "}
                  <span className="font-extrabold">{t.blogPage.hiringProcessBold}</span>
                </h2>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a href={config.employerAppUrl} data-testid="button-contact-start-trial">
                    <Button size="lg" className="rounded-full bg-white text-primary hover:bg-white/90 border-white no-default-hover-elevate">
                      {t.blogPage.startFreeTrial}
                    </Button>
                  </a>
                  <a href={getDemoLink()} data-testid="button-contact-request-demo">
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

