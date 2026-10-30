import type { Metric } from "./types";

const frNumber = (value: number, maximumFractionDigits: number) =>
  new Intl.NumberFormat("fr-FR", {
    maximumFractionDigits,
    minimumFractionDigits: 0,
  }).format(value);

/** French display for large person counts (charts / KPIs). */
export function formatPersonCompact(value: number): string {
  const abs = Math.abs(value);
  if (abs >= 1_000_000) {
    const scaled = value / 1_000_000;
    const fractionDigits =
      Math.abs(scaled - Math.round(scaled)) < 1e-6 ? 0 : 2;
    return `${frNumber(scaled, fractionDigits)} M`;
  }
  if (abs >= 10_000) {
    const scaled = value / 1_000;
    const fractionDigits =
      Math.abs(scaled - Math.round(scaled)) < 1e-6 ? 0 : 1;
    return `${frNumber(scaled, fractionDigits)} k`;
  }
  return new Intl.NumberFormat("fr-FR").format(value);
}

/** French Md€ / M€ display for large EUR amounts (dashboard KPIs). */
export function formatEurCompact(value: number): string {
  const abs = Math.abs(value);
  const millions = abs / 1_000_000;
  if (abs >= 1_000_000_000 && millions >= 5_000) {
    const scaled = value / 1_000_000_000;
    const fractionDigits =
      Math.abs(scaled - Math.round(scaled)) < 1e-6 ? 0 : 1;
    return `${frNumber(scaled, fractionDigits)} Md€`;
  }
  if (abs >= 1_000_000) {
    const scaled = value / 1_000_000;
    const fractionDigits =
      Math.abs(scaled - Math.round(scaled)) < 1e-6 ? 0 : 1;
    return `${frNumber(scaled, fractionDigits)} M€`;
  }
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: abs >= 1_000 ? 0 : 2,
  }).format(value);
}

export function formatMetricValue(metric: Metric): string {
  if (typeof metric.value === "number") {
    if (metric.unit === "EUR") {
      return formatEurCompact(metric.value);
    }
    if (metric.unit === "percent") {
      return `${new Intl.NumberFormat("fr-FR", {
        maximumFractionDigits: 1,
      }).format(metric.value)} %`;
    }
    if (metric.unit === "count") {
      return new Intl.NumberFormat("fr-FR").format(metric.value);
    }
    return new Intl.NumberFormat("fr-FR").format(metric.value);
  }
  return String(metric.value);
}

export function originBasisLabel(basis: string): string {
  switch (basis) {
    case "stated":
      return "Déclaré";
    case "inferred":
      return "Inféré";
    default:
      return "Inconnu";
  }
}

export function countryLabel(country: string): string {
  if (country === "unknown") return "Inconnu";
  const labels: Record<string, string> = {
    Algeria: "Algérie",
    Armenia: "Arménie",
    Chad: "Tchad",
    France: "France",
    Lebanon: "Liban",
    Senegal: "Sénégal",
    Spain: "Espagne",
    Sudan: "Soudan",
    "United States": "États-Unis",
  };
  return labels[country] ?? country;
}

export function kindLabel(kind: Metric["kind"]): string {
  const map: Record<Metric["kind"], string> = {
    fraud: "Fraude",
    error: "Erreur",
    spend: "Dépense",
    volume: "Volume",
    other: "Autre",
  };
  return map[kind];
}
