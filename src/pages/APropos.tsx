import MainLayout from "@/layouts/MainLayout";
import ReadNext from "@/components/common/ReadNext";

const APropos = () => (
  <MainLayout title="À propos" description="La marque Bye-Tatouage – placeholder.">
    <h1>À propos</h1>
    <p className="text-muted-foreground">Marque, mission et disclaimer médical. Ce site ne remplace pas un avis médical.</p>
    <ReadNext />
  </MainLayout>
);

export default APropos;
