"use client";

import { AZCards as AZCardsType } from "@/app/types";

type AZCardsProps = {
    azCards: AZCardsType;
};

const AZCards = ({ azCards }: AZCardsProps) => {
    const { health, medicine } = azCards;

    return (
        <div
            className="w-full max-w-[1512px] h-auto px-[67px] py-[82px] flex flex-col md:flex-row md:justify-between gap-6 mx-auto"
            style={{ background: "#FFFFFF" }}
        >
            {/* Health A to Z */}
            <a
                href="#"
                className="flex flex-col justify-between w-full md:w-[calc(50%-36px)] lg:w-[678px] min-h-[287px] border-4 border-[#DBEBFB] rounded-lg bg-white p-8 hover:shadow-lg transition duration-300 relative"
            >
                <div className="flex flex-col items-start md:items-stretch gap-4">
                    <h2
                        className="text-[#484848] font-extrabold text-[24px] md:text-[28px] lg:text-[32px] leading-tight text-left"
                    >
                        {health.title}
                    </h2>
                    <p
                        className="text-[#9E9E9E] font-medium text-[16px] md:text-[18px] lg:text-[20px] leading-relaxed text-left"
                    >
                        {health.description}
                    </p>
                </div>
                <div className="flex md:justify-end justify-center md:absolute md:bottom-6 md:right-6 mt-6 md:mt-0">
                    <div className="w-[60px] h-[60px] md:w-[74px] md:h-[74px] bg-[#2F7CC4] flex justify-center items-center rounded-[14px]">
                        <svg
                            width="32"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M5 12h13M12 5l7 7-7 7"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                </div>
            </a>

            {/* Medicine A to Z */}
            <a
                href="#"
                className="flex flex-col justify-between w-full md:w-[calc(50%-36px)] lg:w-[678px] min-h-[287px] border-4 border-[#DBEBFB] rounded-lg bg-white p-8 hover:shadow-lg transition duration-300 relative"
            >
                <div className="flex flex-col items-start md:items-stretch gap-4">
                    <h2
                        className="text-[#484848] font-extrabold text-[24px] md:text-[28px] lg:text-[32px] leading-tight text-left"
                    >
                        {medicine.title}
                    </h2>
                    <p
                        className="text-[#9E9E9E] font-medium text-[16px] md:text-[18px] lg:text-[20px] leading-relaxed text-left"
                    >
                        {medicine.description}
                    </p>
                </div>
                <div className="flex md:justify-end justify-center md:absolute md:bottom-6 md:right-6 mt-6 md:mt-0">
                    <div className="w-[60px] h-[60px] md:w-[74px] md:h-[74px] bg-[#2F7CC4] flex justify-center items-center rounded-[14px]">
                        <svg
                            width="32"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M5 12h13M12 5l7 7-7 7"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                </div>
            </a>
        </div>
    );
};

export default AZCards;
