import MainLayout from "@/layouts/MainLayout";
import ReadNext from "@/components/common/ReadNext";
import { SITE } from "@/lib/siteConfig";

const GuideDouleur = () => (
  <MainLayout title="Détatouage et douleur" description="Article long-form – placeholder.">
    <h1>Détatouage et douleur</h1>
    <p className="text-muted-foreground">TODO contenu long-form.</p>
    <ReadNext />
    <script type="application/ld+json">{JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Détatouage et douleur",
      description: "Repères sur la douleur pendant/Après le détatouage (placeholder).",
      author: { "@type": "Organization", name: SITE.name },
      publisher: { "@type": "Organization", name: SITE.name },
      mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE.baseUrl}/guide/detatouage-douleur` }
    })}</script>
  </MainLayout>
);

export default GuideDouleur;
