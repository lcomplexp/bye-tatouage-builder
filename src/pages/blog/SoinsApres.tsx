import MainLayout from "@/layouts/MainLayout";
import BreadcrumbsNav from "@/components/common/BreadcrumbsNav";
import ReadNext from "@/components/common/ReadNext";
import { SITE } from "@/lib/siteConfig";

const BlogSoins = () => (
  <MainLayout title="Soins après séance : l’essentiel" description="Gestes simples pour accompagner la cicatrisation (article démo).">
    <BreadcrumbsNav />
    <h1>Soins après une séance : l’essentiel</h1>
    <p className="text-muted-foreground">Conseils généraux et matériel utile pour la phase post-laser (placeholders).</p>
    <figure className="mt-6 rounded-xl overflow-hidden shadow-soft">
      <img src="/images/hero-technique.jpg" alt="Illustration d’un kit de soins post-laser" loading="lazy" decoding="async" />
    </figure>
    <p className="text-xs text-muted-foreground mt-6">Ces informations ne remplacent pas un avis médical.</p>
    <ReadNext />
    <script type="application/ld+json">{JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: "Soins après une séance : l’essentiel",
      description: "Conseils généraux et matériel utile pour la phase post-laser (placeholders).",
      image: `${SITE.baseUrl}/images/hero-technique.jpg`,
      mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE.baseUrl}/blog/soins-apres` },
      author: { "@type": "Organization", name: SITE.name },
      publisher: { "@type": "Organization", name: SITE.name }
    })}</script>
  </MainLayout>
);

export default BlogSoins;
