"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { NavbarType } from "@/types/CommonTypes";
// import arthritisLogo from "/public/arthritis_logo.png"; // Adjust the path as needed

export default function Navbar({ data }: { data: NavbarType }) {
  const { link = [], navbarButton = null } = data || {};

  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="container mx-auto px-4 flex items-center justify-between py-4">
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/arthritis_logo.png"
            alt="Arthritis Logo"
            width={175} // Adjust the width as neede
            height={70}
            className="cursor-pointer"
          />
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

          {navbarButton && (
            <Link href={navbarButton.buttonLink || "#"}>
              <button
                className="bg-[#2F7CC4] text-white rounded-[10px] text-[14px] font-medium hover:bg-[#276ca3] transition flex items-center justify-center"
                style={{ width: "98px", height: "38px", lineHeight: "18px" }}>
                {navbarButton.buttonText}
              </button>
            </Link>
          )}
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
              {navbarButton && (
                <button
                  className="px-6 py-2 bg-[#2F7CC4] text-white rounded-full text-sm hover:bg-[#276ca3] transition"
                  style={{ width: "98px", height: "38px" }}>
                  {navbarButton.buttonText}
                </button>
              )}
              <div className="mt-4">
                <div className="relative" ref={dropdownRef}>
                  {/* Language dropdown code here */}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
