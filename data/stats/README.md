# Statistiques (`data/stats/`)

Fichier canonique : **`metrics.json`** (tableau versionné, consommé par le site).

Chaque entrée exige :

- `proof_url` — URL http(s) primaire (doit être identique à `source.url`)
- `kind` — `fraud` | `error` | `spend` | `volume` | `other` (fraude ≠ erreur)
- `source` — `{ title, url, publisher }`

Pour ajouter une métrique : éditez `metrics.json` ou déposez un fragment dans une PR + issue **new-stat**.
