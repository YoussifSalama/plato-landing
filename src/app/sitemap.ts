import { MetadataRoute } from "next";

const SITE_ROUTES = [
  "/",
  "/employers",
  "/job-seekers",
  "/how-it-works",
  "/blog",
  "/faq",
  "/contact",
  "/security",
  "/privacy",
  "/terms",
  "/pricing",
  "/login",
  "/signup",
  "/book-demo",
  "/testimonials",
];

const BASE_URL = "https://platohiring.com";
const NOW = new Date();

function routePriority(route: string): number {
  if (route === "/") {
    return 1.0;
  }
  if (route === "/pricing" || route === "/book-demo" || route === "/contact") {
    return 0.9;
  }
  if (route === "/blog") {
    return 0.8;
  }
  return 0.7;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const route of SITE_ROUTES) {
    const arRoute = `/ar${route === "/" ? "" : route}`;

    entries.push({
      url: `${BASE_URL}${route}`,
      lastModified: NOW,
      changeFrequency: route === "/" ? "weekly" : "monthly",
      priority: routePriority(route),
      alternates: {
        languages: {
          en: `${BASE_URL}${route}`,
          ar: `${BASE_URL}${arRoute}`,
        },
      },
    });

    entries.push({
      url: `${BASE_URL}${arRoute}`,
      lastModified: NOW,
      changeFrequency: route === "/" ? "weekly" : "monthly",
      priority: routePriority(route),
      alternates: {
        languages: {
          en: `${BASE_URL}${route}`,
          ar: `${BASE_URL}${arRoute}`,
        },
      },
    });
  }

  return entries;
}
