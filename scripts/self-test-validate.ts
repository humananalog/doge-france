/**
 * Ensures validate-data rejects metrics missing proof_url (CI guard).
 * Run: npx tsx scripts/self-test-validate.ts
 */
import { statRecordSchema } from "../schemas/stat.schema";
import { formatEurCompact } from "../src/lib/format";

let failed = 0;

function assertFormat(label: string, value: number, expected: string) {
  const got = formatEurCompact(value);
  if (got !== expected) {
    console.error(`FAIL format ${label}: got "${got}", expected "${expected}"`);
    failed++;
  } else {
    console.log(`OK format ${label}`);
  }
}

assertFormat("Md€ decimal", 3_460_500_000_000, "3\u202f460,5 Md€");
assertFormat("M€ integer", 1_470_000_000, "1\u202f470 M€");
assertFormat("M€ small case", 210_000, "210\u202f000\u00a0€");

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
