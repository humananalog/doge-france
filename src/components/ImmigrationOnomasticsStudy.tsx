import { getMetric } from "@/lib/registry";
import { ProofLink } from "@/components/ProofLink";
import { OnomasticsShareChart } from "@/components/OnomasticsShareChart";
import {
  ONOMASTICS_BANNER_FR,
  ONOMASTICS_CHART_BADGE,
} from "@/lib/onomastics-series";
import type { Metric } from "@/lib/types";

const CHART_BADGE = ONOMASTICS_CHART_BADGE;

function formatShareDisplay(value: number): string {
  return `${new Intl.NumberFormat("fr-FR", {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  }).format(value)} %`;
}

function formatCountDisplay(value: number): string {
  return new Intl.NumberFormat("fr-FR").format(value);
}

function StudyBadge({ className = "" }: { className?: string }) {
  return (
    <p
      className={`text-xs font-medium uppercase tracking-wide text-amber-900/75 dark:text-amber-200/80 ${className}`}
    >
      {CHART_BADGE}
    </p>
  );
}

function requireNumber(metric: Metric | undefined): number | null {
  if (!metric || typeof metric.value !== "number") return null;
  return metric.value;
}

type BundlePanelProps = {
  title: string;
  share1950Id: string;
  share2025Id: string;
  count1950Id: string;
  count2025Id: string;
  microligne: string;
  footnote?: string;
};

function BundlePanel({
  title,
  share1950Id,
  share2025Id,
  count1950Id,
  count2025Id,
  microligne,
  footnote,
}: BundlePanelProps) {
  const share1950 = requireNumber(getMetric(share1950Id));
  const share2025 = requireNumber(getMetric(share2025Id));
  const count1950 = requireNumber(getMetric(count1950Id));
  const count2025 = requireNumber(getMetric(count2025Id));
  const source = getMetric(share1950Id)?.source;

  if (
    share1950 == null ||
    share2025 == null ||
    count1950 == null ||
    count2025 == null ||
    !source
  ) {
    return null;
  }

  return (
    <article className="rounded-xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900/40">
      <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
        {title}
      </h3>
      <StudyBadge className="mt-2" />
      <p className="mt-3 text-2xl font-semibold tabular-nums text-zinc-950 dark:text-zinc-50">
        {formatShareDisplay(share1950)}
        <span className="mx-2 text-lg font-normal text-zinc-400">→</span>
        {formatShareDisplay(share2025)}
      </p>
      <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
        1950 → 2025 · part des naissances garçons (fichier INSEE)
      </p>
      <p className="mt-3 text-sm tabular-nums text-zinc-700 dark:text-zinc-300">
        Effectifs faisceau : {formatCountDisplay(count1950)}
        <span className="mx-2 text-zinc-400">→</span>
        {formatCountDisplay(count2025)}
      </p>
      <p className="mt-3 text-xs leading-relaxed text-zinc-500">{microligne}</p>
      {footnote ? (
        <p className="mt-2 text-xs leading-relaxed text-zinc-500">{footnote}</p>
      ) : null}
      <ProofLink source={source} className="mt-3" />
    </article>
  );
}

function SinglesTable() {
  const rows = [
    {
      prenom: "JEAN",
      sex: "G",
      y1950: getMetric("onom-single-jean-g-1950"),
      y2025: getMetric("onom-single-jean-g-2025"),
    },
    {
      prenom: "MARIE",
      sex: "F",
      y1950: getMetric("onom-single-marie-f-1950"),
      y2025: getMetric("onom-single-marie-f-2025"),
    },
    {
      prenom: "MOHAMED",
      sex: "G",
      y1950: getMetric("onom-single-mohamed-g-1950"),
      y2025: getMetric("onom-single-mohamed-g-2025"),
    },
  ];

  const source = rows[0].y1950?.source;
  if (!source) return null;

  return (
    <article className="rounded-xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900/40">
      <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
        Singles publiés (cellules INSEE)
      </h3>
      <StudyBadge className="mt-2" />
      <div className="mt-4 overflow-x-auto">
        <table className="w-full min-w-[16rem] text-left text-sm">
          <thead>
            <tr className="border-b border-zinc-200 text-xs uppercase tracking-wide text-zinc-500 dark:border-zinc-700">
              <th className="pb-2 pr-4 font-medium">Prénom</th>
              <th className="pb-2 pr-4 text-right font-medium">1950</th>
              <th className="pb-2 text-right font-medium">2025</th>
            </tr>
          </thead>
          <tbody className="tabular-nums text-zinc-800 dark:text-zinc-200">
            {rows.map((row) => {
              const v1950 = requireNumber(row.y1950);
              const v2025 = requireNumber(row.y2025);
              if (v1950 == null || v2025 == null) return null;
              return (
                <tr
                  key={row.prenom}
                  className="border-b border-zinc-100 dark:border-zinc-800"
                >
                  <td className="py-2 pr-4">
                    {row.prenom}{" "}
                    <span className="text-zinc-400">({row.sex})</span>
                  </td>
                  <td className="py-2 pr-4 text-right">
                    {formatCountDisplay(v1950)}
                  </td>
                  <td className="py-2 text-right">
                    {formatCountDisplay(v2025)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-xs text-zinc-500">
        Cellules directes du fichier des prénoms — non confondues avec les
        faisceaux desk-définis.
      </p>
      <ProofLink source={source} className="mt-3" />
    </article>
  );
}

function PopContextPanel() {
  const p1946 = getMetric("onom-pop-immigres-share-1946");
  const p1954 = getMetric("onom-pop-immigres-share-1954");
  const v1946 = requireNumber(p1946);
  const v1954 = requireNumber(p1954);
  if (v1946 == null || v1954 == null || !p1946?.source) return null;

  return (
    <article className="rounded-xl border border-dashed border-zinc-300 bg-zinc-50 p-5 dark:border-zinc-700 dark:bg-zinc-900/60">
      <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
        Contexte population (seulement)
      </h3>
      <StudyBadge className="mt-2" />
      <p className="mt-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
        Immigrés ~{formatShareDisplay(v1946)} (1946) /{" "}
        {formatShareDisplay(v1954)} (1954) — stock démographique INSEE,{" "}
        <strong className="font-medium">pas</strong> une distribution
        onomastique.
      </p>
      <p className="mt-2 text-xs text-zinc-500">
        Ne pas écrire « 95&nbsp;% de prénoms natifs » — l&apos;INSEE n&apos;a
        pas publié cela.
      </p>
      <ProofLink source={p1946.source} className="mt-3" />
    </article>
  );
}

const INED_PS565_URL =
  "https://www.ined.fr/fr/publications/editions/population-et-societes/quels-prenoms-les-immigres-donnent-ils-a-leurs-enfants";
const INED_PS565_HAL_URL = "https://hal.science/hal-04625724";
const INSEE_IMMIG_STOCK_URL =
  "https://www.insee.fr/fr/statistiques/8242329";

function OnomasticsGroundingNote() {
  return (
    <div className="rounded-xl border border-zinc-200 bg-zinc-50/90 p-5 dark:border-zinc-800 dark:bg-zinc-900/50">
      <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
        Méthode — origine ethnico-religieuse des prénoms (inférée)
      </h3>
      <StudyBadge className="mt-2" />
      <p className="mt-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
        Les faisceaux desk ne sont pas des listes arbitaires : ils regroupent
        des prénoms selon une{" "}
        <strong className="font-medium">association linguistique / religieuse
        inférée</strong> documentée — pas un recensement d&apos;ethnicité ni de
        religion.
      </p>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
        <li>
          <strong className="font-medium">Jean / Marie classique</strong> —
          stock de prénoms chrétiens / d&apos;état civil très fréquents en
          métropole au milieu du XX<sup>e</sup> siècle (calendrier chrétien,
          registres civils).
        </li>
        <li>
          <strong className="font-medium">Mohamed noyau</strong> — anthroponymie
          arabo-musulmane Maghreb–MENA (logique de classe « arabo-musulman »
          INED–Insee TeO,{" "}
          <em>Population &amp; Sociétés</em> n°565, Coulmont &amp; Simon, 2019) :
          parmi les immigrés maghrébins, ~94&nbsp;% portent un prénom classé
          arabo-musulman ; un prénom arabo-musulman désigne une origine
          maghrébine (immigré ou descendant) dans ~82&nbsp;% des cas —{" "}
          <strong className="font-medium">proxies, pas certitude</strong>.
        </li>
      </ul>
      <p className="mt-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
        <strong className="font-medium">Limite dure :</strong> ce grounding
        explique <em>pourquoi</em> un prénom est dans un faisceau — il ne
        transforme pas une part de naissances 2025 en «&nbsp;% maghrébin&nbsp;»
        ou «&nbsp;% musulmans&nbsp;». Rare ≠ impossible ; pas de matrice
        parent×enfant ; pas de religion déclarée déduite du seul prénom.
      </p>
      <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
        Stock d&apos;origine immigrés (Fig.&nbsp;1) : lien séparé vers{" "}
        <a
          href={INSEE_IMMIG_STOCK_URL}
          className="underline decoration-zinc-400 underline-offset-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          INSEE 8242329
        </a>{" "}
        — <strong className="font-medium">ne pas fusionner</strong> avec les
        parts de prénoms ci-dessous.
      </p>
      <p className="mt-3 text-xs leading-relaxed text-zinc-500">
        Sources recherche :{" "}
        <a
          href={INED_PS565_URL}
          className="underline decoration-zinc-400 underline-offset-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          INED Population &amp; Sociétés n°565
        </a>
        {" · "}
        <a
          href={INED_PS565_HAL_URL}
          className="underline decoration-zinc-400 underline-offset-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          HAL hal-04625724
        </a>{" "}
        (miroir si PDF ined.fr indisponible). Toujours inféré ; ≠ part
        musulmans au recensement.
      </p>
    </div>
  );
}

export function ImmigrationOnomasticsStudy() {
  return (
    <section
      className="space-y-6 border-t border-zinc-200 pt-10 dark:border-zinc-800"
      aria-labelledby="onomastics-study-heading"
    >
      <div className="rounded-lg border border-amber-300/80 bg-amber-50 px-4 py-3 dark:border-amber-700/60 dark:bg-amber-950/40">
        <p className="text-sm font-semibold text-amber-950 dark:text-amber-100">
          {ONOMASTICS_BANNER_FR}
        </p>
        <p className="mt-1 text-sm text-amber-900/90 dark:text-amber-200/90">
          Étude onomastique non officielle · signal inféré · agrégats INSEE
          fichier des prénoms. Ne remplace pas les tuiles immigrés / descendants
          (G1/G2/G3).
        </p>
      </div>

      <div>
        <h2
          id="onomastics-study-heading"
          className="text-xl font-semibold text-zinc-900 dark:text-zinc-50"
        >
          Étude onomastique (non officielle)
        </h2>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          Faisceaux illustratifs desk-définis sur le fichier national des
          prénoms — pas un lead KPI démographique, pas un substitut aux
          générations G1–G3 publiées par l&apos;INSEE.
        </p>
      </div>

      <OnomasticsGroundingNote />

      <div className="grid gap-6 lg:grid-cols-2">
        <BundlePanel
          title="Prénoms « Jean » classique — part des naissances garçons"
          share1950Id="onom-jean-classic-boys-share-1950"
          share2025Id="onom-jean-classic-boys-share-2025"
          count1950Id="onom-jean-classic-boys-count-1950"
          count2025Id="onom-jean-classic-boys-count-2025"
          microligne="Somme desk-définie (JEAN, JACQUES, PIERRE, MICHEL, …) ÷ naissances garçons INSEE. Faisceau = prénoms chrétiens / état civil mid-century (association inférée, pas « % français de souche »)."
        />
        <BundlePanel
          title="Prénoms « Mohamed » noyau — part des naissances garçons"
          share1950Id="onom-mohamed-core-boys-share-1950"
          share2025Id="onom-mohamed-core-boys-share-2025"
          count1950Id="onom-mohamed-core-boys-count-1950"
          count2025Id="onom-mohamed-core-boys-count-2025"
          microligne="Classe arabo-musulmane Maghreb–MENA (logique INED P&S n°565) — noyau sans ADAM, RAYAN/RYAN, YANIS, NOAH. Part ≠ origine maghrébine ni religion au recensement."
          footnote="RAYANE est inclus dans le noyau ; RAYAN/RYAN exclus — choix desk documenté."
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <SinglesTable />
        <PopContextPanel />
      </div>

      <OnomasticsShareChart />
    </section>
  );
}
