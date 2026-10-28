# Contribuer à DOGE France

Merci de renforcer une enquête **multi-agents + crowdsource** orientée **vérité vérifiable**. Rien n’entre sur le site sans source primaire.

## Avant de commencer

1. Lisez [`docs/EVIDENCE_STANDARD.md`](docs/EVIDENCE_STANDARD.md).
2. Parcourez [`data/stats/README.md`](data/stats/README.md), [`data/cases/README.md`](data/cases/README.md), [`data/leads/README.md`](data/leads/README.md).
3. Vérifiez localement : `npm run validate` puis `npm run build`.

## Voies de contribution

| Type | Où | Comment |
|------|-----|--------|
| **Nouvelle métrique** | `data/stats/metrics.json` | Issue *new-stat* ou PR directe |
| **Nouveau cas** | `data/cases/manifest.json` | Issue *new-case* ou PR |
| **Piste non mature** | `data/leads/<id>.yaml` | Issue ou PR ; promotion ultérieure vers cas/stat |
| **Contestation** | Issue *challenge-claim* | Preuve contraire ou correction de source |

## Pull requests

- Une PR = un thème (ex. « ajout cas Meaux » ou « 3 métriques immigration »).
- **Checklist PR** (à cocher dans la description) :
  - [ ] Chaque affirmation nouvelle a une `proof_url` / `proof_urls` http(s) publique
  - [ ] Fraude vs **erreur** correctement étiquetée (`kind`)
  - [ ] Origine (pays) : `stated` / `inferred` / `unknown` — **pas** d’inférence depuis le nom
  - [ ] `npm run validate` OK
  - [ ] Pas de branding ou wording impliquant un site gouvernemental
  - [ ] Notes de gap si la source est presse seule (pas de jugement PDF)

## Agents (Cursor, Grok Bot, etc.)

Voir [`AGENTS.md`](AGENTS.md) pour les couloirs d’enquête (CAF, marchés, immigration, élections) et le flux PR.

## Code de conduite

Debate sur les faits et les sources, pas sur les personnes. Pas de doxxing au-delà de ce que publient déjà tribunaux / administrations / presse judiciaire.

## Licence & statut du dépôt

Projet indépendant, **non officiel**. Le dépôt est **privé** sur Origin pour l’instant ; voir README pour une ouverture publique future.
