import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { SITE } from "@/lib/siteConfig";

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  canonical?: string;
  type?: "website" | "article";
  breadcrumbsJsonLd?: any;
  includeSiteLd?: boolean;
}

export const SEO = ({
  title,
  description = SITE.description,
  image = "/images/og-default.jpg",
  canonical,
  type = "website",
  breadcrumbsJsonLd,
  includeSiteLd = false,
}: SEOProps) => {
  const { pathname } = useLocation();
  const normalizePath = (p: string) => (p === "/" ? "/" : p.replace(/\/$/, ""));
  const path = normalizePath(pathname);
  const makeCanonical = (u?: string) => {
    const href = u || `${SITE.baseUrl}${path}`;
    return href === SITE.baseUrl || href === `${SITE.baseUrl}/` ? SITE.baseUrl : href.replace(/\/$/, "");
  };
  const url = makeCanonical(canonical);
  const pageTitle = title ? `${title} | ${SITE.name}` : SITE.name;

  const orgLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    url: SITE.baseUrl,
    logo: `${SITE.baseUrl}/images/og-default.jpg`,
  };

  const webSiteLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: SITE.baseUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE.baseUrl}/recherche?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  // BreadcrumbList JSON-LD (auto)
  const segments = path.split("/").filter(Boolean);
  const itemListElement = [
    { "@type": "ListItem", position: 1, name: "Accueil", item: SITE.baseUrl },
    ...segments.map((seg, idx) => {
      const href = `${SITE.baseUrl}/${segments.slice(0, idx + 1).join("/")}`;
      const name = seg.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
      return { "@type": "ListItem", position: idx + 2, name, item: href };
    }),
  ];
  const breadcrumbsLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement,
  };

  return (
    <Helmet prioritizeSeoTags>
      <title>{pageTitle}</title>
      <link rel="canonical" href={url} />
      <meta name="description" content={description} />
      {!SITE.indexable && <meta name="robots" content="noindex,nofollow" />}

      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {includeSiteLd && (
        <script type="application/ld+json">{JSON.stringify(orgLd)}</script>
      )}
      {includeSiteLd && (
        <script type="application/ld+json">{JSON.stringify(webSiteLd)}</script>
      )}
      {(breadcrumbsJsonLd || breadcrumbsLd) && (
        <script type="application/ld+json">{JSON.stringify(breadcrumbsJsonLd || breadcrumbsLd)}</script>
      )}
    </Helmet>
  );
};

export default SEO;
