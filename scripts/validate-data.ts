#!/usr/bin/env npx tsx
/**
 * Validates all crowd/agent submission files under data/.
 * Fails CI when metrics lack proof_url or URLs are invalid.
 */
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";
import { parse as parseYaml } from "yaml";
import { statsFileSchema } from "../schemas/stat.schema";
import { casesFileSchema } from "../schemas/case.schema";
import { leadFileSchema } from "../schemas/lead.schema";
import { immigrationSeriesFileSchema } from "../schemas/immigration-series.schema";
import { presidentialErasFileSchema } from "../schemas/presidential-eras.schema";
import { worldmapOriginsFileSchema } from "../schemas/worldmap-origins.schema";

const root = join(import.meta.dirname, "..");
let errors = 0;

function fail(msg: string) {
  console.error(`ERROR: ${msg}`);
  errors += 1;
}

function readJson(path: string): unknown {
  return JSON.parse(readFileSync(path, "utf8"));
}

function readJsonOrYaml(path: string): unknown {
  const raw = readFileSync(path, "utf8");
  if (path.endsWith(".yaml") || path.endsWith(".yml")) {
    return parseYaml(raw);
  }
  return JSON.parse(raw);
}

function validateStats() {
  const path = join(root, "data/stats/metrics.json");
  const parsed = statsFileSchema.safeParse(readJson(path));
  if (!parsed.success) {
    fail(`data/stats/metrics.json — ${parsed.error.message}`);
    return;
  }
  const ids = new Set<string>();
  const byId = new Map(parsed.data.metrics.map((m) => [m.id, m]));
  for (const m of parsed.data.metrics) {
    if (ids.has(m.id)) fail(`duplicate stat id: ${m.id}`);
    ids.add(m.id);
    if (m.breakdown_of != null) {
      const parent = byId.get(m.breakdown_of);
      if (!parent) {
        fail(`${m.id}: breakdown_of unknown id ${m.breakdown_of}`);
      } else if (parent.breakdown_of != null) {
        fail(`${m.id}: breakdown_of must point to a top-level metric`);
      } else if (m.waste_class !== "legal" || parent.waste_class !== "legal") {
        fail(`${m.id}: breakdown_of rows and parent must be waste_class=legal`);
      }
    }
  }
  console.log(`OK stats: ${parsed.data.metrics.length} metrics`);
}

function validateCases() {
  const path = join(root, "data/cases/manifest.json");
  const parsed = casesFileSchema.safeParse(readJson(path));
  if (!parsed.success) {
    fail(`data/cases/manifest.json — ${parsed.error.message}`);
    return;
  }
  const ids = new Set<string>();
  for (const c of parsed.data.cases) {
    if (ids.has(c.case_id)) fail(`duplicate case_id: ${c.case_id}`);
    ids.add(c.case_id);
    for (const url of c.proof_urls) {
      if (!c.sources.some((s) => s.url === url)) {
        fail(`${c.case_id}: proof_urls must be listed in sources[].url`);
      }
    }
  }
  console.log(`OK cases: ${parsed.data.cases.length} cases`);
}

function validateLeads() {
  const dir = join(root, "data/leads");
  const entries = readdirSync(dir).filter(
    (f) =>
      !f.startsWith(".") &&
      (f.endsWith(".json") || f.endsWith(".yaml") || f.endsWith(".yml")),
  );
  if (entries.length === 0) {
    console.log("OK leads: none (optional)");
    return;
  }
  for (const file of entries) {
    if (file.includes("template")) continue;
    const path = join(dir, file);
    if (!statSync(path).isFile()) continue;
    try {
      const parsed = leadFileSchema.safeParse(readJsonOrYaml(path));
      if (!parsed.success) {
        fail(`data/leads/${file} — ${parsed.error.message}`);
      } else {
        console.log(`OK lead: ${file}`);
      }
    } catch (e) {
      fail(`data/leads/${file} — ${e}`);
    }
  }
}

function validateImmigrationSeries() {
  const path = join(root, "data/stats/immigration/series.json");
  const parsed = immigrationSeriesFileSchema.safeParse(readJson(path));
  if (!parsed.success) {
    fail(`data/stats/immigration/series.json — ${parsed.error.message}`);
    return;
  }
  const keys = new Set<string>();
  for (const p of parsed.data) {
    const key = `${p.series_id}:${p.year}`;
    if (keys.has(key)) fail(`duplicate immigration point: ${key}`);
    keys.add(key);
  }
  console.log(
    `OK immigration series: ${parsed.data.length} points, ${new Set(parsed.data.map((p) => p.series_id)).size} series`,
  );
}

function validatePresidentialEras() {
  const path = join(root, "data/stats/presidential-eras.json");
  const parsed = presidentialErasFileSchema.safeParse(readJson(path));
  if (!parsed.success) {
    fail(`data/stats/presidential-eras.json — ${parsed.error.message}`);
    return;
  }
  for (const era of parsed.data.eras) {
    if (!era.primary_url.includes("elysee.fr")) {
      fail(`${era.president}: primary_url must be Élysée (got ${era.primary_url})`);
    }
  }
  console.log(`OK presidential eras: ${parsed.data.eras.length} mandates`);
}

function validateWorldmapOrigins() {
  const path = join(root, "data/stats/immigration/worldmap-origins.json");
  const parsed = worldmapOriginsFileSchema.safeParse(readJson(path));
  if (!parsed.success) {
    fail(`data/stats/immigration/worldmap-origins.json — ${parsed.error.message}`);
    return;
  }
  const statsPath = join(root, "data/stats/metrics.json");
  const stats = statsFileSchema.safeParse(readJson(statsPath));
  if (!stats.success) {
    fail(`worldmap cross-check — metrics.json unreadable`);
    return;
  }
  const ids = new Set(stats.data.metrics.map((m) => m.id));
  for (const r of parsed.data.regions) {
    if (!ids.has(r.effectif_metric_id)) {
      fail(`worldmap ${r.region_id}: missing metric ${r.effectif_metric_id}`);
    }
    if (!ids.has(r.part_metric_id)) {
      fail(`worldmap ${r.region_id}: missing metric ${r.part_metric_id}`);
    }
  }
  const sumK = parsed.data.regions.reduce((s, r) => s + r.g1_thousands, 0);
  if (sumK < 7170 || sumK > 7180) {
    fail(
      `worldmap regions sum ${sumK}k — expected ~7174k (Fig. 2 rounding)`,
    );
  }
  if (!parsed.data.title_fr.toLowerCase().includes("origines géographiques")) {
    fail(`worldmap title_fr must mention origines géographiques des immigrés`);
  }
  console.log(`OK worldmap origins: ${parsed.data.regions.length} INSEE regions`);
}

console.log("Validating DOGE France data/ …");
validateStats();
validatePresidentialEras();
validateImmigrationSeries();
validateWorldmapOrigins();
validateCases();
validateLeads();

if (errors > 0) {
  console.error(`\nValidation failed with ${errors} error(s).`);
  process.exit(1);
}
console.log("\nAll data validations passed.");
