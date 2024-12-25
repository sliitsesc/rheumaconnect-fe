import React from 'react';

function ContactCard() {
  return (
    <section className="relative max-w-[1512px] mx-auto py-16">
      <div className="container mx-auto px-4 lg:px-16 flex flex-col-reverse lg:flex-row items-center gap-6">
        <div className="btns flex flex-col  absolute top-[132px]">
          <div className=" flex flex-col rounded-none ">
            {/* Updated "Call Kurunegala Hospital" button container */}
            <a
              href="tel:0112112889"
              className="py-5 max-w-[678px] pl-5 w-full bg-[#E7F2FC] rounded-2xl max-md:pr-5 max-md:max-w-full hover:bg-[#D6EAFB] transition block"
            >
              <div className="flex gap-5 max-md:flex-col">
                <div className="flex flex-col max-md:ml-0 max-md:w-full">
                  <img
                    loading="lazy"
                    src="./call_icon.svg"
                    className="object-contain shrink-0 rounded-none aspect-square w-[74px] h-[74px] max-md:mt-10"
                    alt="Kurunegala Hospital Contact Icon"
                  />
                </div>
                <div className="flex flex-col w-[84%] max-md:ml-0 max-md:w-full ml-[3px]">
                  <div className="flex flex-col self-stretch my-auto font-semibold max-md:mt-10">
                    <div className="text-[#484848] font-[DM Sans] font-semibold text-[32px] leading-[28px]">
                      Call Kurunegala Hospital
                    </div>
                    <div className="self-start mt-1.5 text-[#9E9E9E] font-[DM Sans] font-semibold text-[28px] leading-[28px]">
                      0112 112 889
                    </div>
                  </div>
                </div>
              </div>
            </a>


            {/* Updated "Call Emergency Medical Hotline" button container */}
            <a href="tel:1990" className="block">
  <div className="flex gap-[23.53px] py-5 pr-20 pl-5 mt-6 font-semibold bg-[#E7F2FC] rounded-2xl max-md:pr-5">
    <img
      loading="lazy"
      src="./call_icon.svg"
      className="object-contain shrink-0 rounded-none aspect-square w-[74px] h-[74px]"
      alt="Emergency Medical Hotline Icon"
    />
    <div className="flex flex-col grow shrink-0 my-auto basis-0 w-fit max-md:max-w-full">
      <div className="text-3xl font-[DM Sans] font-semibold text-[32px] leading-[28px] text-[#484848] max-md:max-w-full">
        Call Emergency Medical Hotline
      </div>
      <div className="self-start mt-1.5 font-[DM Sans] text-[28px] font-semibold leading-[28px] text-[#9E9E9E]">
        1990
      </div>
    </div>
  </div>
</a>

          </div>
        </div>

        {/* Text container */}
        <div className="text max-w-[633px] min-h-[240px] flex flex-col gap-[25px] absolute top-[132px] left-[812px]">
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
      </div>
    </section>
  );
}

export default ContactCard;
