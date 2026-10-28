import { getMetric } from "./registry";
import type { Metric } from "./types";

/**
 * Guard-PASS dette publique metrics (Desk) — when present in metrics.json,
 * the dashboard shows macro debt KPIs and frames policy spend (e.g. AME) vs debt.
 */
export const PUBLIC_DEBT_EUR_METRIC_ID = "macro-dette-publique-eur";
export const PUBLIC_DEBT_PIB_PCT_METRIC_ID = "macro-dette-publique-pib-pct";

/** Policy spend rows surfaced on the home dashboard once debt context is ready. */
export const POLICY_SPEND_VS_DEBT_METRIC_IDS = [
  "immig-ame-total-reel-2025",
  "immig-ame-droit-commun-depense-2025",
] as const;

export type PublicDebtContext =
  | { ready: false }
  | {
      ready: true;
      eur: Metric;
      pibPct: Metric;
    };

export function getPublicDebtContext(): PublicDebtContext {
  const eur = getMetric(PUBLIC_DEBT_EUR_METRIC_ID);
  const pibPct = getMetric(PUBLIC_DEBT_PIB_PCT_METRIC_ID);
  if (!eur || !pibPct) {
    return { ready: false };
  }
  return { ready: true, eur, pibPct };
}

/** Share of outstanding debt (EUR stock), when both values are EUR numbers. */
export function spendShareOfDebtEur(
  spendEur: number,
  debtEur: number,
): number | null {
  if (!Number.isFinite(spendEur) || !Number.isFinite(debtEur) || debtEur <= 0) {
    return null;
  }
  return (spendEur / debtEur) * 100;
}

export function formatShareOfDebtPct(share: number): string {
  return `${new Intl.NumberFormat("fr-FR", {
    maximumFractionDigits: share < 0.01 ? 4 : 3,
  }).format(share)} % de la dette publique (stock €)`;
}
