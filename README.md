# DOGE France

**Mission :** plateforme d’enquête **multi-agents + crowdsourcée** sur les dépenses, erreurs et fraudes documentées en France. **North star : vérité avec preuves** — sans URL primaire, ça ne ship pas.

Tagline : **Transparence · Preuves · Efficacité**

Ce projet est **indépendant** et **n’est pas** un site officiel de l’État français.

**Dépôt :** `humananalog/doge-france` — **Origin** (privé) + miroir **GitHub** (public, cible).

### Publier sur GitHub (Alex / machine authentifiée)

Le dépôt GitHub **n’existait pas** au moment du scaffold (`404` sur `humananalog/doge-france`). Nom **`doge-france` disponible**.

```bash
gh auth login
chmod +x scripts/publish-github.sh
./scripts/publish-github.sh humananalog/doge-france
```

URL attendue : **https://github.com/humananalog/doge-france** · branche par défaut : **`main`**.

Remotes dupliqués OK :

- `origin` → Origin (Cursor), ne pas supprimer
- `github` → github.com (ajouté par le script ci-dessus)

## Pourquoi ce repo

| Couche | Rôle |
|--------|------|
| `data/` | Soumissions JSON/YAML (stats, cas, pistes) validées en CI |
| `schemas/` | Contrats Zod + JSON Schema (`proof_url` obligatoire) |
| `src/` | Site Next.js lisant le registre — liens de preuve sur chaque chiffre |
| `docs/` | Standard de preuve, workflow contributeurs |

Voir [`CONTRIBUTING.md`](CONTRIBUTING.md) et [`docs/EVIDENCE_STANDARD.md`](docs/EVIDENCE_STANDARD.md).

## Développement

```bash
npm install
npm run validate   # échoue si métrique sans URL valide
npm run dev -- -p 3847
```

Build production :

```bash
npm run build      # validate + next build
```

## Déploiement Vercel

1. Importer le dépôt (framework Next.js).
2. Build : `npm run build`.
3. Aucune variable d’environnement requise pour le registre embarqué.
4. Conserver la mention « non officiel » en pied de page.

## Pages publiques

| Route | Contenu |
|-------|---------|
| `/` | KPIs sourcés |
| `/depenses`, `/caf`, `/immigration` | Thématiques |
| `/cas` | 16 cas CAF (table filtrable) |
| `/sources` | Registre complet |
| `/contribuer` | Soumettre une piste / PR |
| `/methodologie` | Règles éditoriales |

## Ouvrir en open source (plus tard)

Aujourd’hui : dépôt **privé** (pas d’équipe Cursor Internal). Pour une release publique OS :

1. Passer le dépôt Origin/GitHub en **public** et choisir une licence (ex. MIT ou Apache-2.0 — à trancher avec Alex).
2. Activer Issues/PR communautaires + éventuellement CODEOWNERS sur `data/`.
3. Vérifier qu’aucun secret / credential n’est dans l’historique git.
4. Documenter un canal de signalement (security.md) si des contributeurs externes rejoignent.
5. Optionnel : bot de tri des PR, preview Vercel par branche.

Jusque-là, les contributions passent par l’équipe core + agents autorisés sur le dépôt privé.
