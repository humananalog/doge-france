/** Guard-PASS waste tiles on homepage — numeric insured losses only (no narrative ordre de grandeur). */
export const WASTE_HOMEPAGE_METRIC_IDS = [
  "waste-emeutes-2023-sinistres-assures",
  "waste-emeutes-2005-sinistres-assures",
] as const;

export type WasteHomepageMetricId = (typeof WASTE_HOMEPAGE_METRIC_IDS)[number];

export function wasteClassLabel(wasteClass: "illegal" | "legal"): string {
  return wasteClass === "illegal" ? "Gaspillage illégal" : "Gaspillage légal";
}
