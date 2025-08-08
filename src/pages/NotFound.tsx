import MainLayout from "@/layouts/MainLayout";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404: route introuvable", location.pathname);
  }, [location.pathname]);

  return (
    <MainLayout title="Page introuvable" description="Erreur 404 – page non trouvée.">
      <div className="min-h-[50vh] grid place-items-center">
        <div className="text-center">
          <h1>404</h1>
          <p className="text-lg text-muted-foreground mb-4">Oups, cette page n’existe pas.</p>
          <Link to="/" className="underline">Retour à l’accueil</Link>
        </div>
      </div>
    </MainLayout>
  );
};

export default NotFound;
