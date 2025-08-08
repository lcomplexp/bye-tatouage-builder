/**
 * Types métiers envisagés (lecture seule pour V1)
 *
 * Interfaces volontairement minimalistes; champs décrits en TSDoc pour usage futur.
 */

/**
 * Représente un média (image/vidéo).
 * @property id - UUID
 * @property url - URL du fichier
 * @property alt - Texte alternatif FR descriptif
 * @property caption - Légende facultative
 * @property width - Largeur en px
 * @property height - Hauteur en px
 */
export interface MediaItem {
  id?: string;
  url: string;
  alt?: string;
  caption?: string;
  width?: number;
  height?: number;
}

/**
 * Catégorie de contenu.
 * @property id - UUID
 * @property slug - Slug kebab-case sans accents
 * @property name - Nom FR
 * @property description - Description courte
 */
export interface Category {
  id?: string;
  slug: string;
  name: string;
  description?: string;
}

/**
 * Tag libre.
 * @property id - UUID
 * @property slug - Slug kebab-case
 * @property name - Nom FR
 */
export interface Tag {
  id?: string;
  slug: string;
  name: string;
}

/**
 * Produit affilié.
 * @property id - UUID
 * @property name - Nom du produit
 * @property slug - Slug
 * @property image - Visuel principal
 * @property url - Lien vers Amazon (placeholder en V1)
 * @property price - Prix indicatif (string)
 */
export interface Product {
  id?: string;
  name: string;
  slug: string;
  image?: MediaItem;
  url?: string;
  price?: string;
}

/**
 * Article/Guide/Actu.
 * @property id - UUID
 * @property title - Titre
 * @property slug - Slug
 * @property excerpt - Chapo
 * @property cover - Image de couverture
 * @property category - Catégorie principale
 * @property tags - Liste de tags
 * @property publishedAt - Date publication
 * @property updatedAt - Date MAJ
 * @property content - Markdown/HTML (placeholder fichiers locaux en V1)
 */
export interface Post {
  id?: string;
  title: string;
  slug: string;
  excerpt?: string;
  cover?: MediaItem;
  category?: Category;
  tags?: Tag[];
  publishedAt?: string;
  updatedAt?: string;
  content?: string;
}
