import { z } from "zod";
import { proofUrlSchema, sourceRefSchema } from "./proof-url";

export const originBasisSchema = z.enum(["stated", "inferred", "unknown"]);

export const investigationLaneSchema = z.enum([
  "caf",
  "marches",
  "immigration",
  "elections",
  "other",
]);

export const caseRecordSchema = z.object({
  case_id: z
    .string()
    .min(1)
    .regex(/^[a-z0-9-]+$/, "case_id: lowercase letters, digits, hyphens"),
  lane: investigationLaneSchema.default("caf"),
  court_or_body_fr: z.string().min(1),
  date: z.string().min(1),
  defendant_names_fr: z.string().min(1),
  name_source_url: proofUrlSchema,
  country_of_origin: z.string().min(1),
  origin_basis: originBasisSchema,
  origin_evidence_fr: z.string().min(1),
  scheme_type_fr: z.string().min(1),
  amount_metric_id: z.string().nullable(),
  amount_display_fr: z.string().min(1),
  sentence_fr: z.string().min(1),
  proof_urls: z.array(proofUrlSchema).min(1),
  sources: z.array(sourceRefSchema).min(1),
  confidence: z.enum(["high", "medium", "low"]),
});

export const casesFileSchema = z.object({
  version: z.literal(1),
  cases: z.array(caseRecordSchema).min(1),
});

export type CaseRecord = z.infer<typeof caseRecordSchema>;
