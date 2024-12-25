import HeroSection from "./components/HeroSection";
import AZCards from "@/app/components/AZCards";
import translations from "@/app/data/translations.json";
import { Translations } from "@/app/types";

const translationsData: Translations = translations;

export default function Home() {
    return (
        <div>
            <HeroSection selectedLang="en" />
            <AZCards azCards={translationsData["si"]["az-cards"]} />
        </div>
    );
}
