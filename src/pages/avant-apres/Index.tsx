import MainLayout from "@/layouts/MainLayout";

const AvantApresIndex = () => {
  const images = [
    { url: "/images/gallery-1.jpg", alt: "Avant/Après bras – progression" },
    { url: "/images/gallery-2.jpg", alt: "Sourcils – maquillage permanent" },
    { url: "/images/gallery-3.jpg", alt: "Tatouage couleur – éclaircissement" },
  ];
  const galleryLd = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    image: images.map((i) => ({ "@type": "ImageObject", contentUrl: i.url, description: i.alt })),
  };
  return (
    <MainLayout title="Avant / Après" description="Galerie – placeholder.">
      <h1>Avant / Après</h1>
      <p className="text-muted-foreground">Grille filtrable (UI uniquement) – TODO.</p>
      <script type="application/ld+json">{JSON.stringify(galleryLd)}</script>
    </MainLayout>
  );
};

export default AvantApresIndex;
