import MainLayout from "@/layouts/MainLayout";
import ReadNext from "@/components/common/ReadNext";
import { useLocalData } from "@/hooks/useLocalData";
import { useMemo, useState } from "react";

interface GItem { id: string; zone: string; caption: string; src: string; width: number; height: number; alt: string }

const AvantApresIndex = () => {
  const { data } = useLocalData<GItem[]>("/data/gallery.json");
  const zones = useMemo(() => ["tous", ...Array.from(new Set((data || []).map((i) => i.zone)))], [data]);
  const [active, setActive] = useState("tous");
  const items = useMemo(() => (active === "tous" ? data || [] : (data || []).filter((i) => i.zone === active)), [data, active]);
  const galleryLd = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    image: (data || []).map((i) => ({ "@type": "ImageObject", contentUrl: i.src, description: i.alt, name: i.caption })),
  };

  return (
    <MainLayout title="Avant / Après" description="Galerie de résultats (illustrations placeholders) avec filtre par zone.">
      <h1>Avant / Après</h1>
      <p className="text-muted-foreground">Illustrations placeholders pour visualiser la progression. Utilisez le filtre par zone.</p>

      <div className="mt-4 flex flex-wrap gap-2" role="tablist" aria-label="Filtrer par zone">
        {zones.map((z) => (
          <button
            key={z}
            role="tab"
            aria-selected={active === z}
            onClick={() => setActive(z)}
            className={`px-3 py-1 rounded-md border text-sm ${active === z ? "bg-muted" : "bg-background"}`}
          >
            {z.charAt(0).toUpperCase() + z.slice(1)}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-4">
        {items.map((i) => (
          <figure key={i.id} className="rounded-lg overflow-hidden shadow-soft bg-card">
            <img src={i.src} alt={i.alt} width={i.width} height={i.height} loading="lazy" className="w-full h-36 object-cover" />
            <figcaption className="text-xs text-muted-foreground p-2">{i.caption}</figcaption>
          </figure>
        ))}
      </div>

      <script type="application/ld+json">{JSON.stringify(galleryLd)}</script>
      <ReadNext />
    </MainLayout>
  );
};

export default AvantApresIndex;
