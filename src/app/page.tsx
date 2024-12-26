import HeroSection from "./components/HeroSection";
import ContactCard from "./components/ContactCard";

export default function Home() {
  return (
    <div>
      <HeroSection selectedLang="en" />
      <ContactCard />
    </div>
  );
}
