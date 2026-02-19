import { useState } from "react";
import { useI18n } from "@/lib/i18n";
import { useSEO } from "@/hooks/useSEO";
import { getDemoLink, config } from "@/lib/config";
import { Button } from "@/components/ui/button";
import Section from "@/components/shared/Section";
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
    <>
      <Section className="pt-20 sm:pt-28 lg:pt-32">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-[1.1]" data-testid="text-hiw-hero">
            {p.heroTitle}
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            {p.heroSubtitle}
          </p>
        </div>
      </Section>

      <Section bg="light">
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

        <div className="max-w-2xl mx-auto">
          <div className="space-y-8">
            {steps.map((step, i) => {
              const Icon = icons[i];
              return (
                <div key={i} className="flex items-start gap-5">
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
              );
            })}
          </div>
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-center gap-3">
          <a href={getDemoLink()}>
            <Button size="lg">{t.nav.bookDemo}</Button>
          </a>
          <a href={config.applicantAppUrl}>
            <Button variant="outline" size="lg">
              {t.hero.uploadResume}
            </Button>
          </a>
        </div>
      </Section>
    </>
  );
}
