import { LegalWasteSection } from "@/components/LegalWasteSection";
import { MetricsTable } from "@/components/MetricsTable";
import { getMetricsByWasteClass } from "@/lib/registry";

export const metadata = {
  title: "Gaspillage légal",
};

export default function GaspillageLegalPage() {
  const legalWaste = getMetricsByWasteClass("legal");

  return (
    <div className="space-y-10">
      <header>
        <h1 className="text-3xl font-bold tracking-tight">Gaspillage légal</h1>
        <p className="mt-3 max-w-3xl text-zinc-600 dark:text-zinc-400">
          Financements associations mission IAI, mission budget exécutée, AME —
          coûts politiques documentés (Cour des comptes, NEB).{" "}
          <strong>Pas de fraude</strong> ; pas de total « heap » entre tuiles.
        </p>
      </header>

      <LegalWasteSection />

      <section>
        <h2 className="text-xl font-semibold">Registre (gaspillage légal)</h2>
        <p className="mt-2 max-w-3xl text-sm text-zinc-600 dark:text-zinc-400">
          Lignes avec <code className="text-xs">breakdown_of</code> = détail
          Tab.7 uniquement — jamais additionnées au KPI 1&nbsp;094&nbsp;M€ sur
          le tableau de bord.
        </p>
        <div className="mt-4">
          <MetricsTable metrics={legalWaste} />
        </div>
      </section>
    </div>
  );
}
