import { useI18n } from "@/lib/i18n";
import { useSEO } from "@/hooks/useSEO";
import { config } from "@/lib/config";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Section from "@/components/shared/Section";
import { Upload, Scale, Clock, Activity } from "lucide-react";

export default function JobSeekers() {
  const { t } = useI18n();
  useSEO({ title: t.meta.pages.jobSeekers.title, description: t.meta.pages.jobSeekers.description });
  const p = t.jobSeekersPage;

  const features = [
    { icon: Upload, title: p.feature1Title, desc: p.feature1Desc },
    { icon: Scale, title: p.feature2Title, desc: p.feature2Desc },
    { icon: Clock, title: p.feature3Title, desc: p.feature3Desc },
    { icon: Activity, title: p.feature4Title, desc: p.feature4Desc },
  ];

  return (
    <>
      <Section className="pt-20 sm:pt-28 lg:pt-32">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight" data-testid="text-seekers-hero">
            {p.heroTitle}
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            {p.heroSubtitle}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a href={config.applicantAppUrl}>
              <Button size="lg" data-testid="button-seekers-upload">
                {t.hero.uploadResume}
              </Button>
            </a>
            <a href={config.applicantAppUrl}>
              <Button variant="outline" size="lg">
                {t.hero.findJobs}
              </Button>
            </a>
          </div>
        </div>
      </Section>

      <Section bg="light">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((f, i) => (
            <Card key={i} className="hover-elevate overflow-visible">
              <CardContent className="p-6">
                <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                  <f.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="bg-gradient-to-r from-[var(--primary-gradient-from)] to-[var(--primary-gradient-to)]">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">{p.ctaTitle}</h2>
          <p className="mt-3 text-white/80">{p.ctaSubtitle}</p>
          <div className="mt-8">
            <a href={config.applicantAppUrl}>
              <Button
                variant="outline"
                size="lg"
                className="bg-white text-primary border-white hover:bg-white/90 no-default-hover-elevate"
              >
                {t.hero.uploadResume}
              </Button>
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
