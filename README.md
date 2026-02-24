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
├── index.html                        # HTML entry with OG meta
├── src/
│   ├── main.tsx                      # React entry
│   ├── App.tsx                       # Router + providers
│   ├── index.css                     # Tailwind + CSS variables + theme
│   ├── assets/                       # Images, logos, fonts references
│   │   ├── features/                 # Generated feature card images
│   │   ├── logos/                    # 15 client logos (trusted-by section)
│   │   └── dashboard-mockup.png
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
│   │   ├── ui/                       # shadcn/ui primitives (Button, Card, etc.)
│   │   ├── AboutAnalyticsDashboard.tsx  # Live animated analytics dashboard
│   │   ├── DashboardMockup.tsx       # ATS dashboard mockup
│   │   └── FeatureCardsSection.tsx   # Animated feature cards
│   ├── hooks/
│   │   ├── useSEO.ts                 # Per-page title + meta description
│   │   ├── useScrollAnimation.ts     # Scroll-based animation hook
│   │   └── use-toast.ts              # Toast notifications
│   ├── lib/
│   │   ├── config.ts                 # All env vars with defaults (single source of truth)
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
└── images/           # plato-logo.png, plato-p-icon.png
│
docs/
├── ARCHITECTURE.md   # Detailed architecture notes
└── DATABASE.md       # Supabase contact_leads schema + RLS
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

Server-only routes: `/robots.txt`, `/sitemap.xml` (with hreflang alternates)

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
4. Admin notification email sent to `hello@platohiring.com`

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

### Book a Demo System
- Calendar UI: date picker (weekdays only, Sun–Thu), time slot grid (9 AM – 5 PM)
- Already-booked slots shown as disabled
- On submit: creates DB record + Google Calendar event + sends emails
- Success screen with staggered fade-in animation

### Animated Components
- Key visuals (dashboards, analytics panels) are live animated React components instead of static screenshots
- `ScrollReveal` wrapper uses GSAP ScrollTrigger for scroll-based animations
- `PageTransition` adds 220ms fade-in between routes (respects `prefers-reduced-motion`)

### SEO
- Per-page `document.title` + `<meta description>` via `useSEO` hook
- Server-generated `/sitemap.xml` with hreflang EN/AR alternates
- Server-generated `/robots.txt`

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
- **Icons**: Lucide React for UI icons, `react-icons/si` for brand logos
