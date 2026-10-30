import { z } from "zod";
import { proofUrlSchema } from "./proof-url";

export const immigrationSeriesPointSchema = z.object({
  year: z.number().int(),
  series_id: z.string().min(1),
  value: z.number(),
  unit: z.enum(["persons", "percent"]),
  label_fr: z.string().min(1),
  source_url: proofUrlSchema,
  source_org: z.string().min(1),
  notes: z.string().optional(),
});

export const immigrationSeriesFileSchema = z.array(immigrationSeriesPointSchema);

export type ImmigrationSeriesPoint = z.infer<typeof immigrationSeriesPointSchema>;
