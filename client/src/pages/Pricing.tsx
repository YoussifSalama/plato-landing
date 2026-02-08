import { useI18n } from "@/lib/i18n";
import { useSEO } from "@/hooks/useSEO";
import { getDemoLink, config } from "@/lib/config";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Section from "@/components/shared/Section";
import { Sparkles } from "lucide-react";

export default function Pricing() {
  const { t } = useI18n();
  useSEO({ title: t.meta.pages.pricing.title, description: t.meta.pages.pricing.description });
  const p = t.pricingPage;

  return (
    <Section className="pt-20 sm:pt-28 lg:pt-32">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight" data-testid="text-pricing-title">
          {p.title}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">{p.subtitle}</p>

        <Card className="mt-12">
          <CardContent className="p-10 sm:p-14 text-center">
            <div className="w-14 h-14 rounded-full bg-[#057ABE]/10 flex items-center justify-center mx-auto mb-6">
              <Sparkles className="w-7 h-7 text-[#057ABE]" />
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
                className="text-[#057ABE] hover:underline"
                dir="ltr"
              >
                {config.demoEmailFallback}
              </a>
            </p>
          </CardContent>
        </Card>
      </div>
    </Section>
  );
}
