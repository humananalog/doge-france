import Link from "next/link";
import { GaspillageSection } from "@/components/GaspillageSection";
import { PublicDebtDashboard } from "@/components/PublicDebtDashboard";
import { Stat } from "@/components/Stat";
import { getHomepageHighlights } from "@/lib/registry";
import { kindLabel } from "@/lib/format";

export default function HomePage() {
  const highlights = getHomepageHighlights();

  return (
    <div className="space-y-12">
      <section>
        <p className="max-w-2xl text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
          Tableau de bord citoyen inspiré de l&apos;esprit{" "}
          <span className="font-medium">doge.gov</span> : grands chiffres,
          sources primaires, distinction claire entre{" "}
          <strong>erreurs de paiement</strong> et{" "}
          <strong>fraude intentionnelle</strong>.
        </p>
      </section>

      <PublicDebtDashboard />

      <GaspillageSection />

      <section>
        <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
          Indicateurs clés
        </h2>
        <div className="mt-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((m) => (
            <div
              key={m.id}
              className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/40"
            >
              <span className="text-xs font-medium uppercase text-zinc-500">
                {kindLabel(m.kind)}
              </span>
              <Stat metricId={m.id} className="mt-2" size="lg" showLabel />
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-amber-200 bg-amber-50/80 p-6 dark:border-amber-900/50 dark:bg-amber-950/20">
          <h2 className="text-lg font-semibold">Erreur ≠ fraude</h2>
          <p className="mt-2 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
            Exemple : le risque résiduel à 24 mois publié par la Cour recouvre
            indus <em>et</em> sous-paiements — ce n&apos;est pas un stock officiel
            de fraude.
          </p>
          <Stat
            metricId="caf-erreur-residuelle-24m-montant"
            size="sm"
            className="mt-4"
          />
        </div>
        <div className="rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/40">
          <h2 className="text-lg font-semibold">Dossiers récents</h2>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link href="/cas" className="text-sky-800 underline dark:text-sky-400">
                16 affaires CAF nommées
              </Link>{" "}
              — identité, résidence, multi-CAF
            </li>
            <li>
              <Link
                href="/immigration"
                className="text-sky-800 underline dark:text-sky-400"
              >
                Immigration & OQTF
              </Link>{" "}
              — coûts Cour, exécution des éloignements
            </li>
            <li>
              <Link
                href="/sources"
                className="text-sky-800 underline dark:text-sky-400"
              >
                Registre complet
              </Link>{" "}
              — chaque métrique avec preuve
            </li>
            <li>
              <Link
                href="/contribuer"
                className="text-sky-800 underline dark:text-sky-400"
              >
                Contribuer une piste
              </Link>{" "}
              — demandes de fusion et signalements sur le dépôt
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
