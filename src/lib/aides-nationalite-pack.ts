import pack from "../../reports/2026-10-31-aides-nationalite/metrics.json";
import type { SourceRef } from "@/lib/types";

export type AidesPackCell = {
  id: string;
  label: string;
  value: number;
  unit: string;
  source_url: string;
  optional?: boolean;
};

export const AIDES_GATE_FILE = pack.gate_file;
export const AIDES_GATE_VERDICT = pack.gate;
export const AIDES_PRIMARY_URL = pack.primary_url;
export const AIDES_YEAR = pack.year;
export const AIDES_CHAMP = pack.champ;
export const AIDES_BANNER =
  "Étude non officielle · part des prestations dans le niveau de vie · pas un narratif de fraude";
export const AIDES_PANEL_TITLE =
  "Part des prestations sociales dans le niveau de vie";
export const AIDES_REPORT_PATH =
  "reports/2026-10-31-aides-nationalite/metrics.json";

export const AIDES_SOURCE: SourceRef = {
  title: "INSEE — Prestations sociales et niveau de vie (ERFS 2019)",
  url: pack.primary_url,
  publisher: "INSEE",
};

export function getAidesCells(includeOptional = true): AidesPackCell[] {
  return (pack.cells as AidesPackCell[]).filter(
    (c) => includeOptional || !c.optional,
  );
}

export function getAidesCoreCells(): AidesPackCell[] {
  return getAidesCells(false);
}

export function getAidesGeoOptionalCells(): AidesPackCell[] {
  return (pack.cells as AidesPackCell[]).filter((c) => c.optional);
}
