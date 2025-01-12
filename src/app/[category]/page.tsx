import { API_URL } from "@/config";
import { API_ENDPOINTS } from "@/config/endpoints";
import CardsSection from "../components/CardsSection";

export default async function Page({
  params,
}: {
  params: { category: string };
}) {
  const categorySlug = (await params).category;
  const data = await fetch(
    `${API_URL}${API_ENDPOINTS.CATEGORIES}?populate=subcategories&filters[slug][$eq]=${categorySlug}`
  );

  const categoryData = await data.json();

  return (
    <>
      <section className="flex flex-col items-center justify-center h-[400px] bg-gradient-to-r from-blue-100 to-white text-center px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          {categoryData?.data[0]?.name}
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl">
          {/* {category.description} */}
        </p>
      </section>
      <CardsSection
        categorySlug={categoryData?.data[0]?.slug}
        subcategories={categoryData?.data[0]?.subcategories}
      />
    </>
  );
}
