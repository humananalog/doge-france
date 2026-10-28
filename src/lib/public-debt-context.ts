import { getMetric } from "./registry";
import type { Metric } from "./types";

/**
 * Guard-PASS dette publique metrics (Desk) — when present in metrics.json,
 * the dashboard shows macro debt KPIs and frames policy spend (e.g. AME) vs debt.
 */
export const PUBLIC_DEBT_EUR_METRIC_ID = "macro-dette-publique-eur";
export const PUBLIC_DEBT_PIB_PCT_METRIC_ID = "macro-dette-publique-pib-pct";
export const PUBLIC_DEFICIT_METRIC_ID = "macro-deficit-public-2025";
export const PUBLIC_INTEREST_CHARGE_METRIC_ID =
  "macro-charge-interets-dette-etat-2025";

/** Primary AME policy spend used for flux vs stock / flux vs flux ratios on home. */
export const AME_POLICY_SPEND_RATIO_METRIC_ID = "immig-ame-total-reel-2025";

export type PublicDebtContext =
  | { ready: false }
  | {
      ready: true;
      eur: Metric;
      pibPct: Metric;
      deficit: Metric | undefined;
      interestCharge: Metric | undefined;
    };

export function getPublicDebtContext(): PublicDebtContext {
  const eur = getMetric(PUBLIC_DEBT_EUR_METRIC_ID);
  const pibPct = getMetric(PUBLIC_DEBT_PIB_PCT_METRIC_ID);
  if (!eur || !pibPct) {
    return { ready: false };
  }
  return {
    ready: true,
    eur,
    pibPct,
    deficit: getMetric(PUBLIC_DEFICIT_METRIC_ID),
    interestCharge: getMetric(PUBLIC_INTEREST_CHARGE_METRIC_ID),
  };
}

function numericValue(metric: Metric): number | null {
  if (typeof metric.value === "number") return metric.value;
  const n = Number(metric.value);
  return Number.isFinite(n) ? n : null;
}

/** Flux € vs stock dette € — scale only, not causality. */
export function fluxShareOfDebtStockPct(
  fluxEur: number,
  debtStockEur: number,
): number | null {
  if (
    !Number.isFinite(fluxEur) ||
    !Number.isFinite(debtStockEur) ||
    debtStockEur <= 0
  ) {
    return null;
  }
  return (fluxEur / debtStockEur) * 100;
}

/** Flux € vs flux déficit € — scale only, not causality. */
export function fluxShareOfDeficitPct(
  fluxEur: number,
  deficitFluxEur: number,
): number | null {
  if (
    !Number.isFinite(fluxEur) ||
    !Number.isFinite(deficitFluxEur) ||
    deficitFluxEur <= 0
  ) {
    return null;
  }
  return (fluxEur / deficitFluxEur) * 100;
}

export function formatFluxVsDebtStockLabel(sharePct: number): string {
  return `≈ ${new Intl.NumberFormat("fr-FR", {
    maximumFractionDigits: sharePct < 0.1 ? 2 : 1,
  }).format(sharePct)} % — flux AME vs stock dette (échelle, pas causalité)`;
}

export function formatFluxVsDeficitLabel(sharePct: number): string {
  return `≈ ${new Intl.NumberFormat("fr-FR", {
    maximumFractionDigits: sharePct < 10 ? 1 : 0,
  }).format(sharePct)} % — flux AME vs déficit public (échelle, pas causalité)`;
}

export function formatFluxVsInterestChargeLabel(sharePct: number): string {
  return `≈ ${new Intl.NumberFormat("fr-FR", {
    maximumFractionDigits: 1,
  }).format(sharePct)} % — flux AME vs charge d'intérêts État (échelle, pas causalité)`;
}

export function getAmePolicyRatioLines(debt: Extract<
  PublicDebtContext,
  { ready: true }
>): {
  vsDebtStock: string | null;
  vsDeficit: string | null;
  vsInterest: string | null;
} {
  const ame = getMetric(AME_POLICY_SPEND_RATIO_METRIC_ID);
  if (!ame) {
    return { vsDebtStock: null, vsDeficit: null, vsInterest: null };
  }
  const ameEur = numericValue(ame);
  const debtEur = numericValue(debt.eur);
  if (ameEur == null || debtEur == null) {
    return { vsDebtStock: null, vsDeficit: null, vsInterest: null };
  }
  const vsDebt = fluxShareOfDebtStockPct(ameEur, debtEur);
  const deficitEur = debt.deficit ? numericValue(debt.deficit) : null;
  const vsDef =
    deficitEur != null ? fluxShareOfDeficitPct(ameEur, deficitEur) : null;
  const interestEur = debt.interestCharge
    ? numericValue(debt.interestCharge)
    : null;
  const vsInt =
    interestEur != null ? fluxShareOfDeficitPct(ameEur, interestEur) : null;
  return {
    vsDebtStock:
      vsDebt != null ? formatFluxVsDebtStockLabel(vsDebt) : null,
    vsDeficit: vsDef != null ? formatFluxVsDeficitLabel(vsDef) : null,
    vsInterest:
      vsInt != null ? formatFluxVsInterestChargeLabel(vsInt) : null,
  };
}
