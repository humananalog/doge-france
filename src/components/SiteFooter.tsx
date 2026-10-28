export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/50">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-zinc-600 dark:text-zinc-400">
        <p className="font-semibold text-zinc-800 dark:text-zinc-200">
          Ce site n&apos;est pas un site officiel de l&apos;État français.
        </p>
        <p className="mt-2 max-w-3xl leading-relaxed">
          DOGE France est un projet indépendant de transparence et de données
          ouvertes. Les chiffres proviennent de sources publiques primaires
          (Cour des comptes, CNAF, HCFiPS, Vie publique, etc.) avec lien de
          preuve pour chaque métrique. Les interprétations restent celles des
          auteurs du projet, pas des administrations citées.
        </p>
        <p className="mt-4 text-xs text-zinc-500">
          Dernière mise à jour des dossiers source : octobre 2026 ·{" "}
          <a href="/methodologie" className="underline hover:text-zinc-700">
            Méthodologie
          </a>
        </p>
      </div>
    </footer>
  );
}
