import HeroSection from "./components/HeroSection";
import MainCategorySection from "./components/MainCategorySection";

export default function Home() {
  return (
    <div>
      <HeroSection selectedLang="en" />
      <MainCategorySection />
    </div>
  );
}
