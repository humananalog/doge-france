import { getAllMetrics } from "@/lib/registry";
import { formatMetricValue, kindLabel } from "@/lib/format";
import { ProofLink } from "./ProofLink";
import type { Metric } from "@/lib/types";

export function MetricsTable({ metrics }: { metrics: Metric[] }) {
  return (
    <div className="overflow-x-auto rounded-lg border border-zinc-200 dark:border-zinc-800">
      <table className="min-w-full divide-y divide-zinc-200 text-sm dark:divide-zinc-800">
        <thead className="bg-zinc-50 dark:bg-zinc-900/80">
          <tr>
            <th className="px-4 py-3 text-left font-semibold">Indicateur</th>
            <th className="px-4 py-3 text-left font-semibold">Valeur</th>
            <th className="px-4 py-3 text-left font-semibold">Nature</th>
            <th className="px-4 py-3 text-left font-semibold">Preuve</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-zinc-100 bg-white dark:divide-zinc-800 dark:bg-zinc-950">
          {metrics.map((m) => (
            <tr key={m.id} className="align-top">
              <td className="px-4 py-3">
                <p className="font-medium text-zinc-900 dark:text-zinc-100">
                  {m.label_fr}
                </p>
                <p className="text-xs text-zinc-500">
                  {m.id} · {m.as_of}
                </p>
              </td>
              <td className="px-4 py-3 tabular-nums font-medium">
                {formatMetricValue(m)}
              </td>
              <td className="px-4 py-3">
                <span className="rounded-full bg-zinc-100 px-2 py-0.5 text-xs font-medium dark:bg-zinc-800">
                  {kindLabel(m.kind)}
                </span>
              </td>
              <td className="px-4 py-3">
                <ProofLink source={m.source} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function AllMetricsTable() {
  return <MetricsTable metrics={getAllMetrics()} />;
}
