import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://platohiring.com"),
  title: "Plato - Hire faster with end-to-end screening and interview automation",
  description: "Plato turns resumes into a shortlist you can trust — with outreach, interviews, and structured reports built in.",
  openGraph: {
    title: "Plato - Hire faster with screening and interview automation",
    description: "Plato turns resumes into a shortlist you can trust — with outreach, interviews, and structured reports built in.",
    type: "website",
    siteName: "Plato",
    images: ["/images/og-default.png"],
    url: "https://platohiring.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Plato - Hire faster with screening and interview automation",
    description: "Plato turns resumes into a shortlist you can trust — with outreach, interviews, and structured reports built in.",
    images: ["/images/og-default.png"],
  },
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("plato-theme");if(t==="light"){document.documentElement.classList.remove("dark")}else{document.documentElement.classList.add("dark")}}catch(e){}})();`,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Arabic:wght@100..900&display=swap" rel="stylesheet" />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
