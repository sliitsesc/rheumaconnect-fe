import HeroSection from "./components/HeroSection";
import ContactCard from "./components/ContactCard";
import MainCategorySection from "./components/MainCategorySection";

export default function Home() {
  return (
    <div>
      <HeroSection selectedLang="en" />
      <ContactCard />
      <MainCategorySection />
    </div>
  );
}
