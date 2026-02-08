import { useI18n } from "@/lib/i18n";
import { useSEO } from "@/hooks/useSEO";
import { Badge } from "@/components/ui/badge";
import Section from "@/components/shared/Section";

export default function Terms() {
  const { t } = useI18n();
  useSEO({ title: t.meta.pages.terms.title, description: t.meta.pages.terms.description });
  const p = t.termsPage;

  return (
    <Section className="pt-20 sm:pt-28 lg:pt-32">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight" data-testid="text-terms-title">
            {p.title}
          </h1>
          <div className="mt-4">
            <Badge variant="secondary" data-testid="badge-terms-template">
              {p.templateNotice}
            </Badge>
          </div>
        </div>

        <div className="prose prose-sm max-w-none dark:prose-invert text-muted-foreground leading-relaxed whitespace-pre-line">
          {p.content}
        </div>
      </div>
    </Section>
  );
}
