import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";

function InfoSection() {
  return (
    <section className="relative mx-auto py-1 px-[32px] lg:px-0 lg:py-4 gap-[10px] md:gap-0 bg-white md:mt-[50px]">
      <h2 className="mx-auto font-bold text-[32px] leading-[41.66px] text-[#484848] font-[DM Sans] text-center md:text-[32px] md:leading-[48px] md:text-[#484848]">
        What is Arthritis.lk?{" "}
      </h2>
      <div className="container md:pl-[67px] md:pr-[67px] mx-auto flex flex-col md:flex-row items-center gap-[67px] justify-between md:mt-[75px] md:mb-[130px] ">
        {/* Text container */}
        <div className="text flex flex-col gap-4 w-full md:w-3/5 min-h-[240px] order-1 md:order-2">
          <p className="text-center font-[DM Sans] font-normal text-[24px] leading-[32dpx] text-[#484848] md:text-left md:text-[24px] md:leading-[32px] md:text-[#9E9E9E]">
            Arthritis.lk is dedicated to educating and supporting individuals
            living with rheumatoid arthritis and other rheumatic conditions.
            Developed in collaboration with healthcare professionals, our
            platform provides reliable medical information, self-care tips, and
            the latest treatment options to help patients better manage their
            condition. Whether you're newly diagnosed or looking for ways to
            improve your quality of life, Arthritis.lk is here to guide you with
            expert insights and practical advice.
          </p>
          <Link
            href="/about"
            className="text-center font-[DM Sans] font-medium text-[22px] leading-[32dpx] text-[#484848] md:text-left md:text-[24px] md:leading-[32px] md:text-[#484848] hover:text-blue-500 flex items-center"
          >
            Learn More
            <ArrowTopRightOnSquareIcon width={24} className="ml-2" />{" "}
          </Link>
        </div>

        {/* Image */}
        <div className="btns flex flex-col gap-6 order-2 md:order-1 md:gap-6">
          <Image
            src="/treatment.jpg"
            alt="Person looking at a computer"
            width={550}
            height={400}
            className="w-full lg:w-full lg:h-[320px] rounded-lg shadow-md object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default InfoSection;
