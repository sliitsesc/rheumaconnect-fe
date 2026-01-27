import { ImageType } from "./CommonTypes";

export interface LandingPageDataType {
  id: number;
  documentId: string;
  locale?: string;
  heroSection: {
    title: string;
    description: string;
    buttonText: string;
    image?: ImageType;
  };
  infoSection: {
    title: string;
    description: string;
    learnMoreText: string;
    image?: ImageType;
  };
}
