import { CasesTable } from "@/components/CasesTable";
import { CAF_CASES } from "@/lib/cases";

export const metadata = {
  title: "Cas documentés",
};

export default function CasPage() {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl font-bold tracking-tight">Cas nommés (CAF)</h1>
        <p className="mt-3 max-w-3xl text-zinc-600 dark:text-zinc-400">
          Seize dossiers issus des memos de recherche (oct. 2026). Noms tels que
          publiés par tribunaux, CAF ou presse judiciaire. Colonne « Origine » :
          pays ou « Inconnu », avec étiquette{" "}
          <span className="font-medium">Déclaré</span>,{" "}
          <span className="font-medium">Inféré</span> ou{" "}
          <span className="font-medium">Inconnu</span> — jamais déduit du nom de
          famille.
        </p>
      </header>

      <CasesTable cases={CAF_CASES} />
    </div>
  );
}
