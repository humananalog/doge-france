# Findings — Aides by nationality / immigrant status (primary evidence)

**Pack:** `/workspace/doge-france/reports/2026-10-31-aides-nationalite/`  
**Dig date:** 2026-10-31 (Asia/Hong_Kong)  
**Hard rule:** Maghreb / Muslim / ethnie **not** in any primary below unless noted; soft-hold inventions.

---

## A. Legal eligibility / spend (NOT fraude)

### A1. Allocations familiales — nationalité EEE vs hors EEE (CNAF via gouvernement)

| Value | Year / date | Champ | Primary URL |
|---|---|---|---|
| ~5 million bénéficiaires AF; **12,4 Md€** dépenses | 31 déc. **2013** | Allocations familiales, CNAF | https://www.assemblee-nationale.fr/dyn/14/questions/QANR5L14QE29143 |
| ~**2%** citoyens EEE + Suisse | 31 déc. 2013 | Share of AF *bénéficiaires* (not €) | same |
| ~**6%** ressortissants étrangers **hors EEE** | 31 déc. 2013 | Share of AF *bénéficiaires* (not €) | same |
| Implied ~**92%** Français (100−2−6) | 31 déc. 2013 | Residual; not stated as such in answer | same |
| CNAF **does not** have amounts by carte de résident vs titre <10 ans, nor finer nationality | stated 2014 | Explicit gap | same |
| PDF | | | https://www.assemblee-nationale.fr/dyn/14/questions/QANR5L14QE29143.pdf |

| Value | Year / date | Champ | Primary URL |
|---|---|---|---|
| près de 5 million bénéficiaires AF; **12,7 Md€** | 31 déc. **2014** | AF, CNAF | https://www.senat.fr/questions/base/2014/qSEQ140210272.html |
| ~**2%** EEE + Suisse; ~**6%** étrangers hors EEE | 31 déc. 2014 | Share of AF *bénéficiaires* | same |
| « la CNAF **ne dispose pas** de données par nationalité sur le montant des prestations versées » hors EEE vs hors-EEE buckets | réponse 12/05/2016 | Explicit gap | same |

**Soft-hold:** « hors EEE » ≠ Maghreb ≠ Muslim. No € split by nationality in these answers (only headcount %).

---

### A2. RSA — responsable de dossier hors UE/EEE

| Value | Year / date | Champ | Primary URL |
|---|---|---|---|
| **< 300 000** foyers RSA dont le responsable est issu d’un pays **hors UE/EEE** | **30 juin 2022** | CNAF + CCMSA | https://www.assemblee-nationale.fr/dyn/16/questions/QANR5L16QE5157 |
| = **15,6%** des foyers bénéficiaires du RSA | 30 juin 2022 | same | same |
| = **88,4%** des foyers RSA dont le responsable n’a **pas** la nationalité française | 30 juin 2022 | Among non-French only | same |
| Eligibility reminder: foreign nationals generally need titre de séjour authorizing work **≥ 5 years** (exceptions: refugees, subsidiary protection, apatrides, carte de résident, etc.) | law cite in answer | L. 262-4 CASF | same |

**Soft-hold:** nationality of *responsable de dossier*, not Maghreb, not « immigrés » (naturalised French count as French). No € amount for the hors-UE/EEE subset in this answer.

---

### A3. Aides personnelles au logement (APL) — ménages extra-communautaires

| Value | Year / date | Champ | Primary URL |
|---|---|---|---|
| **14,8%** des bénéficiaires APL = **859 554** ménages extra-communautaires | **Year not stated** in JO answer published **11 avril 2023** | APL bénéficiaires (ménages) | https://www.assemblee-nationale.fr/dyn/16/questions/QANR5L16QE5530 |
| of which 413 674 isolés, 83 871 couples, 362 009 with children | same | composition | same |
| **16,4%** des dépenses APL = **2,4 Md€** | same (year missing) | APL spend | same |
| PDF | | | https://www.assemblee-nationale.fr/dyn/16/questions/QANR5L16QE5530.pdf |

**Soft-hold:** « extra-communautaire » = hors UE/EEE (+ related regime as defined in answer), **not** Maghreb. Year must be flagged PASS-LOW until a dated CNAF extract is found.

---

### A4. INSEE — part of living standard from non-contributory prestations (immigrés vs non)

Source: *Les revenus et le patrimoine des ménages*, édition 2024, fiche « Niveau de vie et pauvreté des immigrés », ERFS 2021.

| Population | Prestations sociales² (€ / an / UC) | Share of niveau de vie | Year | Champ | Primary URL |
|---|---|---|---|---|---|
| Immigrés | **2 410** | **11,1%** | 2021 | FR métro, logement ordinaire, ERFS | https://www.insee.fr/fr/statistiques/7941405?sommaire=7941491 |
| Non-immigrés | **1 530** | **5,6%** | 2021 | same | same |
| Immigrés **nés en Afrique** | **3 110** | **16,4%** | 2021 | continent Africa — **not Maghreb-only** | same |
| Immigrés nés en Europe | **1 380** | **5,6%** | 2021 | same | same |
| Ensemble | 1 610 | 6,1% | 2021 | same | same |

² Prestations familiales + prestations logement + minima sociaux + prime d’activité (bruts de CRDS). **Excludes** pensions, chômage.

PDF: https://www.insee.fr/fr/statistiques/fichier/7941405/RPM2024-F18.pdf  
Local copy: `downloads/INSEE-RPM2024-F18-immigres.pdf`

**Reading discipline:** this is **share of living standard**, not « % of CAF budget going to X ». Immigrés have lower earned income and higher poverty → higher relative weight of means-tested aides. INSEE itself links Africa-origin gap partly to larger families (22% with ≥3 children vs 14% non-immigrés).

**Soft-hold Maghreb/Muslim:** « nés en Afrique » includes Maghreb **and** sub-Saharan Africa; religion not measured.

---



### A4b. INSEE 2019 — ascendance migratoire (includes descendants)

Source: *Immigrés et descendants d'immigrés*, édition 2023 — « Niveau de vie et pauvreté monétaire », ERFS **2019**.

| Population | Prestations sociales share of niveau de vie | Year | Primary URL |
|---|---|---|---|
| Immigrés | **12%** | 2019 | https://www.insee.fr/fr/statistiques/6793278?sommaire=6793391 |
| Descendants d'immigrés | **10%** | 2019 | same |
| Sans ascendance migratoire | **5%** | 2019 | same |
| Immigrés nés en Afrique | **18%** | 2019 | same — continent, not Maghreb |
| Immigrés nés en Europe | **6%** | 2019 | same |

Consistent direction with 2021 F18 (11.1% / 5.6% / 16.4% Afrique). Soft-hold Maghreb/Muslim unchanged.

### A5. Aggregate non-contributory spend (no nationality) — context only

| Value | Year | Champ | Primary URL |
|---|---|---|---|
| 63,3 Md€ prestations sociales non contributives to ordinary households | 2021 | FR métro, ERFS | https://www.insee.fr/fr/statistiques/7941379?sommaire=7941491 |
| 12,9 M ménages (44%) receive at least one | 2021 | same | same |

Use only as denominator context — **no** immigrant split on this page.

---

### A6. Documented data gaps (primary admits « no data »)

| Claim | Authority | Year | Primary URL |
|---|---|---|---|
| CNAF has no nationality amounts beyond EEE vs hors EEE for AF | Ministre / CNAF via AN + Sénat | 2014–2016 | AN Q29143 ; Sénat qSEQ140210272 |
| CNAV **ne retrace pas** la nationalité des bénéficiaires de l’ASPA | Ministre (réponse JO) | 2023 | https://questions.assemblee-nationale.fr/q16/16-4877QE.htm |
| Renewed demand for RSA/ASPA by nationality still open | AN Q6272 (17e) | Q 29/04/2025 ; renewed 03/03/2026 ; **no answer** at dig time | https://questions.assemblee-nationale.fr/q17/17-6272QE.htm |
| Sénat QE 09061 (RSA/ASPA/AAH by nationality since 2000) marked **caduque** | Sénat | 2023–2024 | https://www.senat.fr/questions/base/2023/qSEQ231109061.html |

---

### A7. CNAF statement via secondary (PASS-LOW only)

AFP Factuel (2025-11-06) quotes CNAF (28 Oct 2025): fin **2022**, toutes prestations confondues, **11%** des **13,5 millions** de foyers allocataires sont de **nationalité étrangère**.  
URL (secondary quoting primary): https://factuel.afp.com/doc.afp.com.833N2NQ  

**Soft-hold:** not a CNAF open-data table URL; caf.fr was in maintenance during this dig. Treat as PASS-LOW until a CNAF PDF/page is archived. Debunks viral « 42% » (wrong NIR/foyers ratio).

---

## B. Fraude vs erreurs (SEPARATE from legal spend)

**None of the fraude primaries below break out immigrant / Maghreb / Muslim.**

| Value | Type | Year | Champ | Primary URL |
|---|---|---|---|---|
| Estimation fraude branche famille **2,3 Md€** | **Estimated** fraude (mostly undetected) | **2018** | Branche famille | https://www.ccomptes.fr/fr/publications/la-lutte-contre-les-fraudes-aux-prestations-sociales |
| Detected by CAF ≈ **13%** of that estimate | Detected vs estimated | ~2018–2019 context | CAF | same |
| CAF paid wrongly (erreurs + fraude) ~**3 Md€** définitifs = **4,5%** of prestations | Residual wrong payments | **2018** | CAF | same |
| Organismes sociaux detected ~**1 Md€** préjudices fraude | Detected (all branches) | **2019** | Multi-organisme | same |
| CAF detected **49 030** fraudes ; préjudice **449,2 M€** (incl. 28 M€ majo 10%) | **Detected** fraude | **2024** | Branche famille | https://questions.assemblee-nationale.fr/q17/17-4323QE.htm |
| Cour: **6,3 Md€** erreurs non corrigées à 24 mois = **8%** of prestations (RSA, PPA, aides logement…); **impossibilité de certifier** comptes CNAF 2024 | **Errors** (not fraude) | exercice **2024** | Branche famille / CNAF | https://ccomptes.fr/fr/publications/certification-des-comptes-du-regime-general-de-securite-sociale-et-du-cpsti-exercice |

**Do not** equate detected fraude (0,45 Md€ CAF 2024) or residual errors (6,3 Md€) with « immigrant use of aides ».

---

## C. Strongest primary finds (ranked)

1. **INSEE ERFS 2021** — immigrés: 11,1% of living standard from non-contributory aides vs 5,6% non-immigrés; Africa-born immigrés 16,4% (continent, not Maghreb).  
2. **AN Q5157** — mid-2022: <300k / 15,6% of RSA foyers have hors-UE/EEE dossier head.  
3. **AN Q5530** — extra-communautaires: 14,8% of APL beneficiaries, 16,4% of APL € (2,4 Md€); year missing → PASS-LOW.  
4. **AN Q29143 + Sénat 2014/2016** — AF bénéficiaires ~6% hors EEE, ~2% EEE; CNAF no finer nationality €.  
5. **Cour des comptes + AN Q4323** — fraude/erreurs quantified without nationality; keep separate from A.

## D. Gaps that remain FAIL if filled by invention

- Maghreb share of AF / RSA / APL €  
- Muslim-specific benefit statistics  
- Current (post-2014) official AF nationality table finer than EEE / hors EEE  
- ASPA by nationality (CNAV says unavailable)  
- Fraude by nationality / origin
