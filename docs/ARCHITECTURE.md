# Architecture

## Folder Structure

```
├── client/                     # Frontend React SPA
│   ├── index.html              # HTML entry point with OG meta tags
│   └── src/
│       ├── main.tsx            # React entry point
│       ├── App.tsx             # Router + providers
│       ├── index.css           # Tailwind + CSS custom properties
│       ├── components/
│       │   ├── layout/         # Header, Footer, Layout wrapper
│       │   ├── shared/         # Reusable Section component
│       │   └── ui/             # shadcn/ui components (Button, Card, etc.)
│       ├── hooks/
│       │   └── useSEO.ts       # Per-page document title + meta description
│       ├── lib/
│       │   ├── config.ts       # Environment variable config (single source of truth)
│       │   ├── i18n.tsx        # Internationalization provider + hooks
│       │   ├── blog.ts         # In-memory blog post system
│       │   ├── queryClient.ts  # TanStack React Query client
│       │   ├── utils.ts        # Utility functions (cn, etc.)
│       │   └── translations/
│       │       ├── en.ts       # English translations
│       │       └── ar.ts       # Arabic translations
│       └── pages/              # All page components
├── server/                     # Express backend
│   ├── index.ts                # Server entry point
│   ├── routes.ts               # API routes + sitemap/robots
│   ├── storage.ts              # Storage interface
│   ├── vite.ts                 # Vite dev middleware
│   └── static.ts               # Production static file serving
├── shared/                     # Shared types (frontend + backend)
│   └── schema.ts               # Drizzle schema + Zod types
├── docs/                       # Developer documentation
│   ├── ARCHITECTURE.md         # This file
│   └── DATABASE.md             # Supabase schema + RLS
├── .env.example                # Example environment variables
└── replit.md                   # Replit-specific project notes
```

## i18n / RTL Strategy

The internationalization system is fully custom (no external i18n library):

1. **Language detection**: Based on URL path prefix. `/ar/*` = Arabic, everything else = English.
2. **I18nProvider** (`client/src/lib/i18n.tsx`): Wraps the entire app. Provides `lang`, `dir`, `t` (translations), `switchLang()`, and `localePath()` via React context.
3. **Translations**: Stored as plain TypeScript objects in `client/src/lib/translations/en.ts` and `ar.ts`. Arabic file is typed against the English file to ensure completeness.
4. **RTL support**: `document.documentElement` gets `dir="rtl"` and `lang="ar"` set via `useEffect` in `Layout.tsx`. CSS uses logical properties (`ps-`, `pe-`, `ms-`, `me-`) where directional spacing is needed.
5. **Logo**: Always rendered with `style={{ direction: "ltr" }}` so the brand name is never mirrored.
6. **Language switcher**: In the header. Preserves the current page when switching (e.g. `/employers` ↔ `/ar/employers`).
7. **Fonts**: Inter for Latin text, Noto Sans Arabic for Arabic text, both loaded from Google Fonts.

## Where Config Lives

All external URLs and feature toggles are in `client/src/lib/config.ts`. This file reads `import.meta.env.VITE_*` variables with sensible defaults so the site works out of the box without any configuration.

Key config values:
- `employerAppUrl` — Where "Hire Talent" buttons link
- `applicantAppUrl` — Where "Find Jobs" / "Upload Resume" buttons link
- `demoBookingUrl` — If set, "Book a Demo" opens this URL; if empty, falls back to mailto
- `demoEmailFallback` — Fallback email for demo requests
- `linkedinUrl` — LinkedIn company page (shown in footer when set)
- `supabaseUrl` / `supabaseAnonKey` — Enables contact form submission when set

## Routing

All routes are defined in `client/src/App.tsx` using wouter. Each route exists in both English and Arabic:

| English | Arabic | Page Component |
|---------|--------|----------------|
| `/` | `/ar` | Home |
| `/employers` | `/ar/employers` | Employers |
| `/job-seekers` | `/ar/job-seekers` | JobSeekers |
| `/how-it-works` | `/ar/how-it-works` | HowItWorks |
| `/blog` | `/ar/blog` | Blog |
| `/blog/:slug` | `/ar/blog/:slug` | BlogPost |
| `/faq` | `/ar/faq` | FAQ |
| `/contact` | `/ar/contact` | Contact |
| `/security` | `/ar/security` | Security |
| `/privacy` | `/ar/privacy` | Privacy |
| `/terms` | `/ar/terms` | Terms |
| `/pricing` | `/ar/pricing` | Pricing |
| `/login` | `/ar/login` | Login |

## SEO

Each page sets its own `document.title` and `<meta name="description">` via the `useSEO` hook. Translations for page titles and descriptions live in `t.meta.pages.*`.

The server generates `/sitemap.xml` with hreflang alternate links for EN/AR, and `/robots.txt` pointing to the sitemap.
