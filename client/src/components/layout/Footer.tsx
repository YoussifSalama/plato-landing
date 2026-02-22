import { Link, useLocation } from "wouter";
import { useI18n } from "@/lib/i18n";
import { config } from "@/lib/config";
import { SiLinkedin, SiInstagram, SiTiktok } from "react-icons/si";

export default function Footer() {
  const { t, dir, localePath } = useI18n();
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
            <div className="flex items-center gap-1" style={{ direction: "ltr" }} data-testid="img-footer-logo">
              <div className="h-8 sm:h-9 overflow-hidden flex-shrink-0" style={{ width: '28px' }}>
                <img
                  src="/images/plato-logo.png"
                  alt=""
                  className="h-full w-auto max-w-none"
                />
              </div>
              <span className="text-[20px] sm:text-[22px] font-bold tracking-tight text-gray-900 dark:text-white" style={{ fontFamily: "'Host Grotesk', sans-serif" }}>Plato</span>
            </div>
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
              <a
                href="https://www.instagram.com/platohiring?igsh=M2puazltZDQxOXFu&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Instagram"
                data-testid="link-footer-instagram"
              >
                <SiInstagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.tiktok.com/@platohiring?_r=1&_t=ZN-948glBbZIgA"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="TikTok"
                data-testid="link-footer-tiktok"
              >
                <SiTiktok className="w-4 h-4" />
              </a>
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
