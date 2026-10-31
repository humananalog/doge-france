"use client";

import { erasForYearRange } from "@/lib/presidential-eras";
import type { PresidentialEra } from "../../../schemas/presidential-eras.schema";
import { xScale } from "./time-series-math";
import { usePresidentialEras } from "./PresidentialEraContext";

type Props = {
  minYear: number;
  maxYear: number;
  innerWidth: number;
  innerHeight: number;
};

function eraFill(side: PresidentialEra["side"]): string {
  if (side === "left") return "var(--era-band-left)";
  if (side === "right") return "var(--era-band-right)";
  return "var(--era-band-neutral)";
}

function eraYearSpan(era: PresidentialEra, chartMax: number): [number, number] {
  const end = era.end ?? chartMax;
  return [era.start, end];
}

export function PresidentialEraBands({
  minYear,
  maxYear,
  innerWidth,
  innerHeight,
}: Props) {
  const { showEras, hydrated } = usePresidentialEras();

  if (!hydrated || !showEras) {
    return null;
  }

  const eras = erasForYearRange(minYear, maxYear);

  return (
    <g className="presidential-era-bands" aria-hidden="true">
      {eras.map((era) => {
        const [y0, y1] = eraYearSpan(era, maxYear);
        const clipStart = Math.max(y0, minYear);
        const clipEnd = Math.min(y1, maxYear);
        if (clipStart > clipEnd) return null;

        const x0 = xScale(clipStart, minYear, maxYear, innerWidth);
        const x1 = xScale(clipEnd + 1, minYear, maxYear, innerWidth);
        const w = Math.max(x1 - x0, 2);

        const label =
          w >= 52
            ? `${era.president} · ${era.party.split(" ")[0]}`
            : w >= 36
              ? era.president
              : null;

        return (
          <g key={`${era.start}-${era.president}`}>
            <rect
              x={x0}
              y={0}
              width={w}
              height={innerHeight}
              fill={eraFill(era.side)}
              opacity="var(--era-band-alpha)"
            />
            {label && (
              <text
                x={x0 + w / 2}
                y={12}
                textAnchor="middle"
                className="fill-zinc-600 text-[8px] font-medium dark:fill-zinc-300"
                style={{ pointerEvents: "none" }}
              >
                {label}
              </text>
            )}
          </g>
        );
      })}
    </g>
  );
}
