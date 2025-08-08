import { useState } from "react";

export interface GalleryItem { src: string; alt: string; caption?: string }

const GalleryInline = ({ items }: { items: GalleryItem[] }) => {
  const [active, setActive] = useState<GalleryItem | null>(null);
  return (
    <div className="mt-6">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {items.map((img, idx) => (
          <figure key={idx} className="rounded-lg overflow-hidden shadow-soft bg-card cursor-pointer" onClick={() => setActive(img)}>
            <img loading="lazy" src={img.src} alt={img.alt} className="w-full h-40 object-cover" />
            {img.caption && <figcaption className="text-xs text-muted-foreground p-2">{img.caption}</figcaption>}
          </figure>
        ))}
      </div>
      {active && (
        <div role="dialog" aria-modal="true" className="fixed inset-0 bg-black/60 flex items-center justify-center p-4" onClick={() => setActive(null)}>
          <div className="bg-background rounded-lg overflow-hidden max-w-3xl shadow-elevated" onClick={(e) => e.stopPropagation()}>
            <img src={active.src} alt={active.alt} className="w-full h-auto" />
            {active.caption && <div className="p-3 text-sm text-muted-foreground">{active.caption}</div>}
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryInline;
