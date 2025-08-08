import MainLayout from "@/layouts/MainLayout";
import BreadcrumbsNav from "@/components/common/BreadcrumbsNav";

const Picoseconde = () => {
  return (
    <MainLayout title="Détatouage picoseconde" description="Présentation du laser picoseconde.">
      <BreadcrumbsNav />
      <h1>Laser picoseconde</h1>
      <p className="text-muted-foreground">Chapo placeholder – TODO contenu.</p>
      <section className="mt-6 rounded-xl overflow-hidden shadow-soft">
        <img src="/images/hero-technique.jpg" alt="Laser picoseconde – illustration" />
      </section>
    </MainLayout>
  );
};

export default Picoseconde;
