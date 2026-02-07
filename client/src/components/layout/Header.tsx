import { useState } from "react";
import { Link, useLocation } from "wouter";
import { useI18n } from "@/lib/i18n";
import { getDemoLink } from "@/lib/config";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Header() {
  const { t, lang, dir, switchLang, localePath } = useI18n();
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { label: t.nav.forEmployers, path: "/employers" },
    { label: t.nav.forJobSeekers, path: "/job-seekers" },
    { label: t.nav.howItWorks, path: "/how-it-works" },
    { label: t.nav.blog, path: "/blog" },
    { label: t.nav.faq, path: "/faq" },
    { label: t.nav.contact, path: "/contact" },
  ];

  const isActive = (path: string) => {
    const full = localePath(path);
    return location === full;
  };

  return (
    <header
      className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur-sm border-b border-border"
      dir={dir}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          <Link href={localePath("/")} data-testid="link-home">
            <span
              className="text-xl font-bold tracking-tight"
              style={{ direction: "ltr" }}
              data-testid="text-logo"
            >
              <span className="text-[#057ABE]">Plato</span>
            </span>
          </Link>

          <nav
            className="hidden lg:flex items-center gap-1"
            aria-label="Main navigation"
          >
            {navItems.map((item) => (
              <Link key={item.path} href={localePath(item.path)}>
                <span
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-colors cursor-pointer ${
                    isActive(item.path)
                      ? "text-[#057ABE] bg-[#E0EEF3] dark:bg-[#057ABE]/10"
                      : "text-foreground/70 hover:text-foreground hover:bg-muted"
                  }`}
                  data-testid={`link-nav-${item.path.slice(1)}`}
                >
                  {item.label}
                </span>
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-2">
            <Link href={localePath("/login")}>
              <Button variant="ghost" size="sm" data-testid="button-login">
                {t.nav.login}
              </Button>
            </Link>
            <button
              onClick={switchLang}
              className="px-3 py-1.5 text-sm font-medium border border-border rounded-md transition-colors hover:bg-muted"
              data-testid="button-lang-switch"
              style={{ direction: "ltr" }}
            >
              {t.nav.langSwitch}
            </button>
            <a href={getDemoLink()} data-testid="button-book-demo-header">
              <Button>{t.nav.bookDemo}</Button>
            </a>
          </div>

          <button
            className="lg:hidden p-2 rounded-md hover:bg-muted"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            data-testid="button-mobile-menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-background" dir={dir}>
          <div className="px-4 py-4 space-y-1">
            {navItems.map((item) => (
              <Link key={item.path} href={localePath(item.path)}>
                <span
                  onClick={() => setMobileOpen(false)}
                  className={`block px-3 py-2 text-sm font-medium rounded-md cursor-pointer ${
                    isActive(item.path)
                      ? "text-[#057ABE] bg-[#E0EEF3] dark:bg-[#057ABE]/10"
                      : "text-foreground/70 hover:text-foreground hover:bg-muted"
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            ))}
            <div className="pt-3 border-t border-border flex flex-col gap-2">
              <Link href={localePath("/login")}>
                <Button
                  variant="ghost"
                  className="w-full justify-start"
                  onClick={() => setMobileOpen(false)}
                >
                  {t.nav.login}
                </Button>
              </Link>
              <button
                onClick={() => {
                  switchLang();
                  setMobileOpen(false);
                }}
                className="px-3 py-2 text-sm font-medium border border-border rounded-md text-start"
                style={{ direction: "ltr" }}
              >
                {t.nav.langSwitch}
              </button>
              <a href={getDemoLink()}>
                <Button className="w-full" onClick={() => setMobileOpen(false)}>
                  {t.nav.bookDemo}
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
