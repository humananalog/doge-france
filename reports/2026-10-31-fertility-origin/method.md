# Fécondité (ICF / descendance) par pays de naissance — primary pack

> **Étude non officielle — proxys géographiques INSEE (pays de naissance / lien à la migration) — PAS une « fécondité musulmane »**

**Desk:** INSEE Desk · Stats · 31 oct. 2026 (Asia/Hong_Kong)  
**North star:** Truth  
**Soft-hold:** Evidence Guard before any site UI / tile  
**Related gate draft:** `/workspace/doge-france/gates/2026-10-31-fertility-aides-claims-gate.md` (PASS-LOW on geo ICF; invent Muslim = FAIL)  
**Paths:** `/workspace/doge-france/reports/2026-10-31-fertility-origin/` · mirror `/workspace/insee-desk/reports/2026-10-31-fertility-origin/`

---

## Question (Truth framing)

Alex (via doge France) claims fertility of families from Muslim-majority / Maghreb-origin immigration is « way above » native French, plus heavy use of aides.

This pack delivers **only** what INSEE/INED publish: **ICF ajusté** and **descendance finale** by **lieu / pays de naissance** (and immigrant / descendant status).  
**Religion is never in the primary tables.** Inventing a « Muslim TFR / fécondité musulmane » = **FAIL**.

---

## Définitions (INSEE wording)

| Terme | Définition INSEE |
|---|---|
| **Indicateur conjoncturel de fécondité (ICF)** | Nombre d'enfants qu'aurait une femme tout au long de sa vie, si les taux de fécondité observés l'année considérée à chaque âge demeuraient inchangés. (= TFR / period fertility) |
| **ICF ajusté (nées à l'étranger)** | ICF corrigé pour tenir compte de la fécondité plus faible **avant** l'arrivée en France (sinon surestimation). Méthode Reynaud / TeO2 — voir encadré IP 1939 et DT 2023-05. |
| **Descendance finale** | Nombre moyen d'enfants des femmes d'une même génération en fin de vie féconde (15–50 ans), sans tenir compte de la mortalité. |
| **Immigré** | Personne née étrangère à l'étranger et résidant en France (reste immigré après naturalisation). |
| **Née à l'étranger** | Champ **état civil / ICF** — on connaît le pays de naissance, **pas** si la personne est immigrée (nationalité à la naissance absente de l'état civil). **≠ immigrée.** |
| **Maghreb (nomenclature INSEE ici)** | Algérie, Maroc, Tunisie (pays de naissance). |
| **Sans ascendance migratoire directe** | Ni immigrée ni descendante d'immigrés. |

**Do not conflate:** nationalité de la mère ≠ pays de naissance de la mère ≠ statut immigré ≠ religion.

---

## Champs (locks)

| Série | Année | Géographie | Âge / génération | Source primaire |
|---|---|---|---|---|
| ICF ajusté par pays de naissance | **2021** (série 2006–2021) | France hors Mayotte ≤2013 ; France y c. Mayotte ≥2014 | Taux par âge année civile | [IP 1939](https://www.insee.fr/fr/statistiques/6801884) Fig. 6 |
| ICF (arrondi) Immigrés & descendants | 2021 | France | idem | [6793238](https://www.insee.fr/fr/statistiques/6793238) Fig. 1 |
| Descendance finale immigrées / sans ascendance | gens **1960–1974** (enquête 2019–2020) | **France métropolitaine**, logement ordinaire | 45–60 ans en 2019–2020 | IP 1939 Fig. 1 & 3 ; TeO2 |
| ICF national (contexte, pas origine) | 2024 | France / métropole | — | [Bilan démo 2024](https://www.insee.fr/fr/statistiques/8327319) |

Prefer **IP 1939 unrounded** (2,51 / 1,67 / 2,33) over Immigrés chapter rounded (2,5 / 1,7 / 2,3).

---

## Headline numbers (primary-backed)

| Groupe (libellé exact) | Indicateur | Valeur | Année | URL |
|---|---|---|---|---|
| Femmes **nées en France** | ICF | **1,67** | 2021 | 6801884 Fig. 6 |
| Femmes **nées à l'étranger** (ajusté) | ICF | **2,33** | 2021 | idem |
| Femmes nées **Algérie, Maroc, Tunisie** | ICF ajusté | **2,51** | 2021 | idem |
| Femmes nées **Afrique hors Maghreb** | ICF ajusté | **3,32** | 2021 | idem |
| Femmes nées **Turquie, Moyen-Orient** | ICF ajusté | **1,99** | 2021 | idem |
| Ensemble des femmes | ICF | **1,84** | 2021 | idem |
| Immigrées Maghreb (Alg./Mar./Tun.) gens 1960–74 | Descendance finale | **2,82** | TeO2 2019–20 | 6801884 Fig. 3 |
| Ni immigrées ni descendantes gens 1960–74 | Descendance finale | **1,86** | TeO2 2019–20 | 6801884 Fig. 1 |

**Trend (published cells only — no interpolation):** Maghreb ICF 2,82 (2006) → pic 2,91 (2014) → **2,51 (2021)** — **forte baisse depuis 2014**. Afrique hors Maghreb en hausse sur la même période. Nées en France : ~1,9 (2006–12) → 1,67 (2021).

**Écart Maghreb vs nées en France (2021, dérivé):** 2,51 − 1,67 = **+0,84 enfant** — label **derived**; primary cells remain 2,51 and 1,67.

---

## Ce qu'il ne faut PAS claim (FAIL list)

1. **« Fécondité musulmane » / Muslim TFR / ethnie** — INSEE/INED ne publient **aucune** série religion. Maghreb / Afrique / Turquie = **géographie**. Invent = **FAIL**.
2. **Conflating** « nées à l'étranger » (ICF) with « immigrées » (descendance) without labeling.
3. **Swapping** ICF ↔ descendance finale.
4. **Interpolating** missing years between published ICF cells.
5. **Stacking** « fécondité élevée + lourde consommation d'aides » as one causal claim **without** a primary table that links aides to fertility by origin — see § Aides.
6. Claiming Maghreb ICF is still rising — primary shows **decline since 2014**.
7. Applying Maghreb 1st-gen rates to **descendantes** — TeO2: descendantes Maghreb ~ proches des sans ascendance (6793238 Fig. 3: ~2,0 / 1,8 vs 1,9).

---

## Aides sociales (scope note → CAF Hunter)

**Claim under review:** « heavy use of aides » stacked with Maghreb/Muslim fertility.

| Check | Result |
|---|---|
| Primary table linking **aides take-up → fertility** by origin / Maghreb / religion | **FAIL — none found** (INSEE / CNAF / Cour des comptes dig this turn) |
| Separate INSEE living-standard share (prestations % of niveau de vie by ascendance) | Exists at [6793278](https://www.insee.fr/fr/statistiques/6793278) — **out of scope** for this fertility pack; not a fertility link; leave detail to **CAF Hunter** / existing aides gate |
| Cour des comptes / CNAF fertility×immigration×aides joint table | **FAIL** for stacking claim |

**Pack rule:** fertility tiles may ship on geo ICF alone. Any fuse « natalité Maghreb + aides » without a joint primary = **FAIL**. Soft-hold Muslim aides series = **FAIL**.

---

## Method notes (EN)

- TFR in French official stats = **ICF**. Prefer French label in UI.
- Adjusted foreign-born ICF is the INSEE-recommended figure for origin comparisons (DT 2023-05); unadjusted classical ICF overstates immigrant fertility.
- Birth *counts* by nationality / country of birth of parents ([2381382](https://www.insee.fr/fr/statistiques/2381382)) are **not** ICF rates and do not break Maghreb in the key table — do not convert counts to fake TFR.
- INED Population & Sociétés pages were unreachable this dig (site outage 2026); pack relies on INSEE primaries that already cite TeO2 / Toulemon. Do not invent INED cells.

---

## Success criteria (this pack)

- [x] ≥2–3 primary-backed rates: nées France 1,67 · Maghreb 2,51 · Afrique hors Maghreb 3,32 (+ foreign-born 2,33)
- [x] Explicit FAIL for Muslim-specific TFR
- [x] Explicit FAIL for fertility+aides stack without joint primary
- [x] Soft-hold gate-request ready
