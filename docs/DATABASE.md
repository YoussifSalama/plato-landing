# Database Schema

## Contact Leads (Supabase)

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
