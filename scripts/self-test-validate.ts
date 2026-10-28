/**
 * Ensures validate-data rejects metrics missing proof_url (CI guard).
 * Run: npx tsx scripts/self-test-validate.ts
 */
import { statRecordSchema } from "../schemas/stat.schema";

let failed = 0;

const bad = statRecordSchema.safeParse({
  id: "bad-no-proof",
  label_fr: "Test",
  value: 1,
  as_of: "2026",
  category: "test",
  kind: "other",
  source: {
    title: "T",
    url: "https://example.com/a",
    publisher: "X",
  },
});

if (bad.success) {
  console.error("FAIL: schema should reject missing proof_url");
  failed++;
} else {
  console.log("OK: rejects missing proof_url");
}

const mismatch = statRecordSchema.safeParse({
  id: "bad-mismatch",
  label_fr: "Test",
  value: 1,
  as_of: "2026",
  category: "test",
  kind: "other",
  proof_url: "https://example.com/a",
  source: {
    title: "T",
    url: "https://example.com/b",
    publisher: "X",
  },
});

if (mismatch.success) {
  console.error("FAIL: schema should reject proof_url != source.url");
  failed++;
} else {
  console.log("OK: rejects proof_url / source.url mismatch");
}

if (failed > 0) process.exit(1);
console.log("Self-test passed.");
