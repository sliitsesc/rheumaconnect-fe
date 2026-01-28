import Image from "next/image";
import Link from "next/link";
import { type Locale } from "@/config/i18n";
import { getMessage } from "@/lib/utils/messageUtils";
import { getImageUrl } from "@/lib/utils/imageUtils";

type HeroSectionProps = {
  locale: Locale;
  data?: {
    title: string;
    description: string;
    buttonText: string;
    image?: {
      url?: string;
    };
  };
};

const HeroSection = ({ locale, data }: HeroSectionProps) => {
  // Use Strapi data if available, otherwise fallback to translations
  const title = data?.title || getMessage(locale, "hero.title");
  const description =
    data?.description || getMessage(locale, "hero.description");
  const button = data?.buttonText || getMessage(locale, "hero.button");
  const heroImage = data?.image?.url
    ? getImageUrl(data.image.url)
    : "/doctor.png";

  return (
    <section
      id="home"
      className="bg-gradient-to-b from-blue-100 to-white py-16"
    >
      <div className="container mx-auto px-4 lg:px-16 flex flex-col-reverse lg:flex-row items-center gap-8">
        <div className="text-center lg:text-left flex-1 lg:pr-8">
          <h1
            className="text-3xl lg:text-5xl font-bold mb-6 leading-snug"
            style={{ color: "#484848" }}
          >
            {title}
          </h1>
          <p className="text-lg mb-6" style={{ color: "#555555" }}>
            {description}
          </p>
          <Link href="/categories">
            <button className="text-white px-8 py-3 text-lg rounded-md shadow hover:brightness-110 transition bg-[#2F7CC4]">
              {button}
            </button>
          </Link>
        </div>
        <div className="flex-shrink-0 flex-1">
          <Image
            src={heroImage}
            alt={
              data?.title
                ? `Hero image - ${data.title}`
                : "Doctor providing medical advice"
            }
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
