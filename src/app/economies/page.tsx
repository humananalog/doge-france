import { EconomiesWall } from "@/components/EconomiesWall";
import Link from "next/link";

export const metadata = {
  title: "Mur des preuves — économies documentées",
  description:
    "Justificatifs citoyens : montants prouvés des dossiers cas, fraude vs erreur, liens primaires.",
};

export default function EconomiesPage() {
  return (
    <div className="space-y-8">
      <header>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
          Inspiré de l&apos;esprit doge.gov/savings
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight">
          Mur des preuves
        </h1>
        <p className="mt-3 max-w-3xl leading-relaxed text-zinc-600 dark:text-zinc-400">
          Chaque tuile reprend un dossier déjà publié dans{" "}
          <Link href="/cas" className="text-sky-800 underline dark:text-sky-400">
            Cas documentés
          </Link>{" "}
          : montant (registre ou texte source), étiquette{" "}
          <strong>fraude</strong> ou <strong>erreur</strong>, preuve primaire.
          Aucun coût politique AME ici — seulement des affaires nommées avec
          URL officielle ou décision.
        </p>
      </header>

      <EconomiesWall />
    </div>
  );
}
