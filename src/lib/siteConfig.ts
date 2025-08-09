const indexable =
  typeof process !== "undefined" &&
  (process as any).env &&
  (process as any).env.NEXT_PUBLIC_INDEXABLE === "true";

export const SITE = {
  name: "Bye-Tatouage",
  domain: "bye-tatouage.com",
  baseUrl: "https://bye-tatouage.com",
  description: "Informations fiables et accessibles sur le détatouage : techniques, prix, conseils.",
  indexable,
};

export const NAV = {
  main: [
    { label: "Techniques", href: "/detatouage" },
    { label: "Prix", href: "/prix-detatouage" },
    { label: "Guides", href: "/guide" },
    { label: "Zones", href: "/zones" },
    { label: "Avant/Après", href: "/avant-apres" },
    { label: "Ressources", href: "/ressources" },
    { label: "Blog", href: "/blog" },
  ],
  footer: {
    navigation: [
      { label: "Techniques", href: "/detatouage" },
      { label: "Prix", href: "/prix-detatouage" },
      { label: "Guides", href: "/guide" },
      { label: "Zones", href: "/zones" },
      { label: "Avant/Après", href: "/avant-apres" },
      { label: "Ressources", href: "/ressources" },
      { label: "Blog", href: "/blog" },
    ],
    legal: [
      { label: "À propos", href: "/a-propos" },
      { label: "Contact", href: "/contact" },
      // { label: "Mentions légales", href: "/mentions-legales" }, // Ajouter si présent
      // { label: "Politique de confidentialité", href: "/politique-de-confidentialite" }, // Ajouter si présent
    ],
  },
} as const;
