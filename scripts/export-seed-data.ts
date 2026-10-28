/**
 * Regenerates data/ from JSON (identity) or future TS seeds.
 * Prefer editing data/stats/metrics.json and data/cases/manifest.json directly.
 */
import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { statsFileSchema } from "../schemas/stat.schema";
import { casesFileSchema } from "../schemas/case.schema";

const root = join(import.meta.dirname, "..");

const statsPath = join(root, "data/stats/metrics.json");
const casesPath = join(root, "data/cases/manifest.json");

const stats = statsFileSchema.parse(JSON.parse(readFileSync(statsPath, "utf8")));
const cases = casesFileSchema.parse(JSON.parse(readFileSync(casesPath, "utf8")));

writeFileSync(statsPath, JSON.stringify(stats, null, 2) + "\n");
writeFileSync(casesPath, JSON.stringify(cases, null, 2) + "\n");

console.log(
  `Normalized ${stats.metrics.length} metrics, ${cases.cases.length} cases.`,
);
