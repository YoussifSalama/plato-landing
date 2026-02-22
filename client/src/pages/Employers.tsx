import { useI18n } from "@/lib/i18n";
import { useSEO } from "@/hooks/useSEO";
import { getDemoLink, config } from "@/lib/config";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ScrollReveal from "@/components/shared/ScrollReveal";
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
    <div className="relative" style={{ overflowX: "clip" }}>
      <div className="absolute left-0 right-0 hidden dark:block pointer-events-none z-0" aria-hidden="true" style={{ top: "-60px", height: "620px" }}>
        <div className="absolute inset-0 bg-gradient-to-b from-[#071b2e] via-[#0a1628] to-transparent" />
        <div className="absolute left-1/2 -translate-x-1/2 w-[130%] h-[520px] bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(9,102,168,0.45),rgba(30,160,226,0.15)_40%,transparent_70%)]" style={{ top: "0px" }} />
        <div className="absolute left-1/2 -translate-x-1/2 w-[90%] h-[420px] bg-[radial-gradient(ellipse_60%_40%_at_50%_5%,rgba(14,80,140,0.3),transparent_60%)]" style={{ top: "0px" }} />
      </div>

      <section className="relative pt-24 sm:pt-32 lg:pt-36 pb-16 sm:pb-20 z-[1]">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <ScrollReveal animation="fade-up">
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-[1.1]" data-testid="text-employers-hero">
              {p.heroTitle}
            </h1>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={2}>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              {p.heroSubtitle}
            </p>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={4}>
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
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 sm:py-24 lg:py-28 bg-gray-50/50 dark:bg-white/[0.02]">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((f, i) => (
              <ScrollReveal key={i} animation={i % 2 === 0 ? "fade-left" : "fade-right"} delay={i}>
                <Card className="hover-elevate overflow-visible h-full">
                  <CardContent className="p-6">
                    <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                      <f.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 lg:py-28 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_120%,rgba(255,255,255,0.08),transparent_60%)]" />
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 relative z-[1]">
          <ScrollReveal animation="fade-up">
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
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
