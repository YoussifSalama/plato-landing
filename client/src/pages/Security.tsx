import { useI18n } from "@/lib/i18n";
import { useSEO } from "@/hooks/useSEO";
import { Card, CardContent } from "@/components/ui/card";
import Section from "@/components/shared/Section";
import { Shield, Lock, UserCheck, Trash2, AlertTriangle, RefreshCw } from "lucide-react";

const icons = [Shield, Lock, UserCheck, Trash2, AlertTriangle, RefreshCw];

export default function Security() {
  const { t } = useI18n();
  useSEO({ title: t.meta.pages.security.title, description: t.meta.pages.security.description });
  const p = t.securityPage;

  return (
    <Section className="pt-20 sm:pt-28 lg:pt-32">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight" data-testid="text-security-title">
            {p.title}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">{p.subtitle}</p>
        </div>

        <p className="text-muted-foreground leading-relaxed mb-10">{p.intro}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {p.sections.map((section, i) => {
            const Icon = icons[i] || Shield;
            return (
              <Card key={i} className="overflow-visible">
                <CardContent className="p-6">
                  <div className="w-9 h-9 rounded-md bg-primary/10 flex items-center justify-center mb-3">
                    <Icon className="w-4.5 h-4.5 text-primary" />
                  </div>
                  <h3 className="text-base font-semibold mb-2">{section.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{section.desc}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
