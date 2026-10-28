# Statistiques (`data/stats/`)

Fichier canonique : **`metrics.json`** (tableau versionné, consommé par le site).

Chaque entrée exige :

- `proof_url` — URL http(s) primaire (doit être identique à `source.url`)
- `kind` — `fraud` | `error` | `spend` | `volume` | `other` (fraude ≠ erreur)
- `source` — `{ title, url, publisher }`

Pour ajouter une métrique : éditez `metrics.json` ou déposez un fragment dans une PR + issue **new-stat**.

**Dette publique (tableau de bord)** — ids Guard-PASS :
`macro-dette-publique-eur`, `macro-dette-publique-pib-pct`, `macro-deficit-public-2025` (INSEE https://www.insee.fr/fr/statistiques/8997691), `macro-charge-interets-dette-etat-2025` (Cour RBDE 2025). L&apos;accueil cadrera l&apos;AME total 2025 (~1,47 Md€) en ratios flux/stock dette, flux/déficit et flux/charge d&apos;intérêts — échelle uniquement, pas causalité.
