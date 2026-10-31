# Tuiles FR — aides / nationalité / immigrés

**Desk:** CAF Hunter  
**As of:** 31 oct. 2026 (Asia/Hong_Kong)  
**Evidence Guard:** **PASS** — `gates/2026-10-31-aides-nationalite-gate.md`  
**Pack:** `reports/2026-10-31-aides-nationalite/`  
**Ship:** *hors-EEE / immigrés / nés en Afrique* only  
**FAIL:** Maghreb / Muslim / ethnie aides % · viral 42% · fraude-by-nationality · fertility×aides fuse

**Note:** PR #15 already shipped 2019 ascendance (12/10/5). This pack adds **2021 F18** lead tiles + **RSA/AF hors-EEE** legal-spend tiles. Prefer 2021 for NDD lead; keep 2019 as prior-year context or replace.

---

## Tuile 1 — Prestations · part du NDD · immigrés · 2021 · PASS

**Titre:** Prestations sociales · immigrés  
**Chiffre:** **11,1 %** du niveau de vie (**2 410 €** / UC)  
**Sous-titre:** Prestations non contributives · ERFS **2021** · France métropolitaine  
**Microligne:** Famille + logement + minima + prime d’activité (bruts CRDS). Hors pensions / chômage.  
**⚠️** Part du niveau de vie — **pas** % du budget CAF, **pas** fraude.  
**Source:** [INSEE RPM2024-F18](https://www.insee.fr/fr/statistiques/7941405?sommaire=7941491)

---

## Tuile 2 — Prestations · part du NDD · non-immigrés · 2021 · PASS

**Titre:** Prestations sociales · non-immigrés  
**Chiffre:** **5,6 %** du niveau de vie (**1 530 €** / UC)  
**Sous-titre:** Même champ · **2021**  
**Source:** même F18

---

## Tuile 3 — Prestations · immigrés nés en Afrique · 2021 · PASS

**Titre:** Prestations · immigrés nés en Afrique  
**Chiffre:** **16,4 %** du niveau de vie (**3 110 €** / UC)  
**Sous-titre:** Continent Afrique · **2021**  
**Microligne:** Geo only — **≠ Maghreb seul ≠ religion**.  
**Source:** même F18

---

## Tuile 4 — RSA · responsable hors UE/EEE · mid-2022 · PASS

**Titre:** RSA · foyers hors UE/EEE  
**Chiffre:** **15,6 %** des foyers RSA (**&lt; 300 000**)  
**Sous-titre:** Responsable de dossier · **30 juin 2022** · CNAF + MSA  
**Microligne:** Nationalité du responsable — pas « immigrés » (naturalisés = Français). Pas Maghreb. Pas de € pour ce sous-ensemble dans la réponse.  
**Source:** [AN Q5157](https://www.assemblee-nationale.fr/dyn/16/questions/QANR5L16QE5157)

---

## Tuile 5 — AF · bénéficiaires hors EEE · fin-2013 · PASS

**Titre:** Allocations familiales · hors EEE  
**Chiffre:** **~6 %** des bénéficiaires AF  
**Sous-titre:** **31 déc. 2013** · ~5 M bénéficiaires · **12,4 Md€** total AF  
**Microligne:** % de *bénéficiaires* (pas €). hors EEE = monde hors EEE — **≠ Maghreb**. CNAF n’a pas de montants par nationalité fine. EEE+CH ~2 %. Sénat fin-2014 : mêmes ~2 % / ~6 %.  
**Source:** [AN Q29143](https://www.assemblee-nationale.fr/dyn/14/questions/QANR5L14QE29143) · [Sénat 2014/16](https://www.senat.fr/questions/base/2014/qSEQ140210272.html)

---

## Contexte optionnel

### Ascendance 2019 (déjà sur site via PR #15) · 12 % / 10 % / 5 %  
Primary: [6793278](https://www.insee.fr/fr/statistiques/6793278) — remplacer ou garder comme année antérieure.

### APL extra-communautaires · PASS-LOW  
14,8 % bénéficiaires / 16,4 % dépenses / **2,4 Md€** — [AN Q5530](https://www.assemblee-nationale.fr/dyn/16/questions/QANR5L16QE5530). **Année de référence absente** du JO → badge PASS-LOW ou hold.

### Foyers nationalité étrangère · PASS-LOW  
~**11 %** des 13,5 M foyers fin-2022 (AFP←CNAF) — démonte le viral 42 %. Upgrade si URL CNAF primaire.

---

## Panneau séparé — Fraude / erreurs (AUCUNE nationalité)

| Type | Chiffre | Source |
|------|---------|--------|
| Fraude estimée branche famille | **2,3 Md€** (2018) | [CdC](https://www.ccomptes.fr/fr/publications/la-lutte-contre-les-fraudes-aux-prestations-sociales) |
| Fraude détectée CAF | **449 M€** / 49 030 (2024) | [AN Q4323](https://questions.assemblee-nationale.fr/q17/17-4323QE.htm) |
| Erreurs (≠ fraude) | **6,3 Md€** / 8 % (2024) | [CdC certif](https://ccomptes.fr/fr/publications/certification-des-comptes-du-regime-general-de-securite-sociale-et-du-cpsti-exercice) |

**Interdit:** inventer une ventilation nationalité / immigrés / Maghreb / Muslim.

---

## Interdits UI (re-gate)

1. Titre / caption : musulman, Islam, ethnie, Maghreb-spend inventé.  
2. « Ils utilisent beaucoup d’aides » comme fraude.  
3. Fusion fécondité × aides en une claim causale.  
4. Swaper % bénéficiaires ↔ % € ; NDD share ↔ budget CAF.  
5. Afrique → Maghreb → Muslim.

---

## One-liner site

> En 2021, les prestations non contributives représentaient **11,1 %** du niveau de vie des immigrés contre **5,6 %** pour les non-immigrés ; **16,4 %** pour les immigrés nés en Afrique (continent) — INSEE. Ce n’est **pas** une statistique religieuse, ni une part du budget CAF, ni de la fraude.
