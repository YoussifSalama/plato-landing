# Plato Marketing Website

## Overview

Plato is a bilingual (English/Arabic) marketing website for a recruiting/hiring automation product. The site's primary goal is converting employers to subscribe or book a demo, with a secondary goal of directing job seekers to sign up and upload resumes. The product automates resume screening, candidate outreach, interviews, and structured reporting.

The application is a full-stack TypeScript project with a React SPA frontend served by an Express backend. It supports English (default at `/`) and Arabic (at `/ar` with full RTL layout).

## User Preferences

Preferred communication style: Simple, everyday language.

### LOCKED Layouts — Do NOT Modify
- **Employers page "Unified Talent Intelligence Hub" section** (lines ~186–234 in `client/src/pages/Employers.tsx`): Blue gradient panel (rounded-3xl, px-10 py-12, min-h-[520px]) as full-width base container. Text on left 40%. Dashboard absolutely positioned on right (w-[62%], right-[-32px], top-[20px], bottom-[-40px]) with scale(0.78), transformOrigin "top left", width/height 128.2%, creating layered overlay effect with blue panel peeking above dashboard and dashboard extending beyond bottom. No overflow-hidden on outer container. Dashboard wrapper uses `bg-white dark:bg-[#0d1117]` with `border border-gray-200 dark:border-transparent` (theme-aware, no forced dark class). Mobile: stacked vertically. This layout is finalized and must not be changed when editing other parts of the page.

## System Architecture

### Frontend (React SPA)
- **Framework**: React 18 with TypeScript, bundled by Vite
- **Routing**: Wouter (lightweight client-side router) — NOT React Router
- **Styling**: TailwindCSS with CSS custom properties for theming (light/dark mode support)
- **UI Components**: shadcn/ui (new-york style) built on Radix UI primitives. Components in `client/src/components/ui/`
- **State Management**: TanStack React Query v5 for server state; React context for i18n
- **Path aliases**: `@/` maps to `client/src/`, `@shared/` maps to `shared/`
- **Animations**: GSAP + ScrollTrigger for scroll-based animations, tailwindcss-animate for transitions

### Internationalization (i18n)
- Custom context-based i18n system in `client/src/lib/i18n.tsx`
- Language detected from URL path prefix (`/ar` = Arabic, everything else = English)
- Translation files in `client/src/lib/translations/en.ts` and `ar.ts`
- Arabic pages use `dir="rtl"` on the document root
- Fonts: Roc Grotesk (self-hosted OTF from `public/fonts/`, weights Light–ExtraBold) + Noto Sans Arabic (Google Fonts)

### Page Structure
All pages exist in both English and Arabic variants:
- Home (`/`, `/ar`)
- For Employers (`/employers`, `/ar/employers`)
- For Job Seekers (`/job-seekers`, `/ar/job-seekers`)
- How It Works (`/how-it-works`, `/ar/how-it-works`)
- Blog with individual posts (`/blog`, `/blog/:slug`)
- Book a Demo (`/book-demo`, `/ar/book-demo`) — functional booking system with calendar, time slots, Google Calendar + SendGrid
- Testimonials (`/testimonials`, `/ar/testimonials`) — 15 real client testimonials
- FAQ, Contact, Security, Privacy, Terms, Pricing
- Login (`/login`, `/ar/login`) — portal linking to external apps (agency.platohiring.com, candidate.platohiring.com)
- Signup (`/signup`, `/ar/signup`) — portal linking to external signup apps

### Backend (Express)
- **Runtime**: Node.js with Express 5
- **Dev server**: Vite dev middleware served through Express (see `server/vite.ts`)
- **Production**: Static files served from `dist/public` (see `server/static.ts`), with SPA fallback to `index.html`
- **API routes**: Registered in `server/routes.ts`, prefixed with `/api`
- **Email**: SendGrid integration via Replit Connectors (`server/email.ts`)
- **Calendar**: Google Calendar integration via Replit Connectors (`server/calendar.ts`)
- **Storage**: `MemStorage` class in `server/storage.ts` — uses in-memory for users, PostgreSQL for bookings

### Database
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Schema**: Defined in `shared/schema.ts` — `users` and `demo_bookings` tables
- **Migrations**: Generated to `./migrations` directory via `drizzle-kit`
- **Schema push**: Use `npm run db:push` to push schema changes
- **Validation**: Drizzle-zod for generating Zod schemas from database tables
- **Supabase**: Optional — `contact_leads` table for contact form submissions (see `docs/DATABASE.md`)

### Build System
- **Dev**: `tsx server/index.ts` runs the Express server with Vite HMR
- **Build**: Custom build script (`script/build.ts`) — Vite builds the client, esbuild bundles the server
- **Production**: `node dist/index.cjs` serves the built application

### Configuration (Environment Variables)
Configurable via Vite env vars (prefixed with `VITE_`):
- `VITE_EMPLOYER_APP_URL` — Employer portal URL (default: `https://platohiring.com`)
- `VITE_APPLICANT_APP_URL` — Job seeker portal URL (default: `https://applicant.platohiring.com`)
- `VITE_DEMO_EMAIL_FALLBACK` — Fallback email (default: `hello@platohiring.com`)
- `VITE_LINKEDIN_URL` — LinkedIn company page URL (shown in footer when set)
- `VITE_SUPABASE_URL` — Supabase URL for contact form submissions
- `VITE_SUPABASE_ANON_KEY` — Supabase anonymous key
- `DATABASE_URL` — PostgreSQL connection string for Drizzle

### External URLs & Config
- `config.ts` provides helper functions: `getLoginLink(type)`, `getSignupLink(type)`, `getDemoLink(lang)`
- Employer app: `https://agency.platohiring.com/auth/{login|signup}`
- Job Seeker app: `https://candidate.platohiring.com/auth/{login|signup}`
- All "Start Free Trial" buttons → internal navigation to `/signup`
- All "Request Demo" / "Book a Demo" buttons → internal navigation to `/book-demo`
- Contact email: `info@platohiring.com`, phone: `+201022330092`
- Social: LinkedIn only (`linkedin.com/company/aere-capital/`) — no X/Twitter

### SEO
- **useSEO hook** (`client/src/hooks/useSEO.ts`): Sets per-page `document.title`, `<meta description>`, Open Graph tags (`og:title`, `og:description`, `og:image`, `og:url`, `og:type`, `og:site_name`), Twitter Card tags (`summary_large_image`), and `<link rel="canonical">`
- **Canonical strategy**: EN pages self-reference; AR pages canonicalize to their EN equivalent
- **Default OG image**: Branded 1200×630 image at `public/images/og-default.png`
- **JSON-LD structured data** (`client/src/components/seo/JsonLd.tsx`): Organization + WebSite on Home, FAQPage on Home + FAQ, Article on BlogPost
- **Sitemap**: Server-generated `/sitemap.xml` with hreflang EN/AR alternates for all routes (including `/signup`, `/testimonials`)
- **Robots**: Server-generated `/robots.txt` pointing to sitemap
- **Accessibility**: FAQ accordion buttons have `aria-expanded`; all logo images have `alt="Plato"`
- Translation keys for page meta in `t.meta.pages.*`

### Theme System
- Light/dark mode support via `client/src/lib/theme.tsx` (ThemeProvider + useAppTheme hook)
- Dark mode is the default, persisted to localStorage under "plato-theme"
- Theme toggle (sun/moon icon) in the Header for both desktop and mobile
- Theme transition uses double `requestAnimationFrame` pattern for smooth switching
- All components use semantic Tailwind tokens (bg-background, text-foreground, bg-card, bg-muted, border-border, text-muted-foreground) that auto-adapt to light/dark
- Dark mode background is pure black (0 0% 0%)
- Dashboard components (`AboutAnalyticsDashboard`) are fully theme-aware — white/gray-50 backgrounds in light mode, dark navy in dark mode. All text, borders, chart elements, and tooltips use `dark:` variants

### Navigation & Transitions
- Header nav: About, Pricing, Use Cases, Blogs
- `SmartHashLink` component handles cross-page hash navigation (navigates to home first if needed, then scrolls)
- Blog, FAQ, Contact remain real routes (`/blog`, `/faq`, `/contact`)
- `PageTransition` wrapper adds a subtle 220ms fade-in on route changes (respects `prefers-reduced-motion`)
- `scroll-margin-top: 80px` applied to sections with IDs to offset sticky header

### Design System
- Gradient blue palette matching the Plato logo: from `#0966A8` to `#1EA0E2` (light), `#0B5E96` to `#1A8FCC` (dark)
- CSS custom properties `--primary-gradient-from` and `--primary-gradient-to` for gradient colors
- Buttons: ALL interactive elements use shadcn `<Button>` with default behavior — no custom hover classes
- Logo: `public/images/plato-logo.png` (transparent background) used in Header and Footer; inverted in dark mode
- Typography: Headings use `font-semibold tracking-tight leading-[1.1]` or `font-bold` throughout
- Font: Roc Grotesk (self-hosted OTF in `public/fonts/`, weights Light–ExtraBold, weight 600/semibold mapped to Bold OTF). Form controls inherit font via `font-family: inherit` in base layer
- Header: h-14, backdrop-blur-xl, text-[13px] nav items, max-w-6xl container, rounded-full "Book a Demo" button
- Homepage has an integrated multi-column footer; other pages use shared Footer component
- Footer: max-w-6xl, text-[13px] links, text-xs copyright
- CSS variables for all colors defined in `client/src/index.css`
- Components use shadcn/ui conventions with `cn()` utility for class merging
- Layout: `Layout.tsx` wraps all pages with ThemeProvider, sticky Header and Footer
- Key visuals (dashboards, analytics panels) are live animated React components instead of static screenshots

### Animation Patterns
- **Accordion**: CSS `grid-template-rows` transition (0fr → 1fr) with `overflow-hidden`; Plus icon rotates 45°
- **ScrollReveal**: GSAP + ScrollTrigger wrapper for scroll-based fade-in animations
- **PageTransition**: 220ms opacity fade-in on route changes (respects `prefers-reduced-motion`)

## External Dependencies

- **PostgreSQL**: Database (via Drizzle ORM), required for `DATABASE_URL`
- **SendGrid**: Email delivery for booking confirmations (Replit integration — no manual keys)
- **Google Calendar**: Event creation with Meet links (Replit integration — no manual keys)
- **Supabase**: Optional — contact form lead submissions via REST API
- **Google Fonts**: Noto Sans Arabic loaded externally
- **Radix UI**: Accessible UI primitives (dialog, accordion, dropdown, tabs, etc.)
- **TanStack React Query v5**: Server state management
- **GSAP + ScrollTrigger**: Scroll-based animations
- **Lucide React + React Icons**: Icon libraries

## Documentation
- `README.md` — Project overview, quick start, route map, API endpoints, env vars, SEO guide, content guide
- `docs/ARCHITECTURE.md` — Folder structure, i18n/RTL strategy, theme system, booking flow, SEO details, integrations
- `docs/DATABASE.md` — Database systems overview (PostgreSQL primary + Supabase optional)
