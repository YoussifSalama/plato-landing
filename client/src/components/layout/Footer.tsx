import { Link, useLocation } from "wouter";
import { useI18n } from "@/lib/i18n";
import { useAppTheme } from "@/lib/theme";
import { config } from "@/lib/config";
import { SiLinkedin } from "react-icons/si";

export default function Footer() {
  const { t, dir, localePath } = useI18n();
  const { isDark } = useAppTheme();
  const [location] = useLocation();

  const isHome = location === "/" || location === "/ar";
  if (isHome) return null;

  const links = [
    { label: t.footer.privacy, path: "/privacy" },
    { label: t.footer.terms, path: "/terms" },
    { label: t.footer.security, path: "/security" },
    { label: t.footer.contact, path: "/contact" },
  ];

  return (
    <footer className="bg-card border-t border-border" dir={dir}>
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <img
              src={isDark ? "/images/plato-logo-dark.png" : "/images/plato-logo-light.png"}
              alt="Plato"
              className="h-9 sm:h-10"
              style={{ direction: "ltr" }}
              data-testid="img-footer-logo"
            />
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              {t.footer.tagline}
            </p>
          </div>

          <div>
            <ul className="space-y-2.5">
              {links.map((link) => (
                <li key={link.path}>
                  <Link href={localePath(link.path)}>
                    <span
                      className="text-[13px] text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                      data-testid={`link-footer-${link.path.slice(1)}`}
                    >
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              {config.linkedinUrl && (
                <a
                  href={config.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="LinkedIn"
                  data-testid="link-linkedin"
                >
                  <SiLinkedin className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border">
          <p className="text-xs text-muted-foreground/70" data-testid="text-copyright">
            {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
