import MainLayout from "@/layouts/MainLayout";
import BreadcrumbsNav from "@/components/common/BreadcrumbsNav";
import ReadNext from "@/components/common/ReadNext";

const BlogPrix = () => (
  <MainLayout title="Prix du détatouage : fourchettes" description="Repères de coûts indicatifs selon tailles (article démo).">
    <BreadcrumbsNav />
    <h1>Prix du détatouage : fourchettes</h1>
    <p className="text-muted-foreground">Exemples indicatifs de coûts et facteurs qui font varier le budget (placeholders).</p>
    <figure className="mt-6 rounded-xl overflow-hidden shadow-soft">
      <img src="/images/hero-zone.jpg" alt="Illustration d’un portefeuille et d’une grille de tarifs" loading="lazy" />
    </figure>
    <p className="text-xs text-muted-foreground mt-6">Ces informations ne remplacent pas un avis médical.</p>
    <ReadNext />
  </MainLayout>
);

export default BlogPrix;
