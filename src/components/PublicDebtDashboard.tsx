import { Stat } from "@/components/Stat";
import { formatMetricValue } from "@/lib/format";
import {
  getPublicDebtContext,
  POLICY_SPEND_VS_DEBT_METRIC_IDS,
  PUBLIC_DEBT_EUR_METRIC_ID,
  PUBLIC_DEBT_PIB_PCT_METRIC_ID,
  formatShareOfDebtPct,
  spendShareOfDebtEur,
} from "@/lib/public-debt-context";
import { getMetric } from "@/lib/registry";

export function PublicDebtDashboard() {
  const debt = getPublicDebtContext();

  if (!debt.ready) {
    return (
      <section
        aria-labelledby="debt-context-heading"
        className="rounded-xl border border-dashed border-zinc-300 bg-zinc-100/80 p-6 dark:border-zinc-700 dark:bg-zinc-900/30"
      >
        <h2
          id="debt-context-heading"
          className="text-lg font-semibold text-zinc-900 dark:text-zinc-50"
        >
          Dette publique — cadre macro (en attente)
        </h2>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
          Le tableau de bord DOGE France doit d&apos;abord ancrer les dépenses
          politiques (AME, missions, etc.) sur la{" "}
          <strong>dette publique en euros et en % du PIB</strong>, pas sur des
          montants isolés. Aucune métrique dette Guard-PASS n&apos;est encore
          dans le registre — pas de chiffre inventé ici.
        </p>
        <p className="mt-3 text-xs text-zinc-600 dark:text-zinc-400">
          Ce bloc s&apos;active automatiquement lorsque{" "}
          <code className="rounded bg-zinc-200 px-1 dark:bg-zinc-800">
            {PUBLIC_DEBT_EUR_METRIC_ID}
          </code>{" "}
          et{" "}
          <code className="rounded bg-zinc-200 px-1 dark:bg-zinc-800">
            {PUBLIC_DEBT_PIB_PCT_METRIC_ID}
          </code>{" "}
          sont ajoutés à{" "}
          <code className="rounded bg-zinc-200 px-1 dark:bg-zinc-800">
            data/stats/metrics.json
          </code>
          . Les lignes AME (<code className="rounded bg-zinc-200 px-1 dark:bg-zinc-800">kind: spend</code>
          ) y seront alors affichées en part de dette (€), à côté du % PIB.
        </p>
      </section>
    );
  }

  const debtEur =
    typeof debt.eur.value === "number" ? debt.eur.value : Number(debt.eur.value);

  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
          Dette publique (KPI macro)
        </h2>
        <p className="mt-2 max-w-3xl text-sm text-zinc-600 dark:text-zinc-400">
          Référence pour cadrer les dépenses politiques ci-dessous — coût de
          droit (entitlement), pas fraude.
        </p>
        <div className="mt-4 grid gap-6 sm:grid-cols-2">
          <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/40">
            <Stat metricId={PUBLIC_DEBT_EUR_METRIC_ID} showLabel />
          </div>
          <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/40">
            <Stat metricId={PUBLIC_DEBT_PIB_PCT_METRIC_ID} showLabel />
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
          Dépenses politiques vs dette (€)
        </h3>
        <ul className="mt-4 space-y-4">
          {POLICY_SPEND_VS_DEBT_METRIC_IDS.map((id) => {
            const metric = getMetric(id);
            if (!metric || typeof metric.value !== "number") return null;
            const share = spendShareOfDebtEur(metric.value, debtEur);
            return (
              <li
                key={id}
                className="rounded-lg border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900/40"
              >
                <Stat metricId={id} size="sm" showLabel />
                {share != null && (
                  <p className="mt-2 text-sm font-medium tabular-nums text-zinc-800 dark:text-zinc-200">
                    ≈ {formatShareOfDebtPct(share)} ({formatMetricValue(metric)}{" "}
                    / {formatMetricValue(debt.eur)})
                  </p>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
