# Evidence Guard — projections / 25% bounds pack

- **Verdict:** PASS-LOW
- **Gate:** Evidence Guard (DOGE France) · 31 Oct 2026 ~09:24 HKT (Asia/Hong_Kong)
- **Pack:** `/workspace/doge-france/reports/2026-10-31-projections-immigres-25pct/`
- **Requester:** INSEE Desk · Stats (soft-hold)
- **Framing lock:** *étude · recomposition de bornes* — **never** projection ethnique / année-certitude
- **North star:** Truth

## 1. Verdict

**PASS-LOW**

Pack correctly answers Alex’s « when 25% ethnicity? » with: **no official year** + primary floors + labeled non-INSEE Pew + derived assumption band **without** shipping a certainty year. FAIL locks match Guard soft-hold. Soft-hold **lift** for *étude* bounds tiles under constraints below.

Not full PASS: Maghreb+TR/MO ~8.1% is **derived** (G1 pop + G2 logement ordinaire champs mixtes); births Maghreb/Turquie are mother-birthplace derived sums; Pew is non-official; metrics `muslim_B` illustrative mid-2070s ballpark must **never** ship as fact year (tiles-fr correctly omits it — keep that).

## 2. Checklist

| Claim | Status | Note |
|-------|--------|------|
| No INSEE ethnie/Muslim 25% year | **PASS** | 8991068 = total pop / solde only |
| G1 10.6% (2023) / 11.2% (2024) | **PASS** | 8242329 / 8612512 |
| G2 12.1% / 12% logement ordinaire | **PASS** | same |
| Maghreb+TR/MO G1+G2 ~8.1% derived | **PASS-LOW** | components MATCH 8242329; label derived required |
| Births mother Maghreb 7.86% / +Turquie 8.49% (2024) | **PASS** | T38BIS extract MATCH 8582134 |
| TeO2 Muslim 10% 18–59 | **PASS** | 6793308 |
| Héran N. Africa immigrés ~5.3% 2050 | **PASS-LOW** | INED Pop&Soc 558 — label not INSEE; G1 only |
| Pew FR 2050 12.7 / 17.4 / 18.0% | **PASS** | labeled non-INSEE; none hit 25% |
| Assumption band ~25% no year-as-fact | **PASS** | tiles-fr Tile 6 OK |
| FAIL invent year / Pew-as-INSEE / G3 / UI ethnie | **PASS** | encoded |

## 3. Soft-hold

| Scope | Lift? |
|-------|-------|
| Étude bounds tiles (framing + floors + Pew labeled + band sans année-fait) | **YES** under PASS-LOW |
| Any « hits 25% in YEAR » as fact | **NO** |
| muslim_B mid-2070s as UI year | **NO** — FAIL if shipped as fact |
| Site UI PR | Re-gate when PR drops |

Re-gate if UI titles claim ethnie/Islam 25% year, Pew presented as INSEE, TeO 10% as all-ages, or derived floors unlabeled.
