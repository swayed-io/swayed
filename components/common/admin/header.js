import AnchorLink from "react-anchor-link-smooth-scroll";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { getAuth } from "firebase/auth";

export default function Header() {
  let au = getAuth();
  let user = au.currentUser;

  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const router = useRouter();
  return (
    <div className=" top-0 bg-white  ">
      <nav className="w-full ">
        <div className="py-5 md:py-2  mx-auto px-6  flex items-center justify-between">
          <img
            src="/img/logo_blue.png"
            className="sm:ml-12 ml-0 sm:w-24 w-36"
            alt="logo"
          />

          <div>
            <button
              onClick={() => setNavbarOpen(!navbarOpen)}
              className="sm:inline md:hidden "
            >
              <img src="/img/hamburguer_icon.svg" className="ml-48" />
            </button>
            <div id="menu" className="md:inline sm:inline lg:inline hidden">
              <p>{user?.email}</p>
            </div>
          </div>
        </div>
      </nav>
      <div className={!navbarOpen ? "hidden" : " inline"}>
        <nav className=" flex flex-col   text-base sm:hidden bg-secondary py-2 shadow-md border-b-2 border-gray-700   ">
          <p>{user?.email}</p>
        </nav>
      </div>
    </div>
  );
}
