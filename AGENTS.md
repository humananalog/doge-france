# DOGE France — guide agents

Projet d’**enquête crowdsourcée** (humains + agents). Mission : **vérité + preuves**, pas brochure.

## Principes

1. **Primary URL or nothing** — chaque chiffre ou fait nommé → `proof_url` / `proof_urls` dans `data/`.
2. **Fraude ≠ erreur** — voir `docs/EVIDENCE_STANDARD.md`.
3. **Origine** — `stated` | `inferred` | `unknown` ; jamais depuis le nom.
4. **Pas d’État** — ne jamais présenter le site ou le repo comme officiel.
5. **Validate before PR** — `npm run validate && npm run build`.

## Couloirs (lanes)

| Lane | Dossiers / data | Sources types |
|------|-----------------|---------------|
| **caf** | `data/cases/`, stats `category: caf` | Cour cert. SS, CNAF DP, jugements, webinaires CAF |
| **marches** | `data/leads/` → stats | PLACE, BOAMP, data.gouv marchés, Cour marchés |
| **immigration** | stats `category: immigration` | Cour immigration, NEB, AN QE, Vie publique |
| **elections** | leads + cas | Conseil constitutionnel, CNCCFP — faits prouvés seulement |

## Workflow agent

1. Lire les uploads / briefings existants dans `uploads/` et le registre `data/stats/metrics.json`.
2. Creuser **sources primaires** (PDF Cour, pages gouv, décisions).
3. Ajouter ou modifier JSON/YAML sous `data/` conforme aux schémas `schemas/`.
4. Ouvrir PR avec checklist `CONTRIBUTING.md`.
5. Pour Grok Bot / Cursor : décrire dans la PR la chaîne source → champ JSON.

## Fichiers clés

- Site : `src/lib/registry.ts` ← `data/stats/metrics.json`
- Cas : `src/lib/cases.ts` ← `data/cases/manifest.json`
- Validation CI : `scripts/validate-data.ts`

## Interdits

- Scraping de comptes allocataires / données perso.
- Inventer montants en JSX ou copy sans entrée registre.
- Local-only proofs (`local:sources/...`) dans les PR publiées — remplacer par URL officielle.

---

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
