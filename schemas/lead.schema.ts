import { z } from "zod";
import { proofUrlSchema } from "./proof-url";
import { investigationLaneSchema } from "./case.schema";

export const leadRecordSchema = z.object({
  lead_id: z
    .string()
    .min(1)
    .regex(/^[a-z0-9-]+$/, "lead_id: lowercase letters, digits, hyphens"),
  lane: investigationLaneSchema,
  title_fr: z.string().min(1),
  summary_fr: z.string().min(20),
  hypothesis_fr: z.string().optional(),
  proof_url: proofUrlSchema,
  secondary_proof_urls: z.array(proofUrlSchema).optional(),
  status: z.enum(["open", "triaged", "promoted", "closed"]).default("open"),
  submitted_by: z.string().optional(),
  submitted_at: z.string().optional(),
});

export const leadFileSchema = z.object({
  version: z.literal(1),
  lead: leadRecordSchema,
});

export type LeadRecord = z.infer<typeof leadRecordSchema>;
