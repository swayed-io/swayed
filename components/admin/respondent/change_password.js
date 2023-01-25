import { useState } from "react";
export default function ChangePassword() {
  const [password, setPassword] = useState();
  const [repassword, setRepassword] = useState("");
  const saveNewPassword = () => {
    const message = "";
    const validate = true;
    if (password === "") {
    }
  };

  return (
    <div>
      <div className="bg-white p-8">
        <div className="flex flex-col p-4 mx-auto w-96">
          <div>
            <div>
              <div className="relative">
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-lg border-gray-200 bg-background-100 placeholder-opacity-40  font-medium p-4 pr-12 text-sm shadow-sm"
                  placeholder="New password"
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
            <div>
              <div className="relative">
                <input
                  type="password"
                  name="password"
                  value={repassword}
                  onChange={(e) => setRepassword(e.target.value)}
                  className="w-full rounded-lg border-gray-200 bg-background-100 placeholder-opacity-40  font-medium p-4 pr-12 text-sm shadow-sm"
                  placeholder="Confirm New Password"
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
