export interface ImageType {
  url: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface NavbarDataType {
  link: NavbarLinkType[];
  navbarButton: ButtonType;
}

export interface NavbarLinkType {
  linkText: string;
  linkUrl?: string | null;
}

export interface ButtonType {
  buttonText: string;
  buttonLink?: string;
}

//#region Categories
export interface ApiResponse<T> {
  data: T[];
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
