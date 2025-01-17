import Image from "next/image";
import { ApiResponse, Category } from "@/types/CommonTypes";
import { getData } from "@/lib/helpers/dataFetchHelper";
import { API_ENDPOINTS } from "@/config/endpoints";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

console.log(API_BASE_URL);

export default async function MainCategorySection() {

  const response: ApiResponse<Category> = await getData(
      `${API_ENDPOINTS.CATEGORIES}?populate=image`
    );

    const categories = response.data;

  return (
    <section className="bg-white py-16">
      <h2 className="text-black font-bold text-4xl text-center">
        Main Categories
      </h2>
      <p className="text-[#9E9E9E] text-center px-8 py-12 text-2xl">
        Some of the most common types Rheumatic diseases
      </p>
      <div className="categories flex flex-wrap justify-center gap-4 px-8">
        {categories.map((category) => (
          <div
            key={category.id}
            className="p-8 cursor-pointer border-2 border-transparent hover:border-[#DBEBFB] rounded-xl transition duration-500">
            <div className="relative max-w-[274px] max-h-[103px] mx-auto aspect-[274/103]">
              <Image
                src={`${API_BASE_URL}${category.image.url}`}
                alt={category.image.alternativeText}
                fill
                className="rounded-xl object-cover"
              />
            </div>
            <div className="max-w-[274px] mx-auto">
              <h4 className="font-semibold text-2xl text-[#484848] py-4">
                {category.name}
              </h4>
              <p className="text-[#9E9E9E] py-4">{category.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
