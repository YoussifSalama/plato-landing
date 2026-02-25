export const config = {
  employerAppUrl: import.meta.env.VITE_EMPLOYER_APP_URL || "https://platohiring.com",
  applicantAppUrl: import.meta.env.VITE_APPLICANT_APP_URL || "https://applicant.platohiring.com",
  demoBookingUrl: import.meta.env.VITE_DEMO_BOOKING_URL || "",
  demoEmailFallback: import.meta.env.VITE_DEMO_EMAIL_FALLBACK || "hello@platohiring.com",
  linkedinUrl: import.meta.env.VITE_LINKEDIN_URL || "",
  supabaseUrl: import.meta.env.VITE_SUPABASE_URL || "",
  supabaseAnonKey: import.meta.env.VITE_SUPABASE_ANON_KEY || "",
};

export function getDemoLink(): string {
  return "/book-demo";
}

export function getEmployerLoginUrl(): string {
  return "https://agency.platohiring.com/auth/login";
}

export function getApplicantLoginUrl(): string {
  return "https://candidate.platohiring.com/auth/login";
}

export function getEmployerSignupUrl(): string {
  return "https://agency.platohiring.com/auth/register";
}

export function getApplicantSignupUrl(): string {
  return "https://candidate.platohiring.com/auth/register";
}
