import { z } from "zod";
import { proofUrlSchema } from "./proof-url";

export const worldmapOriginRegionSchema = z.object({
  region_id: z.string().min(1),
  label_fr: z.string().min(1),
  insee_label: z.string().min(1),
  g1_thousands: z.number().positive(),
  g1_pct_of_immigres: z.number().positive(),
  color: z.string().regex(/^#[0-9a-fA-F]{6}$/),
  effectif_metric_id: z.string().min(1),
  part_metric_id: z.string().min(1),
});

export const worldmapOriginsFileSchema = z.object({
  title_fr: z.string().min(1),
  banner: z.string().min(1),
  data_year: z.number().int(),
  primary_url: proofUrlSchema,
  figure: z.string().min(1),
  denominator: z.string().min(1),
  regions: z.array(worldmapOriginRegionSchema).length(8),
  optional_layer_g2: z.object({
    source: proofUrlSchema,
    figure: z.string().min(1),
    champ: z.string().min(1),
    note: z.string().min(1),
  }),
  onomastic_crosswalk: z.object({
    anchor_id: z.string().min(1),
    rule: z.string().min(1),
  }),
});

export type WorldmapOriginsFile = z.infer<typeof worldmapOriginsFileSchema>;
export type WorldmapOriginRegion = z.infer<typeof worldmapOriginRegionSchema>;
