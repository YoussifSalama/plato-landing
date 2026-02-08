import { useState } from "react";
import { useI18n } from "@/lib/i18n";
import { useSEO } from "@/hooks/useSEO";
import { config } from "@/lib/config";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import Section from "@/components/shared/Section";
import { Mail, CheckCircle } from "lucide-react";

export default function Contact() {
  const { t, lang } = useI18n();
  useSEO({ title: t.meta.pages.contact.title, description: t.meta.pages.contact.description });
  const p = t.contactPage;
  const supabaseConfigured = !!(config.supabaseUrl && config.supabaseAnonKey);

  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    hiring_volume: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!supabaseConfigured) return;

    setSubmitting(true);
    setError("");

    try {
      const res = await fetch(`${config.supabaseUrl}/rest/v1/contact_leads`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: config.supabaseAnonKey,
          Authorization: `Bearer ${config.supabaseAnonKey}`,
          Prefer: "return=minimal",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          company: form.company,
          role: form.role,
          hiring_volume: form.hiring_volume,
          message: form.message,
          source_page: "contact",
          language: lang,
        }),
      });

      if (!res.ok) throw new Error("Failed to submit");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again or email us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Section className="pt-20 sm:pt-28 lg:pt-32">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight" data-testid="text-contact-title">
            {p.title}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">{p.subtitle}</p>
        </div>

        <Card>
          <CardContent className="p-6 sm:p-8">
            {submitted ? (
              <div className="text-center py-12">
                <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <p className="text-lg font-medium" data-testid="text-contact-success">
                  {p.successMessage}
                </p>
              </div>
            ) : !supabaseConfigured ? (
              <div className="text-center py-8">
                <Mail className="w-10 h-10 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground mb-4">
                  {p.fallbackMessage}{" "}
                  <span className="font-medium text-foreground" dir="ltr">
                    {config.demoEmailFallback}
                  </span>
                </p>
                <a
                  href={`mailto:${config.demoEmailFallback}?subject=${encodeURIComponent("Contact from Plato Website")}`}
                >
                  <Button data-testid="button-contact-email">
                    <Mail className="w-4 h-4" />
                    {p.emailUs}
                  </Button>
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h2 className="text-xl font-semibold mb-2">{p.formTitle}</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">{p.nameLabel}</Label>
                    <Input
                      id="name"
                      placeholder={p.namePlaceholder}
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      required
                      data-testid="input-contact-name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">{p.emailLabel}</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder={p.emailPlaceholder}
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      required
                      data-testid="input-contact-email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="company">{p.companyLabel}</Label>
                    <Input
                      id="company"
                      placeholder={p.companyPlaceholder}
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      data-testid="input-contact-company"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="role">{p.roleLabel}</Label>
                    <Input
                      id="role"
                      placeholder={p.rolePlaceholder}
                      value={form.role}
                      onChange={(e) => setForm({ ...form, role: e.target.value })}
                      data-testid="input-contact-role"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>{p.volumeLabel}</Label>
                  <Select
                    value={form.hiring_volume}
                    onValueChange={(v) => setForm({ ...form, hiring_volume: v })}
                  >
                    <SelectTrigger data-testid="select-contact-volume">
                      <SelectValue placeholder={p.volumePlaceholder} />
                    </SelectTrigger>
                    <SelectContent>
                      {p.volumeOptions.map((opt) => (
                        <SelectItem key={opt} value={opt}>
                          {opt}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">{p.messageLabel}</Label>
                  <Textarea
                    id="message"
                    placeholder={p.messagePlaceholder}
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    data-testid="input-contact-message"
                  />
                </div>

                {error && <p className="text-sm text-destructive">{error}</p>}

                <Button type="submit" disabled={submitting} className="w-full" data-testid="button-contact-submit">
                  {submitting ? "..." : p.submit}
                </Button>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </Section>
  );
}
