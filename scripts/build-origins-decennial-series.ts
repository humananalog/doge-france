#!/usr/bin/env npx tsx
/**
 * Builds data/stats/immigration/origins-decennial-series.json from the desk pack metrics.
 * Source of truth: reports/2026-10-31-origins-decennial/metrics.json
 */
import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import type { ImmigrationSeriesPoint } from "../schemas/immigration-series.schema";

const root = join(import.meta.dirname, "..");
const packPath = join(
  root,
  "reports/2026-10-31-origins-decennial/metrics.json",
);

type PackMetric = {
  year: number;
  geography?: string;
  series: string;
  origin_region: string | null;
  numerator: number | null;
  pct: number | null;
  primary_url: string | null;
  figure?: string | null;
  confidence: string;
  published_vs_derived?: string | null;
  lacune_note?: string | null;
  unit?: string | null;
};

type PackFile = { metrics: PackMetric[] };

/** Regions plotted as separate lines (exclude parent aggregates that double-count). */
const SKIP_ORIGIN_REGIONS = new Set([
  "ALL",
  "Afrique",
  "Europe",
]);

const ORIGIN_REGION_LABEL: Record<string, string> = {
  Maghreb: "Maghreb",
  "Afrique hors Maghreb": "Afrique hors Maghreb",
  "Europe du Sud": "Europe du Sud",
  "Autres pays de l'UE": "Autres UE",
  "Autres pays d'Europe": "Autres Europe",
  Asie: "Asie (ensemble 6793226)",
  "Asie (hors Turquie/MO)": "Asie (hors TR/MO)",
  Turquie: "Turquie (6793226)",
  "Turquie, Moyen-Orient": "Turquie, Moyen-Orient",
  "Amérique, Océanie": "Amérique, Océanie",
};

function slugRegion(region: string): string {
  return region
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_|_$/g, "");
}

function notesFor(m: PackMetric): string | undefined {
  const parts: string[] = [];
  if (m.geography) parts.push(`Champ: ${m.geography}`);
  if (m.figure) parts.push(m.figure);
  if (m.published_vs_derived && m.published_vs_derived !== "published") {
    parts.push(`Statut: ${m.published_vs_derived}`);
  }
  if (m.lacune_note) parts.push(m.lacune_note);
  return parts.length ? parts.join(" · ") : undefined;
}

function main() {
  const pack = JSON.parse(readFileSync(packPath, "utf8")) as PackFile;
  const out: ImmigrationSeriesPoint[] = [];

  for (const m of pack.metrics) {
    if (m.confidence === "fail") continue;
    if (m.primary_url == null || m.primary_url === "") continue;

    if (m.series === "g1_total") {
      if (m.numerator != null) {
        out.push({
          year: m.year,
          series_id: "g1_decennial_stock",
          value: m.numerator,
          unit: "persons",
          label_fr: "Stock immigrés (G1)",
          source_url: m.primary_url,
          source_org: "INSEE",
          notes: notesFor(m),
        });
      }
      if (m.pct != null) {
        out.push({
          year: m.year,
          series_id: "g1_decennial_part_population",
          value: m.pct,
          unit: "percent",
          label_fr: "Part des immigrés dans la population",
          source_url: m.primary_url,
          source_org: "INSEE",
          notes: notesFor(m),
        });
      }
      continue;
    }

    if (m.series === "g1_by_origin" && m.origin_region) {
      if (SKIP_ORIGIN_REGIONS.has(m.origin_region)) continue;
      if (m.numerator == null) continue;
      const label =
        ORIGIN_REGION_LABEL[m.origin_region] ?? m.origin_region;
      out.push({
        year: m.year,
        series_id: `g1_origin_${slugRegion(m.origin_region)}`,
        value: m.numerator,
        unit: "persons",
        label_fr: `G1 — ${label}`,
        source_url: m.primary_url,
        source_org: "INSEE",
        notes: notesFor(m),
      });
      continue;
    }

    if (m.series === "g2_total" && m.numerator != null) {
      out.push({
        year: m.year,
        series_id: "g2_decennial_stock",
        value: m.numerator,
        unit: "persons",
        label_fr: "Stock descendants d'immigrés (G2)",
        source_url: m.primary_url,
        source_org: "INSEE",
        notes: notesFor(m),
      });
      if (m.pct != null) {
        out.push({
          year: m.year,
          series_id: "g2_decennial_part_population",
          value: m.pct,
          unit: "percent",
          label_fr: "Part G2 (logement ordinaire)",
          source_url: m.primary_url,
          source_org: "INSEE",
          notes: notesFor(m),
        });
      }
    }
  }

  out.sort((a, b) =>
    a.series_id === b.series_id
      ? a.year - b.year
      : a.series_id.localeCompare(b.series_id),
  );

  const dest = join(root, "data/stats/immigration/origins-decennial-series.json");
  writeFileSync(dest, `${JSON.stringify(out, null, 2)}\n`);
  console.log(
    `Wrote ${out.length} points, ${new Set(out.map((p) => p.series_id)).size} series → ${dest}`,
  );
}

main();
