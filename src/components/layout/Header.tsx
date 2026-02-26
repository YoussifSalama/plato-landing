"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useI18n } from "@/lib/i18n";
import { useAppTheme } from "@/lib/theme";
import { Button } from "@/components/ui/button";
import SmartHashLink from "@/components/shared/SmartHashLink";
import { Menu, X, Sun, Moon } from "lucide-react";

type NavItem =
  | { label: string; path: string; type: "route" }
  | { label: string; hash: string; type: "hash" };

export default function Header() {
  const { t, lang, dir, switchLang, localePath } = useI18n();
  const { isDark, toggleTheme } = useAppTheme();
  const pathname = usePathname() ?? "/";
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("");

  const isHome = pathname === "/" || pathname === "/ar" || pathname === "/en";

  const navItems: NavItem[] = [
    { label: t.nav.about, path: "/employers", type: "route" },
    { label: t.nav.pricing, path: "/pricing", type: "route" },
    { label: t.nav.contact, path: "/contact", type: "route" },
    { label: t.nav.blog, path: "/blog", type: "route" },
  ];

  const isActive = (path: string) => {
    const full = localePath(path);
    return pathname === full || pathname === `/en${path}`;
  };

  const updateActiveHash = useCallback(() => {
    setActiveHash(window.location.hash.slice(1));
  }, []);

  useEffect(() => {
    updateActiveHash();
    window.addEventListener("hashchange", updateActiveHash);
    return () => window.removeEventListener("hashchange", updateActiveHash);
  }, [updateActiveHash]);

  useEffect(() => {
    if (!isHome) {
      setActiveHash("");
    }
  }, [pathname, isHome]);

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash) {
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 150);
    }
  }, [pathname]);

  const isHashActive = (hash: string) => {
    return isHome && activeHash === hash;
  };

  return (
    <header
      className="sticky top-0 z-50 w-full backdrop-blur-md bg-white dark:bg-transparent border-b border-transparent"
      dir={dir}
    >
      <div className="w-full px-6 sm:px-8 lg:px-10">
        <div className="flex items-center h-14 gap-4">
          <div className="flex-1 flex items-center">
          <Link href={localePath("/")} data-testid="link-home">
            <div className="flex items-center gap-1" style={{ direction: "ltr" }} data-testid="img-logo">
              <div className="h-8 sm:h-9 overflow-hidden flex-shrink-0" style={{ width: '28px' }}>
                <img
                  src="/images/plato-logo.png"
                  alt="Plato"
                  className="h-full w-auto max-w-none"
                />
              </div>
              <span className="text-[20px] sm:text-[22px] font-bold tracking-tight text-gray-900 dark:text-white" style={{ fontFamily: "'Roc Grotesk', sans-serif" }}>Plato</span>
            </div>
          </Link>
          </div>

          <nav
            className="hidden lg:flex items-center bg-white/90 dark:bg-white/10 backdrop-blur-sm rounded-full px-1.5 py-1 border border-gray-200/60 dark:border-white/10 shadow-sm dark:shadow-none"
            aria-label="Main navigation"
          >
            {navItems.map((item) => {
              if (item.type === "hash") {
                return (
                  <SmartHashLink
                    key={item.hash}
                    hash={item.hash}
                    className={`px-4 py-1.5 text-[13px] font-medium rounded-full transition-colors cursor-pointer ${
                      isHashActive(item.hash)
                        ? "text-foreground bg-gray-100 dark:bg-white/15"
                        : "text-gray-600 dark:text-gray-300 hover:text-foreground"
                    }`}
                    data-testid={`link-nav-${item.hash}`}
                  >
                    {item.label}
                  </SmartHashLink>
                );
              }
              return (
                <Link key={item.path} href={localePath(item.path)}>
                  <span
                    className={`px-4 py-1.5 text-[13px] font-medium rounded-full transition-colors cursor-pointer ${
                      isActive(item.path)
                        ? "text-foreground bg-gray-100 dark:bg-white/15"
                        : "text-gray-600 dark:text-gray-300 hover:text-foreground"
                    }`}
                    data-testid={`link-nav-${item.path.slice(1)}`}
                  >
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </nav>

          <div className="flex-1 hidden lg:flex items-center justify-end gap-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md text-muted-foreground transition-colors"
              aria-label="Toggle theme"
              data-testid="button-theme-toggle"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <Button
              variant="ghost"
              size="sm"
              className="text-[13px] text-muted-foreground hover:text-foreground border-transparent"
              onClick={switchLang}
              data-testid="button-lang-switch"
              style={{ direction: "ltr" } as React.CSSProperties}
            >
              {t.nav.langSwitch}
            </Button>
            <Button asChild variant="ghost" size="sm" className="rounded-full px-5">
              <Link href={localePath("/login")} data-testid="button-login-header">
                {t.nav.login}
              </Link>
            </Button>
            <Button asChild size="sm" className="rounded-full px-5 shadow-md shadow-primary/20 dark:shadow-primary/30">
              <Link href={localePath("/book-demo")} data-testid="button-book-demo-header">
                {t.nav.bookDemo}
              </Link>
            </Button>
          </div>

          <div className="flex-1 lg:hidden flex items-center justify-end gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md text-muted-foreground transition-colors"
              aria-label="Toggle theme"
              data-testid="button-theme-toggle-mobile"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button
              className="p-2 rounded-md text-foreground hover:bg-muted"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              data-testid="button-mobile-menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-xl" dir={dir}>
          <div className="px-4 py-4 space-y-1">
            {navItems.map((item) => {
              if (item.type === "hash") {
                return (
                  <SmartHashLink
                    key={item.hash}
                    hash={item.hash}
                    onClick={() => setMobileOpen(false)}
                    className={`block px-3 py-2 text-sm font-medium rounded-md cursor-pointer ${
                      isHashActive(item.hash)
                        ? "text-foreground bg-muted"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    }`}
                  >
                    {item.label}
                  </SmartHashLink>
                );
              }
              return (
                <Link key={item.path} href={localePath(item.path)}>
                  <span
                    onClick={() => setMobileOpen(false)}
                    className={`block px-3 py-2 text-sm font-medium rounded-md cursor-pointer ${
                      isActive(item.path)
                        ? "text-foreground bg-muted"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    }`}
                  >
                    {item.label}
                  </span>
                </Link>
              );
            })}
            <div className="pt-3 border-t border-border flex flex-col gap-2">
              <button
                onClick={() => {
                  switchLang();
                  setMobileOpen(false);
                }}
                className="px-3 py-2 text-sm font-medium border border-border rounded-md text-muted-foreground text-start"
                style={{ direction: "ltr" }}
              >
                {t.nav.langSwitch}
              </button>
              <Button asChild variant="outline" className="w-full rounded-full">
                <Link href={localePath("/login")} onClick={() => setMobileOpen(false)} data-testid="button-login-mobile">
                  {t.nav.login}
                </Link>
              </Button>
              <Button asChild className="w-full rounded-full">
                <Link href={localePath("/book-demo")} onClick={() => setMobileOpen(false)}>
                  {t.nav.bookDemo}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
