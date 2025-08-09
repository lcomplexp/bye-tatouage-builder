import MainLayout from "@/layouts/MainLayout";
import BreadcrumbsNav from "@/components/common/BreadcrumbsNav";
import FAQ from "@/components/common/FAQ";
import ReadNext from "@/components/common/ReadNext";
import ToC from "@/components/common/ToC";
import { Link } from "react-router-dom";
import { SITE } from "@/lib/siteConfig";

const Laser = () => {
  const description = "Principe Q‑Switch/Pico, facteurs du nombre de séances, limites, effets secondaires et contre‑indications générales du détatouage.";
  return (
    <MainLayout title="Détatouage au laser | Bye-Tatouage" description={description}>
      <BreadcrumbsNav />
      <h1>Détatouage au laser</h1>
      <p className="text-muted-foreground mt-2">
        Méthode de référence pour atténuer ou retirer un tatouage. Le laser fragmente l’encre pour que l’organisme l’élimine progressivement. Comparez les techniques <Link to="/detatouage/q-switch" className="underline">Q‑Switch</Link> et <Link to="/detatouage/picoseconde" className="underline">picoseconde</Link>, et consultez nos <Link to="/prix-detatouage" className="underline">fourchettes de prix</Link>.
      </p>

      <section className="mt-6 rounded-xl overflow-hidden shadow-soft">
        <img src="/images/hero-tech.webp" alt="Illustration plate d’un dispositif de détatouage au laser en clinique" decoding="async" />
      </section>

      <div className="mt-6 grid gap-6 md:grid-cols-[1fr_280px]">
        <article>
          <section className="mt-2">
            <h2>Principe du laser Q-Switch/Pico (générique)</h2>
            <p>
              Le faisceau délivre des impulsions très courtes qui ciblent l’encre. Chaque tir fragmente les pigments, ensuite
              drainés progressivement. Les dispositifs <strong>Q‑Switch</strong> (nanosecondes) et <strong>picoseconde</strong> (impulsions encore plus courtes) partagent ce principe avec des
              paramètres différents. Le choix dépend de la couleur, de la densité et du <em>phototype</em>.
            </p>
          </section>

          <section className="mt-6">
            <h2>Combien de séances ? Les facteurs</h2>
            <p>
              Le nombre total varie selon plusieurs critères. À titre indicatif, on espace généralement les séances de 6 à 8 semaines.
              Voyez aussi notre guide sur le <Link to="/guide/combien-de-seances-detatouage" className="underline">nombre de séances</Link>.
            </p>
            <ul className="list-disc pl-5 text-sm mt-2">
              <li>Couleur et type d’encre (noir/bleu souvent plus réactifs que rouge/vert).</li>
              <li>Densité et profondeur du tatouage.</li>
              <li>Ancienneté et emplacement (circulation locale, peau fine/épaisse).</li>
              <li>Phototype et réaction individuelle.</li>
              <li>Matériel et paramètres utilisés (Q‑Switch vs picoseconde).</li>
            </ul>
          </section>

          <section className="mt-6">
            <h2>Limites & effets secondaires possibles</h2>
            <ul className="list-disc pl-5 text-sm">
              <li>Rougeurs, œdème, sensation de brûlure transitoire.</li>
              <li>Croûtes, petites phlyctènes locales possibles.</li>
              <li>Hypo/hyperpigmentation, surtout en cas d’exposition solaire précoce.</li>
              <li>Rarement, cicatrices en cas de frottements, grattage ou surpeeling.</li>
            </ul>
            <p className="mt-2">
              Respectez strictement les <Link to="/guide/soins-apres-detatouage" className="underline">soins après détatouage</Link> et protégez-vous du soleil.
            </p>
          </section>

          <section className="mt-6">
            <h2>Contre-indications générales</h2>
            <ul className="list-disc pl-5 text-sm">
              <li>Exposition solaire récente ou à venir, bronzage actif.</li>
              <li>Grossesse, allaitement (par précaution).</li>
              <li>Infections cutanées locales, plaies, dermatites actives.</li>
              <li>Certaines photosensibilisations médicamenteuses.</li>
            </ul>
          </section>

          <section className="mt-6">
            <h2>Estimation de séances (indication générale)</h2>
            <div className="mt-2 overflow-x-auto rounded-lg border shadow-soft">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left">
                    <th className="p-3">Taille</th>
                    <th className="p-3">Séances estimées</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="p-3">XS (≤2 cm)</td>
                    <td className="p-3">3–5</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3">S (≤5 cm)</td>
                    <td className="p-3">4–8</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3">M (≤8 cm)</td>
                    <td className="p-3">6–10</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3">L (≤15 cm)</td>
                    <td className="p-3">8–12</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted-foreground mt-2">Valeurs indicatives : un plan personnalisé est nécessaire.</p>
          </section>
        </article>

        <ToC />
      </div>

      <FAQ
        items={[
          { q: "La procédure est-elle douloureuse ?", a: "La sensation est brève et piquante ; elle dépend de la zone et de la sensibilité individuelle. Des moyens d’atténuation peuvent être proposés." },
          { q: "Quel intervalle entre les séances ?", a: "Le plus souvent 6–8 semaines pour laisser le temps à la peau de récupérer et au système immunitaire d’évacuer les pigments." },
          { q: "Puis-je m’exposer au soleil ?", a: "Il faut éviter l’exposition avant et après les séances. Une protection solaire stricte est recommandée." },
          { q: "Risque de cicatrices ?", a: "Il est faible avec des paramètres adaptés et des soins rigoureux, mais pas nul. Informez-vous sur les signes d’alerte et suivez les consignes." },
        ]}
      />

      <p className="text-xs text-muted-foreground mt-6">
        Ces informations sont générales et ne remplacent pas un avis médical personnalisé.
      </p>
      <ReadNext />

      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "Détatouage au laser",
        description,
        image: `${SITE.baseUrl}/images/hero-tech.webp`,
        mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE.baseUrl}/detatouage/laser` },
        author: { "@type": "Organization", name: SITE.name },
        publisher: { "@type": "Organization", name: SITE.name }
      })}</script>
    </MainLayout>
  );
};

export default Laser;
