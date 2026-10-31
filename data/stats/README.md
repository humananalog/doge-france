# Statistiques (`data/stats/`)

Fichier canonique : **`metrics.json`** (tableau versionné, consommé par le site).

Chaque entrée exige :

- `proof_url` — URL http(s) primaire (doit être identique à `source.url`)
- `kind` — `fraud` | `error` | `spend` | `volume` | `other` (fraude ≠ erreur)
- `source` — `{ title, url, publisher }`

Champs optionnels :

- `waste_class` — `illegal` | `legal` (gaspillage documenté ; omettre si non applicable)
- `geography` — zone couverte (ex. `France`)

### Règles `waste_class` (Evidence Guard)

| `kind` | `waste_class` |
|--------|----------------|
| `fraud` | jamais `legal` |
| `error` | **interdit** (ne pas renseigner) |
| `spend` | autorisé (`illegal` ou `legal`) — ex. émeutes / destructions → `spend` + `waste_class=illegal` |
| `volume`, `other` | selon le dossier, ou omettre |

Ne pas introduire `kind=waste` ni le champ `waste_legality`. Les montants « ordre de grandeur » (ex. Sénat « près d’1 Md€ ») restent en **notes** ou `value` textuelle non additive — ne pas les sommer avec les sinistres assurés chiffrés.

**Immigration (graphiques `/immigration`)** — séries chronologiques dans `immigration/series.json` (310 points, `source_url` obligatoire par point). **Origines géographiques décennal (G1/G2)** : pack `reports/2026-10-31-origins-decennial/metrics.json` → `immigration/origins-decennial-series.json` (regénérer via `npm run build:origins-series`). Méthodologie : `immigration/methodology.md` ; index des sources : `immigration/sources.md`. Validées par `scripts/validate-data.ts` (`immigrationSeriesFileSchema`).

**Mandats présidentiels (bandes sur graphiques chronologiques)** — `presidential-eras.json` : `{ start, end, name, president, party, side, primary_url }` (chronologie [Élysée](https://www.elysee.fr/la-presidence/les-presidents-de-la-republique)). `side` = convention politique **UI** (`left` rouge · `right` bleu · `neutral` teinte tierce) — pas INSEE, pas causalité.

**Immigration (tuiles générations G1–G3, guard-PASS / ship pack INSEE Desk)** — ids alignés sur `uploads/metrics.json` (tirets à la place des `_`) :
- G1 lead — `g1-immigres-stock-2023-part` + `g1-immigres-stock-2023-effectif` (8242329 Fig. 1)
- G2 lead — `g2-descendants-stock-2023-part` + `g2-descendants-stock-2023-effectif` (8242329 Fig. 3, logement ordinaire)
- Optionnel — `g1-share-1954-part` + `g1-share-1954-effectif` (même série Fig. 1)
- G3 panneau PASS-LOW — `g3-petits-enfants-under60-2019-20-part` + `g3-petits-enfants-under60-2019-20-effectif` (6793242, &lt;60 ans)
- Contexte seulement — `pop-1950-metropole-context` (6037741, pas tuile lead)

Pour ajouter une métrique : éditez `metrics.json` ou déposez un fragment dans une PR + issue **new-stat**.

**Dette publique (tableau de bord)** — ids Guard-PASS :
`macro-dette-publique-eur`, `macro-dette-publique-pib-pct`, `macro-deficit-public-2025` (INSEE https://www.insee.fr/fr/statistiques/8997691), `macro-charge-interets-dette-etat-2025` (Cour RBDE 2025). L&apos;accueil cadrera l&apos;AME total 2025 (~1,47 Md€) en ratios flux/stock dette, flux/déficit et flux/charge d&apos;intérêts — échelle uniquement, pas causalité.

**Gaspillage (accueil)** — tuiles Guard-PASS (non additives entre elles ni avec le narratif Sénat) :

- **Légal** — `waste-legal-iai-financements-associations-2023` (1 094 M€, Tab.7 Cour 2025-02), `immig-ame-total-reel-2025` (re-tag `waste_class=legal`, `category=benefits-non-citizens`), mission exécution `waste-legal-iai-mission-execution-2023|2024` ; détail P303/P104 via `breakdown_of` (non KPI).
- **Illégal** — `waste-emeutes-2023-sinistres-assures`, `waste-emeutes-2005-sinistres-assures`.
