import ArticleCard from "@/app/components/Articles/ArticleCard";
import { API_ENDPOINTS } from "@/config/endpoints";
import { getData } from "@/lib/helpers/dataFetchHelper";
import { ApiResponse, Category } from "@/types/CommonTypes";

export default async function Page({
  params,
}: {
  params: { subcategory: string };
}) {
  const categorySlug = (await params).subcategory;
  const response: ApiResponse<Category> = await getData(
    `${API_ENDPOINTS.CATEGORIES}?populate=subcategories&filters[slug][$eq]=${categorySlug}`
  );

  const [{ name, subtitle }] = response.data; // select first object in array, and destructure properties

  return (
    <>
      <section className="flex flex-col items-center justify-center h-[400px] bg-gradient-to-r from-blue-100 to-white text-center px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">{name}</h1>
        <p className="text-lg text-gray-600 max-w-2xl">{subtitle}</p>
      </section>

      {/* map & render all article cards here */}
      <section className="container mx-auto flex flex-row flex-wrap gap-4 justify-between px-60 my-10">
        {/* use articles.map(........) here */}
        <ArticleCard /> <ArticleCard />
        <ArticleCard />
      </section>
    </>
  );
}
