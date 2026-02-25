import { useI18n } from "@/lib/i18n";
import { useSEO } from "@/hooks/useSEO";
import { getEmployerLoginUrl, getApplicantLoginUrl } from "@/lib/config";
import { ClipboardList, UserRound, ArrowRight } from "lucide-react";

export default function Login() {
  const { t, dir } = useI18n();
  useSEO({ title: t.meta.pages.login.title, description: t.meta.pages.login.description });
  const p = t.loginPage;

  return (
    <div className="min-h-[calc(100vh-56px)] flex flex-col items-center justify-center px-4 sm:px-6 pb-16 pt-24 sm:pt-28">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-[#0966A8]/50 via-[#1EA0E2]/20 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-3xl mx-auto text-center">
        <h1
          className="text-4xl sm:text-5xl lg:text-[56px] font-bold tracking-tight leading-[1.1]"
          data-testid="text-login-title"
        >
          {p.title}
        </h1>
        <p className="mt-4 text-muted-foreground text-base sm:text-lg">
          {p.subtitle}
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-5">
          <a
            href={getEmployerLoginUrl()}
            className="group block rounded-2xl border border-gray-200 dark:border-[#1a2332] bg-transparent p-7 sm:p-8 text-start transition-colors hover:border-[#0966A8]/50 dark:hover:border-[#0966A8]/50"
            data-testid="button-employer-login"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0966A8] to-[#1EA0E2] flex items-center justify-center mb-5">
              <ClipboardList className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-xl font-semibold tracking-tight">{p.employerTitle}</h2>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              {p.employerDesc}
            </p>
            <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-[#1EA0E2] group-hover:gap-2.5 transition-all">
              {p.employerCta}
              <ArrowRight className={`w-4 h-4 ${dir === 'rtl' ? 'rotate-180' : ''}`} />
            </span>
          </a>

          <a
            href={getApplicantLoginUrl()}
            className="group block rounded-2xl border border-gray-200 dark:border-[#1a2332] bg-transparent p-7 sm:p-8 text-start transition-colors hover:border-[#0966A8]/50 dark:hover:border-[#0966A8]/50"
            data-testid="button-seeker-login"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0966A8] to-[#1EA0E2] flex items-center justify-center mb-5">
              <UserRound className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-xl font-semibold tracking-tight">{p.seekerTitle}</h2>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              {p.seekerDesc}
            </p>
            <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-[#1EA0E2] group-hover:gap-2.5 transition-all">
              {p.seekerCta}
              <ArrowRight className={`w-4 h-4 ${dir === 'rtl' ? 'rotate-180' : ''}`} />
            </span>
          </a>
        </div>

        <p className="mt-10 text-sm text-muted-foreground">
          {p.newToPlato}{" "}
          <a
            href={getApplicantLoginUrl()}
            className="text-[#1EA0E2] hover:underline font-medium"
            data-testid="link-create-account"
          >
            {p.createAccount}
          </a>
        </p>
      </div>
    </div>
  );
}
