# Standard de preuve — DOGE France

**North star :** vérité appuyée par des **sources primaires**. Sans URL de preuve, ça ne ship pas.

## 1. Source primaire

Une preuve valide est :

- Un document ou page **publique** (Cour des comptes, Légifrance/LibreJustice miroir, CNAF, data.gouv.fr, BOAMP, Vie publique, compte-rendu d’audience reconnue, etc.)
- Accessible via **URL http(s) stable** enregistrée dans les données (`proof_url`, `proof_urls`, `source.url`)
- Citée **verbatim** dans `notes` ou `origin_evidence_fr` quand le libellé est subtil

**Non accepté comme preuve unique :** rumeurs, threads anonymes, infographies sans lien, « on sait que », modèles qui devinent la nationalité.

## 2. Fraude vs erreur

| Étiquette | Signification | Exemple |
|-----------|---------------|---------|
| `fraud` / fraude | Intentionnel ou qualifié fraude par la source | Fraude caractérisée CNAF, condamnation pénale |
| `error` / erreur | Liquidation, indus, risque résiduel, mauvaise donnée | €6,3 Md risque 24 mois Cour (indus + rappels) |
| `spend` | Dépense publique exécutée | Mission immigration CP |
| `volume` | Comptage, taux, effectif | OQTF exécutées |

Ne **pas** additionner erreur résiduelle Cour et fraude détectée CNAF comme un seul « total fraude ».

## 3. Origine / nationalité

- **`stated`** — la source dit explicitement la nationalité ou l’origine du **prévenu** (pas la victime).
- **`inferred`** — inférence documentée (ex. registre des Français de l’étranger ; résidence permanente à l’étranger clairement décrite).
- **`unknown`** — défaut lorsque la source ne publie pas l’information.

Interdit : déduire l’origine du **nom de famille**, de l’ethnicité supposée, ou confondre pays des **enfants** / **victimes** avec celui du prévenu.

## 4. Schémas de fichiers

| Dossier | Schéma Zod | JSON Schema |
|---------|------------|-------------|
| `data/stats/` | `schemas/stat.schema.ts` | `schemas/stat.schema.json` |
| `data/cases/` | `schemas/case.schema.ts` | — |
| `data/leads/` | `schemas/lead.schema.ts` | — |

Champs obligatoires de preuve :

- Stats : `proof_url` (+ objet `source` cohérent)
- Cas : `proof_urls[]`, `name_source_url`
- Pistes : `proof_url`

## 5. Promotion piste → cas / stat

1. Piste ouverte dans `data/leads/` avec au moins une `proof_url`.
2. Enrichissement (secondes sources, montants, juridiction).
3. PR déplaçant le contenu validé vers `manifest.json` ou `metrics.json`.
4. Suppression ou statut `promoted` sur la piste.

## 6. Contestation

Issue **challenge-claim** : identifier l’`id` métrique ou `case_id`, fournir source primaire de correction, proposer diff JSON. Les maintainers tranchent sur la base des preuves, pas de la popularité.

## 7. CI

`npm run validate` échoue si :

- URL manquante ou non http(s)
- `proof_url` ≠ `source.url` pour une stat
- `proof_urls` non listées dans `sources`
- Doublons d’`id` / `case_id`
