# Plato Marketing Website

A bilingual (English / Arabic) marketing website for **Plato**, a recruiting and hiring automation platform. The site converts employers to subscribe or book a demo, and directs job seekers to sign up.

## Tech Stack

- **Frontend**: React 18 + TypeScript, bundled with Vite
- **Routing**: Wouter (lightweight client-side router)
- **Styling**: TailwindCSS + shadcn/ui components (Radix UI)
- **State**: TanStack React Query
- **Backend**: Express 5 (Node.js)
- **Database**: PostgreSQL via Drizzle ORM (optional for marketing site)
- **Contact Form**: Supabase REST API (optional, with mailto fallback)
- **Fonts**: Inter (Latin) + Noto Sans Arabic

## Quick Start

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.example .env

# Start development server
npm run dev
```

The app runs at `http://localhost:5000`.

## Environment Variables

See `.env.example` for the full list. All are optional with sensible defaults:

| Variable | Default | Description |
|----------|---------|-------------|
| `VITE_EMPLOYER_APP_URL` | `https://platohiring.com` | Employer portal URL |
| `VITE_APPLICANT_APP_URL` | `https://applicant.platohiring.com` | Job seeker portal URL |
| `VITE_DEMO_BOOKING_URL` | (empty) | Demo booking URL (e.g. Calendly) |
| `VITE_DEMO_EMAIL_FALLBACK` | `hello@platohiring.com` | Fallback email for demo requests |
| `VITE_LINKEDIN_URL` | (empty) | LinkedIn company page |
| `VITE_SUPABASE_URL` | (empty) | Supabase project URL |
| `VITE_SUPABASE_ANON_KEY` | (empty) | Supabase anonymous key |

## Route Map

All routes exist in both English and Arabic (`/ar` prefix):

| Path | Arabic Path | Page |
|------|-------------|------|
| `/` | `/ar` | Home |
| `/employers` | `/ar/employers` | For Employers |
| `/job-seekers` | `/ar/job-seekers` | For Job Seekers |
| `/how-it-works` | `/ar/how-it-works` | How it Works |
| `/blog` | `/ar/blog` | Blog Index |
| `/blog/:slug` | `/ar/blog/:slug` | Blog Post |
| `/faq` | `/ar/faq` | FAQ |
| `/contact` | `/ar/contact` | Contact |
| `/security` | `/ar/security` | Security & Privacy |
| `/privacy` | `/ar/privacy` | Privacy Policy |
| `/terms` | `/ar/terms` | Terms of Service |
| `/pricing` | `/ar/pricing` | Pricing (Coming Soon) |
| `/login` | `/ar/login` | Login Portal |

Additional server routes:
- `/robots.txt` — Crawl directives
- `/sitemap.xml` — XML sitemap with hreflang alternates

## How to Add Blog Posts

Blog posts are stored as in-memory TypeScript objects in:

- `client/src/lib/blog.ts` — Post type definition and helper functions
- English posts defined in the `enPosts` array
- Arabic posts defined in the `arPosts` array

To add a new post:

1. Add an object to the appropriate array with: `slug`, `title`, `date`, `summary`, `author`, `tags`, and `content` (Markdown).
2. The slug must be unique within its language.
3. Content supports Markdown formatting: `## headings`, `**bold**`, `- lists`, `1. ordered lists`.

## How to Replace Placeholder Logos

The "Trusted by" logos section on the homepage uses placeholder text names. To replace with real logos:

1. Add logo image files to `client/src/assets/` (or use the public folder)
2. Edit `client/src/pages/Home.tsx` — find the `placeholderLogos` array
3. Replace the text divs with `<img>` tags pointing to your logo files

## Building for Production

```bash
# Build both client and server
npm run build

# Start production server
npm start
```

The build outputs to `dist/` — `dist/public/` for static files and `dist/index.cjs` for the server.

## Documentation

- `docs/ARCHITECTURE.md` — Folder structure, i18n strategy, config overview
- `docs/DATABASE.md` — Supabase schema SQL and RLS policy for contact_leads
- `.env.example` — All configurable environment variables
