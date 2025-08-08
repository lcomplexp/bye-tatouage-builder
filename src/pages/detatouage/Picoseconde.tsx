import MainLayout from "@/layouts/MainLayout";
import BreadcrumbsNav from "@/components/common/BreadcrumbsNav";
import FAQ from "@/components/common/FAQ";
import ReadNext from "@/components/common/ReadNext";
import { Link } from "react-router-dom";

const Picoseconde = () => {
  return (
    <MainLayout title="Détatouage picoseconde" description="Principe, différences avec Q-Switch, indications (placeholders).">
      <BreadcrumbsNav />
      <h1>Laser picoseconde</h1>
      <p className="text-muted-foreground">Impulsions ultra-courtes pouvant mieux cibler certains pigments. À comparer avec le <Link to="/detatouage/q-switch" className="underline">Q-Switch</Link> selon la situation.</p>
      <section className="mt-6 rounded-xl overflow-hidden shadow-soft">
        <img src="/images/hero-technique.jpg" alt="Laser picoseconde – illustration" loading="lazy" />
      </section>
      <section className="mt-8">
        <h2>Principe</h2>
        <p>Les durées d’impulsion plus courtes génèrent des effets photoacoustiques susceptibles de fragmenter plus finement certaines encres.</p>
        <h2 className="mt-6">Différences avec Q-Switch</h2>
        <ul className="list-disc pl-5 text-sm">
          <li>Durée d’impulsion plus courte (pico vs nano).</li>
          <li>Ciblage potentiel de pigments récalcitrants.</li>
          <li>Coûts et disponibilité variables selon les centres.</li>
        </ul>
        <h2 className="mt-6">Limites & précautions</h2>
        <p>Comme tout laser : bulles, croûtes, troubles pigmentaires. Suivez les <Link to="/guide/soins-apres-detatouage" className="underline">soins</Link>.</p>
      </section>
      <FAQ items={[
        { q: "Plus rapide que le Q-Switch ?", a: "Parfois sur certaines couleurs, mais pas systématiquement (placeholder)." },
        { q: "Combien de séances ?", a: "Dépend des mêmes facteurs que les autres lasers (placeholder)." },
        { q: "Prix ?", a: "Voir la page Prix du détatouage pour des fourchettes (placeholder)." },
      ]} />
      <p className="text-xs text-muted-foreground mt-6">Ces informations ne remplacent pas un avis médical.</p>
      <ReadNext />
    </MainLayout>
  );
};

export default Picoseconde;
