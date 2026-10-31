"use client";

import { useState } from "react";
import { getMetric } from "@/lib/registry";
import { formatMetricValue } from "@/lib/format";
import { ProofLink } from "./ProofLink";

const TEO2_CHAMP =
  "18–59 ans · métropole · logement ordinaire · 2019-2020";

const LEGS = [
  { id: "origin", label: "Origine" },
  { id: "onomastic", label: "Onomastique" },
  { id: "religion", label: "Religion décl." },
  { id: "titres", label: "Titres admin" },
] as const;

type LegId = (typeof LEGS)[number]["id"];

function formatPctOneDecimal(value: number): string {
  return `${new Intl.NumberFormat("fr-FR", {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  }).format(value)} %`;
}

function formatThousands(value: number): string {
  return new Intl.NumberFormat("fr-FR").format(value);
}

function Teo2ChampBadge() {
  return (
    <p className="mt-2 rounded-md border border-sky-200 bg-sky-50 px-2 py-1 text-[10px] font-medium leading-snug text-sky-950 dark:border-sky-900/50 dark:bg-sky-950/40 dark:text-sky-100">
      Champ : {TEO2_CHAMP}
    </p>
  );
}

function OriginLegColumn() {
  const g1Stock = getMetric("g1-immigres-stock-2023-effectif");
  const g1Part = getMetric("g1-immigres-stock-2023-part");
  const maghrebPart = getMetric("g1-origin-maghreb-part");
  const maghrebEff = getMetric("g1-origin-maghreb-effectif");
  const afriquePart = getMetric("g1-origin-afrique-part");
  const europePart = getMetric("g1-origin-europe-part");
  const g2Stock = getMetric("g2-descendants-stock-2023-effectif");
  const g2Part = getMetric("g2-descendants-stock-2023-part");
  const g2Maghreb = getMetric("g2-origin-maghreb-part");
  const g3Eff = getMetric("g3-petits-enfants-under60-2019-20-effectif");
  const g3Part = getMetric("g3-petits-enfants-under60-2019-20-part");

  if (!g1Stock || !g1Part || !maghrebPart) return null;

  return (
    <div className="flex h-full flex-col rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900/40">
      <p className="text-xs font-semibold uppercase tracking-wider text-emerald-800 dark:text-emerald-300">
        Leg 1 · PASS
      </p>
      <h3 className="mt-1 text-sm font-semibold text-zinc-900 dark:text-zinc-50">
        Origine / ascendance (INSEE)
      </h3>
      <p className="mt-2 text-xs italic text-zinc-600 dark:text-zinc-400">
        Proxy d&apos;origine / ascendance — pas une ethnie recensée
      </p>

      <div className="mt-4 space-y-4 text-sm">
        <div>
          <p className="font-medium text-zinc-800 dark:text-zinc-200">G1 2023</p>
          <p className="mt-1 tabular-nums text-zinc-950 dark:text-zinc-50">
            7 174 k · {formatMetricValue(g1Part)}
          </p>
          <ul className="mt-2 space-y-1 text-xs text-zinc-600 dark:text-zinc-400">
            {maghrebEff && typeof maghrebEff.value === "number" && (
              <li>
                Maghreb {formatThousands(maghrebEff.value / 1000)} k (
                {formatMetricValue(maghrebPart)} des immigrés)
              </li>
            )}
            {afriquePart && (
              <li>Afrique {formatMetricValue(afriquePart)} des immigrés</li>
            )}
            {europePart && (
              <li>Europe {formatMetricValue(europePart)} des immigrés</li>
            )}
          </ul>
        </div>

        {g2Stock && g2Part && g2Maghreb && (
          <div>
            <p className="font-medium text-zinc-800 dark:text-zinc-200">
              G2 2023 · logement ordinaire
            </p>
            <p className="mt-1 tabular-nums text-zinc-950 dark:text-zinc-50">
              8 015 k · {formatMetricValue(g2Part)}
            </p>
            <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">
              Maghreb {formatMetricValue(g2Maghreb)} des descendants
            </p>
          </div>
        )}

        {g3Eff && g3Part && (
          <div className="rounded-md border border-amber-200/80 bg-amber-50/60 p-2 dark:border-amber-900/40 dark:bg-amber-950/20">
            <p className="text-xs font-medium text-amber-950 dark:text-amber-100">
              G3 · &lt;60 ans seulement
            </p>
            <p className="mt-1 tabular-nums text-sm text-amber-950 dark:text-amber-50">
              4,8 M · {formatMetricValue(g3Part)} des &lt;60
            </p>
            <p className="mt-1 text-[10px] leading-snug text-amber-900 dark:text-amber-200">
              Pas de chiffre G3 tous âges · ne pas sommer avec G1/G2 sans labels.
            </p>
          </div>
        )}
      </div>

      <ProofLink source={g1Part.source} className="mt-auto pt-4" />
    </div>
  );
}

function OnomasticLegColumn() {
  const jean1950 = getMetric("onomastic-jean-classic-share-1950");
  const jean2025 = getMetric("onomastic-jean-classic-share-2025");
  const moh1950 = getMetric("onomastic-mohamed-core-share-1950");
  const moh2025 = getMetric("onomastic-mohamed-core-share-2025");

  if (!jean1950 || !jean2025 || !moh1950 || !moh2025) return null;
  if (
    typeof jean1950.value !== "number" ||
    typeof jean2025.value !== "number" ||
    typeof moh1950.value !== "number" ||
    typeof moh2025.value !== "number"
  ) {
    return null;
  }

  return (
    <div className="flex h-full flex-col rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900/40">
      <p className="text-xs font-semibold uppercase tracking-wider text-amber-800 dark:text-amber-300">
        Leg 2 · PASS-LOW
      </p>
      <h3 className="mt-1 text-sm font-semibold text-zinc-900 dark:text-zinc-50">
        Onomastique (inféré)
      </h3>
      <p className="mt-2 rounded-md border border-amber-300/60 bg-amber-50 px-2 py-1 text-[10px] font-semibold text-amber-950 dark:border-amber-800 dark:bg-amber-950/30 dark:text-amber-100">
        Marqueur culturel inféré — ≠ % musulmans
      </p>

      <dl className="mt-4 space-y-3 text-sm">
        <div>
          <dt className="text-xs text-zinc-500">Jean classique (G)</dt>
          <dd className="mt-0.5 tabular-nums font-medium text-zinc-950 dark:text-zinc-50">
            {formatPctOneDecimal(jean1950.value)}
            <span className="mx-1.5 font-normal text-zinc-400">→</span>
            {formatPctOneDecimal(jean2025.value)}
            <span className="ml-1 text-xs font-normal text-zinc-500">
              (1950→2025)
            </span>
          </dd>
        </div>
        <div>
          <dt className="text-xs text-zinc-500">Mohamed noyau (G)</dt>
          <dd className="mt-0.5 tabular-nums font-medium text-zinc-950 dark:text-zinc-50">
            {formatPctOneDecimal(moh1950.value)}
            <span className="mx-1.5 font-normal text-zinc-400">→</span>
            {formatPctOneDecimal(moh2025.value)}
          </dd>
        </div>
      </dl>

      <p className="mt-3 text-[10px] leading-relaxed text-zinc-500">
        Fichier prénoms · desk bundles · pas prénom→religion · pas ethnie.
      </p>

      <ProofLink source={jean1950.source} className="mt-auto pt-4" />
    </div>
  );
}

function ReligionLegColumn() {
  const sans = getMetric("teo2-religion-sans-part");
  const cath = getMetric("teo2-religion-catholique-part");
  const mus = getMetric("teo2-religion-musulman-part");
  const autres = getMetric("teo2-religion-autres-part");
  const musImm = getMetric("teo2-musulman-parmi-immigres-part");
  const musDesc = getMetric("teo2-musulman-parmi-desc-2-parents-part");
  const musNoMig = getMetric("teo2-musulman-sans-ascendance-migratoire-part");

  if (!sans || !cath || !mus || !autres) return null;

  return (
    <div className="flex h-full flex-col rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900/40">
      <p className="text-xs font-semibold uppercase tracking-wider text-emerald-800 dark:text-emerald-300">
        Leg 3 · PASS
      </p>
      <h3 className="mt-1 text-sm font-semibold text-zinc-900 dark:text-zinc-50">
        Religion déclarée (TeO2)
      </h3>
      <Teo2ChampBadge />

      <ul className="mt-4 space-y-2 text-sm">
        {[sans, cath, mus, autres].map((m) => (
          <li
            key={m.id}
            className="flex items-baseline justify-between gap-2 border-b border-zinc-100 pb-2 dark:border-zinc-800"
          >
            <span className="text-zinc-700 dark:text-zinc-300">
              {m.label_fr.replace(/ \(déclaré.*\)/, "")}
            </span>
            <span className="shrink-0 tabular-nums font-semibold">
              {formatMetricValue(m)}
            </span>
          </li>
        ))}
      </ul>
      <Teo2ChampBadge />

      {musImm && musDesc && musNoMig && (
        <div className="mt-3 space-y-1 text-xs text-zinc-600 dark:text-zinc-400">
          <p className="font-medium text-zinc-800 dark:text-zinc-200">
            Parmi musulmans déclarés :
          </p>
          <p>{formatMetricValue(musImm)} des immigrés</p>
          <p>{formatMetricValue(musDesc)} desc. 2 parents immigrés</p>
          <p>{formatMetricValue(musNoMig)} sans ascendance migratoire</p>
          <Teo2ChampBadge />
        </div>
      )}

      <ProofLink source={sans.source} className="mt-auto pt-4" />
    </div>
  );
}

function TitresLegColumn() {
  const total = getMetric("premier-titre-2024-total");
  const maroc = getMetric("premier-titre-2024-maroc");
  const algerie = getMetric("premier-titre-2024-algerie");
  const tunisie = getMetric("premier-titre-2024-tunisie");

  if (!total || !maroc || !algerie || !tunisie) return null;
  if (
    typeof total.value !== "number" ||
    typeof maroc.value !== "number" ||
    typeof algerie.value !== "number" ||
    typeof tunisie.value !== "number"
  ) {
    return null;
  }

  return (
    <div className="flex h-full flex-col rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900/40">
      <p className="text-xs font-semibold uppercase tracking-wider text-emerald-800 dark:text-emerald-300">
        Leg 4 · PASS
      </p>
      <h3 className="mt-1 text-sm font-semibold text-zinc-900 dark:text-zinc-50">
        Nationalité admin (flux)
      </h3>
      <p className="mt-2 text-xs text-zinc-600 dark:text-zinc-400">
        Premiers titres pays tiers · flux administratif — pas stock INSEE
        immigrés
      </p>

      <p className="mt-4 text-2xl font-semibold tabular-nums text-zinc-950 dark:text-zinc-50">
        {formatThousands(total.value)}
        <span className="ml-2 text-sm font-normal text-zinc-500">2024</span>
      </p>

      <ul className="mt-4 space-y-2 text-sm tabular-nums">
        <li>Maroc {formatThousands(maroc.value)}</li>
        <li>Algérie {formatThousands(algerie.value)}</li>
        <li>Tunisie {formatThousands(tunisie.value)}</li>
      </ul>

      <ProofLink source={total.source} className="mt-auto pt-4" />
    </div>
  );
}

const LEG_COLUMNS: Record<LegId, () => React.ReactNode> = {
  origin: OriginLegColumn,
  onomastic: OnomasticLegColumn,
  religion: ReligionLegColumn,
  titres: TitresLegColumn,
};

export function ImmigrationProxyTriangulation() {
  const [activeLeg, setActiveLeg] = useState<LegId>("origin");

  return (
    <section
      className="space-y-5 rounded-2xl border border-violet-200 bg-violet-50/40 p-6 dark:border-violet-900/50 dark:bg-violet-950/20"
      aria-labelledby="proxy-triangulation-heading"
    >
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-violet-800 dark:text-violet-300">
          Étude secondaire · Evidence Guard PASS-LOW (ensemble)
        </p>
        <h2
          id="proxy-triangulation-heading"
          className="mt-2 text-xl font-semibold text-violet-950 dark:text-violet-50"
        >
          Triangulation de proxys (origine / onomastique / religion / admin)
        </h2>
        <p
          className="mt-3 max-w-4xl rounded-lg border border-violet-300/70 bg-white/80 px-4 py-3 text-sm font-medium leading-relaxed text-violet-950 dark:border-violet-800 dark:bg-violet-950/40 dark:text-violet-100"
          role="note"
        >
          Étude non officielle — proxys (origine / onomastique / religion
          déclarée / nationalité admin) — pas un recensement ethnico-religieux
        </p>
        <p className="mt-3 max-w-4xl text-xs leading-relaxed text-violet-900/90 dark:text-violet-200/90">
          Quatre jambes côte à côte — jamais fusionnées en un seul « % ethnic
          / religious X ». Interdit : matrices parent×enfant · prénom→religion
          · nom→ethnie · proxy comme recensement · religion TeO2 sans champ
          18–59.
        </p>
      </div>

      <div
        className="flex flex-wrap gap-2 lg:hidden"
        role="tablist"
        aria-label="Jambes de triangulation"
      >
        {LEGS.map((leg) => (
          <button
            key={leg.id}
            type="button"
            role="tab"
            aria-selected={activeLeg === leg.id}
            className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
              activeLeg === leg.id
                ? "bg-violet-800 text-white dark:bg-violet-600"
                : "bg-white text-violet-900 ring-1 ring-violet-200 dark:bg-zinc-900 dark:text-violet-100 dark:ring-violet-800"
            }`}
            onClick={() => setActiveLeg(leg.id)}
          >
            {leg.label}
          </button>
        ))}
      </div>

      <div className="hidden gap-4 lg:grid lg:grid-cols-4">
        <OriginLegColumn />
        <OnomasticLegColumn />
        <ReligionLegColumn />
        <TitresLegColumn />
      </div>

      <div className="lg:hidden" role="tabpanel">
        {(() => {
          const Column = LEG_COLUMNS[activeLeg];
          return <Column />;
        })()}
      </div>
    </section>
  );
}
