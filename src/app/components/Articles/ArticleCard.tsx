import { API_BASE_URL } from "@/config";
import { ImageType } from "@/types/CommonTypes";
import Image from "next/image";
import Link from "next/link";
import BrokenImagePlaceholder from "/public/common/broken-image-placeholder.png";
import { truncateText } from "@/lib/utils/truncateText";

export interface ArticleCardProps {
  title: string;
  slug: string;
  description: string;
  categorySlug: string;
  subcategorySlug: string;
  thumbnailImage: ImageType;
}

export default function ArticleCard({
  title,
  slug,
  description,
  categorySlug,
  subcategorySlug,
  thumbnailImage,
}: ArticleCardProps) {
  return (
    <div
      key={title}
      className="flex flex-col gap-y-3 bg-gradient-to-r from-[#eaf5ff98] to-[#f4f9ff86] p-6 rounded-xl shadow-sm">
      <Image
        className="w-full h-[150px] object-cover object-center rounded-lg"
        src={
          thumbnailImage
            ? `${API_BASE_URL}${thumbnailImage?.url}`
            : BrokenImagePlaceholder
        }
        alt={title}
        width={1000}
        height={600}
      />
      <h2 className="font-semibold text-2xl text-black">{title}</h2>
      <p className="text-black ml-[1px]">{truncateText(description, 160)}</p>
      <Link href={`/${categorySlug}/${subcategorySlug}/${slug}`}>
        <button className="bg-transparent text-[#2F7CC4] border-[2px] border-[#2F7CC4] w-full h-10 rounded-[10px] text-[16px] font-medium hover:bg-[#276ca3] hover:text-white transition flex items-center justify-center">
          Read More
        </button>
      </Link>
    </div>
  );
}
