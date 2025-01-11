import HeroSection from "./components/HeroSection";
import CardsSection from "./components/CardsSection";
import AZCards from "@/app/components/AZCards";
import translations from "@/app/data/translations.json";
import { Translations } from "@/app/types";
import ContactCard from "./components/ContactCard";
import MainCategorySection from "./components/MainCategorySection";
const translationsData: Translations = translations;

// fetch data from API

export default async function Home() {
  return (
    <div>
      <HeroSection selectedLang="en" />
      <CardsSection />
      <ContactCard />
      <MainCategorySection />
      <AZCards azCards={translationsData["en"]["az-cards"]} />
    </div>
  );
}
