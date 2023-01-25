import Link from "next/link";
export default function Navbar() {
  return (
    <div className="">
      <div>
        <div className="flex flex-row  w-64  bg-gradient-to-b from-primary-100  to-secondary-100">
          <nav className="from-primary-100 to-secondary-100    flex flex-col h-full ">
            <div className="mt-10 mb-10">
              <Link href="/" passHref>
                <img src="/img/logo_white.png" className=" w-20 mb-3 ml-10" />
              </Link>
              <div className="mt-10 p-4 ">
                <ul className="w-56">
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
              </div>
            </div>
            <li className="ml-4 object-bottom  rounded-xl p-4 opacity-60  text-opacity-60   ">
              <Link href="#">
                <a className="flex flex-row ">
                  <span>
                    <img src="/img/logout_icon.svg" className="w-5 h-5 " />
                  </span>
                  <p className="ml-4 text-white font-medium text-sm">Logout</p>
                </a>
              </Link>
            </li>
          </nav>
        </div>
      </div>
    </div>
  );
}
