import Image from "next/image";
import Link from "next/link";
import data from "@/data/concernsData.json";

export const CommonConcerns = () => {
  return (
    <div className="w-full bg-white space-y-10">
      <h1 className="font-extrabold text-[32px] md:text-[42px] leading-[55px] text-[#484848] text-center">
        Common Health Concerns
      </h1>
      <div className="grid md:grid-cols-2 gap-5 p-5">
        {data.concerns.map((item, i) => (
          <ConcernItem
            key={i}
            title={item.title}
            link={item.link}
            iconPath={item.icon_path}
          />
        ))}
      </div>
    </div>
  );
};

const ConcernItem = ({
  title,
  link,
  iconPath,
}: {
  title: string;
  link: string;
  iconPath: string;
}) => {
  return (
    <Link href={link}>
      <div className="group w-full flex justify-between items-center gap-5 bg-white border-[3px] border-[#E7F2FC] rounded-[14px] p-5 md:px-5 hover:cursor-pointer hover:bg-[#2F7CC4] hover:border-transparent transition-colors">
        <Image
          src={iconPath}
          alt={title}
          width={0}
          height={0}
          className="[filter:invert(51%)_sepia(98%)_saturate(436%)_hue-rotate(176deg)_brightness(86%)_contrast(87%)] group-hover:[filter:brightness(0)_invert(1)] transition-[filter] duration-200 w-9 h-10"
        />

        <p className="flex-1 text-[#484848] text-lg md:text-2xl font-semibold leading-8 group-hover:text-white transition-colors">
          {title}
        </p>

        <Image
          src="icon_arrow.svg"
          alt="icon_arrow"
          width={0}
          height={0}
          className="[filter:brightness(0)_saturate(100%)_invert(24%)_sepia(14%)_saturate(6%)_hue-rotate(343deg)_brightness(97%)_contrast(82%)] group-hover:[filter:brightness(0)_invert(1)] transition-[filter] duration-200 w-11 h-8"
        />
      </div>
    </Link>
  );
};
