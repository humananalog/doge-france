import pack from "../../reports/2026-10-31-fertility-origin/metrics.json";
import type { SourceRef } from "@/lib/types";

export type FertilityPackCell = {
  id: string;
  label: string;
  value: number;
  unit: string;
  source_url: string;
  optional?: boolean;
};

export const FERTILITY_GATE_FILE = pack.gate_file;
export const FERTILITY_GATE_VERDICT = pack.gate;
export const FERTILITY_PRIMARY_URL = pack.primary_url;
export const FERTILITY_YEAR = pack.year;
export const FERTILITY_CHAMP = pack.champ;
export const FERTILITY_BANNER =
  "Étude non officielle · proxys géographiques INSEE (pays de naissance) · pas une « fécondité musulmane »";
export const FERTILITY_PANEL_TITLE = "ICF ajusté · pays de naissance";
export const FERTILITY_REPORT_PATH =
  "reports/2026-10-31-fertility-origin/metrics.json";

export const FERTILITY_SOURCE: SourceRef = {
  title: "INSEE IP 1939 — Fécondité selon le pays de naissance (Fig. 6)",
  url: pack.primary_url,
  publisher: "INSEE",
};

export function getFertilityCells(includeOptional = true): FertilityPackCell[] {
  return (pack.cells as FertilityPackCell[]).filter(
    (c) => includeOptional || !c.optional,
  );
}

export const FERTILITY_NOTES: string[] = pack.notes;

/** Contexte publié même tableau (Fig. 6) — footnote only, pas tuile KPI séparée. */
export const FERTILITY_ENSEMBLE_ICF_2021 = 1.84;
