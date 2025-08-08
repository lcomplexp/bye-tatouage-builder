import MainLayout from "@/layouts/MainLayout";
import ReadNext from "@/components/common/ReadNext";
import { SITE } from "@/lib/siteConfig";

const APropos = () => (
  <MainLayout title="À propos" description="La marque Bye-Tatouage – placeholder.">
    <h1>À propos</h1>
    <p className="text-muted-foreground">Marque, mission et disclaimer médical. Ce site ne remplace pas un avis médical.</p>
    <ReadNext />
    <script type="application/ld+json">{JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "À propos",
      description: "La marque Bye-Tatouage – placeholder.",
      url: `${SITE.baseUrl}/a-propos`
    })}</script>
  </MainLayout>
);

export default APropos;
