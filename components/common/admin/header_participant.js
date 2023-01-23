
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

                </div>

            </nav>
            <div className={
                !navbarOpen ? "hidden" : " inline"
            }>
                <nav className=" flex flex-col   text-base sm:hidden bg-secondary py-2 shadow-md border-b-2 border-gray-700   ">

                    <p>{
                        user ?. email
                    }</p>
                    <img src="/img/profile_icon.svg"/>

                </nav>
            </div>
        </div>
    )
}



