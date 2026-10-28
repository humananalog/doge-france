import Link from "next/link";

export const metadata = {
  title: "Contribuer",
};

export default function ContribuerPage() {
  return (
    <div className="space-y-10 max-w-3xl">
      <header>
        <h1 className="text-3xl font-bold tracking-tight">Contribuer</h1>
        <p className="mt-3 text-zinc-600 dark:text-zinc-400">
          DOGE France vise une enquête{" "}
          <strong>multi-agents et crowdsourcée</strong> : la vérité ne ship que
          avec une preuve primaire. Ce dépôt est un{" "}
          <strong>scaffold de plateforme</strong>, pas une vitrine figée.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Comment soumettre une piste</h2>
        <ol className="list-decimal space-y-3 pl-5 text-sm leading-relaxed">
          <li>
            Lire le{" "}
            <Link href="/methodologie" className="text-sky-800 underline dark:text-sky-400">
              standard de preuve
            </Link>{" "}
            (fraude vs erreur, origine, URLs).
          </li>
          <li>
            Choisir un format dans{" "}
            <code className="rounded bg-zinc-200 px-1 dark:bg-zinc-800">data/</code>{" "}
            : stats, cas, ou piste (<code>data/leads/</code>).
          </li>
          <li>
            Ouvrir une{" "}
            <strong>pull request</strong> sur Origin{" "}
            <code className="rounded bg-zinc-200 px-1 dark:bg-zinc-800">
              humananalog/doge-france
            </code>{" "}
            ou une issue depuis les modèles GitHub :
            <ul className="mt-2 list-disc pl-5">
              <li>
                <code>new-case</code> — affaire documentée
              </li>
              <li>
                <code>new-stat</code> — métrique chiffrée
              </li>
              <li>
                <code>challenge-claim</code> — contester avec meilleure source
              </li>
            </ul>
          </li>
          <li>
            Vérifier en local :{" "}
            <code className="rounded bg-zinc-200 px-1 dark:bg-zinc-800">
              npm run validate
            </code>{" "}
            puis{" "}
            <code className="rounded bg-zinc-200 px-1 dark:bg-zinc-800">
              npm run build
            </code>
            . La CI rejette toute métrique sans URL valide.
          </li>
        </ol>
      </section>

      <section className="rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/40">
        <h2 className="text-lg font-semibold">Arborescence data/</h2>
        <pre className="mt-3 overflow-x-auto rounded bg-zinc-100 p-4 text-xs dark:bg-zinc-900">
{`data/
  stats/metrics.json    # registre site (proof_url obligatoire)
  cases/manifest.json   # cas nommés + proof_urls[]
  leads/*.yaml          # pistes ouvertes
schemas/                # Zod + JSON Schema
scripts/validate-data.ts`}
        </pre>
        <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
          Agents Cursor / Grok Bot : voir{" "}
          <code className="rounded bg-zinc-200 px-1 dark:bg-zinc-800">AGENTS.md</code>{" "}
          et{" "}
          <code className="rounded bg-zinc-200 px-1 dark:bg-zinc-800">
            CONTRIBUTING.md
          </code>{" "}
          à la racine du dépôt.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Couloirs d&apos;enquête</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {[
            ["CAF / fraude sociale", "lane: caf"],
            ["Marchés publics", "lane: marches"],
            ["Immigration / OQTF", "lane: immigration"],
            ["Élections / intégrité", "lane: elections"],
          ].map(([label, lane]) => (
            <div
              key={lane}
              className="rounded-lg border border-zinc-200 px-4 py-3 text-sm dark:border-zinc-800"
            >
              <p className="font-medium">{label}</p>
              <p className="text-zinc-500">{lane}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
