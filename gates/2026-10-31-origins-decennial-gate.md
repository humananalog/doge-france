# Gate verdict — origins-decennial (G1 geographic origins ~1950→now)

- **Verdict:** PASS-LOW
- **Gate:** Evidence Guard (DOGE France) · 31 Oct 2026 ~08:25 HKT (Asia/Hong_Kong)
- **Pack:** `/workspace/doge-france/reports/2026-10-31-origins-decennial/`
- **North star:** Truth — France has no ethnic census; pack delivers INSEE G1/G2 geographic-origin stocks with lacunes marked, never invented ethnie %

## 1. Verdict

**PASS-LOW**

Eligible for soft-hold lift on the **data pack** (method / metrics / table / tiles / sources). Any future chart UI PR must re-gate against the UI locks below. Not full PASS because: étude framing; incomplete decades; several published-derived aggregates (1962 %, 2013 Maghreb/Europe-du-Sud sums); 2008 G2 text-approx; onomastics side-panel only; minor metrics gap (no explicit 2020 `g1_by_origin` FAIL row — table/method mark it).

## 2. Rationale

Alex asked for « ethnic groups since 1950 ». The pack correctly reframes to **origines géographiques** (pays / grande région de naissance) under INSEE G1·G2 definitions, banners every file with *pas un recensement ethnique*, marks 1950 / 1954-origin / 2020-origin / G2-pre-2005 / all-age-G3 as **FAIL lacunes** without interpolating, and cites primary URLs that resolve (HTTP 200) with spot-checked figures MATCHING downloads and live pages (8242329 Fig.1–3, 6793226 XLSX Fig.2 erratum, IMMFRA05d 1962 %, FPORSOC11/16, 6793314, 6793242). Maghreb / Afrique aggregates follow INSEE published rows (or labeled sums of published country cells). Onomastics stays a side-panel cross-link. Residual LOW factors are incompleteness and derived labeling — not race/ethnie invention.

## 3. Lock checklist

| # | Lock | Status | Evidence |
|---|------|--------|----------|
| 1 | Title/banner = origines géographiques / G1·G2 — never ethnie/race | **PASS** | `metrics.json` `title_fr`: « Origines géographiques des immigrés — stocks G1·G2… »; `banner`: « Étude non officielle — proxys d'origine INSEE — pas un recensement ethnique ». `tiles-fr.md` titre lock + « Interdit titre: ethnie · ethnic groups · races ». Ethnie/ethnic appear only in forbid / truth_lock strings. |
| 2 | No interpolation of FAIL cells (1950, 1954 origin, 2020 origin, G2 pre-2005, all-age G3) | **PASS** | `table-10y.md` FAIL cells; `method.md` sampling matrix; 24 `confidence: fail` metrics with null numerator + lacune_note (« Do not interpolate » / « NEVER invent »). No invented 1950 stock or 1954 origin breakout. |
| 3 | G3 only with under-60 (or age champ) in title | **PASS** | Sole PASS G3: 2019-2020 · 4,8 M · 10,2 % · `pct_of: population_under_60_logement_ordinaire` · `age_field_mandatory_in_title: true`. `tiles-fr.md`: « Petits-enfants d'immigrés · < 60 ans · … ». All other G3 years `confidence: fail`. |
| 4 | Onomastics = side-panel / étude cross-link only | **PASS** | `tiles-fr.md` § Side panel onomastique: renvoi `../2026-10-31-onomastics/` — « ne pas fusionner ». `method.md` Related + forbid #6. Not in decade series. |
| 5 | Every PASS numeric cell → primary proof URL (or gap mark) | **PASS** (with noted derived) | PASS cells carry `primary_url` + figure. Derived cells labeled `published_vs_derived` (`pct_published_thousands_derived`, `derived_sum_of_published_cells`, `published_approx_text`) with source PDF/HTML. FAIL cells: null URL / lacune. |
| 6 | Claimed anchors resolve + spot-check | **PASS** | All checked URLs HTTP **200**. Numbers MATCH (see §5). |
| 7 | Decade sampling ~1950→now; gaps marked | **PASS** | Targets 1954…2023; 1950 explicit FAIL; 2020 origin FAIL in table; no filled gaps. |
| 8 | Maghreb/Africa = INSEE labels (not invent ethnie) | **PASS** (wording note) | 2023 Maghreb 2 091 / Afrique (Autres pays d'Afrique) 1 275 MATCH 8242329 Fig.2. Pack often labels « Afrique hors Maghreb » = same aggregate; UI should prefer published Fig.2 wording when painting 2023. |

## 4. FAIL cells correctly marked vs interpolated

| Cell | Pack mark | Interpolated? |
|------|-----------|---------------|
| 1950 G1 total / origin / G2 / G3 | FAIL | No |
| 1954 G1 origin breakout | FAIL (total PASS 2 293 / 5,4 %) | No |
| 1962 Europe-du-Sud single aggregate | lacune agrégat § (country % only) | No invent |
| G2 ≤1999 / pre-2005 | FAIL | No |
| 2008 G2 all-age by origin | FAIL (18–50 only in PDF); total ~6,5 M text approx labeled | No |
| 2020 G1 origin breakout | FAIL in `table-10y.md` / method (*total only*) | No — **note:** `metrics.json` lacks an explicit `g1_by_origin` FAIL row for 2020 (coverage + table carry the lock) |
| G3 all years except 2019-20 <60 | FAIL | No |
| 2008 invent pop_base | FAIL metric | No |

**No FAIL cell found filled with an invented ethnie % or interpolated stock.**

## 5. Primary URL spot-checks

| URL | HTTP | Spot-check |
|-----|------|------------|
| https://www.insee.fr/fr/statistiques/8242329 | 200 | Fig.1: 1954 **2 293 / 5,4**; 2020 **6 750 / 10,1**; 2023 **7 174 / 10,6**. Fig.2: Maghreb **2 091 / 29,2**; Autres pays d'Afrique **1 275 / 17,8**; Europe du Sud **1 091 / 15,2**; Amérique, Océanie **456 / 6,4**. Fig.3: Ensemble G2 **8 015**; Maghreb G2 **2597 / 32,4**; 12,1 % logement ordinaire. **MATCH** |
| https://www.insee.fr/fr/statistiques/6793226 (+ XLSX/PDF) | 200 | XLSX Fig.2 (erratum 24/05/2024): Maghreb 1968 **597** … 2021 **2038**; Europe du Sud 1968 **1737** … 2021 **1130**; Afrique hors Maghreb 2021 = 424+506+342 = **1272**. **MATCH** pack. Note: XLSX Fig.1 2020 effectif **6848** ≠ 8242329 **6750** — pack correctly anchors KPI on 8242329. |
| https://www.insee.fr/fr/statistiques/fichier/1371772/IMMFRA05d.PDF | 200 | 1962 %: Europe **78,7**; Algérie+Maroc+Tunisie **11,6+1,1+1,5=14,2**; Autres Afrique **0,7**; Asie **2,4**; Amérique, Océanie **3,2**. Maghreb k ≈ 0,142×2861≈**406**. **MATCH** |
| FPORSOC11 PDF | 200 | 2008 Maghreb **1 600**; ES+IT+PT **260+320+580=1 160**; Ensemble **5 340**; G2 text « environ **6,5** millions ». **MATCH** |
| FPORSOC16 PDF | 200 | 2013 Maghreb **760+709+259=1 728**; Europe du Sud **245+289+608=1 142**; Ensemble G1 **5 835**; G2 Ensemble **6 840**; G2 Maghreb **1040+700+290=2 030**. **MATCH** († derived sums labeled) |
| https://www.insee.fr/fr/statistiques/6793314 | 200 | G2 Ensemble 2005 **4 275** · 2011 **6 558** · 2021 **7 349**; Maghreb G2 **1 302** · **1 962** · **2 445**. **MATCH** |
| https://www.insee.fr/fr/statistiques/6793242 | 200 | « **10,2 %** des personnes de **moins de 60 ans** … soit **4,8 millions** ». **MATCH** |
| https://www.insee.fr/fr/statistiques/6793230 | 200 | Linked for G2 2021 detail (pack cites 7 349). |
| downloads SHA256 | — | All 5 files in `SHA256SUMS.txt` **OK** |

**Mismatches:** none material. Label alias Afrique hors Maghreb ↔ Autres pays d'Afrique; 2020 total millésime 6750 vs 6848 across publications (documented preference for 8242329).

## 6. Short UI locks (future chart PR)

1. **Title / aria / H1:** « Origines géographiques des immigrés » / stocks G1 (et G2) — **FAIL** merge if « ethnie / ethnic groups / races / évolution des ethnies depuis 1950 ».
2. **Banner:** keep *Étude non officielle — proxys d'origine INSEE — pas un recensement ethnique*.
3. **Series paint:** one color/series per INSEE aggregate; for 2023 prefer Fig.2 labels (Maghreb · Autres pays d'Afrique · Europe du Sud · …). **FAIL** inventing Maghreb/Asie country micro-shares without cited breakout.
4. **Gaps:** 1950, 1954 origin, 2020 origin breakout, G2 pre-2005, all-age G3 → blank / lacune badge — **never** interpolate or connect-the-dots across FAIL years.
5. **G3 tile:** age champ **mandatory** in title (« < 60 ans · logement ordinaire · métropole · 2019-2020 »).
6. **G2:** always show champ *logement ordinaire* (+ géo millésime); do not unlabeled-stack G1+G2+G3 into « % de la France ».
7. **Onomastics:** side-panel link only — never fuse into decade chart or ethnie KPI.
8. **Tooltip / footnote:** thousands + % + `primary_url` (8242329 / 6793226 / PDF) per cell; mark derived sums.
9. Re-gate this checklist on any chart PR before soft-hold lift for site UI (same pattern as worldmap PASS-LOW).

## 7. Related

Prior worldmap gate: `/workspace/doge-france/gates/2026-10-31-pr11-worldmap-origins-choropleth.md` — **PASS-LOW** (G1 Fig.2 choropleth). This decennial pack is consistent with that Truth framing.

## Soft-hold

**Lifted for the origins-decennial data pack** under PASS-LOW. Site chart remains soft-hold until a UI PR re-gates against §6.
