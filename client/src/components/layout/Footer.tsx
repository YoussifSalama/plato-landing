import { Link, useLocation } from "wouter";
import { useI18n } from "@/lib/i18n";
import { config } from "@/lib/config";
import { SiLinkedin } from "react-icons/si";
import platoLogo from "@/assets/plato-logo.png";

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
    <footer className="bg-black dark:bg-black border-t border-white/10" dir={dir}>
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <img
              src={platoLogo}
              alt="Plato"
              className="h-7 brightness-0 invert"
              style={{ direction: "ltr" }}
              data-testid="img-footer-logo"
            />
            <p className="mt-3 text-sm text-white/50 leading-relaxed">
              {t.footer.tagline}
            </p>
          </div>

          <div>
            <ul className="space-y-2.5">
              {links.map((link) => (
                <li key={link.path}>
                  <Link href={localePath(link.path)}>
                    <span
                      className="text-[13px] text-white/50 hover:text-white/80 transition-colors cursor-pointer"
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
                  className="text-white/50 hover:text-white/80 transition-colors"
                  aria-label="LinkedIn"
                  data-testid="link-linkedin"
                >
                  <SiLinkedin className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10">
          <p className="text-xs text-white/40" data-testid="text-copyright">
            {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
