import Image from "next/image";
import Link from "next/link";
import data from "@/data/concernsData.json";

export const CommonConcerns = () => {
  return (
    <div className="w-full bg-white space-y-8 md:space-y-20">
      <h1 className="font-extrabold text-[32px] md:text-[42px] leading-[55px] text-[#484848] text-center">
        Common Health Concerns
      </h1>
      <div className="grid md:grid-cols-2 gap-5 px-8 md:px-16">
        {data.concerns.map((item, i) => (
          <ConcernItem key={i} item={item} />
        ))}
      </div>
    </div>
  );
};

const ConcernItem = ({
  item,
}: {
  item: {
    title: string;
    link: string;
    icon_path: string;
    icon_width: number;
    icon_height: number;
  };
}) => {
  return (
    <Link href={item.link}>
      <div className="group w-full flex justify-between items-center gap-2 md:gap-5 bg-white border-[3px] border-[#E7F2FC] rounded-[14px] p-5 md:px-5 hover:cursor-pointer hover:bg-[#2F7CC4] hover:border-transparent transition-colors">
        <div className="min-w-[68px] flex justify-center">
          <Image
            src={item.icon_path}
            alt={item.title}
            width={item.icon_width}
            height={item.icon_height}
            className="[filter:invert(51%)_sepia(98%)_saturate(436%)_hue-rotate(176deg)_brightness(86%)_contrast(87%)] group-hover:[filter:brightness(0)_invert(1)] transition-[filter] duration-200 scale-75 md:scale-100"
          />
        </div>

        <p className="flex-1 text-[#484848] text-lg md:text-2xl font-semibold leading-8 group-hover:text-white transition-colors">
          {item.title}
        </p>

        <Image
          src="icon_arrow.svg"
          alt="icon_arrow"
          width={0}
          height={0}
          className="[filter:brightness(0)_saturate(100%)_invert(24%)_sepia(14%)_saturate(6%)_hue-rotate(343deg)_brightness(97%)_contrast(82%)] group-hover:[filter:brightness(0)_invert(1)] transition-[filter] duration-200 w-11 h-8 scale-75 md:scale-100"
        />
      </div>
    </Link>
  );
};
