import MainLayout from "@/layouts/MainLayout";
import BreadcrumbsNav from "@/components/common/BreadcrumbsNav";
import ReadNext from "@/components/common/ReadNext";

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
  </MainLayout>
);

export default BlogTechniques;
