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

Pour ajouter une métrique : éditez `metrics.json` ou déposez un fragment dans une PR + issue **new-stat**.

**Dette publique (tableau de bord)** — ids Guard-PASS :
`macro-dette-publique-eur`, `macro-dette-publique-pib-pct`, `macro-deficit-public-2025` (INSEE https://www.insee.fr/fr/statistiques/8997691), `macro-charge-interets-dette-etat-2025` (Cour RBDE 2025). L&apos;accueil cadrera l&apos;AME total 2025 (~1,47 Md€) en ratios flux/stock dette, flux/déficit et flux/charge d&apos;intérêts — échelle uniquement, pas causalité.

**Gaspillage (accueil)** — tuiles Guard-PASS (non additives entre elles ni avec le narratif Sénat) :
`waste-emeutes-2023-sinistres-assures`, `waste-emeutes-2005-sinistres-assures`.
