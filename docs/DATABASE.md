# Database Systems

This project uses two separate database systems for different purposes.

## 1. PostgreSQL (Primary — Demo Bookings)

The primary database is PostgreSQL, managed via Drizzle ORM. It stores demo booking data and is configured via the `DATABASE_URL` environment variable.

### Schema (defined in `shared/schema.ts`)

```sql
-- Users table (for future auth)
CREATE TABLE users (
  id VARCHAR PRIMARY KEY DEFAULT gen_random_uuid(),
  username TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL
);

-- Demo bookings table
CREATE TABLE demo_bookings (
  id VARCHAR PRIMARY KEY DEFAULT gen_random_uuid(),
  booking_date DATE NOT NULL,
  booking_time TEXT NOT NULL,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT now(),
  UNIQUE(booking_date, booking_time)
);
```

### Usage
- Push schema changes: `npm run db:push`
- Drizzle config: `drizzle.config.ts`
- Connection: `server/db.ts`
- Storage interface: `server/storage.ts`

## 2. Supabase (Optional — Contact Form Leads)

The contact form on `/contact` can optionally submit leads to a Supabase table. This is configured via `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` environment variables.

When these are not set, the contact form shows a fallback with a mailto link instead.

### Schema SQL

Run this in your Supabase SQL editor to create the `contact_leads` table:

```sql
CREATE TABLE contact_leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  name text NOT NULL,
  email text NOT NULL,
  company text,
  role text,
  hiring_volume text,
  message text,
  source_page text,
  language text
);
```

### Row-Level Security (RLS)

Enable RLS and create a policy that allows anonymous inserts only (no read/update/delete for anonymous users):

```sql
-- Enable RLS
ALTER TABLE contact_leads ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (from the website contact form)
CREATE POLICY "Allow anonymous insert"
  ON contact_leads
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Deny all other operations for anonymous users (reads, updates, deletes)
-- Only authenticated/service_role users can read the leads
CREATE POLICY "Allow authenticated read"
  ON contact_leads
  FOR SELECT
  TO authenticated
  USING (true);
```

### How to Test Inserts

1. Set `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` in your environment.
2. Navigate to `/contact` on the site.
3. Fill out the form and click "Send Message".
4. Check the `contact_leads` table in your Supabase dashboard to verify the row was inserted.

You can also test via curl:

```bash
curl -X POST "https://YOUR_PROJECT.supabase.co/rest/v1/contact_leads" \
  -H "apikey: YOUR_ANON_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "company": "Test Co",
    "role": "Engineer",
    "hiring_volume": "1-5",
    "message": "Testing contact form",
    "source_page": "/contact",
    "language": "en"
  }'
```
