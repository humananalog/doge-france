import { OnomasticsCategoriesDecennialChart } from "@/components/OnomasticsCategoriesDecennialChart";
import {
  ONOM_CATEGORIES_CHART_BADGE,
  ONOM_CATEGORIES_CHART_TITLE,
  ONOM_CATEGORIES_PANEL_BANNER,
} from "@/lib/onomastics-categories-decennial-series";

export function ImmigrationOnomasticsCategoriesCharts() {
  return (
    <section
      className="space-y-6"
      aria-labelledby="onom-categories-decennial-heading"
    >
      <div className="rounded-lg border border-amber-300/80 bg-amber-50 px-4 py-3 dark:border-amber-700/60 dark:bg-amber-950/40">
        <p className="text-sm font-semibold text-amber-950 dark:text-amber-100">
          {ONOM_CATEGORIES_PANEL_BANNER}
        </p>
        <p className="mt-1 text-xs font-medium uppercase tracking-wide text-amber-900/80 dark:text-amber-200/80">
          {ONOM_CATEGORIES_CHART_BADGE}
        </p>
      </div>

      <div>
        <h3
          id="onom-categories-decennial-heading"
          className="text-lg font-semibold text-zinc-900 dark:text-zinc-50"
        >
          {ONOM_CATEGORIES_CHART_TITLE}
        </h3>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          Signal onomastique inféré · fichier des prénoms INSEE · lexique desk
          ancré INED P&amp;S 565. Parts deux sexes (denom INSEE par année).{" "}
          <strong className="font-medium">Ne pas fusionner</strong> avec les
          origines géographiques G1 (#13) ni présenter comme ethnie ou religion
          au recensement.
        </p>
      </div>

      <OnomasticsCategoriesDecennialChart />

      <ul className="list-disc space-y-1 pl-5 text-xs leading-relaxed text-zinc-500">
        <li>
          Maghreb / arabo-musulman —{" "}
          <strong className="font-medium text-zinc-600 dark:text-zinc-400">
            pas un % musulmans
          </strong>{" "}
          · marqueur culturel inféré uniquement.
        </li>
        <li>
          Asie · Slaves — badge confiance faible ; ne pas sur-interpréter les
          niveaux proches de zéro.
        </li>
        <li>
          Religion déclarée (TeO) — jambe séparée uniquement ;{" "}
          <strong className="font-medium text-zinc-600 dark:text-zinc-400">
            interdit
          </strong>{" "}
          de la dériver ici.
        </li>
      </ul>
    </section>
  );
}
