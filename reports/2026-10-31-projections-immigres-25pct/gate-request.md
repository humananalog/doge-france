# Soft-hold → Evidence Guard

Pack: `/workspace/doge-france/reports/2026-10-31-projections-immigres-25pct/`  
Mirror: `/workspace/insee-desk/reports/2026-10-31-projections-immigres-25pct/`

**Framing lock:** « étude · recomposition de bornes » — **never** « projection ethnique officielle ».

## Ask

Verdict before any doge-france / INSEE Desk tile that answers « when will this ethnicity group reach 25% »:

1. **Lead must state:** no official ethnie / Muslim-ethnicity series to project; inventing a certainty year = **FAIL**.
2. **Allowed:** current floors (G1, G2, Maghreb+TR/MO derived, Maghreb-line births derived, TeO2 Muslim 10% 18–59) with primary URLs.
3. **Allowed:** INSEE pop projections (solde only); Héran 2050 immigrés Afrique du Nord ~5,3 %; Pew 2017 France Muslim 12,7 / 17,4 / 18,0 % **labeled non-INSEE**.
4. **Allowed:** assumption-band math for ~25 % as **derived scenarios with assumptions listed** — **no** year presented as fact.
5. **FAIL** if UI ships « musulmans / ethnie à 25 % en YEAR » or treats Pew high 18 % as « already 25 » or as INSEE.

## FAIL list (enforce)

See `method.md` § FAIL list and `metrics.json` `fail_flags`:

- Invent ethnicity / Islam 25 % year as fact  
- Present Pew or Héran as INSEE  
- Interpolate missing year to fake 25 %  
- All-age G3 projection  
- UI title « projection ethnique »  
- Apply TeO2 10 % to all ages without label  

## Expected Guard posture

**SOFT-HOLD / PASS-WITH-CONSTRAINTS** if tiles keep framing + derived labels.  
**FAIL** if any shipped claim names an official ethnicity/Islam 25 % year.

Parent will Gate — executor does not call Evidence Guard.
