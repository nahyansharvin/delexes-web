// Shared domain types for the Delexes Medical site.

export interface Category {
  /** Two-digit ordinal shown in the UI, e.g. "01". */
  n: string
  /** URL slug used in routing, e.g. "laboratory-equipment". */
  slug: string
  /** Emoji icon shown on the Products page cards. */
  icon: string
  /** Accent color (hex) for the card top-border / underline. */
  accent: string
  title: string
  /** Short one-line blurb used on the Home category grid. */
  short: string
  /** Longer description used on the Products page and category header. */
  description: string
}

export interface Product {
  name: string
  description: string
  /** Image URL, or null when no image is available yet. */
  image: string | null
}

export interface Spec {
  /** Spec label, e.g. "Display". */
  k: string
  /** Spec value, e.g. "To be confirmed". */
  v: string
}

export interface ValueProp {
  /** Ordinal badge, e.g. "01". */
  k: string
  t: string
  d: string
}

export interface ContactInfo {
  /** Short icon label, e.g. "TEL". */
  ic: string
  label: string
  value: string
}

/** A single tile in a category's sub-category hub (e.g. General Consumables). */
export interface SubCategory {
  /** URL slug used in routing, e.g. "wound-care-materials". */
  slug: string
  title: string
  /** Blurb shown on the sub-category tile and on its own listing page header. */
  description: string
  /** Tile image, or null when no image is available yet. */
  image: string | null
  /** Optional catalogue PDF path; when set, a download CTA is shown. */
  cataloguePdf: string | null
  featured: Product[]
  otherItems: string[]
}

/** A full category detail record (featured + other items). */
export interface CategoryDetail {
  slug: string
  title: string
  description: string
  /** Optional catalogue PDF path; when set, a download CTA is shown. */
  cataloguePdf: string | null
  featured: Product[]
  otherItems: string[]
  /**
   * When present, this category is a hub of sub-categories (e.g. General
   * Consumables): the listing page shows these tiles instead of `featured` /
   * `otherItems`, and each tile links to its own listing page.
   */
  subCategories?: SubCategory[]
}
