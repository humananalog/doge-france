import { formatPersonCompact } from "@/lib/format";
import type { ImmigrationSeriesPoint } from "../../../schemas/immigration-series.schema";
import {
  CHART_MARGIN,
  extentValues,
  extentYears,
  lineSegments,
  polylinePath,
  tickYears,
  xScale,
  yScale,
  type ChartAnnotation,
  type LineSeriesConfig,
  type MissingDataRange,
} from "./time-series-math";
import { PresidentialEraBands } from "./PresidentialEraBands";

const VIEW_W = 720;
const VIEW_H = 280;

function toChartPoints(rows: ImmigrationSeriesPoint[]) {
  return rows.map((r) => ({ year: r.year, value: r.value }));
}

function formatYPersons(v: number) {
  return formatPersonCompact(v);
}

function formatYPercent(v: number) {
  return `${new Intl.NumberFormat("fr-FR", { maximumFractionDigits: 1 }).format(v)} %`;
}

type Props = {
  title: string;
  description?: string;
  caption?: string;
  primary: LineSeriesConfig[];
  secondary?: LineSeriesConfig[];
  annotations?: ChartAnnotation[];
  missingRanges?: MissingDataRange[];
  showZeroLine?: boolean;
  formatYPrimary?: (v: number) => string;
  formatYSecondary?: (v: number) => string;
  sourceHint?: string;
};

export function TimeSeriesChart({
  title,
  description,
  caption,
  primary,
  secondary = [],
  annotations = [],
  missingRanges = [],
  showZeroLine = false,
  formatYPrimary = formatYPersons,
  formatYSecondary = formatYPercent,
  sourceHint,
}: Props) {
  const allPrimary = primary;
  const [minYear, maxYear] = extentYears([...allPrimary, ...secondary]);
  const [minVal, maxVal] = extentValues(allPrimary);
  const [minVal2, maxVal2] =
    secondary.length > 0 ? extentValues(secondary) : [0, 100];

  const innerW = VIEW_W - CHART_MARGIN.left - CHART_MARGIN.right;
  const innerH = VIEW_H - CHART_MARGIN.top - CHART_MARGIN.bottom;

  const yTicks = 5;
  const primaryTickValues = Array.from({ length: yTicks }, (_, i) => {
    return minVal + ((maxVal - minVal) * i) / (yTicks - 1);
  });

  const yearTicks = tickYears(minYear, maxYear);

  const zeroY =
    showZeroLine && minVal < 0 && maxVal > 0
      ? yScale(0, minVal, maxVal, innerH)
      : null;

  return (
    <figure className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/40">
      <figcaption className="mb-4 space-y-2">
        <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
          {title}
        </h3>
        {description && (
          <p className="max-w-3xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            {description}
          </p>
        )}
      </figcaption>

      <div className="overflow-x-auto">
        <svg
          viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
          className="h-auto w-full min-w-[320px] max-w-full text-zinc-700 dark:text-zinc-300"
          role="img"
          aria-label={title}
        >
          <g transform={`translate(${CHART_MARGIN.left}, ${CHART_MARGIN.top})`}>
            <PresidentialEraBands
              minYear={minYear}
              maxYear={maxYear}
              innerWidth={innerW}
              innerHeight={innerH}
            />
            {missingRanges.map((range) => {
              const x0 = xScale(range.from, minYear, maxYear, innerW);
              const x1 = xScale(range.to, minYear, maxYear, innerW);
              const w = Math.max(x1 - x0, 4);
              return (
                <g key={`${range.from}-${range.to}`}>
                  <rect
                    x={x0}
                    y={0}
                    width={w}
                    height={innerH}
                    fill="currentColor"
                    className="text-zinc-200/80 dark:text-zinc-700/50"
                    rx={2}
                  />
                  <text
                    x={x0 + w / 2}
                    y={innerH / 2}
                    textAnchor="middle"
                    className="fill-zinc-500 text-[9px] dark:fill-zinc-400"
                  >
                    {range.label}
                  </text>
                </g>
              );
            })}

            {primaryTickValues.map((v, i) => {
              const y = yScale(v, minVal, maxVal, innerH);
              return (
                <g key={`grid-${i}`}>
                  <line
                    x1={0}
                    x2={innerW}
                    y1={y}
                    y2={y}
                    stroke="currentColor"
                    strokeOpacity={0.12}
                  />
                  <text
                    x={-8}
                    y={y + 3}
                    textAnchor="end"
                    className="fill-zinc-500 text-[10px] dark:fill-zinc-400"
                  >
                    {formatYPrimary(v)}
                  </text>
                </g>
              );
            })}

            {secondary.length > 0 &&
              Array.from({ length: yTicks }, (_, i) => {
                const v =
                  minVal2 + ((maxVal2 - minVal2) * i) / (yTicks - 1);
                const y = yScale(v, minVal2, maxVal2, innerH);
                return (
                  <text
                    key={`y2-${i}`}
                    x={innerW + 8}
                    y={y + 3}
                    textAnchor="start"
                    className="fill-sky-600 text-[10px] dark:fill-sky-400"
                  >
                    {formatYSecondary(v)}
                  </text>
                );
              })}

            {zeroY != null && (
              <line
                x1={0}
                x2={innerW}
                y1={zeroY}
                y2={zeroY}
                stroke="currentColor"
                strokeOpacity={0.35}
                strokeDasharray="4 3"
              />
            )}

            {[...allPrimary, ...secondary].map((series) => {
              const isSecondary = secondary.some((s) => s.id === series.id);
              const yMin = isSecondary ? minVal2 : minVal;
              const yMax = isSecondary ? maxVal2 : maxVal;
              const segments = lineSegments(
                series.points,
                series.breakAfterYears ?? [],
              );
              return segments.map((seg, segIdx) => (
                <path
                  key={`${series.id}-${segIdx}`}
                  d={polylinePath(
                    seg,
                    minYear,
                    maxYear,
                    yMin,
                    yMax,
                    innerW,
                    innerH,
                  )}
                  fill="none"
                  stroke={series.color}
                  strokeWidth={series.strokeWidth ?? 2}
                  strokeDasharray={series.strokeDasharray}
                  strokeLinejoin="round"
                  strokeLinecap="round"
                />
              ));
            })}

            {[...allPrimary, ...secondary].flatMap((series) => {
              const isSecondary = secondary.some((s) => s.id === series.id);
              const yMin = isSecondary ? minVal2 : minVal;
              const yMax = isSecondary ? maxVal2 : maxVal;
              return series.points.map((p) => {
                const cx = xScale(p.year, minYear, maxYear, innerW);
                const cy = yScale(p.value, yMin, yMax, innerH);
                return (
                  <circle
                    key={`${series.id}-${p.year}`}
                    cx={cx}
                    cy={cy}
                    r={series.points.length > 40 ? 0 : 2.5}
                    fill={series.color}
                  >
                    <title>
                      {p.year} — {formatYPrimary(p.value)}
                    </title>
                  </circle>
                );
              });
            })}

            {annotations.map((ann) => {
              const x = xScale(ann.year, minYear, maxYear, innerW);
              return (
                <g key={ann.year}>
                  <line
                    x1={x}
                    x2={x}
                    y1={0}
                    y2={innerH}
                    stroke="#f59e0b"
                    strokeDasharray="3 3"
                    strokeOpacity={0.7}
                  />
                  <text
                    x={x + 4}
                    y={10}
                    className="fill-amber-700 text-[9px] dark:fill-amber-400"
                  >
                    {ann.label}
                  </text>
                </g>
              );
            })}

            {yearTicks.map((y) => {
              const x = xScale(y, minYear, maxYear, innerW);
              return (
                <g key={`x-${y}`}>
                  <line
                    x1={x}
                    x2={x}
                    y1={innerH}
                    y2={innerH + 4}
                    stroke="currentColor"
                    strokeOpacity={0.4}
                  />
                  <text
                    x={x}
                    y={innerH + 16}
                    textAnchor="middle"
                    className="fill-zinc-500 text-[10px] dark:fill-zinc-400"
                  >
                    {y}
                  </text>
                </g>
              );
            })}
          </g>
        </svg>
      </div>

      <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-xs text-zinc-700 dark:text-zinc-300">
        {allPrimary.map((s) => (
          <li key={s.id} className="inline-flex items-center gap-2">
            <span
              className="inline-block h-0.5 w-5 rounded-full"
              style={{ backgroundColor: s.color }}
            />
            {s.label}
          </li>
        ))}
        {secondary.map((s) => (
          <li key={s.id} className="inline-flex items-center gap-2">
            <span
              className="inline-block h-0.5 w-5 rounded-full border border-sky-500"
              style={{ backgroundColor: s.color }}
            />
            {s.label}
          </li>
        ))}
      </ul>

      {caption && (
        <p className="mt-3 text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
          {caption}
        </p>
      )}
      {sourceHint && (
        <p className="mt-2 text-xs text-zinc-500 dark:text-zinc-500">
          {sourceHint}
        </p>
      )}
    </figure>
  );
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

export { toChartPoints };
