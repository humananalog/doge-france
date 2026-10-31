"use client";

import { seriesFromRows } from "@/lib/chart-series";
import { TimeSeriesChart } from "@/components/charts/TimeSeriesChart";
import {
  getOnomasticsCategoriesDecennialSeries,
  INED_PS565_HAL_URL,
  INSEE_PRENOMS_URL,
  ONOM_CATEGORIES_CHART_BADGE,
  ONOM_CATEGORIES_LINE_COLORS,
  ONOM_CATEGORIES_LOW_CONF_SERIES,
  ONOM_CATEGORIES_MEDIUM_CONF_SERIES,
  ONOM_CATEGORIES_SERIES_ORDER,
} from "@/lib/onomastics-categories-decennial-series";

function seriesLabelForChart(seriesId: string, baseLabel: string): string {
  if (ONOM_CATEGORIES_LOW_CONF_SERIES.has(seriesId)) {
    return `${baseLabel} · confiance faible`;
  }
  if (ONOM_CATEGORIES_MEDIUM_CONF_SERIES.has(seriesId)) {
    return `${baseLabel} · confiance moyenne`;
  }
  return baseLabel;
}

function categoryPrimarySeries() {
  return ONOM_CATEGORIES_SERIES_ORDER.flatMap((seriesId) => {
    const rows = getOnomasticsCategoriesDecennialSeries(seriesId);
    if (rows.length === 0) return [];
    const baseLabel = rows[0]!.label_fr;
    const label = seriesLabelForChart(seriesId, baseLabel);
    const opts = ONOM_CATEGORIES_LOW_CONF_SERIES.has(seriesId)
      ? { strokeDasharray: "5 3" as const }
      : undefined;
    return [
      seriesFromRows(
        seriesId,
        label,
        ONOM_CATEGORIES_LINE_COLORS[seriesId] ?? "#71717a",
        rows,
        opts,
      ),
    ];
  });
}

export function OnomasticsCategoriesDecennialChart() {
  return (
    <TimeSeriesChart
      title="Faisceaux culturels — part des naissances (deux sexes, %)"
      description="Une courbe par cluster de prénoms (classe de prénoms / mode onomastique). Maghreb / arabo-musulman = classe INED P&S 565 — ≠ % musulmans. 1950 classiques = hypothèse de référence stock civil mid-century (pas « prénoms natifs »)."
      primary={categoryPrimarySeries()}
      annotations={[
        {
          year: 1950,
          label: "1950 — hypothèse méthode (stock classique)",
        },
      ]}
      formatYPrimary={(v) =>
        `${new Intl.NumberFormat("fr-FR", { maximumFractionDigits: 2 }).format(v)} %`
      }
      caption={`${ONOM_CATEGORIES_CHART_BADGE} · Asie & Slaves : confiance faible (traits discontinus). Afrique hors Maghreb : confiance moyenne, borne basse. Maghreb : RAYANE inclus, RAYAN/RYAN exclus (choix desk). Chaque point : source_url dans data/stats/onomastics/categories-decennial-series.json.`}
      sourceHint={`Agrégats : ${INSEE_PRENOMS_URL} · Grounding : ${INED_PS565_HAL_URL}`}
    />
  );
}
