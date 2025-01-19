import ArticleCard from "@/app/components/Articles/ArticleCard";
import { API_ENDPOINTS } from "@/config/endpoints";
import { getData } from "@/lib/helpers/dataFetchHelper";
import { ApiResponse, SubcategoryType } from "@/types/CommonTypes";

export default async function Page({
  params,
}: {
  params: { category: string; subcategory: string };
}) {
  const response: ApiResponse<SubcategoryType> = await getData(
    `${API_ENDPOINTS.SUBCATEGORIES}?filters[slug][$eq]=${params.subcategory}&populate=articles`
  );

  const [{ name, subtitle, articles }] = response.data;

  // Map and transform articles to match the expected props

  const transformedArticles = articles.map((article: any) => ({
    id: article.id,
    title: article.title,
    description: article.description,
    content: article.content || "No content available", // Matches the expected `content` field
    imageUrl: article.image?.url || "/placeholder.png", // Matches the expected `imageUrl` field
    slug: article.slug,
  }));

  return (
    <>
      <section className="flex flex-col items-center justify-center h-[400px] bg-gradient-to-r from-blue-100 to-white text-center px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">{name}</h1>
        <p className="text-lg text-gray-600 max-w-2xl">{subtitle}</p>
      </section>

      <ArticleCard
        articles={transformedArticles}
        categorySlug={params.category}
        subcategorySlug={params.subcategory}
      />
    </>
  );
}
