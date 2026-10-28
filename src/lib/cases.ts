import casesBundle from "../../data/cases/manifest.json";
import type { CafCase } from "./types";

type CasesFile = { version: 1; cases: CafCase[] };

const bundle = casesBundle as CasesFile;

export const CAF_CASES: CafCase[] = bundle.cases;

export function getCaseById(id: string): CafCase | undefined {
  return CAF_CASES.find((c) => c.case_id === id);
}
