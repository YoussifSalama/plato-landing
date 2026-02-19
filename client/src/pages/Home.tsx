import { Link } from "wouter";
import { useI18n } from "@/lib/i18n";
import { useSEO } from "@/hooks/useSEO";
import { getDemoLink, config } from "@/lib/config";
import { getAllPosts, estimateReadTime } from "@/lib/blog";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Section from "@/components/shared/Section";
import {
  Zap,
  Clock,
  Target,
  Upload,
  Users,
  Award,
  FileSearch,
  ListChecks,
  Mail,
  MessageSquare,
  FileText,
  UserPlus,
  UserCheck,
  Handshake,
  Mic,
  Star,
  Shield,
  Lock,
  Eye,
  Trash2,
  ArrowRight,
  HelpCircle,
} from "lucide-react";

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

export default function Home() {
  const { t, lang, localePath } = useI18n();
  useSEO({ description: t.meta.pages.home.description });
  const recentPosts = getAllPosts(lang).slice(0, 3);

  return (
    <>
      <Section className="pt-24 sm:pt-32 lg:pt-40 pb-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1]"
            data-testid="text-hero-headline"
          >
            {t.hero.headline}
          </h1>
          <p
            className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            data-testid="text-hero-subheadline"
          >
            {t.hero.subheadline}
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a href={config.employerAppUrl} data-testid="button-hire-talent-hero">
              <Button size="lg">{t.hero.hireTalent}</Button>
            </a>
            <a href={config.applicantAppUrl} data-testid="button-find-jobs-hero">
              <Button variant="outline" size="lg">
                {t.hero.findJobs}
              </Button>
            </a>
          </div>
          <a
            href={config.applicantAppUrl}
            className="inline-flex items-center gap-1 mt-5 text-sm font-medium text-primary hover:underline"
            data-testid="link-upload-resume-hero"
          >
            {t.hero.uploadResume}
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </Section>

      <Section bg="light" className="py-12 sm:py-16">
        <p className="text-center text-xs font-medium uppercase tracking-widest text-muted-foreground mb-10" data-testid="text-trusted-by">
          {t.trustedBy.title}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 sm:gap-x-14 md:gap-x-16">
          {clientLogos.map((logo) => (
            <img
              key={logo.alt}
              src={logo.src}
              alt={logo.alt}
              className="h-10 sm:h-12 w-auto max-w-[120px] sm:max-w-[140px] object-contain"
              data-testid={`logo-${logo.alt.toLowerCase().replace(/\s+/g, "-")}`}
            />
          ))}
        </div>
      </Section>

      <Section id="employers">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight" data-testid="text-employer-section-title">
            {t.employerSection.title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">{t.employerSection.subtitle}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: Zap, title: t.employerSection.card1Title, desc: t.employerSection.card1Desc },
            { icon: Clock, title: t.employerSection.card2Title, desc: t.employerSection.card2Desc },
            { icon: Target, title: t.employerSection.card3Title, desc: t.employerSection.card3Desc },
          ].map((card, i) => (
            <Card key={i} className="hover-elevate overflow-visible">
              <CardContent className="p-6">
                <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                  <card.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a href={getDemoLink()} data-testid="button-book-demo-employer-section">
            <Button>{t.employerSection.bookDemo}</Button>
          </a>
          <a href={config.employerAppUrl}>
            <Button variant="outline">{t.employerSection.hireTalent}</Button>
          </a>
        </div>
      </Section>

      <Section bg="light" id="job-seekers">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight" data-testid="text-seeker-section-title">
            {t.jobSeekerSection.title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">{t.jobSeekerSection.subtitle}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: Upload, title: t.jobSeekerSection.card1Title, desc: t.jobSeekerSection.card1Desc },
            { icon: Users, title: t.jobSeekerSection.card2Title, desc: t.jobSeekerSection.card2Desc },
            { icon: Award, title: t.jobSeekerSection.card3Title, desc: t.jobSeekerSection.card3Desc },
          ].map((card, i) => (
            <Card key={i} className="hover-elevate overflow-visible">
              <CardContent className="p-6">
                <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                  <card.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a href={config.applicantAppUrl} data-testid="button-upload-resume-seeker-section">
            <Button>{t.jobSeekerSection.uploadResume}</Button>
          </a>
          <a href={config.applicantAppUrl}>
            <Button variant="outline">{t.jobSeekerSection.findJobs}</Button>
          </a>
        </div>
      </Section>

      <Section id="how-it-works">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight" data-testid="text-hiw-section-title">
            {t.howItWorksSection.title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">{t.howItWorksSection.subtitle}</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-6 text-primary">
              {t.howItWorksSection.employerFlow}
            </h3>
            <div className="space-y-4">
              {[
                { icon: FileSearch, label: t.howItWorksSection.employer.step1 },
                { icon: ListChecks, label: t.howItWorksSection.employer.step2 },
                { icon: Mail, label: t.howItWorksSection.employer.step3 },
                { icon: MessageSquare, label: t.howItWorksSection.employer.step4 },
                { icon: FileText, label: t.howItWorksSection.employer.step5 },
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="flex-shrink-0 relative">
                    <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-white text-sm font-semibold">
                      {i + 1}
                    </div>
                    {i < 4 && (
                      <div className="absolute top-9 left-1/2 -translate-x-1/2 w-px h-4 bg-primary/20" />
                    )}
                  </div>
                  <div className="flex items-center gap-2 pt-1.5">
                    <step.icon className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm font-medium">{step.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-6 text-primary">
              {t.howItWorksSection.jobSeekerFlow}
            </h3>
            <div className="space-y-4">
              {[
                { icon: Upload, label: t.howItWorksSection.jobSeeker.step1 },
                { icon: UserPlus, label: t.howItWorksSection.jobSeeker.step2 },
                { icon: UserCheck, label: t.howItWorksSection.jobSeeker.step3 },
                { icon: Mic, label: t.howItWorksSection.jobSeeker.step4 },
                { icon: Star, label: t.howItWorksSection.jobSeeker.step5 },
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="flex-shrink-0 relative">
                    <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-white text-sm font-semibold">
                      {i + 1}
                    </div>
                    {i < 4 && (
                      <div className="absolute top-9 left-1/2 -translate-x-1/2 w-px h-4 bg-primary/20" />
                    )}
                  </div>
                  <div className="flex items-center gap-2 pt-1.5">
                    <step.icon className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm font-medium">{step.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section bg="light" id="security">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight" data-testid="text-security-section-title">
            {t.securitySection.title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">{t.securitySection.subtitle}</p>
        </div>
        <div className="max-w-2xl mx-auto">
          <div className="space-y-4">
            {[
              { icon: Eye, text: t.securitySection.point1 },
              { icon: Shield, text: t.securitySection.point2 },
              { icon: Lock, text: t.securitySection.point3 },
              { icon: Trash2, text: t.securitySection.point4 },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <item.icon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href={localePath("/security")}>
              <Button variant="outline" data-testid="button-read-security">
                {t.securitySection.readMore}
              </Button>
            </Link>
          </div>
        </div>
      </Section>

      {recentPosts.length > 0 && (
        <Section>
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight" data-testid="text-blog-preview-title">
              {t.blogPreview.title}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentPosts.map((post) => (
              <Link key={post.slug} href={localePath(`/blog/${post.slug}`)}>
                <Card className="hover-elevate overflow-visible h-full cursor-pointer">
                  <CardContent className="p-6">
                    <p className="text-xs text-muted-foreground mb-2">
                      {post.date} &middot; {estimateReadTime(post.content)} {t.blogPage.minRead}
                    </p>
                    <h3 className="text-lg font-semibold mb-2 line-clamp-2" data-testid={`text-blog-preview-${post.slug}`}>
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-3">{post.summary}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href={localePath("/blog")}>
              <Button variant="outline" data-testid="button-blog-preview-cta">
                {t.blogPreview.cta}
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </Section>
      )}

      <Section bg="light">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight" data-testid="text-faq-preview-title">
            {t.faqPreview.title}
          </h2>
        </div>
        <div className="max-w-2xl mx-auto space-y-4">
          {t.faqPage.items.slice(0, 5).map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <HelpCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-sm" data-testid={`text-faq-preview-q-${i}`}>{item.q}</p>
                <p className="text-sm text-muted-foreground mt-1">{item.a}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link href={localePath("/faq")}>
            <Button variant="outline" data-testid="button-faq-preview-cta">
              {t.faqPreview.cta}
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </Section>

      <Section>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <p className="text-lg font-medium" data-testid="text-contact-cta">{t.contactCta.text}</p>
          <Link href={localePath("/contact")}>
            <Button data-testid="button-contact-cta">
              <Mail className="w-4 h-4" />
              {t.contactCta.cta}
            </Button>
          </Link>
        </div>
      </Section>

      <Section className="bg-primary">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight" data-testid="text-final-cta-employer">
              {t.finalCta.employerHeadline}
            </h2>
            <div className="mt-8">
              <a href={getDemoLink()}>
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-white text-primary border-white no-default-hover-elevate"
                  data-testid="button-final-cta-demo"
                >
                  {t.finalCta.employerCta}
                </Button>
              </a>
            </div>
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight" data-testid="text-final-cta-seeker">
              {t.finalCta.seekerHeadline}
            </h2>
            <div className="mt-8">
              <a href={config.applicantAppUrl}>
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-white text-primary border-white no-default-hover-elevate"
                  data-testid="button-final-cta-upload"
                >
                  {t.finalCta.seekerCta}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
