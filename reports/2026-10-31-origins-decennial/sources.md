# Sources primaires — origins-decennial

| # | Org | Document | URL | Rôle |
|---|---|---|---|---|
| 1 | INSEE | Immigrés et descendants — France, portrait social (nov. 2024) | https://www.insee.fr/fr/statistiques/8242329 | G1 total 1911–2023 Fig.1 · G1 origines 2023 Fig.2 · G2 2023 Fig.3 |
| 2 | INSEE | Histoire des migrations et diversité des origines (IMMFRA 2023 fiche) | https://www.insee.fr/fr/statistiques/6793226 | G1 origines abs. 1968–2021 Fig.2 · G1+pop Fig.1 |
| 2b | INSEE | Données XLSX Fig.1–2 | https://www.insee.fr/fr/statistiques/fichier/6793226/IMMFRA23-F2.xlsx | Machine table (erratum 24/05/2024) · local `downloads/IMMFRA23-F2.xlsx` |
| 2c | INSEE | PDF fiche | https://www.insee.fr/fr/statistiques/fichier/6793226/IMMFRA23-F2.pdf | `downloads/IMMFRA23-F2.pdf` |
| 3 | INSEE | Une situation des descendants… (dossier) | https://www.insee.fr/fr/statistiques/6793314 | Joint G1 (1968/90/11/21) + G2 (2005/11/21) by origin Fig.1 |
| 4 | INSEE | Origines géographiques des descendants | https://www.insee.fr/fr/statistiques/6793230 | G2 2021 detail |
| 5 | INSEE / Ined | Descendants 3ᵉ génération | https://www.insee.fr/fr/statistiques/6793242 | G3 4,8 M · 10,2 % des **\<60** · 2019-2020 |
| 6 | INSEE | Les immigrés en France éd. 2005 — fiche 1.8 | https://www.insee.fr/fr/statistiques/fichier/1371772/IMMFRA05d.PDF | % origines 1962–1999 · `downloads/IMMFRA05d.pdf` |
| 7 | INSEE | France, portrait social 2016 fiche 2.3 | https://www.insee.fr/fr/statistiques/fichier/2492220/FPORSOC16j3_F2.3_immigres.pdf | G1+G2 origines **2013** · `downloads/FPORSOC16.pdf` |
| 8 | INSEE | France, portrait social 2011 VE22 | https://www.insee.fr/fr/statistiques/fichier/1373887/FPORSOC11d_VE22Immig.pdf | G1 origines **2008** · G2 all-age ~6,5 M text · G2 18–50 detail only · `downloads/FPORSOC11.pdf` |
| 9 | INSEE | Immigrés et descendants — Portrait social 2025 | https://www.insee.fr/fr/statistiques/8612512 | Companion millésime 2024 (G1 7 615 k) — not used as chart anchor in this pack (ship still on 8242329 2023) |

## SHA256 (`downloads/SHA256SUMS.txt`)

```
782c9811688cfd78119100422cb39a85ecb63a5ff139d8a0ed54c28c4187d792  IMMFRA23-F2.xlsx
08a954910bbe5e8a03a7747dfcfa325bebc05b2e56c43f6577a21c2e25cfe81a  IMMFRA05d.pdf
6f83a5e117e8562058b2b70ed32dd4d4be25971a6928a597f6f1f60690cebd83  IMMFRA23-F2.pdf
bbdb8dfd71655b2160ebf11c6247b610d563fc6147261f9b3318af59c7652edf  FPORSOC11.pdf
58d8b8c50b694551a93153327a8b4409df0ca13621bd82f8bbaa4096a3157506  FPORSOC16.pdf
```

## Blockers / lacunes fetch

- Full dossier PDF `6793391/IMMFRA23.pdf` returned truncated/corrupt via curl (xref missing) — **HTML pages 6793226 / 6793314 used instead** (same tables).
- XLSX for 6793242 / 6793230 returned HTTP 500 — HTML tables transcribed.
- No secondary media / think-tank used.
