"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";

const Footer = () => {
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

  return (
    <section className="bg-gradient-to-b to-blue-100 from-white py-16 text-black border-t-[1px] border-[#DBEBFB]">
      {/* Mobile View */}
      <div className="container md:hidden flex flex-col mx-auto px-5">
        {/* RheumaConnect Brand Name */}
        <h3 className="font-bold text-2xl text-black mb-5 text-center">
          Arthritis.lk
        </h3>

        {/* Quick Links Dropdown */}
        <button
          onClick={() => toggleDropdown("link1")}
          className="bg-white rounded-lg shadow-md px-5 py-3 text-left text-black mb-3 flex justify-between items-center"
        >
          Quick Links
          {isOpen.link1 ? (
            <ChevronUpIcon className="h-6 w-6 text-gray-500" />
          ) : (
            <ChevronDownIcon className="h-6 w-6 text-gray-500" />
          )}
        </button>
        {isOpen.link1 && (
          <ul className="bg-white p-3 rounded-lg mb-4">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <a href="#categories">Categories</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        )}

        {/* Resources Dropdown */}
        {/* <button
          onClick={() => toggleDropdown("link2")}
          className="bg-white rounded-lg shadow-md px-5 py-3 text-left text-black mb-3 flex justify-between items-center"
        >
          Resources
          {isOpen.link2 ? (
            <ChevronUpIcon className="h-6 w-6 text-gray-500" />
          ) : (
            <ChevronDownIcon className="h-6 w-6 text-gray-500" />
          )}
        </button>
        {isOpen.link2 && (
          <ul className="bg-white p-3 rounded-lg">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <a href="#categories">Categories</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        )} */}

        {/* Contact Dropdown */}
        <button
          onClick={() => toggleDropdown("contact")}
          className="bg-white rounded-lg shadow-md px-5 py-3 text-left text-black mb-3 flex justify-between items-center"
        >
          Connect
          {isOpen.contact ? (
            <ChevronUpIcon className="h-6 w-6 text-gray-500" />
          ) : (
            <ChevronDownIcon className="h-6 w-6 text-gray-500" />
          )}
        </button>
        {isOpen.contact && (
          <div className="bg-white p-3 rounded-lg">
            <p>Dr. Asanka Nugaliyadde </p>
            {/* <p>Kurunegala</p>
            <p>0372 233 907</p> */}
          </div>
        )}
      </div>

      {/* Desktop View */}
      <div className="hidden container md:flex flex-row mx-auto px-10">
        <div className="flex flex-col w-5/12">
          <h3 className="font-bold text-2xl mb-5"> Arthritis.lk</h3>
          <p>
            Platform where patients can easily access reliable information about
            specific rheumatic conditions.
            <br />
            {/* The platform features educational content, medication guides, FAQs,
            and more, aiming to raise awareness and support patients in managing
            rheumatic diseases. */}
          </p>
        </div>

        <div className="flex flex-col w-2/12 ml-12">
          <h3 className="font-bold text-2xl mb-5">Links</h3>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              {/* <a href="#about">About</a> */}
              <Link href="/about">About</Link>
            </li>
            <li>
              <a href="#categories">Categories</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col w-2/12"></div>

        <div className="flex flex-col w-3/12">
          <h3 className="font-bold text-2xl mb-5">Connect</h3>
          <span>176 Ambepussa - Trincomalee Hwy, Kurunegala</span>

          <span className="mt-2">0372 233 907</span>
        </div>
      </div>
    </section>
  );
};

export default Footer;
