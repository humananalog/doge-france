export type ChartPoint = { year: number; value: number };

export type LineSeriesConfig = {
  id: string;
  label: string;
  color: string;
  points: ChartPoint[];
  /** Do not connect segments across these years (gap after year N). */
  breakAfterYears?: number[];
  strokeWidth?: number;
  strokeDasharray?: string;
};

export type ChartAnnotation = {
  year: number;
  label: string;
};

export type MissingDataRange = {
  from: number;
  to: number;
  label: string;
};

export const CHART_MARGIN = { top: 12, right: 48, bottom: 36, left: 52 };

export function extentYears(series: LineSeriesConfig[]): [number, number] {
  let min = Infinity;
  let max = -Infinity;
  for (const s of series) {
    for (const p of s.points) {
      if (p.year < min) min = p.year;
      if (p.year > max) max = p.year;
    }
  }
  return [min, max];
}

export function extentValues(
  series: LineSeriesConfig[],
  secondary?: LineSeriesConfig[],
): [number, number] {
  let min = Infinity;
  let max = -Infinity;
  const all = [...series, ...(secondary ?? [])];
  for (const s of all) {
    for (const p of s.points) {
      if (p.value < min) min = p.value;
      if (p.value > max) max = p.value;
    }
  }
  if (!Number.isFinite(min)) return [0, 1];
  if (min === max) {
    const pad = Math.abs(min) * 0.1 || 1;
    return [min - pad, max + pad];
  }
  const pad = (max - min) * 0.08;
  return [min - pad, max + pad];
}

export function xScale(
  year: number,
  minYear: number,
  maxYear: number,
  innerWidth: number,
): number {
  if (maxYear === minYear) return innerWidth / 2;
  return ((year - minYear) / (maxYear - minYear)) * innerWidth;
}

export function yScale(
  value: number,
  minVal: number,
  maxVal: number,
  innerHeight: number,
): number {
  if (maxVal === minVal) return innerHeight / 2;
  return innerHeight - ((value - minVal) / (maxVal - minVal)) * innerHeight;
}

/** Split points into contiguous segments respecting breakAfterYears. */
export function lineSegments(
  points: ChartPoint[],
  breakAfterYears: number[] = [],
): ChartPoint[][] {
  if (points.length === 0) return [];
  const breaks = new Set(breakAfterYears);
  const segments: ChartPoint[][] = [];
  let current: ChartPoint[] = [points[0]!];
  for (let i = 1; i < points.length; i++) {
    const prev = points[i - 1]!;
    const next = points[i]!;
    if (breaks.has(prev.year)) {
      segments.push(current);
      current = [next];
    } else {
      current.push(next);
    }
  }
  segments.push(current);
  return segments;
}

export function polylinePath(
  points: ChartPoint[],
  minYear: number,
  maxYear: number,
  minVal: number,
  maxVal: number,
  innerWidth: number,
  innerHeight: number,
): string {
  return points
    .map((p, i) => {
      const x = xScale(p.year, minYear, maxYear, innerWidth);
      const y = yScale(p.value, minVal, maxVal, innerHeight);
      return `${i === 0 ? "M" : "L"} ${x.toFixed(2)} ${y.toFixed(2)}`;
    })
    .join(" ");
}

export function tickYears(minYear: number, maxYear: number, maxTicks = 8): number[] {
  const span = maxYear - minYear;
  if (span <= maxTicks) {
    const out: number[] = [];
    for (let y = minYear; y <= maxYear; y++) out.push(y);
    return out;
  }
  const step = Math.ceil(span / maxTicks / 5) * 5;
  const start = Math.ceil(minYear / step) * step;
  const ticks: number[] = [];
  for (let y = start; y <= maxYear; y += step) ticks.push(y);
  if (ticks[0] !== minYear) ticks.unshift(minYear);
  if (ticks[ticks.length - 1] !== maxYear) ticks.push(maxYear);
  return ticks;
}
