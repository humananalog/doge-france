"use client";

import { ProofLink } from "@/components/ProofLink";
import {
  AIDES_BANNER,
  AIDES_CHAMP,
  AIDES_GATE_FILE,
  AIDES_GATE_VERDICT,
  AIDES_PANEL_TITLE,
  AIDES_PRIMARY_URL,
  AIDES_REPORT_PATH,
  AIDES_SOURCE,
  AIDES_YEAR,
  getAidesCells,
  getAidesCoreCells,
  getAidesGeoOptionalCells,
} from "@/lib/aides-nationalite-pack";
import {
  FERTILITY_BANNER,
  FERTILITY_CHAMP,
  FERTILITY_ENSEMBLE_ICF_2021,
  FERTILITY_GATE_FILE,
  FERTILITY_GATE_VERDICT,
  FERTILITY_NOTES,
  FERTILITY_PANEL_TITLE,
  FERTILITY_PRIMARY_URL,
  FERTILITY_REPORT_PATH,
  FERTILITY_SOURCE,
  FERTILITY_YEAR,
  getFertilityCells,
} from "@/lib/fertility-origin-pack";

function formatIcf(value: number): string {
  return new Intl.NumberFormat("fr-FR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

function formatPctWhole(value: number): string {
  return `${new Intl.NumberFormat("fr-FR", {
    maximumFractionDigits: 0,
  }).format(value)} %`;
}

type BarRowProps = {
  label: string;
  value: number;
  max: number;
  display: string;
  accent?: string;
  sublabel?: string;
};

function BarRow({
  label,
  value,
  max,
  display,
  accent = "bg-sky-600 dark:bg-sky-500",
  sublabel,
}: BarRowProps) {
  const width = max > 0 ? Math.min(100, (value / max) * 100) : 0;
  return (
    <div className="space-y-1.5">
      <div className="flex items-baseline justify-between gap-3 text-sm">
        <div>
          <p className="font-medium text-zinc-800 dark:text-zinc-200">{label}</p>
          {sublabel ? (
            <p className="text-xs text-zinc-500 dark:text-zinc-400">{sublabel}</p>
          ) : null}
        </div>
        <p className="shrink-0 tabular-nums font-semibold text-zinc-950 dark:text-zinc-50">
          {display}
        </p>
      </div>
      <div
        className="h-2.5 overflow-hidden rounded-full bg-zinc-100 dark:bg-zinc-800"
        role="img"
        aria-label={`${label} : ${display}`}
      >
        <div
          className={`h-full rounded-full ${accent}`}
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
}

function PassLowBadge({
  verdict,
  gateFile,
}: {
  verdict: string;
  gateFile: string;
}) {
  return (
    <p className="text-xs font-medium uppercase tracking-wide text-emerald-900/80 dark:text-emerald-200/90">
      Evidence Guard · {verdict} ·{" "}
      <code className="text-[10px] normal-case">{gateFile}</code>
    </p>
  );
}

function FertilityPanel() {
  const core = getFertilityCells(false);
  const optional = getFertilityCells(true).filter((c) => c.optional);
  const max = Math.max(...getFertilityCells(true).map((c) => c.value));

  return (
    <article className="rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/40">
      <PassLowBadge verdict={FERTILITY_GATE_VERDICT} gateFile={FERTILITY_GATE_FILE} />
      <h3 className="mt-3 text-lg font-semibold text-zinc-900 dark:text-zinc-50">
        {FERTILITY_PANEL_TITLE}
      </h3>
      <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
        Millésime {FERTILITY_YEAR} · {FERTILITY_CHAMP}
      </p>

      <div className="mt-6 space-y-4">
        {core.map((cell) => {
          const sublabel =
            cell.id === "icf-nees-etranger-2021"
              ? "Nées à l'étranger · ICF ajusté (état civil ≠ statut immigré)"
              : cell.id === "icf-maghreb-2021" || cell.id === "icf-afrique-hors-maghreb-2021"
                ? "Pays de naissance · ≠ religion / ethnie"
                : undefined;
          return (
            <BarRow
              key={cell.id}
              label={cell.label}
              value={cell.value}
              max={max}
              display={`${formatIcf(cell.value)} enfants/femme`}
              sublabel={sublabel}
              accent={
                cell.id === "icf-nees-france-2021"
                  ? "bg-violet-600 dark:bg-violet-500"
                  : "bg-sky-600 dark:bg-sky-500"
              }
            />
          );
        })}
      </div>

      {optional.length > 0 && (
        <div className="mt-6 border-t border-zinc-100 pt-4 dark:border-zinc-800">
          <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">
            Même tableau (contexte)
          </p>
          <div className="mt-3 space-y-3">
            {optional.map((cell) => (
              <BarRow
                key={cell.id}
                label={cell.label}
                value={cell.value}
                max={max}
                display={`${formatIcf(cell.value)} enfants/femme`}
              />
            ))}
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Ensemble des femmes :{" "}
              <span className="tabular-nums font-medium text-zinc-900 dark:text-zinc-100">
                {formatIcf(FERTILITY_ENSEMBLE_ICF_2021)} enfants/femme
              </span>{" "}
              (Fig. 6, même source)
            </p>
          </div>
        </div>
      )}

      <ul className="mt-5 list-disc space-y-1.5 pl-5 text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
        {FERTILITY_NOTES.map((note) => (
          <li key={note}>{note}</li>
        ))}
        <li>
          Ne pas confondre avec la descendance finale TeO (générations 1960–74) —
          indicateur distinct, même dossier INSEE.
        </li>
      </ul>

      <p className="mt-4 text-xs text-zinc-500">
        Données : <code className="text-[11px]">{FERTILITY_REPORT_PATH}</code> ·
        primaire{" "}
        <a
          href={FERTILITY_PRIMARY_URL}
          className="underline decoration-zinc-400 underline-offset-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          {FERTILITY_PRIMARY_URL}
        </a>
      </p>
      <ProofLink source={FERTILITY_SOURCE} className="mt-3" />
    </article>
  );
}

function AidesPanel() {
  const core = getAidesCoreCells();
  const geo = getAidesGeoOptionalCells();
  const max = Math.max(...getAidesCells(true).map((c) => c.value));

  return (
    <article className="rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/40">
      <PassLowBadge verdict={AIDES_GATE_VERDICT} gateFile={AIDES_GATE_FILE} />
      <h3 className="mt-3 text-lg font-semibold text-zinc-900 dark:text-zinc-50">
        {AIDES_PANEL_TITLE}
      </h3>
      <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
        Millésime {AIDES_YEAR} · {AIDES_CHAMP}
      </p>
      <p className="mt-3 rounded-md border border-amber-200/80 bg-amber-50/70 px-3 py-2 text-xs leading-relaxed text-amber-950 dark:border-amber-900/40 dark:bg-amber-950/25 dark:text-amber-100">
        Part du niveau de vie — pas un montant en euros, pas un narratif « ils
        utilisent beaucoup d&apos;aides » comme fraude. Ascendance migratoire /
        pays de naissance uniquement.
      </p>

      <div className="mt-6 space-y-4">
        {core.map((cell) => (
          <BarRow
            key={cell.id}
            label={cell.label}
            value={cell.value}
            max={max}
            display={formatPctWhole(cell.value)}
            accent="bg-teal-600 dark:bg-teal-500"
          />
        ))}
      </div>

      {geo.length > 0 && (
        <div className="mt-6 border-t border-zinc-100 pt-4 dark:border-zinc-800">
          <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">
            Immigrés · split géographique (optionnel)
          </p>
          <div className="mt-3 space-y-3">
            {geo.map((cell) => (
              <BarRow
                key={cell.id}
                label={cell.label}
                value={cell.value}
                max={max}
                display={formatPctWhole(cell.value)}
                accent="bg-cyan-600 dark:bg-cyan-500"
              />
            ))}
          </div>
        </div>
      )}

      <p className="mt-5 text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
        Ne pas fusionner avec les tuiles ICF ni inventer de série « aides
        musulmanes / ethnie » — soft-hold maintenu sur ces proxys.
      </p>

      <p className="mt-4 text-xs text-zinc-500">
        Données : <code className="text-[11px]">{AIDES_REPORT_PATH}</code> ·
        primaire{" "}
        <a
          href={AIDES_PRIMARY_URL}
          className="underline decoration-zinc-400 underline-offset-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          {AIDES_PRIMARY_URL}
        </a>
      </p>
      <ProofLink source={AIDES_SOURCE} className="mt-3" />
    </article>
  );
}

export function ImmigrationFertilityAidesPanels() {
  return (
    <section
      className="space-y-8 border-t border-zinc-200 pt-10 dark:border-zinc-800"
      aria-labelledby="fertility-aides-panels-heading"
    >
      <div className="rounded-lg border border-sky-200 bg-sky-50/80 px-4 py-3 dark:border-sky-900/50 dark:bg-sky-950/30">
        <p className="text-sm font-medium text-sky-950 dark:text-sky-100">
          {FERTILITY_BANNER}
        </p>
        <p className="mt-1 text-sm text-sky-900/90 dark:text-sky-200/90">
          {AIDES_BANNER} · Gate{" "}
          <code className="text-xs">gates/2026-10-31-fertility-aides-claims-gate.md</code>
        </p>
      </div>

      <div>
        <h2
          id="fertility-aides-panels-heading"
          className="text-xl font-semibold text-zinc-900 dark:text-zinc-50"
        >
          Fécondité (pays de naissance) et prestations (ascendance)
        </h2>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          Deux panneaux indépendants sourcés INSEE — géographie / ascendance
          migratoire seulement. Aucune causalité fécondité × aides ; pas de
          agrégat religion.
        </p>
      </div>

      <div className="grid gap-8 xl:grid-cols-2">
        <FertilityPanel />
        <AidesPanel />
      </div>
    </section>
  );
}
