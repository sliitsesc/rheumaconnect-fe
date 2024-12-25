import React from 'react';

function ContactCard() {
  return (
    <section className="relative max-w-[1512px] mx-auto py-16">
      {/* Center the section */}
      <div className="container mx-auto px-4 lg:px-16 flex flex-col-reverse lg:flex-row items-center gap-6">
        <div className="btns flex flex-col gap-[25px] absolute top-[132px]" >
          <button className="bg-blue-50 px-6 py-2 rounded-md hover:bg-blue-200 transition">
            Call Kurunegala Hospital
          </button>
          <button className="bg-blue-50 px-6 py-2 rounded-md hover:bg-blue-200 transition">
            Call Emergency Medical Hotline
          </button>
        </div>
        <div className="text max-w-[633px] min-h-[240px] flex flex-col gap-[25px] absolute top-[132px] left-[812px]">
          <h2 className="font-extrabold text-[42px] leading-[54.68px] text-[#484848] ">
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
