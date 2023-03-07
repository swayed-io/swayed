import Link from "next/link";
import React, { useEffect, useState } from "react";



import { useRouter } from "next/router";
import useAuth from "../../../hook/auth";

const Sidebar = ({ isSidebarOpen, setSidebarOpen }) => {
  const router = useRouter();
  const [currentUser, setCurrentUser] = useState(null);
  const { user } = useAuth()

  useEffect(() => {
    if (user) {
      setCurrentUser(user.reloadUserInfo)
    }
  }, [user])
  return (
    <>
      {isSidebarOpen && (
        <div
          onClick={() => setSidebarOpen((pre) => !pre)}
          className="z-30 fixed right-0 w-full h-full bg-black opacity-20 top-0  transition-all duration-300 ease-in"
        ></div>
      )}
      <div
        className={`h-screen max-h-full flex flex-col justify-   shadow-lg z-40 w-full p-3 max-w-[240px] fixed top-0 transition-all duration-200 ease-in  xl:hidden ${
          isSidebarOpen ? "right-0  " : "-right-[240px]"
        }`}
      >
           <ul className="w-56 bg-gradient-to-b from-primary-100   to-secondary-100 rounded-lg z-30 fixed   h-full    ">
        <div className="flex flex-row p-4">
          <div className="">
            <img className="object-cover w-10 h-10 rounded-lg" src={currentUser?.photoUrl ? currentUser.photoUrl : "/img/profile_icon.svg"} />

          </div>
          <div className="ml-2">
          <p className="text-sm text-white font-bold text-start ">{currentUser?.displayName ? currentUser?.displayName : "_"}</p>
          <p className="text-xs text-white opacity-40 font-regular text-start ">
                      3 screeners left
                    </p>
          </div>

        </div>
                  <li className="mb-4 active:bg-secondary-100 rounded-xl p-4 opacity-60 active:opacity-100 text-opacity-60 active:text-opacity-100  ">
                    <Link href="#projects">
                      <a className="flex flex-row ">
                        <span>
                          <img
                            src="/img/projects_icon.svg"
                            className="w-5 h-5 "
                          />
                        </span>
                        <p className="ml-4 text-white font-medium text-sm ">
                          Projects
                        </p>
                      </a>
                    </Link>
                  </li>
                  <details className="group [&_summary::-webkit-details-marker]:hidden rounded-lg hover:bg-white hover:bg-opacity-20">
                    <summary className="flex items-dcenter px-4 py-2  rounded-lg cursor-pointer  ">
                      <div className="flex flex-row  opacity-60 active:opacity-100 text-opacity-60">
                        <img src="/img/earn_icon.svg" className="w-5 h-5 " />
                        <span className="ml-4 text-white font-medium text-sm ">
                          Earn and Cashout
                        </span>
                        <span className="ml-4 text-white transition duration-300 shrink-0 group-open:-rotate-180">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                      </div>
                    </summary>

                    <nav
                      aria-label="Users Nav"
                      className="flex flex-col mt-2 ml-8 space-y-2 py-2 px-2 opacity-60 text-opacity-60 active:opacity-100"
                    >
                      <Link href="#earn">
                        <a className="px-8 py-2 text-white rounded-lg font-medium text-sm hover:bg-secondary-100 ">
                          Earn
                        </a>
                      </Link>
                      <Link href="#surveys">
                        <a className="px-8 py-2  text-white rounded-lg font-medium text-sm hover:bg-secondary-100  ">
                          Surveys
                        </a>
                      </Link>
                      <Link href="#cashout">
                        <a className="px-8 py-2  text-white rounded-lg font-medium text-sm hover:bg-secondary-100  ">
                          Cashout
                        </a>
                      </Link>
                    </nav>
                  </details>
                  <li className="mb-4 active:bg-secondary-100 rounded-xl p-4 opacity-60 active:opacity-100 text-opacity-60 active:text-opacity-100  ">
                    <Link href="#messages">
                      <a className="flex flex-row ">
                        <span>
                          <img
                            src="/img/messages_icon.svg"
                            className="w-5 h-5 "
                          />
                        </span>
                        <p className="ml-4 text-white font-medium text-sm">
                          Messages
                        </p>
                      </a>
                    </Link>
                  </li>
                  <li className="mb-4 active:bg-secondary-100 rounded-xl p-4 opacity-60 active:opacity-100 text-opacity-60 active:text-opacity-100  ">
                    <Link href="#referrals">
                      <a className="flex flex-row ">
                        <span>
                          <img
                            src="/img/referrals_icon.svg"
                            className="w-5 h-5 "
                          />
                        </span>
                        <p className="ml-4 text-white font-medium text-sm">
                          Referrals
                        </p>
                      </a>
                    </Link>
                  </li>
                  <details className="group [&_summary::-webkit-details-marker]:hidden rounded-lg hover:bg-white hover:bg-opacity-20">
                    <summary className="flex items-center px-4 py-2  rounded-lg cursor-pointer  ">
                      <div className="flex flex-row  opacity-60 active:opacity-100 text-opacity-60">
                        <img src="/img/account_icon.svg" className="w-5 h-5 " />
                        <span className="ml-4 text-white font-medium text-sm ">
                          My Account
                        </span>
                        <span className="ml-4 text-white transition duration-300 shrink-0 group-open:-rotate-180">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                      </div>
                    </summary>

                    <nav
                      aria-label="Users Nav"
                      className="flex flex-col mt-2 ml-8 space-y-2 py-2 px-2 opacity-60 text-opacity-60 active:opacity-100"
                    >
                      <Link href="#editprofile">
                        <a className="px-8 py-2 text-white rounded-lg font-medium text-sm hover:bg-secondary-100 ">
                          Edit Profile
                        </a>
                      </Link>
                      <Link href="#accountdetails">
                        <a className="px-8 py-2  text-white rounded-lg font-medium text-sm hover:bg-secondary-100  ">
                          Account Details
                        </a>
                      </Link>
                      <Link href="#changepassword">
                        <a className="px-8 py-2  text-white rounded-lg font-medium text-sm hover:bg-secondary-100  ">
                          Change Password
                        </a>
                      </Link>
                      <Link href="#socialaccounts">
                        <a className="px-8 py-2  text-white rounded-lg font-medium text-sm hover:bg-secondary-100  ">
                          Social Accounts
                        </a>
                      </Link>
                      <Link href="#notifications">
                        <a className="px-8 py-2  text-white rounded-lg font-medium text-sm hover:bg-secondary-100  ">
                          Notifications
                        </a>
                      </Link>
                    </nav>
                  </details>
                  <li className="mb-4 active:bg-secondary-100 rounded-xl p-4 opacity-60 active:opacity-100 text-opacity-60 active:text-opacity-100  ">
                    <Link href="#">
                      <a className="flex flex-row ">
                        <span>
                          <img src="/img/earn_icon.svg" className="w-5 h-5 " />
                        </span>
                        <p className="ml-4 text-white font-medium text-sm">
                          Help Center
                        </p>
                      </a>
                    </Link>
                  </li>
                </ul>
        <span
          onClick={() => setSidebarOpen((pre) => !pre)}
          className="absolute top-2 right-2"
        >
          
        </span>

     
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
