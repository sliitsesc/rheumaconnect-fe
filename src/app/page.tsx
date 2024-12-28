import HeroSection from "./components/HeroSection";
import CardsSection from "./components/CardsSection";

export default function Home() {
  return (
    <div>
      <HeroSection selectedLang="en" />
      <CardsSection />
    </div>
  );
}
