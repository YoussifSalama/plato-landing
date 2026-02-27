CREATE TABLE IF NOT EXISTS demo_requests (
  id varchar PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  description text,
  status text NOT NULL DEFAULT 'pending',
  meeting_link text,
  confirmed_slot_datetime timestamp,
  decline_reason text,
  reviewed_by text,
  reviewed_at timestamp,
  created_at timestamp NOT NULL DEFAULT now(),
  updated_at timestamp NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS demo_request_slots (
  id varchar PRIMARY KEY DEFAULT gen_random_uuid(),
  request_id varchar NOT NULL REFERENCES demo_requests(id) ON DELETE CASCADE,
  slot_date date NOT NULL,
  slot_time text NOT NULL,
  slot_datetime timestamp NOT NULL,
  created_at timestamp NOT NULL DEFAULT now()
);

CREATE UNIQUE INDEX IF NOT EXISTS demo_request_slots_request_slot_unique
  ON demo_request_slots(request_id, slot_datetime);

CREATE TABLE IF NOT EXISTS demo_slot_locks (
  id varchar PRIMARY KEY DEFAULT gen_random_uuid(),
  request_id varchar REFERENCES demo_requests(id) ON DELETE SET NULL,
  slot_datetime timestamp NOT NULL,
  state text NOT NULL DEFAULT 'confirmed',
  expires_at timestamp,
  created_at timestamp NOT NULL DEFAULT now(),
  updated_at timestamp NOT NULL DEFAULT now()
);

CREATE UNIQUE INDEX IF NOT EXISTS demo_slot_locks_slot_unique
  ON demo_slot_locks(slot_datetime);

CREATE TABLE IF NOT EXISTS demo_email_events (
  id varchar PRIMARY KEY DEFAULT gen_random_uuid(),
  request_id varchar REFERENCES demo_requests(id) ON DELETE SET NULL,
  kind text NOT NULL,
  to_email text NOT NULL,
  status text NOT NULL DEFAULT 'pending',
  retry_count integer NOT NULL DEFAULT 0,
  error_message text,
  next_retry_at timestamp,
  last_attempt_at timestamp,
  sent_at timestamp,
  payload jsonb NOT NULL DEFAULT '{}'::jsonb,
  created_at timestamp NOT NULL DEFAULT now(),
  updated_at timestamp NOT NULL DEFAULT now()
);
