import cogoToast from "cogo-toast";
import { useState } from "react";

const ResetPassword = ({ authService }) => {
  const [email, setEmail] = useState("");
  const [disable, setDisable] = useState(false);
  const sendResetPasswordEmail = () => {
    setDisable(true);
    let validate = true;
    let message = "";
    if (email === "") {
      validate = false;
      message = "Please write your email";
    }
    if (validate) {
      authService.resetPassword(email);
    } else {
      cogoToast.warn(message);
      validate = true;
      setDisable(false);
    }
  };

  return (
    <div>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 ">
        <div className="rounded-md bg-white border-2 p-2 w-1/2 mx-auto shadow-md">
          <div className="mx-auto max-w-lg text-center ">
            <h1 className="text-2xl font-bold sm:text-3xl">
              Forgot password ?
            </h1>
          </div>

          <div action="" className="mx-auto mt-8 mb-0 max-w-md space-y-4">
            <div>
              <label htmlFor="email" className="">
                Email(Required)
              </label>

              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <button
                disabled={disable}
                onClick={sendResetPasswordEmail}
                className="block mx-auto rounded-lg bg-green-700 px-5 py-3 transition ease-in-out delay-150 active:bg-green-500  hover:-translate-y-1 hover:scale-110 text-sm font-semibold text-white   disabled:opacity-50"
              >
                Reset password
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
