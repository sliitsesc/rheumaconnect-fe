import React from 'react';

function ContactCard() {
  return (
    <section className="relative max-w-[1512px] mx-auto py-16 px-4 lg:px-0">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-6">
        {/* Text container */}
        <div className="text flex flex-col gap-6 max-w-[633px] min-h-[240px] lg:absolute lg:top-[132px] lg:left-[812px] order-1 lg:order-2">
          <h2 className="font-extrabold text-[42px] leading-[54.68px] text-[#484848]">
            Seek Medical Help
          </h2>
          <p className="font-medium text-[24px] leading-[32px] text-[#9E9E9E]">
            Have any questions or need assistance? Reach out to the hospital for
            appointments, consultations, or general inquiries. We're here to help
            you with your rheumatic care needs. Our team is committed to providing
            you with the guidance and support you need.
          </p>
        </div>

        {/* Buttons container */}
        <div className="btns flex flex-col gap-6 order-2 lg:order-1 lg:absolute lg:top-[132px]">
          {/* "Call Kurunegala Hospital" button */}
          <a
            href="tel:0112112889"
            className="flex items-center py-5 max-w-full lg:max-w-[678px] pl-5 w-full bg-[#E7F2FC] rounded-2xl hover:bg-[#D6EAFB] transition"
          >
            <img
              loading="lazy"
              src="./call_icon.svg"
              alt="Kurunegala Hospital Contact Icon"
              className="w-16 h-16 object-contain mr-5" // Adjusted class for consistent size
            />
            <div className="flex flex-col">
              <div className="text-[#484848] font-semibold text-[32px] leading-[28px]">
                Call Kurunegala Hospital
              </div>
              <div className="mt-1.5 text-[#9E9E9E] font-semibold text-[28px] leading-[28px]">
                0112 112 889
              </div>
            </div>
          </a>

          {/* "Call Emergency Medical Hotline" button */}
          <a href="tel:1990" className="flex items-center py-5 pl-5 pr-20 bg-[#E7F2FC] rounded-2xl hover:bg-[#D6EAFB] transition">
            <img
              loading="lazy"
              src="./call_icon.svg"
              alt="Emergency Medical Hotline Icon"
              className="w-16 h-16 object-contain mr-5" // Adjusted class for consistent size
            />
            <div className="flex flex-col">
              <div className="text-[#484848] font-semibold text-[32px] leading-[28px]">
                Call Emergency Medical Hotline
              </div>
              <div className="mt-1.5 text-[#9E9E9E] font-semibold text-[28px] leading-[28px]">
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