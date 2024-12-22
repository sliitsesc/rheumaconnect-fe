"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="container mx-auto px-4 flex items-center justify-between py-4">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          Rheuma<span className="text-gray-800">Connect</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          {[
            { href: "/", label: "Home" },
            { href: "/categories", label: "Categories" },
            { href: "/clinic", label: "Clinic" },
            { href: "/contact", label: "Contact" },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`hover:text-blue-600 text-gray-800 font-medium ${
                pathname === href ? "underline text-blue-600" : ""
              }`}
            >
              {label}
            </Link>
          ))}
          <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
            Explore
          </button>
        </nav>

        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-800 focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
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
              xmlns="http://www.w3.org/2000/svg"
            >
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
          onClick={closeMenu}
        >
          <div
            className="absolute top-0 left-0 w-64 bg-white shadow-lg h-full rounded-r-md"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 space-y-4">
              {[
                { href: "/", label: "Home" },
                { href: "/categories", label: "Categories" },
                { href: "/clinic", label: "Clinic" },
                { href: "/contact", label: "Contact" },
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={closeMenu}
                  className={`block py-2 px-4 text-gray-800 hover:bg-gray-200 rounded ${
                    pathname === href
                      ? "bg-gray-200 font-bold text-blue-600"
                      : ""
                  }`}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
