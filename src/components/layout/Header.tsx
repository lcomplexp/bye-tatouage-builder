import { NAV, SITE } from "@/lib/siteConfig";
import { Link, useLocation } from "react-router-dom";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

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

        <nav className="hidden md:block" aria-label="Navigation principale">
          <NavigationMenu>
            <NavigationMenuList>
              {NAV.main.map((item) => (
                <NavigationMenuItem key={item.href}>
                  <NavigationMenuLink asChild>
                    <Link
                      to={item.href}
                      className={`px-3 py-2 rounded-md hover:bg-muted text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background ${pathname === item.href ? 'underline' : ''}`}
                      aria-current={pathname === item.href ? 'page' : undefined}
                    >
                      {item.label}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button aria-label="Ouvrir le menu" className="p-2 rounded-md border hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background">
                <Menu className="h-5 w-5" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <nav className="mt-6" aria-label="Navigation mobile">
                <ul className="grid gap-2">
                  {NAV.main.map((item) => (
                    <li key={item.href}>
                      <SheetClose asChild>
                        <Link
                          to={item.href}
                          className={`block px-3 py-3 rounded-lg text-sm font-medium hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background ${pathname === item.href ? 'underline' : ''}`}
                          aria-current={pathname === item.href ? 'page' : undefined}
                        >
                          {item.label}
                        </Link>
                      </SheetClose>
                    </li>
                  ))}
                </ul>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
