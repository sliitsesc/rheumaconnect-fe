import Image from "next/image";
import Image1 from "../../../public/doctor.png";
import DoctorPhoto from "../../../public/doctor-asanka-nugaliyadde.jpeg";
import Link from "next/link";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";
import { getLocale } from "@/lib/utils/localeUtils";
import { getMessage } from "@/lib/utils/messageUtils";

export default async function Page() {
  const locale = await getLocale();

  const headerTitle = getMessage(locale, "about.header.title");
  const headerDescription = getMessage(locale, "about.header.description");
  const whatIsTitle = getMessage(locale, "about.whatIs.title");
  const whatIsDescription1 = getMessage(locale, "about.whatIs.description1");
  const whatIsDescription2 = getMessage(locale, "about.whatIs.description2");
  const whatIsImageAlt = getMessage(locale, "about.whatIs.imageAlt");
  const aboutDoctorTitle = getMessage(locale, "about.aboutDoctor.title");
  const aboutDoctorDescription = getMessage(
    locale,
    "about.aboutDoctor.description",
  );
  const credentials = getMessage(locale, "about.aboutDoctor.credentials");
  const doctorImageAlt = getMessage(locale, "about.aboutDoctor.imageAlt");
  const linkedinLabel = getMessage(locale, "about.aboutDoctor.linkedin");
  const researchGateLabel = getMessage(
    locale,
    "about.aboutDoctor.researchGate",
  );
  const emailLabel = getMessage(locale, "about.aboutDoctor.email");

  return (
    <div className="">
      <section className="flex flex-col items-center justify-center h-[400px] bg-gradient-to-r from-blue-100 to-white text-center px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">{headerTitle}</h1>
        <p className="text-lg text-gray-600 max-w-2xl">{headerDescription}</p>
      </section>
      <div className="container mx-auto xl:px-[200px] py-10 pb-16 px-[24px] flex flex-col gap-8 gap-y-16 items-start h-auto ">
        <section>
          <h1 className="text-3xl font-bold">{whatIsTitle}</h1>
          <div className="flex flex-col lg:flex-row mt-8 gap-8">
            <Image
              src={Image1}
              width={400}
              height={400}
              className="object-cover rounded-xl w-full h-[300px] lg:max-h-[600px] lg:max-w-[600px]"
              alt={whatIsImageAlt}
            />
            <div>
              <p className="text-lg text-gray-600">{whatIsDescription1}</p>
              <p className="text-lg text-gray-600 mt-2">{whatIsDescription2}</p>
            </div>
          </div>
        </section>
        <section>
          <h1 className="text-3xl font-bold">{aboutDoctorTitle}</h1>
          <div className="flex flex-col lg:flex-row mt-8 gap-8">
            <div className="relative min-w-[300px] min0 h-[300px] w-[300px]">
              <Image
                src={DoctorPhoto}
                width={400}
                height={400}
                className="absolute w-full h-full object-cover rounded-xl"
                alt={doctorImageAlt}
              />
            </div>
            <div>
              <p className="text-lg text-gray-600">{aboutDoctorDescription}</p>
              <p className="mt-4 font-semibold italic whitespace-pre-line">
                {credentials}
              </p>
              <div className="flex items-center mt-4 space-x-4">
                <Link
                  href="https://www.linkedin.com/in/asanka-nugaliyadde-20006188"
                  className="inline-flex items-center hover:text-blue-600 transition-all duration-300 font-semibold"
                >
                  {linkedinLabel}
                  <ArrowTopRightOnSquareIcon width={24} className="ml-2" />
                </Link>
                <Link
                  href="https://www.researchgate.net/profile/Asanka-Nugaliyadde-2"
                  className="inline-flex items-center hover:text-blue-600 transition-all duration-300 font-semibold"
                >
                  {researchGateLabel}
                  <ArrowTopRightOnSquareIcon width={24} className="ml-2" />
                </Link>
                <Link
                  href="mailto:contact@arthritis.lk"
                  className="inline-flex items-center hover:text-blue-600 transition-all duration-300 font-semibold"
                >
                  {emailLabel}
                  <ArrowTopRightOnSquareIcon width={24} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
