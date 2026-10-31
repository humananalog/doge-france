import {
  G1_ORIGIN_BREAK_AFTER_YEARS,
  G1_ORIGIN_SERIES_ORDER,
  getOriginsDecennialSeries,
  ORIGIN_LINE_COLORS,
  ORIGINS_CHART_TITLE,
  ORIGINS_DECENNIAL_BANNER,
} from "@/lib/origins-decennial-series";
import {
  seriesFromRows,
  TimeSeriesChart,
} from "@/components/charts/TimeSeriesChart";

function originPrimarySeries() {
  return G1_ORIGIN_SERIES_ORDER.flatMap((seriesId) => {
    const rows = getOriginsDecennialSeries(seriesId);
    if (rows.length === 0) return [];
    const label = rows[0]!.label_fr.replace(/^G1 — /, "");
    return [
      seriesFromRows(seriesId, label, ORIGIN_LINE_COLORS[seriesId] ?? "#71717a", rows, {
        breakAfterYears: [...G1_ORIGIN_BREAK_AFTER_YEARS],
      }),
    ];
  });
}

export function ImmigrationOriginsDecennialCharts() {
  const g1Stock = getOriginsDecennialSeries("g1_decennial_stock");
  const g1Part = getOriginsDecennialSeries("g1_decennial_part_population");
  const g2Stock = getOriginsDecennialSeries("g2_decennial_stock");
  const g2Part = getOriginsDecennialSeries("g2_decennial_part_population");

  return (
    <section className="space-y-8" aria-labelledby="origins-decennial-heading">
      <div className="rounded-lg border border-sky-200 bg-sky-50/80 px-4 py-3 dark:border-sky-900/50 dark:bg-sky-950/30">
        <p className="text-sm font-medium text-sky-950 dark:text-sky-100">
          {ORIGINS_DECENNIAL_BANNER}
        </p>
      </div>

      <div>
        <h2
          id="origins-decennial-heading"
          className="text-xl font-semibold text-zinc-900 dark:text-zinc-50"
        >
          {ORIGINS_CHART_TITLE}
        </h2>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          La France ne recense pas l&apos;ethnie. Séries = stocks d&apos;immigrés
          (G1) par grande région de naissance INSEE, aux millésimes où une source
          primaire existe — cellules manquantes laissées en lacune (pas
          d&apos;interpolation). Données :{" "}
          <code className="text-xs">
            reports/2026-10-31-origins-decennial/metrics.json
          </code>
          .
        </p>
      </div>

      <TimeSeriesChart
        title="G1 — effectif (milliers) et part de la population · Fig. 1 (1954→2023)"
        description="Rupture de champ documentée : métropole jusqu'en 1982, France hors Mayotte à partir de 1990. Ne pas empiler G2/G3 ni présenter comme heap « base 1950 »."
        primary={[
          seriesFromRows(
            "g1_decennial_stock",
            "Immigrés (G1) — effectif",
            "#0ea5e9",
            g1Stock,
          ),
        ]}
        secondary={[
          seriesFromRows(
            "g1_decennial_part_population",
            "Part des immigrés dans la population (%)",
            "#8b5cf6",
            g1Part,
          ),
        ]}
        annotations={[
          { year: 1990, label: "Champ hors Mayotte (Fig. 1)" },
        ]}
        missingRanges={[
          {
            from: 1950,
            to: 1953,
            label: "1950 — lacune (FAIL pack)",
          },
        ]}
        caption="1954 : 2 293 milliers · 5,4 % → 2023 : 7 174 milliers · 10,6 %. Chaque point : primary_url dans data/stats/immigration/origins-decennial-series.json."
        sourceHint="Source primaire : https://www.insee.fr/fr/statistiques/8242329 (Figure 1)."
      />

      <TimeSeriesChart
        title="G1 — origines géographiques (effectifs, milliers)"
        description="Agrégats INSEE publiés — série longue 6793226 (1968→2021) + ancres PDF + Fig. 2 (2023). Pas de breakout origines en 2020 ; segment rompu après 2013."
        primary={originPrimarySeries()}
        missingRanges={[
          {
            from: 2014,
            to: 2020,
            label: "Lacune origines 2014–2020 (dont 2020 FAIL)",
          },
        ]}
        caption="Nomenclature : « Turquie » (6793226) ≠ « Turquie, Moyen-Orient » (8242329 Fig. 2). Europe du Sud 2008 = somme ES+IT+PT publiée (FPORSOC11). 1962 : parts IMMFRA05d × effectif lorsque applicable."
        sourceHint="Sources : https://www.insee.fr/fr/statistiques/6793226 · https://www.insee.fr/fr/statistiques/8242329 · PDF FPORSOC11/16 · IMMFRA05d."
      />

      {g2Stock.length > 0 && (
        <TimeSeriesChart
          title="G2 — descendants d'immigrés (logement ordinaire · France hors Mayotte)"
          description="Série à partir de 2005 uniquement (6793314 / 8242329 Fig. 3). Ne pas fusionner avec G1 ni G3 sans labels de champ."
          primary={[
            seriesFromRows(
              "g2_decennial_stock",
              "Descendants d'immigrés (G2) — effectif",
              "#059669",
              g2Stock,
            ),
          ]}
          secondary={
            g2Part.length > 0
              ? [
                  seriesFromRows(
                    "g2_decennial_part_population",
                    "Part G2 en logement ordinaire (%)",
                    "#34d399",
                    g2Part,
                  ),
                ]
              : undefined
          }
          missingRanges={[
            {
              from: 1954,
              to: 2004,
              label: "G2 — FAIL avant 2005",
            },
          ]}
          caption="2023 : 8 015 milliers · 12,1 % en logement ordinaire (Fig. 3). Pré-2005 : lacune pack."
          sourceHint="Sources : https://www.insee.fr/fr/statistiques/6793314 · https://www.insee.fr/fr/statistiques/8242329 (Figure 3)."
        />
      )}

      <aside className="rounded-xl border border-zinc-200 bg-zinc-50 p-5 dark:border-zinc-800 dark:bg-zinc-900/60">
        <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
          Onomastique (PASS-LOW) — lien latéral uniquement
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          Marqueur culturel inféré — ne jamais fusionner dans les courbes
          d&apos;origines géographiques ci-dessus.
        </p>
        <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
          Dossier connexe (non fusionné) :{" "}
          <code className="text-xs">reports/2026-10-31-onomastics/</code>
        </p>
      </aside>
    </section>
  );
}
