import MainLayout from "@/layouts/MainLayout";
import BreadcrumbsNav from "@/components/common/BreadcrumbsNav";
import ToC from "@/components/common/ToC";
import GalleryInline from "@/components/common/GalleryInline";
import FAQ from "@/components/common/FAQ";

const DetatouageIndex = () => {
  return (
    <MainLayout title="Détatouage – techniques" description="Vue d'ensemble des techniques de détatouage.">
      <BreadcrumbsNav />
      <header className="grid md:grid-cols-2 gap-6 items-center">
        <div>
          <h1>Techniques de détatouage</h1>
          <p className="text-muted-foreground mt-2">Chapo placeholder – présentation des méthodes (laser, picoseconde, etc.).</p>
        </div>
        <img src="/images/hero-technique.jpg" alt="Illustration d'une machine laser médicale" className="rounded-xl shadow-soft" />
      </header>
      <div className="grid md:grid-cols-[1fr_280px] gap-8 mt-8">
        <article>
          <h2 id="laser">Laser</h2>
          <p>Contenu TODO…</p>
          <h2 id="picoseconde">Picoseconde</h2>
          <p>Contenu TODO…</p>

          <section className="mt-8">
            <h2>Galerie</h2>
            <GalleryInline items={[
              { src: "/images/gallery-1.jpg", alt: "Avant/APrès bras – en cours", caption: "Bras – en cours" },
              { src: "/images/gallery-2.jpg", alt: "Sourcil maquillage permanent – retrait", caption: "Sourcils" },
              { src: "/images/gallery-3.jpg", alt: "Tatouage couleur – progression" },
            ]} />
          </section>
        </article>
        <div>
          <ToC />
        </div>
      </div>
      <FAQ items={[
        { q: "Combien de séances ?", a: "Placeholder – réponse courte." },
        { q: "Est-ce douloureux ?", a: "Placeholder – réponse courte." },
      ]} />
    </MainLayout>
  );
};

export default DetatouageIndex;
