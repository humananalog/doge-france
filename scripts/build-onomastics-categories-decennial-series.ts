#!/usr/bin/env npx tsx
/**
 * Builds data/stats/onomastics/categories-decennial-series.json from the desk pack.
 * Source of truth: reports/2026-10-31-onomastics-categories-decennial/metrics.json
 */
import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import type { ImmigrationSeriesPoint } from "../schemas/immigration-series.schema";

const root = join(import.meta.dirname, "..");
const packPath = join(
  root,
  "reports/2026-10-31-onomastics-categories-decennial/metrics.json",
);

const PLOT_CLUSTERS = [
  "classiques_fr",
  "maghreb_arabo_musulman",
  "afrique_hors_maghreb",
  "asie",
  "slaves",
  "americain_anglo",
] as const;

type PackMetric = {
  year: number;
  cluster: string;
  sex: string;
  count: number;
  share_pct: number;
  primary_url: string;
  confidence: string;
  status: string;
  label_fr: string;
  ined565_grounding_url?: string;
  lacune_note?: string | null;
};

type PackFile = {
  metrics: PackMetric[];
  baseline_assumption?: {
    year: number;
    label: string;
    note: string;
  };
};

function notesFor(m: PackMetric, pack: PackFile): string | undefined {
  const parts: string[] = [];
  parts.push(`Confiance: ${m.confidence}`);
  if (m.ined565_grounding_url) {
    parts.push(`Grounding: ${m.ined565_grounding_url}`);
  }
  if (
    m.cluster === "classiques_fr" &&
    m.year === pack.baseline_assumption?.year
  ) {
    parts.push(`Baseline: ${pack.baseline_assumption.label}`);
    parts.push(pack.baseline_assumption.note);
  }
  if (m.lacune_note) parts.push(m.lacune_note);
  return parts.length ? parts.join(" · ") : undefined;
}

function main() {
  const pack = JSON.parse(readFileSync(packPath, "utf8")) as PackFile;
  const out: ImmigrationSeriesPoint[] = [];

  for (const m of pack.metrics) {
    if (m.sex !== "both") continue;
    if (!PLOT_CLUSTERS.includes(m.cluster as (typeof PLOT_CLUSTERS)[number])) {
      continue;
    }
    if (m.status !== "PASS") continue;
    if (!m.primary_url) continue;

    out.push({
      year: m.year,
      series_id: `onom_cat_${m.cluster}`,
      value: m.share_pct,
      unit: "percent",
      label_fr: m.label_fr,
      source_url: m.primary_url,
      source_org: "INSEE",
      notes: notesFor(m, pack),
    });
  }

  out.sort((a, b) =>
    a.series_id === b.series_id
      ? a.year - b.year
      : a.series_id.localeCompare(b.series_id),
  );

  const dest = join(
    root,
    "data/stats/onomastics/categories-decennial-series.json",
  );
  writeFileSync(dest, `${JSON.stringify(out, null, 2)}\n`);
  console.log(
    `Wrote ${out.length} points, ${new Set(out.map((p) => p.series_id)).size} series → ${dest}`,
  );
}

main();
