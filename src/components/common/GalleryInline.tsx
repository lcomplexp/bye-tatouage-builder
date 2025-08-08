import { useEffect, useRef, useState } from "react";

export interface GalleryItem { src: string; alt: string; caption?: string }

const GalleryInline = ({ items }: { items: GalleryItem[] }) => {
  const [active, setActive] = useState<GalleryItem | null>(null);
  const dialogRef = useRef<HTMLDivElement | null>(null);

  // Close on ESC and focus trap entry
  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    // focus the dialog container
    dialogRef.current?.focus();
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  const open = (img: GalleryItem) => setActive(img);
  const onKeyFigure = (e: React.KeyboardEvent, img: GalleryItem) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      open(img);
    }
  };

  const captionId = active?.caption ? "gallery-dialog-caption" : undefined;

  return (
    <div className="mt-6">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {items.map((img, idx) => (
          <figure
            key={idx}
            className="rounded-lg overflow-hidden shadow-soft bg-card cursor-pointer"
            role="button"
            tabIndex={0}
            aria-label={`Agrandir l'image: ${img.alt}`}
            onClick={() => open(img)}
            onKeyDown={(e) => onKeyFigure(e, img)}
          >
            <img loading="lazy" decoding="async" src={img.src} alt={img.alt} className="w-full h-40 object-cover" />
            {img.caption && <figcaption className="text-xs text-muted-foreground p-2">{img.caption}</figcaption>}
          </figure>
        ))}
      </div>
      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby={captionId}
          className="fixed inset-0 bg-black/60 flex items-center justify-center p-4"
          onClick={() => setActive(null)}
        >
          <div
            ref={dialogRef}
            tabIndex={-1}
            className="bg-background rounded-lg overflow-hidden max-w-3xl shadow-elevated outline-none"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={active.src} alt={active.alt} decoding="async" className="w-full h-auto" />
            {active.caption && (
              <div id={captionId} className="p-3 text-sm text-muted-foreground">{active.caption}</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryInline;
