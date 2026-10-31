# Sources — onomastics categories decennial

> Étude onomastique non officielle — signal inféré — source INSEE agrégats  
> Religion-from-names = **FAIL** (non présent dans les graphiques de ce pack)

## Primaires

1. **INSEE — Fichier des prénoms** : https://www.insee.fr/fr/statistiques/8595130  
   Local : `downloads/prenoms-2025-nat.csv` (lien → prior pack ; millésime 2025, années 1900–2025)  
   Réutilisation : pas de re-téléchargement (fichier OK).

2. **INSEE Première n°2127** — PDF local : `../2026-10-31-onomastics/downloads/IP2127.pdf`

3. **INED–Insee Population & Sociétés n°565** (Coulmont & Simon, avril 2019)  
   - Page : https://www.ined.fr/fr/publications/editions/population-et-societes/quels-prenoms-les-immigres-donnent-ils-a-leurs-enfants  
   - HAL : https://hal.science/hal-04625724  
   - DOI : https://doi.org/10.3917/popsoc.565.0001  
   - Annex méthodologique (CAT1 / regroupements) : local `downloads/annex.pdf`  
   - Texte EN HAL : local `downloads/hal-doc.pdf`

4. **INSEE — Immigrés Fig.1** (contexte population seulement) : https://www.insee.fr/fr/statistiques/8242329  
   ~5 % (1946) / 5,4 % (1954) — **interdit** d’en déduire « 95 % de prénoms natifs ».

5. **TeO religion** (jambe séparée, **non** dérivée des noms) : https://www.insee.fr/fr/statistiques/6793308

## Méthode prior (ne pas écraser)

- `/workspace/doge-france/reports/2026-10-31-onomastics/` — Mohamed-core / Jean-Marie, Guard PASS-LOW grounding
- `/workspace/doge-france/reports/2026-10-31-origins-decennial/` — stocks G1 géographiques (graphique séparé)

## Downloads status

| file | status |
|---|---|
| prenoms-2025-nat.csv | OK (symlink → prior onomastics) |
| annex.pdf (P&S 565 méthodologie) | OK |
| hal-doc.pdf (P&S 565 EN) | OK |
| ined.fr FR/EN PDF | 503 at fetch time — use HAL |
