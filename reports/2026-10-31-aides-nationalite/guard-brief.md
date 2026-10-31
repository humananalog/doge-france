# Evidence Guard handoff — Aides / nationalité / immigrés

**Pack:** `/workspace/doge-france/reports/2026-10-31-aides-nationalite/`  
**Date:** 2026-10-31 (Asia/Hong_Kong)  
**Question:** Immigrant / Maghreb-origin households « use a lot of aides »?

## Verdict map

### PASS candidates (use as-is with champ)

| ID | Claim (short) | Why PASS |
|---|---|---|
| AN Q29143 | End-2013 AF: ~5M / 12.4 Md€; ~2% EEE+CH; ~6% hors EEE bénéficiaires | Official JO answer citing CNAF; URL live |
| Sénat 2014/2016 | End-2014 AF: ~5M / 12.7 Md€; same ~2% / ~6%; CNAF no finer nationality € | Official JO; explicit gap language |
| AN Q5157 | Mid-2022 RSA: <300k / **15.6%** foyers hors UE/EEE | Official JO citing CNAF+MSA |
| INSEE F18 ERFS 2021 | Prestations non contributives = **11.1%** niveau de vie immigrés vs **5.6%** non; Afrique **16.4%** | INSEE primary table + PDF |
| INSEE 2019 ascendance | Prestations = **12%** immigrés / **10%** descendants / **5%** sans ascendance; Afrique **18%** | Primary; descendants series |
| AN Q4877 | ASPA: **no nationality data** (CNAV) | Documented gap = PASS as gap |
| AN Q6272 | RSA/ASPA nationality series still unanswered 2025–26 | Documented ongoing gap |
| CdC 2020 fraude | Est. fraude famille **2.3 Md€** (2018); residual wrong ~3 Md€ | Fraude section only |
| AN Q4323 | CAF 2024 detected fraude **449 M€** / 49 030 | Detected fraude only |
| CdC certif 2024 | **6.3 Md€** erreurs 24 mois / 8% — **errors not fraud** | Label carefully |

### PASS-LOW candidates (flag caveats)

| ID | Claim | Caveat |
|---|---|---|
| AN Q5530 APL | Extra-comm. **14.8%** bénéficiaires / **16.4%** spend / **2.4 Md€** | **Reference year missing** in JO text (answer dated Apr 2023) |
| AFP←CNAF 11% | Fin-2022: **11%** of 13.5M foyers allocataires foreign nationality | Secondary (AFP) quoting CNAF; no CNAF URL archived this dig |
| INSEE « nés en Afrique » 16.4% | Higher weight of aides in living standard | Continent ≠ Maghreb ≠ Muslim; share of living standard ≠ CAF budget share |

### FAIL inventions (block)

| Invention | Why FAIL |
|---|---|
| « X% of aides go to Maghrebis / Muslims » | **No primary** publishes Maghreb or religion benefit spend |
| « 42% of CAF are foreigners » | Wrong units (NIR individuals ÷ foyers); CNAF via AFP says ~11% foreign-nationality *foyers* |
| Hors-EEE AF ~6% = Maghreb spend | hors EEE is worldwide non-EEE; figure is % of *bénéficiaires* not €; dated 2013–14 |
| Immigrés « take most aides » | INSEE shows higher *relative* weight in living standard; absolute budget share by nationality mostly unpublished |
| Fraude 2–6 Md€ = immigrant fraud | CdC/CNAF fraude & errors have **zero** nationality split in sources found |
| Naturalised / descendants = étrangers | Immigré ≠ étranger ≠ descendant; keep labels |

## Soft-holds for any downstream claim

1. Maghreb / Muslim / ethnie → **invented unless a new primary appears**.
2. Always say **étrangers hors EEE / extra-communautaires / immigrés** exactly as the source.
3. Separate **fraude détectée**, **fraude estimée**, **erreurs**, **spend légal**.
4. Prefer **€ and % of beneficiaries** both; do not swap.

## Success check (this pack)

- [x] ≥3 distinct primary URLs with € or % (AN AF, AN RSA, AN APL, INSEE, CdC…)
- [x] Documented gaps with primary cites (CNAF no fine nationality; CNAV no ASPA nationality)
- [x] No invented Maghreb/Muslim spend %
- [x] Fraude vs legal spend separated

## Suggested Evidence Guard actions

1. Spot-check AN Q29143, Q5157, Q5530, INSEE F18 PDF text against `findings.md` tables.  
2. Mark Q5530 year as unresolved (PASS-LOW).  
3. Reject any Maghreb/Muslim % not in `sources.json`.  
4. If a later CNAF open-data nationality extract appears, upgrade AFP 11% from PASS-LOW → PASS.
