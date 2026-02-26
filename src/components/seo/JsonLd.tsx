"use client";
import { useEffect } from "react";

interface JsonLdProps {
  data: Record<string, unknown>;
  id?: string;
}

export default function JsonLd({ data, id }: JsonLdProps) {
  useEffect(() => {
    const scriptId = id || "jsonld-" + JSON.stringify(data["@type"]);
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;

    if (!script) {
      script = document.createElement("script");
      script.id = scriptId;
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }

    script.textContent = JSON.stringify(data);

    return () => {
      script?.remove();
    };
  }, [data, id]);

  return null;
}

export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Plato",
    url: "https://platohiring.com",
    logo: "https://platohiring.com/images/plato-logo.png",
    description: "AI-powered HRM platform that helps companies streamline hiring, analyze CVs in seconds, and conduct intelligent interviews.",
    sameAs: [
      "https://www.linkedin.com/company/aere-capital/",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      email: "info@platohiring.com",
      telephone: "+201022330092",
      contactType: "customer service",
    },
  };

  return <JsonLd data={data} id="jsonld-organization" />;
}

export function WebSiteJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Plato",
    url: "https://platohiring.com",
    description: "AI-powered recruiting automation platform",
  };

  return <JsonLd data={data} id="jsonld-website" />;
}

export function FAQPageJsonLd({ items }: { items: { q: string; a: string }[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return <JsonLd data={data} id="jsonld-faq" />;
}

export function ArticleJsonLd({
  headline,
  datePublished,
  author,
  image,
  description,
  url,
}: {
  headline: string;
  datePublished: string;
  author: string;
  image?: string;
  description: string;
  url: string;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    datePublished,
    author: { "@type": "Person", name: author },
    image: image || "https://platohiring.com/images/og-default.png",
    description,
    url,
    publisher: {
      "@type": "Organization",
      name: "Plato",
      logo: {
        "@type": "ImageObject",
        url: "https://platohiring.com/images/plato-logo.png",
      },
    },
  };

  return <JsonLd data={data} id="jsonld-article" />;
}
