import pack from "../../reports/2026-10-31-aides-nationalite/metrics.json";
import type { SourceRef } from "@/lib/types";

type AscendanceCell = {
  label: string;
  value: number;
  optional?: boolean;
};

type PackMetric = {
  metric_id: string;
  name: string;
  definition?: string;
  definition_scope?: string;
  year?: number | null;
  value?: number;
  value_eur_uc?: number;
  unit?: string;
  primary_url: string;
  gate: string;
  cells?: AscendanceCell[];
  count_foyers?: string;
  spend_total_mdeur?: number;
  beneficiaires_approx?: number;
  companion_eee_ch_pct?: number;
  related_url?: string;
  optional?: boolean;
};

export type AidesPackCell = {
  id: string;
  label: string;
  value: number;
  unit: string;
  source_url: string;
  eur_uc?: number;
  optional?: boolean;
};

export type AidesLegalSpendTile = {
  id: string;
  title: string;
  headline: string;
  subtitle: string;
  microligne: string;
  primary_url: string;
  gate: string;
};

export const AIDES_GATE_FILE = pack.gate_file;
export const AIDES_GATE_VERDICT = pack.gate;
export const AIDES_REPORT_PATH =
  "reports/2026-10-31-aides-nationalite/metrics.json";

export const AIDES_PRIMARY_URL_F18 =
  "https://www.insee.fr/fr/statistiques/7941405?sommaire=7941491";
export const AIDES_PRIMARY_URL_2019 =
  "https://www.insee.fr/fr/statistiques/6793278?sommaire=6793391";

export const AIDES_CHAMP_F18 =
  "France métropolitaine, ERFS 2021 · prestations non contributives (famille, logement, minima, prime d'activité, bruts CRDS) · hors pensions / chômage";

export const AIDES_BANNER =
  "Evidence Guard PASS · immigrés / nés en Afrique / hors UE-EEE · pas Maghreb / Muslim / ethnie · pas fraude";

export const AIDES_PANEL_TITLE =
  "Prestations non contributives · part du niveau de vie (ERFS 2021)";

export const AIDES_ONE_LINER =
  "En 2021, les prestations non contributives représentaient 11,1 % du niveau de vie des immigrés contre 5,6 % pour les non-immigrés ; 16,4 % pour les immigrés nés en Afrique (continent) — INSEE. Ce n'est pas une statistique religieuse, ni une part du budget CAF, ni de la fraude.";

export const AIDES_SOURCE_F18: SourceRef = {
  title: "INSEE RPM2024-F18 — Prestations et niveau de vie (ERFS 2021)",
  url: AIDES_PRIMARY_URL_F18,
  publisher: "INSEE",
};

export const AIDES_SOURCE_2019: SourceRef = {
  title: "INSEE — Prestations et ascendance migratoire (ERFS 2019)",
  url: AIDES_PRIMARY_URL_2019,
  publisher: "INSEE",
};

function metric(id: string): PackMetric | undefined {
  return (pack.metrics as PackMetric[]).find((m) => m.metric_id === id);
}

function nddCell(
  metricId: string,
  label: string,
  optional?: boolean,
): AidesPackCell | undefined {
  const m = metric(metricId);
  if (!m || m.value == null) return undefined;
  return {
    id: metricId,
    label,
    value: m.value,
    unit: m.unit ?? "% du niveau de vie",
    source_url: m.primary_url,
    eur_uc: m.value_eur_uc,
    optional,
  };
}

/** Lead ERFS 2021 F18 rows (tuiles 1–3). */
export function getAidesF18LeadCells(): AidesPackCell[] {
  return [
    nddCell("prest_ndd_immigres_2021", "Immigrés"),
    nddCell("prest_ndd_non_immigres_2021", "Non-immigrés"),
    nddCell("prest_ndd_immigres_afrique_2021", "Immigrés nés en Afrique"),
  ].filter((c): c is AidesPackCell => c != null);
}

/** Prior-year ascendance context (tuile contexte 2019). */
export function getAidesAscendance2019Cells(includeOptional = true): AidesPackCell[] {
  const m = metric("prest_ndd_ascendance_2019");
  if (!m?.cells) return [];
  return m.cells
    .filter((c) => includeOptional || !c.optional)
    .map((c, i) => ({
      id: `prest-ascendance-2019-${i}`,
      label: c.label,
      value: c.value,
      unit: m.unit ?? "% du niveau de vie",
      source_url: m.primary_url,
      optional: c.optional,
    }));
}

/** @deprecated Use getAidesF18LeadCells — kept for bar max helpers. */
export function getAidesCells(includeOptional = true): AidesPackCell[] {
  return [...getAidesF18LeadCells(), ...getAidesAscendance2019Cells(includeOptional)];
}

export function getAidesCoreCells(): AidesPackCell[] {
  return getAidesF18LeadCells();
}

export function getAidesGeoOptionalCells(): AidesPackCell[] {
  return [];
}

export function getAidesLegalSpendTiles(): AidesLegalSpendTile[] {
  const rsa = metric("rsa_hors_ue_eee_foyers_2022");
  const af = metric("af_hors_eee_beneficiaires_2013");
  const tiles: AidesLegalSpendTile[] = [];

  if (rsa?.value != null) {
    tiles.push({
      id: rsa.metric_id,
      title: "RSA · foyers hors UE/EEE",
      headline: `${rsa.value.toLocaleString("fr-FR", { minimumFractionDigits: 1, maximumFractionDigits: 1 })} %`,
      subtitle: `Responsable de dossier · 30 juin ${rsa.year} · ${rsa.count_foyers ?? "<300 000"} foyers`,
      microligne:
        rsa.definition_scope ??
        "Nationalité du responsable — pas « immigrés » (naturalisés = Français). Pas Maghreb.",
      primary_url: rsa.primary_url,
      gate: rsa.gate,
    });
  }

  if (af?.value != null) {
    const spend =
      af.spend_total_mdeur != null ? `${af.spend_total_mdeur} Md€` : "12,4 Md€";
    const benef =
      af.beneficiaires_approx != null
        ? `~${(af.beneficiaires_approx / 1_000_000).toLocaleString("fr-FR")} M`
        : "~5 M";
    tiles.push({
      id: af.metric_id,
      title: "Allocations familiales · hors EEE",
      headline: `~${af.value} %`,
      subtitle: `31 déc. ${af.year} · ${benef} bénéficiaires · ${spend} total AF`,
      microligne:
        "% de bénéficiaires (pas €). Hors EEE = monde hors EEE — ≠ Maghreb. EEE+CH ~2 %.",
      primary_url: af.primary_url,
      gate: af.gate,
    });
  }

  return tiles;
}
