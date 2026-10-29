"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { CafCase, OriginBasis } from "@/lib/types";
import { countryLabel, originBasisLabel } from "@/lib/format";
import { getMetric } from "@/lib/registry";
import { ProofLink } from "./ProofLink";
import { Stat } from "./Stat";

const BASIS_OPTIONS: { value: OriginBasis | "all"; label: string }[] = [
  { value: "all", label: "Toutes bases" },
  { value: "stated", label: "Déclaré" },
  { value: "inferred", label: "Inféré" },
  { value: "unknown", label: "Inconnu" },
];

export function CasesTable({ cases }: { cases: CafCase[] }) {
  const [query, setQuery] = useState("");
  const [basis, setBasis] = useState<OriginBasis | "all">("all");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return cases.filter((c) => {
      if (basis !== "all" && c.origin_basis !== basis) return false;
      if (!q) return true;
      const haystack = [
        c.defendant_names_fr,
        c.scheme_type_fr,
        c.court_or_body_fr,
        c.case_id,
        countryLabel(c.country_of_origin),
      ]
        .join(" ")
        .toLowerCase();
      return haystack.includes(q);
    });
  }, [cases, query, basis]);

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <label htmlFor="case-search" className="text-sm font-medium">
            Rechercher
          </label>
          <input
            id="case-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Nom, schéma, juridiction…"
            className="mt-1 w-full max-w-md rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-900"
          />
        </div>
        <div>
          <label htmlFor="origin-basis" className="text-sm font-medium">
            Base origine
          </label>
          <select
            id="origin-basis"
            value={basis}
            onChange={(e) => setBasis(e.target.value as OriginBasis | "all")}
            className="mt-1 rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-900"
          >
            {BASIS_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <p className="text-sm text-zinc-600 dark:text-zinc-400">
        {filtered.length} affaire{filtered.length > 1 ? "s" : ""} sur {cases.length}.
        L&apos;origine n&apos;est jamais inventée : « Inconnu » lorsque les sources
        ne la publient pas.
      </p>

      <div className="overflow-x-auto rounded-lg border border-zinc-200 dark:border-zinc-800">
        <table className="min-w-full divide-y divide-zinc-200 text-sm dark:divide-zinc-800">
          <thead className="bg-zinc-50 dark:bg-zinc-900/80">
            <tr>
              <th className="px-3 py-3 text-left font-semibold">Date / juridiction</th>
              <th className="px-3 py-3 text-left font-semibold">Personnes (telles que publiées)</th>
              <th className="px-3 py-3 text-left font-semibold">Origine</th>
              <th className="px-3 py-3 text-left font-semibold">Schéma</th>
              <th className="px-3 py-3 text-right font-semibold">Montants</th>
              <th className="px-3 py-3 text-left font-semibold">Peine / issue</th>
              <th className="px-3 py-3 text-left font-semibold">Preuves</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-100 bg-white dark:divide-zinc-800 dark:bg-zinc-950">
            {filtered.map((c) => {
              const metric = c.amount_metric_id
                ? getMetric(c.amount_metric_id)
                : undefined;
              return (
                <tr key={c.case_id} className="align-top">
                  <td className="px-3 py-3 whitespace-nowrap">
                    <p className="font-medium">{c.date}</p>
                    <p className="text-xs text-zinc-500">{c.court_or_body_fr}</p>
                  </td>
                  <td className="px-3 py-3 max-w-xs">
                    <p>{c.defendant_names_fr}</p>
                    <Link
                      href={c.name_source_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 inline-block text-xs text-sky-700 underline dark:text-sky-400"
                    >
                      Source des noms (externe)
                    </Link>
                  </td>
                  <td className="px-3 py-3">
                    <p className="font-medium">{countryLabel(c.country_of_origin)}</p>
                    <p className="text-xs text-zinc-500">
                      Base : {originBasisLabel(c.origin_basis)}
                    </p>
                    <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">
                      {c.origin_evidence_fr}
                    </p>
                  </td>
                  <td className="px-3 py-3 max-w-xs">{c.scheme_type_fr}</td>
                  <td className="px-3 py-3 max-w-xs text-right">
                    {metric ? (
                      <div>
                        <Stat metricId={c.amount_metric_id!} size="sm" showLabel={false} />
                        <p className="mt-2 text-xs text-zinc-500">{c.amount_display_fr}</p>
                      </div>
                    ) : (
                      <div>
                        <p className="text-sm">{c.amount_display_fr}</p>
                        {c.sources[0] ? (
                          <ProofLink source={c.sources[0]} className="mt-2" />
                        ) : null}
                      </div>
                    )}
                  </td>
                  <td className="px-3 py-3 max-w-xs">{c.sentence_fr}</td>
                  <td className="px-3 py-3 space-y-2">
                    {c.sources.map((s) => (
                      <ProofLink key={s.url} source={s} />
                    ))}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
