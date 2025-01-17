import { API_ENDPOINTS } from "@/config/endpoints";
import { getData } from "@/lib/helpers/dataFetchHelper";
import { ApiResponse, SubcategoryType } from "@/types/CommonTypes";

export default async function Page({
  params,
}: {
  params: { category: string };
}) {
  const articlesSlug = params.category;
  const response: ApiResponse<SubcategoryType> = await getData(
    `${API_ENDPOINTS.SUBCATEGORIES}?populate=articles&filters`
  );

  const [{ name, subtitle, articles }] = response.data; // Select first object in array and destructure properties

  console.log("article" , articles)
  return (
    <>
      <section className="flex flex-col items-center justify-center h-[400px] bg-gradient-to-r from-blue-100 to-white text-center px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">{name}</h1>
        <p className="text-lg text-gray-600 max-w-2xl">{subtitle}</p>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {articles?.map((article) => (
            <div
              key={article.id}
              className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              {/* <div className="h-48 bg-gray-100">
                <img
                  src={article.image || "https://via.placeholder.com/400"}
                  alt={name}
                  className="w-full h-full object-cover"
                />
              </div> */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {article.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {article.description || "No description available"}
                </p>
                <a
                  href={`/${articlesSlug}/${article.slug}`}
                  className="inline-block bg-blue-500 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-blue-600"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
