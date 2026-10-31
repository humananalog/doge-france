# Tuiles FR — origines géographiques (décennal)

> **Étude non officielle — proxys d'origine INSEE — pas un recensement ethnique**

**Titre chart (lock):** Origines géographiques des immigrés en France — stocks G1 (et G2)  
**Interdit titre:** ethnie · ethnic groups · races · « population issue » empilée sans labels

---

## Bannière Truth

La France **ne recensement pas l'ethnie**. Ce graphique montre les **stocks d'immigrés (nés étrangers à l'étranger)** par **grande région de naissance** (INSEE), aux années où une source primaire existe — cellules manquantes = lacune, pas d'interpolation.

---

## KPI lead (comparable)

| | 1954 | 2023 |
|---|---:|---:|
| Immigrés (G1) | **2 293** milliers | **7 174** milliers |
| Part population | **5,4 %** | **10,6 %** |
| Champ | métropole | France hors Mayotte |
| Source | [8242329](https://www.insee.fr/fr/statistiques/8242329) Fig.1 | idem |

Microligne: *rupture de champ documentée sur Fig.1 — parts publiées, pas un heap « % de 1950 ».*

---

## Composition G1 2023 (Fig.2 — paint worldmap)

| Région INSEE | Milliers | % des immigrés |
|---|---:|---:|
| Maghreb | 2 091 | 29,2 |
| Afrique hors Maghreb | 1 275 | 17,8 |
| Europe du Sud | 1 091 | 15,2 |
| Autres UE | 638 | 8,9 |
| Autres Europe | 624 | 8,7 |
| Asie (hors TR/MO) | 605 | 8,4 |
| Turquie, Moyen-Orient | 395 | 5,5 |
| Amérique, Océanie | 456 | 6,4 |
| **Ensemble** | **7 174** | **100** |

Source: [8242329](https://www.insee.fr/fr/statistiques/8242329) Fig.2 · une couleur = un agrégat INSEE.

---

## Série longue Maghreb (G1, milliers) — où primaire existe

1968 **597** → 1975 **993** → 1982 **1 168** → 1990 **1 221** → 1999 **1 299** → 2008 **1 600** → 2013 **1 728** → 2021 **2 038** → 2023 **2 091**  
Sources: [6793226](https://www.insee.fr/fr/statistiques/6793226) · FPORSOC11/16 · 8242329  
**1954 Maghreb: FAIL** (pas de breakout primaire).

Europe du Sud (même sources): 1968 **1 737** → … → 2023 **1 091** (baisse structurelle).

---

## Panneau G2 (pas empilé aveuglément sur G1)

- **2023:** 8 015 k · **12,1 %** de la population en **logement ordinaire** · dont Maghreb **2 597 k (32,4 %)** — [8242329](https://www.insee.fr/fr/statistiques/8242329) Fig.3  
- **2005 (plus ancien PASS):** 4 275 k — [6793314](https://www.insee.fr/fr/statistiques/6793314)  
- Pré-2005: **FAIL**

Sous-titre UI obligatoire: *logement ordinaire · France hors Mayotte* (selon millésime).

---

## Panneau G3 (PASS bas · âge dans le titre)

**Petits-enfants d'immigrés · \< 60 ans · logement ordinaire · métropole · 2019-2020**  
4,8 millions · **10,2 %** des \<60 — [6793242](https://www.insee.fr/fr/statistiques/6793242)  
**FAIL** tous âges / autres années.

---

## Side panel onomastique (PASS-LOW)

Renvoi uniquement: `../2026-10-31-onomastics/` — *inferred cultural marker* — **ne pas** fusionner dans le chart origines.

---

## Interdits UI (copie)

- Pas de titre « ethnies depuis 1950 »
- Pas d'interpolation des cellules FAIL
- Pas de G1+G2+G3 = « X % de la France » sans labels
- Pas de micro-parts pays Maghreb/Asie sans breakout cité
- Soft-hold Evidence Guard avant mise en ligne
