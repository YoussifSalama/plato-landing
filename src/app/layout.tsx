import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://platohiring.com"),
  title: {
    default: "Plato | AI Hiring & Recruitment Automation Platform",
    template: "%s",
  },
  description: "Plato helps teams automate candidate screening, interviews, and hiring workflows to reduce time-to-hire and improve hiring quality.",
  keywords: ["AI hiring platform", "recruitment automation", "candidate screening", "structured interviews"],
  alternates: {
    canonical: "https://platohiring.com",
    languages: {
      en: "https://platohiring.com",
      ar: "https://platohiring.com/ar",
      "x-default": "https://platohiring.com",
    },
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Plato | AI Hiring & Recruitment Automation Platform",
    description: "Plato helps teams automate candidate screening, interviews, and hiring workflows to reduce time-to-hire and improve hiring quality.",
    type: "website",
    siteName: "Plato",
    locale: "en_US",
    alternateLocale: ["ar_EG"],
    images: ["/images/og-default.png"],
    url: "https://platohiring.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Plato | AI Hiring & Recruitment Automation Platform",
    description: "Plato helps teams automate candidate screening, interviews, and hiring workflows to reduce time-to-hire and improve hiring quality.",
    images: ["/images/og-default.png"],
  },
  icons: {
    icon: "/images/plato-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <script
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("plato-theme");if(t==="light"){document.documentElement.classList.remove("dark")}else{document.documentElement.classList.add("dark")}}catch(e){}})();`,
          }}
        />
        {children}
      </body>
    </html>
  );
}
