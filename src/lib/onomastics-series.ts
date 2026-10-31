import shareBundle from "../../data/stats/onomastics/share-series.json";
import type { ImmigrationSeriesPoint } from "../../schemas/immigration-series.schema";

const points = shareBundle as ImmigrationSeriesPoint[];

const bySeries = new Map<string, ImmigrationSeriesPoint[]>();

for (const p of points) {
  const list = bySeries.get(p.series_id) ?? [];
  list.push(p);
  bySeries.set(p.series_id, list);
}

for (const list of bySeries.values()) {
  list.sort((a, b) => a.year - b.year);
}

export function getOnomasticsShareSeries(
  seriesId: string,
): ImmigrationSeriesPoint[] {
  return bySeries.get(seriesId) ?? [];
}

export const ONOMASTICS_BANNER_FR =
  "Étude non officielle — signal onomastique inféré — source INSEE agrégats";

export const ONOMASTICS_CHART_BADGE =
  "étude non officielle · inferred cultural marker";

export const PRENOMS_PROOF_URL =
  "https://www.insee.fr/fr/statistiques/8595130";

export const POP_CONTEXT_PROOF_URL =
  "https://www.insee.fr/fr/statistiques/8242329";
