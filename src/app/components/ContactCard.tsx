import React from "react";

function ContactCard() {
  return (
    <section className="relative max-w-[1512px] mx-auto py-[58px] px-[32px] lg:px-0 gap-[10px] md:gap-0 bg-white">
      <div className="container md:pl-[67px] md:pr-[67px] mx-auto flex flex-col md:flex-row items-center gap-[67px]  md:mt-[130px] md:mb-[130px] ">
        {/* Text container */}
        <div className="text flex flex-col gap-6 max-w-[633px] min-h-[240px] order-1 md:order-2">
          <h2 className="font-extrabold text-[32px] leading-[41.66px] text-[#484848] font-[DM Sans] text-center md:text-[42px] md:leading-[54.68px] md:text-[#484848] md:text-left md:w-auto md:h-auto">
            Seek Medical Help
          </h2>
          <p className="text-center font-[DM Sans] font-normal text-[18px] leading-[24px] text-[#484848] md:text-left md:text-[24px] md:leading-[32px] md:text-[#9E9E9E]">
            Have any questions or need assistance? Reach out to the hospital for
            appointments, consultations, or general inquiries. Were here to help
            you with your rheumatic care needs. Our team is committed to
            providing you with the guidance and support you need.
          </p>
        </div>

        {/* Buttons container */}
        <div className="btns flex flex-col gap-6 order-2 md:order-1 md:gap-6">
          {/* "Call Kurunegala Hospital" button */}
          <a
            href="tel:0112112889"
            className="py-[27px] px-[27px] gap-[33px] flex md:gap-0 md:items-center md:py-5 max-w-full md:max-w-[678px] pl-5 w-full bg-[#E7F2FC] rounded-2xl hover:bg-[#D6EAFB] transition"
          >
            <img
              loading="lazy"
              src="./call_icon.svg"
              alt="Kurunegala Hospital Contact Icon"
              className="w-[42.15px] h-[42.15px] translate-y-[6px] md:w-16 md:h-16 md:object-contain md:mr-5 md:translate-y-[0]"
            />
            <div className="flex flex-col">
              <div className="w-[176px] h-[56px] text-[#484848] font-[DM Sans] text-[20px] font-semibold leading-[28px] text-left md:w-auto md:h-auto md:text-[#484848] md:font-semibold md:text-[32px] md:leading-[28px]">
                Call Kurunegala Hospital
              </div>
              <div className="mt-1.5 text-[#9E9E9E] font-semibold text-[28px] leading-[28px] hidden md:block">
                0112 112 889
              </div>
            </div>
          </a>

          {/* "Call Emergency Medical Hotline" button */}
          <a
            href="tel:1990"
            className="py-[27px] px-[27px] gap-[33px] flex md:gap-0 md:items-center md:py-5 max-w-full md:max-w-[678px] pl-5 w-full bg-[#E7F2FC] rounded-2xl hover:bg-[#D6EAFB] transition"
          >
            <img
              loading="lazy"
              src="./call_icon.svg"
              alt="Emergency Medical Hotline Icon"
              className="w-[42.15px] h-[42.15px] translate-y-[6px] md:w-16 md:h-16 md:object-contain md:mr-5 md:translate-y-[0]"
            />
            <div className="flex flex-col">
              <div className="w-[176px] h-[56px] text-[#484848] font-[DM Sans] text-[20px] font-semibold leading-[28px] text-left md:w-auto md:h-auto md:text-[#484848] md:font-semibold md:text-[32px] md:leading-[28px]">
                Call Emergency Medical Hotline
              </div>
              <div className="mt-1.5 text-[#9E9E9E] font-semibold text-[28px] leading-[28px] hidden md:block">
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
