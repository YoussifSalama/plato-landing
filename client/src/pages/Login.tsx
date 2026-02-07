import { useI18n } from "@/lib/i18n";
import { getEmployerLoginUrl, getApplicantLoginUrl } from "@/lib/config";
import { Card, CardContent } from "@/components/ui/card";
import Section from "@/components/shared/Section";
import { Building2, User } from "lucide-react";

export default function Login() {
  const { t } = useI18n();
  const p = t.loginPage;

  return (
    <Section className="pt-20 sm:pt-28 lg:pt-32">
      <div className="max-w-lg mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight" data-testid="text-login-title">
          {p.title}
        </h1>
        <p className="mt-3 text-muted-foreground">{p.subtitle}</p>

        <div className="mt-10 space-y-4">
          <a href={getEmployerLoginUrl()} data-testid="button-employer-login">
            <Card className="hover-elevate overflow-visible cursor-pointer">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="w-11 h-11 rounded-md bg-[#057ABE]/10 flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-5 h-5 text-[#057ABE]" />
                </div>
                <div className="text-start">
                  <h2 className="font-semibold text-base">{p.employerLogin}</h2>
                  <p className="text-sm text-muted-foreground mt-1">{p.employerDesc}</p>
                </div>
              </CardContent>
            </Card>
          </a>

          <a href={getApplicantLoginUrl()} data-testid="button-seeker-login">
            <Card className="hover-elevate overflow-visible cursor-pointer mt-4">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="w-11 h-11 rounded-md bg-[#689AB9]/10 flex items-center justify-center flex-shrink-0">
                  <User className="w-5 h-5 text-[#689AB9]" />
                </div>
                <div className="text-start">
                  <h2 className="font-semibold text-base">{p.seekerLogin}</h2>
                  <p className="text-sm text-muted-foreground mt-1">{p.seekerDesc}</p>
                </div>
              </CardContent>
            </Card>
          </a>
        </div>
      </div>
    </Section>
  );
}
