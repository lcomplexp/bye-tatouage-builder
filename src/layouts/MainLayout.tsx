import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";

const MainLayout = ({ children, title, description }: { children: React.ReactNode; title?: string; description?: string }) => {
  return (
    <div className="min-h-screen font-sans">
      <SEO includeSiteLd title={title} description={description} />
      <Header />
      <main className="container max-w-6xl py-8" role="main">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
