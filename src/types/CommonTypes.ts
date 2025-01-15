export interface ImageType {
  url: string;
  alt: string;
  width?: number;
  height?: number;
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

export interface Subcategory {
  id: string;
  name: string;
  slug: string;
}
//#endregion
