import MainLayout from "@/layouts/MainLayout";
import ReadNext from "@/components/common/ReadNext";
import { SITE } from "@/lib/siteConfig";

const GuideSeances = () => (
  <MainLayout title="Combien de séances de détatouage ?" description="Article long-form – placeholder.">
    <h1>Combien de séances de détatouage ?</h1>
    <p className="text-muted-foreground">TODO contenu long-form avec ToC, astuces et attention.</p>
    <ReadNext />
    <script type="application/ld+json">{JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Combien de séances de détatouage ?",
      description: "Estimation du nombre de séances et variables d’influence (placeholder).",
      author: { "@type": "Organization", name: SITE.name },
      publisher: { "@type": "Organization", name: SITE.name },
      mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE.baseUrl}/guide/combien-de-seances-detatouage` }
    })}</script>
  </MainLayout>
);

export default GuideSeances;
