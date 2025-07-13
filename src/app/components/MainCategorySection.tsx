import Image from "next/image";
import { ApiResponse, Category } from "@/types/CommonTypes";
import { getData } from "@/lib/helpers/dataFetchHelper";
import { API_ENDPOINTS } from "@/config/endpoints";
import { getImageUrl } from "@/lib/utils/imageUtils";
import Link from "next/link";
import { truncateText } from "@/lib/utils/truncateText";

export default async function MainCategorySection() {
  const response: ApiResponse<Category> = await getData(
    `${API_ENDPOINTS.CATEGORIES}?populate=image`
  );

  const categories = response?.data || [];

  return (
    <section
      className="container bg-white py-12 mx-auto scroll-m-[100px]"
      id="categories"
    >
      <h2 className="mx-auto font-bold text-[32px] leading-[41.66px] text-[#484848] font-[DM Sans] text-center md:text-[32px] md:leading-[48px] md:text-[#484848]">
        Resource Categories
      </h2>
      <p className="text-[#9E9E9E] text-center px-8 py-8 text-[24px] leading-[32px]">
        A central resource to explore causes, types and treatments for rheumatic
        conditions.
      </p>
      <div className="flex flex-wrap justify-center gap-4 px-8">
        {categories.map((category) => (
          <Link key={category.id} href={`/${category.slug}`}>
            <div
              key={category.id}
              className="p-8 cursor-pointer border-2 border-transparent hover:border-[#DBEBFB] rounded-xl transition duration-300 shadow-md"
            >
              <div className="relative max-w-[274px] max-h-[103px] mx-auto aspect-[274/103] mb-4">
                <Image
                  src={getImageUrl(category?.image?.url)}
                  alt={category?.image?.alternativeText}
                  fill
                  className="rounded-xl object-cover"
                />
              </div>
              <div className="max-w-[274px] mx-auto">
                <h4 className="font-semibold text-2xl text-[#484848] mb-3">
                  {category.name}
                </h4>
                <p className="text-[#9E9E9E]">
                  {truncateText(category?.subtitle, 100)}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
