"use client";

import { ProofLink } from "@/components/ProofLink";
import {
  AIDES_BANNER,
  AIDES_CHAMP_F18,
  AIDES_GATE_FILE,
  AIDES_GATE_VERDICT,
  AIDES_ONE_LINER,
  AIDES_PANEL_TITLE,
  AIDES_PRIMARY_URL_F18,
  AIDES_PRIMARY_URL_2019,
  AIDES_REPORT_PATH,
  AIDES_SOURCE_2019,
  AIDES_SOURCE_F18,
  getAidesAscendance2019Cells,
  getAidesCells,
  getAidesF18LeadCells,
  getAidesLegalSpendTiles,
  type AidesLegalSpendTile,
  type AidesPackCell,
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

function formatPctOneDecimal(value: number): string {
  return `${new Intl.NumberFormat("fr-FR", {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  }).format(value)} %`;
}

function formatEurUc(value: number): string {
  return `${new Intl.NumberFormat("fr-FR", {
    maximumFractionDigits: 0,
  }).format(value)} € / UC`;
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

function GuardBadge({
  verdict,
  gateFile,
}: {
  verdict: string;
  gateFile: string;
}) {
  const isPassLow = verdict.includes("LOW");
  const tone = isPassLow
    ? "text-amber-900/90 dark:text-amber-200/90"
    : "text-emerald-900/80 dark:text-emerald-200/90";
  return (
    <p className={`text-xs font-medium uppercase tracking-wide ${tone}`}>
      Evidence Guard · {verdict} ·{" "}
      <code className="text-[10px] normal-case">{gateFile}</code>
    </p>
  );
}

function AidesKpiTile({
  index,
  title,
  headline,
  subtitle,
  microligne,
  proofUrl,
}: {
  index: number;
  title: string;
  headline: string;
  subtitle: string;
  microligne?: string;
  proofUrl: string;
}) {
  return (
    <article
      className="flex h-full flex-col rounded-xl border border-teal-200/90 bg-white p-5 dark:border-teal-900/50 dark:bg-zinc-900/40"
      aria-labelledby={`aides-tile-${index}-title`}
    >
      <p className="text-[10px] font-semibold uppercase tracking-wide text-teal-800 dark:text-teal-300">
        Tuile {index} · PASS
      </p>
      <h3
        id={`aides-tile-${index}-title`}
        className="mt-2 text-sm font-semibold text-zinc-900 dark:text-zinc-50"
      >
        {title}
      </h3>
      <p className="mt-3 text-3xl font-bold tabular-nums tracking-tight text-zinc-950 dark:text-zinc-50">
        {headline}
      </p>
      <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">{subtitle}</p>
      {microligne ? (
        <p className="mt-3 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
          {microligne}
        </p>
      ) : null}
      <a
        href={proofUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto pt-4 text-xs text-sky-700 underline decoration-sky-700/40 underline-offset-2 dark:text-sky-400"
      >
        Source primaire ↗
      </a>
    </article>
  );
}

function cellToKpi(cell: AidesPackCell, index: number) {
  const headline =
    cell.eur_uc != null
      ? `${formatPctOneDecimal(cell.value)} (${formatEurUc(cell.eur_uc)})`
      : formatPctOneDecimal(cell.value);
  const microligne =
    cell.id === "prest_ndd_immigres_afrique_2021"
      ? "Continent Afrique · ≠ Maghreb seul · ≠ religion"
      : cell.id === "prest_ndd_immigres_2021"
        ? "Famille + logement + minima + prime d'activité (bruts CRDS). Hors pensions / chômage."
        : undefined;
  return (
    <AidesKpiTile
      key={cell.id}
      index={index}
      title={`Prestations sociales · ${cell.label}`}
      headline={headline}
      subtitle={`ERFS 2021 · France métropolitaine`}
      microligne={microligne}
      proofUrl={cell.source_url}
    />
  );
}

function LegalSpendKpiTile({ tile, index }: { tile: AidesLegalSpendTile; index: number }) {
  return (
    <AidesKpiTile
      index={index}
      title={tile.title}
      headline={tile.headline}
      subtitle={tile.subtitle}
      microligne={tile.microligne}
      proofUrl={tile.primary_url}
    />
  );
}

function FertilityPanel() {
  const core = getFertilityCells(false);
  const optional = getFertilityCells(true).filter((c) => c.optional);
  const max = Math.max(...getFertilityCells(true).map((c) => c.value));

  return (
    <article className="rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/40">
      <GuardBadge verdict={FERTILITY_GATE_VERDICT} gateFile={FERTILITY_GATE_FILE} />
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
  const lead = getAidesF18LeadCells();
  const ascendanceCore = getAidesAscendance2019Cells(false);
  const ascendanceGeo = getAidesAscendance2019Cells(true).filter((c) => c.optional);
  const max = Math.max(...getAidesCells(true).map((c) => c.value));

  return (
    <article className="rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/40">
      <GuardBadge verdict={AIDES_GATE_VERDICT} gateFile={AIDES_GATE_FILE} />
      <h3 className="mt-3 text-lg font-semibold text-zinc-900 dark:text-zinc-50">
        {AIDES_PANEL_TITLE}
      </h3>
      <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
        Millésime 2021 · {AIDES_CHAMP_F18}
      </p>
      <p className="mt-3 rounded-md border border-amber-200/80 bg-amber-50/70 px-3 py-2 text-xs leading-relaxed text-amber-950 dark:border-amber-900/40 dark:bg-amber-950/25 dark:text-amber-100">
        Part du niveau de vie — montants € / UC publiés par l&apos;INSEE en
        parallèle du %. Pas % du budget CAF, pas un narratif « ils utilisent
        beaucoup d&apos;aides » comme fraude. Statut immigré / continent de
        naissance uniquement.
      </p>

      <div className="mt-6 space-y-4">
        {lead.map((cell) => (
          <BarRow
            key={cell.id}
            label={cell.label}
            value={cell.value}
            max={max}
            display={
              cell.eur_uc != null
                ? `${formatPctOneDecimal(cell.value)} · ${formatEurUc(cell.eur_uc)}`
                : formatPctOneDecimal(cell.value)
            }
            accent="bg-teal-600 dark:bg-teal-500"
            sublabel={
              cell.id === "prest_ndd_immigres_afrique_2021"
                ? "Continent · ≠ Maghreb · ≠ religion"
                : undefined
            }
          />
        ))}
      </div>

      <div className="mt-6 border-t border-zinc-100 pt-4 dark:border-zinc-800">
        <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">
          Ascendance migratoire · ERFS 2019 (année antérieure)
        </p>
        <div className="mt-3 space-y-3">
          {ascendanceCore.map((cell) => (
            <BarRow
              key={cell.id}
              label={cell.label}
              value={cell.value}
              max={max}
              display={formatPctOneDecimal(cell.value)}
              accent="bg-zinc-500 dark:bg-zinc-400"
            />
          ))}
          {ascendanceGeo.map((cell) => (
            <BarRow
              key={cell.id}
              label={cell.label}
              value={cell.value}
              max={max}
              display={formatPctOneDecimal(cell.value)}
              accent="bg-cyan-600 dark:bg-cyan-500"
            />
          ))}
        </div>
      </div>

      <p className="mt-5 text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
        Ne pas fusionner avec les tuiles ICF ni inventer Maghreb / Muslim / ethnie
        — soft-hold maintenu. Pas de causalité fécondité × aides.
      </p>

      <p className="mt-4 text-xs text-zinc-500">
        Données : <code className="text-[11px]">{AIDES_REPORT_PATH}</code> ·
        primaire 2021{" "}
        <a
          href={AIDES_PRIMARY_URL_F18}
          className="underline decoration-zinc-400 underline-offset-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          {AIDES_PRIMARY_URL_F18}
        </a>
        {" · "}
        2019{" "}
        <a
          href={AIDES_PRIMARY_URL_2019}
          className="underline decoration-zinc-400 underline-offset-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          {AIDES_PRIMARY_URL_2019}
        </a>
      </p>
      <ProofLink source={AIDES_SOURCE_F18} className="mt-3" />
      <ProofLink source={AIDES_SOURCE_2019} className="mt-2" />
    </article>
  );
}

export function ImmigrationFertilityAidesPanels() {
  const leadCells = getAidesF18LeadCells();
  const legalTiles = getAidesLegalSpendTiles();

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
          {AIDES_BANNER} ·{" "}
          <code className="text-xs">{AIDES_GATE_FILE}</code>
        </p>
        <p className="mt-2 text-sm leading-relaxed text-sky-900/95 dark:text-sky-100/90">
          {AIDES_ONE_LINER}
        </p>
      </div>

      <div>
        <h2
          id="fertility-aides-panels-heading"
          className="text-xl font-semibold text-zinc-900 dark:text-zinc-50"
        >
          Fécondité (pays de naissance), prestations (immigrés) et dépenses légales
          (RSA / AF)
        </h2>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          Panneaux indépendants — géographie, statut immigré, nationalité du
          responsable RSA ou part de bénéficiaires AF. Aucune causalité fécondité
          × aides ; pas d&apos;agrégat religion.
        </p>
      </div>

      <div>
        <h3 className="text-sm font-semibold uppercase tracking-wide text-zinc-700 dark:text-zinc-300">
          Tuiles Evidence Guard · aides / nationalité (PASS)
        </h3>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {leadCells.map((cell, i) => cellToKpi(cell, i + 1))}
          {legalTiles.map((tile, i) => (
            <LegalSpendKpiTile key={tile.id} tile={tile} index={i + 4} />
          ))}
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-2">
        <FertilityPanel />
        <AidesPanel />
      </div>
    </section>
  );
}
