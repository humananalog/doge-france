# Method — Aides / nationalité / immigrés (DOGE France · CAF Hunter)

**Pack date:** 2026-10-31 (Asia/Hong_Kong)  
**North star:** Truth — primary sources only.  
**Question under test:** Do immigrant / Maghreb-origin households « use a lot of aides » (French non-contributory social benefits)?

## Scope

| In scope | Out of scope |
|---|---|
| Prestations familiales (AF, PAJE, etc.) by **nationalité** or **immigrés vs non** if published | Opinion polls, pundit math, viral 42% CAF claims |
| Minima sociaux (RSA, AAH, ASS, ASPA…) same splits | Contributory benefits (retraite, chômage, IJ) except when a source mixes them |
| Logement (APL / ALS / ALF) same splits | Ethnicity / religion / « Muslim aides » inventions |
| **Fraude** amounts vs **legal eligibility spend** — always separated | Secondary press paraphrases without a primary URL |
| Explicit **documented gaps** (CNAF/CNAV say data do not exist) | Extrapolating Maghreb from « Afrique » or « hors EEE » |

## Soft-holds (do not invent)

1. **« Muslim aides »** — no French primary public statistic tracks religion of benefit recipients. FAIL if claimed.
2. **Maghreb-specific spend %** — none found in CNAF / Assemblée / Sénat / DREES / Cour des comptes / INSEE public tables consulted this dig. INSEE publishes **immigrés nés en Afrique** (continent), which is **not** Maghreb-only.
3. **Étrangers hors EEE ≠ Maghreb ≠ immigrés** — hors EEE includes Americas/Asia/Africa/Turkey/etc.; immigrés include naturalised French; Français nés à l'étranger are neither. Label each champ exactly.
4. **Beneficiary counts vs spend** — % of foyers ≠ % of €. Prefer both when available; never swap.
5. **Fraude vs erreurs vs legal spend** — Cour des comptes residual **errors** and CNAF **detected fraude** are not « immigrant benefit spend ».

## What FAIL looks like

- Inventing a Maghreb or Muslim share of AF / RSA / APL €.
- Citing « 42% of CAF are foreigners » (debunked mix of individuals vs foyers; see AFP Factuel quoting CNAF).
- Treating hors-EEE AF share (~6% of AF *bénéficiaires* end-2013/2014) as Maghreb spend.
- Blending fraude detection (hundreds of M€) into « immigrants use X Md€ of aides ».
- Quoting INSEE « nés en Afrique » as Maghreb without the soft-hold.
- Claiming CNAF publishes fine nationality splits when official answers say it does **not**.

## Dig method used

1. Verify known Assemblée / Sénat written answers citing CNAF.
2. Search recent Assemblée / Sénat QE on RSA, APL, ASPA + nationality.
3. Pull INSEE *Revenus et patrimoine des ménages* 2024 fiche immigrés (ERFS 2021).
4. Pull Cour des comptes fraude / certification notes; keep fraude section separate.
5. Note CNAF open-data / press gaps when caf.fr was in maintenance during dig (FR night window).
6. Download key PDFs/HTML into `downloads/` when TLS allowed.

## PASS / PASS-LOW / FAIL rubric (for Evidence Guard)

| Verdict | Rule |
|---|---|
| **PASS** | Figure + year + champ + primary URL; no overclaim beyond champ |
| **PASS-LOW** | Primary URL but year missing, or CNAF figure only via AFP paraphrase, or continent aggregate used carefully with soft-hold |
| **FAIL** | Maghreb/Muslim/ethnie invention; fraude mixed into legal spend; wrong unit (NIR vs foyers) |

## Population context (not a spend claim)

INSEE ERFS champ used for living-standard shares: immigrés ≈ 10% of persons in the 2021 table; « nés en Afrique » ≈ 4.8% of persons in that table. Use only for contextualising **share of living standard from prestations**, not as a CAF beneficiary %.
