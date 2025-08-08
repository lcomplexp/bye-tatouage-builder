import MainLayout from "@/layouts/MainLayout";
import BreadcrumbsNav from "@/components/common/BreadcrumbsNav";
import ToC from "@/components/common/ToC";
import GalleryInline from "@/components/common/GalleryInline";
import FAQ from "@/components/common/FAQ";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import ReadNext from "@/components/common/ReadNext";
import { SITE } from "@/lib/siteConfig";

const DetatouageIndex = () => {
  return (
    <MainLayout title="Détatouage – techniques" description="Vue d'ensemble des techniques de détatouage : laser, picoseconde, Q-switch. Indications et limites (placeholders).">
      <BreadcrumbsNav />
      <header className="grid md:grid-cols-2 gap-6 items-center">
        <div>
          <h1>Techniques de détatouage</h1>
          <p className="text-muted-foreground mt-2">Présentation synthétique des principales méthodes (laser, picoseconde, Q-switch). Pour estimer le <Link to="/prix-detatouage" className="underline">prix</Link> et le <Link to="/guide/combien-de-seances-detatouage" className="underline">nombre de séances</Link>, consultez nos pages dédiées.</p>
        </div>
        <img src="/images/hero-technique.jpg" alt="Illustration d'une machine laser médicale" className="rounded-xl shadow-soft" loading="eager" fetchPriority="high" decoding="async" />
      </header>

      <section className="mt-8">
        <h2>Panorama des méthodes</h2>
        <div className="grid sm:grid-cols-3 gap-4 mt-3">
          {[
            { title: "Laser", link: "/detatouage/laser", desc: "Fragmentation de l’encre par impulsions lumineuses." },
            { title: "Picoseconde", link: "/detatouage/picoseconde", desc: "Impulsions très courtes, ciblage fin de certains pigments." },
            { title: "Q-Switch", link: "/detatouage/q-switch", desc: "Technologie historique, indications spécifiques." },
          ].map((c) => (
            <Card key={c.title} className="shadow-soft">
              <CardHeader>
                <CardTitle className="text-base">{c.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{c.desc}</p>
                <Link to={c.link} className="text-sm underline mt-2 inline-block" aria-label={`Aller vers ${c.title}`}>En savoir plus</Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <div className="grid md:grid-cols-[1fr_280px] gap-8 mt-8">
        <article>
          <h2 id="laser">Laser</h2>
          <p>Le laser est la méthode la plus courante. Son efficacité dépend de la profondeur, des couleurs et de la densité d’encre. Voir la page <Link to="/detatouage/laser" className="underline">Détatouage au laser</Link>.</p>
          <h2 id="picoseconde">Picoseconde</h2>
          <p>Les lasers picoseconde émettent des impulsions ultra-courtes, utiles pour certains pigments. Comparez avec le <Link to="/detatouage/q-switch" className="underline">Q-Switch</Link>.</p>

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
        { q: "Combien de séances ?", a: "Variable : taille, couleurs, ancienneté, emplacement. Une estimation se fait au cas par cas (placeholder)." },
        { q: "Est-ce douloureux ?", a: "La sensation varie selon la zone et le réglage. Voir le guide dédié sur la douleur (placeholder)." },
      ]} />
      <ReadNext />
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Détatouage – techniques",
        description: "Vue d'ensemble des techniques de détatouage : laser, picoseconde, Q-switch. Indications et limites (placeholders).",
        url: `${SITE.baseUrl}/detatouage`
      })}</script>
    </MainLayout>
  );
};

export default DetatouageIndex;
