import React, { useState } from "react";
import cogoToast from "cogo-toast";

export default function WorkForm({
  page,
  setPage,
  formData,
  setFormData,
  saveinfo,
}) {
  const [form, setForm] = React.useState({
    visibleR: "hidden",
    visibleG: "hidden",
    visibleB: "hidden",
  });
  const [disable, setDisable] = useState(false);

  const MyCheckBoxList = [
    {
      order: 0,
      id: "checkbox_full_employed",
      name: "checkbox_full_employed",
      text: "Full-time employed",
      value: "Full-time employed",
    },
    {
      order: 1,
      id: "checkbox_part_employed",
      name: "checkbox_part_employed",
      text: "Part-time employed",
      value: "Part-time employed",
    },
    {
      order: 2,
      id: "checkbox_homemaker",
      name: "checkbox_homemaker",
      text: "Homemaker",
      value: "Homemaker",
    },
    {
      order: 3,
      id: "checkbox_full_employed",
      name: "checkbox_full_employed",
      text: "Retired",
      value: "Retired",
    },
    {
      order: 4,
      id: "checkbox_full_employed",
      name: "checkbox_full_employed",
      text: "Unemployed",
      value: "Unemployed",
    },
    {
      order: 5,
      id: "checkbox_full_employed",
      name: "checkbox_full_employed",
      text: "Full-time student",
      value: "Full-time student",
    },
    {
      order: 6,
      id: "checkbox_full_employed",
      name: "checkbox_full_employed",
      text: "Part-time student",
      value: "Part-time student",
    },
    {
      order: 7,
      id: "checkbox_full_employed",
      name: "checkbox_full_employed",
      text: "Freelancer",
      value: "Freelancer",
    },
    {
      order: 8,
      id: "checkbox_full_employed",
      name: "checkbox_full_employed",
      text: "Looking for a Job",
      value: "Looking for a Job",
    },
  ];


  const handleChangeInfo = (e) => {
    setFormData({ ...formData, employment_status: e.target.value });
    if (e.target.value === "Full-time employed") {
      setForm({ visibleR: "", visibleB: "hidden", visibleG: "hidden" });
    }
    if (e.target.value === "Part-time employed") {
      setForm({ visibleR: "", visibleB: "hidden", visibleG: "hidden" });
    }
    if (e.target.id === "checkbox_freelancer") {
      console.log("one", e.target.id);
      if (
        e.target.id === "checkbox_part_student" ||
        e.target.value === "checkbox_part_student"
      ) {
        console.log("two", e.target.id);
        setForm({ visibleR: "hidden", visibleB: "hidden", visibleG: "" });
      }
    }
    if (e.target.value === "Freelancer") {
      setForm({ visibleR: "hidden", visibleB: "hidden", visibleG: "" });
    }
    if (e.target.value === "Looking for a Job") {
      setForm({ visibleR: "hidden", visibleB: "", visibleG: "hidden" });
    }

    if (
      e.target.value === "Homemaker" ||
      e.target.value === "Retired" ||
      e.target.value === "Unemployed" ||
      e.target.value === "Full-time student" ||
      e.target.value === "Part-time student"
    ) {
      setForm({ visibleR: "hidden", visibleB: "hidden", visibleG: "hidden" });
    }
  };

  console.log(formData)

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 ">
      <div className="mx-auto max-w-lg">
        <h1 className="text-center text-2xl font-bold text-[#413F9D] sm:text-3xl">
          Professional Form
        </h1>
        <h3 className="text-center text-xl font-semibold text-black sm:text-2xl"></h3>

        <div
          action=""
          className={`mt-6 mb-0 space-y-4 rounded-lg p-8 shadow-2xl `}
        >
          <p className="text-2xl font-medium text-[#413F9D]">
            Employment Information
          </p>
          <p className="font-normal text-xl">
            Wether you currently employed or not , don&apos;t worry, we got
            plenty of opportunities for you!
          </p>

          <div className="">
            <label
              htmlFor="name"
              className="sm:text-xl text-lg font-medium text-[#413F9D]"
            >
              Employment status
            </label>

            <div className="relative mt-1">
              <radiogroup onChange={handleChangeInfo}>
                <input
                  type="checkbox"
                  id="checkbox_full_employed"
                  name="checkbox"
                  className="form-checkbox rounded border-primary-100 border-2"
                  value="Full-time employed"
                  checked={formData.employment_status === "Full-time employed"}
                />
                <label
                  className="sm:ml-2 font-medium sm:text-lg text-sm"
                  htmlFor="checkbox1"
                >
                  Full-time employed
                </label>
                <br />
                <input
                  type="checkbox"
                  id="checkbox_part_employed"
                  name="checkbox"
                  className="form-checkbox rounded border-primary-100 border-2"
                  value="Part-time employed"
                  checked={formData.employment_status === "Part-time employed"}
                />
                <label
                  className="sm:ml-2 font-medium sm:text-lg text-sm"
                  htmlFor="checkbox2"
                >
                  Part-time employed
                </label>
                <br />
                <input
                  type="checkbox"
                  id="checkbox_homemaker"
                  name="checkbox"
                  className="form-checkbox rounded border-primary-100 border-2"
                  value="Homemaker"
                  checked={formData.employment_status === "Homemaker"}
                />
                <label
                  className="sm:ml-2 font-medium sm:text-lg text-sm"
                  htmlFor="checkbox3"
                >
                  Homemaker
                </label>
                <br />
                <input
                  type="checkbox"
                  id="checkbox_retired"
                  name="checkbox"
                  className="form-checkbox rounded border-primary-100 border-2"
                  value="Retired"
                  checked={formData.employment_status === "Retired"}
                />
                <label
                  className="sm:ml-2 font-medium sm:text-lg text-sm"
                  htmlFor="checkbox4"
                >
                  Retired
                </label>
                <br />
                <input
                  type="checkbox"
                  id="checkbox_unemploted"
                  name="checkbox"
                  className="form-checkbox rounded border-primary-100 border-2"
                  value="Unemployed"
                  checked={formData.employment_status === "Unemployed"}
                />
                <label
                  className="sm:ml-2 font-medium sm:text-lg text-sm"
                  htmlFor="checkbox5"
                >
                  Unemployed
                </label>
                <br />
                <input
                  type="checkbox"
                  id="checkbox_full_student"
                  name="checkbox"
                  className="form-checkbox rounded border-primary-100 border-2"
                  value="Full-time student"
                  checked={formData.employment_status == "Full-time student"}
                />
                <label
                  className="sm:ml-2 font-medium sm:text-lg text-sm"
                  htmlFor="checkbox6"
                >
                  Full-time student
                </label>
                <br />
                <input
                  type="checkbox"
                  id="checkbox_part_student"
                  name="checkbox"
                  className="form-checkbox rounded border-primary-100 border-2"
                  value="Part-time student"
                  checked={formData.employment_status === "Part-time student"}
                />
                <label
                  className="sm:ml-2 font-medium sm:text-lg text-sm"
                  htmlFor="checkbox7"
                >
                  Part-time student
                </label>
                <br />
                <input
                  type="checkbox"
                  id="checkbox_freelancer"
                  name="checkbox"
                  className="form-checkbox rounded border-primary-100 border-2"
                  value="Freelancer"
                  checked={formData.employment_status === "Freelancer"}
                />
                <label
                  className="sm:ml-2 font-medium sm:text-lg text-sm"
                  htmlFor="checkbox9"
                >
                  Freelancer
                </label>
                <br />
                <input
                  type="checkbox"
                  id="checkbox_looking_job"
                  name="checkbox"
                  className="form-checkbox rounded border-primary-100 border-2"
                  value="Looking for a Job"
                  checked={formData.employment_status === "Looking for a Job"}
                />
                <label
                  className="sm:ml-2 font-medium sm:text-lg text-sm"
                  htmlFor="checkbox9"
                >
                  Looking for a Job
                </label>
                <br />
              </radiogroup>
            </div>
          </div>
          <div className="container sm:mt-4 mt-2 ">
            <div className={["Part-time employed", "Full-time employed"].includes(formData.employment_status) ? "" : "hidden"}>
              <div>
                <p className="sm:text-2xl text-xl font-medium text-[#413F9D]">
                  Professional details
                </p>
                <hr />
              </div>
              <div className="">
                <div className="">
                  <label
                    htmlFor="name"
                    className="sm:text-lg text-md font-normal text-[#413F9D] "
                  >
                    Job title
                  </label>

                  <div className="relative mt-1">
                    <input
                      type="text"
                      id="job_title"
                      name="job_title"
                      value={formData.job_title}
                      onChange={(e) =>
                        setFormData({ ...formData, job_title: e.target.value })
                      }
                      className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                      placeholder=""
                    />
                  </div>
                </div>
                <div className="py-4">
                  <label
                    htmlFor="name"
                    className="sm:text-lg text-md font-normal text-[#413F9D] "
                  >
                    Seniority
                  </label>

                  <div className="relative mt-1">
                    <select
                      id=""
                      value={formData.seniority}
                      onChange={(e) =>
                        setFormData({ ...formData, seniority: e.target.value })
                      }
                      className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      name="seniority"
                    >
                      <option value="">Select...</option>
                      <option value="Employee">Employee</option>
                      <option value="Parner">Partner</option>
                      <option value="Senior">Senior</option>
                      <option value="Manager">Manager</option>
                      <option value="Director">Director</option>
                      <option value="Vice President(VP)">
                        Vice President(VP)
                      </option>
                    </select>
                  </div>
                </div>
                <div className="py-4">
                  <label
                    htmlFor="name"
                    className="sm:text-lg text-md font-normal text-[#413F9D] "
                  >
                    Skills
                  </label>

                  <input
                    type="text"
                    id="skills"
                    name="skills"
                    value={formData.skills}
                    onChange={(e) =>
                      setFormData({ ...formData, skills: e.target.value })
                    }
                    className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                    placeholder=""
                  />
                </div>
                <div className="py-4">
                  <label
                    htmlFor="name"
                    className="sm:text-lg text-md font-normal text-[#413F9D] "
                  >
                    Work email
                  </label>

                  <div className="relative mt-1">
                    <input
                      type="text"
                      id="Work_email"
                      name="Work_email"
                      value={formData.Work_email}
                      onChange={(e) =>
                        setFormData({ ...formData, Work_email: e.target.value })
                      }
                      className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                      placeholder=""
                    />
                  </div>
                </div>
                <div className="py-4">
                  <label
                    htmlFor="name"
                    className="sm:text-lg text-md font-normal text-[#413F9D] "
                  >
                    Company
                  </label>

                  <div className="relative mt-1">
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                      className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                      placeholder=""
                    />
                  </div>
                </div>
                <div className="py-4">
                  <label
                    htmlFor="name"
                    className="sm:text-lg text-md font-normal text-[#413F9D] "
                  >
                    Company size
                  </label>

                  <div className="relative mt-1">
                    <select
                      id=""
                      value={formData.company_size}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          company_size: e.target.value,
                        })
                      }
                      className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      name="repassword"
                    >
                      <option value="">Select...</option>
                      <option value="0 - 10 employees">0 - 10 employees</option>
                      <option value="10 - 49 employees">
                        10 - 49 employees
                      </option>
                      <option value="50 - 249 employees">
                        50 - 249 employees
                      </option>
                      <option value="250+ employees">250+ employees</option>
                    </select>
                  </div>
                </div>
                <div className="py-4">
                  <label
                    htmlFor="name"
                    className="sm:text-lg text-md font-normal text-[#413F9D] "
                  >
                    Industry
                  </label>

                  <div className="relative mt-1">
                    <select
                      id=""
                      value={formData.industry}
                      onChange={(e) =>
                        setFormData({ ...formData, industry: e.target.value })
                      }
                      className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      name="repassword"
                    >
                      <option value="">Select...</option>
                      <option value="Agriculture">Agriculture</option>
                      <option value="Arts">Arts</option>
                      <option value="Construction">Construction</option>
                      <option value="Consumer Goods">Consumer Goods</option>
                      <option value="Corporate Services">
                        Corporate Services
                      </option>
                      <option value="Design">Design</option>
                      <option value="Education">Education</option>
                      <option value="Energy & Mining">Energy & Mining</option>
                      <option value="Entertainment">Entertainment</option>
                      <option value="Finance">Finance</option>
                      <option value="Hardware & Networking">
                        Hardware & Networking
                      </option>
                      <option value="Health Care">Health Care</option>
                      <option value="Legal">Legal</option>
                      <option value="Media & Communications">
                        Media & Communications
                      </option>
                      <option value="Nonprofit">Nonprofit</option>
                      <option value="Public Administration">
                        Public Administration
                      </option>
                      <option value="Public Safety">Public Safety</option>
                      <option value="Real Estate">Real Estate</option>
                      <option value="Recreation & Travel">
                        Recreation & Travel
                      </option>
                      <option value="Retail">Retail</option>
                      <option value="Software & IT Services">
                        Software & IT Services
                      </option>
                      <option value="Transportation & Logistics">
                        Transportation & Logistics
                      </option>
                      <option value="Wellness & Fitness">
                        Wellness & Fitness
                      </option>
                    </select>
                  </div>
                </div>
                <div className="py-4">
                  <label
                    htmlFor="name"
                    className="sm:text-lg text-md font-normal text-[#413F9D] "
                  >
                    Small business owner?
                  </label>

                  <div className="relative mt-1">
                    <select
                      id=""
                      value={formData.business_owner}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          business_owner: e.target.value,
                        })
                      }
                      className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      name="repassword"
                    >
                      <option value="">Select...</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>
                </div>
                <div className="py-4">
                  <p className="sm:text-lg text-md font-normal text-[#413F9D] ">
                    Type of income
                  </p>
                  <input
                    type="checkbox"
                    id="checkbox1"
                    name="income"
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        type_of_income: e.target.value,
                      })
                    }
                    className="form-checkbox rounded border-primary-100 border-2"
                    value="1099 (US only)"
                    checked={formData.type_of_income === "1099 (US only)"}
                  />
                  <label
                    className="sm:ml-2 font-medium sm:text-lg text-sm"
                    htmlFor="checkbox1"
                  >
                    1099 (US only)
                  </label>
                  <br />
                  <input
                    type="checkbox"
                    id="checkbox2"
                    name="income"
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        type_of_income: e.target.value,
                      })
                    }
                    className="form-checkbox rounded border-primary-100 border-2"
                    value="W2 (US only)"
                    checked={formData.type_of_income === "W2 (US only)"}
                  />
                  <label
                    className="sm:ml-2 font-medium sm:text-lg text-sm"
                    htmlFor="checkbox2"
                  >
                    W2 (US only)
                  </label>
                  <br />
                  <input
                    type="checkbox"
                    id="checkbox3"
                    name="income"
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        type_of_income: e.target.value,
                      })
                    }
                    className="form-checkbox rounded border-primary-100 border-2"
                    value="Other"
                    checked={formData.type_of_income === "Other"}
                  />
                  <label
                    className="sm:ml-2 font-medium sm:text-lg text-sm"
                    htmlFor="checkbox3"
                  >
                    Other
                  </label>
                  <br />
                  <input
                    type="checkbox"
                    id="checkbox4"
                    name="income"
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        type_of_income: e.target.value,
                      })
                    }
                    className="form-checkbox rounded border-primary-100 border-2"
                    value="None of the above"
                    checked={formData.type_of_income === "None of the above"}
                  />
                  <label
                    className="sm:ml-2 font-medium sm:text-lg text-sm"
                    htmlFor="checkbox4"
                  >
                    None of the above
                  </label>
                  <br />
                </div>
                <div className="py-4">
                  <label
                    htmlFor="name"
                    className="sm:text-lg text-md font-normal text-[#413F9D] "
                  >
                    Do you like your current job?
                  </label>

                  <div className="relative mt-1">
                    <select
                      id=""
                      value={formData.like_currentjob}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          like_currentjob: e.target.value,
                        })
                      }
                      className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      name="repassword"
                    >
                      <option value="">Select...</option>
                      <option value="Yes">Yes, it&apos;s great!</option>
                      <option value="No">Eh, it&apos;s okay</option>
                      <option value="Switch">Need to Switch</option>
                    </select>
                  </div>
                </div>
                <div className="py-4">
                  <label
                    htmlFor="name"
                    className="sm:text-lg text-md font-normal text-[#413F9D] "
                  >
                    Linkedin profile
                  </label>

                  <div className="relative mt-1">
                    <input
                      type="text"
                      id="linkedin_profile"
                      name="linkedin_profile"
                      className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                      placeholder="linkedin.com/in/username"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={formData.employment_status === "Freelancer" ? "" : "hidden"}>
              <div>
                <p className="sm:text-2xl text-xl font-medium text-[#413F9D]">
                  Professional details
                </p>
                <hr />
              </div>
              <div className="flex flex-col py-4">
                <p className="sm:text-lg text-md font-normal text-[#413F9D] ">
                  How long have you been working as a Freelancer
                </p>
                <div>
                  <input
                    type="checkbox"
                    id="radio1"
                    name="working_freelancer"
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        work_as_freelancer: e.target.value,
                      })
                    }
                    className="form-radio border-primary-100 border-2"
                    value="Just started"
                    checked={formData.work_as_freelancer === "Just started"}
                  />
                  <label
                    className="sm:ml-2 font-medium sm:text-lg text-sm"
                    htmlFor="radio1"
                  >
                    Just started
                  </label>
                  <br />
                </div>
                <div>
                  <input
                    type="radio"
                    id="radio2"
                    name="working_freelancer"
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        work_as_freelancer: e.target.value,
                      })
                    }
                    className="form-radio border-primary-100 border-2"
                    value="Less than a year"
                    checked={formData.work_as_freelancer === "Less than a year"}
                  />
                  <label
                    className="sm:ml-2 font-medium sm:text-lg text-sm"
                    htmlFor="radio2"
                  >
                    Less than a year
                  </label>
                  <br />
                </div>
                <div>
                  <input
                    type="radio"
                    id="radio3"
                    name="working_freelancer"
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        work_as_freelancer: e.target.value,
                      })
                    }
                    className="form-radio border-primary-100 border-2"
                    value="1-3 years"
                    checked={formData.work_as_freelancer === "1-3 years"}
                  />
                  <label
                    className="sm:ml-2 font-medium sm:text-lg text-sm"
                    htmlFor="radio3"
                  >
                    1-3 years
                  </label>
                  <br />
                </div>
                <div>
                  <input
                    type="radio"
                    id="radio3"
                    name="working_freelancer"
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        work_as_freelancer: e.target.value,
                      })
                    }
                    className="form-radio border-primary-100 border-2"
                    value="4-6 years"
                    checked={formData.work_as_freelancer === "4-6 years"}
                  />
                  <label
                    className="sm:ml-2 font-medium sm:text-lg text-sm"
                    htmlFor="radio4"
                  >
                    4-6 years
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="radio3"
                    name="working_freelancer"
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        work_as_freelancer: e.target.value,
                      })
                    }
                    className="form-radio border-primary-100 border-2"
                    value="7-10 years"
                    checked={formData.work_as_freelancer === "7-10 years"}
                  />
                  <label
                    className="sm:ml-2 font-medium sm:text-lg text-sm"
                    htmlFor="radio5"
                  >
                    7-10 years
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="radio3"
                    name="working_freelancer"
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        work_as_freelancer: e.target.value,
                      })
                    }
                    className="form-radio border-primary-100 border-2"
                    value="+10 years"
                    checked={formData.work_as_freelancer === "+10 years"}
                  />
                  <label
                    className="sm:ml-2 font-medium sm:text-lg text-sm"
                    htmlFor="radio6"
                  >
                    +10 years
                  </label>
                </div>
              </div>
              <div className="flex flex-col py-4">
                <p className="sm:text-lg text-md font-normal text-[#413F9D] ">
                  What type of services do you provide (Check all that applies)
                </p>
                <div>
                  <input
                    type="checkbox"
                    id="radio1"
                    name="services"
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        type_services_freelancer: e.target.value,
                      })
                    }
                    className="form-checkbox rounded border-primary-100 border-2"
                    value="Digital Marketing"
                    checked={formData.type_services_freelancer === "Digital Marketing"}
                  />
                  <label
                    className="sm:ml-2 font-medium sm:text-lg text-sm"
                    htmlFor="radio1"
                  >
                    Digital Marketing
                  </label>
                  <br />
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="radio2"
                    name="services"
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        type_services_freelancer: e.target.value,
                      })
                    }
                    className="form-checkbox rounded border-primary-100 border-2"
                    value="Web design/ Software Development"
                    checked={formData.type_services_freelancer === "Web design/ Software Development"}
                  />
                  <label
                    className="sm:ml-2 font-medium sm:text-lg text-sm"
                    htmlFor="radio2"
                  >
                    Web design/ Software Development
                  </label>
                  <br />
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="radio3"
                    name="services"
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        type_services_freelancer: e.target.value,
                      })
                    }
                    className="form-checkbox rounded border-primary-100 border-2"
                    value="Content creation"
                    checked={formData.type_services_freelancer === "Content creation"}
                  />
                  <label
                    className="sm:ml-2 font-medium sm:text-lg text-sm"
                    htmlFor="radio3"
                  >
                    Content creation
                  </label>
                  <br />
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="radio3"
                    name="services"
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        type_services_freelancer: e.target.value,
                      })
                    }
                    className="form-checkbox rounded border-primary-100 border-2"
                    value="Graphic designer"
                    checked={formData.type_services_freelancer === "Graphic designer"}
                  />
                  <label
                    className="sm:ml-2 font-medium sm:text-lg text-sm"
                    htmlFor="radio3"
                  >
                    Graphic designer
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="radio3"
                    name="services"
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        type_services_freelancer: e.target.value,
                      })
                    }
                    className="form-checkbox rounded border-primary-100 border-2"
                    value="Project Management"
                    checked={formData.type_services_freelancer === "Project Management"}
                  />
                  <label
                    className="sm:ml-2 font-medium sm:text-lg text-sm"
                    htmlFor="radio3"
                  >
                    Project Management
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="radio3"
                    name="services"
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        type_services_freelancer: e.target.value,
                      })
                    }
                    className="form-checkbox rounded border-primary-100 border-2"
                    value="Financial / Accounting services"
                    checked={formData.type_services_freelancer === "Financial / Accounting services"}
                  />
                  <label
                    className="sm:ml-2 font-medium sm:text-lg text-sm"
                    htmlFor="radio3"
                  >
                    Financial / Accounting services
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="radio3"
                    name="services"
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        type_services_freelancer: e.target.value,
                      })
                    }
                    className="form-checkbox rounded border-primary-100 border-2"
                    value="Consulting, Tutoring and Coaching"
                    checked={formData.type_services_freelancer === "Consulting, Tutoring and Coaching"}
                  />
                  <label
                    className="sm:ml-2 font-medium sm:text-lg text-sm"
                    htmlFor="radio3"
                  >
                    Consulting, Tutoring and Coaching
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="radio3"
                    name="services"
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        type_services_freelancer: e.target.value,
                      })
                    }
                    className="form-checkbox rounded border-primary-100 border-2"
                    value="Writing (CV, Research, etc)"
                    checked={formData.type_services_freelancer === "Writing (CV, Research, etc)"}
                  />
                  <label
                    className="sm:ml-2 font-medium sm:text-lg text-sm"
                    htmlFor="radio3"
                  >
                    Writing (CV, Research, etc)
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="radio3"
                    name="services"
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        type_services_freelancer: e.target.value,
                      })
                    }
                    className="form-checkbox rounded border-primary-100 border-2"
                    value="Transition"
                    checked={formData.type_services_freelancer === "Transition"}
                  />
                  <label
                    className="sm:ml-2 font-medium sm:text-lg text-sm"
                    htmlFor="radio3"
                  >
                    Transition
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="radio3"
                    name="services"
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        type_services_freelancer: e.target.value,
                      })
                    }
                    className="form-checkbox rounded border-primary-100 border-2"
                    value="Other"
                    checked={formData.type_services_freelancer?.startsWith("Other")}
                  />
                  <label
                    className="sm:ml-2 font-medium sm:text-lg text-sm"
                    htmlFor="radio3"
                  >
                    Other (Please specify)
                  </label>
                </div>
                {
                  (formData.type_services_freelancer?.startsWith("Other")) && (
                    <input
                      type="text"
                      name="other"
                      value={formData.type_services_freelancer.slice(6)}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          type_services_freelancer: "Other " + e.target.value,
                        })
                      }
                      className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                      placeholder="type..."
                    />
                  )
                }
              </div>
              <div className="flex flex-col py-4">
                <p className="sm:text-lg text-md font-normal text-[#413F9D] ">
                  Estimated number of projects you deliver on a monthly basis
                </p>

                <div>
                  <input
                    type="radio"
                    id="radio1"
                    name="monthly_basis"
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        projectsdeliver_monthly_freelancer: e.target.value,
                      })
                    }
                    className="form-radio border-primary-100 border-2"
                    value="0"
                    checked={formData.projectsdeliver_monthly_freelancer === "0"}
                  />
                  <label
                    className="sm:ml-2 font-medium sm:text-lg text-sm"
                    htmlFor="radio1"
                  >
                    0
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="radio2"
                    name="monthly_basis"
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        projectsdeliver_monthly_freelancer: e.target.value,
                      })
                    }
                    className="form-radio border-primary-100 border-2"
                    value="1"
                    checked={formData.projectsdeliver_monthly_freelancer === "1"}
                  />
                  <label
                    className="sm:ml-2 font-medium sm:text-lg text-sm"
                    htmlFor="radio2"
                  >
                    1
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="radio3"
                    name="monthly_basis"
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        projectsdeliver_monthly_freelancer: e.target.value,
                      })
                    }
                    className="form-radio border-primary-100 border-2"
                    value="2-3"
                    checked={formData.projectsdeliver_monthly_freelancer === "2-3"}
                  />
                  <label
                    className="sm:ml-2 font-medium sm:text-lg text-sm"
                    htmlFor="radio3"
                  >
                    2-3
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="radio3"
                    name="monthly_basis"
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        projectsdeliver_monthly_freelancer: e.target.value,
                      })
                    }
                    className="form-radio border-primary-100 border-2"
                    value="4-5"
                    checked={formData.projectsdeliver_monthly_freelancer === "4-5"}
                  />
                  <label
                    className="sm:ml-2 font-medium sm:text-lg text-sm"
                    htmlFor="radio3"
                  >
                    4-5
                  </label>
                </div>
                <div></div>
                <div>
                  <input
                    type="radio"
                    id="radio3"
                    name="monthly_basis"
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        projectsdeliver_monthly_freelancer: e.target.value,
                      })
                    }
                    className="form-radio border-primary-100 border-2"
                    value="6-10"
                    checked={formData.projectsdeliver_monthly_freelancer === "6-10"}
                  />
                  <label
                    className="sm:ml-2 font-medium sm:text-lg text-sm"
                    htmlFor="radio3"
                  >
                    6-10
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="radio3"
                    name="monthly_basis"
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        projectsdeliver_monthly_freelancer: e.target.value,
                      })
                    }
                    className="form-radio border-primary-100 border-2"
                    value=" 11-19"
                    checked={formData.projectsdeliver_monthly_freelancer === "11-19"}
                  />
                  <label
                    className="sm:ml-2 font-medium sm:text-lg text-sm"
                    htmlFor="radio3"
                  >
                    11-19
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="radio3"
                    name="monthly_basis"
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        projectsdeliver_monthly_freelancer: e.target.value,
                      })
                    }
                    className="form-radio border-primary-100 border-2"
                    value="20+"
                    checked={formData.projectsdeliver_monthly_freelancer === "20+"}
                  />
                  <label
                    className="sm:ml-2 font-medium sm:text-lg text-sm"
                    htmlFor="radio3"
                  >
                    20+
                  </label>
                </div>
              </div>
              <div>
                <label
                  htmlFor="name"
                  className="sm:text-lg text-md font-normal text-[#413F9D] "
                >
                  Linkedin profile
                </label>

                <div className="relative mt-1">
                  <input
                    type="text"
                    id="linkedin_profile"
                    name="linkedin_profile"
                    value={formData.linkedin_profile}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        linkedin_profile: e.target.value,
                      })
                    }
                    className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                    placeholder="linkedin.com/in/"
                  />
                </div>
              </div>
            </div>

            <div className={formData.employment_status === "Looking for a Job" ? "" : "hidden"}>
              <div>
                <p className="sm:text-2xl text-xl font-medium text-[#413F9D]">
                  Professional details
                </p>
                <hr />
              </div>
              <div className="py-4">
                <label
                  htmlFor="name"
                  className="sm:text-lg text-md font-normal text-[#413F9D] "
                >
                  What kind of job are you looking?
                </label>

                <div className="relative mt-1">
                  <select
                    id=""
                    value={formData.kind_job_looking}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        kind_job_looking: e.target.value,
                      })
                    }
                    className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    name="kind_job_looking"
                  >
                    <option value="">Select...</option>
                    <option value="Remote">Remote</option>
                    <option value="Temporarily remote">
                      Temporarily remote
                    </option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
              <div className="py-4">
                <label
                  htmlFor="name"
                  className="sm:text-lg text-md font-normal text-[#413F9D] "
                >
                  Salary Estimate?
                </label>

                <div className="relative mt-1">
                  <select
                    id=""
                    value={formData.salary_estimate}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        salary_estimate: e.target.value,
                      })
                    }
                    className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    name="salary_estimate"
                  >
                    <option value="">Select...</option>
                    <option value="$20,000+">$20,000+</option>
                    <option value="$30,000+">$30,000+</option>
                    <option value="$40,000+">$40,000+</option>
                    <option value="$50,000+">$50,000+</option>
                    <option value="$65,000+">$65,000+</option>
                    <option value="$80,000+">$80,000+</option>
                    <option value="$100,000+">$100,000+</option>
                  </select>
                </div>
                <div className="py-4">
                  <label
                    htmlFor="name"
                    className="sm:text-lg text-md font-normal text-[#413F9D] "
                  >
                    Job type
                  </label>

                  <div className="relative mt-1">
                    <select
                      id=""
                      value={formData.job_type}
                      onChange={(e) =>
                        setFormData({ ...formData, job_type: e.target.value })
                      }
                      className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      name="job_type"
                    >
                      <option value="">Select...</option>
                      <option value="Full-time">Full-time</option>
                      <option value="Part-time">Part-time</option>
                      <option value="Contract">Contract</option>
                      <option value="Temporary">Temporary</option>
                      <option value="Internship">Internship</option>
                    </select>
                  </div>
                </div>
                <div className="py-4">
                  <label
                    htmlFor="country"
                    className="sm:text-lg text-md font-normal text-[#413F9D] "
                  >
                    Location
                  </label>

                  <div className="relative mt-1 text-lg">
                    <select
                      name="location_job"
                      value={formData.location_job}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          location_job: e.target.value,
                        })
                      }
                      className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    >
                      <option value="">Select...</option>
                      <option value="Afghanistan">Afghanistan</option>
                      <option value="Åland Islands">Åland Islands</option>
                      <option value="Albania">Albania</option>
                      <option value="Algeria">Algeria</option>
                      <option value="American Samoa">American Samoa</option>
                      <option value="Andorra">Andorra</option>
                      <option value="Angola">Angola</option>
                      <option value="Anguilla">Anguilla</option>
                      <option value="Antarctica">Antarctica</option>
                      <option value="Antigua and Barbuda">
                        Antigua and Barbuda
                      </option>
                      <option value="Argentina">Argentina</option>
                      <option value="Armenia">Armenia</option>
                      <option value="Aruba">Aruba</option>
                      <option value="Australia">Australia</option>
                      <option value="Austria">Austria</option>
                      <option value="Azerbaijan">Azerbaijan</option>
                      <option value="Bahamas">Bahamas</option>
                      <option value="Bahrain">Bahrain</option>
                      <option value="Bangladesh">Bangladesh</option>
                      <option value="Barbados">Barbados</option>
                      <option value="Belarus">Belarus</option>
                      <option value="Belgium">Belgium</option>
                      <option value="Belize">Belize</option>
                      <option value="Benin">Benin</option>
                      <option value="Bermuda">Bermuda</option>
                      <option value="Bhutan">Bhutan</option>
                      <option value="Bolivia">Bolivia</option>
                      <option value="Bosnia and Herzegovina">
                        Bosnia and Herzegovina
                      </option>
                      <option value="Botswana">Botswana</option>
                      <option value="Bouvet Island">Bouvet Island</option>
                      <option value="Brazil">Brazil</option>
                      <option value="British Indian Ocean Territory">
                        British Indian Ocean Territory
                      </option>
                      <option value="Brunei Darussalam">
                        Brunei Darussalam
                      </option>
                      <option value="Bulgaria">Bulgaria</option>
                      <option value="Burkina Faso">Burkina Faso</option>
                      <option value="Burundi">Burundi</option>
                      <option value="Cambodia">Cambodia</option>
                      <option value="Cameroon">Cameroon</option>
                      <option value="Canada">Canada</option>
                      <option value="Cape Verde">Cape Verde</option>
                      <option value="Cayman Islands">Cayman Islands</option>
                      <option value="Central African Republic">
                        Central African Republic
                      </option>
                      <option value="Chad">Chad</option>
                      <option value="Chile">Chile</option>
                      <option value="China">China</option>
                      <option value="Christmas Island">Christmas Island</option>
                      <option value="Cocos (Keeling) Islands">
                        Cocos (Keeling) Islands
                      </option>
                      <option value="Colombia">Colombia</option>
                      <option value="Comoros">Comoros</option>
                      <option value="Congo">Congo</option>
                      <option value="Congo, The Democratic Republic of The">
                        Congo, The Democratic Republic of The
                      </option>
                      <option value="Cook Islands">Cook Islands</option>
                      <option value="Costa Rica">Costa Rica</option>
                      <option value="Cote D'ivoire">Cote D&apos;ivoire</option>
                      <option value="Croatia">Croatia</option>
                      <option value="Cuba">Cuba</option>
                      <option value="Cyprus">Cyprus</option>
                      <option value="Czech Republic">Czech Republic</option>
                      <option value="Denmark">Denmark</option>
                      <option value="Djibouti">Djibouti</option>
                      <option value="Dominica">Dominica</option>
                      <option value="Dominican Republic">
                        Dominican Republic
                      </option>
                      <option value="Ecuador">Ecuador</option>
                      <option value="Egypt">Egypt</option>
                      <option value="El Salvador">El Salvador</option>
                      <option value="Equatorial Guinea">
                        Equatorial Guinea
                      </option>
                      <option value="Eritrea">Eritrea</option>
                      <option value="Estonia">Estonia</option>
                      <option value="Ethiopia">Ethiopia</option>
                      <option value="Falkland Islands (Malvinas)">
                        Falkland Islands (Malvinas)
                      </option>
                      <option value="Faroe Islands">Faroe Islands</option>
                      <option value="Fiji">Fiji</option>
                      <option value="Finland">Finland</option>
                      <option value="France">France</option>
                      <option value="French Guiana">French Guiana</option>
                      <option value="French Polynesia">French Polynesia</option>
                      <option value="French Southern Territories">
                        French Southern Territories
                      </option>
                      <option value="Gabon">Gabon</option>
                      <option value="Gambia">Gambia</option>
                      <option value="Georgia">Georgia</option>
                      <option value="Germany">Germany</option>
                      <option value="Ghana">Ghana</option>
                      <option value="Gibraltar">Gibraltar</option>
                      <option value="Greece">Greece</option>
                      <option value="Greenland">Greenland</option>
                      <option value="Grenada">Grenada</option>
                      <option value="Guadeloupe">Guadeloupe</option>
                      <option value="Guam">Guam</option>
                      <option value="Guatemala">Guatemala</option>
                      <option value="Guernsey">Guernsey</option>
                      <option value="Guinea">Guinea</option>
                      <option value="Guinea-bissau">Guinea-bissau</option>
                      <option value="Guyana">Guyana</option>
                      <option value="Haiti">Haiti</option>
                      <option value="Heard Island and Mcdonald Islands">
                        Heard Island and Mcdonald Islands
                      </option>
                      <option value="Holy See (Vatican City State)">
                        Holy See (Vatican City State)
                      </option>
                      <option value="Honduras">Honduras</option>
                      <option value="Hong Kong">Hong Kong</option>
                      <option value="Hungary">Hungary</option>
                      <option value="Iceland">Iceland</option>
                      <option value="India">India</option>
                      <option value="Indonesia">Indonesia</option>
                      <option value="Iran, Islamic Republic of">
                        Iran, Islamic Republic of
                      </option>
                      <option value="Iraq">Iraq</option>
                      <option value="Ireland">Ireland</option>
                      <option value="Isle of Man">Isle of Man</option>
                      <option value="Israel">Israel</option>
                      <option value="Italy">Italy</option>
                      <option value="Jamaica">Jamaica</option>
                      <option value="Japan">Japan</option>
                      <option value="Jersey">Jersey</option>
                      <option value="Jordan">Jordan</option>
                      <option value="Kazakhstan">Kazakhstan</option>
                      <option value="Kenya">Kenya</option>
                      <option value="Kiribati">Kiribati</option>
                      <option value="Korea, Democratic People's Republic of">
                        Korea, Democratic People&apos;s Republic of
                      </option>
                      <option value="Korea, Republic of">
                        Korea, Republic of
                      </option>
                      <option value="Kuwait">Kuwait</option>
                      <option value="Kyrgyzstan">Kyrgyzstan</option>
                      <option value="Lao People's Democratic Republic">
                        Lao People&apos;s Democratic Republic
                      </option>
                      <option value="Latvia">Latvia</option>
                      <option value="Lebanon">Lebanon</option>
                      <option value="Lesotho">Lesotho</option>
                      <option value="Liberia">Liberia</option>
                      <option value="Libyan Arab Jamahiriya">
                        Libyan Arab Jamahiriya
                      </option>
                      <option value="Liechtenstein">Liechtenstein</option>
                      <option value="Lithuania">Lithuania</option>
                      <option value="Luxembourg">Luxembourg</option>
                      <option value="Macao">Macao</option>
                      <option value="Macedonia, The Former Yugoslav Republic of">
                        Macedonia, The Former Yugoslav Republic of
                      </option>
                      <option value="Madagascar">Madagascar</option>
                      <option value="Malawi">Malawi</option>
                      <option value="Malaysia">Malaysia</option>
                      <option value="Maldives">Maldives</option>
                      <option value="Mali">Mali</option>
                      <option value="Malta">Malta</option>
                      <option value="Marshall Islands">Marshall Islands</option>
                      <option value="Martinique">Martinique</option>
                      <option value="Mauritania">Mauritania</option>
                      <option value="Mauritius">Mauritius</option>
                      <option value="Mayotte">Mayotte</option>
                      <option value="Mexico">Mexico</option>
                      <option value="Micronesia, Federated States of">
                        Micronesia, Federated States of
                      </option>
                      <option value="Moldova, Republic of">
                        Moldova, Republic of
                      </option>
                      <option value="Monaco">Monaco</option>
                      <option value="Mongolia">Mongolia</option>
                      <option value="Montenegro">Montenegro</option>
                      <option value="Montserrat">Montserrat</option>
                      <option value="Morocco">Morocco</option>
                      <option value="Mozambique">Mozambique</option>
                      <option value="Myanmar">Myanmar</option>
                      <option value="Namibia">Namibia</option>
                      <option value="Nauru">Nauru</option>
                      <option value="Nepal">Nepal</option>
                      <option value="Netherlands">Netherlands</option>
                      <option value="Netherlands Antilles">
                        Netherlands Antilles
                      </option>
                      <option value="New Caledonia">New Caledonia</option>
                      <option value="New Zealand">New Zealand</option>
                      <option value="Nicaragua">Nicaragua</option>
                      <option value="Niger">Niger</option>
                      <option value="Nigeria">Nigeria</option>
                      <option value="Niue">Niue</option>
                      <option value="Norfolk Island">Norfolk Island</option>
                      <option value="Northern Mariana Islands">
                        Northern Mariana Islands
                      </option>
                      <option value="Norway">Norway</option>
                      <option value="Oman">Oman</option>
                      <option value="Pakistan">Pakistan</option>
                      <option value="Palau">Palau</option>
                      <option value="Palestinian Territory, Occupied">
                        Palestinian Territory, Occupied
                      </option>
                      <option value="Panama">Panama</option>
                      <option value="Papua New Guinea">Papua New Guinea</option>
                      <option value="Paraguay">Paraguay</option>
                      <option value="Peru">Peru</option>
                      <option value="Philippines">Philippines</option>
                      <option value="Pitcairn">Pitcairn</option>
                      <option value="Poland">Poland</option>
                      <option value="Portugal">Portugal</option>
                      <option value="Puerto Rico">Puerto Rico</option>
                      <option value="Qatar">Qatar</option>
                      <option value="Reunion">Reunion</option>
                      <option value="Romania">Romania</option>
                      <option value="Russian Federation">
                        Russian Federation
                      </option>
                      <option value="Rwanda">Rwanda</option>
                      <option value="Saint Helena">Saint Helena</option>
                      <option value="Saint Kitts and Nevis">
                        Saint Kitts and Nevis
                      </option>
                      <option value="Saint Lucia">Saint Lucia</option>
                      <option value="Saint Pierre and Miquelon">
                        Saint Pierre and Miquelon
                      </option>
                      <option value="Saint Vincent and The Grenadines">
                        Saint Vincent and The Grenadines
                      </option>
                      <option value="Samoa">Samoa</option>
                      <option value="San Marino">San Marino</option>
                      <option value="Sao Tome and Principe">
                        Sao Tome and Principe
                      </option>
                      <option value="Saudi Arabia">Saudi Arabia</option>
                      <option value="Senegal">Senegal</option>
                      <option value="Serbia">Serbia</option>
                      <option value="Seychelles">Seychelles</option>
                      <option value="Sierra Leone">Sierra Leone</option>
                      <option value="Singapore">Singapore</option>
                      <option value="Slovakia">Slovakia</option>
                      <option value="Slovenia">Slovenia</option>
                      <option value="Solomon Islands">Solomon Islands</option>
                      <option value="Somalia">Somalia</option>
                      <option value="South Africa">South Africa</option>
                      <option value="South Georgia and The South Sandwich Islands">
                        South Georgia and The South Sandwich Islands
                      </option>
                      <option value="Spain">Spain</option>
                      <option value="Sri Lanka">Sri Lanka</option>
                      <option value="Sudan">Sudan</option>
                      <option value="Suriname">Suriname</option>
                      <option value="Svalbard and Jan Mayen">
                        Svalbard and Jan Mayen
                      </option>
                      <option value="Swaziland">Swaziland</option>
                      <option value="Sweden">Sweden</option>
                      <option value="Switzerland">Switzerland</option>
                      <option value="Syrian Arab Republic">
                        Syrian Arab Republic
                      </option>
                      <option value="Taiwan">Taiwan</option>
                      <option value="Tajikistan">Tajikistan</option>
                      <option value="Tanzania, United Republic of">
                        Tanzania, United Republic of
                      </option>
                      <option value="Thailand">Thailand</option>
                      <option value="Timor-leste">Timor-leste</option>
                      <option value="Togo">Togo</option>
                      <option value="Tokelau">Tokelau</option>
                      <option value="Tonga">Tonga</option>
                      <option value="Trinidad and Tobago">
                        Trinidad and Tobago
                      </option>
                      <option value="Tunisia">Tunisia</option>
                      <option value="Turkey">Turkey</option>
                      <option value="Turkmenistan">Turkmenistan</option>
                      <option value="Turks and Caicos Islands">
                        Turks and Caicos Islands
                      </option>
                      <option value="Tuvalu">Tuvalu</option>
                      <option value="Uganda">Uganda</option>
                      <option value="Ukraine">Ukraine</option>
                      <option value="United Arab Emirates">
                        United Arab Emirates
                      </option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="United States">United States</option>
                      <option value="United States Minor Outlying Islands">
                        United States Minor Outlying Islands
                      </option>
                      <option value="Uruguay">Uruguay</option>
                      <option value="Uzbekistan">Uzbekistan</option>
                      <option value="Vanuatu">Vanuatu</option>
                      <option value="Venezuela">Venezuela</option>
                      <option value="Viet Nam">Viet Nam</option>
                      <option value="Virgin Islands, British">
                        Virgin Islands, British
                      </option>
                      <option value="Virgin Islands, U.S.">
                        Virgin Islands, U.S.
                      </option>
                      <option value="Wallis and Futuna">
                        Wallis and Futuna
                      </option>
                      <option value="Western Sahara">Western Sahara</option>
                      <option value="Yemen">Yemen</option>
                      <option value="Zambia">Zambia</option>
                      <option value="Zimbabwe">Zimbabwe</option>
                    </select>
                  </div>
                </div>
                <div className="py-4">
                  <label
                    htmlFor="name"
                    className="sm:text-lg text-md font-normal text-[#413F9D] "
                  >
                    Experience Level
                  </label>

                  <div className="relative mt-1">
                    <select
                      id="experience_level"
                      name="experience_level"
                      value={formData.experience_level}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          experience_level: e.target.value,
                        })
                      }
                      className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    >
                      <option value="">Select...</option>
                      <option value="Mid Level">Mid Level</option>
                      <option value="Entry Level">Entry Level</option>
                      <option value="Senior Level">Senior Level</option>
                      <option value="No Experience Required">
                        No Experience Required
                      </option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button
            className="block w-full rounded-lg bg-secondary-100 px-5 py-3 transition ease-in-out delay-150 active:bg-green-500  hover:-translate-y-1 hover:scale-110 text-sm font-semibold text-white   disabled:opacity-50"
            onClick={() => {

              let updatedFormData = formData

              if (formData.employment_status !== "Freelancer") {
                ["work_as_freelancer", "projectsdeliver_monthly_freelancer", "type_services_freelancer"].forEach((key) => {
                  const { [key]: unused, ...rest } = updatedFormData
                  updatedFormData = rest
                })
              }
              if (formData.employment_status !== "Looking for a Job") {
                ["kind_job_looking", "salary_estimate", "job_type", "location_job", "experience_level"].forEach((key) => {
                  const { [key]: unused, ...rest } = updatedFormData
                  updatedFormData = rest
                })
              }
              if (!["Part-time employed", "Full-time employed"].includes(formData.employment_status)) {
                ["job_title", "seniority", "skills", "Work_email", "company", "company_size", "industry", "business_owner", "type_of_income", "like_currentjob"].forEach((key) => {
                  const { [key]: unused, ...rest } = updatedFormData
                  updatedFormData = rest
                })
                if (formData.employment_status !== "Freelancer") {
                  delete updatedFormData["linkedin_profile"]
                }
              }
              console.log(updatedFormData);
              setFormData({ ...updatedFormData })
              saveinfo(updatedFormData);
              setDisable(false);
            }}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
