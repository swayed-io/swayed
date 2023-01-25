import AnchorLink from "react-anchor-link-smooth-scroll";
import Link from "next/link";
import cogoToast from "cogo-toast";
import React from "react";
import { useRouter } from "next/router";

export default function Footer() {
  const [user, setUser] = React.useState({
    name: "",
    email: "",
    message: "",
  });
  const router = useRouter();

  const [disable, setDisable] = React.useState(false);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const saveinfo = async (e) => {
    e.preventDefault();
    setDisable(true);
    let validate = true;
    let message = "";

    if (user.name == "") {
      message = "Please write your Name!";
      validate = false;
    }
    if (user.email == "") {
      message = "Please write your email!";
      validate = false;
    }

    if (validate) {
      var payload = {
        records: [
          {
            fields: {
              name: user.name,
              email: user.email,
              message: user.message,
            },
          },
        ],
      };

      //upload count for code root
      cogoToast.loading("Sending...").then(async () => {
        await fetch("https://api.airtable.com/v0/app5jVJuOzdd1mrQe/contact", {
          body: JSON.stringify(payload),
          headers: {
            Authorization: "Bearer keyS46GYLYKR3YNPk",
            "Content-Type": "application/json",
          },
          method: "POST",
        })
          .then((res) => res.json())
          .catch((error) => cogoToast.error("Error "))
          .then((response) => {
            cogoToast.success("Sent!");
            setDisable(false);
          });
      });
    } else {
      cogoToast.warn(message);
      validate = true;
      setDisable(false);
    }
  };

  return (
    <footer className="text-white ff-Roboto footer-gradient ">
      <div className="max-w-[1170px] sm:py-16 py-10 mx-auto px-3 xl:px-0">
        <div className="flex flex-wrap justify-center items-center xl:justify-start xl:items-start md:text-left text-center order-first">
          <div className="lg:w-1/3 md:w-1/2 w-full ">
            <img
              src="/img/footerlogo.png"
              className="sm:justify-start justify-center sm:mx-0 mx-auto max-w-[100px]"
              alt="Logo in white"
            />
            <h3 className="lg:text-[28px] md:text-[26px] sm:text-[24px] text-[22px]    sm:my-5 my-4 font-semibold leading-[130%]">
              Share your opinion with the people who value it.
            </h3>
            <p className="lg:text-[18px] md:text-[16px] sm:text-[14px] text-[12px] mb-8 md:mb-12 font-medium">
              It’s a free to signup and you could be applying to your first
              study in under 5 minutes.
            </p>
            <button className="shadow-blue bg-[#4ABEFF] text-white sm:px-6 px-4  sm:py-2 py-1 text-[16px] sm:text-[20px] font-bold rounded-full transition-all ease-in-out duration-150 hover:-translate-y-1">
              Sign Up Free
            </button>
            <div className="mt-8 sm:mt-10 justify-center sm:justify-start hidden md:flex">
              <a
                href=""
                className="transition-all ease-in duration-150 hover:-translate-y-1"
              >
                <img src="/img/fb_icon.svg" alt="fb" />
              </a>
              <a
                href=""
                className="mx-5 transition-all ease-in duration-150 hover:-translate-y-1"
              >
                <img src="/img/ig_icon.svg" alt="ig" />
              </a>
              <a
                href=""
                className="transition-all ease-in duration-150 hover:-translate-y-1"
              >
                <img src="/img/twitter_icon.svg" alt="twitter" />
              </a>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/2 w-full px-4 text-white">
            <h2 className="font-semibold text-center text-white tracking-widest sm:text-[28px] text-[22px] sm:mt-10 mt-8  ">
              Important Links
            </h2>
            <nav className="list-none mb-10  text-center hidden md:block ">
              <li className="mt-4">
                {router.pathname == "/" ? (
                  <AnchorLink
                    className="text-white hover:text-[#4ABEFF] text-base font-medium transition-all ease-in duration-150 "
                    href="#blog"
                  >
                    Blog
                  </AnchorLink>
                ) : (
                  <Link
                    className="text-white hover:text-[#4ABEFF] text-base font-medium transition-all ease-in duration-150 "
                    href="/#blog"
                  >
                    Blog
                  </Link>
                )}
              </li>

              <li className="mt-4">
                {router.pathname == "/" ? (
                  <AnchorLink
                    className="text-white hover:text-[#4ABEFF] text-base font-medium transition-all ease-in duration-150 "
                    href="#researchers"
                  >
                    Researchers
                  </AnchorLink>
                ) : (
                  <Link
                    className="text-white hover:text-[#4ABEFF] text-base font-medium transition-all ease-in duration-150 "
                    href="/#researchers"
                  >
                    Researchers
                  </Link>
                )}
              </li>
              <li className="mt-4">
                {router.pathname == "/" ? (
                  <AnchorLink
                    className="text-white hover:text-[#4ABEFF] text-base font-medium transition-all ease-in duration-150 "
                    href="#participants"
                  >
                    Participants
                  </AnchorLink>
                ) : (
                  <Link
                    className="text-white hover:text-[#4ABEFF] text-base font-medium transition-all ease-in duration-150 "
                    href="/#Participants"
                  >
                    Participants
                  </Link>
                )}
              </li>
              <li className="mt-4">
                {router.pathname == "/" ? (
                  <AnchorLink
                    className="text-white hover:text-[#4ABEFF] text-base font-medium transition-all ease-in duration-150 "
                    href="#about-us"
                  >
                    About Us
                  </AnchorLink>
                ) : (
                  <Link
                    className="text-white hover:text-[#4ABEFF] text-base font-medium transition-all ease-in duration-150 "
                    href="/#about-us"
                  >
                    About Us
                  </Link>
                )}
              </li>
              <li className="mt-4">
                {router.pathname == "/" ? (
                  <AnchorLink
                    className="text-white hover:text-[#4ABEFF] text-base font-medium transition-all ease-in duration-150 "
                    href="#terms-of-service"
                  >
                    Terms of Service
                  </AnchorLink>
                ) : (
                  <Link
                    className="text-white hover:text-[#4ABEFF] text-base font-medium transition-all ease-in duration-150 "
                    href="#terms-of-service"
                  >
                    Terms of Service
                  </Link>
                )}
              </li>
              <li className="mt-4">
                {router.pathname == "/" ? (
                  <AnchorLink
                    className="text-white hover:text-[#4ABEFF] text-base font-medium transition-all ease-in duration-150 "
                    href="#privacy-policy"
                  >
                    Privacy Policy
                  </AnchorLink>
                ) : (
                  <Link
                    className="text-white hover:text-[#4ABEFF] text-base font-medium transition-all ease-in duration-150 "
                    href="/#privacy-policy"
                  >
                    Privacy Policy
                  </Link>
                )}
              </li>
            </nav>
            <div className="flex justify-center text-left md:hidden">
              <nav className="list-none mb-4  text-left mr-8 ">
                <li className="mt-4">
                  {router.pathname == "/" ? (
                    <AnchorLink
                      className="text-white hover:text-[#4ABEFF] text-base font-medium transition-all ease-in duration-150 "
                      href="#blog"
                    >
                      Blog
                    </AnchorLink>
                  ) : (
                    <Link
                      className="text-white hover:text-[#4ABEFF] text-base font-medium transition-all ease-in duration-150 "
                      href="/#blog"
                    >
                      Blog
                    </Link>
                  )}
                </li>

                <li className="mt-4">
                  {router.pathname == "/" ? (
                    <AnchorLink
                      className="text-white hover:text-[#4ABEFF] text-base font-medium transition-all ease-in duration-150 "
                      href="#earners"
                    >
                      Earners
                    </AnchorLink>
                  ) : (
                    <Link
                      className="text-white hover:text-[#4ABEFF] text-base font-medium transition-all ease-in duration-150 "
                      href="/#earners"
                    >
                      Earners
                    </Link>
                  )}
                </li>

                <li className="mt-4">
                  {router.pathname == "/" ? (
                    <AnchorLink
                      className="text-white hover:text-[#4ABEFF] text-base font-medium transition-all ease-in duration-150 "
                      href="#researchers"
                    >
                      Researchers
                    </AnchorLink>
                  ) : (
                    <Link
                      className="text-white hover:text-[#4ABEFF] text-base font-medium transition-all ease-in duration-150 "
                      href="/#researchers"
                    >
                      Researchers
                    </Link>
                  )}
                </li>
                <li className="mt-4">
                  {router.pathname == "/" ? (
                    <AnchorLink
                      className="text-white hover:text-[#4ABEFF] text-base font-medium transition-all ease-in duration-150 "
                      href="#participants"
                    >
                      Participants
                    </AnchorLink>
                  ) : (
                    <Link
                      className="text-white hover:text-[#4ABEFF] text-base font-medium transition-all ease-in duration-150 "
                      href="/#Participants"
                    >
                      Participants
                    </Link>
                  )}
                </li>
              </nav>{" "}
              <nav className="list-none mb-4  text-left ">
                <li className="mt-4">
                  {router.pathname == "/" ? (
                    <AnchorLink
                      className="text-white hover:text-[#4ABEFF] text-base font-medium transition-all ease-in duration-150 "
                      href="#about-us"
                    >
                      About Us
                    </AnchorLink>
                  ) : (
                    <Link
                      className="text-white hover:text-[#4ABEFF] text-base font-medium transition-all ease-in duration-150 "
                      href="/#about-us"
                    >
                      About Us
                    </Link>
                  )}
                </li>
                <li className="mt-4">
                  {router.pathname == "/" ? (
                    <AnchorLink
                      className="text-white hover:text-[#4ABEFF] text-base font-medium transition-all ease-in duration-150 "
                      href="#terms-of-service"
                    >
                      Terms of Service
                    </AnchorLink>
                  ) : (
                    <Link
                      className="text-white hover:text-[#4ABEFF] text-base font-medium transition-all ease-in duration-150 "
                      href="#terms-of-service"
                    >
                      Terms of Service
                    </Link>
                  )}
                </li>
                <li className="mt-4">
                  {router.pathname == "/" ? (
                    <AnchorLink
                      className="text-white hover:text-[#4ABEFF] text-base font-medium transition-all ease-in duration-150 "
                      href="#privacy-policy"
                    >
                      Privacy Policy
                    </AnchorLink>
                  ) : (
                    <Link
                      className="text-white hover:text-[#4ABEFF] text-base font-medium transition-all ease-in duration-150 "
                      href="/#privacy-policy"
                    >
                      Privacy Policy
                    </Link>
                  )}
                </li>
              </nav>
            </div>
          </div>
          <div className="w-full md:hidden justify-center flex">
            <div className="flex my-6 justify-center  gap-6 ">
              <a
                href=""
                className="transition-all ease-in duration-150 hover:-translate-y-1"
              >
                <img src="/img/fb_icon.svg" alt="fb" />
              </a>
              <a
                href=""
                className="mx-5 transition-all ease-in duration-150 hover:-translate-y-1"
              >
                <img src="/img/ig_icon.svg" alt="ig" />
              </a>
              <a
                href=""
                className="transition-all ease-in duration-150 hover:-translate-y-1"
              >
                <img src="/img/twitter_icon.svg" alt="twitter" />
              </a>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/2 w-full">
            <p className="text-center md:hidden   text-white font-semibold ff-Roboto text-[22px] mb-6  ">
              {" "}
              Contact Us
            </p>
            <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-col flex-col justify-center items-end md:justify-start sm:mt-10 mt-0">
              <div className="relative xl:max-w-[370px]  w-full">
                <input
                  type="text"
                  name="name"
                  value={user.name}
                  onChange={handleChange}
                  id="footer-field"
                  placeholder="Name"
                  className="mb-4 w-full bg-white shadow-inputs bg-opacity-[0.12] rounded-full placeholder-white text-opacity-60  focus:bg-transparent focus:ring-2 focus:ring-indigo-200  border-0 focus:border-indigo-500 text-base font-medium outline-none text-white py-2 px-5  leading-8 transition-colors duration-200 ease-in-out "
                />
                <input
                  type="text"
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                  id="footer-field"
                  placeholder="Email"
                  className="mb-4 w-full bg-white shadow-inputs bg-opacity-[0.12] rounded-full placeholder-white text-opacity-60  focus:bg-transparent focus:ring-2 focus:ring-indigo-200 border-0 focus:border-indigo-500 text-base font-medium outline-none text-white py-2 px-5  leading-8 transition-colors duration-200 ease-in-out"
                />
                <textarea
                  type="text"
                  name="message"
                  value={user.message}
                  onChange={handleChange}
                  id="footer-field"
                  placeholder="Write a message"
                  className="mb-2 w-full bg-white resize-none shadow-inputs bg-opacity-[0.12] placeholder  placeholder-white rounded-xl h-24 text-opacity-60  focus:ring-2  focus:bg-transparent border-0  focus:ring-indigo-200 focus:border-indigo-500 font-medium text-base outline-none text-white py-2 px-5  leading-8 transition-colors duration-200 ease-in-out"
                ></textarea>
                <button
                  onClick={saveinfo}
                  disabled={disable}
                  className="flex justify-center items-center mx-auto mt-7 shadow-blue bg-[#4ABEFF] text-white sm:px-6 px-4 sm:py-2 py-1 sm:text-[16px] md:text-[20px] text-[13px] font-bold rounded-full transition-all ease-in-out duration-150 hover:-translate-y-1"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-primary-100">
        <div className="container px-5 py-2 mx-auto justify-center flex items-center">
          <p className="sm:text-[14px] text-[10px] font-manrope text-white sm:ml-6 sm:text-start text-center font-normal">
            Copyright © 2022, Shape the Future. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
