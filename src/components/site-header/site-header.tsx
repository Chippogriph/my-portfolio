"use client";

import { useState } from "react";
import Link from "next/link";
import ThemeButton from "../buttons/theme-buttons/theme-buttons";

export default function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      className={`fixed top-0 z-50 w-full md:px-0 uppercase
        bg-signature-terracotta dark:bg-dark-terracotta-light
      `}
    >
      <nav className="text-4xl flex mx-auto lg:justify-between max-w-5xl">
        <div className="flex items-center py-4 pl-4 md:pl-0 w-full">
          <div className="lg:hidden pl-4">
            <Link
              href="#top"
              className="hover:text-hoverBlue cursor-pointer hover:scale-110 transition-transform duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="#333333"
                className="w-10"
              >
                <path d="M277.8 8.6c-12.3-11.4-31.3-11.4-43.5 0l-224 208c-9.6 9-12.8 22.9-8 35.1S18.8 272 32 272l16 0 0 176c0 35.3 28.7 64 64 64l288 0c35.3 0 64-28.7 64-64l0-176 16 0c13.2 0 25-8.1 29.8-20.3s1.6-26.2-8-35.1l-224-208zM240 320l32 0c26.5 0 48 21.5 48 48l0 96-128 0 0-96c0-26.5 21.5-48 48-48z" />
              </svg>
            </Link>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Stäng meny" : "Öppna meny"}
              className={`focus:outline-none absolute top-4 right-4 text-2xl z-60 ${
                mobileMenuOpen
                  ? "text-white"
                  : "text-dark-gray dark:text-dark-gray"
              }`}
            >
              {mobileMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
          <ul
            id="desktop-menu"
            className="hidden lg:flex list-none justify-between font-semibold w-full"
          >
            <Link href="#top">
              <li className="hover:text-hoverBlue cursor-pointer hover:scale-110 transition-transform duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="#333333"
                  className="w-10"
                >
                  <path d="M277.8 8.6c-12.3-11.4-31.3-11.4-43.5 0l-224 208c-9.6 9-12.8 22.9-8 35.1S18.8 272 32 272l16 0 0 176c0 35.3 28.7 64 64 64l288 0c35.3 0 64-28.7 64-64l0-176 16 0c13.2 0 25-8.1 29.8-20.3s1.6-26.2-8-35.1l-224-208zM240 320l32 0c26.5 0 48 21.5 48 48l0 96-128 0 0-96c0-26.5 21.5-48 48-48z" />
                </svg>
              </li>
            </Link>
            <a href="#about">
              <li className="hover:text-hoverBlue cursor-pointer hover:scale-110 transition-transform duration-300">
                About me
              </li>
            </a>
            <a href="#skills">
              <li className="hover:text-hoverBlue cursor-pointer hover:scale-110 transition-transform duration-300">
                Skills
              </li>
            </a>

            <a href="#projects">
              <li className="hover:text-hoverBlue cursor-pointer hover:scale-110 transition-transform duration-300">
                Projects
              </li>
            </a>

            <ThemeButton />
          </ul>

          {mobileMenuOpen && (
            <div
              id="mobile-menu"
              className="lg:hidden fixed inset-0 bg-softBeige dark:bg-dark-surface z-40"
            >
              <ul className="flex flex-col items-center justify-center h-full space-y-8 text-dark-gray dark:text-dark-text">
                <li>
                  <a href="#about" onClick={() => setMobileMenuOpen(false)}>
                    About me
                  </a>
                </li>
                <li>
                  <a href="#skills" onClick={() => setMobileMenuOpen(false)}>
                    Skills
                  </a>
                </li>

                <li>
                  <a href="#projects" onClick={() => setMobileMenuOpen(false)}>
                    Projects
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
