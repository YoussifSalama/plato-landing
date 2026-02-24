import { Link, useLocation } from "wouter";
import { useI18n } from "@/lib/i18n";
import { config, getDemoLink } from "@/lib/config";
import { Button } from "@/components/ui/button";
import { SiLinkedin, SiInstagram, SiTiktok } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  const { t, dir, localePath } = useI18n();
  const [location] = useLocation();

  const isHome = location === "/" || location === "/ar";
  const isEmployers = location === "/employers" || location === "/ar/employers";
  const isContact = location === "/contact" || location === "/ar/contact";
  const isBlog = location === "/blog" || location === "/ar/blog" || location.startsWith("/blog/") || location.startsWith("/ar/blog/");
  const isTestimonials = location === "/testimonials" || location === "/ar/testimonials";
  const isPricing = location === "/pricing" || location === "/ar/pricing";
  const isFaq = location === "/faq" || location === "/ar/faq";
  if (isHome || isEmployers || isContact || isBlog || isTestimonials || isPricing || isFaq) return null;

  const companyLinks = [
    { label: t.footerSection.about, path: "/employers" },
    { label: t.footerSection.blog, path: "/blog" },
    { label: "FAQs", path: "/faq" },
    { label: t.footer.contact, path: "/contact" },
    { label: t.footerSection.customerStories, path: "/testimonials" },
  ];

  const demoLink = getDemoLink();

  return (
    <footer className="border-t border-border" dir={dir}>
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          <div>
            <div className="flex items-center gap-1" style={{ direction: "ltr" }} data-testid="img-footer-logo">
              <div className="h-8 sm:h-9 overflow-hidden flex-shrink-0" style={{ width: '28px' }}>
                <img
                  src="/images/plato-logo.png"
                  alt=""
                  className="h-full w-auto max-w-none"
                />
              </div>
              <span className="text-[20px] sm:text-[22px] font-bold tracking-tight text-gray-900 dark:text-white" style={{ fontFamily: "'Roc Grotesk', sans-serif" }}>Plato</span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-[260px]">
              {t.footer.tagline}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4" data-testid="text-footer-company-title">
              {t.footer.companyTitle}
            </h4>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
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

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4" data-testid="text-footer-contacts-title">
              {t.footer.contactsTitle}
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="mailto:info@plato.com" className="text-[13px] text-muted-foreground hover:text-foreground transition-colors" dir="ltr" data-testid="link-footer-email">
                  info@Plato.com
                </a>
              </li>
              <li>
                <a href="tel:+20101245567" className="text-[13px] text-muted-foreground hover:text-foreground transition-colors" dir="ltr" data-testid="link-footer-phone">
                  +20101245567
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4" data-testid="text-footer-cta-title">
              {t.footer.readyToGrow}
            </h4>
            <div className="flex flex-col gap-3">
              <a href={config.employerAppUrl} target="_blank" rel="noopener noreferrer">
                <Button className="rounded-full w-full px-6" data-testid="button-footer-start-free">
                  {t.footer.startForFree}
                </Button>
              </a>
              <a href={demoLink} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="rounded-full w-full px-6" data-testid="button-footer-request-demo">
                  {t.footer.requestDemo}
                </Button>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground/70" data-testid="text-copyright">
            {t.footer.copyright}
          </p>
          <div className="flex items-center gap-4">
            <Link href={localePath("/terms")}>
              <span className="text-xs text-muted-foreground/70 hover:text-foreground transition-colors cursor-pointer" data-testid="link-footer-terms-bottom">
                {t.footer.termsAndConditions}
              </span>
            </Link>
            <span className="text-xs text-muted-foreground/40">·</span>
            <Link href={localePath("/privacy")}>
              <span className="text-xs text-muted-foreground/70 hover:text-foreground transition-colors cursor-pointer" data-testid="link-footer-privacy-bottom">
                {t.footer.privacy}
              </span>
            </Link>
            <div className="flex items-center gap-3 ltr:ml-4 rtl:mr-4">
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground/70 hover:text-foreground transition-colors"
                aria-label="X (Twitter)"
                data-testid="link-footer-twitter"
              >
                <FaXTwitter className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://www.instagram.com/platohiring"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground/70 hover:text-foreground transition-colors"
                aria-label="Instagram"
                data-testid="link-footer-instagram"
              >
                <SiInstagram className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://www.tiktok.com/@platohiring"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground/70 hover:text-foreground transition-colors"
                aria-label="TikTok"
                data-testid="link-footer-tiktok"
              >
                <SiTiktok className="w-3.5 h-3.5" />
              </a>
              {config.linkedinUrl && (
                <a
                  href={config.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground/70 hover:text-foreground transition-colors"
                  aria-label="LinkedIn"
                  data-testid="link-footer-linkedin"
                >
                  <SiLinkedin className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
