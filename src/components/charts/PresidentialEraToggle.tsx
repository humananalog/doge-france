"use client";

import { usePresidentialEras } from "./PresidentialEraContext";

export function PresidentialEraToggle() {
  const { showEras, setShowEras, hydrated } = usePresidentialEras();

  return (
    <label className="inline-flex cursor-pointer items-center gap-2 rounded-lg border border-zinc-200 bg-zinc-50/90 px-3 py-1.5 text-xs font-medium text-zinc-800 shadow-sm dark:border-zinc-700 dark:bg-zinc-900/80 dark:text-zinc-100">
      <input
        type="checkbox"
        className="size-3.5 rounded border-zinc-400 accent-sky-700"
        checked={hydrated ? showEras : true}
        onChange={(e) => setShowEras(e.target.checked)}
        aria-describedby="era-toggle-hint"
      />
      <span>Mandats président · parti</span>
      <span
        id="era-toggle-hint"
        className="hidden max-w-xs sm:inline font-normal text-zinc-500 dark:text-zinc-400"
      >
        (convention politique · Élysée — pas de causalité ni attribution
        dépenses/fraude)
      </span>
    </label>
  );
}
