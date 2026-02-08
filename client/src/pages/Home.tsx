import { Link } from "wouter";
import { useI18n } from "@/lib/i18n";
import { useSEO } from "@/hooks/useSEO";
import { getDemoLink, config } from "@/lib/config";
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
} from "lucide-react";

const placeholderLogos = [
  "TechVentures",
  "GrowthCo",
  "AlphaHR",
  "NovaTalent",
  "PeakHire",
  "SwiftTeam",
];

export default function Home() {
  const { t, localePath } = useI18n();
  useSEO({ description: t.meta.pages.home.description });

  return (
    <>
      <Section className="pt-20 sm:pt-28 lg:pt-36 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight"
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
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a href={config.employerAppUrl} data-testid="button-hire-talent-hero">
              <Button size="lg">{t.hero.hireTalent}</Button>
            </a>
            <a href={config.applicantAppUrl} data-testid="button-find-jobs-hero">
              <Button variant="outline" size="lg">
                {t.hero.findJobs}
              </Button>
            </a>
            <a
              href={config.applicantAppUrl}
              className="text-sm font-medium text-[#057ABE] hover:underline flex items-center gap-1"
              data-testid="link-upload-resume-hero"
            >
              {t.hero.uploadResume}
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </Section>

      <Section bg="light" className="py-10 sm:py-12">
        <p className="text-center text-sm font-medium text-muted-foreground mb-8" data-testid="text-trusted-by">
          {t.trustedBy.title}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
          {placeholderLogos.map((name) => (
            <div
              key={name}
              className="px-4 py-2 text-sm font-semibold text-muted-foreground/50 tracking-wide uppercase select-none"
              data-testid={`logo-${name.toLowerCase()}`}
            >
              {name}
            </div>
          ))}
        </div>
      </Section>

      <Section id="employers">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold" data-testid="text-employer-section-title">
            {t.employerSection.title}
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">{t.employerSection.subtitle}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: Zap, title: t.employerSection.card1Title, desc: t.employerSection.card1Desc },
            { icon: Clock, title: t.employerSection.card2Title, desc: t.employerSection.card2Desc },
            { icon: Target, title: t.employerSection.card3Title, desc: t.employerSection.card3Desc },
          ].map((card, i) => (
            <Card key={i} className="hover-elevate overflow-visible">
              <CardContent className="p-6">
                <div className="w-10 h-10 rounded-md bg-[#057ABE]/10 flex items-center justify-center mb-4">
                  <card.icon className="w-5 h-5 text-[#057ABE]" />
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
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold" data-testid="text-seeker-section-title">
            {t.jobSeekerSection.title}
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">{t.jobSeekerSection.subtitle}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: Upload, title: t.jobSeekerSection.card1Title, desc: t.jobSeekerSection.card1Desc },
            { icon: Users, title: t.jobSeekerSection.card2Title, desc: t.jobSeekerSection.card2Desc },
            { icon: Award, title: t.jobSeekerSection.card3Title, desc: t.jobSeekerSection.card3Desc },
          ].map((card, i) => (
            <Card key={i} className="hover-elevate overflow-visible">
              <CardContent className="p-6">
                <div className="w-10 h-10 rounded-md bg-[#057ABE]/10 flex items-center justify-center mb-4">
                  <card.icon className="w-5 h-5 text-[#057ABE]" />
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
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold" data-testid="text-hiw-section-title">
            {t.howItWorksSection.title}
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">{t.howItWorksSection.subtitle}</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-6 text-[#057ABE]">
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
                    <div className="w-9 h-9 rounded-full bg-[#057ABE] flex items-center justify-center text-white text-sm font-semibold">
                      {i + 1}
                    </div>
                    {i < 4 && (
                      <div className="absolute top-9 left-1/2 -translate-x-1/2 w-px h-4 bg-[#057ABE]/20" />
                    )}
                  </div>
                  <div className="flex items-center gap-2 pt-1.5">
                    <step.icon className="w-4 h-4 text-[#689AB9] flex-shrink-0" />
                    <span className="text-sm font-medium">{step.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-6 text-[#689AB9]">
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
                    <div className="w-9 h-9 rounded-full bg-[#689AB9] flex items-center justify-center text-white text-sm font-semibold">
                      {i + 1}
                    </div>
                    {i < 4 && (
                      <div className="absolute top-9 left-1/2 -translate-x-1/2 w-px h-4 bg-[#689AB9]/20" />
                    )}
                  </div>
                  <div className="flex items-center gap-2 pt-1.5">
                    <step.icon className="w-4 h-4 text-[#689AB9] flex-shrink-0" />
                    <span className="text-sm font-medium">{step.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section bg="light" id="security">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold" data-testid="text-security-section-title">
            {t.securitySection.title}
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">{t.securitySection.subtitle}</p>
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
                <item.icon className="w-5 h-5 text-[#057ABE] flex-shrink-0 mt-0.5" />
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

      <Section className="bg-[#057ABE] dark:bg-[#057ABE]/90">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white" data-testid="text-final-cta-employer">
              {t.finalCta.employerHeadline}
            </h2>
            <div className="mt-6">
              <a href={getDemoLink()}>
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-white text-[#057ABE] border-white hover:bg-white/90 no-default-hover-elevate"
                  data-testid="button-final-cta-demo"
                >
                  {t.finalCta.employerCta}
                </Button>
              </a>
            </div>
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white" data-testid="text-final-cta-seeker">
              {t.finalCta.seekerHeadline}
            </h2>
            <div className="mt-6">
              <a href={config.applicantAppUrl}>
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-white text-[#057ABE] border-white hover:bg-white/90 no-default-hover-elevate"
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
