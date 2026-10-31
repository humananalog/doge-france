/** INSEE Fig. 2 aggregate region for G1 immigrant geographic origins (2023). */
export type WorldmapRegionId =
  | "maghreb"
  | "afrique_hors_maghreb"
  | "turquie_moyen_orient"
  | "asie_hors_turquie_mo"
  | "europe_sud"
  | "ue_autres"
  | "europe_hors_ue"
  | "amerique_oceanie";

const MAGHREB = new Set(["MA", "DZ", "TN", "LY", "MR"]);

const EU_SOUTH = new Set(["ES", "IT", "PT"]);

/** UE-27 (approx. 2023) minus France (destination) and Europe du Sud. */
const EU_OTHER = new Set([
  "BE",
  "NL",
  "DE",
  "AT",
  "SE",
  "FI",
  "DK",
  "IE",
  "PL",
  "CZ",
  "SK",
  "HU",
  "RO",
  "BG",
  "HR",
  "SI",
  "EE",
  "LV",
  "LT",
  "LU",
  "CY",
  "MT",
  "GR",
]);

const MIDDLE_EAST = new Set([
  "TR",
  "IL",
  "PS",
  "LB",
  "JO",
  "SY",
  "IQ",
  "IR",
  "SA",
  "YE",
  "OM",
  "KW",
  "QA",
  "BH",
  "AE",
]);

const AMERICAS = new Set([
  "US",
  "CA",
  "MX",
  "GT",
  "BZ",
  "HN",
  "SV",
  "NI",
  "CR",
  "PA",
  "CU",
  "JM",
  "HT",
  "DO",
  "PR",
  "BS",
  "AR",
  "CL",
  "UY",
  "PY",
  "BO",
  "PE",
  "EC",
  "CO",
  "VE",
  "GY",
  "SR",
  "BR",
  "TT",
  "FK",
]);

const OCEANIA = new Set(["AU", "NZ", "NC", "SB", "VU", "PG", "FJ"]);

const ASIA = new Set([
  "CN",
  "TW",
  "IN",
  "PK",
  "BD",
  "BT",
  "NP",
  "AF",
  "TJ",
  "KG",
  "TM",
  "UZ",
  "KZ",
  "MN",
  "KP",
  "KR",
  "JP",
  "PH",
  "MY",
  "BN",
  "ID",
  "TH",
  "LA",
  "MM",
  "VN",
  "KH",
  "TL",
  "LK",
  "AM",
  "AZ",
  "GE",
]);

const AFRICA = new Set([
  "ZA",
  "LS",
  "SZ",
  "NA",
  "BW",
  "ZW",
  "MZ",
  "MW",
  "ZM",
  "AO",
  "CD",
  "CG",
  "GA",
  "GQ",
  "CM",
  "CF",
  "TD",
  "NE",
  "NG",
  "BJ",
  "TG",
  "GH",
  "CI",
  "LR",
  "SL",
  "GN",
  "GW",
  "SN",
  "ML",
  "BF",
  "MR",
  "DZ",
  "TN",
  "LY",
  "MA",
  "EG",
  "SD",
  "SS",
  "ET",
  "ER",
  "DJ",
  "SO",
  "KE",
  "UG",
  "RW",
  "BI",
  "TZ",
  "MG",
  "GM",
  "EH",
]);

const EUROPE_NON_EU = new Set([
  "GB",
  "CH",
  "NO",
  "IS",
  "GL",
  "UA",
  "BY",
  "MD",
  "RS",
  "ME",
  "MK",
  "XK",
  "BA",
  "AL",
  "RU",
]);

/**
 * Map ISO 3166-1 alpha-2 (as on bundled world map) to INSEE G1 aggregate region.
 * One color per aggregate — country borders are illustrative only.
 */
export function regionIdForCountry(isoCode: string): WorldmapRegionId | null {
  const c = isoCode.toUpperCase();
  if (c === "FR") return null;
  if (MAGHREB.has(c)) return "maghreb";
  if (EU_SOUTH.has(c)) return "europe_sud";
  if (MIDDLE_EAST.has(c)) return "turquie_moyen_orient";
  if (EU_OTHER.has(c)) return "ue_autres";
  if (AMERICAS.has(c) || OCEANIA.has(c)) return "amerique_oceanie";
  if (ASIA.has(c)) return "asie_hors_turquie_mo";
  if (AFRICA.has(c)) {
    if (MAGHREB.has(c)) return "maghreb";
    return "afrique_hors_maghreb";
  }
  if (EUROPE_NON_EU.has(c)) return "europe_hors_ue";
  return null;
}
