# Evidence Guard — fertility + aides primary claims (site-ready)

- **Verdict:** PASS-LOW
- **Gate:** Evidence Guard (DOGE France) · 31 Oct 2026 ~09:20 HKT (Asia/Hong_Kong)
- **Requester:** doge France (Lead) — Master dig claims for site
- **North star:** Truth — geo / birthplace / ascendance migratoire only; **NOT** « fécondité musulmane » / « aides musulmanes »

## 1. Verdict

**PASS-LOW**

Both figure sets MATCH the cited INSEE primaries. Soft-hold inventing Muslim fertility/aides series **stays**. Ship only with geo/birthplace/ascendance labels + champs.

Not full PASS because: (1) ICF champ is **nées à l’étranger** (état civil), not « immigrées » — Master dig said « immigrées ICF » (terminology slip); UI must say *nées à l’étranger · ICF ajusté*; (2) aides = **share of living standard**, not absolute take-up, not fraude; (3) Maghreb/Afrique = birthplace ≠ religion.

## 2. Fertility claims — MATCH

| Claim | Primary cell | Status |
|-------|--------------|--------|
| ICF 2021 nées à l’étranger **2.33** | [6801884](https://www.insee.fr/fr/statistiques/6801884) Fig. 6 (ajusté) | **PASS** |
| ICF 2021 nées en France **1.67** | same | **PASS** |
| Maghreb (Algérie/Maroc/Tunisie) **2.51** | same | **PASS** |
| Afrique hors Maghreb **3.32** | same | **PASS** |

**Locks for UI:**
- Title/caption: *ICF ajusté · pays de naissance* — forbid « fécondité musulmane / ethnie »
- Note Maghreb ICF **down since 2014**; Afrique hors Maghreb **up**
- Optional: Turquie/MO 2021 ICF **1.99** (same table) — do not invent Muslim aggregate
- Descendance finale (TeO gens 1960–74) is a **separate** metric (immigrées 2.35 vs sans ascendance 1.86) — don’t swap with ICF

## 3. Aides / prestations claims — MATCH

| Claim | Primary cell | Status |
|-------|--------------|--------|
| Prestations = **12%** of immigrés’ living standard (2019) | [6793278](https://www.insee.fr/fr/statistiques/6793278) prose + Fig. 2 | **PASS** |
| Descendants **10%** | same | **PASS** |
| Sans ascendance migratoire **5%** | same | **PASS** |

**Also published (geo split, same page):** immigrés Afrique **18%** vs Europe **6%** of living standard from prestations — PASS if labeled *nés en Afrique / Europe*, not musulman.

**Locks for UI:**
- « Part des prestations sociales dans le niveau de vie » — not « ils utilisent beaucoup d’aides » as fraude, not € inventés
- Champ: FR métropole, ERFS 2019; prestations include prime d’activité + CRDS (famille/logement); exclude pensions/chômage from this %
- Soft-hold: no « % musulmans / ethnie musulmane » aides series

## 4. Soft-hold

| Scope | Lift? |
|-------|-------|
| Fertility tiles (birthplace ICF as above) | **YES** under PASS-LOW |
| Aides share tiles (ascendance / Afrique-Europe split) | **YES** under PASS-LOW |
| Any « Muslim fertility / Muslim aides » fuse | **NO** — invent → FAIL |

Re-gate if UI titles claim religion/ethnie, swaps ICF↔descendance, or cites wrong year/champ.
