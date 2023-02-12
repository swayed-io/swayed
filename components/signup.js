import React, { useState } from "react";
import cogoToast from "cogo-toast";

import Link from "next/link";
import { useRouter } from "next/router";

export default function Signup({ signup, auth }) {
  const [person, setPerson] = useState({
    email: "",
    password: "",
    repassword: "",
  });

  const [disable, setDisable] = useState(false);
  const [form, setForm] = useState({
    visible: "",
    text: "Get started today",
    subtext: "",
    invisible: "hidden",
  });

  const handleChange = (e) => {
    setPerson({ ...person, [e.target.name]: e.target.value });
  };

  const chooseRole = async (e) => {
    setForm({ invisible: "", visible: "hidden" });
  };

  const saveinfoEmail = async (e) => {
    e.preventDefault();
    setDisable(true);
    let validate = true;
    let message = "";

    if (person.password == "") {
      message = "Please write your password!";
      validate = false;
    }

    if (person.password != person.repassword) {
      message = "The password is not equal";
      validate = false;
    }
    if (person.email == "") {
      message = "Please write your email!";
      validate = false;
    }

    if (validate) {
      signup.signupWithEmail(person);
    } else {
      cogoToast.warn(message);
      validate = true;
      setDisable(false);
    }
  };
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 ">
      <div className="mx-auto max-w-lg">
        <h1 className="text-center text-2xl font-bold text-[#413F9D] sm:text-3xl">
          Start Earning Today!
        </h1>
        <h3 className="text-center text-xl font-semibold text-black sm:text-2xl"></h3>
        <div className={`mt-6 mb-0 space-y-4 rounded-lg p-8  ${form.visible}`}>
          <div className="flex flex-row space-x-8">
            <div className="w-1/2 hover:-translate-y-1 hover:scale-110">
              <Link href="/">
                <button>
                  <img src="/img/business.png" />
                  <p className="text-center font-medium text-2xl ">
                    Researcher
                  </p>
                </button>
              </Link>
            </div>
            <div className="w-1/2 hover:-translate-y-1 hover:scale-110">
              <button onClick={chooseRole}>
                <img src="/img/worker.png" />
                <p className="text-center font-medium text-2xl ">Participant</p>
              </button>
            </div>
          </div>
        </div>

        <div className={`mt-6 mb-0 space-y-4 rounded-lg p-8 shadow-2xl ${form.invisible}`}>
          <p className="text-2xl font-medium text-[#413F9D]">Sign up Now!</p>

          <div>
            <label
              htmlFor="email"
              className="text-2xl font-medium text-[#413F9D]"
            >
              Email
            </label>

            <div className="relative mt-1">
              <input
                type="email"
                id="email"
                name="email"
                value={person.email}
                onChange={handleChange}
                className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                placeholder="Enter email"
              />
            </div>
          </div>
          <div className="">
            <label
              htmlFor="name"
              className="text-2xl font-medium text-[#413F9D]"
            >
              Password
            </label>

            <div className="relative mt-1">
              <input
                type="password"
                id="password"
                name="password"
                value={person.password}
                onChange={handleChange}
                className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                placeholder="Enter your Password"
              />
            </div>
          </div>
          <div className="">
            <label
              htmlFor="name"
              className="text-2xl font-medium text-[#413F9D]"
            >
              Repeat your Password
            </label>

            <div className="relative mt-1">
              <input
                type="password"
                id="repassword"
                name="repassword"
                value={person.repassword}
                onChange={handleChange}
                className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                placeholder="Repeat your Password"
              />
            </div>
          </div>

          <button
            onClick={saveinfoEmail}
            disabled={disable}
            className="block w-full rounded-lg bg-secondary-100 px-5 py-3 transition ease-in-out delay-150 active:bg-green-500  hover:-translate-y-1 hover:scale-110 text-sm font-semibold text-white   disabled:opacity-50"
          >
            Sign Up
          </button>
          <button
            disabled={disable}
            onClick={() => {
              signup.loginWithGoogle();
            }}
            className="border-2 border-black w-full mx-auto rounded-lg items-center bg-white px-5 py-3 transition ease-in-out delay-150 active:bg-black  hover:-translate-y-1 hover:scale-110 text-sm font-semibold text-black   disabled:opacity-50"
          >
            <span className="justify-center flex items-center mx-auto">
              <svg
                className="justify-center "
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 12C6 15.3137 8.68629 18 12 18C14.6124 18 16.8349 16.3304 17.6586 14H12V10H21.8047V14H21.8C20.8734 18.5645 16.8379 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C15.445 2 18.4831 3.742 20.2815 6.39318L17.0039 8.68815C15.9296 7.06812 14.0895 6 12 6C8.68629 6 6 8.68629 6 12Z"
                  fill="currentColor"
                />
              </svg>
              Sign in with Google{" "}
            </span>
          </button>
          <button
            disabled={disable}
            onClick={() => {
              signup.loginWithFacebook();
            }}
            className=" w-full mx-auto rounded-lg items-center bg-[#3b5998] px-5 py-3 transition ease-in-out delay-150   hover:-translate-y-1 hover:scale-110 text-sm font-semibold text-white   disabled:opacity-50"
          >
            <span className="justify-center flex items-center mx-auto">
              <svg
                className="justify-center"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.19795 21.5H13.198V13.4901H16.8021L17.198 9.50977H13.198V7.5C13.198 6.94772 13.6457 6.5 14.198 6.5H17.198V2.5H14.198C11.4365 2.5 9.19795 4.73858 9.19795 7.5V9.50977H7.19795L6.80206 13.4901H9.19795V21.5Z"
                  fill="currentColor"
                />
              </svg>
              Sign in with Facebook{" "}
            </span>
          </button>
          {/* signup with linkedin */}
          <button
            disabled={disable}
            onClick={() => {
              signup.loginWitLinkedin();
            }}
            className=" w-full mx-auto rounded-lg items-center bg-[#0077b5] px-5 py-3 transition ease-in-out delay-150   hover:-translate-y-1 hover:scale-110 text-sm font-semibold text-white   disabled:opacity-50"
          >
            <span className="justify-center flex items-center mx-auto">
              <svg
                className="justify-center"
                width="24"
                height="24"
                viewBox="0 0 512 512"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                  fill="currentColor"
                />
              </svg>
              Sign in with LinkedIn{" "}
            </span>
          </button>
          {/* end linked in */}
          <p className="text-center sm:text-medium text-sm">
            By Clicking &apos;Sign Up&apos; I agree to the User interviews{" "}
            <Link href="/terms">
              <a className="text-blue-600  sm:text-medium text-sm">
                Terms of service
              </a>
            </Link>
            ,
            <a className="text-blue-600 sm:text-medium text-sm">
              <Link href="/privacy"> Privacy Policy</Link>
            </a>
            , and{" "}
            <Link href="/cookies">
              <a className="text-blue-600 sm:text-medium text-sm">
                Cookies Policy
              </a>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
