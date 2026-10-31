# Table ~10 ans — origines géographiques des immigrés (G1) et stocks G2/G3

> Étude non officielle — proxys d'origine INSEE — pas un recensement ethnique  
> Cellule **FAIL** = aucune URL primaire pour cette intersection — **ne pas interpoler**.

Champ géo (rappel) : métropole ≤1982 · hors Mayotte ≥1990 (Fig.1 8242329) · G2/G3 = logement ordinaire sauf note.

---

## A. G1 total vs population

| Année | Immigrés (milliers) | Part (%) | Géographie | Primary |
|---:|---:|---:|---|---|
| 1950 | **FAIL** | **FAIL** | — | — (nearest: 1954) |
| 1954 | 2 293 | 5,4 | métropole | [8242329](https://www.insee.fr/fr/statistiques/8242329) Fig.1 |
| 1962 | 2 861 | 6,2 | métropole | idem |
| 1968 | 3 238 | 6,5 | métropole | idem |
| 1975 | 3 887 | 7,4 | métropole | idem |
| 1982 | 4 037 | 7,4 | métropole | idem |
| 1990 | 4 222 | 7,3 | hors Mayotte | idem |
| 1999 | 4 374 | 7,3 | hors Mayotte | idem |
| 2008 | 5 342 | 8,4 | hors Mayotte | idem |
| 2013 | 5 835 | 8,9 | hors Mayotte | idem |
| 2020 | 6 750 | 10,1 | hors Mayotte | idem |
| 2023 | **7 174** | **10,6** | hors Mayotte | idem |

**Headline comparable:** 1954 → 2023 : 2 293 k (5,4 %) → 7 174 k (10,6 %).

---

## B. G1 by grande région (milliers) — série longue 6793226 + anchors

| Origine \\ Année | 1954 | 1962 | 1968 | 1975 | 1982 | 1990 | 1999 | 2008 | 2013 | 2020 | 2021 | 2023 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| **Maghreb** | FAIL | ~406* (14,2 %) | 597 | 993 | 1 168 | 1 221 | 1 299 | 1 600 | 1 728† | FAIL | 2 038 | **2 091** |
| **Afrique hors Maghreb** | FAIL | ~20* (0,7 %) | 44 | 94 | 172 | 280 | 402 | 670 | 813 | FAIL | 1 272‡ | **1 275** |
| **Europe du Sud** | FAIL | lacune agrégat§ | 1 737 | 1 915 | 1 681 | 1 482 | 1 268 | 1 160# | 1 142† | FAIL | 1 130 | **1 091** |
| **Europe (ens.)** | FAIL | 78,7 % | 2 479 | 2 612 | 2 312 | 2 103 | 1 940 | 2 030 | 2 124 | FAIL | 2 304 | **2 352** |
| **Asie (ens.)** | FAIL | 2,4 % | 81 | 140 | 322 | 478 | 552 | 760 | 841 | FAIL | 945 | **1 000** |
| **Amérique, Océanie** | FAIL | 3,2 % | 37 | 49 | 63 | 141 | 181 | 280 | 329 | FAIL | 404 | **456** |
| **Ensemble** | 2 293 | 2 861 | 3 238 | 3 887 | 4 037 | 4 222 | 4 374 | 5 340¶ | 5 835 | 6 750 (total only) | 6 964 | **7 174** |

**Notes cellules**

| Symbole | Meaning | URL |
|---|---|---|
| * | % published IMMFRA05d × effectif 2 861 280 — Maghreb = DZ+MA+TN % | [IMMFRA05d](https://www.insee.fr/fr/statistiques/fichier/1371772/IMMFRA05d.PDF) |
| † | Sum of published country cells FPORSOC16 (DZ+MA+TN ; ES+IT+PT) | [FPORSOC16](https://www.insee.fr/fr/statistiques/fichier/2492220/FPORSOC16j3_F2.3_immigres.pdf) |
| ‡ | 424+506+342 (Autres + guinéenne + sahélienne) 6793226 | [6793226](https://www.insee.fr/fr/statistiques/6793226) |
| § | 1962 PDF has ES/IT/PT as % separately — Europe du Sud aggregate not a single published row; **do not invent** without summing cited cells in metrics if needed |
| # | Europe du Sud 2008 = ES+IT+PT published cells **1 160** (260+320+580) — table body cell corrected below | [FPORSOC11](https://www.insee.fr/fr/statistiques/fichier/1373887/FPORSOC11d_VE22Immig.pdf) |
| ¶ | Ensemble 5 340 k in FPORSOC11 table vs 5 342 on 8242329 Fig.1 — rounding / millésime; prefer 5 342 for total KPI | |
| FAIL 2020 origin | Total only on Fig.1 — no dedicated origin table for 2020 in primaries used | |

**Primary URLs for abs. series 1968–2021:** [6793226](https://www.insee.fr/fr/statistiques/6793226) Fig.2 · XLSX local.  
**2023 regions (ship):** [8242329](https://www.insee.fr/fr/statistiques/8242329) Fig.2 — Maghreb 2 091 · Afrique hors Maghreb 1 275 · Europe du Sud 1 091 · etc.

Correct 2008 Europe du Sud: **1 160** k (260+320+580) — see `metrics.json`.

---

## C. G2 total vs base

| Année | G2 (milliers) | Part | Champ | Primary |
|---:|---:|---|---|---|
| ≤1999 | **FAIL** | — | Emploi parent-birth fields from 2005 | — |
| 2005 | 4 275 | — | logement ordinaire | [6793314](https://www.insee.fr/fr/statistiques/6793314) Fig.1 |
| 2008 | ~6 500 | ~11 % métropole | texte | [FPORSOC11](https://www.insee.fr/fr/statistiques/fichier/1373887/FPORSOC11d_VE22Immig.pdf) |
| 2011 | 6 558 | — | logement ordinaire | [6793314](https://www.insee.fr/fr/statistiques/6793314) |
| 2013 | 6 840 | ~10 % | France | [FPORSOC16](https://www.insee.fr/fr/statistiques/fichier/2492220/FPORSOC16j3_F2.3_immigres.pdf) |
| 2021 | 7 349 | 10,9 % / 11,2 % log. ord. | hors Mayotte | [6793230](https://www.insee.fr/fr/statistiques/6793230) |
| 2023 | **8 015** | **12,1 %** log. ord. | hors Mayotte | [8242329](https://www.insee.fr/fr/statistiques/8242329) Fig.3 |

G2 Maghreb (when published): 2005 **1 302** · 2011 **1 962** · 2013 **2 030**† · 2021 **2 445** · 2023 **2 597**.

---

## D. G3 (TeO)

| Année | Stock | Part | Champ obligatoire | Primary |
|---|---|---|---|---|
| 2019-2020 | 4,8 millions | 10,2 % | **\< 60 ans** · logement ordinaire · **métropole** | [6793242](https://www.insee.fr/fr/statistiques/6793242) |
| Toute autre année cible | **FAIL** | — | Ne pas inventer G3 tous âges | — |

---

## E. Coverage badge (for UI)

| Series | Earliest PASS | Latest PASS | Lacunes majeures |
|---|---|---|---|
| G1 total | 1954 | 2023 | 1950 |
| G1 origin (abs) | 1968 | 2023 | 1950–54 ; 2020 breakout |
| G1 origin (coarse %) | 1962 | — | — |
| G2 | 2005 | 2023 | pre-2005 |
| G3 | 2019-20 \<60 only | same | all other years / all-age |
