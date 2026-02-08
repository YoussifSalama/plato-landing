import { useState, useEffect, useCallback } from "react";
import { Link, useLocation } from "wouter";
import { useI18n } from "@/lib/i18n";
import { getDemoLink } from "@/lib/config";
import { Button } from "@/components/ui/button";
import SmartHashLink from "@/components/shared/SmartHashLink";
import { Menu, X } from "lucide-react";
import platoLogo from "@assets/image_1770549516838.png";

type NavItem =
  | { label: string; path: string; type: "route" }
  | { label: string; hash: string; type: "hash" };

export default function Header() {
  const { t, lang, dir, switchLang, localePath } = useI18n();
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("");

  const navItems: NavItem[] = [
    { label: t.nav.forEmployers, hash: "employers", type: "hash" },
    { label: t.nav.forJobSeekers, hash: "job-seekers", type: "hash" },
    { label: t.nav.howItWorks, hash: "how-it-works", type: "hash" },
    { label: t.nav.blog, path: "/blog", type: "route" },
    { label: t.nav.faq, path: "/faq", type: "route" },
    { label: t.nav.contact, path: "/contact", type: "route" },
  ];

  const isActive = (path: string) => {
    const full = localePath(path);
    return location === full;
  };

  const isHome = location === "/" || location === "/ar";

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
  }, [location, isHome]);

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
  }, [location]);

  const isHashActive = (hash: string) => {
    return isHome && activeHash === hash;
  };

  return (
    <header
      className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur-sm border-b border-border"
      dir={dir}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          <Link href={localePath("/")} data-testid="link-home">
            <img
              src={platoLogo}
              alt="Plato"
              className="h-8"
              style={{ direction: "ltr" }}
              data-testid="img-logo"
            />
          </Link>

          <nav
            className="hidden lg:flex items-center gap-1"
            aria-label="Main navigation"
          >
            {navItems.map((item) => {
              if (item.type === "hash") {
                return (
                  <SmartHashLink
                    key={item.hash}
                    hash={item.hash}
                    className={`px-3 py-2 text-sm font-medium rounded-md transition-colors cursor-pointer ${
                      isHashActive(item.hash)
                        ? "text-primary bg-accent dark:bg-primary/10"
                        : "text-foreground/70 hover:text-foreground hover:bg-muted"
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
                    className={`px-3 py-2 text-sm font-medium rounded-md transition-colors cursor-pointer ${
                      isActive(item.path)
                        ? "text-primary bg-accent dark:bg-primary/10"
                        : "text-foreground/70 hover:text-foreground hover:bg-muted"
                    }`}
                    data-testid={`link-nav-${item.path.slice(1)}`}
                  >
                    {item.label}
                  </span>
                </Link>
              );
            })}
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
            {navItems.map((item) => {
              if (item.type === "hash") {
                return (
                  <SmartHashLink
                    key={item.hash}
                    hash={item.hash}
                    onClick={() => setMobileOpen(false)}
                    className={`block px-3 py-2 text-sm font-medium rounded-md cursor-pointer ${
                      isHashActive(item.hash)
                        ? "text-primary bg-accent dark:bg-primary/10"
                        : "text-foreground/70 hover:text-foreground hover:bg-muted"
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
                        ? "text-primary bg-accent dark:bg-primary/10"
                        : "text-foreground/70 hover:text-foreground hover:bg-muted"
                    }`}
                  >
                    {item.label}
                  </span>
                </Link>
              );
            })}
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
