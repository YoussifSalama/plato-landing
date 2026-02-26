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

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const route of SITE_ROUTES) {
    const arRoute = `/ar${route === "/" ? "" : route}`;

    entries.push({
      url: `${BASE_URL}${route}`,
      alternates: {
        languages: {
          en: `${BASE_URL}${route}`,
          ar: `${BASE_URL}${arRoute}`,
        },
      },
    });

    entries.push({
      url: `${BASE_URL}${arRoute}`,
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
