// This is the MainCatSection component which is responsible for rendering the main categories section of the website. It uses the categoriesData.json file to get the data for the categories.
// Path of the data json file: src\app\data\MainCatSection\categoriesData.json

import React from "react";
import Image from "next/image";
import categoriesData from "../data/MainCatSection/categoriesData.json";

const CategoryCard = ({ src, alt, title, description }) => (
  <div className="p-8 cursor-pointer">
    <Image src={src} alt={alt} width={274} height={103} />
    <div className="max-w-[274px] mx-auto">
      <h4 className="font-extrabold text-2xl text-[#484848] py-4">{title}</h4>
      <p className="text-[#9E9E9E] py-4">{description}</p>
    </div>
  </div>
);

const MainCatSection = () => {
  return (
    <section className="bg-white py-16">
      {/* Title  */}
      <h2 className="text-black font-extrabold text-4xl text-center">
        Main Categories
      </h2>
      {/* Description  */}
      <p className="text-[#9E9E9E] text-center px-8 py-12 text-2xl">
        Some of the most common types Rheumatic diseases
      </p>
      {/* Categories Div */}
      <div className="categories sm:grid sm:grid-cols-4 gap-4 px-8">
        {categoriesData.map((category, index) => (
          <CategoryCard
            key={index}
            src={category.src}
            alt={category.alt}
            title={category.title}
            description={category.description}
          />
        ))}
      </div>
    </section>
  );
};

export default MainCatSection;
