import { Link } from "wouter";
import { useI18n } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import Section from "@/components/shared/Section";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  const { localePath } = useI18n();

  return (
    <Section className="pt-20 sm:pt-28 lg:pt-32">
      <div className="max-w-lg mx-auto text-center">
        <p className="text-6xl font-bold text-[#057ABE] mb-4">404</p>
        <h1 className="text-2xl font-bold mb-3" data-testid="text-404-title">
          Page Not Found
        </h1>
        <p className="text-muted-foreground mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link href={localePath("/")}>
          <Button data-testid="button-404-home">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Button>
        </Link>
      </div>
    </Section>
  );
}
