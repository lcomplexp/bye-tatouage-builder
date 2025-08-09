import MainLayout from "@/layouts/MainLayout";
import ReadNext from "@/components/common/ReadNext";
import BreadcrumbsNav from "@/components/common/BreadcrumbsNav";
import HubCard from "@/components/common/HubCard";
import { Link } from "react-router-dom";
import { SITE } from "@/lib/siteConfig";

const ZonesIndex = () => (
  <MainLayout title="Zones & cas spécifiques | Bye-Tatouage" description="Précautions selon la zone (sourcils, maquillage permanent) et accès rapide aux pages dédiées.">
    <header className="grid md:grid-cols-[1fr_320px] gap-6 items-center">
      <div>
        <h1>Zones & cas spécifiques</h1>
        <p className="text-muted-foreground mt-2">Accédez rapidement aux zones les plus fréquentes. Certaines zones exigent des précautions particulières et une routine de <Link className="underline" to="/guide/soins-apres-detatouage">soins après détatouage</Link>.</p>
      </div>
      <img src="/images/hero-zone.jpg" alt="Illustration des zones du corps concernées par le détatouage" className="rounded-xl shadow-soft" loading="lazy" decoding="async" />
    </header>

    <BreadcrumbsNav />

    <section className="grid gap-4 sm:grid-cols-2 mt-6">
      <HubCard title="Sourcils" description="Détatouage des sourcils et maquillage permanent, points d’attention." to="/zones/sourcils" ctaLabel="Voir la page" />
      <HubCard title="Maquillage permanent" description="Précautions et attentes réalistes pour un retrait progressif." to="/zones/maquillage-permanent" ctaLabel="Voir la page" />
    </section>

    <aside className="mt-6 rounded-lg border p-4 bg-muted/50 shadow-soft">
      <h3 className="font-semibold">Précautions locales</h3>
      <p className="text-sm mt-1">Évitez le soleil direct, les cosmétiques irritants et les gommages sur la zone jusqu’à cicatrisation complète. Consultez les <Link to="/guide/soins-apres-detatouage" className="underline">soins après détatouage</Link>.</p>
    </aside>

    <ReadNext />

    <script type="application/ld+json">{JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Zones & cas spécifiques",
      description: "Précautions selon la zone (sourcils, maquillage permanent) et accès rapide aux pages dédiées.",
      url: `${SITE.baseUrl}/zones`
    })}</script>
    <script type="application/ld+json">{JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: SITE.baseUrl },
        { "@type": "ListItem", position: 2, name: "Zones", item: `${SITE.baseUrl}/zones` },
      ],
    })}</script>
  </MainLayout>
);

export default ZonesIndex;
