import ProjectCard from "@/components/project-card/project-card";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-signature-terracotta text-dark-gray font-sans ">
      <header className=" absolute top-0 left-1/2 -translate-x-1/2 z-50 max-w-5xl w-full">
        <nav className="text-4xl flex lg:justify-between">
          <div className="flex items-center pt-6 pl-4 lg:pl-0">
            <div className="lg:hidden">
              <Link
                href="/"
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
                id="hamburger-btn"
                className="text-dark-gray focus:outline-none absolute top-4 right-4 text-2xl"
              >
                <svg
                  id="hamburger-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-14 w-14"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>

                <svg
                  id="close-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 hidden"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
            <ul
              id="desktop-menu"
              className="hidden lg:flex list-none justify-between space-x-24 mr-8 font-semibold underline"
            >
              <Link href="/">
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
              <a href="#skills">
                <li className="hover:text-hoverBlue cursor-pointer hover:scale-110 transition-transform duration-300">
                  Skills
                </li>
              </a>
              <a href="#about">
                <li className="hover:text-hoverBlue cursor-pointer hover:scale-110 transition-transform duration-300">
                  About me
                </li>
              </a>

              <a href="./src/pages/info-page.html#projects">
                <li className="hover:text-hoverBlue cursor-pointer hover:scale-110 transition-transform duration-300">
                  Projects
                </li>
              </a>

              <a href="./src/pages/info-page.html#resume">
                <li className="hover:text-hoverBlue cursor-pointer hover:scale-110 transition-transform duration-300">
                  Resume
                </li>
              </a>
            </ul>

            <div
              id="mobile-menu"
              className="lg:hidden fixed inset-0 bg-softBeige opacity-90 hidden z-50"
            >
              <ul className="flex flex-col items-center justify-center h-full space-y-8 text-black">
                <li className="text-3xl py-10 hover:text-gray-300 hover:scale-110 transition-transform duration-300">
                  <a href="#skills" className="block w-full text-center">
                    Skills
                  </a>
                </li>
                <li className="text-3xl py-10 hover:text-gray-300 hover:scale-110 transition-transform duration-300">
                  <a href="#about" className="block w-full text-center">
                    About me
                  </a>
                </li>
                <li className="text-3xl py-10 hover:text-gray-300 hover:scale-110 transition-transform duration-300">
                  <a
                    href="./src/pages/info-page.html#projects"
                    className="block w-full text-center"
                  >
                    Projects
                  </a>
                </li>
                <li className="text-3xl py-10 hover:text-gray-300 hover:scale-110 transition-transform duration-300">
                  <a
                    href="./src/pages/info-page.html#resume"
                    className="block w-full text-center"
                  >
                    Resume
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <main className="flex flex-1 w-full max-w-5xl flex-col items-center justify-between py-32 sm:items-start">
        <section className="grid grid-cols-2">
          <ProjectCard />
        </section>
      </main>
    </div>
  );
}
