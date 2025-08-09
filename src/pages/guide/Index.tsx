import MainLayout from "@/layouts/MainLayout";
import BreadcrumbsNav from "@/components/common/BreadcrumbsNav";
import HubCard from "@/components/common/HubCard";
import ReadNext from "@/components/common/ReadNext";
import { SITE } from "@/lib/siteConfig";
import { useMemo, useState } from "react";

const GuideIndex = () => {
  const title = "Guides & FAQ du détatouage | Bye-Tatouage";
  const description = "Conseils pratiques après séance, douleur, nombre de séances, crèmes et effets secondaires.";

  const tags = ["Tous", "Techniques", "Soins", "Prix", "Effets secondaires"] as const;
  type Tag = typeof tags[number];
  type RealTag = Exclude<Tag, "Tous">;

  const guides: ReadonlyArray<{ title: string; to: string; excerpt: string; tags: ReadonlyArray<RealTag> }> = [
    { title: "Combien de séances de détatouage ?", to: "/guide/combien-de-seances-detatouage", excerpt: "Facteurs clés et repères pour estimer votre protocole.", tags: ["Techniques", "Prix"] },
    { title: "Soins après détatouage", to: "/guide/soins-apres-detatouage", excerpt: "Routine, produits, erreurs à éviter pour cicatriser vite.", tags: ["Soins"] },
    { title: "Combien de temps pour détatouer ?", to: "/guide/combien-de-temps-detatouage", excerpt: "Délais moyens entre les séances et durée totale.", tags: ["Techniques"] },
    { title: "Comment enlever un tatouage ?", to: "/guide/comment-enlever-un-tatouage", excerpt: "Panorama des options avec leurs limites.", tags: ["Techniques"] },
    { title: "Crème de détatouage : utile ou non ?", to: "/guide/creme-detatouage", excerpt: "Ce que disent les études et les alternatives fiables.", tags: ["Effets secondaires", "Soins"] },
    { title: "Cicatrice de détatouage : prévenir et traiter", to: "/guide/cicatrice-detatouage", excerpt: "Réduire les risques et apaiser la peau.", tags: ["Effets secondaires", "Soins"] },
    { title: "Détatouage et douleur", to: "/guide/detatouage-douleur", excerpt: "À quoi s’attendre et comment mieux tolérer.", tags: ["Effets secondaires"] },
  ] as const;

  const [active, setActive] = useState<Tag>("Tous");
  const filtered = useMemo(() => {
    const filterTag: RealTag | null = active === "Tous" ? null : (active as RealTag);
    return filterTag ? guides.filter((g) => g.tags.includes(filterTag)) : guides;
  }, [active, guides]);

  return (
    <MainLayout title={title} description={description}>
      <header className="grid md:grid-cols-[1fr_320px] gap-6 items-center">
        <div>
          <h1>Guides & FAQ du détatouage</h1>
          <p className="text-muted-foreground mt-2">Des ressources claires et pratiques pour préparer vos séances, comprendre la cicatrisation et éviter les erreurs courantes. Parcourez nos guides thématiques ci-dessous.</p>
        </div>
        <img src="/images/hero-tech.webp" alt="Illustration informative sur les guides de détatouage" className="rounded-xl shadow-soft" loading="lazy" decoding="async" />
      </header>

      <BreadcrumbsNav />

      <div className="mt-6">
        <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filtrer les guides par thème">
          {tags.map((t) => (
            <button
              key={t}
              role="tab"
              aria-selected={active === t}
              onClick={() => setActive(t)}
              className={`px-3 py-1 rounded-md border text-sm ${active === t ? "bg-muted" : "bg-background"}`}
            >
              {t}
            </button>
          ))}
        </div>

        <section className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((g) => (
            <HubCard key={g.to} title={g.title} description={g.excerpt} to={g.to} ctaLabel="Lire le guide" />
          ))}
        </section>
      </div>

      <ReadNext />

      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Guides & FAQ du détatouage",
        description,
        url: `${SITE.baseUrl}/guide`,
      })}</script>
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Accueil", item: SITE.baseUrl },
          { "@type": "ListItem", position: 2, name: "Guides", item: `${SITE.baseUrl}/guide` },
        ],
      })}</script>
    </MainLayout>
  );
};

export default GuideIndex;
