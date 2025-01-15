// strapi image type
export interface ImageType {
  id: string;
  documentId: string;
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
}

export interface NavbarType {
  link: LinkType[];
  navbarButton: ButtonType[];
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
}

export interface SubcategoryType {
  id: string;
  documentId: string;
  name: string;
  subtitle: string;
  slug: string;
  articles: Article[];
}

export interface Article {
  id: string;
  documentId: string;
  title: string;
  slug: string;
  description: string;
  category: string;
  subcategory: string;
  thumbnailImage: ImageType;
}

export interface Subcategory {
  id: string;
  name: string;
  slug: string;
}
//#endregion
