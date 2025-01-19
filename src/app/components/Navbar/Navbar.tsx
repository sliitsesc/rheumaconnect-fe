"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavbarDataType } from "@/types/CommonTypes";

// const languages = [
//   { label: "English", value: "en" },
//   { label: "සිංහල", value: "si" },
//   { label: "தமிழ்", value: "ta" },
// ];

export default function Navbar({ data }: { data: NavbarDataType }) {
  const { link, navbarButton } = data;

  const [isOpen, setIsOpen] = useState(false);
  // const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  // const [selectedLanguage, setSelectedLanguage] = useState("en");
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  // const closeDropdown = () => setIsDropdownOpen(false);

  // const handleLanguageSelect = (lang: string) => {
  //   setSelectedLanguage(lang);
  //   closeDropdown();
  // };

  // useEffect(() => {
  //   const handleClickOutside = (event: MouseEvent) => {
  //     if (
  //       dropdownRef.current &&
  //       !dropdownRef.current.contains(event.target as Node)
  //     ) {
  //       closeDropdown();
  //     }
  //   };

  //   const handleEscape = (event: KeyboardEvent) => {
  //     if (event.key === "Escape") {
  //       closeDropdown();
  //     }
  //   };

  //   document.addEventListener("mousedown", handleClickOutside);
  //   document.addEventListener("keydown", handleEscape);

  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //     document.removeEventListener("keydown", handleEscape);
  //   };
  // }, []);

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="container mx-auto px-4 flex items-center justify-between py-4">
        <Link
          href="/"
          className="text-2xl font-bold text-[#2F7CC4] flex-shrink-0">
          Rheuma<span className="text-gray-800">Connect</span>
        </Link>

        <nav className="hidden md:flex items-center gap-x-6">
          {link.map(({ linkText, linkUrl }) => (
            <Link
              key={linkText}
              href={linkUrl || "#"}
              className={`hover:text-blue-600 text-gray-800 font-medium ${
                pathname === linkUrl ? "text-blue-600" : ""
              }`}>
              {linkText}
            </Link>
          ))}

          <Link href={navbarButton?.buttonLink || "#"}>
            <button
              className="bg-[#2F7CC4] text-white rounded-[10px] text-[14px] font-medium hover:bg-[#276ca3] transition flex items-center justify-center"
              style={{ width: "98px", height: "38px", lineHeight: "18px" }}>
              {navbarButton?.buttonText}
            </button>
          </Link>

          {/* <div className="relative" ref={dropdownRef}>
            <button
              onClick={toggleDropdown}
              className="bg-white border border-gray-400 text-gray-800 rounded-[10px] text-[14px] font-medium flex items-center justify-center hover:bg-gray-100 transition"
              style={{ width: "98px", height: "38px", lineHeight: "18px" }}>
              <span>English</span>
              <svg
                className={`w-4 h-4 text-black transform ${
                  isDropdownOpen ? "rotate-180" : "rotate-0"
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {isDropdownOpen && (
              <div className="absolute mt-2 w-40 bg-white border border-gray-200 rounded shadow-lg">
                {languages.map(({ label, value }) => (
                  <button
                    key={value}
                    onClick={() => handleLanguageSelect(value)}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-200 text-gray-800">
                    {label}
                  </button>
                ))}
              </div>
            )}
          </div> */}
        </nav>

        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-800 focus:outline-none"
          aria-label="Toggle Menu">
          {isOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={closeMenu}>
          <div
            className="absolute top-0 left-0 w-64 bg-white shadow-lg h-full rounded-r-md"
            onClick={(e) => e.stopPropagation()}>
            <div className="p-6 space-y-4">
              {link.map(({ linkText, linkUrl }) => (
                <Link
                  key={linkText}
                  href={linkUrl || "#"}
                  onClick={closeMenu}
                  className={`block py-2 px-4 text-gray-800 hover:bg-gray-200 rounded ${
                    pathname === linkUrl
                      ? "bg-gray-200 font-bold text-blue-600"
                      : ""
                  }`}>
                  {linkText}
                </Link>
              ))}
              <button
                className="px-6 py-2 bg-[#2F7CC4] text-white rounded-full text-sm hover:bg-[#276ca3] transition"
                style={{ width: "98px", height: "38px" }}>
                Explore
              </button>
              <div className="mt-4">
                <div className="relative" ref={dropdownRef}>
                  {/* <button
                    onClick={toggleDropdown}
                    className="px-4 py-2 bg-white border border-gray-300 rounded-full text-sm flex items-center space-x-2 shadow-sm hover:bg-gray-100 transition w-full">
                    <span className="text-black">
                      {
                        languages.find(
                          (lang) => lang.value === selectedLanguage
                        )?.label
                      }
                    </span>
                    <svg
                      className={`w-4 h-4 text-black transform ${
                        isDropdownOpen ? "rotate-180" : "rotate-0"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button> */}
                  {/* {isDropdownOpen && (
                    <div className="absolute mt-2 w-full bg-white border border-gray-200 rounded shadow-lg">
                      {languages.map(({ label, value }) => (
                        <button
                          key={value}
                          onClick={() => handleLanguageSelect(value)}
                          className="block w-full text-left px-4 py-2 hover:bg-gray-200 text-gray-800">
                          {label}
                        </button>
                      ))}
                    </div>
                  )} */}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
