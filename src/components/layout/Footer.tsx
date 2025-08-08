import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-16 border-t bg-background">
      <div className="container py-10 grid gap-6 md:grid-cols-3">
        <div>
          <h3 className="text-sm font-semibold text-primary mb-3">Navigation</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/a-propos" className="hover:underline">À propos</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
            <li><Link to="/blog" className="hover:underline">Blog</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-primary mb-3">Mentions</h3>
          <p className="text-muted-foreground text-sm">© {new Date().getFullYear()} Bye-Tatouage. Tous droits réservés.</p>
          <p className="text-muted-foreground text-sm mt-2">Ce site ne remplace pas un avis médical. Consultez un professionnel de santé.</p>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-primary mb-3">Contact</h3>
          <p className="text-sm"><a href="mailto:contact@bye-tatouage.com" className="hover:underline">contact@bye-tatouage.com</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
