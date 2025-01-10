"use client";

import React, { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";

const Footer = () => {
  // State to manage dropdown visibility for each section
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
        {/* RheumaConnect Brand Name */}
        <h3 className="font-bold text-2xl text-black mb-5 text-center">RheumaConnect</h3>

        {/* Link 1 Dropdown */}
        <button
          onClick={() => toggleDropdown("link1")}
          className="bg-white rounded-lg shadow-md px-5 py-3 text-left text-black mb-3 flex justify-between items-center"
        >
          Link 1
          {isOpen.link1 ? (
            <ChevronUpIcon className="h-6 w-6 text-gray-500" />
          ) : (
            <ChevronDownIcon className="h-6 w-6 text-gray-500" />
          )}
        </button>
        {isOpen.link1 && (
          <ul className="bg-white p-3 rounded-lg">
            <li><a href="#">Tincidunt amet</a></li>
            <li><a href="#">Himenaeos</a></li>
            <li><a href="#">Mollis consequat</a></li>
            <li><a href="#">Facilisi diam</a></li>
            <li><a href="#">Inceptos blandit</a></li>
          </ul>
        )}

        {/* Link 2 Dropdown */}
        <button
          onClick={() => toggleDropdown("link2")}
          className="bg-white rounded-lg shadow-md px-5 py-3 text-left text-black mb-3 flex justify-between items-center"
        >
          Link 2
          {isOpen.link2 ? (
            <ChevronUpIcon className="h-6 w-6 text-gray-500" />
          ) : (
            <ChevronDownIcon className="h-6 w-6 text-gray-500" />
          )}
        </button>
        {isOpen.link2 && (
          <ul className="bg-white p-3 rounded-lg">
            <li><a href="#">Tincidunt amet</a></li>
            <li><a href="#">Himenaeos</a></li>
            <li><a href="#">Mollis consequat</a></li>
            <li><a href="#">Facilisi diam</a></li>
            <li><a href="#">Inceptos blandit</a></li>
          </ul>
        )}

        {/* Contact Dropdown */}
        <button
          onClick={() => toggleDropdown("contact")}
          className="bg-white rounded-lg shadow-md px-5 py-3 text-left text-black mb-3 flex justify-between items-center"
        >
          Contact
          {isOpen.contact ? (
            <ChevronUpIcon className="h-6 w-6 text-gray-500" />
          ) : (
            <ChevronDownIcon className="h-6 w-6 text-gray-500" />
          )}
        </button>
        {isOpen.contact && (
          <div className="bg-white p-3 rounded-lg">
            <p>453 Prosacco Summit</p>
            <p>Port Goldenland, ID 80140</p>
            <p>+91 662 782 7698</p>
            <p>+91 662 782 7698</p>
          </div>
        )}
      </div>

      {/* Desktop View */}
      <div className="hidden md:flex flex-row mx-auto px-10">
        <div className="flex flex-col w-6/12">
          <h3 className="font-bold text-2xl mb-5">RheumaConnect</h3>
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
            <br />
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore.
          </p>
        </div>

        <div className="flex flex-col w-2/12">
          <h3 className="font-bold text-2xl mb-5">Links</h3>
          <ul>
            <li><a href="#">Tincidunt amet</a></li>
            <li><a href="#">Himenaeos</a></li>
            <li><a href="#">Mollis consequat</a></li>
            <li><a href="#">Facilisi diam</a></li>
            <li><a href="#">Inceptos blandit</a></li>
          </ul>
        </div>

        <div className="flex flex-col w-2/12">
          <h3 className="font-bold text-2xl mb-5">Links</h3>
          <ul>
            <li><a href="#">Tincidunt amet</a></li>
            <li><a href="#">Himenaeos</a></li>
            <li><a href="#">Mollis consequat</a></li>
            <li><a href="#">Facilisi diam</a></li>
            <li><a href="#">Inceptos blandit</a></li>
          </ul>
        </div>

        <div className="flex flex-col w-2/12">
          <h3 className="font-bold text-2xl mb-5">Connect</h3>
          <span>453 Prosacco Summit, Port Goldenland, ID 80140</span>
          <span>+91 662 782 7698</span>
          <span>+91 662 782 7698</span>
        </div>
      </div>
    </section>
  );
};

export default Footer;
