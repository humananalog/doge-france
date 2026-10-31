import { z } from "zod";
import { proofUrlSchema } from "./proof-url";

/** Site UI convention — not an INSEE or official ideology classification. */
export const presidentialEraSideSchema = z.enum(["left", "right", "neutral"]);

export const presidentialEraSchema = z
  .object({
    start: z.number().int(),
    /** Inclusive calendar year; omit or null = mandate still open (clip to chart max). */
    end: z.number().int().nullable().optional(),
    name: z.string().min(1),
    /** Surname shown on chart bands when space allows. */
    president: z.string().min(1),
    /** Stated party or movement at investiture (documented on primary_url). */
    party: z.string().min(1),
    side: presidentialEraSideSchema,
    primary_url: proofUrlSchema,
  })
  .refine(
    (e) => e.end == null || e.end === undefined || e.end >= e.start,
    { message: "end must be >= start when set", path: ["end"] },
  );

export const presidentialErasFileSchema = z.object({
  version: z.literal(1),
  /** UI chrome only — not causal claims about series. */
  disclaimer_fr: z.string().min(1),
  eras: z.array(presidentialEraSchema).min(1),
});

export type PresidentialEra = z.infer<typeof presidentialEraSchema>;
export type PresidentialErasFile = z.infer<typeof presidentialErasFileSchema>;
