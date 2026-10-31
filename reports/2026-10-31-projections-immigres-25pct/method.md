# Étude · recomposition de bornes — « 25 % » (immigrés / origines / déclaration musulmane)

> **Ce pack n’est PAS une projection ethnique officielle.**  
> Titre UI lock : **« étude · recomposition de bornes »** — jamais « projection ethnique », jamais « quand les musulmans / l’ethnie X atteignent 25 % ».

**Desk:** INSEE Desk · Stats (DOGE France) · 31 oct. 2026 (Asia/Hong_Kong)  
**North star:** Truth  
**Soft-hold:** Evidence Guard avant toute tile / claim site  
**Ask d’Alex:** « when will this ethnicity group reach 25% of population »

---

## Réponse courte (Truth)

1. **Il n’existe aucune série officielle française d’« ethnie »** ni de projection INSEE/INED du partage « musulman / ethnie » tous âges à un horizon donné.  
2. **Inventer une année** où « l’ethnie / les musulmans » atteignent 25 % = **FAIL**.  
3. Ce pack reconstitue des **bornes** à partir de (a) stocks publiés immigrés / descendants / origines géographiques, (b) naissances selon pays de naissance de la mère, (c) déclaration religieuse TeO2 18–59 ans, (d) projections **non françaises** Pew 2017 (étiquetées), (e) scénarios **dérivés** d’hypothèses explicites — sans année-certitude.

---

## Ce qui est projeté (officiel) — et ce qui ne l’est pas

| Objet | Existe ? | Source | Horizon |
|---|---|---|---|
| Population totale par sexe/âge + solde migratoire | **Oui** | INSEE Projections 2026 | → 2070 |
| Part des **immigrés** dans la population (scénarios) | **Non** | — | FAIL inventer |
| Part **immigrés + descendants** (scénarios) | **Non** (INSEE/INED officiel) | — | FAIL inventer |
| Part **Maghreb** (ou Maghreb+Turquie/MO) projetée | **Non** (sauf académique Héran immigrés Afrique du Nord ~5,3 % 2050) | INED Pop & Soc 558 | Immigrés seule génération |
| Part **musulmane** tous âges projetée (FR officiel) | **Non** | — | FAIL inventer |
| Part **musulmane** scénarios (non officiel) | Pew 2017 | Pew | 2050 : ~12,7 / 17,4 / 18,0 % — **aucun n’atteint 25 %** |
| Déclaration musulmane 18–59 (stock, pas projection) | TeO2 | INSEE 6793308 | 2019-2020 : **10 %** |

Les projections INSEE 2026 (https://www.insee.fr/fr/statistiques/8991068) projettent la population via fécondité, mortalité et **solde migratoire** (+70 000 / +150 000 / +230 000 / an). Le solde est **indépendant de la nationalité** et **ne ventilent pas** immigrés / descendants / origines / religion.

---

## Champs & définitions (lock)

| Terme | Définition | Champ typique |
|---|---|---|
| **Immigré (G1)** | Né·e étranger·ère à l’étranger, résidant en France | Population (recensement / estimations) |
| **Descendant d’immigré (G2)** | Né·e en France, ≥1 parent immigré | **Logement ordinaire** |
| **Origine géographique** | Pays / grande région de naissance (G1) ou du parent immigré (G2) | Maghreb · Turquie, Moyen-Orient · etc. |
| **Déclaration musulmane TeO2** | Auto-déclaration « avez-vous une religion ? » → islam | France métropolitaine, **18–59 ans**, logement ordinaire |
| **Naissance Maghreb-ligne** | Mère née en Algérie, Maroc ou Tunisie (état civil) | France / métropole — **pas** religion, **pas** G2 mère née en France |

**Jamais** confondre : ethnie ≠ origine géographique ≠ religion déclarée ≠ nationalité ≠ étrangers.

---

## Floors actuels (ce pack)

Voir `metrics.json` § `current_floors`. Synthèse :

- **G1 immigrés** 2023 : **10,6 %** (7 174 k) — 8242329 ; 2024 : **11,2 %** (7 615 k) — 8612512.  
- **G2 descendants** 2023 : **12,1 %** logement ordinaire (8 015 k) — 8242329 ; 2024 : **12 %** (7 987 k) — 8612512.  
- **Maghreb + Turquie/MO G1+G2** 2023 : **~5 463 k** → **~8,1 % dérivé** (champ mixte G1 pop / G2 logement ordinaire) — **label derived**.  
- **Naissances mère Maghreb** 2024 France : **7,86 %** ; Maghreb+Turquie : **8,49 %** — dérivé T38BIS 8582134.  
- **Musulmans déclarés 18–59** 2019-20 : **10 %** — 6793308.

---

## Bande d’hypothèses pour ~25 % (dérivé — pas une année-fait)

Voir `metrics.json` § `assumption_band_25pct`.

Principe : un stock tend vers la **contribution nette durable** (naissances attribuables + solde migratoire net du groupe, moins sorties / désaffiliation).  
- Si la contribution durable reste ~8–12 %, le stock **ne converge pas** vers 25 %.  
- Pew high 2050 = **18 %** musulmans (scénario) — encore **sous** 25 %.  
- Atteindre ~25 % exigerait une contribution durable **nettement supérieure** aux niveaux observés / scénarios Pew high — **sans année officielle**.

Toute année citée hors scénario nommé (Pew 2050, Héran 2050) = **FAIL**.

---

## FAIL list (enforce)

1. Affirmer une **année** où « l’ethnie X » / « les musulmans » atteignent **25 %** comme fait officiel.  
2. Présenter Pew / Héran / scénario dérivé comme **projection INSEE**.  
3. Interpoler une année manquante pour fabriquer « 25 % en Y ».  
4. Sommer G1+G2+G3 ou religion sans labels de champ / âge.  
5. Inventer projection **G3 tous âges**.  
6. Titre UI « projection ethnique » / « Grand Remplacement daté ».  
7. Confondre part des **immigrés** (~11 %) avec part **musulmane** ou **Maghreb**.  
8. Appliquer les 10 % TeO2 (18–59) à toute la population tous âges sans label.

---

## Livrables

- `metrics.json` — floors, projections existantes, bande d’hypothèses, fail_flags  
- `tiles-fr.md` — tuiles honnêtes FR  
- `sources.md` — URLs primaires  
- `gate-request.md` — soft-hold Evidence Guard  
