import MainLayout from "@/layouts/MainLayout";
import BreadcrumbsNav from "@/components/common/BreadcrumbsNav";
import FAQ from "@/components/common/FAQ";
import ReadNext from "@/components/common/ReadNext";
import ToC from "@/components/common/ToC";
import { Link } from "react-router-dom";
import { SITE } from "@/lib/siteConfig";

const QSwitch = () => {
  const description = "Principe et usages du Q‑Switch, atouts/limites selon les couleurs, et repères sur le nombre de séances et l’intervalle recommandé.";
  return (
    <MainLayout title="Détatouage au laser Q-Switch | Bye-Tatouage" description={description}>
      <BreadcrumbsNav />
      <h1>Laser Q‑Switch</h1>
      <p className="text-muted-foreground mt-2">
        Référence historique pour le détatouage. Utile selon les encres et le contexte. Comparez avec le <Link to="/detatouage/picoseconde" className="underline">picoseconde</Link> et consultez les <Link to="/prix-detatouage" className="underline">prix indicatifs</Link>.
      </p>

      <section className="mt-6 rounded-xl overflow-hidden shadow-soft">
        <img src="/images/hero-qswitch.webp" alt="Illustration plate d’un laser Q‑Switch de détatouage" decoding="async" />
      </section>

      <div className="mt-6 grid gap-6 md:grid-cols-[1fr_280px]">
        <article>
          <section>
            <h2>Principe et usages</h2>
            <p>
              Le Q‑Switch délivre des impulsions en nanosecondes qui ciblent l’encre. Plusieurs passages et séances espacées sont nécessaires pour permettre à la peau de récupérer.
            </p>
          </section>

          <section className="mt-6">
            <h2>Atouts / limites</h2>
            <ul className="list-disc pl-5 text-sm">
              <li>Atouts : disponibilité large, efficacité reconnue sur les encres noires/bleues, recul historique.</li>
              <li>Limites : couleurs chaudes (rouge/orange) et certaines encres peuvent nécessiter plus de séances ou des paramètres spécifiques.</li>
            </ul>
          </section>

          <section className="mt-6">
            <h2>Nombre de séances indicatif</h2>
            <p>
              Selon la taille, la couleur et la densité : souvent de 4 à 10 séances, parfois davantage pour les pièces colorées. Intervalle habituel : 6–8 semaines entre les séances.
            </p>
          </section>
        </article>
        <ToC />
      </div>

      <FAQ
        items={[
          { q: "Le Q‑Switch convient-il à tous les tatouages ?", a: "Il est souvent indiqué pour les noirs/bleus. Les couleurs chaudes peuvent être plus longues à traiter." },
          { q: "Douleur et suites ?", a: "La sensation est brève et piquante ; rougeurs/croûtes transitoires possibles. Soins locaux et protection solaire indispensables." },
          { q: "Combien de séances ?", a: "Variable selon l’encre et la peau ; on prévoit généralement plusieurs séances espacées de 6–8 semaines." },
        ]}
      />

      <p className="text-xs text-muted-foreground mt-6">Ces informations sont générales et ne remplacent pas un avis médical personnalisé.</p>
      <ReadNext />

      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "Détatouage au laser Q-Switch",
        description,
        image: `${SITE.baseUrl}/images/hero-qswitch.webp`,
        mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE.baseUrl}/detatouage/q-switch` },
        author: { "@type": "Organization", name: SITE.name },
        publisher: { "@type": "Organization", name: SITE.name }
      })}</script>
    </MainLayout>
  );
};

export default QSwitch;
