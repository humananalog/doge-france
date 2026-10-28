import { z } from "zod";

/** Primary proof must be a public http(s) URL — not local: or file: placeholders in published data. */
export const proofUrlSchema = z
  .string()
  .url()
  .refine(
    (url) => url.startsWith("http://") || url.startsWith("https://"),
    "proof_url must be http(s)",
  );

export const sourceRefSchema = z.object({
  title: z.string().min(1),
  url: proofUrlSchema,
  publisher: z.string().min(1),
});
