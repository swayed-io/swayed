import cogoToast from "cogo-toast";
import React from "react";
const ProjectInfoForm = ({ page, setPage, formData, setFormData }) => {
  const [validation, setValidation] = React.useState({
    project_title: "",
    project_description: "",
    payout: "",
    gender: "",
    age: "",
    registration_url: "",
    published_on: "",
    expires_on: "",
  });

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 ">
      <div className="mx-auto max-w-lg">
        <h1 className="text-center text-2xl font-bold text-[#413F9D] sm:text-3xl">
          Project Information
        </h1>
        <h3 className="text-center text-xl font-semibold text-black sm:text-2xl"></h3>

        <div
          action=""
          className={`mt-6 mb-0 space-y-4 rounded-lg p-8 shadow-2xl `}
        >
          <p className="text-2xl font-medium text-[#413F9D]">
            Project Information
          </p>
          {/* title */}
          <div>
            <label
              htmlFor="project_title"
              className="sm:text-lg text-md font-normal text-[#413F9D]"
            >
              Project title <span className="text-red-600">*</span>
            </label>

            <div className="relative mt-1">
              <input
                type="text"
                id="project_title"
                name="project_title"
                value={formData.project_title}
                onChange={(e) =>
                  setFormData({ ...formData, project_title: e.target.value })
                }
                className={`w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm ${validation.project_title}`}
              />
            </div>
          </div>
          {/* Description */}
          <div>
            <label
              htmlFor="project_description"
              className="sm:text-lg text-md font-normal text-[#413F9D]"
            >
              Project description <span className="text-red-600">*</span>
            </label>

            <div className="relative mt-1">
              <textarea
                id="project_description"
                name="project_description"
                value={formData.project_description}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    project_description: e.target.value,
                  })
                }
                className={`w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm ${validation.project_description}`}
                rows="8"
              />
            </div>
          </div>

          {/*gender*/}
          <div className="">
            <label
              htmlFor="gender"
              className="sm:text-lg text-md font-normal text-[#413F9D]"
            >
              Gender <span className="text-red-600">*</span>
            </label>

            <div className="relative mt-1">
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={(e) =>
                  setFormData({ ...formData, gender: e.target.value })
                }
                className={`block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${validation.gender}`}
              >
                <option value="">Select...</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Both">Both</option>
              </select>
            </div>
          </div>
          {/* Payout*/}
          <div>
            <label
              htmlFor="payout"
              className="sm:text-lg text-md font-normal text-[#413F9D]"
            >
              Payout <span className="text-red-600">*</span>
            </label>

            <div className="relative mt-1">
              <input
                type="number"
                id="payout"
                name="payout"
                value={formData.payout}
                onChange={(e) =>
                  setFormData({ ...formData, payout: e.target.value })
                }
                className={`w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm ${validation.payout}`}
              />
            </div>
          </div>
          {/* Age */}
          <div>
            <label
              htmlFor="age"
              className="sm:text-lg text-md font-normal text-[#413F9D]"
            >
              Age <span className="text-red-600">*</span>
            </label>

            <div className="relative mt-1">
              <input
                type="number"
                id="age"
                name="age"
                value={formData.age}
                onChange={(e) =>
                  setFormData({ ...formData, age: e.target.value })
                }
                className={`w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm ${validation.age}`}
              />
            </div>
          </div>
          {/* Resgistration url */}
          <div>
            <label
              htmlFor="registration_url"
              className="sm:text-lg text-md font-normal text-[#413F9D]"
            >
              Registration URL <span className="text-red-600">*</span>
            </label>

            <div className="relative mt-1">
              <input
                type="url"
                id="registration_url"
                name="registration_url"
                value={formData.registration_url}
                onChange={(e) =>
                  setFormData({ ...formData, registration_url: e.target.value })
                }
                className={`w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm ${validation.registration_url}`}
              />
            </div>
            {/* Resgistration url */}
            <div>
              <label
                htmlFor="published_on"
                className="sm:text-lg text-md font-normal text-[#413F9D]"
              >
                Publish On <span className="text-red-600">*</span>
              </label>

              <div className="relative mt-1">
                <input
                  type="date"
                  id="published_on"
                  name="published_on"
                  value={formData.published_on}
                  onChange={(e) =>
                    setFormData({ ...formData, published_on: e.target.value })
                  }
                  className={`w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm ${validation.published_on}`}
                />
              </div>
            </div>
            {/* expires_on */}
            <div>
              <label
                htmlFor="expires_on"
                className="sm:text-lg text-md font-normal text-[#413F9D]"
              >
                Exprie On <span className="text-red-600">*</span>
              </label>

              <div className="relative mt-1">
                <input
                  type="date"
                  id="expires_on"
                  name="expires_on"
                  value={formData.expires_on}
                  onChange={(e) =>
                    setFormData({ ...formData, expires_on: e.target.value })
                  }
                  className={`w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm ${validation.expires_on}`}
                />
              </div>
            </div>
          </div>
          <button
            className="block w-full rounded-lg bg-secondary-100 px-5 py-3 transition ease-in-out delay-150 active:bg-green-500  hover:-translate-y-1 hover:scale-110 text-sm font-semibold text-white   disabled:opacity-50"
            onClick={() => {
              let validate = true;
              let message = "";

              if (formData.registration_url === "") {
                message = "Please set your registration url";
                validate = false;
                setValidation({
                  registration_url:
                    "disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500",
                });
              }
              if (formData.published_on === "") {
                message = "Please set your publish on date";
                validate = false;
                setValidation({
                  published_on:
                    "disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500",
                });
              }
              if (formData.expires_on === "") {
                message = "Please set your expire on date";
                validate = false;
                setValidation({
                  expires_on:
                    "disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500",
                });
              }
              if (formData.age === "") {
                message = "Please set the age";
                validate = false;
                setValidation({
                  age: "disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500",
                });
              }
              if (formData.gender === "") {
                message = "Please slect a gender";
                validate = false;
                setValidation({
                  gender:
                    "disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500",
                });
              }
              if (formData.payout === "") {
                message = "Please add a payout";
                validate = false;
                setValidation({
                  payout:
                    "disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500",
                });
              }
              if (formData.project_description === "") {
                message = "Please add a project description";
                validate = false;
                setValidation({
                  project_description:
                    "disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500",
                });
              }
              if (formData.project_title === "") {
                message = "Please add a title";
                validate = false;
                setValidation({
                  project_title:
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

export default ProjectInfoForm;
