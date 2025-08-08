import MainLayout from "@/layouts/MainLayout";
import BreadcrumbsNav from "@/components/common/BreadcrumbsNav";
import ReadNext from "@/components/common/ReadNext";
import { SITE } from "@/lib/siteConfig";

const BlogTechniques = () => (
  <MainLayout title="Techniques laser : panorama" description="Aperçu des techniques laser de détatouage (article démo).">
    <BreadcrumbsNav />
    <h1>Techniques laser : panorama rapide</h1>
    <p className="text-muted-foreground">Aperçu des méthodes (laser, picoseconde, Q-Switch) et de leurs principes (placeholders).</p>
    <figure className="mt-6 rounded-xl overflow-hidden shadow-soft">
      <img src="/images/hero-technique.jpg" alt="Illustration d’un faisceau laser" loading="lazy" />
    </figure>
    <p className="text-xs text-muted-foreground mt-6">Ces informations ne remplacent pas un avis médical.</p>
    <ReadNext />
    <script type="application/ld+json">{JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: "Techniques laser : panorama rapide",
      description: "Aperçu des méthodes (laser, picoseconde, Q-Switch) et de leurs principes (placeholders).",
      image: `${SITE.baseUrl}/images/hero-technique.jpg`,
      mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE.baseUrl}/blog/techniques-laser` },
      author: { "@type": "Organization", name: SITE.name },
      publisher: { "@type": "Organization", name: SITE.name }
    })}</script>
  </MainLayout>
);

export default BlogTechniques;
