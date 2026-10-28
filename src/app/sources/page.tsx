import { AllMetricsTable } from "@/components/MetricsTable";
import { getAllMetrics } from "@/lib/registry";

export const metadata = {
  title: "Sources & registre",
};

export default function SourcesPage() {
  const count = getAllMetrics().length;

  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl font-bold tracking-tight">Sources & registre</h1>
        <p className="mt-3 max-w-3xl text-zinc-600 dark:text-zinc-400">
          {count} métriques dans{" "}
          <code className="rounded bg-zinc-200 px-1 text-sm dark:bg-zinc-800">
            data/stats/metrics.json
          </code>
          . Validation Zod en CI (<code>npm run validate</code>). Aucun montant en
          euros codé en dur dans JSX.
        </p>
      </header>

      <AllMetricsTable />
    </div>
  );
}
