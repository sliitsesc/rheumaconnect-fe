import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";
import { type Locale } from "@/config/i18n";
import { getMessage } from "@/lib/utils/messageUtils";
import { getImageUrl } from "@/lib/utils/imageUtils";

type InfoSectionProps = {
  locale: Locale;
  data?: {
    title: string;
    description: string;
    learnMoreText: string;
    image?: {
      url?: string;
    };
  };
};

function InfoSection({ locale, data }: InfoSectionProps) {
  // Use Strapi data if available, otherwise fallback to translations
  const title = data?.title || getMessage(locale, "info.title");
  const description =
    data?.description || getMessage(locale, "info.description");
  const learnMore = data?.learnMoreText || getMessage(locale, "info.learnMore");
  const infoImage = data?.image?.url ? getImageUrl(data.image.url) : "/treatment.jpg";

  return (
    <section className="relative mx-auto py-1 px-[32px] lg:px-0 lg:py-4 gap-[10px] md:gap-0 bg-white md:mt-[50px]">
      <h2 className="mx-auto font-bold text-[32px] leading-[41.66px] text-[#484848] font-[DM Sans] text-center md:text-[32px] md:leading-[48px] md:text-[#484848]">
        {title}
      </h2>
      <div className="container md:pl-[67px] md:pr-[67px] mx-auto flex flex-col md:flex-row items-center gap-[67px] justify-between md:mt-[75px] md:mb-[130px] ">
        <div className="text flex flex-col gap-4 w-full md:w-3/5 min-h-[240px] order-1 md:order-2">
          <p className="text-center font-[DM Sans] font-normal text-[24px] leading-[32dpx] text-[#484848] md:text-left md:text-[24px] md:leading-[32px] md:text-[#9E9E9E]">
            {description}
          </p>
          <Link
            href="/about"
            className="text-center font-[DM Sans] font-medium text-[22px] leading-[32dpx] text-[#484848] md:text-left md:text-[24px] md:leading-[32px] md:text-[#484848] hover:text-blue-500 flex items-center"
          >
            {learnMore}
            <ArrowTopRightOnSquareIcon width={24} className="ml-2" />
          </Link>
        </div>

        <div className="btns flex flex-col gap-6 order-2 md:order-1 md:gap-6">
          <Image
            src={infoImage}
            alt={
              data?.title
                ? `Info image - ${data.title}`
                : "Person looking at a computer"
            }
            width={550}
            height={400}
            className="w-full lg:w-full lg:h-[320px] rounded-lg shadow-md object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default InfoSection;
