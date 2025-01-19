import { API_ENDPOINTS } from "@/config/endpoints";
import { getData } from "@/lib/helpers/dataFetchHelper";
import { ApiResponse, Category } from "@/types/CommonTypes";
import SubCategories from "../components/Subcategories/Subcategories";

export default async function Page({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const categorySlug = (await params).category;
  const response: ApiResponse<Category> = await getData(
    `${API_ENDPOINTS.CATEGORIES}?populate=subcategories&filters[slug][$eq]=${categorySlug}`
  );

  const [{ name, subtitle, subcategories, slug }] = response.data; // select first object in array, and destructure properties

  return (
    <>
      <section className="flex flex-col items-center justify-center h-[400px] bg-gradient-to-r from-blue-100 to-white text-center px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">{name}</h1>
        <p className="text-lg text-gray-600 max-w-2xl">{subtitle}</p>
      </section>

      <SubCategories categorySlug={slug} subcategories={subcategories} />
    </>
  );
}
