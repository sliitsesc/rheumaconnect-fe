import Image from "next/image";
import React from "react";
import CallIcon from "/public/call_Icon.svg";

function ContactCard() {
  return (
    <section className="relative mx-auto py-1 px-[32px] lg:px-0 lg:py-4 gap-[10px] md:gap-0 bg-white" id="contact">
      <div className="container md:pl-[67px] md:pr-[67px] mx-auto flex flex-col md:flex-row items-center gap-[67px] justify-between md:mt-[130px] md:mb-[130px] ">
        {/* Text container */}
        <div className="text flex flex-col gap-6 w-full md:w-3/5 min-h-[240px] order-1 md:order-2">
          <h2 className="font-bold text-[32px] leading-[41.66px] text-[#484848] font-[DM Sans] text-center md:text-[32px] md:leading-[48px] md:text-[#484848] md:text-left md:w-auto md:h-auto">
            Seek Medical Help
          </h2>
          <p className="text-center font-[DM Sans] font-normal text-[24px] leading-[32dpx] text-[#484848] md:text-left md:text-[24px] md:leading-[32px] md:text-[#9E9E9E]">
            Have any questions or need assistance? Reach out to the hospital for
            appointments, consultations, or general inquiries. Were here to help
            you with your rheumatic care needs. Our team is committed to
            providing you with the guidance and support you need.
          </p>
        </div>

        {/* Buttons container */}
        <div className="btns flex flex-col gap-6 order-2 md:order-1 md:gap-6">
          {/* "Call Kurunegala Hospital" button */}
          {/* <a
            href="tel:0112112889"
            className="py-[27px] px-[27px] gap-[33px] flex md:gap-0 md:items-center md:py-5 max-w-full md:max-w-[678px] pl-5 w-full bg-[#E7F2FC] rounded-2xl hover:bg-[#D6EAFB] transition">
            <Image
              src={CallIcon}
              alt="Kurunegala Hospital Contact Icon"
              width={42.15}
              height={42.15}
              className="w-[42.15px] h-[42.15px] translate-y-[6px] md:w-16 md:h-16 md:object-contain md:mr-5 md:translate-y-[0]"
            />

            <div className="flex flex-col">
              <div className="w-[176px] h-[56px] text-[#484848] font-[DM Sans] text-xl font-medium leading-[20px] text-left md:w-auto md:h-auto md:text-[#484848] md:font-semibold md:text-xl md:leading-[20px]">
                Call Kurunegala Hospital
              </div>
              <div className="mt-1.5 text-[#9E9E9E] font-normal text-xl leading-[20px] hidden md:block">
                0372 233 907
              </div>
            </div> */}
         

          {/* "Call Emergency Medical Hotline" button */}
          <a
            href="tel:1990"
            className="py-[27px] px-[27px] gap-[33px] flex md:gap-0 md:items-center md:py-5 max-w-full md:max-w-[678px] pl-5 w-full bg-[#E7F2FC] rounded-2xl hover:bg-[#D6EAFB] transition">
            <Image
              src={CallIcon}
              alt="Kurunegala Hospital Contact Icon"
              width={42.15}
              height={42.15}
              className="w-[42.15px] h-[42.15px] translate-y-[6px] md:w-16 md:h-16 md:object-contain md:mr-5 md:translate-y-[0]"
            />
            <div className="flex flex-col">
              <div className="w-[176px] h-[56px] text-[#484848] font-[DM Sans] text-xl font-medium leading-[20px] text-left md:w-auto md:h-auto md:text-[#484848] md:font-semibold md:text-xl md:leading-[20px]">
                Call Emergency Medical Hotline
              </div>
              <div className="mt-1.5 text-[#9E9E9E] font-normal text-xl leading-[20px] hidden md:block">
                1990
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default ContactCard;
