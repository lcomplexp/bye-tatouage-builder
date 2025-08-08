import MainLayout from "@/layouts/MainLayout";
import CardProduit from "@/components/common/CardProduit";

const RessourcesIndex = () => (
  <MainLayout title="Ressources & kit soins" description="Sélection de produits – placeholders.">
    <h1>Ressources & kit soins</h1>
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      {[
        { name: "Crème apaisante", slug: "creme-apaisante" },
        { name: "Pansements stériles", slug: "pensements-steriles" },
        { name: "Nettoyant doux", slug: "nettoyant-doux" },
      ].map((p) => (
        <CardProduit key={p.slug} product={{ name: p.name, slug: p.slug, url: "#" }} />
      ))}
    </div>
  </MainLayout>
);

export default RessourcesIndex;
