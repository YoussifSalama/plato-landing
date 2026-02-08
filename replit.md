# Plato Marketing Website

## Overview

Plato is a bilingual (English/Arabic) marketing website for a recruiting/hiring automation product. The site's primary goal is converting employers to subscribe or book a demo, with a secondary goal of directing job seekers to sign up and upload resumes. The product automates resume screening, candidate outreach, interviews, and structured reporting.

The application is a full-stack TypeScript project with a React SPA frontend served by an Express backend. It supports English (default at `/`) and Arabic (at `/ar` with full RTL layout).

## User Preferences

Preferred communication style: Simple, everyday language.

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
- Fonts: Inter (Latin) + Noto Sans Arabic loaded from Google Fonts

### Page Structure
All pages exist in both English and Arabic variants:
- Home (`/`, `/ar`)
- For Employers (`/employers`, `/ar/employers`)
- For Job Seekers (`/job-seekers`, `/ar/job-seekers`)
- How It Works (`/how-it-works`, `/ar/how-it-works`)
- Blog with individual posts (`/blog`, `/blog/:slug`)
- FAQ, Contact, Security, Privacy, Terms, Pricing, Login

### Backend (Express)
- **Runtime**: Node.js with Express 5
- **Dev server**: Vite dev middleware served through Express (see `server/vite.ts`)
- **Production**: Static files served from `dist/public` (see `server/static.ts`), with SPA fallback to `index.html`
- **API pattern**: Routes registered in `server/routes.ts`, all API routes should be prefixed with `/api`
- **Storage**: Currently uses in-memory storage (`MemStorage` class in `server/storage.ts`). Interface-based design allows swapping to database storage.

### Database
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Schema**: Defined in `shared/schema.ts` — currently has a basic `users` table
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

### Design System
- Blue-based color palette: Primary `#057ABE`, Secondary `#689AB9`, Light background `#E0EEF3`
- CSS variables for all colors defined in `client/src/index.css`
- Components use shadcn/ui conventions with `cn()` utility for class merging
- Layout: `Layout.tsx` wraps all pages with sticky Header and Footer

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