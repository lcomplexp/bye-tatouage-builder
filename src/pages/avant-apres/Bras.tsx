import MainLayout from "@/layouts/MainLayout";
import ReadNext from "@/components/common/ReadNext";
import { useLocalData } from "@/hooks/useLocalData";

interface GItem { id: string; zone: string; caption: string; src: string; width: number; height: number; alt: string }

const AvantApresBras = () => {
  const { data } = useLocalData<GItem[]>("/data/gallery.json");
  const items = (data || []).filter((i) => i.zone === "bras");
  const galleryLd = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    image: items.map((i) => ({ "@type": "ImageObject", contentUrl: i.src, description: i.alt, name: i.caption })),
  };
  return (
    <MainLayout title="Avant / Après – Bras" description="Exemples de progression sur la zone bras (illustrations placeholders).">
      <h1>Avant / Après – Bras</h1>
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

export default AvantApresBras;

