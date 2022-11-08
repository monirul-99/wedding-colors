import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../Pages/images/icns.png";

const Footer = () => {
  return (
    <div>
      <footer className="container mx-auto p-4 shadow md:px-6 md:py-8 bg-gray-900">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link className="flex items-center mb-4 sm:mb-0">
            <img src={Logo} className="mr-3 w-1/12" alt="Flowbite Logo" />
            <span className="self-center text-2xl -mb-4 font-semibold whitespace-nowrap  text-white">
              Wedding Colors
            </span>
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0  ">
            <li>
              <Link className="mr-4 hover:underline md:mr-6 ">About</Link>
            </li>
            <li>
              <Link className="mr-4 hover:underline md:mr-6">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link className="mr-4 hover:underline md:mr-6 ">Licensing</Link>
            </li>
            <li>
              <Link className="hover:underline">Contact</Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2022{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            Wedding-Colors™
          </a>
          . All Rights Reserved.
        </span>
      </footer>
    </div>
  );
};

export default Footer;
