import React from "react";
import cogoToast from "cogo-toast";
import Link from "next/link";

export default function Signin({ login }) {
  const [disable, setDisable] = React.useState(false);
  const [person, setPerson] = React.useState({ email: "", password: "" });

  const handleChange = (e) => {
    setPerson({
      ...person,
      [e.target.name]: e.target.value,
    });
  };

  const LogWithEmail = async (e) => {
    e.preventDefault();
    setDisable(true);
    let validate = true;
    let message = "";

    if (person.password == "") {
      message = "Please write your password!";
      validate = false;
    }
    if (person.email == "") {
      message = "Please write your email!";
      validate = false;
    }

    if (validate) {
      login.loginWithEmail(person);
    } else {
      cogoToast.warn(message);
      validate = true;
      setDisable(false);
    }
  };

  return (
    <div>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 ">
        <div className="">
          <div className="mx-auto max-w-lg text-center ">
            <h1 className="text-2xl font-bold sm:text-3xl">Welcome back !</h1>

            <p className="mt-4 text-gray-500">
              {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero
              nulla eaque error neque ipsa culpa autem, at itaque nostrum! */}
              Still don&apos;t have an account?
              <Link href="/signup">
                <a className="underline px-2">Signup</a>
              </Link>
            </p>
          </div>

          <div action="" className="mx-auto mt-8 mb-0 max-w-md space-y-4">
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>

              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={person.email}
                  onChange={handleChange}
                  className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                  placeholder="Enter email"
                />

                <span className="absolute inset-y-0 right-4 inline-flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    />
                  </svg>
                </span>
              </div>
            </div>

            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  name="password"
                  value={person.password}
                  onChange={handleChange}
                  className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                  placeholder="Enter password"
                />

                <span className="absolute inset-y-0 right-4 inline-flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </span>
              </div>
            </div>

            <div className="flex flex-col space-y-4 items-center justify-between">
              {/*  <p className="text-sm text-gray-500">
              No account?
              <a className="underline" href="">Sign up</a>
    </p>*/}

              <button
                onClick={LogWithEmail}
                disabled={disable}
                className="block w-full rounded-lg bg-secondary-100 px-5 py-3 transition ease-in-out delay-150 active:bg-green-500  hover:-translate-y-1 hover:scale-110 text-sm font-semibold text-white   disabled:opacity-50"
              >
                Start Earning
              </button>
              <button
                disabled={disable}
                onClick={() => {
                  login.loginWithGoogle();
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
                  login.loginWithFacebook();
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
              {/* login with linkedin */}
              <button
                disabled={disable}
                onClick={() => {
                  login.loginWitLinkedin();
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
            </div>
            <div className=" mx-auto max-w-lg text-center">
              <Link href="/forgot-password">
                <p className="underline text-gray-500 cursor-pointer">Forgot password?</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
