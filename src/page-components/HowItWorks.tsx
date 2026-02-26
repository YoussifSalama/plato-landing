"use client";
import { useState } from "react";
import { useI18n } from "@/lib/i18n";
import { useSEO } from "@/hooks/useSEO";
import { getDemoLink, config } from "@/lib/config";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/shared/ScrollReveal";
import {
  FileSearch,
  ListChecks,
  Mail,
  MessageSquare,
  FileText,
  Upload,
  UserPlus,
  UserCheck,
  Mic,
  Star,
} from "lucide-react";

const employerIcons = [FileSearch, ListChecks, Mail, MessageSquare, FileText];
const seekerIcons = [Upload, UserPlus, UserCheck, Mic, Star];

export default function HowItWorks() {
  const { t } = useI18n();
  useSEO({ title: t.meta.pages.howItWorks.title, description: t.meta.pages.howItWorks.description });
  const p = t.howItWorksPage;
  const [activeTab, setActiveTab] = useState<"employer" | "seeker">("employer");

  const steps = activeTab === "employer" ? p.employerSteps : p.seekerSteps;
  const icons = activeTab === "employer" ? employerIcons : seekerIcons;
  const color = "hsl(var(--primary))";

  return (
    <div className="relative" style={{ overflowX: "clip" }}>
      <div className="absolute left-0 right-0 hidden dark:block pointer-events-none z-0" aria-hidden="true" style={{ top: "-60px", height: "620px" }}>
        <div className="absolute inset-0 bg-gradient-to-b from-[#071b2e] via-[#0a1628] to-transparent" />
        <div className="absolute left-1/2 -translate-x-1/2 w-[130%] h-[520px] bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(9,102,168,0.45),rgba(30,160,226,0.15)_40%,transparent_70%)]" style={{ top: "0px" }} />
        <div className="absolute left-1/2 -translate-x-1/2 w-[90%] h-[420px] bg-[radial-gradient(ellipse_60%_40%_at_50%_5%,rgba(14,80,140,0.3),transparent_60%)]" style={{ top: "0px" }} />
      </div>

      <section className="relative pt-24 sm:pt-32 lg:pt-36 pb-16 sm:pb-20 z-[1]">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <ScrollReveal animation="fade-up">
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-[1.1]" data-testid="text-hiw-hero">
              {p.heroTitle}
            </h1>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={2}>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              {p.heroSubtitle}
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 sm:py-24 lg:py-28 bg-gray-50/50 dark:bg-white/[0.02]">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <ScrollReveal animation="fade-in">
            <div className="flex items-center justify-center gap-2 mb-12">
              <Button
                variant={activeTab === "employer" ? "default" : "outline"}
                onClick={() => setActiveTab("employer")}
                data-testid="button-hiw-employer-tab"
              >
                {p.forEmployers}
              </Button>
              <Button
                variant={activeTab === "seeker" ? "default" : "outline"}
                onClick={() => setActiveTab("seeker")}
                data-testid="button-hiw-seeker-tab"
              >
                {p.forJobSeekers}
              </Button>
            </div>
          </ScrollReveal>

          <div className="max-w-2xl mx-auto">
            <div className="space-y-8">
              {steps.map((step, i) => {
                const Icon = icons[i];
                return (
                  <ScrollReveal key={`${activeTab}-${i}`} animation="fade-up" delay={i + 1}>
                    <div className="flex items-start gap-5">
                      <div className="flex-shrink-0 relative">
                        <div
                          className="w-11 h-11 rounded-full flex items-center justify-center text-white text-sm font-bold"
                          style={{ backgroundColor: color }}
                        >
                          {i + 1}
                        </div>
                        {i < steps.length - 1 && (
                          <div
                            className="absolute top-11 left-1/2 -translate-x-1/2 w-px h-8"
                            style={{ backgroundColor: `${color}30` }}
                          />
                        )}
                      </div>
                      <div className="pt-1">
                        <div className="flex items-center gap-2 mb-1">
                          <Icon className="w-4 h-4 flex-shrink-0" style={{ color }} />
                          <h3 className="text-base font-semibold">{step.title}</h3>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>

          <ScrollReveal animation="fade-up" delay={2}>
            <div className="mt-14 flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="lg"><a href={getDemoLink()}>{t.nav.bookDemo}</a></Button>
              <Button asChild variant="outline" size="lg">
                <a href={config.applicantAppUrl}>
                {t.hero.uploadResume}
                </a>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
