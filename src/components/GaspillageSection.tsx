import { Stat } from "@/components/Stat";
import { LegalWasteSection } from "@/components/LegalWasteSection";
import { WASTE_ILLEGAL_HOMEPAGE_METRIC_IDS } from "@/lib/waste";

export function GaspillageSection() {
  return (
    <section aria-labelledby="gaspillage-heading" className="space-y-10">
      <div>
        <h2
          id="gaspillage-heading"
          className="text-sm font-semibold uppercase tracking-wider text-zinc-500"
        >
          Gaspillage
        </h2>
      </div>

      <LegalWasteSection compact />

      <div className="space-y-6 border-t border-zinc-200 pt-8 dark:border-zinc-800">
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-rose-900 dark:text-rose-200">
            Gaspillage illégal
          </h3>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            Destructions et émeutes — montants assurés chiffrés, preuves
            primaires. Aucun total inventé&nbsp;; ne pas additionner les
            épisodes ni avec les ordres de grandeur Sénat (voir notes registre).
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {WASTE_ILLEGAL_HOMEPAGE_METRIC_IDS.map((id) => (
            <div
              key={id}
              className="rounded-xl border border-rose-200/80 bg-rose-50/50 p-6 shadow-sm dark:border-rose-900/40 dark:bg-rose-950/20 min-w-0"
            >
              <span className="text-xs font-medium uppercase text-rose-800 dark:text-rose-300">
                Gaspillage illégal
              </span>
              <Stat metricId={id} className="mt-2" size="lg" showLabel />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
