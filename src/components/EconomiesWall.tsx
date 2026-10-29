import Link from "next/link";
import {
  countReceiptsWithNumericProof,
  getEconomyReceipts,
  sumReceiptsWithNumericProof,
} from "@/lib/economies";
import { formatEurCompact } from "@/lib/format";
import { ProofLink } from "./ProofLink";

export function EconomiesWall() {
  const receipts = getEconomyReceipts();
  const numericCount = countReceiptsWithNumericProof(receipts);
  const totalEur = sumReceiptsWithNumericProof(receipts);

  return (
    <div className="space-y-8">
      {numericCount > 0 ? (
        <div className="rounded-xl border border-emerald-200 bg-emerald-50/70 p-6 dark:border-emerald-900/40 dark:bg-emerald-950/20">
          <p className="text-sm font-medium uppercase tracking-wider text-emerald-900 dark:text-emerald-200">
            Somme transparente (registre cas)
          </p>
          <p className="mt-2 text-4xl font-semibold tabular-nums tracking-tight text-zinc-950 dark:text-zinc-50">
            {formatEurCompact(totalEur)}
          </p>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
            Addition arithmétique de {numericCount} montant
            {numericCount > 1 ? "s" : ""} numérique
            {numericCount > 1 ? "s" : ""} issus du registre liés aux dossiers
            ci-dessous — pas une estimation nationale, pas un « gain »
            budgétaire, pas de coût AME. Les autres lignes affichent le texte
            source sans totaliser.
          </p>
        </div>
      ) : null}

      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {receipts.map((r) => {
          const kindClass =
            r.kind === "fraud"
              ? "border-rose-200 bg-rose-50/80 text-rose-900 dark:border-rose-900/50 dark:bg-rose-950/30 dark:text-rose-100"
              : r.kind === "error"
                ? "border-amber-200 bg-amber-50/80 text-amber-900 dark:border-amber-900/50 dark:bg-amber-950/30 dark:text-amber-100"
                : "border-zinc-200 bg-zinc-50 text-zinc-800 dark:border-zinc-700 dark:bg-zinc-900/50 dark:text-zinc-200";

          return (
            <li
              key={r.caseId}
              className="flex flex-col rounded-xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/40"
            >
              <div className="flex items-start justify-between gap-3">
                <span
                  className={`shrink-0 rounded-full border px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide ${kindClass}`}
                >
                  {r.kindLabelFr}
                </span>
                <p className="text-right text-2xl font-semibold tabular-nums tracking-tight text-zinc-950 dark:text-zinc-50">
                  {r.amountLabel}
                </p>
              </div>
              <h2 className="mt-4 text-base font-semibold leading-snug text-zinc-900 dark:text-zinc-50">
                {r.title}
              </h2>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {r.summary}
              </p>
              <p className="mt-3 text-xs text-zinc-500">
                {r.date} · {r.courtOrBodyFr}
              </p>
              <ProofLink source={r.proof} className="mt-3" />
              <Link
                href="/cas"
                className="mt-2 text-xs text-sky-800 underline dark:text-sky-400"
              >
                Voir le dossier dans Cas
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
