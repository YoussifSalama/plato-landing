import { useEffect } from "react";
import { useI18n } from "@/lib/i18n";
import { usePathname } from "next/navigation";

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
}

const DEFAULT_OG_IMAGE = "/images/og-default.png";
const SITE_URL = "https://platohiring.com";

function setMetaTag(attr: string, key: string, content: string) {
  let el = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
  if (el) {
    el.setAttribute("content", content);
  } else {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    el.content = content;
    document.head.appendChild(el);
  }
}

function setLinkTag(rel: string, href: string) {
  let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
  if (el) {
    el.href = href;
  } else {
    el = document.createElement("link");
    el.rel = rel;
    el.href = href;
    document.head.appendChild(el);
  }
}

export function useSEO({ title, description, image }: SEOProps = {}) {
  const { t, lang } = useI18n();
  const pathname = usePathname();

  useEffect(() => {
    const siteName = t.meta.siteName;
    const pageTitle = title ? `${title} | ${siteName}` : `${siteName} — ${t.meta.siteTagline}`;
    document.title = pageTitle;

    const desc = description || t.meta.siteDescription;
    const ogImage = image || DEFAULT_OG_IMAGE;
    const pagePath = pathname.replace(/^\/en/, "") || "/";
    const canonicalUrl = `${SITE_URL}${pagePath}`;
    const pageUrl = `${SITE_URL}${pagePath}`;

    setMetaTag("name", "description", desc);

    setMetaTag("property", "og:title", pageTitle);
    setMetaTag("property", "og:description", desc);
    setMetaTag("property", "og:image", ogImage.startsWith("http") ? ogImage : `${SITE_URL}${ogImage}`);
    setMetaTag("property", "og:url", pageUrl);
    setMetaTag("property", "og:type", "website");
    setMetaTag("property", "og:site_name", siteName);

    setMetaTag("name", "twitter:card", "summary_large_image");
    setMetaTag("name", "twitter:title", pageTitle);
    setMetaTag("name", "twitter:description", desc);
    setMetaTag("name", "twitter:image", ogImage.startsWith("http") ? ogImage : `${SITE_URL}${ogImage}`);

    setLinkTag("canonical", canonicalUrl);
  }, [title, description, image, t, lang, pathname]);
}
