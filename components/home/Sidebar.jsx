import Link from "next/link";
import React from "react";
import { navlinks } from "./common/Helper";
import { MenuIcon } from "./common/Icons";
import { useRouter } from "next/router";

const Sidebar = ({ isSidebarOpen, setSidebarOpen }) => {
  const router = useRouter();
  return (
    <>
      {isSidebarOpen && (
        <div
          onClick={() => setSidebarOpen((pre) => !pre)}
          className="z-30 fixed left-0 w-full h-full bg-black opacity-20 top-0  transition-all duration-300 ease-in"
        ></div>
      )}
      <div
        className={`h-screen max-h-full flex flex-col justify-  shadow-lg z-40 w-full p-3 max-w-[240px] fixed top-0 transition-all duration-200 ease-in  xl:hidden ${
          isSidebarOpen ? "left-0  bg-white" : "-left-[240px]"
        }`}
      >
        <span
          onClick={() => setSidebarOpen((pre) => !pre)}
          className="absolute top-2 right-2"
        >
          <MenuIcon />
        </span>

        <ul className="flex flex-col items-center space-y-4  pt-10">
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
        {router.asPath === "/participants" ? (
          <Link href="/signin">
            <a className="flex sm:hidden justify-center mt-8  items-center px-6 sm:px-8 py-2 h-[44px] border-4 border-black text-black rounded-full font-semibold text-base transition ease-in-out duration-200  hover:-translate-y-1">
              {" "}
              Sign in
            </a>
          </Link>
        ) : (
          <Link href="/signup">
            <a className="flex items-center justify-center  mt-8 px-6 sm:px-8 py-2 h-[44px] bg-gradient-to-r from-primary-100 to-secondary-100 text-white rounded-full border-0  focus:outline-none hover:bg-gray-200  text-base transition ease-in-out duration-200 bg-blue-500 hover:-translate-y-1">
              Get Started
            </a>
          </Link>
        )}
      </div>
    </>
  );
};

export default Sidebar;

export const CrossIcon = () => {
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
          d="M11.25 4.75L4.75 11.25M4.75 4.75L11.25 11.25"
          stroke="#000000"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
};
