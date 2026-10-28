# Statistiques (`data/stats/`)

Fichier canonique : **`metrics.json`** (tableau versionné, consommé par le site).

Chaque entrée exige :

- `proof_url` — URL http(s) primaire (doit être identique à `source.url`)
- `kind` — `fraud` | `error` | `spend` | `volume` | `other` (fraude ≠ erreur)
- `source` — `{ title, url, publisher }`

Pour ajouter une métrique : éditez `metrics.json` ou déposez un fragment dans une PR + issue **new-stat**.

**Dette publique (tableau de bord)** — ids réservés (Guard-PASS requis, ne pas inventer) :
`macro-dette-publique-eur`, `macro-dette-publique-pib-pct`. Tant qu’ils sont absents, l’accueil affiche un placeholder ; les dépenses AME `spend` y seront cadrées vs dette une fois présents.
