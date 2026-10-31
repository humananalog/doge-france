"use client";

import { seriesFromRows } from "@/lib/chart-series";
import { TimeSeriesChart } from "@/components/charts/TimeSeriesChart";
import {
  getOnomasticsShareSeries,
  ONOMASTICS_BANNER_FR,
  ONOMASTICS_CHART_BADGE,
  POP_CONTEXT_PROOF_URL,
  PRENOMS_PROOF_URL,
} from "@/lib/onomastics-series";

const CHART_BADGE = ONOMASTICS_CHART_BADGE;

function StudyBadge({ className = "" }: { className?: string }) {
  return (
    <p
      className={`text-xs font-medium uppercase tracking-wide text-amber-900/75 dark:text-amber-200/80 ${className}`}
    >
      {CHART_BADGE}
    </p>
  );
}

export function OnomasticsShareChart() {
  const jean = getOnomasticsShareSeries("onom-jean-classic-boys-share");
  const mohamed = getOnomasticsShareSeries("onom-mohamed-core-boys-share");
  if (jean.length === 0 || mohamed.length === 0) return null;

  return (
    <div>
      <TimeSeriesChart
        title="Parts de faisceaux (garçons), 1946–2025"
        description="Signal onomastique inféré — listes de prénoms définies par le desk, pas une taxonomie INSEE."
        primary={[
          seriesFromRows(
            "onom-jean-classic-boys-share",
            "Faisceau « Jean » classique (% garçons)",
            "#64748b",
            jean,
          ),
          seriesFromRows(
            "onom-mohamed-core-boys-share",
            "Faisceau « Mohamed » noyau (% garçons)",
            "#0d9488",
            mohamed,
          ),
        ]}
        annotations={[
          { year: 1950, label: "Baseline 1950" },
          { year: 2025, label: "2025" },
        ]}
        formatYPrimary={(v) =>
          `${new Intl.NumberFormat("fr-FR", { maximumFractionDigits: 1 }).format(v)} %`
        }
        caption={`${CHART_BADGE} · ${ONOMASTICS_BANNER_FR}`}
        sourceHint={`Source agrégats : ${PRENOMS_PROOF_URL} · Contexte pop. (panneau D) : ${POP_CONTEXT_PROOF_URL}`}
      />
      <StudyBadge className="mt-2" />
    </div>
  );
}
