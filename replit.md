# Plato Marketing Website

## Overview

Plato is a bilingual (English/Arabic) marketing website for a recruiting/hiring automation product. The site's primary goal is converting employers to subscribe or book a demo, with a secondary goal of directing job seekers to sign up and upload resumes. The product automates resume screening, candidate outreach, interviews, and structured reporting.

The application is a full-stack TypeScript project with a React SPA frontend served by an Express backend. It supports English (default at `/`) and Arabic (at `/ar` with full RTL layout).

## User Preferences

Preferred communication style: Simple, everyday language.

### LOCKED Layouts — Do NOT Modify
- **Employers page "Unified Talent Intelligence Hub" section** (lines ~189–237 in `client/src/pages/Employers.tsx`): Blue gradient panel (rounded-3xl, px-10 py-12, min-h-[340px]) as full-width base container. Text on left 40%. Dashboard absolutely positioned on right (w-[58%], right-[-24px], top-[-28px], bottom-[-28px]) with scale(0.82), creating layered overlay effect with overflow beyond the blue panel. Mobile: stacked vertically. This layout is finalized and must not be changed when editing other parts of the page.

## System Architecture

### Frontend (React SPA)
- **Framework**: React with TypeScript, bundled by Vite
- **Routing**: Wouter (lightweight client-side router) — NOT React Router
- **Styling**: TailwindCSS with CSS custom properties for theming (light/dark mode support)
- **UI Components**: shadcn/ui (new-york style) built on Radix UI primitives. Components live in `client/src/components/ui/`
- **State Management**: TanStack React Query for server state; React context for i18n
- **Path aliases**: `@/` maps to `client/src/`, `@shared/` maps to `shared/`

### Internationalization (i18n)
- Custom context-based i18n system in `client/src/lib/i18n.tsx`
- Language detected from URL path prefix (`/ar` = Arabic, everything else = English)
- Translation files in `client/src/lib/translations/en.ts` and `ar.ts`
- Arabic pages use `dir="rtl"` on the document root
- Fonts: Roc Grotesk (self-hosted from `public/fonts/`, weights 300-800) + Noto Sans Arabic (Google Fonts)

### Page Structure
All pages exist in both English and Arabic variants:
- Home (`/`, `/ar`)
- For Employers (`/employers`, `/ar/employers`)
- For Job Seekers (`/job-seekers`, `/ar/job-seekers`)
- How It Works (`/how-it-works`, `/ar/how-it-works`)
- Blog with individual posts (`/blog`, `/blog/:slug`)
- Book a Demo (`/book-demo`, `/ar/book-demo`) — functional booking system with calendar, time slots, and database persistence
- FAQ, Contact, Security, Privacy, Terms, Pricing, Login

### Backend (Express)
- **Runtime**: Node.js with Express 5
- **Dev server**: Vite dev middleware served through Express (see `server/vite.ts`)
- **Production**: Static files served from `dist/public` (see `server/static.ts`), with SPA fallback to `index.html`
- **API pattern**: Routes registered in `server/routes.ts`, all API routes should be prefixed with `/api`
- **Storage**: Currently uses in-memory storage (`MemStorage` class in `server/storage.ts`). Interface-based design allows swapping to database storage.

### Database
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Schema**: Defined in `shared/schema.ts` — has `users` and `demo_bookings` tables
- **Migrations**: Generated to `./migrations` directory via `drizzle-kit`
- **Schema push**: Use `npm run db:push` to push schema changes
- **Validation**: Drizzle-zod for generating Zod schemas from database tables
- **Note**: The app currently runs with in-memory storage. DATABASE_URL environment variable is needed when using database features.

### Build System
- **Dev**: `tsx server/index.ts` runs the Express server with Vite HMR
- **Build**: Custom build script (`script/build.ts`) — Vite builds the client, esbuild bundles the server
- **Production**: `node dist/index.cjs` serves the built application

### Configuration (Environment Variables)
Configurable via Vite env vars (prefixed with `VITE_`):
- `VITE_EMPLOYER_APP_URL` — Employer portal URL (default: `https://platohiring.com`)
- `VITE_APPLICANT_APP_URL` — Job seeker portal URL (default: `https://applicant.platohiring.com`)
- `VITE_DEMO_BOOKING_URL` — Demo booking link (default: empty, falls back to email)
- `VITE_DEMO_EMAIL_FALLBACK` — Fallback email (default: `hello@platohiring.com`)
- `VITE_LINKEDIN_URL` — LinkedIn company page URL (shown in footer when set)
- `VITE_SUPABASE_URL` — Supabase URL for contact form submissions
- `VITE_SUPABASE_ANON_KEY` — Supabase anonymous key
- `DATABASE_URL` — PostgreSQL connection string for Drizzle

### SEO
- Per-page `document.title` and `<meta name="description">` via `useSEO` hook
- Translation keys for page meta in `t.meta.pages.*`
- Server-generated `/sitemap.xml` with hreflang alternates for EN/AR
- Server-generated `/robots.txt` pointing to sitemap

### Theme System
- Light/dark mode support via `client/src/lib/theme.tsx` (ThemeProvider + useAppTheme hook)
- Dark mode is the default, persisted to localStorage under "plato-theme"
- Theme toggle (sun/moon icon) in the Header for both desktop and mobile
- All components use semantic Tailwind tokens (bg-background, text-foreground, bg-card, bg-muted, border-border, text-muted-foreground) that auto-adapt to light/dark
- Dark mode background is pure black (0 0% 0%)

### Navigation & Transitions
- Header nav: About, Pricing, Use Cases, Blogs (simplified from previous structure)
- `SmartHashLink` component handles cross-page hash navigation (navigates to home first if needed, then scrolls)
- Blog, FAQ, Contact remain real routes (`/blog`, `/faq`, `/contact`)
- `PageTransition` wrapper adds a subtle 220ms fade-in on route changes (respects `prefers-reduced-motion`)
- `scroll-margin-top: 80px` applied to sections with IDs to offset sticky header

### Design System
- Gradient blue palette matching the Plato logo: from `#0966A8` to `#1EA0E2` (light), `#0B5E96` to `#1A8FCC` (dark)
- CSS custom properties `--primary-gradient-from` and `--primary-gradient-to` for gradient colors
- Buttons use solid `bg-primary` (not gradient) for clean aesthetic
- Logo: `client/src/assets/plato-logo.png` (transparent background) used in Header and Footer; inverted in dark mode
- Typography: Headings use `font-semibold tracking-tight leading-[1.1]` or `font-bold` throughout
- Header: h-14, backdrop-blur-xl, text-[13px] nav items, max-w-6xl container, rounded-full "Book a Demo" button
- Homepage has an integrated multi-column footer; other pages use shared Footer component
- Footer: max-w-6xl, text-[13px] links, text-xs copyright
- CSS variables for all colors defined in `client/src/index.css`
- Components use shadcn/ui conventions with `cn()` utility for class merging
- Layout: `Layout.tsx` wraps all pages with ThemeProvider, sticky Header and Footer
- Homepage sections: Hero, Dashboard Mockup, Trusted By logos, Statement, Features Grid (colored cards), Comparison Charts, FAQ Accordion, CTA, Footer
- Generated feature images in `client/src/assets/features/` and dashboard mockup in `client/src/assets/dashboard-mockup.png`

## External Dependencies

- **PostgreSQL**: Database (via Drizzle ORM), required for `DATABASE_URL`
- **Supabase**: Optional — used for contact form lead submissions via REST API (configured through `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`)
- **Google Fonts**: Inter and Noto Sans Arabic fonts loaded externally
- **External portals**: Links to `applicant.platohiring.com` (job seekers) and configurable employer app URL
- **Radix UI**: Full suite of accessible UI primitives (dialog, accordion, dropdown, tabs, etc.)
- **TanStack React Query**: Server state management
- **Lucide React + React Icons**: Icon libraries
- **Replit plugins**: Dev-only Vite plugins for error overlay, cartographer, and dev banner

## Documentation
- `README.md` — Project overview, quick start, route map, env vars, how to add blog posts
- `docs/ARCHITECTURE.md` — Folder structure, i18n/RTL strategy, config location
- `docs/DATABASE.md` — Supabase contact_leads schema SQL, RLS policies, testing
- `.env.example` — All configurable environment variables with defaults