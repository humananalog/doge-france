/** Guard-PASS illegal waste tiles on homepage — numeric insured losses only (no narrative ordre de grandeur). */
export const WASTE_ILLEGAL_HOMEPAGE_METRIC_IDS = [
  "waste-emeutes-2023-sinistres-assures",
  "waste-emeutes-2005-sinistres-assures",
] as const;

/** @deprecated use WASTE_ILLEGAL_HOMEPAGE_METRIC_IDS */
export const WASTE_HOMEPAGE_METRIC_IDS = WASTE_ILLEGAL_HOMEPAGE_METRIC_IDS;

export type WasteIllegalHomepageMetricId =
  (typeof WASTE_ILLEGAL_HOMEPAGE_METRIC_IDS)[number];

/** Desk gaspillage légal — primary KPI tiles (never summed together). */
export const LEGAL_WASTE_PRIMARY_TILE_IDS = [
  "waste-legal-iai-financements-associations-2023",
  "immig-ame-total-reel-2025",
] as const;

/** Mission IAI exécution — separate non-additive tiles (not « ONG »). */
export const LEGAL_WASTE_MISSION_EXECUTION_TILE_IDS = [
  "waste-legal-iai-mission-execution-2023",
  "waste-legal-iai-mission-execution-2024",
] as const;

/** Tab.7 detail lines — components of financements associations total only. */
export const LEGAL_WASTE_ASSOCIATIONS_BREAKDOWN_IDS = [
  "waste-legal-iai-associations-p303-2023",
  "waste-legal-iai-associations-p104-2023",
] as const;

export const LEGAL_WASTE_ASSOCIATIONS_TOTAL_ID =
  "waste-legal-iai-financements-associations-2023";

/** All legal-waste dashboard tile ids (for CI guard — must stay non-additive). */
export const LEGAL_WASTE_ALL_TILE_IDS = [
  ...LEGAL_WASTE_PRIMARY_TILE_IDS,
  ...LEGAL_WASTE_MISSION_EXECUTION_TILE_IDS,
] as const;

export function wasteClassLabel(wasteClass: "illegal" | "legal"): string {
  return wasteClass === "illegal" ? "Gaspillage illégal" : "Gaspillage légal";
}
