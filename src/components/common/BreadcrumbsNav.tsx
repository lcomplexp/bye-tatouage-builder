import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link, useLocation } from "react-router-dom";

const toTitle = (slug: string) => slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

const BreadcrumbsNav = () => {
  const { pathname } = useLocation();
  const segments = pathname.split("/").filter(Boolean);
  const paths = segments.map((seg, idx) => ({
    name: toTitle(seg.normalize("NFD").replace(/[\u0300-\u036f]/g, "")),
    href: "/" + segments.slice(0, idx + 1).join("/"),
  }));

  return (
    <nav aria-label="Fil d'Ariane" className="mb-4">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/">Accueil</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          {paths.map((p, i) => (
            <>
              <BreadcrumbSeparator key={`sep-${p.href}`} />
              <BreadcrumbItem key={p.href}>
                {i === paths.length - 1 ? (
                  <BreadcrumbPage>{p.name}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink asChild>
                    <Link to={p.href}>{p.name}</Link>
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
            </>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    </nav>
  );
};

export default BreadcrumbsNav;
