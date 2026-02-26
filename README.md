# Plato Marketing Website

Bilingual (English/Arabic) marketing site for **Plato**, an AI-powered recruiting automation platform. Converts employers to subscribe or book a demo, and directs job seekers to sign up.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 18 + TypeScript, Vite |
| Routing | Wouter |
| Styling | TailwindCSS + shadcn/ui (Radix UI) |
| State | TanStack React Query v5 |
| Backend | Express 5 (Node.js) |
| Database | PostgreSQL via Drizzle ORM |
| Email | SendGrid (Replit integration) |
| Calendar | Google Calendar API (Replit integration) |
| Font | Roc Grotesk (self-hosted OTF, `public/fonts/`) + Noto Sans Arabic (Google Fonts) |

---

## Quick Start

```bash
npm install
npm run dev        # → http://localhost:5000
```

---

## Project Structure

```
client/
├── index.html                        # HTML entry with OG, Twitter Card, canonical meta
├── src/
│   ├── main.tsx                      # React entry
│   ├── App.tsx                       # Router + providers
│   ├── index.css                     # Tailwind + CSS variables + theme
│   ├── assets/                       # Images, logos, fonts references
│   │   ├── features/                 # Generated feature card images
│   │   ├── logos/                    # 15 client logos (trusted-by section)
│   │   └── blog/                    # Blog post images
│   ├── components/
│   │   ├── layout/                   # Header, Footer, Layout wrapper
│   │   │   ├── Header.tsx            # Sticky header, nav, language switcher, theme toggle
│   │   │   ├── Footer.tsx            # Shared footer (used on all pages except Home)
│   │   │   └── Layout.tsx            # ThemeProvider + I18n wrapper
│   │   ├── shared/                   # Reusable components
│   │   │   ├── ScrollReveal.tsx      # GSAP ScrollTrigger animation wrapper
│   │   │   ├── SmartHashLink.tsx     # Cross-page hash navigation
│   │   │   ├── Section.tsx           # Standard section wrapper
│   │   │   ├── ScrollManager.tsx     # Scroll position management
│   │   │   └── PageTransition.tsx    # 220ms fade-in on route changes
│   │   ├── seo/                      # SEO components
│   │   │   └── JsonLd.tsx            # JSON-LD structured data (Organization, FAQPage, Article)
│   │   ├── feature-mockups/          # Live animated product mockups
│   │   │   ├── SmartJobMockup.tsx    # Smart job posting mockup
│   │   │   └── ComparisonBar.tsx     # Before/after comparison animation
│   │   ├── ui/                       # shadcn/ui primitives (Button, Card, etc.)
│   │   ├── AboutAnalyticsDashboard.tsx  # Live animated analytics dashboard
│   │   ├── DashboardMockup.tsx       # ATS dashboard mockup
│   │   └── FeatureCardsSection.tsx   # Animated feature cards
│   ├── hooks/
│   │   ├── useSEO.ts                 # Per-page title, meta, OG, Twitter Cards, canonical
│   │   ├── useScrollAnimation.ts     # Scroll-based animation hook
│   │   └── use-toast.ts              # Toast notifications
│   ├── lib/
│   │   ├── config.ts                 # All env vars with defaults + external URL helpers
│   │   ├── i18n.tsx                  # I18n provider + hooks (useI18n)
│   │   ├── theme.tsx                 # Light/dark theme provider
│   │   ├── blog.ts                   # In-memory blog posts (EN + AR)
│   │   ├── queryClient.ts            # TanStack Query client + apiRequest helper
│   │   ├── utils.ts                  # cn() utility
│   │   └── translations/
│   │       ├── en.ts                 # English translations
│   │       └── ar.ts                 # Arabic translations (typed against EN)
│   └── pages/                        # One file per page (see Route Map below)
│
server/
├── index.ts          # Server entry point (port 5000)
├── routes.ts         # API routes + sitemap + robots.txt
├── storage.ts        # Storage interface (IStorage) + MemStorage impl
├── db.ts             # Drizzle PostgreSQL connection
├── email.ts          # SendGrid: booking confirmation + admin notification
├── calendar.ts       # Google Calendar: event creation with Meet links
├── vite.ts           # Vite dev middleware (DO NOT EDIT)
└── static.ts         # Production static file serving
│
shared/
└── schema.ts         # Drizzle schema + Zod validation (users, demo_bookings)
│
public/
├── fonts/            # Roc Grotesk OTF files (Light, Regular, Medium, Bold, ExtraBold)
└── images/           # plato-logo.png, plato-p-icon.png, og-default.png
│
docs/
├── ARCHITECTURE.md   # Detailed architecture notes
└── DATABASE.md       # Database systems overview (PostgreSQL + Supabase)
```

---

## Route Map

Every route exists in both English and Arabic (`/ar` prefix). Language is auto-detected from the URL.

| English | Arabic | Page |
|---------|--------|------|
| `/` | `/ar` | Home |
| `/employers` | `/ar/employers` | For Employers |
| `/job-seekers` | `/ar/job-seekers` | For Job Seekers |
| `/how-it-works` | `/ar/how-it-works` | How It Works |
| `/blog` | `/ar/blog` | Blog Index |
| `/blog/:slug` | `/ar/blog/:slug` | Blog Post |
| `/book-demo` | `/ar/book-demo` | Book a Demo |
| `/testimonials` | `/ar/testimonials` | Customer Stories |
| `/pricing` | `/ar/pricing` | Pricing |
| `/faq` | `/ar/faq` | FAQ |
| `/contact` | `/ar/contact` | Contact |
| `/security` | `/ar/security` | Security |
| `/privacy` | `/ar/privacy` | Privacy Policy |
| `/terms` | `/ar/terms` | Terms of Service |
| `/login` | `/ar/login` | Login Portal |
| `/signup` | `/ar/signup` | Signup Portal |

Server-only routes: `/robots.txt`, `/sitemap.xml` (with hreflang alternates)

---

## External URLs

| Purpose | URL |
|---------|-----|
| Employer Login | `https://agency.platohiring.com/auth/login` |
| Employer Signup | `https://agency.platohiring.com/auth/signup` |
| Job Seeker Login | `https://candidate.platohiring.com/auth/login` |
| Job Seeker Signup | `https://candidate.platohiring.com/auth/signup` |
| LinkedIn | `https://www.linkedin.com/company/aere-capital/` |
| Contact Email | `info@platohiring.com` |
| Contact Phone | `+201022330092` |

All "Start Free Trial" buttons navigate internally to `/signup`. All "Request Demo" / "Book a Demo" buttons navigate internally to `/book-demo`. External app URLs (login/signup portals) open in new tabs.

---

## API Endpoints

| Method | Path | Description |
|--------|------|-------------|
| `GET` | `/api/demo-bookings?date=YYYY-MM-DD` | Get booked time slots for a date |
| `POST` | `/api/demo-bookings` | Create a booking (triggers email + calendar event) |

### POST `/api/demo-bookings` body:
```json
{
  "name": "Jane Doe",
  "email": "jane@company.com",
  "bookingDate": "2025-03-15",
  "bookingTime": "10:00 AM"
}
```

**What happens on booking:**
1. Slot saved to PostgreSQL (unique constraint prevents double-booking)
2. Google Calendar event created with Google Meet link (Cairo timezone, EET UTC+2)
3. Confirmation email sent to booker via SendGrid (includes Meet link + calendar link)
4. Admin notification email sent to `info@platohiring.com`

---

## Key Features

### Bilingual / RTL
- URL-based language detection (`/ar/*` = Arabic, else English)
- Custom i18n system — no external library. Translations in `client/src/lib/translations/`
- Arabic pages get `dir="rtl"` on `<html>`. CSS uses logical properties (`ps-`, `pe-`, `ms-`, `me-`)

### Theme (Light / Dark)
- Dark mode is default, persisted to `localStorage` under `plato-theme`
- Toggle in header (sun/moon icon)
- All components use semantic Tailwind tokens (`bg-background`, `text-foreground`, etc.)
- Theme transition uses double `requestAnimationFrame` pattern for smooth switching

### Book a Demo System
- Calendar UI: date picker (weekdays only, Sun–Thu), time slot grid (9 AM – 5 PM)
- Already-booked slots shown as disabled
- On submit: creates DB record + Google Calendar event + sends emails
- Success screen with staggered fade-in animation

### Animated Components
- Key visuals (dashboards, analytics panels) are live animated React components instead of static screenshots
- `ScrollReveal` wrapper uses GSAP ScrollTrigger for scroll-based animations
- `PageTransition` adds 220ms fade-in between routes (respects `prefers-reduced-motion`)
- Accordion animations use CSS `grid-template-rows` transition (0fr → 1fr)

### SEO

Comprehensive SEO implementation:

- **Per-page meta**: `useSEO` hook sets `document.title`, `<meta description>`, OG tags, Twitter Cards, and `<link rel="canonical">` on every page
- **Open Graph**: `og:title`, `og:description`, `og:image` (branded 1200×630 default at `/images/og-default.png`), `og:url`, `og:type`, `og:site_name`
- **Twitter Cards**: `summary_large_image` card type with title, description, and image
- **Canonical URLs**: Self-referencing for English pages; Arabic pages canonicalize to their English equivalent
- **JSON-LD structured data**:
  - `Organization` schema on Home page (name, logo, contact, social links)
  - `WebSite` schema on Home page
  - `FAQPage` schema on Home and FAQ pages
  - `Article` schema on individual blog posts
- **Sitemap**: Server-generated `/sitemap.xml` with hreflang EN/AR alternates for all routes
- **Robots**: Server-generated `/robots.txt` pointing to sitemap
- **Accessibility**: All FAQ accordion buttons have `aria-expanded` attribute; all logo images have descriptive `alt` text
- **404 page**: Has proper `useSEO` hook with title and description

#### Adding SEO to a New Page

```tsx
import { useSEO } from "@/hooks/useSEO";

export default function NewPage() {
  useSEO({
    title: "Page Title",        // appended with " | Plato"
    description: "Page description for search engines.",
    image: "/images/custom.png", // optional, defaults to og-default.png
  });
  // ...
}
```

For JSON-LD, import from `@/components/seo/JsonLd`:
```tsx
import { FAQPageJsonLd, ArticleJsonLd } from "@/components/seo/JsonLd";
```

---

## Environment Variables

All optional with sensible defaults. Set in Replit Secrets or `.env`:

| Variable | Default | Description |
|----------|---------|-------------|
| `DATABASE_URL` | (required) | PostgreSQL connection string |
| `SESSION_SECRET` | (required) | Express session secret |
| `VITE_EMPLOYER_APP_URL` | `https://platohiring.com` | Employer portal URL |
| `VITE_APPLICANT_APP_URL` | `https://applicant.platohiring.com` | Job seeker portal URL |
| `VITE_DEMO_EMAIL_FALLBACK` | `hello@platohiring.com` | Fallback email for demo |
| `VITE_LINKEDIN_URL` | (empty) | LinkedIn company page |
| `VITE_SUPABASE_URL` | (empty) | Supabase project URL (contact form) |
| `VITE_SUPABASE_ANON_KEY` | (empty) | Supabase anon key |

**Integrations** (managed by Replit — no manual keys needed):
- **SendGrid**: Email delivery for booking confirmations
- **Google Calendar**: Event creation with Meet video links

---

## Database Schema

Two tables in PostgreSQL via Drizzle ORM (defined in `shared/schema.ts`):

```
users
├── id          varchar  PK (UUID auto-generated)
├── username    text     UNIQUE NOT NULL
└── password    text     NOT NULL

demo_bookings
├── id            varchar    PK (UUID auto-generated)
├── booking_date  date       NOT NULL
├── booking_time  text       NOT NULL
├── created_at    timestamp  DEFAULT now()
└── UNIQUE(booking_date, booking_time)
```

Push schema changes: `npm run db:push`

Additionally, a Supabase `contact_leads` table can be used for the contact form (see `docs/DATABASE.md`).

---

## Building for Production

```bash
npm run build     # Vite builds client → dist/public/, esbuild bundles server → dist/index.cjs
npm start         # Runs dist/index.cjs
```

---

## Adding Content

### Blog Posts
Edit `client/src/lib/blog.ts`. Add to `enPosts` (English) or `arPosts` (Arabic) arrays:
```ts
{ slug: "unique-slug", title: "...", date: "2025-01-15", summary: "...", author: "...", tags: ["hiring"], content: "Markdown content..." }
```

### Translations
Edit `client/src/lib/translations/en.ts` or `ar.ts`. Arabic file is typed against English to ensure completeness — TypeScript will error on missing keys.

---

## Design Notes

- **Font**: Roc Grotesk (self-hosted OTF in `public/fonts/`, weights Light–ExtraBold)
- **Gradient palette**: `#0966A8` → `#1EA0E2` (light), `#0B5E96` → `#1A8FCC` (dark)
- **Buttons**: All interactive elements use shadcn `<Button>` with default behavior
- **Logo**: `public/images/plato-logo.png` (transparent bg), inverted in dark mode
- **Icons**: Lucide React for UI icons, `react-icons/si` for brand logos (LinkedIn, Instagram, TikTok)
- **Social**: LinkedIn (`linkedin.com/company/aere-capital/`) — no X/Twitter
