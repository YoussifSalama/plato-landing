import { useI18n } from "@/lib/i18n";
import { useSEO } from "@/hooks/useSEO";
import { getDemoLink, config } from "@/lib/config";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Section from "@/components/shared/Section";
import { FileSearch, CalendarCheck, MessageSquare, BarChart3 } from "lucide-react";

export default function Employers() {
  const { t } = useI18n();
  useSEO({ title: t.meta.pages.employers.title, description: t.meta.pages.employers.description });
  const p = t.employersPage;

  const features = [
    { icon: FileSearch, title: p.feature1Title, desc: p.feature1Desc },
    { icon: CalendarCheck, title: p.feature2Title, desc: p.feature2Desc },
    { icon: MessageSquare, title: p.feature3Title, desc: p.feature3Desc },
    { icon: BarChart3, title: p.feature4Title, desc: p.feature4Desc },
  ];

  return (
    <>
      <Section className="pt-20 sm:pt-28 lg:pt-32">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-[1.1]" data-testid="text-employers-hero">
            {p.heroTitle}
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            {p.heroSubtitle}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a href={getDemoLink()}>
              <Button size="lg" data-testid="button-employers-demo">
                {t.nav.bookDemo}
              </Button>
            </a>
            <a href={config.employerAppUrl}>
              <Button variant="outline" size="lg">
                {t.hero.hireTalent}
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

      <Section className="bg-primary">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">{p.ctaTitle}</h2>
          <p className="mt-4 text-white/80 leading-relaxed">{p.ctaSubtitle}</p>
          <div className="mt-8">
            <a href={getDemoLink()}>
              <Button
                variant="outline"
                size="lg"
                className="bg-white text-primary border-white no-default-hover-elevate"
              >
                {t.nav.bookDemo}
              </Button>
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
