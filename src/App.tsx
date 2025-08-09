import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import DetatouageIndex from "./pages/detatouage/Index";
import Laser from "./pages/detatouage/Laser";
import Picoseconde from "./pages/detatouage/Picoseconde";
import QSwitch from "./pages/detatouage/QSwitch";
import PrixIndex from "./pages/prix-detatouage/Index";
import GuideIndex from "./pages/guide/Index";
import GuideSeances from "./pages/guide/CombienDeSeances";
import GuideDouleur from "./pages/guide/DetatouageDouleur";
import GuideTemps from "./pages/guide/CombienDeTempsDetatouage";
import GuideComment from "./pages/guide/CommentEnleverUnTatouage";
import GuideCicatrice from "./pages/guide/CicatriceDetatouage";
import GuideSoins from "./pages/guide/SoinsApresDetatouage";
import GuideCreme from "./pages/guide/CremeDetatouage";
import ZonesIndex from "./pages/zones/Index";
import ZonesSourcils from "./pages/zones/Sourcils";
import ZonesMP from "./pages/zones/MaquillagePermanent";
import AvantApresIndex from "./pages/avant-apres/Index";
import AvantApresBras from "./pages/avant-apres/Bras";
import RessourcesIndex from "./pages/ressources/Index";
import KitSoins from "./pages/ressources/KitSoinsDetatouage";
import BlogIndex from "./pages/blog/Index";
import BlogTechniques from "./pages/blog/TechniquesLaser";
import BlogPrix from "./pages/blog/PrixFourchettes";
import BlogSoins from "./pages/blog/SoinsApres";
import APropos from "./pages/APropos";
import Contact from "./pages/Contact";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/detatouage" element={<DetatouageIndex />} />
            <Route path="/detatouage/laser" element={<Laser />} />
            <Route path="/detatouage/picoseconde" element={<Picoseconde />} />
            <Route path="/detatouage/q-switch" element={<QSwitch />} />
            <Route path="/prix-detatouage" element={<PrixIndex />} />
            <Route path="/guide" element={<GuideIndex />} />
            <Route path="/guide/combien-de-seances-detatouage" element={<GuideSeances />} />
            <Route path="/guide/detatouage-douleur" element={<GuideDouleur />} />
            <Route path="/guide/combien-de-temps-detatouage" element={<GuideTemps />} />
            <Route path="/guide/comment-enlever-un-tatouage" element={<GuideComment />} />
            <Route path="/guide/cicatrice-detatouage" element={<GuideCicatrice />} />
            <Route path="/guide/soins-apres-detatouage" element={<GuideSoins />} />
            <Route path="/guide/creme-detatouage" element={<GuideCreme />} />
            <Route path="/zones" element={<ZonesIndex />} />
            <Route path="/zones/sourcils" element={<ZonesSourcils />} />
            <Route path="/zones/maquillage-permanent" element={<ZonesMP />} />
            <Route path="/avant-apres" element={<AvantApresIndex />} />
            <Route path="/avant-apres/bras" element={<AvantApresBras />} />
            <Route path="/ressources" element={<RessourcesIndex />} />
            <Route path="/ressources/kit-soins-detatouage" element={<KitSoins />} />
            <Route path="/blog" element={<BlogIndex />} />
            <Route path="/blog/techniques-laser" element={<BlogTechniques />} />
            <Route path="/blog/prix-fourchettes" element={<BlogPrix />} />
            <Route path="/blog/soins-apres" element={<BlogSoins />} />
            <Route path="/a-propos" element={<APropos />} />
            <Route path="/contact" element={<Contact />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
      </BrowserRouter>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
