import type { Metric } from "./types";

export function formatMetricValue(metric: Metric): string {
  if (typeof metric.value === "number") {
    if (metric.unit === "EUR") {
      return new Intl.NumberFormat("fr-FR", {
        style: "currency",
        currency: "EUR",
        maximumFractionDigits: metric.value >= 1_000_000 ? 0 : 2,
      }).format(metric.value);
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
    Armenia: "Arménie",
    Chad: "Tchad",
    France: "France",
    Senegal: "Sénégal",
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
