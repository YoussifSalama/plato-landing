export const config = {
  employerAppUrl: process.env.NEXT_PUBLIC_EMPLOYER_APP_URL || "https://platohiring.com",
  applicantAppUrl: process.env.NEXT_PUBLIC_APPLICANT_APP_URL || "https://applicant.platohiring.com",
  demoBookingUrl: process.env.NEXT_PUBLIC_DEMO_BOOKING_URL || "",
  demoEmailFallback: process.env.NEXT_PUBLIC_DEMO_EMAIL_FALLBACK || "Demo@platohiring.com",
  linkedinUrl: process.env.NEXT_PUBLIC_LINKEDIN_URL || "",
  supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL || "",
  supabaseAnonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "",
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
  return "https://agency.platohiring.com/auth/signup";
}

export function getApplicantSignupUrl(): string {
  return "https://candidate.platohiring.com/auth/signup";
}
