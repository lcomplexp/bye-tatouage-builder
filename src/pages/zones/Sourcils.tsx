import MainLayout from "@/layouts/MainLayout";
import ReadNext from "@/components/common/ReadNext";
import { Link } from "react-router-dom";

const ZonesSourcils = () => (
  <MainLayout title="Détatouage des sourcils" description="Précautions locales et cicatrisation autour des sourcils (placeholders).">
    <h1>Détatouage des sourcils</h1>
    <p className="text-muted-foreground">Peau fine, proximité des yeux : suivez strictement les <Link className="underline" to="/guide/soins-apres-detatouage">soins après détatouage</Link>. Voir aussi <Link className="underline" to="/avant-apres">Avant/Après</Link>.</p>
    <ReadNext />
  </MainLayout>
);

export default ZonesSourcils;
