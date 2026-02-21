import { useState, useEffect, useCallback } from "react";
import { Link, useLocation } from "wouter";
import { useI18n } from "@/lib/i18n";
import { getDemoLink } from "@/lib/config";
import { Button } from "@/components/ui/button";
import SmartHashLink from "@/components/shared/SmartHashLink";
import { Menu, X } from "lucide-react";
import platoLogo from "@/assets/plato-logo.png";

type NavItem =
  | { label: string; path: string; type: "route" }
  | { label: string; hash: string; type: "hash" };

export default function Header() {
  const { t, lang, dir, switchLang, localePath } = useI18n();
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("");

  const isHome = location === "/" || location === "/ar";

  const navItems: NavItem[] = [
    { label: t.nav.about, path: "/employers", type: "route" },
    { label: t.nav.pricing, path: "/pricing", type: "route" },
    { label: t.nav.useCases, path: "/how-it-works", type: "route" },
    { label: t.nav.blog, path: "/blog", type: "route" },
  ];

  const isActive = (path: string) => {
    const full = localePath(path);
    return location === full;
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
      className="sticky top-0 z-50 w-full bg-black/90 dark:bg-black/90 backdrop-blur-xl border-b border-white/5"
      dir={dir}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-14 gap-4">
          <Link href={localePath("/")} data-testid="link-home">
            <img
              src={platoLogo}
              alt="Plato"
              className="h-7 brightness-0 invert"
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
                    className={`px-4 py-1.5 text-[13px] font-medium rounded-md transition-colors cursor-pointer ${
                      isHashActive(item.hash)
                        ? "text-white"
                        : "text-white/60 hover:text-white"
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
                    className={`px-4 py-1.5 text-[13px] font-medium rounded-md transition-colors cursor-pointer ${
                      isActive(item.path)
                        ? "text-white"
                        : "text-white/60 hover:text-white"
                    }`}
                    data-testid={`link-nav-${item.path.slice(1)}`}
                  >
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              className="text-[13px] text-white/60 hover:text-white border-transparent"
              onClick={switchLang}
              data-testid="button-lang-switch"
              style={{ direction: "ltr" } as React.CSSProperties}
            >
              {t.nav.langSwitch}
            </Button>
            <a href={getDemoLink()} data-testid="button-book-demo-header">
              <Button size="sm" className="rounded-full px-5 bg-primary hover:bg-primary/90 text-white">
                {t.nav.bookDemo}
              </Button>
            </a>
          </div>

          <button
            className="lg:hidden p-2 rounded-md text-white hover:bg-white/10"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            data-testid="button-mobile-menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-white/10 bg-black/95" dir={dir}>
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
                        ? "text-white bg-white/10"
                        : "text-white/60 hover:text-white hover:bg-white/5"
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
                        ? "text-white bg-white/10"
                        : "text-white/60 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {item.label}
                  </span>
                </Link>
              );
            })}
            <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
              <button
                onClick={() => {
                  switchLang();
                  setMobileOpen(false);
                }}
                className="px-3 py-2 text-sm font-medium border border-white/20 rounded-md text-white/60 text-start"
                style={{ direction: "ltr" }}
              >
                {t.nav.langSwitch}
              </button>
              <a href={getDemoLink()}>
                <Button className="w-full rounded-full" onClick={() => setMobileOpen(false)}>
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
