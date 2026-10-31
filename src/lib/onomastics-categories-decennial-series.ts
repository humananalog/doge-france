import bundle from "../../data/stats/onomastics/categories-decennial-series.json";
import type { ImmigrationSeriesPoint } from "../../schemas/immigration-series.schema";

const points = bundle as ImmigrationSeriesPoint[];

const bySeries = new Map<string, ImmigrationSeriesPoint[]>();

for (const p of points) {
  const list = bySeries.get(p.series_id) ?? [];
  list.push(p);
  bySeries.set(p.series_id, list);
}

for (const list of bySeries.values()) {
  list.sort((a, b) => a.year - b.year);
}

export function getOnomasticsCategoriesDecennialSeries(
  seriesId: string,
): ImmigrationSeriesPoint[] {
  return bySeries.get(seriesId) ?? [];
}

/** Verbatim from pack metrics.json chart_banner + tiles banner intent. */
export const ONOM_CATEGORIES_PANEL_BANNER =
  "Étude onomastique non officielle — faisceaux culturels/géographiques de prénoms (desk) — pas un recensement ethnique — pas des % religion";

export const ONOM_CATEGORIES_CHART_BADGE =
  "étude non officielle · inferred cultural marker · NOT ethnie / NOT recensement / NOT religion %";

export const ONOM_CATEGORIES_CHART_TITLE =
  "Prénoms par faisceaux culturels — parts de naissances (1950 → 2025)";

export const ONOM_CATEGORIES_SERIES_ORDER = [
  "onom_cat_classiques_fr",
  "onom_cat_maghreb_arabo_musulman",
  "onom_cat_afrique_hors_maghreb",
  "onom_cat_asie",
  "onom_cat_slaves",
  "onom_cat_americain_anglo",
] as const;

export const ONOM_CATEGORIES_LINE_COLORS: Record<string, string> = {
  onom_cat_classiques_fr: "#64748b",
  onom_cat_maghreb_arabo_musulman: "#0d9488",
  onom_cat_afrique_hors_maghreb: "#ca8a04",
  onom_cat_asie: "#9333ea",
  onom_cat_slaves: "#2563eb",
  onom_cat_americain_anglo: "#dc2626",
};

/** Pack confidence tags — UI badges only, not invented data. */
export const ONOM_CATEGORIES_LOW_CONF_SERIES = new Set([
  "onom_cat_asie",
  "onom_cat_slaves",
]);

export const ONOM_CATEGORIES_MEDIUM_CONF_SERIES = new Set([
  "onom_cat_afrique_hors_maghreb",
]);

export const INSEE_PRENOMS_URL =
  "https://www.insee.fr/fr/statistiques/8595130";

export const INED_PS565_HAL_URL = "https://hal.science/hal-04625724";
