# Étude onomastique — catégories culturelles / géographiques · séries décennales

> **Étude onomastique non officielle** — faisceaux desk de prénoms (signal culturel/géographique **inféré**) — source INSEE agrégats  
> **Ce n’est PAS** un recensement d’ethnie, ni des % religion (islam / christianisme) dérivés des prénoms.

**Desk:** INSEE Desk · Stats · 31 oct. 2026 (Asia/Hong_Kong)  
**Soft-hold:** Evidence Guard avant tout panneau / graphique site — `gate-request.md` (l’exécuteur n’appelle pas Guard)  
**Prior method:** `../2026-10-31-onomastics/method.md` (PASS-LOW grounding INED 565) — on **étend**, on n’écrase pas  
**Séparé:** `../2026-10-31-origins-decennial/` = stocks G1 géographiques (autre graphique)

---

## Question

Comment la **part des naissances** portant un prénom d’un faisceau culturel/géographique desk-défini (classiques FR, Maghreb/arabo-musulman, Afrique hors Maghreb, Asie, Slaves, américain/anglo) a-t-elle évolué aux années ~décennales **1950 → 2025** dans le fichier national des prénoms INSEE ?

## Truth locks

1. **Étude onomastique non officielle** — jamais « ethnie recensée ».
2. Baseline **~1950** = référence de stock de prénoms « classiques » (**assumption** desk + URL primaire fichier) — pas une publication INSEE « prénoms natifs ».
3. Parts décennales par **cluster culturel/géographique de noms** OK si lexique ancré (INED Population & Sociétés n°565 / méthode PASS-LOW prior).
4. **Religion buckets from names = FAIL** — ne pas inventer Islam / Christian comme % religion depuis les prénoms. La série religion TeO (https://www.insee.fr/fr/statistiques/6793308) peut être citée **uniquement** comme jambe primaire séparée (non dérivée des noms).
5. **Pas** de matrices parent × enfant ethniques absolues.
6. Chaque nombre a une **URL primaire** (fichier des prénoms / IP2127 / INED 565).

## Sources primaires

| Source | URL | Rôle |
|---|---|---|
| Fichier des prénoms (nat.) | https://www.insee.fr/fr/statistiques/8595130 · `downloads/prenoms-2025-nat.csv` | Comptes sexe × prénom × année 1900–2025 |
| INSEE Première n°2127 | PDF local prior pack `../2026-10-31-onomastics/downloads/IP2127.pdf` | Contexte éditorial |
| INED–Insee P&S n°565 (Coulmont & Simon, 2019) | https://www.ined.fr/fr/publications/editions/population-et-societes/quels-prenoms-les-immigres-donnent-ils-a-leurs-enfants | Classes de prénoms (arabo-musulman, africain, asiatique, anglophone…) |
| HAL / DOI (miroir si ined.fr 503) | https://hal.science/hal-04625724 · https://doi.org/10.3917/popsoc.565.0001 | Texte EN + annex méthodologique |
| Annex classification CAT1 | `downloads/annex.pdf` (HAL) | Regroupements codes → classes |
| Immigrés Fig.1 (contexte pop. seulement) | https://www.insee.fr/fr/statistiques/8242329 | ~5 % (1946) / 5,4 % (1954) immigrés — **pas** un claim onomastique |
| TeO religion (jambe séparée) | https://www.insee.fr/fr/statistiques/6793308 | **Ne pas** fusionner avec parts de prénoms |

## Méthode de calcul

1. Lire `sexe;prenom;periode;valeur;rang` pour les années **1950, 1960, 1970, 1980, 1990, 2000, 2010, 2020, 2025** (toutes présentes → aucun FAIL année).
2. Pour chaque cluster et chaque année :  
   `share = sum(valeur des prénoms du cluster) / sum(toutes naissances)`  
   calculé **par sexe** (M, F) et **deux sexes**.
3. Effectifs absolus reportés à côté des parts.
4. Exclusion mutuelle des prénoms entre clusters (priorité : Maghreb → Afrique → Asie → Slaves → anglo → classiques).
5. Banner obligatoire sur tout graphique : `étude non officielle · inferred cultural/geographic name cluster · NOT religion % · NOT ethnie census`.

## Lexique — règles d’inclusion (détail dans `lexicon.json`)

### 1. classiques_fr — confiance **high**
Stock civil / calendaire chrétien mid-century (Jean, Pierre, Marie, Françoise, Jean-Pierre…) dominant ~1950. Extension des faisceaux Jean/Marie du prior pack + top 1950 fichier.  
**Ne pas claim :** ethnie française ; % chrétiens.

### 2. maghreb_arabo_musulman — confiance **high**
Extension du noyau Mohamed (prior) + féminins arabo-musulmans fréquents. Logique de classe P&S 565 « Arab-Muslim » (Maghreb + monde arabe + formes turques de prénoms arabo-musulmans).  
**Transparence :** `RAYANE` **dans** ; `RAYAN`/`RYAN` **hors** ; exclus aussi ADAM, YANIS, NOAH, NOUR, SARAH, INÈS, SABRINA…  
**Ne pas claim :** % musulmans ; % Maghrébins ethniques ; multiplier TeO 94 % / 82 % sur les parts de naissances.

### 3. afrique_hors_maghreb — confiance **medium**
Classe « African » P&S 565 (Sahel / Afrique de l’Ouest) : Mamadou, Fatoumata, Aminata, Abdoulaye, Awa…  
**Lacune :** populations d’Afrique centrale souvent prénommées à la française (invisibles ici) → borne basse.

### 4. asie — confiance **low** / **lacune**
Vietnam / Chine / Est-Asie comme *premier* prénom dans le fichier : effectifs très faibles (souvent prénom du milieu).  
**Turquie :** formes arabo-musulmanes comptées dans Maghreb ; liste séculière turque (Emre, Elif…) en **annexe** (`turkish_secular_side_list`) — **pas** fusionnée dans Asie.

### 5. slaves — confiance **low**
Étymologie slave (Vladimir, Olga, Dimitri, Ivan…). Contamination mode majoritaire 1960–1990 possible (Boris, Natacha…). Exclut Alexandre/Alexandra (gréco-français).

### 6. americain_anglo — confiance **high**
Vague de **mode** US/UK (« génération Kevin », Jennifer, Dylan…) — marqueur culturel de fashion, **pas** une ethnie. Classe P&S 565 anglophone/international. Exclut CHRISTOPHE, DAVID, EMMA, NOAH…

## Grounding INED 565 (rappel)

- Parmi les immigrés du Maghreb, **~94 %** portent un prénom classé arabo-musulman.
- Un prénom arabo-musulman désigne une origine Maghreb (immigré ou descendant) dans **~82 %** des cas.
- Un prénom « africain » → origine Afrique sub-saharienne dans **~95 %** des cas (TeO).
- Ces chiffres justifient l’**appartenance au faisceau**, pas la conversion part de naissances → « % ethnique / religieux ».

## FAIL (ne pas ship)

- Buckets religion (Islam, Christian) comme % depuis les prénoms
- Matrices parent × enfant ethniques
- « 95 % de prénoms natifs »
- Fusion visuelle avec le graphique G1 origines sans labels séparés
- Remplacer les KPI G1/G2/G3
- Fraude / €

## Fichiers du pack

| Fichier | Contenu |
|---|---|
| `method.md` | Ce document |
| `lexicon.json` | Clusters → noms + règles + confiance |
| `metrics.json` | year × cluster × sex → count, share, URL, confidence |
| `table-10y.md` | Table humaine décennale |
| `tiles-fr.md` | Copy UI FR + Truth banner |
| `sources.md` | URLs primaires |
| `gate-request.md` | Soft-hold pour parent → Evidence Guard |
| `downloads/` | annex.pdf, hal-doc.pdf, lien CSV |

## Headline 1950 → 2025 (deux sexes)

| Cluster | 1950 | 2025 |
|---|---|---|
| classiques_fr | 75.292% (663815) | 2.45% (14445) |
| maghreb_arabo_musulman | 0.117% (1030) | 5.86% (34545) |
| afrique_hors_maghreb | 0.002% (20) | 0.975% (5745) |
| asie (lacune) | 0.001% (5) | 0.021% (125) |
| slaves | 0.032% (280) | 0.293% (1730) |
| americain_anglo | 0.158% (1390) | 2.6% (15325) |
