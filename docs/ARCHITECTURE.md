# Architecture

## Folder Structure

```
├── client/                         # Frontend React SPA
│   ├── index.html                  # HTML entry point with OG meta tags
│   └── src/
│       ├── main.tsx                # React entry point
│       ├── App.tsx                 # Router (Wouter) + providers
│       ├── index.css               # Tailwind + CSS custom properties + theme vars
│       ├── assets/                 # Images, logos, generated feature images
│       │   ├── features/           # Feature card illustrations
│       │   ├── logos/              # 15 client logos (trusted-by marquee)
│       │   └── dashboard-mockup.png
│       ├── components/
│       │   ├── layout/             # Header, Footer, Layout wrapper
│       │   ├── shared/             # ScrollReveal, SmartHashLink, Section, ScrollManager, PageTransition
│       │   ├── ui/                 # shadcn/ui components (Button, Card, Dialog, etc.)
│       │   ├── AboutAnalyticsDashboard.tsx  # Live animated analytics (donut chart, bars)
│       │   ├── DashboardMockup.tsx          # ATS dashboard mockup component
│       │   └── FeatureCardsSection.tsx      # Animated feature cards grid
│       ├── hooks/
│       │   ├── useSEO.ts           # Per-page document title + meta description
│       │   ├── useScrollAnimation.ts  # GSAP scroll-based animation hook
│       │   └── use-toast.ts        # Toast notification hook
│       ├── lib/
│       │   ├── config.ts           # All env vars with sensible defaults
│       │   ├── i18n.tsx            # I18n provider + hooks (useI18n)
│       │   ├── theme.tsx           # Light/dark theme provider + useAppTheme
│       │   ├── blog.ts             # In-memory blog posts (EN + AR)
│       │   ├── queryClient.ts      # TanStack Query client + apiRequest helper
│       │   ├── utils.ts            # cn() utility for Tailwind class merging
│       │   └── translations/
│       │       ├── en.ts           # English translations (source of truth)
│       │       └── ar.ts           # Arabic translations (typed against EN)
│       └── pages/                  # One component per page
│           ├── Home.tsx            # Hero, dashboard, features, comparison, FAQ, CTA
│           ├── Employers.tsx       # Hero, dashboard-in-action, hub, why-plato, trusted-by
│           ├── JobSeekers.tsx
│           ├── HowItWorks.tsx
│           ├── BookDemo.tsx        # Full booking system with calendar + time slots
│           ├── Blog.tsx / BlogPost.tsx
│           ├── Testimonials.tsx    # 15 real client testimonials
│           ├── Pricing.tsx, FAQ.tsx, Contact.tsx
│           ├── Security.tsx, Privacy.tsx, Terms.tsx
│           └── Login.tsx
│
├── server/                         # Express backend
│   ├── index.ts                    # Server entry (port 5000)
│   ├── routes.ts                   # API routes (/api/demo-bookings) + sitemap + robots
│   ├── storage.ts                  # IStorage interface + MemStorage (uses DB for bookings)
│   ├── db.ts                       # Drizzle PostgreSQL connection pool
│   ├── email.ts                    # SendGrid: booking confirmation + admin emails
│   ├── calendar.ts                 # Google Calendar: event creation with Meet links
│   ├── vite.ts                     # Vite dev middleware (DO NOT EDIT)
│   └── static.ts                   # Production static file serving
│
├── shared/                         # Shared between frontend + backend
│   └── schema.ts                   # Drizzle schema (users, demo_bookings) + Zod types
│
├── public/
│   ├── fonts/                      # Roc Grotesk OTF (Light, Regular, Medium, Bold, ExtraBold)
│   └── images/                     # plato-logo.png, plato-p-icon.png
│
├── docs/
│   ├── ARCHITECTURE.md             # This file
│   └── DATABASE.md                 # Supabase contact_leads schema (optional)
│
└── migrations/                     # Drizzle-generated SQL migrations
```

## i18n / RTL Strategy

Custom system (no external i18n library):

1. **Language detection**: URL path prefix. `/ar/*` = Arabic, everything else = English.
2. **I18nProvider** (`client/src/lib/i18n.tsx`): Wraps the app. Provides `lang`, `dir`, `t` (translations), `switchLang()`, `localePath()`.
3. **Translations**: TypeScript objects in `translations/en.ts` and `ar.ts`. Arabic is typed against English — TypeScript errors on missing keys.
4. **RTL**: `document.documentElement` gets `dir="rtl"` + `lang="ar"` via `useEffect` in `Layout.tsx`. CSS uses logical properties (`ps-`, `pe-`, `ms-`, `me-`).
5. **Logo**: Rendered with `style={{ direction: "ltr" }}` so brand name is never mirrored.
6. **Language switcher**: In header. Preserves current page when switching.
7. **Fonts**: Roc Grotesk (self-hosted OTF in `public/fonts/`, weights Light–ExtraBold) for Latin, Noto Sans Arabic (Google Fonts) for Arabic.

## Theme System

- Light/dark mode via `ThemeProvider` + `useAppTheme` hook in `client/src/lib/theme.tsx`
- Dark mode is default, persisted to `localStorage` under key `plato-theme`
- Toggle in Header (sun/moon icon) for desktop and mobile
- All components use semantic Tailwind tokens: `bg-background`, `text-foreground`, `bg-card`, `bg-muted`, `border-border`, `text-muted-foreground`
- Dark mode background is pure black (`0 0% 0%`)
- CSS variables for all colors defined in `client/src/index.css`

## Booking System Flow

1. User selects date (weekdays only, Sun–Thu) on `/book-demo`
2. Frontend fetches booked slots: `GET /api/demo-bookings?date=YYYY-MM-DD`
3. User picks available time slot (9 AM – 5 PM, 30-min increments)
4. User enters name + email, submits
5. Backend validates with Zod, checks date/weekend constraints
6. Booking inserted to PostgreSQL (unique constraint on date+time prevents conflicts)
7. Google Calendar event created with Meet link (Cairo timezone EET, UTC+2)
8. Confirmation email sent to booker (SendGrid) with Meet link + calendar link
9. Admin notification sent to `hello@platohiring.com`
10. Frontend shows animated success screen

## Config

All external URLs and feature toggles in `client/src/lib/config.ts`. Reads `import.meta.env.VITE_*` with defaults so the site works without configuration.

## Navigation

- Header nav: About, Pricing, Use Cases, Blogs
- `SmartHashLink` handles cross-page hash navigation (navigates home first if needed, then scrolls)
- `scroll-margin-top: 80px` on sections with IDs (offsets sticky header)
- `PageTransition` wrapper: 220ms fade-in on route changes (respects `prefers-reduced-motion`)

## SEO

- Per-page `document.title` + `<meta description>` via `useSEO` hook
- Translation keys in `t.meta.pages.*`
- Server-generated `/sitemap.xml` with hreflang EN/AR alternates
- Server-generated `/robots.txt` pointing to sitemap

## Integrations (Replit-managed)

- **SendGrid**: Credentials fetched at runtime via Replit Connectors API. No manual API keys.
- **Google Calendar**: OAuth token fetched via Replit Connectors API. Auto-refreshes.
