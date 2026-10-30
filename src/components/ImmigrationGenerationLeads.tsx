import { getMetric } from "@/lib/registry";
import { formatMetricValue } from "@/lib/format";
import { ProofLink } from "./ProofLink";

/** Affichage ship pack (7,2 M / 8,0 M / 4,8 M) — une décimale. */
function formatMillionsOneDecimal(value: number): string {
  const m = value / 1_000_000;
  return `${new Intl.NumberFormat("fr-FR", {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  }).format(m)} M`;
}

const G1_PART = "g1-immigres-stock-2023-part";
const G1_EFFECTIF = "g1-immigres-stock-2023-effectif";
const G2_PART = "g2-descendants-stock-2023-part";
const G2_EFFECTIF = "g2-descendants-stock-2023-effectif";
const G1_1954_PART = "g1-share-1954-part";
const G3_PART = "g3-petits-enfants-under60-2019-20-part";
const G3_EFFECTIF = "g3-petits-enfants-under60-2019-20-effectif";

function G1LeadTile() {
  const part = getMetric(G1_PART);
  const effectif = getMetric(G1_EFFECTIF);
  if (!part || !effectif || typeof effectif.value !== "number") {
    return null;
  }

  return (
    <div className="rounded-xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900/40">
      <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
        Immigrés
      </h3>
      <p className="mt-2 text-3xl font-semibold tabular-nums tracking-tight text-zinc-950 dark:text-zinc-50">
        {formatMillionsOneDecimal(effectif.value)}
        <span className="mx-2 font-normal text-zinc-400">·</span>
        {formatMetricValue(part)}
      </p>
      <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
        de la population · France hors Mayotte · 2023
      </p>
      <p className="mt-3 text-xs leading-relaxed text-zinc-500">
        Définition INSEE : nés étrangers à l&apos;étranger, résidant en France
        (y compris naturalisés).
      </p>
      <ProofLink source={part.source} className="mt-3" />
      <p className="mt-2 text-xs text-zinc-500">
        Exact : 7 174 milliers · 10,6 % · données provisoires 2023 (Fig. 1).
      </p>
    </div>
  );
}

function G2LeadTile() {
  const part = getMetric(G2_PART);
  const effectif = getMetric(G2_EFFECTIF);
  if (!part || !effectif || typeof effectif.value !== "number") {
    return null;
  }

  return (
    <div className="rounded-xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900/40">
      <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
        Descendants d&apos;immigrés
      </h3>
      <p className="mt-2 text-3xl font-semibold tabular-nums tracking-tight text-zinc-950 dark:text-zinc-50">
        {formatMillionsOneDecimal(effectif.value)}
        <span className="mx-2 font-normal text-zinc-400">·</span>
        {formatMetricValue(part)}
      </p>
      <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
        de la population en logement ordinaire · France hors Mayotte · 2023
      </p>
      <p className="mt-3 text-xs leading-relaxed text-zinc-500">
        Nés en France, au moins un parent immigré. Champ : logement ordinaire
        (enquête Emploi).
      </p>
      <ProofLink source={part.source} className="mt-3" />
      <p className="mt-2 text-xs text-zinc-500">
        Exact : 8 015 milliers · 12,1 % (Fig. 3).
      </p>
    </div>
  );
}

function G1ShareOptionalTile() {
  const part1954 = getMetric(G1_1954_PART);
  const part2023 = getMetric(G1_PART);
  if (!part1954 || !part2023) {
    return null;
  }

  return (
    <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-5 dark:border-zinc-800 dark:bg-zinc-900/60">
      <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
        Part des immigrés
      </h3>
      <p className="mt-2 text-2xl font-semibold tabular-nums text-zinc-950 dark:text-zinc-50">
        {formatMetricValue(part1954)}
        <span className="mx-2 text-lg font-normal text-zinc-400">→</span>
        {formatMetricValue(part2023)}
      </p>
      <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
        même série Fig. 1 · champ : métropole jusqu&apos;en 1982, hors Mayotte à
        partir de 1990
      </p>
      <p className="mt-3 text-xs leading-relaxed text-zinc-500">
        Tuile optionnelle (1954 → 2023). Ne pas empiler G2/G3 ni présenter comme
        heap « base 1950 ».
      </p>
      <ProofLink source={part1954.source} className="mt-3" />
    </div>
  );
}

function G3PassLowPanel() {
  const part = getMetric(G3_PART);
  const effectif = getMetric(G3_EFFECTIF);
  if (!part || !effectif || typeof effectif.value !== "number") {
    return null;
  }

  return (
    <div className="rounded-xl border border-amber-200 bg-amber-50/80 p-5 dark:border-amber-900/60 dark:bg-amber-950/30">
      <p className="text-xs font-semibold uppercase tracking-wider text-amber-900 dark:text-amber-200">
        Panneau PASS-LOW — pas tuile lead
      </p>
      <h3 className="mt-2 text-base font-semibold text-amber-950 dark:text-amber-50">
        Petits-enfants d&apos;immigrés (3ᵉ génération)
      </h3>
      <p className="mt-2 text-2xl font-semibold tabular-nums text-amber-950 dark:text-amber-50">
        {formatMillionsOneDecimal(effectif.value)}
        <span className="mx-2 font-normal text-amber-700 dark:text-amber-300">
          ·
        </span>
        {formatMetricValue(part)}
      </p>
      <p className="mt-2 text-sm font-medium leading-relaxed text-amber-950 dark:text-amber-100">
        des personnes de <strong>moins de 60 ans</strong> en logement ordinaire
        · France métropolitaine · 2019-2020
      </p>
      <p className="mt-3 text-sm leading-relaxed text-amber-950 dark:text-amber-100">
        Nés en France, parents non immigrés, ≥1 grand-parent immigré (TeO2 /
        Emploi). <strong>Pas de chiffre tous âges.</strong> Ne jamais présenter
        10,2 % comme part de toute la population. Ne pas sommer avec G1 ou G2
        sans labels de champ et d&apos;âge.
      </p>
      <ProofLink source={part.source} className="mt-3" />
    </div>
  );
}

export function ImmigrationGenerationLeads() {
  return (
    <section className="space-y-6" aria-labelledby="immig-gen-leads-heading">
      <div>
        <h2
          id="immig-gen-leads-heading"
          className="text-sm font-semibold uppercase tracking-wider text-zinc-500"
        >
          Portrait INSEE — générations d&apos;immigration
        </h2>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          Ship pack INSEE Desk (Evidence Guard PASS) : tuiles lead G1 et G2
          séparées, comparaison optionnelle Fig. 1, panneau G3 sous-60 ans.
          Pas de heap G1+G2+G3 · pas de labels fraude/illégal · tuiles verrouillées
          sur{" "}
          <a
            href="https://www.insee.fr/fr/statistiques/8242329"
            className="underline decoration-zinc-400 underline-offset-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            8242329
          </a>{" "}
          /{" "}
          <a
            href="https://www.insee.fr/fr/statistiques/6793242"
            className="underline decoration-zinc-400 underline-offset-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            6793242
          </a>
          .
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <G1LeadTile />
        <G2LeadTile />
        <G1ShareOptionalTile />
      </div>

      <G3PassLowPanel />
    </section>
  );
}
