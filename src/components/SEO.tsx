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
  const url = canonical || `${SITE.baseUrl}${pathname}`;
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

  return (
    <Helmet prioritizeSeoTags>
      <title>{pageTitle}</title>
      <link rel="canonical" href={url} />
      <meta name="description" content={description} />

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
      {breadcrumbsJsonLd && (
        <script type="application/ld+json">{JSON.stringify(breadcrumbsJsonLd)}</script>
      )}
    </Helmet>
  );
};

export default SEO;
