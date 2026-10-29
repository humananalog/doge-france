import Link from "next/link";
import { Stat } from "@/components/Stat";
import {
  LEGAL_WASTE_ASSOCIATIONS_BREAKDOWN_IDS,
  LEGAL_WASTE_ASSOCIATIONS_TOTAL_ID,
  LEGAL_WASTE_MISSION_EXECUTION_TILE_IDS,
  LEGAL_WASTE_PRIMARY_TILE_IDS,
} from "@/lib/waste";

type LegalWasteSectionProps = {
  compact?: boolean;
};

export function LegalWasteSection({ compact = false }: LegalWasteSectionProps) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-semibold uppercase tracking-wider text-emerald-900 dark:text-emerald-200">
          Gaspillage légal
        </h3>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          Coûts politiques ou entitlements légaux contestés —{" "}
          <strong>pas de la fraude</strong>. Chaque tuile a une preuve Cour /
          NEB / Sénat&nbsp;;{" "}
          <strong>aucun total cumulé</strong> entre associations IAI, mission
          IAI et AME (périmètres distincts).
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {LEGAL_WASTE_PRIMARY_TILE_IDS.map((id) => (
          <div
            key={id}
            className="rounded-xl border border-emerald-200/80 bg-emerald-50/40 p-6 shadow-sm dark:border-emerald-900/40 dark:bg-emerald-950/20 min-w-0"
          >
            <span className="text-xs font-medium uppercase text-emerald-800 dark:text-emerald-300">
              Gaspillage légal
            </span>
            <Stat metricId={id} className="mt-2" size="lg" showLabel />
            {id === LEGAL_WASTE_ASSOCIATIONS_TOTAL_ID ? (
              <ul className="mt-4 space-y-2 border-t border-emerald-200/60 pt-4 text-sm dark:border-emerald-900/50">
                {LEGAL_WASTE_ASSOCIATIONS_BREAKDOWN_IDS.map((breakdownId) => (
                  <li key={breakdownId} className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <Stat metricId={breakdownId} size="sm" showLabel />
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        ))}
      </div>

      {!compact ? (
        <div>
          <h4 className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">
            Mission IAI — exécution (périmètre budget, non additif)
          </h4>
          <p className="mt-1 max-w-3xl text-xs text-zinc-500">
            Crédits CP exécutés pour la mission entière — distinct des seuls
            financements associations (1&nbsp;094&nbsp;M€) et de l&apos;AME.
          </p>
          <div className="mt-4 grid gap-6 sm:grid-cols-2">
            {LEGAL_WASTE_MISSION_EXECUTION_TILE_IDS.map((id) => (
              <div
                key={id}
                className="rounded-xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900/40 min-w-0"
              >
                <Stat metricId={id} size="md" showLabel />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p className="text-sm">
          <Link
            href="/gaspillage-legal"
            className="text-sky-800 underline dark:text-sky-400"
          >
            Mission IAI exécution 2023/2024 et détail complet
          </Link>
        </p>
      )}
    </div>
  );
}
