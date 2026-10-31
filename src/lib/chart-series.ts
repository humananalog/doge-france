import type { ImmigrationSeriesPoint } from "../../schemas/immigration-series.schema";
import type { LineSeriesConfig } from "@/components/charts/time-series-math";

export function toChartPoints(rows: ImmigrationSeriesPoint[]) {
  return rows.map((r) => ({ year: r.year, value: r.value }));
}

export function seriesFromRows(
  id: string,
  label: string,
  color: string,
  rows: ImmigrationSeriesPoint[],
  opts?: Partial<LineSeriesConfig>,
): LineSeriesConfig {
  return {
    id,
    label,
    color,
    points: toChartPoints(rows),
    ...opts,
  };
}
