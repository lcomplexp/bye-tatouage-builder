import MainLayout from "@/layouts/MainLayout";
import BreadcrumbsNav from "@/components/common/BreadcrumbsNav";
import ReadNext from "@/components/common/ReadNext";
import ToC from "@/components/common/ToC";

const GuideCreme = () => (
  <MainLayout title="Crème de détatouage" description="Pourquoi les \"crèmes miracle\" ne remplacent pas un laser (placeholders).">
    <BreadcrumbsNav />
    <header className="mb-4">
      <h1>Crème de détatouage : mythes et limites</h1>
      <p className="text-muted-foreground mt-1">Aucune crème n’a montré une efficacité comparable au laser pour effacer un tatouage. Prudence avec les promesses trop belles (placeholders).</p>
    </header>
    <div className="grid md:grid-cols-[1fr_280px] gap-8">
      <article>
        <h2 id="pourquoi">Pourquoi ça ne suffit pas</h2>
        <p>Les pigments sont profonds. Les actifs topiques n’atteignent pas ces dépôts d’encre de manière sélective.</p>
        <h2 id="risques" className="mt-6">Risques d’irritation</h2>
        <p>Produits agressifs = brûlures, hyperpigmentations possibles.</p>
        <h2 id="alternatives" className="mt-6">Alternative crédible</h2>
        <p>Le parcours laser encadré reste la référence. Voir <a className="underline" href="/detatouage">techniques</a> et <a className="underline" href="/prix-detatouage">prix</a>.</p>
        <figure className="mt-6 rounded-xl overflow-hidden shadow-soft">
          <img src="/images/hero-zone.jpg" alt="Illustration d’un tube de crème avec panneau d’alerte" loading="lazy" />
        </figure>
        <p className="text-xs text-muted-foreground mt-6">Ces informations ne remplacent pas un avis médical.</p>
      </article>
      <aside>
        <ToC />
      </aside>
    </div>
    <ReadNext />
  </MainLayout>
);

export default GuideCreme;
