import HeroSection from "./components/HeroSection";
import { CommonConcerns } from "./components/ui/CommonConcerns";

export default function Home() {
  return (
    <div>
      <HeroSection selectedLang="en" />
      <CommonConcerns />
    </div>
  );
}
