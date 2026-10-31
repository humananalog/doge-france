import type { SourceRef } from "@/lib/types";
import {
  PROJECTIONS_25PCT_GUARD_BADGE,
  PROJECTIONS_25PCT_GATE_PATH,
  PROJECTIONS_25PCT_PACK_PATH,
  PROJECTIONS_25PCT_SECTION_TITLE,
} from "@/lib/projections-25pct-bounds";
import { ProofLink } from "@/components/ProofLink";

function ExternalProof({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 text-xs text-sky-700 underline decoration-sky-700/40 underline-offset-2 hover:text-sky-900 dark:text-sky-400 dark:hover:text-sky-300"
    >
      <span aria-hidden="true">↗</span>
      {label}
    </a>
  );
}

function DerivedBadge() {
  return (
    <span className="inline-flex rounded-md border border-amber-400/80 bg-amber-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-amber-950 dark:border-amber-700 dark:bg-amber-950/50 dark:text-amber-100">
      Dérivé
    </span>
  );
}

function PewBadge() {
  return (
    <span className="inline-flex rounded-md border border-violet-300/80 bg-violet-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-violet-950 dark:border-violet-800 dark:bg-violet-950/40 dark:text-violet-100">
      Pew · non officiel FR
    </span>
  );
}

function StudyTile({
  tileIndex,
  title,
  badge,
  children,
  micro,
  proofs,
  variant = "default",
}: {
  tileIndex: number;
  title: string;
  badge?: React.ReactNode;
  children: React.ReactNode;
  micro?: string;
  proofs?: { href: string; label: string }[];
  variant?: "default" | "lead" | "fail";
}) {
  const borderClass =
    variant === "fail"
      ? "border-rose-300 dark:border-rose-900/60"
      : variant === "lead"
        ? "border-slate-300 dark:border-slate-700"
        : "border-zinc-200 dark:border-zinc-800";

  const bgClass =
    variant === "fail"
      ? "bg-rose-50/80 dark:bg-rose-950/25"
      : variant === "lead"
        ? "bg-white dark:bg-zinc-900/50"
        : "bg-white dark:bg-zinc-900/40";

  return (
    <article
      className={`flex h-full flex-col rounded-xl border p-5 ${borderClass} ${bgClass}`}
      aria-labelledby={`proj-25-tile-${tileIndex}-title`}
    >
      <p className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500">
        Tuile {tileIndex}
      </p>
      <div className="mt-1 flex flex-wrap items-center gap-2">
        <h3
          id={`proj-25-tile-${tileIndex}-title`}
          className="text-base font-semibold text-zinc-900 dark:text-zinc-50"
        >
          {title}
        </h3>
        {badge}
      </div>
      <div className="mt-3 flex-1 space-y-2 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
        {children}
      </div>
      {micro ? (
        <p className="mt-3 text-[11px] font-medium leading-snug text-amber-900 dark:text-amber-200">
          {micro}
        </p>
      ) : null}
      {proofs && proofs.length > 0 ? (
        <div className="mt-4 flex flex-col gap-1.5">
          {proofs.map((p) => (
            <ExternalProof key={p.href} href={p.href} label={p.label} />
          ))}
        </div>
      ) : null}
    </article>
  );
}

const INSEE_PROJECTIONS: SourceRef = {
  title: "INSEE — Projections de population 2026",
  url: "https://www.insee.fr/fr/statistiques/8991068",
  publisher: "INSEE",
};

export function ImmigrationProjections25PctBounds() {
  return (
    <section
      className="space-y-6 border-t border-zinc-200 pt-10 dark:border-zinc-800"
      aria-labelledby="projections-25pct-bounds-heading"
    >
      <div className="rounded-lg border border-slate-400/60 bg-slate-100/90 px-4 py-3 dark:border-slate-600 dark:bg-slate-950/50">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-800 dark:text-slate-200">
          {PROJECTIONS_25PCT_GUARD_BADGE}
        </p>
        <p className="mt-1 text-sm font-medium text-slate-900 dark:text-slate-100">
          {PROJECTIONS_25PCT_SECTION_TITLE}
        </p>
        <p className="mt-2 text-xs leading-relaxed text-slate-700 dark:text-slate-300">
          Pack desk ·{" "}
          <code className="text-[11px]">{PROJECTIONS_25PCT_PACK_PATH}</code> ·
          gate{" "}
          <code className="text-[11px]">{PROJECTIONS_25PCT_GATE_PATH}</code>.
          Soft-hold : pas d&apos;année « ethnie / musulmans → 25&nbsp;% » en
          fait · Pew ≠ INSEE · TeO2 18–59 uniquement · floors dérivés étiquetés.
        </p>
      </div>

      <div>
        <h2
          id="projections-25pct-bounds-heading"
          className="text-xl font-semibold text-zinc-900 dark:text-zinc-50"
        >
          {PROJECTIONS_25PCT_SECTION_TITLE}
        </h2>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          Recomposition de bornes à partir de stocks publiés, naissances mère,
          déclaration TeO2 et scénarios étiquetés — pas une projection ethnique
          officielle.
        </p>
      </div>

      <StudyTile
        tileIndex={0}
        title="Pas de série officielle « ethnie / musulmans → 25 % »"
        variant="lead"
        micro="Soft-hold · inventer une année 25 % ethnie/islam = FAIL"
        proofs={[
          {
            href: "https://www.insee.fr/fr/statistiques/8991068",
            label: "INSEE 8991068 — projections population totale",
          },
        ]}
      >
        <p>
          L&apos;INSEE et l&apos;INED <strong>ne projettent pas</strong> une part
          ethnique ni une part musulmane tous âges. Les projections INSEE 2026
          portent sur la <strong>population totale</strong> (fécondité,
          mortalité, solde migratoire) jusqu&apos;en 2070 — sans ventilation
          immigrés / descendants / religion.
        </p>
      </StudyTile>

      <div className="grid gap-6 md:grid-cols-2">
        <StudyTile
          tileIndex={1}
          title="Immigrés et descendants — stocks actuels"
          proofs={[
            {
              href: "https://www.insee.fr/fr/statistiques/8242329",
              label: "INSEE 8242329",
            },
            {
              href: "https://www.insee.fr/fr/statistiques/8612512",
              label: "INSEE 8612512",
            },
          ]}
        >
          <ul className="list-none space-y-2 tabular-nums">
            <li>
              Immigrés (G1) 2023 : <strong>10,6&nbsp;%</strong> (7 174 k) ·
              France hors Mayotte
            </li>
            <li>
              Immigrés (G1) 2024 : <strong>11,2&nbsp;%</strong> (7 615 k) ·
              provisoire
            </li>
            <li>
              Descendants (G2) 2023 : <strong>12,1&nbsp;%</strong> ·{" "}
              <strong>logement ordinaire</strong> (8 015 k)
            </li>
            <li>
              Descendants (G2) 2024 : <strong>12&nbsp;%</strong> · logement
              ordinaire (7 987 k)
            </li>
          </ul>
          <p className="mt-3 text-xs font-medium text-zinc-600 dark:text-zinc-400">
            Sous-titre G2 : de la population en logement ordinaire · France hors
            Mayotte
          </p>
        </StudyTile>

        <StudyTile
          tileIndex={2}
          title="Maghreb + Turquie / Moyen-Orient — G1+G2 (borne, dérivé)"
          badge={<DerivedBadge />}
          proofs={[
            {
              href: "https://www.insee.fr/fr/statistiques/8242329",
              label: "INSEE 8242329 (Fig. 2 & 3)",
            },
          ]}
        >
          <p className="tabular-nums">
            2023 — G1 2 091 k + 395 k ; G2 2 597 k + 380 k →{" "}
            <strong>≈ 5 463 k</strong> ≈ <strong>~8,1&nbsp;%</strong> de la
            population (<strong>dérivé</strong>, champ G1/G2 mixte).
          </p>
          <p className="mt-2 text-xs italic text-zinc-600 dark:text-zinc-400">
            Ce n&apos;est pas : une ethnie · une part musulmane · une projection.
          </p>
        </StudyTile>

        <StudyTile
          tileIndex={3}
          title="Naissances selon pays de naissance de la mère"
          badge={<DerivedBadge />}
          proofs={[
            {
              href: "https://www.insee.fr/fr/statistiques/8582134",
              label: "INSEE 8582134 — T38BIS",
            },
          ]}
        >
          <p className="text-xs font-medium text-zinc-500">
            Lignes 2024 (France, T38BIS) :
          </p>
          <ul className="mt-2 list-none space-y-1 tabular-nums">
            <li>
              Mère née Maghreb (DZ+MA+TN) :{" "}
              <strong>7,86&nbsp;%</strong> des naissances
            </li>
            <li>
              Mère née Maghreb ou Turquie : <strong>8,49&nbsp;%</strong>
            </li>
          </ul>
          <p className="mt-3 text-xs text-zinc-600 dark:text-zinc-400">
            Ne mesure pas les mères G2 nées en France ; pas la religion.
          </p>
        </StudyTile>

        <StudyTile
          tileIndex={4}
          title="Islam déclaré · 18–59 ans · TeO2 2019-2020"
          proofs={[
            {
              href: "https://www.insee.fr/fr/statistiques/6793308",
              label: "INSEE 6793308 — TeO2",
            },
          ]}
        >
          <p className="text-2xl font-semibold tabular-nums text-zinc-950 dark:text-zinc-50">
            10&nbsp;%
          </p>
          <p className="text-xs text-zinc-600 dark:text-zinc-400">
            France métropolitaine, logement ordinaire
          </p>
          <p className="mt-2 tabular-nums">
            Contexte : Catholiques 29&nbsp;% · sans religion 51&nbsp;%
          </p>
          <p className="mt-3 rounded-md border border-sky-200 bg-sky-50 px-2 py-1.5 text-[11px] font-medium leading-snug text-sky-950 dark:border-sky-900/50 dark:bg-sky-950/40 dark:text-sky-100">
            Interdit UI : présenter 10&nbsp;% comme part tous âges ou comme
            projection 2050.
          </p>
        </StudyTile>
      </div>

      <StudyTile
        tileIndex={5}
        title="Projections publiées — hors « ethnie 25 % »"
        proofs={[
          {
            href: "https://www.insee.fr/fr/statistiques/8991068",
            label: "INSEE 8991068",
          },
          {
            href: "https://www.ined.fr/sites/default/files/imported_images/558.population.societes.migration.subsaharienne.europe.fr.pdf",
            label: "Héran / INED Pop & Soc 558 (PDF)",
          },
          {
            href: "https://www.pewresearch.org/religion/2017/11/29/europes-growing-muslim-population/",
            label: "Pew 2017 — Europe’s Growing Muslim Population",
          },
        ]}
      >
        <ul className="list-none space-y-3">
          <li>
            <strong>INSEE 2026</strong> → pop totale 2070 ; solde migratoire
            +70 / +150 / +230 k · <strong>pas</strong> de part
            immigrés/descendants
          </li>
          <li>
            <strong>Héran / INED Pop &amp; Soc 558</strong>{" "}
            <span className="text-xs text-zinc-500">(≠ INSEE)</span> → immigrés
            Afrique du Nord France <strong>~5,3&nbsp;%</strong> en 2050 (G1
            seule) · subsahariens <strong>~2,9&nbsp;%</strong> ·{" "}
            <strong>≠ 25&nbsp;%</strong>
          </li>
          <li className="flex flex-wrap items-start gap-2">
            <PewBadge />
            <span>
              <strong>Pew 2017</strong>{" "}
              <em>(non officiel FR)</em> → musulmans France 2050 :{" "}
              <strong>12,7&nbsp;% / 17,4&nbsp;% / 18,0&nbsp;%</strong> (zéro /
              moyen / haut) · <strong>aucun scénario ≠ 25&nbsp;%</strong>
            </span>
          </li>
        </ul>
      </StudyTile>

      <StudyTile
        tileIndex={6}
        title="Pour approcher ~25 % — bornes d’hypothèses (dérivé)"
        badge={
          <span className="inline-flex rounded-md border border-amber-500/70 bg-amber-200/80 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-amber-950 dark:border-amber-600 dark:bg-amber-900/60 dark:text-amber-50">
            DERIVED · soft-hold Guard
          </span>
        }
      >
        <ul className="list-none space-y-3">
          <li>
            <strong>Géo Maghreb+Turquie/MO :</strong> floor ~8&nbsp;% ;
            naissances mère Maghreb/Turquie ~8,5&nbsp;%. Une convergence vers
            25&nbsp;% exigerait une contribution durable naissances+migrations{" "}
            <strong>≈ 3×</strong> le niveau actuel de naissances mère
            Maghreb/Turquie — <strong>hors continuation observée</strong>. Pas
            d&apos;année officielle.
          </li>
          <li>
            <strong>Déclaration musulmane :</strong> Pew haut ={" "}
            <strong>18&nbsp;%</strong> en 2050 — encore{" "}
            <strong>−7 pts</strong> sous 25&nbsp;%. Tout prolongement au-delà ={" "}
            <strong>scénario dérivé illustratif</strong>, jamais « sera 25&nbsp;%
            en année Y ».
          </li>
        </ul>
      </StudyTile>

      <StudyTile tileIndex={7} title="Ce que ce pack refuse" variant="fail">
        <ul className="list-disc space-y-2 pl-5 text-sm">
          <li>Inventer « l&apos;ethnie / les musulmans à 25&nbsp;% en YEAR »</li>
          <li>Présenter Pew ou Héran comme statistique INSEE</li>
          <li>Interpoler une année manquante</li>
          <li>Sommer G1+G2+religion sans labels de champ</li>
        </ul>
      </StudyTile>

      <p className="text-xs text-zinc-500">
        Chaîne source → tuiles :{" "}
        <code className="text-[11px]">
          {PROJECTIONS_25PCT_PACK_PATH}tiles-fr.md
        </code>
        . Lead INSEE population totale :{" "}
        <ProofLink source={INSEE_PROJECTIONS} className="text-xs" />
      </p>
    </section>
  );
}
