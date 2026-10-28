# Cas documentés (`data/cases/`)

Fichier canonique : **`manifest.json`**.

Champs obligatoires pour chaque cas :

- `proof_urls[]` — au moins une URL http(s) ; chaque URL doit apparaître dans `sources[]`
- `name_source_url` — où les noms publiés sont cités
- `origin_basis` — `stated` | `inferred` | `unknown` (jamais inférer la nationalité depuis le nom)
- `lane` — `caf` | `marches` | `immigration` | `elections` | `other`

Voir `docs/EVIDENCE_STANDARD.md`.
