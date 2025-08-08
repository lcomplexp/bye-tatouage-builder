import MainLayout from "@/layouts/MainLayout";
import CardProduit from "@/components/common/CardProduit";
import ReadNext from "@/components/common/ReadNext";
import { useLocalData } from "@/hooks/useLocalData";
import { Link } from "react-router-dom";

interface ProductItem { id: string; name: string; shortDesc: string; image: { url: string; alt: string }; asin: string; url: string; notes: string }

const RessourcesIndex = () => {
  const { data: products } = useLocalData<ProductItem[]>("/data/products.json");
  const top = products?.slice(0, 3) || [];
  const itemListLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: top.map((p, i) => ({ "@type": "ListItem", position: i + 1, name: p.name, url: p.url || "#" })),
  };
  return (
    <MainLayout title="Ressources & kit soins" description="Sélection de produits utiles après les séances (placeholders).">
      <h1>Ressources & kit soins</h1>
      <p className="text-muted-foreground mt-1">Matériel de base pour l’hygiène et la protection locale. Pour la liste complète, voyez le <Link className="underline" to="/ressources/kit-soins-detatouage">kit soins</Link>.</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {top.map((p) => (
          <CardProduit key={p.id} product={{ name: p.name, slug: p.id, url: p.url, image: { url: p.image.url, alt: p.image.alt } as any }} />
        ))}
      </div>
      <ReadNext />
      <script type="application/ld+json">{JSON.stringify(itemListLd)}</script>
    </MainLayout>
  );
};

export default RessourcesIndex;
