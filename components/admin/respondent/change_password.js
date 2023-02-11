import cogoToast from "cogo-toast";
import { useState } from "react";
export default function ChangePassword({ authService }) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isRepasswordVisible, setIsRepasswordVisible] = useState(false);
  const [password, setPassword] = useState();
  const [repassword, setRepassword] = useState("");
  const saveNewPassword = () => {
    let message = "";
    let validate = true;
    if (password === "") {
      message = "Please choose the new password password";
      validate = false;
    }
    if (repassword === "") {
      message = "Please confirm your new password";
      validate = false;
    }
    if (password !== repassword) {
      message = "The passwords are not identical";
      validate = false;
    }
    if (validate) {
      authService.updateUserPassword(password);
      setPassword("");
      setRepassword("");
      setIsPasswordVisible(false);
      setIsRepasswordVisible(false);
    } else {
      cogoToast.warn(message);
      validate = true;
    }
  };

  return (
    <div>
      <div className="bg-white p-8">
        <div className="flex flex-col p-4 mx-auto w-96">
          <div>
            <div className="mb-2">
              <div className="relative">
                <input
                  type={isPasswordVisible ? "text" : "password"}
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-lg border-gray-200 bg-background-100 placeholder-opacity-40  font-medium p-4 pr-12 text-sm shadow-sm"
                  placeholder="New password"
                />

                <span
                  onClick={() => setIsPasswordVisible((prev) => !prev)}
                  className="absolute inset-y-0 right-4 inline-flex items-center"
                >
                  {isPasswordVisible ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      className="w-5 h-5 text-gray-400"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                      />
                    </svg>
                  ) : (
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
                  )}
                </span>
              </div>
            </div>
            <div>
              <div className="relative">
                <input
                  type={isRepasswordVisible ? "text" : "password"}
                  name="password"
                  value={repassword}
                  onChange={(e) => setRepassword(e.target.value)}
                  className="w-full rounded-lg border-gray-200 bg-background-100 placeholder-opacity-40  font-medium p-4 pr-12 text-sm shadow-sm"
                  placeholder="Confirm New Password"
                />

                <span
                  onClick={() => setIsRepasswordVisible((prev) => !prev)}
                  className="absolute inset-y-0 right-4 inline-flex items-center"
                >
                  {isRepasswordVisible ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      className="w-5 h-5 text-gray-400"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                      />
                    </svg>
                  ) : (
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
                  )}
                </span>
              </div>
            </div>
            <div>
              <button
                onClick={saveNewPassword}
                className="px-4 py-2 w-full font-medium bg-gradient-to-tr from-primary-100 to-secondary-100 text-white rounded-full border-0  focus:outline-none hover:bg-gray-200  sm:ml-0 ml-64  text-sm mt-8 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
