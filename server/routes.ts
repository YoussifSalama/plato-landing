import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertDemoBookingSchema } from "@shared/schema";
import { sendBookingConfirmation, sendBookingNotificationToAdmin } from "./email";

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
  "/book-demo",
];

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.get("/api/demo-bookings", async (req, res) => {
    const date = req.query.date as string;
    if (!date || !/^\d{4}-\d{2}-\d{2}$/.test(date)) {
      return res.status(400).json({ error: "Invalid date format. Use YYYY-MM-DD." });
    }
    const bookings = await storage.getBookingsByDate(date);
    res.json(bookings.map(b => ({ time: b.bookingTime })));
  });

  app.post("/api/demo-bookings", async (req, res) => {
    const parsed = insertDemoBookingSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ error: "Invalid booking data.", details: parsed.error.flatten() });
    }
    const bookingDate = new Date(parsed.data.bookingDate + "T00:00:00");
    const now = new Date();
    now.setHours(0, 0, 0, 0);
    if (bookingDate < now) {
      return res.status(400).json({ error: "Cannot book a date in the past." });
    }
    const dayOfWeek = bookingDate.getDay();
    if (dayOfWeek === 5 || dayOfWeek === 6) {
      return res.status(400).json({ error: "Cannot book on weekends." });
    }

    try {
      const booking = await storage.createBooking(parsed.data);

      sendBookingConfirmation({
        name: parsed.data.name,
        email: parsed.data.email,
        bookingDate: parsed.data.bookingDate,
        bookingTime: parsed.data.bookingTime,
      }).catch(() => {});

      sendBookingNotificationToAdmin({
        name: parsed.data.name,
        email: parsed.data.email,
        bookingDate: parsed.data.bookingDate,
        bookingTime: parsed.data.bookingTime,
      }).catch(() => {});

      res.status(201).json({ id: booking.id, date: booking.bookingDate, time: booking.bookingTime });
    } catch (err: any) {
      if (err.code === "23505") {
        return res.status(409).json({ error: "This time slot is already booked." });
      }
      throw err;
    }
  });

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
