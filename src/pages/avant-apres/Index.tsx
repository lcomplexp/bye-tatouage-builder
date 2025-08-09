import MainLayout from "@/layouts/MainLayout";
import ReadNext from "@/components/common/ReadNext";
import BreadcrumbsNav from "@/components/common/BreadcrumbsNav";
import { useLocalData } from "@/hooks/useLocalData";
import { Link } from "react-router-dom";
import { useMemo, useState } from "react";

interface GItem { id: string; zone: string; caption: string; src: string; width: number; height: number; alt: string }

const AvantApresIndex = () => {
  const { data } = useLocalData<GItem[]>('/data/gallery.json');
  const zones = useMemo(() => ['tous', ...Array.from(new Set((data || []).map((i) => i.zone)))], [data]);
  const [active, setActive] = useState('tous');
  const items = useMemo(() => (active === 'tous' ? data || [] : (data || []).filter((i) => i.zone === active)), [data, active]);
  const galleryLd = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    image: (data || []).map((i) => ({ "@type": "ImageObject", contentUrl: i.src, description: i.alt, name: i.caption })),
  };

  return (
    <MainLayout title="Avant / Après | Bye-Tatouage" description="Galerie de résultats (illustrations) avec filtres par zone et conseils utiles.">
      <header className="grid md:grid-cols-[1fr_320px] gap-6 items-center">
        <div>
          <h1>Avant / Après</h1>
          <p className="text-muted-foreground mt-2">Aperçu visuel des évolutions possibles selon la zone et la densité d’encre. Les images sont <em>illustratives</em> et ne remplacent pas un avis personnalisé.</p>
        </div>
        <img src="/images/gallery-4.webp" alt="Mosaïque illustrative avant/après" className="rounded-xl shadow-soft" loading="lazy" decoding="async" />
      </header>

      <BreadcrumbsNav />

      <div className="mt-4 flex flex-wrap gap-2" role="tablist" aria-label="Filtrer par zone">
        {zones.map((z) => (
          <button
            key={z}
            role="tab"
            aria-selected={active === z}
            onClick={() => setActive(z)}
            className={`px-3 py-1 rounded-md border text-sm ${active === z ? 'bg-muted' : 'bg-background'}`}
          >
            {z.charAt(0).toUpperCase() + z.slice(1)}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-4">
        {items.map((i) => (
          <figure key={i.id} className="rounded-lg overflow-hidden shadow-soft bg-card">
            <img src={i.src} alt={i.alt} width={i.width} height={i.height} loading="lazy" decoding="async" className="w-full h-36 object-cover" />
            <figcaption className="text-xs text-muted-foreground p-2">{i.caption}</figcaption>
          </figure>
        ))}
      </div>

      <section className="mt-8 rounded-lg border p-4 bg-muted/50 shadow-soft">
        <h2 className="font-semibold">Comprendre les résultats</h2>
        <p className="text-sm mt-1">La progression dépend du type de laser, de la densité d’encre et de la zone. Pour mieux vous repérer :</p>
        <ul className="list-disc pl-5 text-sm mt-2">
          <li><Link className="underline" to="/detatouage">Techniques de détatouage</Link></li>
          <li><Link className="underline" to="/guide/combien-de-seances-detatouage">Nombre de séances</Link></li>
          <li><Link className="underline" to="/guide/soins-apres-detatouage">Soins après séance</Link></li>
        </ul>
      </section>

      <script type="application/ld+json">{JSON.stringify(galleryLd)}</script>
      <ReadNext />
    </MainLayout>
  );
};

export default AvantApresIndex;
