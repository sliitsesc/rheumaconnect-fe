import AZCards from "@/app/components/AZCards";
import translations from "@/data/translations.json";
import { Translations } from "@/app/types";
import ContactCard from "./components/ContactCard";
import MainCategorySection from "./components/MainCategorySection";
import HeroSection from "./components/HeroSection/HeroSection";
const translationsData: Translations = translations;

// fetch data from API

export default async function Home() {
  return (
    <>
      <HeroSection selectedLang="en" />
      {/* <ContactCard /> */}
      <MainCategorySection />
      <ContactCard />
      <AZCards azCards={translationsData["en"]["az-cards"]} />
    </>
  );
}
