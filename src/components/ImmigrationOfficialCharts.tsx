import {
  AES_PUBLICATION_GAP,
  getImmigrationSeries,
  IRREGULAR_STOCK_DISCLAIMER_FR,
} from "@/lib/immigration-series";
import {
  seriesFromRows,
  TimeSeriesChart,
} from "@/components/charts/TimeSeriesChart";

export function ImmigrationOfficialCharts() {
  const stock = getImmigrationSeries("stock_immigres");
  const stockPart = getImmigrationSeries("stock_immigres_part");
  const soldeMetro = getImmigrationSeries("solde_migratoire_metro");
  const soldeFrance = getImmigrationSeries("solde_migratoire_france");
  const entreesEar = getImmigrationSeries("entrees_immigres_ear");
  const premiersTitres = getImmigrationSeries("premiers_titres_sejour");
  const naturalisations = getImmigrationSeries("naturalisations_annuelles");
  const acquisitions = getImmigrationSeries("acquisitions_nationalite_ensemble");
  const historique = getImmigrationSeries("acquisitions_nationalite_historique");
  const oqtf = getImmigrationSeries("oqtf_prononcees");
  const eloignements = getImmigrationSeries("eloignements_executes");
  const regularisations = getImmigrationSeries("regularisations_annuelles");

  return (
    <section className="space-y-8" aria-labelledby="immig-charts-heading">
      <div>
        <h2
          id="immig-charts-heading"
          className="text-sm font-semibold uppercase tracking-wider text-zinc-500"
        >
          Séries officielles (INSEE, MI-DGEF, Assemblée nationale)
        </h2>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          Graphiques alimentés par{" "}
          <code className="text-xs">data/stats/immigration/series.json</code>{" "}
          — chaque point porte une{" "}
          <code className="text-xs">source_url</code> primaire. Pas
          d&apos;interpolation des lacunes.
        </p>
      </div>

      <TimeSeriesChart
        title="A — Stock d'immigrés (longue durée)"
        description="Personnes nées étrangères à l'étranger résidant en France (recensements puis estimations annuelles). Ce n'est pas un flux d'entrées ni un stock d'irréguliers."
        primary={[
          seriesFromRows(
            "stock_immigres",
            "Effectif des immigrés (stock)",
            "#0ea5e9",
            stock,
          ),
        ]}
        secondary={[
          seriesFromRows(
            "stock_immigres_part",
            "Part des immigrés dans la population (%)",
            "#8b5cf6",
            stockPart,
          ),
        ]}
        annotations={[
          { year: 2014, label: "Mayotte intégrée au champ France" },
          { year: 2024, label: "Rupture de série INSEE" },
        ]}
        caption="Les points 2024–2025 sont provisoires et non directement comparables aux années antérieures (protocole recensement)."
        sourceHint="Sources : INSEE — statistiques 2381757, 6793226 (voir data/stats/immigration/sources.md)."
      />

      <TimeSeriesChart
        title="B — Solde migratoire net"
        description="Estimation indirecte des entrées moins les sorties. Métropole (1946–2020) et France entière (1995–2023, dont années provisoires récentes)."
        primary={[
          seriesFromRows(
            "solde_migratoire_metro",
            "Solde migratoire — France métropolitaine",
            "#059669",
            soldeMetro,
          ),
          seriesFromRows(
            "solde_migratoire_france",
            "Solde migratoire — France entière",
            "#10b981",
            soldeFrance,
            { strokeDasharray: "6 4" },
          ),
        ]}
        showZeroLine
        caption="Solde migratoire NET — entrées moins sorties, pas les entrées légales seules ni les titres de séjour. Pic 1962 : rapatriés d'Algérie."
        sourceHint="Sources : INSEE 6327224, 8242323."
      />

      <TimeSeriesChart
        title="C — Proxies de flux « légaux » récents (concepts distincts)"
        description="Deux séries qui ne mesurent pas la même chose : entrées estimées par enquêtes annuelles de recensement (≥ 1 an) vs premiers titres délivrés aux ressortissants de pays tiers."
        primary={[
          seriesFromRows(
            "entrees_immigres_ear",
            "Entrées d'immigrés (enquêtes EAR, ≥ 1 an)",
            "#2563eb",
            entreesEar,
          ),
          seriesFromRows(
            "premiers_titres_sejour",
            "Premiers titres de séjour (pays tiers, hors renouvellements)",
            "#dc2626",
            premiersTitres,
            { strokeDasharray: "5 3" },
          ),
        ]}
        caption="L'EAR inclut des personnes en séjour irrégulier sans les identifier ; les premiers titres n'incluent ni libre circulation UE ni renouvellements."
        sourceHint="Sources : INSEE IP2051 ; data.gouv titres de séjour (2024)."
      />

      <div className="space-y-6">
        <TimeSeriesChart
          title="D — Naturalisations et acquisitions de nationalité (2008+)"
          description="Naturalisations par décret vs ensemble des acquisitions (décret, déclaration, sans formalité) — définitions INSEE/MI/Justice."
          primary={[
            seriesFromRows(
              "naturalisations_annuelles",
              "Naturalisations par décret",
              "#7c3aed",
              naturalisations,
            ),
            seriesFromRows(
              "acquisitions_nationalite_ensemble",
              "Acquisitions de nationalité (ensemble)",
              "#a78bfa",
              acquisitions,
              { strokeDasharray: "4 4" },
            ),
          ]}
          sourceHint="Source : INSEE 2381644."
        />

        <TimeSeriesChart
          title="D (suite) — Acquisitions de nationalité, série historique 1946–1999"
          description="Série CD-AX1 — ne pas relier visuellement à la définition « ensemble » 2008+ sans marquer la rupture méthodologique."
          primary={[
            seriesFromRows(
              "acquisitions_nationalite_historique",
              "Acquisitions (série historique CD-AX1)",
              "#64748b",
              historique,
            ),
          ]}
          caption="Rupture méthodologique entre cette série et les acquisitions « ensemble » à partir de 2008."
          sourceHint="Source : INSEE CD-AX1 (2118519)."
        />
      </div>

      <div className="rounded-xl border border-amber-200/80 bg-amber-50/50 p-5 dark:border-amber-900/40 dark:bg-amber-950/20">
        <p className="text-sm leading-relaxed text-amber-950 dark:text-amber-100">
          {IRREGULAR_STOCK_DISCLAIMER_FR}
        </p>
      </div>

      <TimeSeriesChart
        title="E — Proxies « irréguliers » (flux administratifs, pas stock 1950→)"
        description="OQTF prononcées, éloignements exécutés et volumes AES / régularisations — séries courtes, sans extrapolation vers le passé."
        primary={[
          seriesFromRows(
            "oqtf_prononcees",
            "OQTF prononcées",
            "#b45309",
            oqtf,
          ),
          seriesFromRows(
            "eloignements_executes",
            "Éloignements exécutés",
            "#ea580c",
            eloignements,
          ),
          seriesFromRows(
            "regularisations_annuelles",
            "Régularisations / AES (admissions exceptionnelles)",
            "#78716c",
            regularisations,
            {
              breakAfterYears: [2013, 2020],
              strokeDasharray: "2 2",
            },
          ),
        ]}
        missingRanges={[
          {
            from: AES_PUBLICATION_GAP.from,
            to: AES_PUBLICATION_GAP.to,
            label: "AES : pas de publication officielle 2014–2020",
          },
        ]}
        caption="Ne pas interpoler la lacune AES 2014–2020. Le taux d'exécution des OQTF n'est pas calculé ici (dénominateurs et délais distincts)."
        sourceHint="Sources : Assemblée nationale (OQTF) ; data.gouv éloignements ; data.gouv 15058 + MI-DSED (AES)."
      />
    </section>
  );
}
