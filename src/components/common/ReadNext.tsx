import { Link, useLocation } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";

interface RelatedMap { [slug: string]: string[] }

const slugToTitle = (slug: string) =>
  slug
    .split("/")
    .filter(Boolean)
    .map((s) => s.replace(/-/g, " ").normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\b\w/g, (c) => c.toUpperCase()))
    .join(" · ");

const ReadNext = ({ className = "" }: { className?: string }) => {
  const { pathname } = useLocation();
  const [map, setMap] = useState<RelatedMap | null>(null);

  useEffect(() => {
    fetch("/data/related.json")
      .then((r) => r.json())
      .then(setMap)
      .catch(() => setMap(null));
  }, []);

  const key = useMemo(() => pathname.replace(/^\//, "").replace(/\/$/, ""), [pathname]);
  const items = map?.[key];
  if (!items?.length) return null;

  return (
    <section className={`mt-10 rounded-lg border p-5 shadow-soft ${className}`} aria-label="À lire ensuite">
      <h2 className="text-lg font-semibold">À lire ensuite</h2>
      <ul className="mt-3 grid sm:grid-cols-3 gap-3 text-sm">
        {items.map((slug) => (
          <li key={slug}>
            <Link className="block rounded-md bg-muted px-3 py-2 hover:underline" to={`/${slug}`}>
              {slugToTitle(slug)}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ReadNext;
