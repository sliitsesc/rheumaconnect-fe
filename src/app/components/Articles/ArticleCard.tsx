import Image from "next/image";

interface ArticleCardProps {
  name: string;
  subtitle: string;
  articles: Array<{
    description: string;
    id: number;
    title: string;
    content: string;
    imageUrl: string;
  }>;
}

export default function ArticleCard({ name, subtitle, articles }: ArticleCardProps) {
  return (
    <section className="p-6">
      {/* <h1 className="text-3xl font-bold text-center text-black mb-4">{name}</h1>
      <p className="text-center text-gray-600 mb-8">{subtitle}</p> */}

      {/* Responsive grid layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {articles.map((article) => (
          <div
            key={article.id}
            className="bg-gradient-to-r from-[#eaf5ff98] to-[#f4f9ff86] p-6 rounded-xl"
          >
            <Image
              className="w-full h-[150px] object-cover object-center rounded-lg"
              src={article.imageUrl || "/placeholder.png"} // Fallback image if none provided
              alt={article.title}
              width={1000}
              height={1000}
            />
            <h2 className="font-semibold text-2xl text-black mt-4">{article.title}</h2>
            <p className="text-black m-1">{article.description.slice(0, 100)}...</p>
            <button className="bg-transparent text-[#2F7CC4] border-2 border-[#2F7CC4] w-full h-10 rounded-[12px] text-[16px] font-medium hover:bg-[#276ca3] hover:text-white transition flex items-center justify-center">
              Explore more
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
