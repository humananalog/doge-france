import { CAF_CASES } from "./cases";
import { formatEurCompact, kindLabel } from "./format";
import { getMetric } from "./registry";
import type { CafCase, MetricKind, SourceRef } from "./types";

export type EconomyReceipt = {
  caseId: string;
  title: string;
  summary: string;
  amountLabel: string;
  /** Numeric € from registre when present — used for transparent total only. */
  amountEur: number | null;
  kind: MetricKind;
  kindLabelFr: string;
  proof: SourceRef;
  date: string;
  courtOrBodyFr: string;
};

function primaryProof(c: CafCase): SourceRef | undefined {
  if (c.sources[0]) return c.sources[0];
  const url = c.proof_urls[0];
  if (!url) return undefined;
  return { title: "Preuve primaire", url, publisher: c.court_or_body_fr };
}

function receiptTitle(c: CafCase): string {
  if (c.amount_metric_id) {
    const metric = getMetric(c.amount_metric_id);
    if (metric?.label_fr) return metric.label_fr;
  }
  return `${c.court_or_body_fr} (${c.date})`;
}

function caseKind(c: CafCase): MetricKind {
  if (c.amount_metric_id) {
    const metric = getMetric(c.amount_metric_id);
    if (metric?.kind === "error" || metric?.kind === "fraud") {
      return metric.kind;
    }
  }
  return "fraud";
}

export function getEconomyReceipts(): EconomyReceipt[] {
  return CAF_CASES.map((c) => {
    const proof = primaryProof(c);
    if (!proof) {
      throw new Error(`Case ${c.case_id} missing primary proof URL`);
    }

    let amountLabel = c.amount_display_fr;
    let amountEur: number | null = null;

    if (c.amount_metric_id) {
      const metric = getMetric(c.amount_metric_id);
      if (metric && typeof metric.value === "number" && metric.unit === "EUR") {
        amountLabel = formatEurCompact(metric.value);
        amountEur = metric.value;
      }
    }

    const kind = caseKind(c);

    return {
      caseId: c.case_id,
      title: receiptTitle(c),
      summary: c.scheme_type_fr,
      amountLabel,
      amountEur,
      kind,
      kindLabelFr: kindLabel(kind),
      proof,
      date: c.date,
      courtOrBodyFr: c.court_or_body_fr,
    };
  }).sort((a, b) => (b.amountEur ?? -1) - (a.amountEur ?? -1));
}

export function sumReceiptsWithNumericProof(receipts: EconomyReceipt[]): number {
  return receipts.reduce((sum, r) => sum + (r.amountEur ?? 0), 0);
}

export function countReceiptsWithNumericProof(receipts: EconomyReceipt[]): number {
  return receipts.filter((r) => r.amountEur != null).length;
}
