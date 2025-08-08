import MainLayout from "@/layouts/MainLayout";
import BreadcrumbsNav from "@/components/common/BreadcrumbsNav";
import ReadNext from "@/components/common/ReadNext";
import ToC from "@/components/common/ToC";
import { Link } from "react-router-dom";
import { SITE } from "@/lib/siteConfig";

const GuideComment = () => (
  <MainLayout title="Comment enlever un tatouage" description="Options de détatouage et points clés à connaître (placeholders).">
    <BreadcrumbsNav />
    <header className="mb-4">
      <h1>Comment enlever un tatouage ?</h1>
      <p className="text-muted-foreground mt-1">Le laser est la solution de référence. Le nombre de séances dépend de nombreux facteurs (placeholders).</p>
    </header>
    <div className="grid md:grid-cols-[1fr_280px] gap-8">
      <article>
        <h2 id="options">Options principales</h2>
        <p>Les techniques <Link to="/detatouage/laser" className="underline">laser</Link> (dont <Link to="/detatouage/picoseconde" className="underline">picoseconde</Link> et <Link to="/detatouage/q-switch" className="underline">Q-Switch</Link>) fragmentent l’encre pour une élimination progressive.</p>
        <h2 id="parcours" className="mt-6">Parcours type</h2>
        <p>Plusieurs séances, espacées, avec protection solaire stricte. La douleur est variable, voir <Link to="/guide/detatouage-douleur" className="underline">notre guide</Link>.</p>
        <figure className="mt-6 rounded-xl overflow-hidden shadow-soft">
          <img src="/images/hero-technique.jpg" alt="Illustration d’un faisceau laser visant un pigment" loading="lazy" />
        </figure>
        <p className="text-xs text-muted-foreground mt-6">Ces informations ne remplacent pas un avis médical.</p>
      </article>
      <aside>
        <ToC />
      </aside>
    </div>
    <ReadNext />
    <script type="application/ld+json">{JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Comment enlever un tatouage ?",
      description: "Options de détatouage et points clés à connaître (placeholders).",
      mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE.baseUrl}/guide/comment-enlever-un-tatouage` },
      author: { "@type": "Organization", name: SITE.name },
      publisher: { "@type": "Organization", name: SITE.name }
    })}</script>
  </MainLayout>
);

export default GuideComment;
