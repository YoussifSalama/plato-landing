"use client";

import { useI18n } from "@/lib/i18n";
import { ThemeProvider } from "@/lib/theme";
import Header from "./Header";
import Footer from "./Footer";
import PageTransition from "@/components/shared/PageTransition";
import ScrollManager from "@/components/shared/ScrollManager";
import { useEffect } from "react";

function LayoutInner({ children }: { children: React.ReactNode }) {
  const { dir, lang } = useI18n();

  useEffect(() => {
    document.documentElement.setAttribute("dir", dir);
    document.documentElement.setAttribute("lang", lang);
  }, [dir, lang]);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground" dir={dir}>
      <ScrollManager />
      <Header />
      <main className="flex-1">
        <PageTransition>{children}</PageTransition>
      </main>
      <Footer />
    </div>
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <LayoutInner>{children}</LayoutInner>
    </ThemeProvider>
  );
}
