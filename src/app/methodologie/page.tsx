import Link from "next/link";

export const metadata = {
  title: "Méthodologie",
};

export default function MethodologiePage() {
  return (
    <article className="prose prose-zinc max-w-3xl dark:prose-invert">
      <h1>Méthodologie</h1>
      <p>
        DOGE France agrège des <strong>sources publiques primaires</strong> (Cour
        des comptes, CNAF, HCFiPS, Vie publique, décisions de justice accessibles)
        pour rendre visibles erreurs, fraudes documentées et volumes de dépenses.
      </p>

      <h2>Moteur de statistiques</h2>
      <ul>
        <li>
          Chaque chiffre affiché sur le site correspond à une entrée{" "}
          <code>Metric</code> : identifiant, libellé, valeur, unité, date de
          référence, catégorie, nature (<code>fraud</code>, <code>error</code>,{" "}
          <code>spend</code>, <code>volume</code>, <code>other</code>) et objet{" "}
          <code>source</code> (titre, URL, éditeur).
        </li>
        <li>
          Le composant <code>Stat</code> affiche toujours la valeur et un lien «
          Preuve » vers la source primaire.
        </li>
        <li>
          La page <Link href="/sources">Sources</Link> liste l&apos;intégralité du
          registre (<code>data/stats/metrics.json</code>).
        </li>
        <li>
          Contributeurs : <Link href="/contribuer">Contribuer</Link>,{" "}
          <code>CONTRIBUTING.md</code>, validation CI <code>npm run validate</code>.
        </li>
      </ul>

      <h2>Erreur vs fraude</h2>
      <p>
        Nous reprenons la terminologie des rapports officiels : les{" "}
        <strong>indus résiduels</strong> de la Cour mesurent surtout la qualité
        des données de liquidation (y compris sous-paiements), tandis que la{" "}
        <strong>fraude caractérisée</strong> CNAF repose sur des contrôles
        qualifiés. Ne pas additionner ces séries.
      </p>

      <h2>Cas nommés & origine</h2>
      <p>
        Le tableau <Link href="/cas">Cas</Link> reprend 16 dossiers du fichier de
        recherche <code>caf-cases-named</code>. L&apos;origine géographique n&apos;est
        affichée que lorsqu&apos;elle est <em>déclarée</em> ou <em>inférée</em> avec
        preuve textuelle ; sinon « Inconnu ». Les victimes d&apos;usurpation sont
        séparées des prévenus (ligne Caen victime).
      </p>

      <h2>Limites</h2>
      <ul>
        <li>Pas de microdonnées allocataires ; pas de scraping de comptes CAF.</li>
        <li>
          Certains PDF (HCFiPS complet, Legifrance) peuvent être indisponibles
          aux robots — les URLs restent celles de l&apos;éditeur officiel.
        </li>
        <li>
          Ce projet <strong>n&apos;est pas</strong> affilié au gouvernement français
          ni au site américain doge.gov.
        </li>
      </ul>
    </article>
  );
}
