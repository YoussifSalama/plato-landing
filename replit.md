# Plato Marketing Website

## Overview

Plato is a bilingual (English/Arabic) marketing website for a recruiting/hiring automation product. The site's primary goal is converting employers to subscribe or book a demo, with a secondary goal of directing job seekers to sign up and upload resumes. The product automates resume screening, candidate outreach, interviews, and structured reporting.

The application is a **Next.js 16 (App Router)** full-stack TypeScript project with server-side rendering. It supports English (default at `/`) and Arabic (at `/ar` with full RTL layout).

## User Preferences

Preferred communication style: Simple, everyday language.

### LOCKED Layouts — Do NOT Modify
- **Employers page "Unified Talent Intelligence Hub" section** (in `src/pages/Employers.tsx`): Blue gradient panel (rounded-3xl, px-10 py-12, min-h-[520px]) as full-width base container. Text on left 40%. Dashboard absolutely positioned on right (w-[62%], right-[-32px], top-[20px], bottom-[-40px]) with scale(0.78), transformOrigin "top left", width/height 128.2%, creating layered overlay effect with blue panel peeking above dashboard and dashboard extending beyond bottom. No overflow-hidden on outer container. Dashboard wrapper uses `bg-white dark:bg-[#0d1117]` with `border border-gray-200 dark:border-transparent` (theme-aware, no forced dark class). Mobile: stacked vertically. This layout is finalized and must not be changed when editing other parts of the page.

## System Architecture

### Framework
- **Next.js 16** with App Router, Turbopack, React 19, TypeScript
- **Output mode**: `standalone` for deployment
- **Styling**: TailwindCSS v3 with CSS custom properties for theming (light/dark mode)
- **UI Components**: shadcn/ui (new-york style) built on Radix UI primitives. Components in `src/components/ui/`
- **State Management**: TanStack React Query v5 for server state; React context for i18n
- **Path aliases**: `@/` maps to `src/`, `@shared/` maps to `shared/`
- **Animations**: GSAP + ScrollTrigger for scroll-based animations, tailwindcss-animate for transitions

### Project Structure
```
src/
  app/
    layout.tsx          # Root layout (fonts, metadata, global CSS)
    globals.css         # Global styles + Tailwind directives
    not-found.tsx       # 404 page
    sitemap.ts          # Dynamic sitemap generation
    robots.ts           # Robots.txt generation
    [lang]/             # Dynamic route for EN/AR
      layout.tsx        # Lang layout (generateStaticParams for en/ar)
      page.tsx          # Home page
      employers/page.tsx
      job-seekers/page.tsx
      how-it-works/page.tsx
      blog/page.tsx
      blog/[slug]/page.tsx
      faq/page.tsx
      contact/page.tsx
      security/page.tsx
      privacy/page.tsx
      terms/page.tsx
      pricing/page.tsx
      login/page.tsx
      signup/page.tsx
      testimonials/page.tsx
      book-demo/page.tsx
    api/
      demo-bookings/route.ts
      contact/route.ts
  pages/              # Client component page implementations
  components/
    layout/           # Header, Footer, Layout, ClientLayout
    ui/               # shadcn/ui components
    shared/           # ScrollReveal, PageTransition, Section, SmartHashLink
    feature-mockups/  # Dashboard mockups, analytics panels
    seo/              # JSON-LD structured data
  lib/
    i18n.tsx          # I18n context provider
    theme.tsx         # Theme provider (light/dark)
    translations/     # en.ts, ar.ts
    blog.ts           # Blog post data
    config.ts         # External URLs config
    queryClient.ts    # TanStack Query client
    server/           # Server-only utilities
      email.ts        # SendGrid integration
      calendar.ts     # Google Calendar integration
      storage.ts      # Database storage layer
      db.ts           # Drizzle DB connection
  hooks/              # useSEO, use-toast, useScrollAnimation
shared/
  schema.ts           # Drizzle ORM schema (users, demo_bookings)
public/
  fonts/              # Roc Grotesk OTF files
  images/             # Logo, OG image, blog images, client logos
  favicon.png
```

### Routing Strategy
- URL rewrites in `next.config.js` map `/` → `/en`, `/employers` → `/en/employers`, etc.
- Arabic pages at `/ar/*` go directly to `[lang]` route with `lang=ar`
- All page.tsx files are thin wrappers importing client components from `src/pages/`

### Internationalization (i18n)
- Custom context-based i18n system in `src/lib/i18n.tsx`
- Language detected from URL path prefix (`/ar` = Arabic, everything else = English)
- Translation files in `src/lib/translations/en.ts` and `ar.ts`
- Arabic pages use `dir="rtl"` on the document root
- Fonts: Roc Grotesk (self-hosted OTF from `public/fonts/`, weights Light–ExtraBold) + Noto Sans Arabic (Google Fonts)

### Page Structure
All pages exist in both English and Arabic variants via `[lang]` dynamic route:
- Home (`/`, `/ar`)
- For Employers (`/employers`, `/ar/employers`)
- For Job Seekers (`/job-seekers`, `/ar/job-seekers`)
- How It Works (`/how-it-works`, `/ar/how-it-works`)
- Blog with individual posts (`/blog`, `/blog/:slug`)
- Book a Demo (`/book-demo`, `/ar/book-demo`) — functional booking system with calendar, time slots, Google Calendar + SendGrid
- Testimonials (`/testimonials`, `/ar/testimonials`) — 15 real client testimonials
- FAQ, Contact, Security, Privacy, Terms, Pricing
- Login (`/login`, `/ar/login`) — portal linking to external apps
- Signup (`/signup`, `/ar/signup`) — portal linking to external signup apps

### API Routes (Next.js Route Handlers)
- `src/app/api/demo-bookings/route.ts` — POST to create booking, GET to check availability
- `src/app/api/contact/route.ts` — POST contact form → SendGrid → `info@platohiring.com`

### Database
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Schema**: Defined in `shared/schema.ts` — `users` and `demo_bookings` tables
- **Schema push**: Use `npm run db:push` to push schema changes
- **Validation**: Drizzle-zod for generating Zod schemas from database tables

### Build System
- **Dev**: `npx next dev -p 5000` (Turbopack enabled by default in Next.js 16)
- **Build**: `npx next build` (standalone output)
- **Production**: `npx next start -p 5000`

### Configuration (Environment Variables)
Configurable via `NEXT_PUBLIC_` prefix:
- `NEXT_PUBLIC_EMPLOYER_APP_URL` — Employer portal URL (default: `https://platohiring.com`)
- `NEXT_PUBLIC_APPLICANT_APP_URL` — Job seeker portal URL (default: `https://applicant.platohiring.com`)
- `NEXT_PUBLIC_DEMO_EMAIL_FALLBACK` — Fallback email (default: `hello@platohiring.com`)
- `NEXT_PUBLIC_LINKEDIN_URL` — LinkedIn company page URL
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
- **useSEO hook** (`src/hooks/useSEO.ts`): Sets per-page `document.title`, `<meta description>`, Open Graph tags, Twitter Card tags, and `<link rel="canonical">`
- **Root metadata**: Set in `src/app/layout.tsx` with `metadataBase: https://platohiring.com`
- **Default OG image**: Branded 1200×630 image at `public/images/og-default.png`
- **JSON-LD structured data** (`src/components/seo/JsonLd.tsx`): Organization + WebSite on Home, FAQPage on Home + FAQ, Article on BlogPost
- **Sitemap**: `src/app/sitemap.ts` with hreflang EN/AR alternates
- **Robots**: `src/app/robots.ts` pointing to sitemap

### Theme System
- Light/dark mode support via `src/lib/theme.tsx` (ThemeProvider + useAppTheme hook)
- Dark mode is the default, persisted to localStorage under "plato-theme"
- Theme toggle (sun/moon icon) in the Header for both desktop and mobile
- All components use semantic Tailwind tokens that auto-adapt to light/dark
- Dark mode background is pure black (0 0% 0%)

### Navigation & Transitions
- Header nav: About, Pricing, Use Cases, Blogs
- `SmartHashLink` component handles cross-page hash navigation
- `PageTransition` wrapper adds a subtle 220ms fade-in on route changes (respects `prefers-reduced-motion`)

### Design System
- Gradient blue palette matching the Plato logo: from `#0966A8` to `#1EA0E2`
- CSS custom properties `--primary-gradient-from` and `--primary-gradient-to`
- Logo: `public/images/plato-logo.png` (transparent background) used in Header and Footer
- Typography: Roc Grotesk (self-hosted OTF in `public/fonts/`)
- Font: weight 600/semibold mapped to Bold OTF

## External Dependencies

- **PostgreSQL**: Database (via Drizzle ORM), required for `DATABASE_URL`
- **SendGrid**: Email delivery for booking confirmations (Replit integration — no manual keys)
- **Google Calendar**: Event creation with Meet links (Replit integration — no manual keys)
- **Google Fonts**: Noto Sans Arabic loaded externally
- **Radix UI**: Accessible UI primitives
- **TanStack React Query v5**: Server state management
- **GSAP + ScrollTrigger**: Scroll-based animations
- **Lucide React + React Icons**: Icon libraries
