# Evidence Guard — Aides / nationalité / immigrés

- **Verdict:** PASS
- **Gate:** Evidence Guard (DOGE France) · 31 Oct 2026 ~09:30 HKT (Asia/Hong_Kong)
- **Pack:** `/workspace/doge-france/reports/2026-10-31-aides-nationalite/`
- **Requester:** CAF Hunter (aides / nationalité dig)
- **North star:** Truth — reject invent; Maghreb / Muslim / ethnie spend % soft-held without primary URL
- **Question under test:** Immigrant / Maghreb-origin households « use a lot of aides »?

## 1. Overall verdict

**PASS**

Pack ships only figures that match primary JO / INSEE / CdC text (spot-checked this gate). PASS-LOW cells (Q5530 year missing; AFP←CNAF 11%) are correctly labeled. Maghreb / Muslim / ethnie aides %, viral 42%, and fraude-by-nationality inventions are soft-held FAIL — pack does **not** invent them. Fraude ≠ erreurs ≠ legal spend kept separate; origin_status discipline (stated labels only) respected.

Not a blank cheque for UI: every published tile must keep the champ (bénéficiaires vs €; immigrés vs étrangers hors EEE vs extra-communautaires; share of living standard ≠ CAF budget share) and must not fuse Afrique → Maghreb → Muslim.

## 2. Spot-checks (REQUIRED) — all CONFIRMED

| # | Source | Claim checked | Result | Proof URL |
|---|--------|---------------|--------|-----------|
| 1 | AN Q29143 | End-2013 AF: ~5M / 12,4 Md€; ~2% EEE+CH; **~6% hors EEE** bénéficiaires; CNAF no finer nationality € | **CONFIRMED** | https://www.assemblee-nationale.fr/dyn/14/questions/QANR5L14QE29143 |
| 2 | AN Q5157 | Mid-2022 RSA: &lt;300k / **15,6%** foyers hors UE/EEE (responsable de dossier); 88,4% of non-French | **CONFIRMED** | https://www.assemblee-nationale.fr/dyn/16/questions/QANR5L16QE5157 |
| 3 | AN Q5530 | APL extra-comm. **14,8%** / 859 554 ménages; **16,4%** spend / **2,4 Md€**; **year absent** in JO answer (pub. 11 Apr 2023) | **CONFIRMED** (numbers) + year gap → PASS-LOW | https://www.assemblee-nationale.fr/dyn/16/questions/QANR5L16QE5530 |
| 4a | INSEE RPM2024 F18 / ERFS 2021 | Prestations non contributives = **11,1%** immigrés (2 410 €) vs **5,6%** non (1 530 €); Afrique **16,4%** (3 110 €) | **CONFIRMED** (table Fig. 1 exact) | https://www.insee.fr/fr/statistiques/7941405?sommaire=7941491 |
| 4b | INSEE 6793278 / ERFS 2019 | Prestations share: immigrés **12%** / descendants **10%** / sans ascendance **5%**; Afrique **18%** / Europe **6%** | **CONFIRMED** (prose + Fig. 2) | https://www.insee.fr/fr/statistiques/6793278?sommaire=6793391 |

**Bonus confirm (same dig):** Sénat qSEQ140210272 end-2014 AF ~5M / 12,7 Md€; ~2% / ~6%; CNAF « ne dispose pas de données par nationalité » — CONFIRMED at https://www.senat.fr/questions/base/2014/qSEQ140210272.html. AFP Factuel 2025-11-06 paraphrases CNAF (28 Oct 2025): fin-2022 **11%** of 13,5M foyers foreign nationality; viral 42% = NIR individuals ÷ foyers — CONFIRMED secondary at https://factuel.afp.com/doc.afp.com.833N2NQ.

No required spot-check **failed**.

## 3. Claim-by-claim gate

### PASS (primary states figure)

| ID | Claim | Verdict | proof_url | Notes |
|----|-------|---------|-----------|-------|
| AN Q29143 | AF end-2013: ~5M / 12,4 Md€; ~2% EEE+CH; ~6% hors EEE bénéficiaires | **PASS** | https://www.assemblee-nationale.fr/dyn/14/questions/QANR5L14QE29143 | % of *bénéficiaires*, not €; hors EEE ≠ Maghreb |
| Sénat 2014/2016 | AF end-2014: ~5M / 12,7 Md€; ~2% / ~6%; CNAF no finer nationality € | **PASS** | https://www.senat.fr/questions/base/2014/qSEQ140210272.html | Explicit gap language |
| AN Q5157 | RSA 30/06/2022: &lt;300k / 15,6% foyers hors UE/EEE | **PASS** | https://www.assemblee-nationale.fr/dyn/16/questions/QANR5L16QE5157 | Nationality of *responsable*; no € for subset |
| INSEE F18 ERFS 2021 | Prestations = 11,1% / 5,6% of living standard; Afrique 16,4% | **PASS** | https://www.insee.fr/fr/statistiques/7941405?sommaire=7941491 | Share of niveau de vie ≠ CAF budget share; Afrique = continent |
| INSEE 6793278 ERFS 2019 | Prestations = 12% / 10% / 5%; Afrique 18% | **PASS** | https://www.insee.fr/fr/statistiques/6793278?sommaire=6793391 | Ascendance migratoire; not religion |
| AN Q4877 | ASPA: CNAV no nationality data | **PASS** (documented gap) | https://questions.assemblee-nationale.fr/q16/16-4877QE.htm | Gap cite only |
| AN Q6272 | RSA/ASPA nationality series unanswered | **PASS** (documented gap) | https://questions.assemblee-nationale.fr/q17/17-6272QE.htm | Ongoing gap |
| CdC 2020 fraude | Est. fraude famille 2,3 Md€ (2018); residual wrong ~3 Md€ | **PASS** | https://www.ccomptes.fr/fr/publications/la-lutte-contre-les-fraudes-aux-prestations-sociales | **Zero** nationality split — do not invent |
| AN Q4323 | CAF 2024 detected fraude 449,2 M€ / 49 030 | **PASS** | https://questions.assemblee-nationale.fr/q17/17-4323QE.htm | Detected fraude only; no nationality |
| CdC certif 2024 | 6,3 Md€ erreurs 24 mois / 8% | **PASS** | https://ccomptes.fr/fr/publications/certification-des-comptes-du-regime-general-de-securite-sociale-et-du-cpsti-exercice | **Errors ≠ fraude**; no nationality |
| INSEE aggregate 63,3 Md€ | Non-contributory total 2021 (no nationality) | **PASS** | https://www.insee.fr/fr/statistiques/7941379?sommaire=7941491 | Denominator context only |

### PASS-LOW (secondary or missing year/scope)

| ID | Claim | Verdict | proof_url | Caveat |
|----|-------|---------|-----------|--------|
| AN Q5530 APL | Extra-comm. 14,8% bénéficiaires / 16,4% spend / 2,4 Md€ | **PASS-LOW** | https://www.assemblee-nationale.fr/dyn/16/questions/QANR5L16QE5530 | Numbers MATCH; **reference year missing** in JO text |
| AFP←CNAF ~11% | Fin-2022: 11% of 13,5M foyers allocataires foreign nationality | **PASS-LOW** | https://factuel.afp.com/doc.afp.com.833N2NQ | Secondary quoting CNAF; upgrade to PASS if CNAF PDF/page archived |
| INSEE « nés en Afrique » 16,4% / 18% | Higher relative weight of aides | **PASS** figures / **PASS-LOW** if UI overclaims | F18 / 6793278 | Continent ≠ Maghreb ≠ Muslim; living-standard share ≠ budget share |

### FAIL (invent — soft-hold / block)

| Invention | Verdict | Why |
|-----------|---------|-----|
| « X% of aides go to Maghrebis / Muslims / ethnie » | **FAIL** | No primary publishes Maghreb or religion benefit spend |
| Viral « 42% of CAF are foreigners » | **FAIL** | Wrong units (NIR individuals ÷ foyers); CNAF via AFP ≈ 11% foreign-nationality *foyers* |
| Hors-EEE AF ~6% = Maghreb spend | **FAIL** | hors EEE = worldwide non-EEE; % of bénéficiaires not €; dated 2013–14 |
| Immigrés « take most aides » (absolute budget) | **FAIL** | INSEE = relative weight in living standard; absolute nationality budget share mostly unpublished |
| Fraude 2–6 Md€ = immigrant fraud | **FAIL** | CdC/CNAF fraude & errors have **zero** nationality split |
| Naturalised / descendants = étrangers | **FAIL** | Immigré ≠ étranger ≠ descendant — keep source labels |

## 4. Soft-holds (do not lift without new primary)

1. **Maghreb / Muslim / ethnie aides %** — invented unless a new primary appears. Afrique ≠ Maghreb ≠ Muslim.
2. Always say **étrangers hors EEE / extra-communautaires / immigrés / nés en Afrique** exactly as the source (`origin_status`: stated). No guilt-by-surname.
3. Separate **fraude détectée**, **fraude estimée**, **erreurs**, **spend légal**.
4. Prefer **€ and % of beneficiaries** both; never swap units (NIR ≠ foyers; living-standard share ≠ CAF € share).
5. Q5530 year unresolved until dated CNAF extract; AFP 11% stays PASS-LOW until CNAF URL archived.

## 5. Residuals / open gaps (documented, not inventable)

- Maghreb share of AF / RSA / APL € — **absent**
- Muslim-specific benefit statistics — **absent**
- Current (post-2014) official AF nationality table finer than EEE / hors EEE — **absent** (CNAF says no)
- ASPA by nationality — CNAV unavailable (Q4877)
- Fine RSA/ASPA nationality series — Q6272 unanswered at dig time
- Fraude by nationality / origin — **absent**
- Q5530 APL reference year — **unresolved**

## 6. Ship rules for downstream / UI

- **May ship:** PASS cells with champ + year + proof_url; PASS-LOW cells with explicit caveat badge.
- **Must not ship:** Maghreb/Muslim/ethnie %; 42%; fraude-as-immigrant-spend; hors-EEE-as-Maghreb; unlabeled Afrique-as-Maghreb.
- Re-gate if a later CNAF open-data nationality extract appears (upgrade AFP 11%), or if UI titles invent religion/ethnie.

## 7. Paths

- Pack: `/workspace/doge-france/reports/2026-10-31-aides-nationalite/`
- Gate (workspace): `/workspace/doge-france/gates/2026-10-31-aides-nationalite-gate.md`
- Gate (store): `/cursor/stores/store-820bb730-8ad4-4f2c-a899-fa6b8395c344/gates/2026-10-31-aides-nationalite-gate.md`
