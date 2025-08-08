import MainLayout from "@/layouts/MainLayout";
import BreadcrumbsNav from "@/components/common/BreadcrumbsNav";

const Laser = () => {
  return (
    <MainLayout title="Détatouage au laser" description="Présentation du détatouage au laser.">
      <BreadcrumbsNav />
      <h1>Détatouage au laser</h1>
      <p className="text-muted-foreground">Chapo placeholder – TODO contenu.</p>
      <section className="mt-6 rounded-xl overflow-hidden shadow-soft">
        <img src="/images/hero-technique.jpg" alt="Laser médical – détatouage" />
      </section>
    </MainLayout>
  );
};

export default Laser;
