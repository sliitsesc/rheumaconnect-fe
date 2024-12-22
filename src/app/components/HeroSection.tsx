"use client";

type TranslationKeys = "en" | "si" | "ta";

const translations: Record<
  TranslationKeys,
  { title: string; description: string; button: string }
> = {
  en: {
    title: "Expert backed, FREE medical advice for your Rheumatic Condition",
    description:
      "Everything about your pre-diagnosed rheumatic condition is just a button-click away with RheumaConnect.",
    button: "Get Started",
  },
  si: {
    title: "ඔබගේ රوماتික තත්වය සඳහා නොමිලේ විශේෂඥ උපදෙස්",
    description:
      "සුදුසු විනිශ්චය කර ඇති රوماتික රෝග තත්වය පිළිබඳ සෑම දෙයක්ම RheumaConnect සමඟ පියවරක් අවටය.",
    button: "ආරම්භ කරන්න",
  },
  ta: {
    title: "உங்கள் ருமாட்டிக் நிலைக்கு இலவச மருத்துவ ஆலோசனை பெறவும்",
    description:
      "உங்கள் முன்பே தீர்மானிக்கப்பட்ட ருமாட்டிக் நிலையின் அனைத்தும் RheumaConnect மூலம் கிடைக்கும்.",
    button: "தொடங்கவும்",
  },
};

type HeroSectionProps = {
  selectedLang: TranslationKeys;
};

const HeroSection = ({ selectedLang }: HeroSectionProps) => {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white/80 py-16">
      <div className="container mx-auto px-4 lg:px-16 flex flex-col-reverse lg:flex-row items-center gap-8">
        {/* Text Content */}
        <div className="text-center lg:text-left flex-1 lg:pr-8">
          <h1
            className="text-3xl lg:text-5xl font-bold mb-6 leading-snug"
            style={{ color: "#484848" }}
          >
            {translations[selectedLang].title}
          </h1>
          <p className="text-lg mb-6" style={{ color: "#555555" }}>
            {translations[selectedLang].description}
          </p>
          <button
            className="text-white px-8 py-3 text-lg rounded-md shadow hover:brightness-110 transition"
            style={{ backgroundColor: "#2F7CC4" }}
          >
            {translations[selectedLang].button}
          </button>
        </div>

        {/* Image */}
        <div className="flex-shrink-0 flex-1">
          <img
            src="/doctor.png"
            alt="Doctor providing medical advice"
            className="w-full lg:w-[550px] rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
