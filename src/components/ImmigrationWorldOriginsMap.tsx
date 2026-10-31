"use client";

import { useMemo, useState } from "react";
import WorldMap, { type CountryContext } from "react-svg-worldmap";
import {
  INSEE_G1_PROOF_URL,
  WORLDMAP_ORIGINS,
  WORLDMAP_REGION_BY_ID,
  WORLDMAP_REGIONS,
} from "@/lib/worldmap-origins";
import {
  regionIdForCountry,
  type WorldmapRegionId,
} from "@/lib/worldmap-country-regions";
import { ProofLink } from "./ProofLink";

const NEUTRAL_FILL = "#e4e4e7";

function formatThousandsFr(value: number): string {
  return new Intl.NumberFormat("fr-FR").format(value);
}

function formatPctFr(value: number): string {
  return `${new Intl.NumberFormat("fr-FR", {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  }).format(value)} %`;
}

function regionTooltip(regionId: WorldmapRegionId): string {
  const region = WORLDMAP_REGION_BY_ID.get(regionId);
  if (!region) return "";
  return `${region.label_fr} · ${formatThousandsFr(region.g1_thousands)} k · ${formatPctFr(region.g1_pct_of_immigres)} des immigrés · ${INSEE_G1_PROOF_URL}`;
}

export function ImmigrationWorldOriginsMap() {
  const [layer, setLayer] = useState<"g1" | "g2">("g1");

  const styleFunction = useMemo(
    () => (context: CountryContext) => {
      const regionId = regionIdForCountry(context.countryCode);
      if (!regionId) {
        return {
          fill: NEUTRAL_FILL,
          stroke: "#fff",
          strokeWidth: 0.4,
          outline: "none",
        };
      }
      const region = WORLDMAP_REGION_BY_ID.get(regionId);
      return {
        fill: region?.color ?? NEUTRAL_FILL,
        stroke: "#fff",
        strokeWidth: 0.4,
        outline: "none",
        cursor: "pointer",
      };
    },
    [],
  );

  const tooltipTextFunction = useMemo(
    () => (context: CountryContext) => {
      const regionId = regionIdForCountry(context.countryCode);
      if (!regionId) {
        if (context.countryCode.toUpperCase() === "FR") {
          return "France — pays d'accueil (carte = origines des immigrés G1)";
        }
        return `${context.countryName} — hors agrégats INSEE Fig. 2`;
      }
      return regionTooltip(regionId);
    },
    [],
  );

  const source = {
    title: `INSEE — Immigrés et descendants d'immigrés (${WORLDMAP_ORIGINS.figure})`,
    url: INSEE_G1_PROOF_URL,
    publisher: "INSEE",
  };

  return (
    <section
      className="space-y-5 rounded-2xl border border-teal-200 bg-teal-50/30 p-6 dark:border-teal-900/50 dark:bg-teal-950/20"
      aria-labelledby="worldmap-origins-heading"
    >
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-teal-800 dark:text-teal-300">
          Étude cartographique secondaire · Evidence Guard PASS-LOW (world map)
        </p>
        <h2
          id="worldmap-origins-heading"
          className="mt-2 text-xl font-semibold text-teal-950 dark:text-teal-50"
        >
          {WORLDMAP_ORIGINS.title_fr}
        </h2>
        <p
          className="mt-3 max-w-4xl rounded-lg border border-teal-300/70 bg-white/80 px-4 py-3 text-sm font-medium leading-relaxed text-teal-950 dark:border-teal-800 dark:bg-teal-950/40 dark:text-teal-100"
          role="note"
        >
          {WORLDMAP_ORIGINS.banner}
        </p>
        <p className="mt-3 max-w-4xl text-xs leading-relaxed text-teal-900/90 dark:text-teal-200/90">
          Carte choroplèthe = stocks G1 {WORLDMAP_ORIGINS.data_year} par
          agrégat géographique INSEE ({WORLDMAP_ORIGINS.figure} ·{" "}
          {WORLDMAP_ORIGINS.denominator}). Une couleur par région INSEE —
          frontières pays illustratives, sans micro-parts inventées à
          l&apos;intérieur du Maghreb ou de l&apos;Asie.
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <span className="text-xs font-medium text-teal-900 dark:text-teal-200">
          Couche :
        </span>
        <button
          type="button"
          className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors ${
            layer === "g1"
              ? "bg-teal-800 text-white dark:bg-teal-600"
              : "bg-white text-teal-900 ring-1 ring-teal-200 dark:bg-zinc-900 dark:text-teal-100 dark:ring-teal-800"
          }`}
          onClick={() => setLayer("g1")}
        >
          G1 · origines géographiques (Fig. 2)
        </button>
        <button
          type="button"
          className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors ${
            layer === "g2"
              ? "bg-teal-800 text-white dark:bg-teal-600"
              : "bg-white text-teal-900 ring-1 ring-teal-200 dark:bg-zinc-900 dark:text-teal-100 dark:ring-teal-800"
          }`}
          onClick={() => setLayer("g2")}
        >
          G2 · descendants (Fig. 3)
        </button>
      </div>

      {layer === "g2" ? (
        <div className="rounded-xl border border-amber-300/80 bg-amber-50/90 p-5 dark:border-amber-900/50 dark:bg-amber-950/30">
          <p className="text-sm font-semibold text-amber-950 dark:text-amber-50">
            Couche G2 non fusionnée
          </p>
          <p className="mt-2 text-sm leading-relaxed text-amber-950 dark:text-amber-100">
            {WORLDMAP_ORIGINS.optional_layer_g2.note} — champ :{" "}
            {WORLDMAP_ORIGINS.optional_layer_g2.champ}. Cette PR n&apos;affiche
            pas de choroplèthe G2 peint (Fig. 3) pour éviter un mélange non
            étiqueté avec le stock G1. Revenez à la couche G1 ou consultez la
            tuile G2 dans le portrait INSEE.
          </p>
          <a
            href={WORLDMAP_ORIGINS.optional_layer_g2.source}
            className="mt-3 inline-block text-xs font-medium text-amber-900 underline underline-offset-2 dark:text-amber-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            Source Fig. 3 · 8242329
          </a>
        </div>
      ) : (
        <div className="grid gap-6 lg:grid-cols-[1fr_minmax(220px,280px)]">
          <div
            className="overflow-hidden rounded-xl border border-zinc-200 bg-white p-3 dark:border-zinc-800 dark:bg-zinc-900/40"
            aria-label="origines géographiques des immigrés (INSEE)"
          >
            <WorldMap
              data={[]}
              size="responsive"
              backgroundColor="transparent"
              richInteraction
              styleFunction={styleFunction}
              tooltipTextFunction={tooltipTextFunction}
              frame
              borderColor="#a1a1aa"
            />
            <p className="mt-2 text-[10px] leading-snug text-zinc-500">
              Alt / titre carte : origines géographiques des immigrés (INSEE) —
              pas une carte des ethnies.
            </p>
          </div>

          <aside className="space-y-4">
            <div>
              <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                Légende · agrégats INSEE
              </h3>
              <ul className="mt-3 space-y-2">
                {WORLDMAP_REGIONS.map((r) => (
                  <li
                    key={r.region_id}
                    className="flex items-start gap-2 text-xs text-zinc-700 dark:text-zinc-300"
                  >
                    <span
                      className="mt-0.5 inline-block h-3 w-3 shrink-0 rounded-sm ring-1 ring-zinc-300 dark:ring-zinc-600"
                      style={{ backgroundColor: r.color }}
                      aria-hidden
                    />
                    <span>
                      <span className="font-medium text-zinc-900 dark:text-zinc-100">
                        {r.label_fr}
                      </span>
                      <br />
                      <span className="tabular-nums">
                        {formatThousandsFr(r.g1_thousands)} k ·{" "}
                        {formatPctFr(r.g1_pct_of_immigres)} des immigrés
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-lg border border-violet-200 bg-violet-50/80 p-3 dark:border-violet-900/50 dark:bg-violet-950/30">
              <h3 className="text-xs font-semibold uppercase tracking-wide text-violet-900 dark:text-violet-200">
                Onomastique · lien seulement
              </h3>
              <p className="mt-2 text-[11px] leading-relaxed text-violet-950 dark:text-violet-100">
                {WORLDMAP_ORIGINS.onomastic_crosswalk.rule}. Les faisceaux de
                prénoms restent dans la triangulation — jamais fusionnés dans
                cette carte.
              </p>
              <a
                href={`#${WORLDMAP_ORIGINS.onomastic_crosswalk.anchor_id}`}
                className="mt-2 inline-block text-xs font-medium text-violet-800 underline underline-offset-2 dark:text-violet-200"
              >
                Voir jambe onomastique (triangulation)
              </a>
            </div>

            <ProofLink source={source} />
          </aside>
        </div>
      )}
    </section>
  );
}
