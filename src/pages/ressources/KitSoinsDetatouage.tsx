import MainLayout from "@/layouts/MainLayout";
import CardProduit from "@/components/common/CardProduit";
import ReadNext from "@/components/common/ReadNext";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useLocalData } from "@/hooks/useLocalData";

interface ProductItem { id: string; name: string; shortDesc: string; image: { url: string; alt: string }; asin: string; url: string; notes: string }

const KitSoins = () => {
  const { data: products } = useLocalData<ProductItem[]>("/data/products.json");
  const itemListLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: (products || []).map((p, i) => ({ "@type": "ListItem", position: i + 1, name: p.name, url: p.url || "#" })),
  };
  return (
    <MainLayout title="Kit soins détatouage" description="Sélection d’articles utiles après une séance (placeholders).">
      <h1>Kit soins détatouage</h1>
      <p className="text-muted-foreground">Matériel indicatif pour les suites immédiates. À adapter aux consignes de votre praticien.</p>

      <Alert className="mt-4">
        <AlertTitle>Conseils d’utilisation</AlertTitle>
        <AlertDescription>
          <ul className="list-disc pl-5 text-sm">
            <li>Nettoyez à l’eau tiède, séchez en tamponnant.</li>
            <li>Appliquez une fine couche de crème barrière si recommandée.</li>
            <li>Changez le pansement s’il est humide ou souillé.</li>
          </ul>
        </AlertDescription>
      </Alert>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {(products || []).map((p) => (
          <CardProduit key={p.id} product={{ name: p.name, slug: p.id, url: p.url, image: { url: p.image.url, alt: p.image.alt } as any }} />
        ))}
      </div>

      <p className="text-xs text-muted-foreground mt-6">Ces informations ne remplacent pas un avis médical.</p>
      <ReadNext />
      <script type="application/ld+json">{JSON.stringify(itemListLd)}</script>
    </MainLayout>
  );
};

export default KitSoins;
