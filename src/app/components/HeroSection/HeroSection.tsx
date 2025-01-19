import Image from "next/image";
import translations from "../../../data/translations.json";

type TranslationKeys = keyof typeof translations;

type HeroSectionProps = {
  selectedLang: TranslationKeys;
};

const HeroSection = ({ selectedLang }: HeroSectionProps) => {
  return (
    <section className="bg-gradient-to-b from-blue-100 to-white py-16">
      <div className="container mx-auto px-4 lg:px-16 flex flex-col-reverse lg:flex-row items-center gap-8">
        <div className="text-center lg:text-left flex-1 lg:pr-8">
          <h1
            className="text-3xl lg:text-5xl font-bold mb-6 leading-snug"
            style={{ color: "#484848" }}>
            {translations[selectedLang].title}
          </h1>
          <p className="text-lg mb-6" style={{ color: "#555555" }}>
            {translations[selectedLang].description}
          </p>
          <button className="text-white px-8 py-3 text-lg rounded-md shadow hover:brightness-110 transition bg-[#2F7CC4]">
            {translations[selectedLang].button}
          </button>
        </div>
        <div className="flex-shrink-0 flex-1">
          <Image
            src="/doctor.png"
            alt="Doctor providing medical advice"
            width={550}
            height={550}
            className="w-full lg:w-full lg:h-[445px] rounded-lg shadow-md object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
