import MainLayout from "@/layouts/MainLayout";
import ReadNext from "@/components/common/ReadNext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const posts = [
  { slug: "/blog/techniques-laser", title: "Techniques laser : panorama rapide", excerpt: "Laser, picoseconde, Q-Switch – principes et différences.", tags: ["techniques"] },
  { slug: "/blog/prix-fourchettes", title: "Prix du détatouage : fourchettes", excerpt: "Repères de coûts indicatifs selon tailles.", tags: ["prix"] },
  { slug: "/blog/soins-apres", title: "Soins après une séance : l’essentiel", excerpt: "Gestes simples pour la cicatrisation.", tags: ["soins"] },
];

const BlogIndex = () => {
  const itemListLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: posts.map((p, i) => ({ "@type": "ListItem", position: i + 1, name: p.title, url: `https://bye-tatouage.com${p.slug}` })),
  };
  return (
    <MainLayout title="Blog" description="Articles de démonstration : techniques, prix, soins.">
      <h1>Blog</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {posts.map((p) => (
          <Card key={p.slug} className="shadow-soft">
            <CardHeader>
              <CardTitle className="text-base">
                <Link to={p.slug} className="hover:underline">{p.title}</Link>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{p.excerpt}</p>
              <div className="mt-3 flex gap-2">
                {p.tags.map((t) => (
                  <Badge key={t} variant="secondary">{t}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <ReadNext />
      <script type="application/ld+json">{JSON.stringify(itemListLd)}</script>
    </MainLayout>
  );
};

export default BlogIndex;

