import seriesBundle from "../../data/stats/immigration/series.json";
import type { ImmigrationSeriesPoint } from "../../schemas/immigration-series.schema";

const points = seriesBundle as ImmigrationSeriesPoint[];

const bySeries = new Map<string, ImmigrationSeriesPoint[]>();

for (const p of points) {
  const list = bySeries.get(p.series_id) ?? [];
  list.push(p);
  bySeries.set(p.series_id, list);
}

for (const list of bySeries.values()) {
  list.sort((a, b) => a.year - b.year);
}

export function getImmigrationSeries(
  seriesId: string,
): ImmigrationSeriesPoint[] {
  return bySeries.get(seriesId) ?? [];
}

export function getImmigrationSeriesIds(): string[] {
  return [...bySeries.keys()].sort();
}

export const IRREGULAR_STOCK_DISCLAIMER_FR =
  "Il n'existe pas de série officielle continue du « nombre total d'immigrés illégaux » en France de 1950 à aujourd'hui. Les proxies ci-dessous (OQTF, éloignements, AES) mesurent des actes administratifs / flux, pas un stock.";

/** AES régularisations: no official points 2014–2020 — do not interpolate. */
export const AES_PUBLICATION_GAP = { from: 2014, to: 2020 } as const;
