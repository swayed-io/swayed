import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { navlinks } from "./common/Helper";
import { MenuIcon } from "./common/Icons";

const Navbar = ({ setSidebarOpen }) => {
  const router = useRouter();
  return (
    <>
      <nav className="bg-white p-3 lg:px-0 lg:py-1 ff-Roboto">
        <div className="max-w-[1170px] mx-auto flex items-center justify-between">
          <div className="w-full sm:w-fit">
            <img onClick={()=> router.push('/')}
              src="/img/logo_blue.png"
              className="max-w-[80px] sm:max-w-[100px] cursor-pointer"
              alt="logo"
              
            />
          </div>

          <ul className="hidden lg:flex space-x-7">
            {navlinks &&
              navlinks.map((obj, index) => (
                <li key={index}>
                  <a
                    href={obj.url}
                    className="text-[#282828] font-medium transition-all duration-200 ease-in hover:text-[#4DA3F0]"
                  >
                    {obj.name}
                  </a>
                </li>
              ))}
          </ul>

          <div className="flex justify-center items-center w-full sm:w-fit">
            <span className="hidden sm:block">
              {router.asPath === "/participants" ? (
                <Link href="/signup">
                  <a className="flex items-center px-6 sm:px-8 py-2 h-[44px] bg-gradient-to-r from-primary-100 to-secondary-100 text-white rounded-full border-0  focus:outline-none hover:bg-gray-200  text-base transition ease-in-out duration-200 bg-blue-500 hover:-translate-y-1">
                    Start Earning Free
                  </a>
                </Link>
              ) : (
                <Link href="/signup">
                  <a className="flex items-center px-6 sm:px-8 py-2 h-[44px] bg-gradient-to-r from-primary-100 to-secondary-100 text-white rounded-full border-0  focus:outline-none hover:bg-gray-200  text-base transition ease-in-out duration-200 bg-blue-500 hover:-translate-y-1">
                    Get Started
                  </a>
                </Link>
              )}
            </span>
            {router.asPath === "/participants" && (
              <Link href="/signin">
                <a className="w-full sm:w-fit ml-2 sm:ml-3 hidden sm:flex  items-center justify-center px-4 sm:px-8 py-2 h-[44px] border-4 border-black text-black rounded-full font-semibold text-base transition ease-in-out duration-200  hover:-translate-y-1">
                  Sign in
                </a>
              </Link>
            )}
          </div>
          <span
            className="lg:hidden w-full flex justify-end"
            onClick={() => setSidebarOpen(true)}
          >
            <MenuIcon />
          </span>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

export const HumburgerIcon = () => {
  return (
    <>
      <svg
        width="30"
        height="30"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.75 12.25H13.25M2.75 8.25H13.25M2.75 4.25H13.25"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
};
