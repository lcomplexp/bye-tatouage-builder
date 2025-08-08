import MainLayout from "@/layouts/MainLayout";
import ReadNext from "@/components/common/ReadNext";
import { Link } from "react-router-dom";

const ZonesIndex = () => (
  <MainLayout title="Zones & cas spécifiques" description="Précautions selon la zone (sourcils, maquillage permanent). Placeholders.">
    <h1>Zones & cas spécifiques</h1>
    <p className="text-muted-foreground">Consultez les pages <Link className="underline" to="/zones/sourcils">Sourcils</Link> et <Link className="underline" to="/zones/maquillage-permanent">Maquillage permanent</Link>.</p>
    <ReadNext />
  </MainLayout>
);

export default ZonesIndex;
