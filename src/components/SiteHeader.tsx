import Link from "next/link";

const NAV = [
  { href: "/", label: "Accueil" },
  { href: "/economies", label: "Économies" },
  { href: "/depenses", label: "Dépenses" },
  { href: "/caf", label: "CAF" },
  { href: "/cas", label: "Cas" },
  { href: "/immigration", label: "Immigration" },
  { href: "/sources", label: "Sources" },
  { href: "/contribuer", label: "Contribuer" },
  { href: "/methodologie", label: "Méthodologie" },
];

export function SiteHeader() {
  return (
    <header className="border-b border-zinc-200 bg-white/90 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/90">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 md:flex-row md:items-center md:justify-between">
        <div>
          <Link href="/" className="group inline-block">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
              Projet indépendant
            </p>
            <h1 className="text-2xl font-bold tracking-tight text-zinc-900 group-hover:text-sky-800 dark:text-zinc-50">
              DOGE France
            </h1>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Transparence · Preuves · Efficacité
            </p>
          </Link>
        </div>
        <nav
          className="flex flex-wrap gap-x-4 gap-y-2 text-sm font-medium"
          aria-label="Navigation principale"
        >
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-zinc-700 hover:text-sky-800 dark:text-zinc-300 dark:hover:text-sky-400"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
