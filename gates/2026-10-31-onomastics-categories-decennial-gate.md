# Gate verdict — onomastics-categories-decennial

- **Verdict:** PASS-LOW
- **Gate:** Evidence Guard (DOGE France) · 31 Oct 2026 ~08:50 HKT (Asia/Hong_Kong)
- **Pack:** `/workspace/doge-france/reports/2026-10-31-onomastics-categories-decennial/`
- **North star:** Truth — France has no ethnie/religion census; pack delivers **étude onomastique non officielle** decade shares by desk cultural/geographic name clusters (INSEE fichier + INED P&S 565 grounding), never invented religion % or ethnie census from prénoms
- **Prior:** onomastics PASS-LOW · grounding PASS-LOW · PR #12 onomastics UI PASS-LOW · origins-decennial PASS-LOW (G1 geographic — **separate**)

## 1. Verdict

**PASS-LOW**

Eligible for soft-hold lift on the **data pack** (method / lexicon / metrics / table-10y / tiles-fr / sources). Site chart / panel UI stays soft-hold until an extend PR re-gates against §6 UI locks. Not full PASS because: desk-defined clusters (not INSEE taxonomy); Asie lacune + Slaves low-confidence; Afrique medium under-coverage; 1950 classical stock is an **assumption**; lexicon is an illustrative high-frequency proxy (≠ Humpert & Schneiderheinze full algorithm).

## 2. Rationale

Alex asked for classical name categories ~1950 then decade trends (Maghreb, Slavic, American, classical FR…). The pack correctly frames as **étude onomastique non officielle** with inferred cultural/geographic name clusters, labels 1950 as assumption classical stock (not « native names census »), marks Asie lacune / Slaves low-conf / Afrique medium, documents mutual exclusion + RAYANE-in / RAYAN-out, fails religion-from-names, cites TeO religion only as a separate leg, and keeps G1 origins-decennial as a **separate** chart. Primary fichier cells recomputed from `prenoms-2025-nat.csv` **MATCH** every both-sex metric row (0 mismatches). Lead/GM headlines verify (rounded): classiques FR **75.3%→2.5%**; Maghreb/arabo-musulman **0.12%→5.9%**; anglo **0.16%→2.6%**; Afrique **~0→1.0%**; Asie thin (~0.02%); Slaves low-conf (~0.29%). Residual LOW = étude/proxy/incomplete — not ethnie/religion invention.

## 3. Lock checklist

| # | Lock | Status | Evidence |
|---|------|--------|----------|
| 1 | Étude non officielle banner / labels on shipable surfaces | **PASS** | `method.md` banner; `metrics.json` `banner` + `chart_banner` (« étude non officielle · inferred cultural/geographic name cluster · NOT religion % · NOT ethnie census »); `table-10y.md` / `tiles-fr.md` / `sources.md` / `lexicon.json` banner |
| 2 | Never ethnie / ethnic census framing | **PASS** | Ethnie/ethnic appear only in forbid / must_not_claim / « PAS un recensement ». Titles = cultural/geographic name clusters / classe de prénoms |
| 3 | Religion-from-names = FAIL; TeO religion separate leg only | **PASS** | `religion_from_names: FAIL` in lexicon + metrics; fail_do_not_ship #1; TeO URL `6793308` labeled « separate primary leg only »; no Islam/Christian % chart series |
| 4 | 1950 baseline = assumption classical stock (labeled) | **PASS** | `baseline_assumption` year 1950 label « classical FR naming stock reference (assumption) » + note NOT « prénoms natifs »; tiles KPI « Classiques FR (assumption 1950) »; table banner |
| 5 | Asie / Slaves low-confidence if claimed | **PASS** | All 27 asie rows `confidence: low` + `lacune: true`; all 27 slaves rows `confidence: low` + fashion-contamination note; table Confiance section; tiles callout |
| 6 | Mutual exclusion of bundles documented | **PASS** | `lexicon.mutual_exclusion_priority` Maghreb→Afrique→Asie→Slaves→anglo→classiques; method §4; raw name overlaps between clusters = **none**; turkish_secular side list **not** merged into Asie |
| 7 | Primary URLs: INED P&S 565 + INSEE fichier 8595130 — HTTP + spot-check | **PASS** (with known ined.fr outage) | See §5 |
| 8 | Not fused with origins-decennial G1 chart | **PASS** | method « Séparé » → origins-decennial; fail_do_not_ship « merge with G1… »; tiles « Ne pas empiler… »; origins pack tiles: onomastics side-panel only « ne pas fusionner » |
| 9 | No inventing % musulmans as stated; markers inferred | **PASS** | must_not_claim / Interdits copy / FAIL list; chart_banner carries **inferred**; no `origin_status` JSON field (same pattern as prior onomastics pack — framing banner carries inferred) |
| 10 | Every PASS cell → primary_url (+ grounding) or gap/assumption mark | **PASS** | 162/162 metrics have `primary_url` (8595130) + `ined565_grounding_url` (HAL); baseline_assumption marked; asie lacune / slaves low labeled |

## 4. Headline verification (Lead/GM focus)

Recomputed from CSV with lexicon exclusive sets (sex-specific) vs `metrics.json` / `table-10y.md`:

| Cluster | 1950 pack | 2025 pack | CSV recompute | Lead ~round | Conf |
|---------|-----------|-----------|---------------|-------------|------|
| classiques_fr | 75.292% (663815) | 2.45% (14445) | **MATCH** | 75.3→2.5 | high |
| maghreb_arabo_musulman | 0.117% (1030) | 5.86% (34545) | **MATCH** | 0.12→5.9 | high |
| americain_anglo | 0.158% (1390) | 2.6% (15325) | **MATCH** | 0.16→2.6 | high |
| afrique_hors_maghreb | 0.002% (20) | 0.975% (5745) | **MATCH** | 0→1.0 | medium |
| asie (lacune) | 0.001% (5) | 0.021% (125) | **MATCH** | thin | **low** |
| slaves | 0.032% (280) | 0.293% (1730) | **MATCH** | low-conf | **low** |

- Denominators 1950…2025 (M/F/both): **MATCH** CSV for all 9 years
- All 162 year×cluster×sex both-sex + sex-split rows: **0 count/share mismatches** vs CSV
- RAYANE ∈ Maghreb M; RAYAN / RYAN / ADAM / YANIS / NOAH / NOUR **excluded** — **PASS**

## 5. Primary URL spot-checks

| URL | HTTP | Spot-check |
|-----|------|------------|
| https://www.insee.fr/fr/statistiques/8595130 | **200** | Fichier des prénoms page live; local CSV symlink → prior pack (16.5 MB, header `sexe;prenom;periode;valeur;rang`, years through 2025). Denoms + cluster sums **MATCH** |
| https://hal.science/hal-04625724 | **200** | P&S 565 EN mirror. Local `hal.txt`: « 94% of immigrants from North Africa have first names classified as Arab-Muslim »; « In 82% of cases, an Arab-Muslim… »; African first name → origin ~95%. **MATCH** method grounding (bundle membership only — not birth-share→% ethnique/religieux) |
| https://doi.org/10.3917/popsoc.565.0001 | 302 → cairn.info | Redirect OK; cairn fetch from box returned 000 (blocked/unreachable). **HAL secondary is the live proof** (same residual as grounding gate) |
| https://www.ined.fr/…/quels-prenoms-les-immigres-donnent-ils-a-leurs-enfants | **503** | Known outage (prior gates). Keep HAL + local `annex.pdf` / `hal-doc.pdf` |
| Local annex.pdf / annex.txt | OK | CAT1 regroup: « Prénoms Arabo-musulmans = 221,252,224,… »; « Prénoms Anglophones et internationaux = 135,168,368,697 » — **MATCH** lexicon `ined565_class_map` |
| https://www.insee.fr/fr/statistiques/6793308 | **200** | TeO religion separate leg only — not fused into name shares |
| https://www.insee.fr/fr/statistiques/8242329 | **200** | Immigrés pop context ~5%/5.4% — pack forbids « 95% native names » deduction |

**Mismatches:** none material. ined.fr 503 + cairn unreachable from box — mitigated by HAL 200 + local annex/hal PDFs.

## 6. UI locks (any #12 extend / categories chart PR)

Re-gate before soft-hold lift for site UI:

1. **Banner mandatory** on every panel/chart: *Étude onomastique non officielle — faisceaux culturels/géographiques de prénoms (desk) — pas un recensement ethnique — pas des % religion* (or `chart_banner` verbatim).
2. **Titles / aria / H1:** cultural/geographic **name clusters** / classe de prénoms — **FAIL** if « ethnie / ethnic groups / % musulmans / % chrétiens / religion from names ».
3. **1950 classique:** always « assumption / référence stock civil mid-century » — never « prénoms natifs » / « 95% français de souche ».
4. **Series paint:** one series per cluster; Asie + Slaves must show **low-confidence / lacune** badge; Afrique **medium** + lower-bound note.
5. **Maghreb / arabo-musulman:** label = P&S 565 **name class** only; hard limit copy « ≠ % musulmans / ≠ recensement ethnique »; footnote RAYANE in / RAYAN·RYAN out.
6. **No religion-% chart** from prénoms; TeO `6793308` only as separate religion leg with survey URL that states religion.
7. **Non-fusion:** do **not** stack or merge with origins-decennial G1 geographic chart / worldmap choropleth — side panel or separate étude only (origins gate lock #4 / #7).
8. **Tooltip / footnote:** count + share + `primary_url` 8595130 + grounding HAL/ined565 per point; confidence tag.
9. **No parent×child ethnic matrices**; no G1/G2/G3 KPI swap; no fraude/€.
10. Re-gate this checklist on the extend PR head (CI + copy + non-fusion) before UI soft-hold lift.

## 7. Soft-hold

| Scope | Lift? |
|-------|-------|
| **Data pack** (method / lexicon / metrics / table / tiles / sources) | **YES** — lift under PASS-LOW |
| **Site chart / panel UI** (extend of PR #12 or new PR) | **NO** — remain soft-hold until §6 re-gate |

## 8. Residuals (non-blocking)

1. No per-row `origin_status: inferred` field — inferred carried by pack/chart banners (same as prior onomastics PASS-LOW). Optional hygiene: add field on next metrics bump.
2. ined.fr P&S 565 still **503**; cairn DOI target unreachable from box — HAL + local annex are live proof.
3. Slaves not a dedicated published P&S 565 bundle (desk etymology; lexicon states this) — correctly `confidence: low`.
4. Asie near-zero / unstable — correctly lacune; do not headline as a trend.
5. Lexicon is desk high-frequency proxy, not the full Humpert CAT1 algorithm exhaust — ceiling stays PASS-LOW.

## Related

- Prior onomastics: store `2026-10-31-onomastics-verdict.md` + `…-grounding-verdict.md` — PASS-LOW
- PR #12 UI: `/workspace/doge-france/gates/2026-10-31-pr12-onomastics-ui-gate.md` — PASS-LOW (Mohamed/Jean tiles; this pack **extends** categories — re-gate UI)
- Origins-decennial: `/workspace/doge-france/gates/2026-10-31-origins-decennial-gate.md` — PASS-LOW; onomastics side-panel only
