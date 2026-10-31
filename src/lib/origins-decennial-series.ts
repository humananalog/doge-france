import bundle from "../../data/stats/immigration/origins-decennial-series.json";
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

export function getOriginsDecennialSeries(
  seriesId: string,
): ImmigrationSeriesPoint[] {
  return bySeries.get(seriesId) ?? [];
}

/** Break after 2013 — no primary G1 origin breakout for 2020 (do not connect to 2021). */
export const G1_ORIGIN_BREAK_AFTER_YEARS = [2013] as const;

export const ORIGINS_DECENNIAL_BANNER =
  "Étude non officielle · proxys d'origine INSEE · pas un recensement ethnique";

export const ORIGINS_CHART_TITLE =
  "Origines géographiques des immigrés en France — stocks G1 (et G2)";

export const ORIGIN_LINE_COLORS: Record<string, string> = {
  g1_origin_maghreb: "#c2410c",
  g1_origin_afrique_hors_maghreb: "#ca8a04",
  g1_origin_europe_du_sud: "#2563eb",
  g1_origin_asie: "#7c3aed",
  g1_origin_asie_hors_turquie_mo: "#9333ea",
  g1_origin_turquie: "#db2777",
  g1_origin_turquie_moyen_orient: "#e11d48",
  g1_origin_amerique_oceanie: "#059669",
  g1_origin_autres_pays_de_l_ue: "#64748b",
  g1_origin_autres_pays_d_europe: "#475569",
};

/** Long-series core regions (6793226 + anchors); 2023 Fig.2 adds UE/autres Europe/TR-MO split. */
export const G1_ORIGIN_SERIES_ORDER = [
  "g1_origin_maghreb",
  "g1_origin_afrique_hors_maghreb",
  "g1_origin_europe_du_sud",
  "g1_origin_asie",
  "g1_origin_turquie",
  "g1_origin_amerique_oceanie",
  "g1_origin_autres_pays_de_l_ue",
  "g1_origin_autres_pays_d_europe",
  "g1_origin_asie_hors_turquie_mo",
  "g1_origin_turquie_moyen_orient",
] as const;
