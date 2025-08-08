import MainLayout from "@/layouts/MainLayout";
import BreadcrumbsNav from "@/components/common/BreadcrumbsNav";
import FAQ from "@/components/common/FAQ";
import ReadNext from "@/components/common/ReadNext";
import { Link } from "react-router-dom";

const Laser = () => {
  return (
    <MainLayout title="Détatouage au laser" description="Principe, séances estimées, limites et risques (placeholders).">
      <BreadcrumbsNav />
      <h1>Détatouage au laser</h1>
      <p className="text-muted-foreground">Le laser fragmente l’encre en particules éliminées progressivement par l’organisme. L’efficacité varie selon la couleur, la profondeur et la densité. Estimez un <Link to="/prix-detatouage" className="underline">budget</Link> et le <Link to="/guide/combien-de-seances-detatouage" className="underline">nombre de séances</Link> sur nos pages dédiées.</p>

      <section className="mt-6 rounded-xl overflow-hidden shadow-soft">
        <img src="/images/hero-technique.jpg" alt="Illustration d’un laser médical retirant un tatouage au bras" loading="lazy" />
      </section>

      <section className="mt-8">
        <h2>Principe du laser</h2>
        <p>Des impulsions lumineuses ciblent les pigments. Chaque passage fragmente un peu plus l’encre. Des intervalles de plusieurs semaines sont nécessaires pour la cicatrisation.</p>

        <h2 className="mt-6">Nombre de séances (facteurs)</h2>
        <p>Couleurs (noir, bleu, rouge, vert), ancienneté, localisation, densité d’encre, phototype et matériel influencent la réponse. Un plan est toujours individualisé.</p>

        <div className="mt-4 overflow-x-auto rounded-lg border shadow-soft">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left">
                <th className="p-3">Profil</th>
                <th className="p-3">Estimation séances</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="p-3">Petit noir (≤3cm)</td>
                <td className="p-3">3–6</td>
              </tr>
              <tr className="border-t">
                <td className="p-3">Moyen noir/bleu (≤8cm)</td>
                <td className="p-3">6–10</td>
              </tr>
              <tr className="border-t">
                <td className="p-3">Couleurs (rouge/vert)</td>
                <td className="p-3">8–12</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="mt-6">Limites & risques</h2>
        <p>Hypo/hyperpigmentation, croûtes transitoires, risque de cicatrice en cas de frottements/soleil. Suivez les <Link to="/guide/soins-apres-detatouage" className="underline">soins après détatouage</Link>.</p>
      </section>

      <section className="mt-8">
        <h2>Exemples visuels</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {[1,2,3].map((i) => (
            <figure key={i} className="rounded-lg overflow-hidden shadow-soft bg-card">
              <img src={`/images/gallery-${i}.jpg`} alt={`Illustration avant/après ${i}`} loading="lazy" className="w-full h-40 object-cover" />
            </figure>
          ))}
        </div>
      </section>

      <FAQ items={[
        { q: "Est-ce définitif ?", a: "Une atténuation importante est fréquente ; la disparition totale dépend des encres (placeholder)." },
        { q: "Intervalle entre les séances ?", a: "Généralement 6–8 semaines pour la cicatrisation (placeholder)." },
        { q: "Douleur ?", a: "Variable. Des méthodes d’atténuation existent. Voir le guide Douleur (placeholder)." },
      ]} />
      <p className="text-xs text-muted-foreground mt-6">Ces informations ne remplacent pas un avis médical.</p>
      <ReadNext />
    </MainLayout>
  );
};

export default Laser;
