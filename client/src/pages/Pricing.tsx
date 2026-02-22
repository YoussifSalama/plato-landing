import { useI18n } from "@/lib/i18n";
import { useSEO } from "@/hooks/useSEO";
import { getDemoLink, config } from "@/lib/config";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { Sparkles } from "lucide-react";

export default function Pricing() {
  const { t } = useI18n();
  useSEO({ title: t.meta.pages.pricing.title, description: t.meta.pages.pricing.description });
  const p = t.pricingPage;

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
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-[1.1]" data-testid="text-pricing-title">
              {p.title}
            </h1>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={2}>
            <p className="mt-4 text-lg text-muted-foreground">{p.subtitle}</p>
          </ScrollReveal>

          <ScrollReveal animation="scale-up" delay={4}>
            <Card className="mt-12 max-w-2xl mx-auto">
              <CardContent className="p-10 sm:p-14 text-center">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <Sparkles className="w-7 h-7 text-primary" />
                </div>
                <h2 className="text-2xl font-bold mb-3" data-testid="text-coming-soon">
                  {p.comingSoon}
                </h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">{p.comingSoonDesc}</p>
                <a href={getDemoLink()}>
                  <Button size="lg" data-testid="button-pricing-demo">
                    {p.bookDemo}
                  </Button>
                </a>
                <p className="mt-4 text-sm text-muted-foreground">
                  {p.contactUs}{" "}
                  <a
                    href={`mailto:${config.demoEmailFallback}`}
                    className="text-primary hover:underline"
                    dir="ltr"
                  >
                    {config.demoEmailFallback}
                  </a>
                </p>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
