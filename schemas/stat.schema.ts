import { z } from "zod";
import { proofUrlSchema, sourceRefSchema } from "./proof-url";

export const metricKindSchema = z.enum([
  "fraud",
  "error",
  "spend",
  "volume",
  "other",
]);

export const wasteClassSchema = z.enum(["illegal", "legal"]);

export const statRecordSchema = z
  .object({
    id: z
      .string()
      .min(1)
      .regex(/^[a-z0-9-]+$/, "id: lowercase letters, digits, hyphens"),
    label_fr: z.string().min(1),
    value: z.union([z.number(), z.string()]),
    unit: z.enum(["EUR", "percent", "count"]).optional(),
    as_of: z.string().min(1),
    category: z.string().min(1),
    kind: metricKindSchema,
    waste_class: wasteClassSchema.optional(),
    geography: z.string().min(1).optional(),
    proof_url: proofUrlSchema,
    source: sourceRefSchema,
    notes: z.string().optional(),
    confidence: z.enum(["high", "medium", "low"]).optional(),
  })
  .refine((s) => s.proof_url === s.source.url, {
    message: "proof_url must match source.url (single primary proof)",
    path: ["proof_url"],
  })
  .refine((s) => s.kind !== "fraud" || s.waste_class !== "legal", {
    message: "fraud metrics must not use waste_class=legal",
    path: ["waste_class"],
  })
  .refine((s) => s.kind !== "error" || s.waste_class == null, {
    message: "error metrics must not set waste_class",
    path: ["waste_class"],
  });

export const statsFileSchema = z.object({
  version: z.literal(1),
  metrics: z.array(statRecordSchema).min(1),
});

export type StatRecord = z.infer<typeof statRecordSchema>;
