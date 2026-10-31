import bundle from "../../data/stats/presidential-eras.json";
import type { PresidentialEra, PresidentialErasFile } from "../../schemas/presidential-eras.schema";

const file = bundle as PresidentialErasFile;

export const PRESIDENTIAL_ERA_DISCLAIMER = file.disclaimer_fr;

export function getPresidentialEras(): PresidentialEra[] {
  return file.eras;
}

/** Eras overlapping [minYear, maxYear] on the chart x-axis (inclusive years). */
export function erasForYearRange(
  minYear: number,
  maxYear: number,
): PresidentialEra[] {
  return file.eras.filter((era) => {
    const eraEnd = era.end ?? maxYear;
    return era.start <= maxYear && eraEnd >= minYear;
  });
}
