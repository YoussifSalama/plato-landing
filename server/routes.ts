import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

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
];

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.get("/robots.txt", (_req, res) => {
    res.type("text/plain").send(
      `User-agent: *\nAllow: /\n\nSitemap: ${getBaseUrl(_req)}/sitemap.xml`
    );
  });

  app.get("/sitemap.xml", (req, res) => {
    const base = getBaseUrl(req);
    const urls: string[] = [];

    for (const route of SITE_ROUTES) {
      urls.push(sitemapEntry(base, route));
      urls.push(sitemapEntry(base, `/ar${route === "/" ? "" : route}`));
    }

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join("\n")}
</urlset>`;

    res.type("application/xml").send(xml);
  });

  return httpServer;
}

function getBaseUrl(req: any): string {
  const proto = req.headers["x-forwarded-proto"] || req.protocol || "https";
  const host = req.headers["x-forwarded-host"] || req.headers.host || "localhost:5000";
  return `${proto}://${host}`;
}

function sitemapEntry(base: string, path: string): string {
  const loc = `${base}${path}`;
  const altLang = path.startsWith("/ar") ? "ar" : "en";
  const altPath = altLang === "ar"
    ? path.replace(/^\/ar/, "") || "/"
    : `/ar${path === "/" ? "" : path}`;
  const altLoc = `${base}${altPath}`;
  const otherLang = altLang === "ar" ? "en" : "ar";

  return `  <url>
    <loc>${loc}</loc>
    <xhtml:link rel="alternate" hreflang="${altLang}" href="${loc}" />
    <xhtml:link rel="alternate" hreflang="${otherLang}" href="${altLoc}" />
  </url>`;
}
