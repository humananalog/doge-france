import { Stat } from "@/components/Stat";
import { MetricsTable } from "@/components/MetricsTable";
import {
  getMetricsByCategory,
  getMetricsByKind,
} from "@/lib/registry";

export const metadata = {
  title: "Dépenses & contrôles",
};

export default function DepensesPage() {
  const tax = getMetricsByCategory("tax");
  const spend = getMetricsByKind("spend");

  return (
    <div className="space-y-10">
      <header>
        <h1 className="text-3xl font-bold tracking-tight">Dépenses & fiscalité</h1>
        <p className="mt-3 max-w-3xl text-zinc-600 dark:text-zinc-400">
          Crédits exécutés et résultats de contrôle fiscal — chiffres issus de
          Vie publique et du PLF, jamais hardcodés dans l&apos;interface.
        </p>
      </header>

      <section className="grid gap-6 sm:grid-cols-2">
        <div className="rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/40">
          <Stat metricId="fiscal-droits-notifies-2025" />
        </div>
        <div className="rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/40">
          <Stat metricId="fiscal-encaissements" />
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Contrôle fiscal (détail)</h2>
        <div className="mt-4">
          <MetricsTable metrics={tax} />
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Volumes de dépenses publiques suivies</h2>
        <div className="mt-4">
          <MetricsTable metrics={spend} />
        </div>
      </section>
    </div>
  );
}
