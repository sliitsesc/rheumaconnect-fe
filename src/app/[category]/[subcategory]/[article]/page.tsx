import { API_ENDPOINTS } from "@/config/endpoints";
import { getData } from "@/lib/helpers/dataFetchHelper";
import { ApiResponse, Article } from "@/types/CommonTypes";
import Image from "next/image";
import Link from "next/link";

export default async function Page({
  params,
}: {
  params: Promise<{ article: string; category: string; subcategory: string }>;
}) {
  const { article, category, subcategory } = await params;

  const response: ApiResponse<Article> = await getData(
    `${API_ENDPOINTS.ARTICLES}?filters[slug][$eq]=${article}`
  );

  console.log(response);

  const [{ title, publishedAt, description }] = response.data;

  const publishedDate = publishedAt
    ? new Date(publishedAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    : "No date available";

  return (
    <section className=" bg-gradient-to-b from-blue-100 to-white">
      <div className="container mx-auto py-10 pb-16 px-[24px] xl:px-[220px] flex flex-col items-start h-auto ">
        {/* Breadcrumbs Section */}
        <div className="text-sm text-gray-600 mb-4">
          <ul className="flex items-center gap-2">
            <li>
              <Link href={`/${category}`} className="hover:text-blue-600">
                {category}
              </Link>
            </li>
            <li className="text-lg">{">"}</li>
            <li>
              <Link
                href={`/${category}/${subcategory}`}
                className="hover:text-blue-600"
              >
                {subcategory}
              </Link>
            </li>
            <li className="text-lg">{">"}</li>
            <li className="text-gray-800 font-semibold">{title}</li>
          </ul>
        </div>

        {/* Article Header Section */}
        <h1 className="text-4xl font-bold text-gray-800 mb-4 text-left">
          {title}
        </h1>
        <div className="flex flex-wrap justify-between items-center w-full mb-4">
          <p className="text-lg text-gray-600 max-w-2xl text-left">
            {publishedDate} | by Dr. Nishantha Perera
          </p>

          {/* <div className="flex items-center gap-4">
            <p className="text-lg text-gray-600 max-w-2xl  text-left">
              Select Language
            </p>
            <button
              className=" flex items-center gap-2 text-white text-lg px-3 py-1 rounded-md shadow hover:brightness-110 transition"
              style={{ backgroundColor: "#2F7CC4" }}
            >
              English
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
              >
                <path
                  fillRule="evenodd"
                  d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div> */}
        </div>

        <div className="w-full">
          <Image
            src="/nurse.avif"
            alt="Doctor providing medical advice"
            width={550}
            height={550}
            className="w-full h-[300px] object-cover rounded-lg shadow-md mb-4"
            priority
          />
        </div>

        <p className="text-lg text-gray-600 mb-4 text-left">{description}</p>

        <section className="flex flex-col items-center justify-center w-full h-[200px] bg-blue-200 rounded-lg p-10">
          <h1 className="text-3xl font-bold text-[#484848] mb-8 text-center md:text-center">
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
      </div>
    </section>
  );
}
