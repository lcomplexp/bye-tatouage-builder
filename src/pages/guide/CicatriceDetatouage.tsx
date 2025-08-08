import MainLayout from "@/layouts/MainLayout";
import BreadcrumbsNav from "@/components/common/BreadcrumbsNav";
import ReadNext from "@/components/common/ReadNext";
import ToC from "@/components/common/ToC";
import { Link } from "react-router-dom";

const GuideCicatrice = () => (
  <MainLayout title="Cicatrice détatouage" description="Marques et cicatrisation : points de vigilance (placeholders).">
    <BreadcrumbsNav />
    <header className="mb-4">
      <h1>Cicatrice après détatouage : que savoir ?</h1>
      <p className="text-muted-foreground mt-1">Les suites normales incluent rougeur et croûtes. Le risque cicatriciel existe en cas de frottements, soleil ou surtraitement (placeholders).</p>
    </header>
    <div className="grid md:grid-cols-[1fr_280px] gap-8">
      <article>
        <h2 id="facteurs">Facteurs de risque</h2>
        <ul className="list-disc pl-5 text-sm">
          <li>Exposition solaire précoce</li>
          <li>Grattage/frottements</li>
          <li>Antécédents cicatriciels</li>
        </ul>
        <h2 id="prevention" className="mt-6">Prévention</h2>
        <p>Hygiène douce, protection solaire, suivre les <Link to="/guide/soins-apres-detatouage" className="underline">soins</Link>. Consultez si doute.</p>
        <figure className="mt-6 rounded-xl overflow-hidden shadow-soft">
          <img src="/images/hero-zone.jpg" alt="Illustration d’une peau en cicatrisation" loading="lazy" />
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

export default GuideCicatrice;
