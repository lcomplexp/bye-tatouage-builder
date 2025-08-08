import MainLayout from "@/layouts/MainLayout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <MainLayout title="Accueil" description="Bienvenue sur Bye-Tatouage – site d'information sur le détatouage.">
      <section className="grid md:grid-cols-2 gap-8 items-center">
        <div className="text-left">
          <h1>Le détatouage, expliqué simplement</h1>
          <p className="mt-3 text-lg text-muted-foreground">Techniques, prix, conseils et exemples avant/après. Informations claires et sourcées.</p>
          <div className="mt-6 flex gap-3">
            <Button asChild className="btn-hero">
              <Link to="/detatouage">Découvrir les techniques</Link>
            </Button>
            <Button variant="secondary" asChild>
              <Link to="/prix-detatouage">Voir les prix</Link>
            </Button>
          </div>
        </div>
        <div className="rounded-xl overflow-hidden shadow-elevated">
          <img src="/images/hero-technique.jpg" alt="Illustration laser médical pour détatouage" className="w-full h-auto" />
        </div>
      </section>
    </MainLayout>
  );
};

export default Index;
