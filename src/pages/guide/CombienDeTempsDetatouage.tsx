import MainLayout from "@/layouts/MainLayout";
import BreadcrumbsNav from "@/components/common/BreadcrumbsNav";
import ReadNext from "@/components/common/ReadNext";
import ToC from "@/components/common/ToC";
import { Link } from "react-router-dom";
import { SITE } from "@/lib/siteConfig";

const GuideTemps = () => (
  <MainLayout title="Combien de temps pour un détatouage" description="Délais entre les séances et durée totale du parcours (placeholders).">
    <BreadcrumbsNav />
    <header className="mb-4">
      <h1>Combien de temps pour un détatouage ?</h1>
      <p className="text-muted-foreground mt-1">Entre les séances, la peau cicatrise et le corps évacue progressivement l’encre. Voici des repères généraux (placeholders).</p>
    </header>
    <div className="grid md:grid-cols-[1fr_280px] gap-8">
      <article>
        <h2 id="intervalle">Intervalle entre les séances</h2>
        <p>On compte souvent 6–8 semaines, parfois davantage selon la zone et la réaction cutanée. Suivez nos <Link to="/guide/soins-apres-detatouage" className="underline">soins après détatouage</Link> pour optimiser la cicatrisation.</p>
        <h2 id="duree-totale" className="mt-6">Durée totale du parcours</h2>
        <p>Variable : taille, densité d’encre, couleurs. Certaines situations nécessitent 9–12 mois et plus. Pour le budget, voir <Link to="/prix-detatouage" className="underline">Prix du détatouage</Link>.</p>
        <h3 className="mt-4">Facteurs influents</h3>
        <ul className="list-disc pl-5 text-sm">
          <li>Localisation et vascularisation</li>
          <li>Type d’encre et ancienneté</li>
          <li>Phototype et exposition solaire</li>
        </ul>
        <figure className="mt-6 rounded-xl overflow-hidden shadow-soft">
          <img src="/images/hero-zone.jpg" alt="Illustration d’un calendrier de séances de détatouage" loading="lazy" decoding="async" />
        </figure>
        <p className="text-xs text-muted-foreground mt-6">Ces informations ne remplacent pas un avis médical.</p>
      </article>
      <aside>
        <ToC />
      </aside>
    </div>
    <ReadNext />
    <script type="application/ld+json">{JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Combien de temps pour un détatouage ?",
      description: "Délais entre les séances et durée totale du parcours (placeholders).",
      mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE.baseUrl}/guide/combien-de-temps-detatouage` },
      author: { "@type": "Organization", name: SITE.name },
      publisher: { "@type": "Organization", name: SITE.name }
    })}</script>
  </MainLayout>
);

export default GuideTemps;
