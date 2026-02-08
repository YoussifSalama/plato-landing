import { useI18n } from "@/lib/i18n";
import { useSEO } from "@/hooks/useSEO";
import Section from "@/components/shared/Section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  const { t } = useI18n();
  useSEO({ title: t.meta.pages.faq.title, description: t.meta.pages.faq.description });
  const p = t.faqPage;

  return (
    <Section className="pt-20 sm:pt-28 lg:pt-32">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight" data-testid="text-faq-title">
            {p.title}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">{p.subtitle}</p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {p.items.map((item, i) => (
            <AccordionItem key={i} value={`item-${i}`} data-testid={`faq-item-${i}`}>
              <AccordionTrigger className="text-start font-medium">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  );
}
