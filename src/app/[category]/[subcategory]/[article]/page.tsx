// import ArticleCard from "@/app/components/Articles/ArticleCard";
import { API_ENDPOINTS } from "@/config/endpoints";
import { getData } from "@/lib/helpers/dataFetchHelper";
import { ApiResponse, Article } from "@/types/CommonTypes";
import Image from "next/image";

export default async function Page({
  params,
}: {
  params: { article: string };
}) {
  const articleSlug = (await params).article;
  console.log(articleSlug);

  const response: ApiResponse<Article> = await getData(
    `${API_ENDPOINTS.ARTICLES}?filters[slug][$eq]=${articleSlug}`
  );
  console.log("yy", response);
  const [{ title, publishedAt, description }] = response.data; // select first object in array, and destructure properties

  const publishedDate = new Date(publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <>
      <section className="flex flex-col items-start h-auto bg-gradient-to-r from-blue-100 to-white p-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-4 text-left">
          {title}
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mb-4 text-left">
          {publishedDate} | by Dr. Nishantha Perera
        </p>

        <div className="w-full">
          <Image
            src="/nurse.avif"
            alt="Doctor providing medical advice"
            width={550}
            height={550}
            className="w-full h-[300px] object-cover rounded-lg shadow-md mb-4"
          />
        </div>

        <p className="text-lg text-gray-600 mb-4 text-left">{description}</p>

        <section className="flex flex-col items-center justify-center w-full h-[200px] bg-blue-200 rounded-lg p-10">
          <h1 className="text-3xl font-bold text-blue-700 mb-8 text-left">
            To view the full article, please download.
          </h1>
          <button
            className=" flex gap-2 text-white text-lg px-8 py-3 rounded-md shadow hover:brightness-110 transition"
            style={{ backgroundColor: "#2F7CC4" }}
          >
            Download PDF
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path
                fillRule="evenodd"
                d="M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Zm-9 13.5a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </section>
      </section>

      {/* map & render all article cards here */}
      {/* <section className="container mx-auto flex flex-row flex-wrap gap-4 justify-between px-60 my-10"> */}
      {/* use articles.map(........) here */}
      {/* <ArticleCard /> <ArticleCard /> */}
      {/* <ArticleCard /> */}
      {/* </section> */}
    </>
  );
}
