import { useEffect } from "react";
import { useI18n } from "@/lib/i18n";

interface SEOProps {
  title?: string;
  description?: string;
}

export function useSEO({ title, description }: SEOProps = {}) {
  const { t } = useI18n();

  useEffect(() => {
    const siteName = t.meta.siteName;
    const pageTitle = title ? `${title} | ${siteName}` : `${siteName} — ${t.meta.siteTagline}`;
    document.title = pageTitle;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && description) {
      metaDesc.setAttribute("content", description);
    } else if (description) {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = description;
      document.head.appendChild(meta);
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute("content", pageTitle);
    }
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc && description) {
      ogDesc.setAttribute("content", description);
    }
  }, [title, description, t]);
}
