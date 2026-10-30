# Méthodologie / Methodology — France immigration series (primary sources only)

**Generated:** 2026-10-30 (Asia/Hong_Kong)  
**Evidence rule:** every `value` in `series.json` has a primary `source_url` (INSEE, MI-DGEF/DSED / data.gouv, or Assemblée nationale answers citing DSED). No invented interpolations.

---

## FR — Ce que chaque série EST / N’EST PAS

### Proxies « légaux / officiels » (longue durée)

| series_id | EST | N’EST PAS |
|-----------|-----|-----------|
| `stock_immigres` | Stock de personnes **immigrées** (nées étrangères à l’étranger, résidant en France), recensements + estimations INSEE | Flux d’entrées ; « immigration légale » seule ; stock d’étrangers uniquement (certains immigrés sont naturalisés) |
| `stock_immigres_part` | Part (%) des immigrés dans la population | Idem |
| `solde_migratoire_metro` / `solde_migratoire_france` | **Solde migratoire NET** (entrées − sorties), estimé indirectement | Entrées légales seules ; titres de séjour ; asile |
| `entrees_immigres_ear` | Entrées d’immigrés estimées via enquêtes annuelles de recensement (≥1 an), 2006–2023 | Premiers titres ; flux irréguliers isolés (le recensement inclut les irréguliers **sans les identifier**) |
| `premiers_titres_sejour` | Premiers titres délivrés aux ressortissants de **pays tiers** (hors Britanniques dans la série retenue) | Immigration UE (libre circulation) ; renouvellements ; stock irrégulier |
| `acquisitions_nationalite_ensemble` | Toutes acquisitions de nationalité (décret + déclaration + sans formalité), 2008–2025 | Flux d’immigration ; naturalisations seules |
| `naturalisations_annuelles` | Naturalisations **par décret** uniquement | Ensemble des acquisitions ; régularisations de séjour |
| `acquisitions_nationalite_historique` | Série longue 1946–1999 (CD-AX1) | Continuum méthodologique avec 2008+ — **rupture** : ne pas chaîner sans rupture visuelle |
| `regularisations_annuelles` | Volumes d’**admission exceptionnelle au séjour (AES)** / régularisations publiés | Stock d’irréguliers ; OQTF ; continuum 1950→ |

### Proxies « irréguliers » (courts, honnêtes)

| series_id | EST | N’EST PAS |
|-----------|-----|-----------|
| `oqtf_prononcees` | Obligations de quitter le territoire **prononcées** (DSED via Assemblée), ~2018–2024 | Stock d’immigrés illégaux ; continuum depuis 1950 |
| `mesures_eloignement_prononcees` | Agrégat plus large de mesures d’éloignement prononcées | Stock irrégulier |
| `eloignements_executes` | Éloignements **exécutés** (forcés + aidés + spontanés), ~2014–2025 | Stock ; taux d’exécution = exécutés / prononcés (dénominateurs différents, délais, départs non observés) |

### Affirmation centrale (obligatoire pour le site)

> **Il n’existe PAS de série officielle continue du « nombre total d’immigrés illégaux » en France de 1950 à aujourd’hui.**  
> Les proxies disponibles (OQTF, mesures d’éloignement, éloignements exécutés, AES) commencent au mieux dans les années 2000/2010 et mesurent des **actes administratifs / flux**, pas un stock.

Ne jamais tracer une ligne « illegal immigration 1950–2000 » inventée.

---

## EN — What each series IS / IS NOT

| series_id | IS | IS NOT |
|-----------|----|--------|
| `stock_immigres` | Census/estimate stock of **immigrants** (foreign-born abroad, living in France) | Legal inflows alone; irregular stock |
| `solde_migratoire_*` | **Net** migration (in − out), residual estimate | Legal entries; residence permits |
| `entrees_immigres_ear` | Immigrant arrivals (≥1 year) from census surveys | Permit counts; identified irregular flows |
| `premiers_titres_sejour` | First residence permits to third-country nationals | EU free movement; irregular stock |
| `naturalisations_annuelles` | Naturalisations by decree | All nationality acquisitions; stay regularisations |
| `regularisations_annuelles` | Exceptional admission to stay (AES) volumes | Continuous illegal stock since 1950 |
| `oqtf_prononcees` / `eloignements_executes` | Removal orders issued / removals carried out | Stock of undocumented residents 1950–today |

**Hard rule:** There is **no continuous official “total illegal immigration” stock series from 1950**. Do not fabricate one for charts.

---

## Gaps (honest)

- **Stock immigrés:** census years until ~2006, then denser annual estimates; geographic field changes (métropole → France hors Mayotte → France + Mayotte 2014+). **Rupture de série 2024** (INSEE methodological note on census protocol) — 2024–2025 not directly comparable to earlier years.
- **Solde migratoire:** metro continuous ~1946–2020; France entière 1995–2023 (2021–2023 provisional / conventional). 1962 spike includes Algerian repatriates.
- **Entrées EAR / premiers titres:** recent decades only (~2006+ / ~2011+).
- **Naturalisations:** historical 1946–1999 vs modern 2008–2025 — **method break**; gap ~2000–2007 in this package for “ensemble” modern definition (use historical series separately).
- **Régularisations AES:** primary points **2008–2013** (data.gouv 15058) then **gap 2014–2020**, then **2021–2025** (MI-DSED). Do not interpolate the gap.
- **Irrégulier:** no pre-~2000s continuous official stock; OQTF series here from 2018; éloignements exécutés from 2014.

---

## Recommended chart layout (DOGE France site)

1. **Panel A — Stock (long run):** `stock_immigres` (and optional `%`) from 1954/1946 with markers on census years; annotate 2014 Mayotte and **2024 series break**.
2. **Panel B — Net migration (annual):** `solde_migratoire_metro` 1950–2020; overlay or switch to `solde_migratoire_france` for recent years; caption: **NET, not legal entries**.
3. **Panel C — Legal flow proxies (recent):** dual series `entrees_immigres_ear` + `premiers_titres_sejour` (different concepts — legend must say so).
4. **Panel D — Nationality:** `naturalisations_annuelles` and/or `acquisitions_nationalite_ensemble` 2008+; optional separate inset for historique 1946–1999 with break.
5. **Panel E — Irregular proxies (separate, never back-cast to 1950):** `oqtf_prononcees` + `eloignements_executes` (+ optional `regularisations_annuelles` with 2014–2020 gap shown as missing).

**Never** plot a fake continuous “illegal” line for 1950–2000. Prefer a dashed/missing segment or an empty panel with the methodology sentence above.

---

## Units & fields

- All person counts in `series.json` are absolute **persons** (stocks from INSEE “milliers” × 1000).
- Percents remain in `percent`.
- Prefer series notes on each point for provisional flags and champ changes.
