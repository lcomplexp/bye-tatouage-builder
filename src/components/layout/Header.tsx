import { NAV_ITEMS, SITE } from "@/lib/siteConfig";
import { Link, useLocation } from "react-router-dom";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";

const Header = () => {
  const { pathname } = useLocation();
  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b">
      <div className="container flex items-center justify-between py-3">
        <Link to="/" className="flex items-center gap-3" aria-label={`${SITE.name} – Accueil`}>
          <div className="h-9 w-9 rounded-lg bg-secondary flex items-center justify-center shadow-soft" aria-hidden>
            <span className="text-secondary-foreground font-heading font-bold">BT</span>
          </div>
          <span className="font-heading text-lg tracking-tight text-primary">{SITE.name}</span>
        </Link>
        <nav aria-label="Navigation principale">
          <NavigationMenu>
            <NavigationMenuList>
              {NAV_ITEMS.map((item) => (
                <NavigationMenuItem key={item.href}>
                  <NavigationMenuLink asChild>
                    <Link to={item.href} className={`px-3 py-2 rounded-md hover:bg-muted text-sm font-medium ${pathname === item.href ? 'underline' : ''}`}>
                      {item.label}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>
      </div>
    </header>
  );
};

export default Header;
