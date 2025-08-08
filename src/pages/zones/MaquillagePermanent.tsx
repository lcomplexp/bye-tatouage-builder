import MainLayout from "@/layouts/MainLayout";
import ReadNext from "@/components/common/ReadNext";
import { Link } from "react-router-dom";
import { SITE } from "@/lib/siteConfig";

const ZonesMP = () => (
  <MainLayout title="Détatouage maquillage permanent" description="Indications et précautions (placeholders).">
    <h1>Détatouage maquillage permanent</h1>
    <p className="text-muted-foreground">Lèvres, sourcils : zones sensibles. Consultez <Link className="underline" to="/guide/soins-apres-detatouage">Soins après détatouage</Link> et la galerie <Link className="underline" to="/avant-apres">Avant/Après</Link>.</p>
    <ReadNext />
    <script type="application/ld+json">{JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Détatouage maquillage permanent",
      description: "Indications et précautions (placeholders).",
      url: `${SITE.baseUrl}/zones/maquillage-permanent`
    })}</script>
  </MainLayout>
);

export default ZonesMP;
