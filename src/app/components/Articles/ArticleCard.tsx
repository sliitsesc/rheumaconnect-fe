import { Article } from "@/types/CommonTypes";
import Image from "next/image";
import Link from "next/link";

export default function ArticleCard({
  title,
  slug,
  description,
  categorySlug,
  subcategorySlug,
  thumbnailImage,
}: Article) {
  return (
    <div
      key={title}
      className="bg-gradient-to-r from-[#eaf5ff98] to-[#f4f9ff86] p-6 rounded-xl">
      <Image
        className="w-full h-[150px] object-cover object-center rounded-lg"
        src={thumbnailImage?.url}
        alt={title}
        width={1000}
        height={600}
      />
      <h2 className="font-semibold text-2xl text-black mt-4">{title}</h2>
      <p className="text-black m-1">{description}</p>
      <Link href={`/${categorySlug}/${subcategorySlug}/${slug}`}>
        <button className="bg-transparent text-[#2F7CC4] border-2 border-[#2F7CC4] w-full h-10 rounded-[12px] text-[16px] font-medium hover:bg-[#276ca3] hover:text-white transition flex items-center justify-center">
          Explore more
        </button>
      </Link>
    </div>
  );
}
