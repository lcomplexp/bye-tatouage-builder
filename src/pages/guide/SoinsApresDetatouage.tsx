import MainLayout from "@/layouts/MainLayout";
import BreadcrumbsNav from "@/components/common/BreadcrumbsNav";
import ReadNext from "@/components/common/ReadNext";
import ToC from "@/components/common/ToC";
import { SITE } from "@/lib/siteConfig";

const GuideSoins = () => (
  <MainLayout title="Soins après détatouage" description="Hygiène, protection et étapes clés de cicatrisation (placeholders).">
    <BreadcrumbsNav />
    <header className="mb-4">
      <h1>Soins après détatouage</h1>
      <p className="text-muted-foreground mt-1">Gestes simples pour accompagner la cicatrisation. Respectez toujours les consignes données par votre praticien (placeholders).</p>
    </header>
    <div className="grid md:grid-cols-[1fr_280px] gap-8">
      <article>
        <h2 id="hygiene">Hygiène douce</h2>
        <p>Nettoyez délicatement, séchez en tamponnant. Évitez les cosmétiques irritants.</p>
        <h2 id="protection" className="mt-6">Protection solaire</h2>
        <p>Pas de soleil direct. Vêtements couvrants et écran total une fois l’épiderme refermé.</p>
        <h2 id="pansements" className="mt-6">Pansements et crèmes</h2>
        <p>Utilisez du matériel adapté. Voir notre <a className="underline" href="/ressources/kit-soins-detatouage">kit soins</a>.</p>
        <figure className="mt-6 rounded-xl overflow-hidden shadow-soft">
          <img src="/images/hero-technique.jpg" alt="Illustration de soins locaux après laser" loading="lazy" decoding="async" />
        </figure>
        <p className="text-xs text-muted-foreground mt-6">Ces informations ne remplacent pas un avis médical.</p>
      </article>
      <aside>
        <ToC />
      </aside>
    </div>
    <ReadNext />
    <script type="application/ld+json">{JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Soins après détatouage",
      description: "Hygiène, protection et étapes clés de cicatrisation (placeholders).",
      mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE.baseUrl}/guide/soins-apres-detatouage` },
      author: { "@type": "Organization", name: SITE.name },
      publisher: { "@type": "Organization", name: SITE.name }
    })}</script>
  </MainLayout>
);

export default GuideSoins;
