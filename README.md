# Bye-Tatouage – Documentation projet

Ce dépôt contient le site d’information SEO-first de la marque « Bye‑Tatouage » (fr-FR).

## Arborescence
- /src
  - /components
    - /common (FAQ, GalleryInline, TableCompare, CardProduit, BreadcrumbsNav)
    - /layout (Header, Footer)
    - SEO.tsx
  - /layouts
    - MainLayout.tsx
  - /pages (toutes les routes listées ci-dessous)
  - /lib (types métier, config site, supabaseClient placeholder)
  - /content (placeholders JSON)
- /public/images (images placeholders IA)
- /public/sitemap.xml, /public/robots.txt

## Design system
- Couleurs (AA+):
  - Primary: #00334C (HSL 200 100% 15%)
  - Secondary: #4C849B (HSL 197 34% 45%)
  - Accent: #DFA861 (HSL 34 66% 63%)
  - Neutres: définis en variables CSS (neutral-950…100)
- Typo: Manrope (titres), Inter (texte). Import Google Fonts dans index.html (display=swap).
- Échelle: H1 40–44px, H2 30–34px, H3 22–24px, body 16–18px, boutons 16px.
- Tokens: radius 15px, ombres douces (shadow-soft/elevated), grille 8px, max-width lecture 72ch.
- Dark mode: non requis en V1.

Tout est défini en variables HSL dans src/index.css et exposé à Tailwind via tailwind.config.ts. Utilisez les classes utilitaires (ex: text-primary, bg-accent) et les familles font-heading / font-sans. Évitez les couleurs en dur.

## Composants réutilisables
- Button/Badge/Card/Table/Tabs/Accordion/Breadcrumb (shadcn déjà présents)
- Créés: FAQ (schema FAQPage), ToC (sommaire auto H2/H3), GalleryInline (lightbox simple), CardProduit, TableCompare, BreadcrumbsNav

## Layouts & Templates
- MainLayout: Header sticky (mega-menu simple), Footer (mentions + disclaimer), SEO par défaut (react-helmet-async), Organisation + WebSite JSON‑LD.
- Silo Technique/Zone: H1 + chapo + héro, ToC, GalleryInline, FAQ, Breadcrumbs.
- Prix: Tableau comparatif + ItemList JSON‑LD.
- Guide/FAQ long-form: article avec ToC et FAQ (placeholders).
- Avant/Après: grille + ImageGallery JSON‑LD (placeholder données).
- Ressources/Kit soins: cartes produits avec boutons externes (# placeholders).
- Blog Post: à créer sur base du template Guide (voir instructions ci-dessous).

## Navigation & Routes
Pages créées (FR, vides « TODO contenu »):
- /, /detatouage/, /detatouage/laser/, /detatouage/picoseconde/
- /prix-detatouage/
- /guide/, /guide/combien-de-seances-detatouage/, /guide/detatouage-douleur/
- /zones/, /zones/sourcils/, /zones/maquillage-permanent/
- /avant-apres/, /avant-apres/bras/
- /ressources/, /ressources/kit-soins-detatouage/
- /blog/, /a-propos/, /contact/

## SEO technique
- Titres: « {{Titre}} | Bye‑Tatouage » via SEO.tsx
- Meta description placeholder, canonical absolu, Open Graph/Twitter
- Données structurées: Organization + WebSite global, FAQ/ItemList/ImageGallery contextuels
- robots.txt + sitemap.xml présents
- <html lang="fr">

## Ajouter une page
1) Créez le fichier dans src/pages/mon-chemin/Index.tsx (ou MonArticle.tsx).
2) Utilisez MainLayout et, si article/guide, ajoutez ToC et FAQ si nécessaire.
3) Ajoutez la route dans src/App.tsx (import + <Route path="/mon-chemin" … />).
4) Placez les images dans /public/images et utilisez des ALT FR descriptifs.

Exemple minimal:
```
import MainLayout from "@/layouts/MainLayout";

export default function MaPage() {
  return (
    <MainLayout title="Titre page" description="Meta description.">
      <h1>Titre page</h1>
      <p>TODO contenu…</p>
    </MainLayout>
  );
}
```

## Placeholders à remplacer
- Images: /public/images (og-default.jpg, hero-*.jpg, gallery-*.jpg, product-*.jpg)
- Tableaux prix: src/pages/prix-detatouage/Index.tsx
- FAQ: composant src/components/common/FAQ.tsx (items: {q,a})
- Produits: src/pages/ressources/Index.tsx (ou src/content/products.json)

## Supabase (plus tard)
- Client utilitaire placeholder: src/lib/supabaseClient.ts
- Types: src/lib/types.ts (Post, Category, Tag, MediaItem, Product)
- Quand l’intégration Supabase est activée dans Lovable, importez le client depuis "@/integrations/supabase/client" et remplacez le placeholder.

## Bonnes pratiques
- Toujours utiliser les tokens (couleurs HSL, radius, ombres).
- ALT FR descriptifs, images lazy, tailles adaptées.
- Pas de formulaires ni de tracking en V1.
