import React from "react";
import logo from "../assets/webin.png";
import Container from "@/components/Container";

const Footer = () => {
  return (
    <footer className="bg-gray-100 mt-12">
      <Container>
        <div className="mx-auto w-full p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <a href="#" className="flex items-center">
                <img src={logo} className="h-[100px]" alt="webin Logo" />
              </a>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-heading uppercase">
                  Resources
                </h2>
                <ul className="text-body font-medium">
                  <li className="mb-4">
                    <a href="https://flowbite.com/" className="hover:underline">
                      Flowbite
                    </a>
                  </li>
                  <li>
                    <a href="https://tailwindcss.com/" className="hover:underline">
                      Tailwind CSS
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-heading uppercase">
                  Follow us
                </h2>
                <ul className="text-body font-medium">
                  <li className="mb-4">
                    <a
                      href="https://github.com/themesberg/flowbite"
                      className="hover:underline"
                    >
                      Github
                    </a>
                  </li>
                  <li>
                    <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">
                      Discord
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-heading uppercase">
                  Legal
                </h2>
                <ul className="text-body font-medium">
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Terms &amp; Conditions
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <hr className="my-6 border-default sm:mx-auto lg:my-8" />

          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-body sm:text-center">
              Designed by Aminul Islam
            </span>
            <div className="flex mt-4 sm:justify-center sm:mt-0">
              <a
                href="https://www.facebook.com/webinagency"
                target="_blank"
                className="text-body hover:text-heading"
              >
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">Facebook page</span>
              </a>

              <a href="#" className="text-body hover:text-heading ml-5">
                {/* Discord SVG */}
              </a>

              <a href="#" className="text-body hover:text-heading ml-5">
                {/* Twitter SVG */}
              </a>

              <a href="#" className="text-body hover:text-heading ml-5">
                {/* GitHub SVG */}
              </a>

              <a href="#" className="text-body hover:text-heading ml-5">
                {/* Dribbble SVG */}
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
