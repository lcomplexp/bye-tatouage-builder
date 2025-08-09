import { Link } from "react-router-dom";
import { NAV } from "@/lib/siteConfig";

const Footer = () => {
  return (
    <footer className="mt-16 border-t bg-background">
      <div className="container py-10 grid gap-6 md:grid-cols-3">
        <div>
          <h3 className="text-sm font-semibold text-primary mb-3">Navigation</h3>
          <ul className="space-y-2 text-sm">
            {NAV.footer.navigation.map((item) => (
              <li key={item.href}>
                <Link to={item.href} className="hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-primary mb-3">Légales</h3>
          <ul className="space-y-2 text-sm">
            {NAV.footer.legal.map((item) => (
              <li key={item.href}>
                <Link to={item.href} className="hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="text-muted-foreground text-sm mt-4">© {new Date().getFullYear()} Bye-Tatouage. Tous droits réservés.</p>
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
