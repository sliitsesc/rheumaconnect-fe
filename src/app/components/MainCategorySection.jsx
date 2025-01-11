// // This is the MainCatSection component which is responsible for rendering the main categories section of the website. It uses the categoriesData.json file to get the data for the categories.
// // Path of the data json file: src\app\data\MainCatSection\categoriesData.json

import React from "react";
import Image from "next/image";
import categoriesData from "../data/MainCategorySection/categoriesData.json";

const MainCategorySection = () => {
  return (
    <section className="bg-white py-16">
      <h2 className="text-black font-bold text-4xl text-center">
        Main Categories
      </h2>
      <p className="text-[#9E9E9E] text-center px-8 py-12 text-2xl">
        Some of the most common types Rheumatic diseases
      </p>
      <div className="categories flex flex-wrap justify-center gap-4 px-8">
        {categoriesData.map((category) => (
          <div
            key={category.id}
            className="p-8 cursor-pointer border-2 border-transparent hover:border-[#DBEBFB] rounded-xl transition duration-500"
          >
            <div className="relative max-w-[274px] max-h-[103px] mx-auto aspect-[274/103]">
              <Image
                src={category.image}
                alt={category.alt}
                fill
                className="rounded-xl object-cover"
              />
            </div>
            <div className="max-w-[274px] mx-auto">
              <h4 className="font-semibold text-2xl text-[#484848] py-4">
                {category.title}
              </h4>
              <p className="text-[#9E9E9E] py-4">{category.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MainCategorySection;
