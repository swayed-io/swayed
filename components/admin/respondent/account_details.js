import cogoToast from "cogo-toast";
import { useState } from "react";
export default function AccountDetails({ authService }) {
  const user = authService.getUser();
  const [disable, setDisable] = useState(false);
  const [profile, setProfile] = useState({
    email: user.email,
    phoneNumber: user.phoneNumber,
  });
  const saveProfile = () => {
    setDisable(true);
    let message = "";
    let validate = true;
    if (profile.email === "") {
      message = "Please add an email!";
      validate = "false";
    }
    if (validate) {
      authService.updateProfile(profile);
      setDisable(false);
    } else {
      cogoToast.warn(message);
      validate = true;
      setDisable(false);
    }
  };
  console.log(user);
  return (
    <div>
      <div className="bg-white rounded-md p-4">
        <div className="flex flex-row">
          <div className="w-1/2 p-4">
            <div className="grid grid-cols-3">
              <p className="text-sm font-medium opacity-60">First Name</p>
              <p className="text-base font-medium opacity-80 ">
                {user.displayName.split(" ")[0]}
              </p>
            </div>
            <div className="grid grid-cols-3 mt-4">
              <p className="text-sm font-medium opacity-60">Phone</p>
              <p className="text-base font-medium opacity-80 flex flex-row gap-2 ">
                +1 123 467 8
                <img src="/img/icons/account_details/check_icon.svg" />
              </p>
            </div>
          </div>
          <div className="w-1/2 p-4">
            <div className="grid grid-cols-3">
              <p className="text-sm font-medium opacity-60">Last Name</p>
              <p className="text-base font-medium opacity-80 ">
                {user.displayName.split(" ")[1]}
              </p>
            </div>
            <div className="flex flex-row mt-4 items-center">
              <div className="w-1/2">
                <p className="text-sm font-medium opacity-60">Email</p>
              </div>
              <input
                type="text"
                name="email"
                onChange={(e) =>
                  setProfile({ ...profile, email: e.target.value })
                }
                className="w-full rounded-full border-gray-200 bg-background-100 placeholder-opacity-80  font-medium px-4 py-2 pr-12 text-sm shadow-sm"
                placeholder={user.email}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-row-reverse">
          <button
            onClick={saveProfile}
            disabled={disable}
            className="px-6 py-2  font-medium bg-gradient-to-tr from-primary-100 to-secondary-100  text-white rounded-full border-0  focus:outline-none hover:bg-gray-200  sm:ml-0 ml-64  text-base mt-8 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110"
          >
            Save
          </button>
        </div>
      </div>
      <div className="mt-4 rounded-md bg-[#FFD9D9] flex flex-row  p-4">
        <div className=" flex flex-row items-center">
          <div className="flex flex-row items-center">
            <img src="/img/icons/account_details/danger_icon.svg" />
            <p className="ml-4 text-base font-medium">
              Please be cautious this operation is not reversible. You will have
              30 days to reactivate it
              <br /> after which it will be deleted.
            </p>
          </div>

          <div className="ml-16">
            <button className=" w-64  items-center px-6 py-2  font-medium bg-[#FF5252]  text-white rounded-full border-0  focus:outline-none hover:bg-gray-200  sm:ml-0   text-base  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110">
              Deactivate Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
