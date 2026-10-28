import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "DOGE France — Transparence · Preuves · Efficacité",
    template: "%s · DOGE France",
  },
  description:
    "Projet indépendant de transparence sur les dépenses publiques, erreurs et fraudes documentées en France, avec lien de preuve pour chaque chiffre.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
        <SiteHeader />
        <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-10">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
