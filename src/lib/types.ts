export type MetricKind = "fraud" | "error" | "spend" | "volume" | "other";

export type OriginBasis = "stated" | "inferred" | "unknown";

export type Confidence = "high" | "medium" | "low";

export type InvestigationLane =
  | "caf"
  | "marches"
  | "immigration"
  | "elections"
  | "other";

export interface SourceRef {
  title: string;
  url: string;
  publisher: string;
}

export interface Metric {
  id: string;
  label_fr: string;
  value: number | string;
  unit?: string;
  as_of: string;
  category: string;
  kind: MetricKind;
  source: SourceRef;
  notes?: string;
  confidence?: Confidence;
}

export interface CafCase {
  case_id: string;
  lane: InvestigationLane;
  court_or_body_fr: string;
  date: string;
  defendant_names_fr: string;
  name_source_url: string;
  country_of_origin: string;
  origin_basis: OriginBasis;
  origin_evidence_fr: string;
  scheme_type_fr: string;
  amount_metric_id: string | null;
  amount_display_fr: string;
  sentence_fr: string;
  proof_urls: string[];
  sources: SourceRef[];
  confidence: Confidence;
}
