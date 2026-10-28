import { Stat } from "@/components/Stat";
import {
  AME_POLICY_SPEND_RATIO_METRIC_ID,
  getAmePolicyRatioLines,
  getPublicDebtContext,
  PUBLIC_DEBT_EUR_METRIC_ID,
  PUBLIC_DEBT_PIB_PCT_METRIC_ID,
  PUBLIC_DEFICIT_METRIC_ID,
  PUBLIC_INTEREST_CHARGE_METRIC_ID,
} from "@/lib/public-debt-context";

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
          Métriques Guard-PASS dette / déficit absentes du registre — aucun
          chiffre affiché.
        </p>
      </section>
    );
  }

  const ratios = getAmePolicyRatioLines(debt);

  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
          Dette publique (KPI macro)
        </h2>
        <p className="mt-2 max-w-3xl text-sm text-zinc-600 dark:text-zinc-400">
          North-star du tableau de bord : stock et % PIB (INSEE). Les dépenses
          AME ci-dessous sont un{" "}
          <strong>coût politique (entitlement)</strong>, pas de la fraude — et
          ne « causent » pas la dette ; seulement une échelle flux vs stock /
          flux vs flux (déficit, intérêts).
        </p>
        <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/40">
            <Stat metricId={PUBLIC_DEBT_EUR_METRIC_ID} showLabel />
          </div>
          <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/40">
            <Stat metricId={PUBLIC_DEBT_PIB_PCT_METRIC_ID} showLabel />
          </div>
          {debt.deficit && (
            <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/40">
              <Stat metricId={PUBLIC_DEFICIT_METRIC_ID} showLabel />
            </div>
          )}
          {debt.interestCharge && (
            <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/40">
              <Stat metricId={PUBLIC_INTEREST_CHARGE_METRIC_ID} showLabel />
            </div>
          )}
        </div>
      </div>

      <div className="rounded-xl border border-sky-200 bg-sky-50/60 p-6 dark:border-sky-900/40 dark:bg-sky-950/20">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-sky-900 dark:text-sky-200">
          AME — coût total réel 2025 vs dette / déficit / intérêts (échelle)
        </h3>
        <Stat
          metricId={AME_POLICY_SPEND_RATIO_METRIC_ID}
          size="sm"
          className="mt-3"
          showLabel
        />
        <ul className="mt-4 space-y-2 text-sm leading-relaxed text-zinc-800 dark:text-zinc-200">
          {ratios.vsDebtStock && <li>{ratios.vsDebtStock}</li>}
          {ratios.vsDeficit && <li>{ratios.vsDeficit}</li>}
          {ratios.vsInterest && <li>{ratios.vsInterest}</li>}
        </ul>
        <p className="mt-3 text-xs text-zinc-600 dark:text-zinc-400">
          L&apos;AME n&apos;est pas présentée comme cause de la dette publique ;
          comparaison de magnitudes uniquement (Guard-PASS policy scale).
        </p>
      </div>
    </section>
  );
}
