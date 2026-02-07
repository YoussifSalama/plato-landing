import { Link } from "wouter";
import { useI18n } from "@/lib/i18n";
import { SiLinkedin } from "react-icons/si";

export default function Footer() {
  const { t, dir, localePath } = useI18n();

  const links = [
    { label: t.footer.privacy, path: "/privacy" },
    { label: t.footer.terms, path: "/terms" },
    { label: t.footer.security, path: "/security" },
    { label: t.footer.contact, path: "/contact" },
  ];

  return (
    <footer className="border-t border-border bg-card/50" dir={dir}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <span
              className="text-xl font-bold tracking-tight"
              style={{ direction: "ltr" }}
              data-testid="text-footer-logo"
            >
              <span className="text-[#057ABE]">Plato</span>
            </span>
            <p className="mt-2 text-sm text-muted-foreground">
              {t.footer.tagline}
            </p>
          </div>

          <div>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.path}>
                  <Link href={localePath(link.path)}>
                    <span
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
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
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn"
                data-testid="link-linkedin"
              >
                <SiLinkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border">
          <p className="text-sm text-muted-foreground" data-testid="text-copyright">
            {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
