import ContactCard from "./components/ContactCard";
import MainCategorySection from "./components/MainCategorySection";
import HeroSection from "./components/HeroSection/HeroSection";
import InfoSection from "./components/InfoSection/InfoSection";
import { getLocale } from "@/lib/utils/localeUtils";
import { getData } from "@/lib/helpers/dataFetchHelper";
import { API_ENDPOINTS } from "@/config/endpoints";
import { ApiResponseSingle } from "@/types/CommonTypes";
import { LandingPageDataType } from "@/types/LandingPageDataType";

export default async function Home() {
  const locale = await getLocale();

  const landingPageResponse: ApiResponseSingle<LandingPageDataType> =
    await getData(API_ENDPOINTS.LANDING_PAGE, { locale });

  const landingPage = landingPageResponse?.data;

  return (
    <>
      <HeroSection locale={locale} data={landingPage?.heroSection} />
      <InfoSection locale={locale} data={landingPage?.infoSection} />
      <MainCategorySection locale={locale} />
      <ContactCard locale={locale} />
    </>
  );
}
