import cogoToast from "cogo-toast";
import React from "react";
const PersonalInfoForm = ({ page, setPage, formData, setFormData }) => {
  const [validation, setValidation] = React.useState({
    email: "",
    first_name: "",
    last_name: "",
    research_method: "",
    city: "",
    state: "",
  });
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 ">
      <div className="mx-auto max-w-lg">
        <h1 className="text-center text-2xl font-bold text-[#413F9D] sm:text-3xl">
          Personal Information
        </h1>
        <h3 className="text-center text-xl font-semibold text-black sm:text-2xl"></h3>

        <div
          action=""
          className={`mt-6 mb-0 space-y-4 rounded-lg p-8 shadow-2xl `}
        >
          <p className="text-2xl font-medium text-[#413F9D]">
            Personal Information
          </p>
          {/* email */}
          <div>
            <label
              htmlFor="password"
              className="sm:text-lg text-md font-normal text-[#413F9D]"
            >
              Email <span className="text-red-600">*</span>
            </label>

            <div className="relative mt-1">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className={`w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm ${validation.email}`}
              />
            </div>
          </div>
          {/* first_name */}
          <div>
            <label
              htmlFor="password"
              className="sm:text-lg text-md font-normal text-[#413F9D]"
            >
              First Name <span className="text-red-600">*</span>
            </label>

            <div className="relative mt-1">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.first_name}
                onChange={(e) =>
                  setFormData({ ...formData, first_name: e.target.value })
                }
                className={`w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm ${validation.first_name}`}
              />
            </div>
          </div>
          {/* last_name */}
          <div>
            <label
              htmlFor="password"
              className="sm:text-lg text-md font-normal text-[#413F9D]"
            >
              Last Name <span className="text-red-600">*</span>
            </label>

            <div className="relative mt-1">
              <input
                type="text"
                id="last_name"
                name="last_name"
                value={formData.last_name}
                onChange={(e) =>
                  setFormData({ ...formData, last_name: e.target.value })
                }
                className={`w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm ${validation.last_name}`}
              />
            </div>
          </div>
          {/* research_method */}
          <div className="">
            <label
              htmlFor="name"
              className="sm:text-lg text-md font-normal text-[#413F9D]"
            >
              Reasearch mode <span className="text-red-600">*</span>
            </label>

            <div className="relative mt-1">
              <select
                id="research_method"
                name="research_method"
                value={formData.research_method}
                onChange={(e) => {
                  // if (e.target.value === "In person") {
                  //   setIsRemote("");
                  // } else {
                  //   setIsRemote("hidden");
                  // }
                  setFormData({ ...formData, research_method: e.target.value });
                }}
                className={`block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${validation.gender}`}
              >
                <option value="" selected={formData.research_method === ""}>Select...</option>
                <option value="In person" selected={formData.research_method === "In person"}>In person</option>
                <option value="Remote" selected={formData.research_method === "Remote"}>Remote</option>
              </select>
            </div>
          </div>
          {/* city */}
          <div className={formData.research_method === "In person" ? "" : "hidden"}>
            <label
              htmlFor="city"
              className="sm:text-lg text-md font-normal text-[#413F9D]"
            >
              City <span className="text-red-600">*</span>
            </label>

            <div className="relative mt-1">
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={(e) =>
                  setFormData({ ...formData, city: e.target.value })
                }
                className={`w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm ${validation.city}`}
              />
            </div>
          </div>
          {/* State */}
          <div className={formData.research_method === "In person" ? "" : "hidden"}>
            <label
              htmlFor="state"
              className="sm:text-lg text-md font-normal text-[#413F9D]"
            >
              State <span className="text-red-600">*</span>
            </label>

            <div className="relative mt-1">
              <input
                type="text"
                id="state"
                name="state"
                value={formData.state}
                onChange={(e) =>
                  setFormData({ ...formData, state: e.target.value })
                }
                className={`w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm ${validation.state}`}
              />
            </div>
          </div>
          {/* )} */}
          <button
            className="block w-full rounded-lg bg-secondary-100 px-5 py-3 transition ease-in-out delay-150 active:bg-green-500  hover:-translate-y-1 hover:scale-110 text-sm font-semibold text-white   disabled:opacity-50"
            onClick={() => {
              let validate = true;
              let message = "";

              if (
                formData.research_method === "In person" &&
                formData.state === ""
              ) {
                message = "Please mention your state";
                validate = false;
                setValidation({
                  state:
                    "disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500",
                });
              }
              if (
                formData.research_method === "In person" &&
                formData.city === ""
              ) {
                message = "Please mention your city";
                validate = false;
                setValidation({
                  city: "disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500",
                });
              }
              if (formData.research_method === "") {
                message = "Please select your research mode";
                validate = false;
                setValidation({
                  research_method:
                    "disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500",
                });
              }
              if (formData.last_name === "") {
                message = "Please set your last name";
                validate = false;
                setValidation({
                  last_name:
                    "disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500",
                });
              }
              if (formData.first_name === "") {
                message = "Please write your first name";
                validate = false;
                setValidation({
                  email:
                    "disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500",
                });
              }
              if (formData.email === "") {
                message = "Please write your email";
                validate = false;
                setValidation({
                  email:
                    "disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500",
                });
              }

              if (validate) {
                setPage(page + 1);
              } else {
                cogoToast.warn(message);
                validate = true;
              }
            }}
          >
            Next
          </button>
          <button
            className="block w-full border-2 border-gray-200 rounded-lg bg-white px-5 py-3 transition ease-in-out delay-150 active:bg-green-500  hover:-translate-y-1 hover:scale-110 text-sm font-semibold text-black   disabled:opacity-50"
            onClick={() => {
              setPage(page - 1);
            }}
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfoForm;
