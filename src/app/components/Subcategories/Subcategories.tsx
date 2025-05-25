import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { Subcategory } from "@/types/CommonTypes";

interface SubCategoriesProps {
  subcategories: Subcategory[];
  categorySlug: string;
}

export default function SubCategories({
  subcategories,
  categorySlug,
}: SubCategoriesProps) {
  return (
    <section className="bg-white py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-10 px-4 sm:px-0 max-w-2xl mx-auto">
        {subcategories?.map((subcategory: Subcategory, index) => (
          <Link
            href={`/${categorySlug}/${subcategory.slug}`}
            key={index}
            className="group relative border-[#DBEBFB] border sm:border-2 bg-white rounded-xl sm:rounded-lg shadow-sm 
            p-4 sm:p-6 sm:pt-4 sm:pb-16 w-full sm:w-72 cursor-pointer transition-all duration-300 
            hover:bg-[#2F7CC4] mx-auto">
            <h2 className="text-gray-700 font-semibold text-xl sm:text-2xl group-hover:text-white transition-colors duration-300">
              {subcategory.name}
            </h2>
            <div className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 sm:top-auto sm:bottom-4 sm:translate-y-0">
              <div className="bg-blue-500 p-2 rounded-lg arrow-button transition-all duration-300 group-hover:bg-white">
                <ArrowRightIcon className="h-5 w-5 text-white group-hover:text-[#2F7CC4] transition-colors duration-300" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
