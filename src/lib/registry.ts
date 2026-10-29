import statsBundle from "../../data/stats/metrics.json";
import type { Metric } from "./types";

type StatRow = Metric & { proof_url: string };
type StatsFile = { version: 1; metrics: StatRow[] };

const bundle = statsBundle as StatsFile;

export const METRICS: Metric[] = bundle.metrics.map(
  ({ proof_url: _proof, ...metric }) => metric,
);

const metricMap = new Map(METRICS.map((m) => [m.id, m]));

export function getMetric(id: string): Metric | undefined {
  return metricMap.get(id);
}

export function getMetricsByCategory(category: string): Metric[] {
  return METRICS.filter((m) => m.category === category);
}

export function getMetricsByKind(kind: Metric["kind"]): Metric[] {
  return METRICS.filter((m) => m.kind === kind);
}

/** Spend rows tagged waste_class (registry / sources table). */
export function getWasteTaggedMetrics(): Metric[] {
  return METRICS.filter((m) => m.waste_class != null);
}

export function getAllMetrics(): Metric[] {
  return METRICS;
}

export function getHomepageHighlights(): Metric[] {
  const ids = [
    "hcfips-fraude-sociale-evaluee",
    "caf-erreur-residuelle-24m-montant",
    "fiscal-droits-notifies-2025",
    "immig-cout-direct",
    "caf-fraude-detectee-2025",
  ];
  return ids.map((id) => getMetric(id)).filter(Boolean) as Metric[];
}
