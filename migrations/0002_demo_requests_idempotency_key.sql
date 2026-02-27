ALTER TABLE demo_requests
  ADD COLUMN IF NOT EXISTS idempotency_key text;

UPDATE demo_requests
SET idempotency_key = id
WHERE idempotency_key IS NULL;

ALTER TABLE demo_requests
  ALTER COLUMN idempotency_key SET NOT NULL;

CREATE UNIQUE INDEX IF NOT EXISTS demo_requests_idempotency_key_unique
  ON demo_requests(idempotency_key);
