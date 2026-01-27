"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import { type Locale } from "@/config/i18n";
import { getMessage } from "@/lib/utils/messageUtils";

interface FooterProps {
  locale: Locale;
}

const Footer = ({ locale }: FooterProps) => {
  // State to manage dropdown visibility for each section
  const [isOpen, setIsOpen] = useState({
    link1: false,
    link2: false,
    contact: false,
  });

  // Toggle dropdown visibility
  const toggleDropdown = (section: "link1" | "link2" | "contact") => {
    setIsOpen((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  // Get translations
  const brand = getMessage(locale, "footer.brand");
  const description = getMessage(locale, "footer.description");
  const quickLinks = getMessage(locale, "footer.quickLinks");
  const links = getMessage(locale, "footer.links");
  const connect = getMessage(locale, "footer.connect");
  const home = getMessage(locale, "footer.home");
  const about = getMessage(locale, "footer.about");
  const categories = getMessage(locale, "footer.categories");
  const contactDrAsanka = getMessage(locale, "footer.contactDrAsanka");

  return (
    <section className="bg-gradient-to-b to-blue-100 from-white py-16 text-black border-t-[1px] border-[#DBEBFB]">
      {/* Mobile View */}
      <div className="container md:hidden flex flex-col mx-auto px-5">
        {/* RheumaConnect Brand Name */}
        <h3 className="font-bold text-2xl text-black mb-5 text-center">
          {brand}
        </h3>

        {/* Quick Links Dropdown */}
        <button
          onClick={() => toggleDropdown("link1")}
          className="bg-white rounded-lg shadow-md px-5 py-3 text-left text-black mb-3 flex justify-between items-center"
        >
          {quickLinks}
          {isOpen.link1 ? (
            <ChevronUpIcon className="h-6 w-6 text-gray-500" />
          ) : (
            <ChevronDownIcon className="h-6 w-6 text-gray-500" />
          )}
        </button>
        {isOpen.link1 && (
          <ul className="bg-white p-3 rounded-lg mb-4">
            <li>
              <Link href="/">{home}</Link>
            </li>
            <li>
              <Link href="/about">{about}</Link>
            </li>
            <li>
              <Link href="/categories">{categories}</Link>
            </li>
          </ul>
        )}

        {/* Contact Dropdown */}
        <button
          onClick={() => toggleDropdown("contact")}
          className="bg-white rounded-lg shadow-md px-5 py-3 text-left text-black mb-3 flex justify-between items-center"
        >
          {connect}
          {isOpen.contact ? (
            <ChevronUpIcon className="h-6 w-6 text-gray-500" />
          ) : (
            <ChevronDownIcon className="h-6 w-6 text-gray-500" />
          )}
        </button>
        {isOpen.contact && (
          <div className="bg-white p-3 rounded-lg">
            <a
              href="https://www.linkedin.com/in/asanka-nugaliyadde-20006188/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              {contactDrAsanka}
            </a>
          </div>
        )}
      </div>

      {/* Desktop View */}
      <div className="hidden container md:flex flex-row mx-auto px-10">
        <div className="flex flex-col w-5/12">
          <h3 className="font-bold text-2xl mb-5">{brand}</h3>
          <p>{description}</p>
        </div>

        <div className="flex flex-col w-2/12 ml-12">
          <h3 className="font-bold text-2xl mb-5">{links}</h3>
          <ul>
            <li>
              <Link href="/">{home}</Link>
            </li>
            <li>
              <Link href="/about">{about}</Link>
            </li>
            <li>
              <Link href="/categories">{categories}</Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col w-2/12"></div>

        <div className="flex flex-col w-3/12">
          <h3 className="font-bold text-2xl mb-5">{connect}</h3>
          <a
            href="https://www.linkedin.com/in/asanka-nugaliyadde-20006188/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            {contactDrAsanka}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
