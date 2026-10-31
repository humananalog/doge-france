import { Stat } from "@/components/Stat";
import { MetricsTable } from "@/components/MetricsTable";
import { ImmigrationGenerationLeads } from "@/components/ImmigrationGenerationLeads";
import { ImmigrationProxyTriangulation } from "@/components/ImmigrationProxyTriangulation";
import { ImmigrationWorldOriginsMap } from "@/components/ImmigrationWorldOriginsMap";
import { ImmigrationOfficialCharts } from "@/components/ImmigrationOfficialCharts";
import { getMetricsByCategory } from "@/lib/registry";

export const metadata = {
  title: "Immigration",
};

export default function ImmigrationPage() {
  const metrics = getMetricsByCategory("immigration");

  return (
    <div className="space-y-10">
      <header>
        <h1 className="text-3xl font-bold tracking-tight">
          Immigration & éloignements
        </h1>
        <p className="mt-3 max-w-3xl text-zinc-600 dark:text-zinc-400">
          Portrait INSEE (générations G1–G3), séries chronologiques, puis
          chiffres Cour des comptes, NEB, Assemblée nationale et Vie publique —
          pas de statistiques non sourcées.
        </p>
      </header>

      <ImmigrationGenerationLeads />

      <ImmigrationProxyTriangulation />

      <ImmigrationWorldOriginsMap />

      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900/40">
          <Stat metricId="immig-cout-direct" size="sm" />
        </div>
        <div className="rounded-xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900/40">
          <Stat metricId="immig-oqtf-taux-execution" size="sm" />
        </div>
        <div className="rounded-xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900/40">
          <Stat metricId="immig-mesures-2025" size="sm" />
        </div>
        <div className="rounded-xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900/40">
          <Stat metricId="immig-executes-2025" size="sm" />
        </div>
      </section>

      <ImmigrationOfficialCharts />

      <section>
        <h2 className="text-xl font-semibold">Tableau complet</h2>
        <div className="mt-4">
          <MetricsTable metrics={metrics} />
        </div>
      </section>
    </div>
  );
}
