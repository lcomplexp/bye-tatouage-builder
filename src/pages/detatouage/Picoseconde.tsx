import MainLayout from "@/layouts/MainLayout";
import BreadcrumbsNav from "@/components/common/BreadcrumbsNav";
import FAQ from "@/components/common/FAQ";
import ReadNext from "@/components/common/ReadNext";
import ToC from "@/components/common/ToC";
import { Link } from "react-router-dom";
import { SITE } from "@/lib/siteConfig";

const Picoseconde = () => {
  const description = "Impulsions ultra‑courtes, différences avec le Q‑Switch, indications, limites et estimation du nombre de séances pour le détatouage picoseconde.";
  return (
    <MainLayout title="Détatouage au laser picoseconde | Bye-Tatouage" description={description}>
      <BreadcrumbsNav />
      <h1>Laser picoseconde</h1>
      <p className="text-muted-foreground mt-2">
        Technologie utilisant des impulsions plus courtes que le <Link to="/detatouage/q-switch" className="underline">Q‑Switch</Link> pour fragmenter plus finement certains pigments. Le choix de la machine dépend de votre tatouage et de votre peau.
      </p>

      <section className="mt-6 rounded-xl overflow-hidden shadow-soft">
        <img src="/images/hero-pico.webp" alt="Illustration plate d’un dispositif de détatouage au laser picoseconde" decoding="async" />
      </section>

      <div className="mt-6 grid gap-6 md:grid-cols-[1fr_280px]">
        <article>
          <section>
            <h2>Pico vs Q-Switch : différences</h2>
            <div className="overflow-x-auto rounded-lg border shadow-soft mt-2">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left">
                    <th className="p-3">Critère</th>
                    <th className="p-3">Picoseconde</th>
                    <th className="p-3">Q‑Switch</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="p-3">Durée d’impulsion</td>
                    <td className="p-3">Pico (10⁻¹² s)</td>
                    <td className="p-3">Nano (10⁻⁹ s)</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3">Couleurs/encres</td>
                    <td className="p-3">Intérêt potentiel sur pigments récalcitrants</td>
                    <td className="p-3">Référence sur noir/bleu</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3">Avantages potentiels</td>
                    <td className="p-3">Fragmentation plus fine (selon cas)</td>
                    <td className="p-3">Disponibilité large, recul historique</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3">Limites</td>
                    <td className="p-3">Coût/accès variables, pas supérieur en tout point</td>
                    <td className="p-3">Moins adapté à certaines couleurs</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mt-6">
            <h2>Indications et limites</h2>
            <p>
              Le picoseconde peut être envisagé pour certaines encres difficiles ou pour accélérer la fragmentation. Il ne s’agit pas d’une garantie de résultat : la réponse dépend de la couleur, de la densité, du <em>phototype</em> et de l’emplacement.
            </p>
            <ul className="list-disc pl-5 text-sm mt-2">
              <li>Indications: pigments résistants, retouches, détails colorés.</li>
              <li>Limites: coût, accessibilité, réaction variable selon la peau.</li>
            </ul>
          </section>

          <section className="mt-6">
            <h2>Combien de séances ?</h2>
            <p>
              Les mêmes facteurs s’appliquent que pour le <Link to="/detatouage/laser" className="underline">laser de façon générale</Link>. Comptez souvent 4 à 10 séances ou plus selon la complexité, espacées de 6 à 8 semaines.
            </p>
          </section>
        </article>

        <ToC />
      </div>

      <FAQ
        items={[
          { q: "Le picoseconde marche-t-il mieux sur toutes les couleurs ?", a: "Non. Il peut aider sur certains pigments, mais l’avantage n’est pas systématique." },
          { q: "Peut-on traiter tous les phototypes ?", a: "Le paramétrage tient compte du phototype. Une évaluation est nécessaire pour la sécurité." },
          { q: "Risque de cicatrices ?", a: "Faible si les paramètres et les soins sont adaptés, mais pas nul." },
          { q: "Intervalle entre séances ?", a: "En général 6–8 semaines, comme pour le Q‑Switch." },
        ]}
      />

      <p className="text-xs text-muted-foreground mt-6">Ces informations sont générales et ne remplacent pas un avis médical personnalisé.</p>
      <ReadNext />

      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "Détatouage au laser picoseconde",
        description,
        image: `${SITE.baseUrl}/images/hero-pico.webp`,
        mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE.baseUrl}/detatouage/picoseconde` },
        author: { "@type": "Organization", name: SITE.name },
        publisher: { "@type": "Organization", name: SITE.name }
      })}</script>
    </MainLayout>
  );
};

export default Picoseconde;
