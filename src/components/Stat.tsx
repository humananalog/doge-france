import { getMetric } from "@/lib/registry";
import { formatMetricValue } from "@/lib/format";
import { ProofLink } from "./ProofLink";

type StatProps = {
  metricId: string;
  className?: string;
  size?: "sm" | "md" | "lg";
  showLabel?: boolean;
};

export function Stat({
  metricId,
  className = "",
  size = "md",
  showLabel = true,
}: StatProps) {
  const metric = getMetric(metricId);
  if (!metric) {
    return (
      <span className="text-red-600" title={`Métrique manquante : ${metricId}`}>
        —
      </span>
    );
  }

  const sizeClass =
    size === "lg"
      ? "text-4xl md:text-5xl font-semibold tracking-tight"
      : size === "sm"
        ? "text-xl font-semibold"
        : "text-3xl font-semibold tracking-tight";

  return (
    <div className={className}>
      {showLabel && (
        <p className="text-sm text-zinc-600 dark:text-zinc-400">{metric.label_fr}</p>
      )}
      <p className={`${sizeClass} tabular-nums text-zinc-950 dark:text-zinc-50`}>
        {formatMetricValue(metric)}
        {metric.unit === "percent" ? null : metric.unit === "count" ? null : null}
      </p>
      <p className="mt-1 text-xs text-zinc-500">Réf. {metric.as_of}</p>
      <ProofLink source={metric.source} className="mt-2" />
      {metric.notes ? (
        <p className="mt-1 text-xs text-zinc-500">{metric.notes}</p>
      ) : null}
    </div>
  );
}
