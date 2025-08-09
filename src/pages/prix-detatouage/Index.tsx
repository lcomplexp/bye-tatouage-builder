import MainLayout from "@/layouts/MainLayout";
import ReadNext from "@/components/common/ReadNext";
import ToC from "@/components/common/ToC";
import { SITE } from "@/lib/siteConfig";
import { Link } from "react-router-dom";

const PrixIndex = () => {
  const description = "Fourchettes par taille, prix par séance et coût total estimé. Facteurs de variation, nombre de séances et exemples types. Informations indicatives.";
  const prix = [
    { taille: "XS (≤2 cm)", seance: "50–90€", total: "150–450€" },
    { taille: "S (≤5 cm)", seance: "80–140€", total: "320–980€" },
    { taille: "M (≤8 cm)", seance: "120–200€", total: "720–1 600€" },
    { taille: "L (≤15 cm)", seance: "160–260€", total: "1 280–3 120€" },
  ];

  return (
    <MainLayout title="Prix du détatouage : fourchettes par taille et critères | Bye-Tatouage" description={description}>
      <h1>Prix du détatouage : fourchettes par taille et critères</h1>
      <p className="text-muted-foreground mt-2">
        Les tarifs varient selon la taille, la densité, la couleur, la zone et le nombre de séances nécessaires. Comparez aussi les techniques <Link to="/detatouage/laser" className="underline">laser</Link> et <Link to="/detatouage/picoseconde" className="underline">picoseconde</Link>.
      </p>

      <section className="mt-6 rounded-xl overflow-hidden shadow-soft">
        <img src="/images/hero-prix.webp" alt="Illustration plate sur le coût et la planification du détatouage" decoding="async" />
      </section>

      <div className="mt-6 grid gap-6 md:grid-cols-[1fr_280px]">
        <article>
          <section>
            <h2>Tableau des prix indicatifs</h2>
            <div className="mt-2 overflow-x-auto rounded-lg border shadow-soft">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left">
                    <th className="p-3">Taille</th>
                    <th className="p-3">Prix par séance</th>
                    <th className="p-3">Coût total estimé</th>
                  </tr>
                </thead>
                <tbody>
                  {prix.map((p, i) => (
                    <tr key={i} className="border-t">
                      <td className="p-3 font-medium">{p.taille}</td>
                      <td className="p-3">{p.seance}</td>
                      <td className="p-3">{p.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted-foreground mt-2">Valeurs indicatives : un devis personnalisé est nécessaire.</p>
          </section>

          <section className="mt-6">
            <h2>Ce qui fait varier le coût</h2>
            <ul className="list-disc pl-5 text-sm">
              <li>Machine et paramètres utilisés (Q‑Switch / picoseconde).</li>
              <li>Ville et structure (cabinet, clinique), expertise de l’opérateur.</li>
              <li>Type d’encres et nombre de couleurs.</li>
              <li>Nombre de séances et durée totale du protocole.</li>
            </ul>
          </section>

          <section className="mt-6">
            <h2>Combien de séances ? Intervalle entre séances</h2>
            <p>
              Le nombre varie selon la couleur, la densité et l’emplacement. Consultez notre guide sur le <Link to="/guide/combien-de-seances-detatouage" className="underline">nombre de séances</Link>.
              L’intervalle usuel est de 6 à 8 semaines pour favoriser la récupération cutanée et l’élimination des pigments.
            </p>
          </section>

          <section className="mt-6">
            <h2>Exemples types</h2>
            <ul className="list-disc pl-5 text-sm">
              <li>Petit symbole noir au poignet (XS) : 3–5 séances → total ~150–450€.</li>
              <li>Lettrage ~10 cm (S/M) : 4–8 séances → total ~320–1 600€ selon densité.</li>
              <li>Pièce couleur avant‑bras (M/L) : 6–12 séances → total ~720–3 120€.</li>
            </ul>
          </section>

          <aside className="mt-6 rounded-lg border p-4 bg-muted/50 shadow-soft">
            <h3 className="font-semibold">Bon à savoir</h3>
            <p className="text-sm mt-1">
              Pas de garantie de résultat ; prévoir d’éventuelles retouches et des <Link to="/guide/soins-apres-detatouage" className="underline">soins après séance</Link>.
            </p>
          </aside>
        </article>

        <ToC />
      </div>

      <FAQ
        items={[
          { q: "Le détatouage est-il remboursé ?", a: "Non, c’est un acte esthétique non remboursé en règle générale." },
          { q: "Quand obtient-on un devis ?", a: "Après évaluation en consultation, selon la taille, la densité et les couleurs." },
          { q: "Conditions d’annulation ?", a: "Elles dépendent du centre ; renseignez-vous lors de la prise de rendez-vous." },
          { q: "Traitements photosensibilisants ?", a: "Prévenez le praticien ; certains traitements imposent de reporter la séance." },
        ]}
      />

      <p className="text-xs text-muted-foreground mt-6">Informations indicatives, ne constituent pas un avis médical personnalisé.</p>
      <ReadNext />

      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Prix du détatouage",
        description,
        url: `${SITE.baseUrl}/prix-detatouage`,
      })}</script>
    </MainLayout>
  );
};

export default PrixIndex;