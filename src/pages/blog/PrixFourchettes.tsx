import MainLayout from "@/layouts/MainLayout";
import BreadcrumbsNav from "@/components/common/BreadcrumbsNav";
import ReadNext from "@/components/common/ReadNext";
import { SITE } from "@/lib/siteConfig";

const BlogPrix = () => (
  <MainLayout title="Prix du détatouage : fourchettes" description="Repères de coûts indicatifs selon tailles (article démo).">
    <BreadcrumbsNav />
    <h1>Prix du détatouage : fourchettes</h1>
    <p className="text-muted-foreground">Exemples indicatifs de coûts et facteurs qui font varier le budget (placeholders).</p>
    <figure className="mt-6 rounded-xl overflow-hidden shadow-soft">
      <img src="/images/hero-zone.jpg" alt="Illustration d’un portefeuille et d’une grille de tarifs" loading="lazy" decoding="async" />
    </figure>
    <p className="text-xs text-muted-foreground mt-6">Ces informations ne remplacent pas un avis médical.</p>
    <ReadNext />
    <script type="application/ld+json">{JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: "Prix du détatouage : fourchettes",
      description: "Exemples indicatifs de coûts et facteurs qui font varier le budget (placeholders).",
      image: `${SITE.baseUrl}/images/hero-zone.jpg`,
      mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE.baseUrl}/blog/prix-fourchettes` },
      author: { "@type": "Organization", name: SITE.name },
      publisher: { "@type": "Organization", name: SITE.name }
    })}</script>
  </MainLayout>
);

export default BlogPrix;
