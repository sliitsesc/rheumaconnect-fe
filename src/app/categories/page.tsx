import MainCategorySection from "../components/MainCategorySection";
import { getLocale } from "@/lib/utils/localeUtils";

export default async function CategoriesPage() {
  const locale = await getLocale();

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      {/* <section className="bg-gradient-to-b from-blue-100 to-white py-16">
      </section> */}

      {/* Categories Content */}
      <div className="bg-white">
        <MainCategorySection locale={locale} />
      </div>
    </div>
  );
}
