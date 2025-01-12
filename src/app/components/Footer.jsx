"use client";

import React, { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import footerData from "../data/FooterData.json";

const Footer = () => {
  const [isOpen, setIsOpen] = useState({
    link1: false,
    link2: false,
    contact: false,
  });

  // Toggle dropdown visibility
  const toggleDropdown = (section) => {
    setIsOpen((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <section className="bg-gradient-to-b to-blue-100 from-white py-16 text-black">
      {/* Mobile View */}
      <div className="md:hidden flex flex-col mx-auto px-5">
        <h3 className="font-bold text-2xl text-black mb-5 text-center">
          {footerData.brandName}
        </h3>

        {footerData.mobileView.dropdowns.map((dropdown, index) => (
          <div key={index}>
            <button
              onClick={() => toggleDropdown(`link${index + 1}`)}
              className="bg-white rounded-lg shadow-md px-5 py-3 text-left text-black mb-3 flex  w-full justify-between items-center"
            >
              {dropdown.name}
              {isOpen[`link${index + 1}`] ? (
                <ChevronUpIcon className="h-6 w-6 text-gray-500" />
              ) : (
                <ChevronDownIcon className="h-6 w-6 text-gray-500" />
              )}
            </button>
            {isOpen[`link${index + 1}`] && (
              <div className="bg-white p-5 rounded-lg">
                {dropdown.links ? (
                  <ul>
                    {dropdown.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <a href="#">{link}</a>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div>
                    <p>{dropdown.details.address}</p>
                    <p>{dropdown.details.phone1}</p>
                    <p>{dropdown.details.phone2}</p>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Desktop View */}
      <div className="hidden md:flex flex-row mx-auto px-10">
        <div className="flex flex-col w-6/12 text-center mx-auto">
          <h3 className="font-bold text-2xl mb-5">{footerData.brandName}</h3>
          <p>{footerData.desktopView.brandDescription}</p>
        </div>

        {footerData.desktopView.sections.map((section, index) => (
          <div key={index} className="flex flex-col w-2/12">
            <h3 className="font-bold text-2xl mb-5">{section.title}</h3>
            {section.links ? (
              <ul>
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#">{link}</a>
                  </li>
                ))}
              </ul>
            ) : (
              <div>
                <p>{section.details.address}</p>
                <p>{section.details.phone1}</p>
                <p>{section.details.phone2}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Footer;
