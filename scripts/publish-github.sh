#!/usr/bin/env bash
# Run locally after: gh auth login  (or export GH_TOKEN with repo scope)
set -euo pipefail
cd "$(dirname "$0")/.."

REPO="${1:-humananalog/doge-france}"

if ! gh auth status -h github.com >/dev/null 2>&1; then
  echo "GitHub CLI not authenticated. Run: gh auth login"
  exit 1
fi

if gh repo view "$REPO" >/dev/null 2>&1; then
  echo "Repo exists: https://github.com/$REPO"
else
  gh repo create "$REPO" --public --description "DOGE France — enquête crowdsourcée, preuves primaires only"
fi

git remote remove github 2>/dev/null || true
gh repo set-default "$REPO"
git remote add github "https://github.com/${REPO}.git"

npm run build
git push -u github main

echo "Done: https://github.com/${REPO} (branch: main)"
