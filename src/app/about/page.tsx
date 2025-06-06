import Image from "next/image";
import Image1 from "../../../public/doctor.png";
import DoctorPhoto from "../../../public/doctor-asanka-nugaliyadde.jpeg";
import Link from "next/link";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";

export default function Page() {
  return (
    <div className="">
      <section className="flex flex-col items-center justify-center h-[400px] bg-gradient-to-r from-blue-100 to-white text-center px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          About Arthritis.lk
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl">
          The vision, mission, and the driving force behind this useful
          information portal
        </p>
      </section>
      <div className="container mx-auto xl:px-[200px] py-10 pb-16 px-[24px] flex flex-col gap-8 gap-y-16 items-start h-auto ">
        <section>
          <h1 className="text-3xl font-bold">What is Arthritis.lk</h1>
          <div className="flex flex-col lg:flex-row mt-8 gap-8">
            <Image
              src={Image1}
              width={400}
              height={400}
              className="object-cover rounded-xl w-full h-[300px] lg:max-h-[600px] lg:max-w-[600px]"
              alt="Image"
            />
            <div>
              <p className="text-lg text-gray-600">
                Arthritis.lk is a free and open-to-all platform where patients
                can find information about specific Rheumatic conditions. Led by
                Dr. Asanka Nugaliyadde, Consultant Rheumatologist at the
                Teaching Hospital, Kurunegala.
              </p>
              <p className="text-lg text-gray-600 mt-2">
                Suspendisse nisi nullam pellentesque odio magna. Montes nascetur
                risus pharetra aliquet, tempus ante efficitur. Magnis pharetra
                taciti dolor; sapien cursus porttitor. Dictumst felis non
                aliquet; inceptos venenatis taciti magna. Dui metus massa morbi
                malesuada interdum ad eget vel. Pulvinar habitant arcu mollis
                erat senectus. Non tempor varius dui ante sed nibh vel
                scelerisque. Conubia ac tortor est dapibus platea aptent. Aenean
                mus consequat eros condimentum in mollis urna venenatis maximus.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center mt-4 hover:text-blue-600 transition-all duration-300 font-semibold">
                Learn more about the doctor
                <ArrowTopRightOnSquareIcon width={24} className="ml-2" />
              </Link>
            </div>
          </div>
        </section>
        <section>
          <h1 className="text-3xl font-bold">About the Doctor</h1>
          <div className="flex flex-col lg:flex-row mt-8 gap-8">
            <div className="relative min-w-[300px] min0 h-[300px] w-[300px]">
              <Image
                src={DoctorPhoto}
                width={400}
                height={400}
                className="absolute w-full h-full object-cover rounded-xl"
                alt="Image"
              />
            </div>
            <div>
              <p className="text-lg text-gray-600">
                Arthritis.lk is a free and open-to-all platform where patients
                can find information about specific Rheumatic conditions. Led by
                Dr. Asanka Nugaliyadde, Consultant Rheumatologist at the
                Teaching Hospital, Kurunegala.
              </p>
              <p className="text-lg text-gray-600 mt-2">
                Suspendisse nisi nullam pellentesque odio magna. Montes nascetur
                risus pharetra aliquet, tempus ante efficitur. Magnis pharetra
                taciti dolor; sapien cursus porttitor. Dictumst felis non
                aliquet; inceptos venenatis taciti magna. Dui metus massa morbi
                malesuada interdum ad eget vel.
              </p>
              <p className="mt-4 font-semibold italic">
                Dr Asanka Nugaliyadde
                <br />
                MBBS MD Specialty Certificate in Rheumatology (UK)
                <br />
                Consultant Rheumatologist at Teaching Hospital Kurunegala
              </p>
              <div className="flex items-center mt-4 space-x-4">
                <Link
                  href="https://www.linkedin.com/in/asanka-nugaliyadde-20006188"
                  className="inline-flex items-center hover:text-blue-600 transition-all duration-300 font-semibold">
                  Linkedin
                  <ArrowTopRightOnSquareIcon width={24} className="ml-2" />
                </Link>
                <Link
                  href="https://www.researchgate.net/profile/Asanka-Nugaliyadde-2"
                  className="inline-flex items-center hover:text-blue-600 transition-all duration-300 font-semibold">
                  Research Gate
                  <ArrowTopRightOnSquareIcon width={24} className="ml-2" />
                </Link>
                <Link
                  href="https://www.researchgate.net/profile/Asanka-Nugaliyadde-2"
                  className="inline-flex items-center hover:text-blue-600 transition-all duration-300 font-semibold">
                  Email
                  <ArrowTopRightOnSquareIcon width={24} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section>
          <h1 className="text-3xl font-bold">About the Hospital</h1>
          <div className="flex flex-col lg:flex-row mt-8 gap-8">
            <div className="relative min-w-[300px] min0 h-[300px] w-[300px]">
              <Image
                src={
                  "https://upload.wikimedia.org/wikipedia/commons/0/05/Teaching_Hospital_Kurunegala.png"
                }
                width={400}
                height={400}
                className="absolute w-full h-full object-cover rounded-xl"
                alt="Image"
              />
            </div>
            <div>
              <p className="text-lg text-gray-600">
                Suspendisse nisi nullam pellentesque odio magna. Montes nascetur
                risus pharetra aliquet, tempus ante efficitur. Magnis pharetra
                taciti dolor; sapien cursus porttitor. Dictumst felis non
                aliquet; inceptos venenatis taciti magna. Dui metus massa morbi
                malesuada interdum ad eget vel.
              </p>
              <p className="text-lg text-gray-600 mt-2">
                Suspendisse nisi nullam pellentesque odio magna. Montes nascetur
                risus pharetra aliquet, tempus ante efficitur. Magnis pharetra
                taciti dolor; sapien cursus porttitor. Dictumst felis non
                aliquet; inceptos venenatis taciti magna. Dui metus massa morbi
                malesuada interdum ad eget vel.
              </p>
              <div className="flex items-center mt-4 space-x-4">
                <Link
                  href="https://linkedin.com/in/asanka-nugaliyadde"
                  className="inline-flex items-center hover:text-blue-600 transition-all duration-300 font-semibold">
                  Contact Hospital
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
