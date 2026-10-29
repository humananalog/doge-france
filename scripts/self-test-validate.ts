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
assertFormat("Md€ from 6,3 Md", 6_300_000_000, "6,3 Md€");
assertFormat("M€ integer", 1_470_000_000, "1\u202f470 M€");
assertFormat("M€ immigration scale", 1_800_000_000, "1\u202f800 M€");
assertFormat("M€ IAI associations 2023", 1_093_960_000, "1\u202f094 M€");

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

const fraudLegalWaste = statRecordSchema.safeParse({
  id: "bad-fraud-legal-waste",
  label_fr: "Test",
  value: 1,
  as_of: "2026",
  category: "test",
  kind: "fraud",
  waste_class: "legal",
  proof_url: "https://example.com/a",
  source: {
    title: "T",
    url: "https://example.com/a",
    publisher: "X",
  },
});

if (fraudLegalWaste.success) {
  console.error("FAIL: schema should reject fraud + waste_class=legal");
  failed++;
} else {
  console.log("OK: rejects fraud + waste_class=legal");
}

const errorWithWaste = statRecordSchema.safeParse({
  id: "bad-error-waste",
  label_fr: "Test",
  value: 1,
  as_of: "2026",
  category: "test",
  kind: "error",
  waste_class: "illegal",
  proof_url: "https://example.com/a",
  source: {
    title: "T",
    url: "https://example.com/a",
    publisher: "X",
  },
});

if (errorWithWaste.success) {
  console.error("FAIL: schema should reject error + waste_class");
  failed++;
} else {
  console.log("OK: rejects error + waste_class");
}

const spendIllegalWaste = statRecordSchema.safeParse({
  id: "ok-spend-waste",
  label_fr: "Test",
  value: 793000000,
  unit: "EUR",
  as_of: "2023-06",
  category: "riots",
  kind: "spend",
  waste_class: "illegal",
  proof_url: "https://example.com/a",
  source: {
    title: "T",
    url: "https://example.com/a",
    publisher: "X",
  },
});

if (!spendIllegalWaste.success) {
  console.error("FAIL: schema should accept spend + waste_class=illegal");
  failed++;
} else {
  console.log("OK: accepts spend + waste_class=illegal");
}

if (failed > 0) process.exit(1);
console.log("Self-test passed.");
