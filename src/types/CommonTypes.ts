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
