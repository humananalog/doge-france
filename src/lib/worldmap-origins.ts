import worldmapOriginsJson from "../../data/stats/immigration/worldmap-origins.json";
import { worldmapOriginsFileSchema } from "../../schemas/worldmap-origins.schema";
import type { WorldmapOriginRegion, WorldmapOriginsFile } from "../../schemas/worldmap-origins.schema";
import type { WorldmapRegionId } from "./worldmap-country-regions";

const parsed = worldmapOriginsFileSchema.safeParse(worldmapOriginsJson);
if (!parsed.success) {
  throw new Error(
    `Invalid worldmap-origins.json: ${parsed.error.message}`,
  );
}

export const WORLDMAP_ORIGINS: WorldmapOriginsFile = parsed.data;

export const WORLDMAP_REGIONS: WorldmapOriginRegion[] = WORLDMAP_ORIGINS.regions;

export const WORLDMAP_REGION_BY_ID = new Map<
  WorldmapRegionId,
  WorldmapOriginRegion
>(
  WORLDMAP_REGIONS.map((r) => [r.region_id as WorldmapRegionId, r]),
);

export const INSEE_G1_PROOF_URL = WORLDMAP_ORIGINS.primary_url;
