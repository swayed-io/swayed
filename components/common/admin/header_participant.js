import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Link from "next/link";
import { useRouter } from "next/router";
import { getAuth } from "firebase/auth";

<<<<<<< HEAD
export default function HeaderParticipant() {
  let au = getAuth();
  let user = au.currentUser;
=======
import React, {useState} from "react";

import {getAuth} from "firebase/auth";

export default function Header_participant() {
    let au = getAuth();
    let user = au.currentUser;

    const [navbarOpen, setNavbarOpen] = React.useState(false);
    
    return (
        <div className=" top-0   ">
            <nav className="w-full ">
                <div className="py-5 md:py-2  mx-auto px-6  flex items-center justify-between">

                    <p className="text-lg font-semibold">Dashboard</p>
                    <div>

                        <button onClick={
                                () => setNavbarOpen(!navbarOpen)
                            }
                            className="sm:inline md:hidden ">
                            <img src="/img/hamburguer_icon.svg" className='ml-48'/>
                        </button>
                        <div id="menu" className="md:inline sm:inline lg:inline hidden">
                            <div className="flex flex-row">
                                <div className="flex flex-col  text-right">

                                    <p className="text-sm text-black font-medium ">Jhon Smith</p>
                                    <div className="flex flex-row gap-2">
                                        <img src="/img/navbar_icon.svg" className="items-center"/>
                                        <p className="text-xs text-black opacity-40 font-regular ">3 screeners left</p>
                                    </div>
                                </div>
                                <div className="ml-4">

                                    <a href="#" className="block shrink-0">

                                        <img alt="Man" src="/img/profile_icon.svg" className="  object-cover"/>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
>>>>>>> 5ebd4bc36a0acc51c6f207e826a5907e1c8b8e8f

  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const router = useRouter();
  return (
    <div className=" top-0   ">
      <nav className="w-full ">
        <div className="py-5 md:py-2  mx-auto px-6  flex items-center justify-between">
          <p className="text-lg font-semibold">Dashboard</p>
          <div>
            <button
              onClick={() => setNavbarOpen(!navbarOpen)}
              className="sm:inline md:hidden "
            >
              <img src="/img/hamburguer_icon.svg" className="ml-48" />
            </button>
            <div id="menu" className="md:inline sm:inline lg:inline hidden">
              <div className="flex flex-row">
                <div className="flex flex-col  text-right">
                  <p className="text-sm text-black font-medium ">Jhon Smith</p>
                  <div className="flex flex-row gap-2">
                    <img src="/img/navbar_icon.svg" className="items-center" />
                    <p className="text-xs text-black opacity-40 font-regular ">
                      3 screeners left
                    </p>
                  </div>
                </div>
                <div className="ml-4">
                  <a href="#" className="block shrink-0">
                    <img
                      alt="Man"
                      src="/img/profile_icon.svg"
                      className="  object-cover"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className={!navbarOpen ? "hidden" : " inline"}>
        <nav className=" flex flex-col   text-base sm:hidden bg-secondary py-2 shadow-md border-b-2 border-gray-700   ">
          <p>{user?.email}</p>
          <img src="/img/profile_icon.svg" />
        </nav>
      </div>
    </div>
  );
}

{
  /*
        <div className="flex items-center justify-end gap-4">
      <div className="flex items-center gap-4">
     

       
         <div className="items-center">
          <span className="text-sm">Jhon Smith</span>
          <p className="text-sm">3 screeners left</p>
            
         </div>
       
      </div>

     

      <a href="#" className="block shrink-0">
        <span className="sr-only">Profile</span>
        <img
          alt="Man"
          src="/img/profile_icon.svg"
          className="  object-cover"
        />
      </a>
    </div>
    */
}
