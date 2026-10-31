# Origines géographiques des immigrés — échantillonnage ~décennal (1950 → latest)

> **Étude non officielle — proxys d'origine INSEE (pays / grande région de naissance) — pas un recensement ethnique**

**Desk:** INSEE Desk · Stats · 31 oct. 2026 (Asia/Hong_Kong)  
**North star:** Truth  
**Soft-hold:** Evidence Guard before any site UI / chart  
**Related:** `../2026-10-31-demography-lead-kpi/` · `../2026-10-31-proxy-triangulation/worldmap-origins.md` · `../2026-10-31-onomastics/` (side-panel only)

---

## Question (Truth framing)

Alex asked for a chart of « evolution of ethnic groups since 1950 ». France has **no official ethnie census**. This pack delivers what primary sources allow: **stocks of immigrés (G1) by geographic origin** and **G2 / G3 where published**, sampled near census / Emploi years — never invented ethnic %.

**UI title lock:** « Origines géographiques des immigrés » / stocks G1·G2 — **not** « ethnie ».

---

## Définitions (INSEE wording)

| Terme | Définition INSEE |
|---|---|
| **Immigré (G1)** | Personne née étrangère à l'étranger et résidant en France. Continue d'appartenir à la population immigrée même après acquisition de la nationalité française. |
| **Descendant d'immigré (G2)** | Personne née en France ayant au moins un parent immigré. |
| **Descendant de 3ᵉ génération (G3)** | Personne née en France, de parents non immigrés, ayant au moins un grand-parent immigré. |
| **Origine géographique** | Pays / grande région de **naissance** (G1) ou du parent immigré (G2 ; convention père si deux parents immigrés). Nomenclature TeO2 pour les agrégats récents. |

Ce n'est **pas** : race, religion, « ethnie », nationalité seule, ni stock d'étrangers uniquement (34 % des immigrés ont la nationalité française en 2023 — 8242329).

---

## Règle d'échantillonnage

Cibles ~décennales : **1954 · 1962 · 1968 · 1975 · 1982 · 1990 · 1999 · 2008 · 2013 · 2020 · 2023** (ou millésime primaire le plus proche).

| Année | G1 total | G1 par origine | G2 total | G2 par origine | G3 |
|---|---|---|---|---|---|
| 1950 | **FAIL** | **FAIL** | **FAIL** | **FAIL** | **FAIL** |
| 1954 | PASS (8242329) | **FAIL** | **FAIL** | **FAIL** | **FAIL** |
| 1962 | PASS | PASS coarse % (IMMFRA05d) | **FAIL** | **FAIL** | **FAIL** |
| 1968 | PASS | PASS abs (6793226) | **FAIL** | **FAIL** | **FAIL** |
| 1975 | PASS | PASS abs | **FAIL** | **FAIL** | **FAIL** |
| 1982 | PASS | PASS abs | **FAIL** | **FAIL** | **FAIL** |
| 1990 | PASS | PASS abs | **FAIL** | **FAIL** | **FAIL** |
| 1999 | PASS | PASS abs | **FAIL** | **FAIL** | **FAIL** |
| 2005 | — | — | PASS (6793314) | PASS | **FAIL** |
| 2008 | PASS | PASS (FPORSOC11) | PASS-approx texte | **FAIL** all-age by origin (18–50 only in PDF) | **FAIL** |
| 2013 | PASS | PASS (FPORSOC16) | PASS | PASS | **FAIL** |
| 2020 | PASS total | **FAIL** breakout dedicated* | **FAIL** dedicated | **FAIL** | **FAIL** |
| 2019-20 | — | — | — | — | PASS TeO2 **\<60** (6793242) |
| 2021 | PASS (6793226) | PASS abs | PASS | PASS | **FAIL** |
| 2023 | PASS | PASS Fig.2 (8242329) | PASS | PASS Fig.3 | **FAIL** |

\*2020 G1 total exists on Fig.1; no dedicated origin table at that year in the primaries used — do not interpolate between 2013 and 2021/2023.

**Never interpolate** a missing year or origin cell. Mark **FAIL / lacune**.

---

## Régions (ship lock — align worldmap)

When sources match 8242329 Fig.2 (2023), use:

Maghreb · Afrique hors Maghreb · Europe du Sud · Autres UE · Autres Europe · Asie (hors TR/MO) · Turquie, Moyen-Orient · Amérique, Océanie

**One color / series per INSEE aggregate.** FAIL inventing Maghreb/Asie country micro-shares without a cited country breakout (Algérie / Maroc·Tunisie etc. only when the primary table publishes them).

**Nomenclature traps:**
- 6793226 publishes **Turquie** alone ≠ 8242329 **Turquie, Moyen-Orient**
- Afrique sahélienne / guinéenne split only from **2006**
- Erratum **24 mai 2024** on 6793226 Fig.2 (Amérique ↔ Europe 1968–1999) — use corrected HTML/XLSX

---

## Géographie

Label clearly as published:
- **France métropolitaine** jusqu'en 1982 (souvent)
- **France hors Mayotte** à partir de 1990 (Fig.1 8242329)
- Certaines séries 6793226 : France depuis 2014
- G2 / G3 : presque toujours **logement ordinaire** (≠ champ population totale G1)

---

## Ce qu'il ne faut PAS claim

1. « Évolution des ethnies / races depuis 1950 »
2. Série % ethnique inventée
3. Empiler G1+G2+G3 en « population issue de l'immigration » sans exclusivité mutuelle + labels champ/âge
4. G3 tous âges (inexistant en primaire)
5. Interpoler 1950, 1954 origine, G2 pré-2005, G3 hors 2019-20
6. Peindre la carte depuis onomastique (side-panel PASS-LOW only)
7. Fraude / illégal sur stocks démographiques
8. Micro-parts pays à l'intérieur Maghreb/Asie sans breakout cité

---

## Sources primaires (voir `sources.md`)

- https://www.insee.fr/fr/statistiques/8242329 — Portrait social 2024 Fig.1–3
- https://www.insee.fr/fr/statistiques/6793226 — Histoire des migrations Fig.2 (+ XLSX)
- https://www.insee.fr/fr/statistiques/6793314 — G1/G2 joint Fig.1 (2005·2011·2021 G2)
- https://www.insee.fr/fr/statistiques/6793230 — G2 origines 2021
- https://www.insee.fr/fr/statistiques/6793242 — G3 TeO2 \<60
- IMMFRA05d.PDF — % origines 1962–1999
- FPORSOC16 / FPORSOC11 PDFs — 2013 / 2008

Downloads + SHA : `downloads/`
