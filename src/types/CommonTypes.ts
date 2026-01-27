// strapi image type
export interface ImageType {
  id: string;
  documentId: string;
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  url: string;
}

export interface LocalizedRelation {
  locale: string;
  documentId: string;
}

export interface NavbarType {
  link: LinkType[];
  navbarButton: ButtonType;
  locale?: string;
  localizations?: LocalizedRelation[];
}

export interface LinkType {
  id: string;
  linkText: string;
  linkUrl: string;
}

export interface ButtonType {
  buttonText: string;
  buttonLink?: string;
}

//#region Categories
export interface ApiResponse<T> {
  data: T[];
  meta?: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface ApiResponseSingle<T> {
  data: T;
}

export interface Category {
  id: string;
  documentId: string;
  name: string;
  subtitle: string;
  slug: string;
  subcategories: Subcategory[];
  image: ImageType;
  locale?: string;
  localizations?: LocalizedRelation[];
}

export interface SubcategoryType {
  id: string;
  documentId: string;
  name: string;
  subtitle: string;
  slug: string;
  articles: Article[];
  locale?: string;
  localizations?: LocalizedRelation[];
}

export interface Article {
  id: string;
  documentId: string;
  title: string;
  slug: string;
  description: string;
  categorySlug: string;
  subcategorySlug: string;
  thumbnailImage: ImageType;
  publishedAt?: Date;
  pdf: PDFType;
  locale?: string;
  localizations?: LocalizedRelation[];
}

export interface Subcategory {
  id: string;
  name: string;
  slug: string;
}
//#endregion

export interface PDFType {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string | null;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}
