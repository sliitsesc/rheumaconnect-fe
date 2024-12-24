import HeroSection from "./components/HeroSection";
import MainCatSection from "./components/MainCatSection";

export default function Home() {
  return (
    <div>
      <HeroSection selectedLang="en" />
      <MainCatSection />
    </div>
  );
}
