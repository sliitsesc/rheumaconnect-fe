import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const CardsSection = () => {
  const cardTitles = [
    "Treatment Info",
    "Symptoms",
    "Precautions",
    "Diet and Nutrition",
    "Side Effects",
    "Other",
  ];

  return (
    <>
      <section className="bg-white py-16 flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
          {cardTitles.map((title, index) => (
            <div
              key={index}
              className="group card relative border-[#DBEBFB] border-2 bg-white rounded-lg shadow-sm p-6 pt-4 pb-16 w-72 cursor-pointer transition-all duration-300 hover:bg-[#2F7CC4] mx-auto"
            >
              <h2 className="text-gray-700 font-semibold text-2xl group-hover:text-white transition-colors duration-300">
                {title}
              </h2>
              <div className="absolute bottom-4 right-6">
                <div className="bg-blue-500 p-2 rounded-lg arrow-button transition-all duration-300 group-hover:bg-white">
                  <ArrowRightIcon className="h-5 w-5 text-white group-hover:text-[#2F7CC4] transition-colors duration-300" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default CardsSection;
