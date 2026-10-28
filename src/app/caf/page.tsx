import { Stat } from "@/components/Stat";
import { MetricsTable } from "@/components/MetricsTable";
import { getMetricsByCategory } from "@/lib/registry";

export const metadata = {
  title: "CAF & branche famille",
};

export default function CafPage() {
  const cafMetrics = getMetricsByCategory("caf");
  const social = getMetricsByCategory("social").filter((m) =>
    m.id.startsWith("hcfips"),
  );

  return (
    <div className="space-y-10">
      <header>
        <h1 className="text-3xl font-bold tracking-tight">CAF / CNAF</h1>
        <p className="mt-3 max-w-3xl text-zinc-600 dark:text-zinc-400">
          La Cour n&apos;a pas pu certifier la branche famille en 2024. Ci-dessous :
          erreurs résiduelles, estimations statistiques de fraude, détections
          CNAF — chaque montant pointe vers sa source primaire.
        </p>
      </header>

      <section className="grid gap-6 lg:grid-cols-3">
        <div className="rounded-xl border border-red-200 bg-red-50/50 p-6 dark:border-red-900/40 dark:bg-red-950/10">
          <p className="text-xs font-semibold uppercase text-red-800 dark:text-red-300">
            Erreur (Cour)
          </p>
          <Stat metricId="caf-erreur-residuelle-24m-montant" className="mt-2" />
        </div>
        <div className="rounded-xl border border-orange-200 bg-orange-50/50 p-6 dark:border-orange-900/40 dark:bg-orange-950/10">
          <p className="text-xs font-semibold uppercase text-orange-900 dark:text-orange-300">
            Fraude estimée (enquête CNAF)
          </p>
          <Stat metricId="caf-fraude-estimee-max" className="mt-2" />
        </div>
        <div className="rounded-xl border border-sky-200 bg-sky-50/50 p-6 dark:border-sky-900/40 dark:bg-sky-950/10">
          <p className="text-xs font-semibold uppercase text-sky-900 dark:text-sky-300">
            Fraude détectée (CNAF)
          </p>
          <Stat metricId="caf-fraude-detectee-2025" className="mt-2" />
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Contexte HCFiPS (tous régimes)</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          {social.map((m) => (
            <div
              key={m.id}
              className="rounded-lg border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900/30"
            >
              <Stat metricId={m.id} size="sm" />
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Registre CAF</h2>
        <div className="mt-4">
          <MetricsTable metrics={cafMetrics} />
        </div>
      </section>
    </div>
  );
}
