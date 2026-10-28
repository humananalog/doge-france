import Link from "next/link";
import type { SourceRef } from "@/lib/types";

export function ProofLink({
  source,
  className = "",
}: {
  source: SourceRef;
  className?: string;
}) {
  return (
    <Link
      href={source.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-1 text-sm text-sky-700 underline decoration-sky-700/40 underline-offset-2 hover:text-sky-900 dark:text-sky-400 dark:hover:text-sky-300 ${className}`}
      title={source.publisher}
    >
      <span aria-hidden="true">↗</span>
      <span>Preuve : {source.title}</span>
    </Link>
  );
}
