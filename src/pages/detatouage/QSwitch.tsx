import MainLayout from "@/layouts/MainLayout";
import BreadcrumbsNav from "@/components/common/BreadcrumbsNav";
import FAQ from "@/components/common/FAQ";
import ReadNext from "@/components/common/ReadNext";
import { Link } from "react-router-dom";
import { SITE } from "@/lib/siteConfig";

const QSwitch = () => {
  return (
    <MainLayout title="Détatouage Q-Switch" description="Fonctionnement, indications et comparaison avec picoseconde (placeholders).">
      <BreadcrumbsNav />
      <h1>Laser Q-Switch</h1>
      <p className="text-muted-foreground">Technologie historique du détatouage. Utile selon les encres et le contexte. Comparez avec le <Link to="/detatouage/picoseconde" className="underline">picoseconde</Link>.</p>

      <section className="mt-6 rounded-xl overflow-hidden shadow-soft">
        <img src="/images/hero-technique.jpg" alt="Illustration d’un laser Q-Switch pour détatouage" loading="lazy" decoding="async" />
      </section>

      <section className="mt-8">
        <h2>Principe</h2>
        <p>Impulsions en nanosecondes ciblant l’encre. Plusieurs passages et séances espacées sont nécessaires.</p>

        <h2 className="mt-6">Pico vs Q-Switch (comparatif)</h2>
        <div className="overflow-x-auto rounded-lg border shadow-soft mt-2">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left">
                <th className="p-3">Critère</th>
                <th className="p-3">Picoseconde</th>
                <th className="p-3">Q-Switch</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="p-3">Durée d’impulsion</td>
                <td className="p-3">Pico (10^-12 s)</td>
                <td className="p-3">Nano (10^-9 s)</td>
              </tr>
              <tr className="border-t">
                <td className="p-3">Pigments difficiles</td>
                <td className="p-3">Parfois avantage</td>
                <td className="p-3">Efficace sur noir/bleu</td>
              </tr>
              <tr className="border-t">
                <td className="p-3">Disponibilité/coût</td>
                <td className="p-3">Variable</td>
                <td className="p-3">Souvent plus répandu</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="mt-6">Précautions</h2>
        <p>Protection solaire, hygiène locale, éviter les frottements. Voir <Link to="/guide/soins-apres-detatouage" className="underline">soins après détatouage</Link>.</p>
      </section>

      <FAQ items={[
        { q: "Pourquoi choisir le Q-Switch ?", a: "Selon l’indication, la disponibilité et l’expérience du centre (placeholder)." },
        { q: "Douleur et suites ?", a: "Similaires aux autres lasers, variables selon la zone (placeholder)." },
        { q: "Combien de séances ?", a: "Dépend des facteurs habituels (placeholder)." },
      ]} />
      <p className="text-xs text-muted-foreground mt-6">Ces informations ne remplacent pas un avis médical.</p>
      <ReadNext />
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "Détatouage Q-Switch",
        description: "Fonctionnement, indications et comparaison avec picoseconde (placeholders).",
        image: `${SITE.baseUrl}/images/hero-technique.jpg`,
        mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE.baseUrl}/detatouage/q-switch` },
        author: { "@type": "Organization", name: SITE.name },
        publisher: { "@type": "Organization", name: SITE.name }
      })}</script>
    </MainLayout>
  );
};

export default QSwitch;
