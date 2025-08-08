import MainLayout from "@/layouts/MainLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import CardProduit from "@/components/common/CardProduit";
import { useLocalData } from "@/hooks/useLocalData";

interface Product { id: string; name: string; shortDesc: string; image: { url: string; alt: string }; asin: string; url: string; notes: string }
interface GalleryItem { id: string; zone: string; caption: string; src: string; width: number; height: number; alt: string }

const Index = () => {
  const { data: products } = useLocalData<Product[]>("/data/products.json");
  const { data: gallery } = useLocalData<GalleryItem[]>("/data/gallery.json");
  const topProducts = products?.slice(0, 3) || [];
  const topGallery = gallery?.slice(0, 4) || [];

  return (
    <MainLayout title="Le guide du détatouage : méthodes, prix, conseils" description="Techniques, prix et conseils généraux pour comprendre le détatouage. Illustrations et exemples avant/après.">
      <section className="grid md:grid-cols-2 gap-8 items-center">
        <div className="text-left">
          <h1>Le guide du détatouage : méthodes, prix, conseils</h1>
          <p className="mt-3 text-lg text-muted-foreground">Comprendre les options, estimer un budget et préparer vos séances en toute sérénité.</p>
          <div className="mt-6 flex gap-3">
            <Button asChild className="btn-hero">
              <Link to="/detatouage">Découvrir les techniques</Link>
            </Button>
            <Button variant="secondary" asChild>
              <Link to="/prix-detatouage">Voir les prix</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/guide">Lire les guides</Link>
            </Button>
          </div>
        </div>
        <div className="rounded-xl overflow-hidden shadow-elevated">
          <img src="/images/hero-zone.jpg" alt="Illustration d’un laser médical retirant un tatouage" className="w-full h-auto" loading="lazy" />
        </div>
      </section>

      <section className="mt-10">
        <h2>Par où commencer ?</h2>
        <div className="grid sm:grid-cols-3 gap-4 mt-4">
          {[
            { title: "Techniques", link: "/detatouage", desc: "Laser, picoseconde, Q-switch : principes et limites." },
            { title: "Prix", link: "/prix-detatouage", desc: "Fourchettes indicatives selon taille et sessions." },
            { title: "Guides", link: "/guide", desc: "Préparation, douleur, cicatrisation, soins." },
          ].map((c) => (
            <Card key={c.title} className="shadow-soft">
              <CardHeader>
                <CardTitle className="text-base">{c.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{c.desc}</p>
                <Button asChild size="sm" className="mt-3">
                  <Link to={c.link} aria-label={`Aller vers ${c.title}`}>Explorer</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <div className="flex items-baseline justify-between">
          <h2>Avant / Après</h2>
          <Link to="/avant-apres" className="text-sm underline">Voir la galerie</Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-3">
          {topGallery.map((g) => (
            <figure key={g.id} className="rounded-lg overflow-hidden shadow-soft bg-card">
              <img
                src={g.src}
                alt={g.alt}
                width={g.width}
                height={g.height}
                loading="lazy"
                className="w-full h-36 object-cover"
              />
              <figcaption className="text-xs text-muted-foreground p-2">{g.caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <div className="flex items-baseline justify-between">
          <h2>Ressources : Kit soins</h2>
          <Link to="/ressources/kit-soins-detatouage" className="text-sm underline">Voir tout</Link>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mt-3">
          {topProducts.map((p) => (
            <CardProduit key={p.id} product={{ name: p.name, slug: p.id, url: p.url, image: { url: p.image.url, alt: p.image.alt } as any }} />
          ))}
        </div>
      </section>

      <p className="text-xs text-muted-foreground mt-10">Ces informations ne remplacent pas un avis médical.</p>
    </MainLayout>
  );
};

export default Index;
