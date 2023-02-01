import Link from "next/link";
import { getProjects } from "../../../lib/data";
import { useState, useEffect } from "react";
import { useFetch } from "../../../hook/data";

export default function Dashboard() {
  const {
    data: projects,
    error,
    loading,
  } = useFetch("http://localhost:8080/scrape-offers");
  if (loading || projects === null) return <div className="">Loading ...</div>;
  return (
    <div className="flex flex-row">
      <div id="listings" className="sm:p-2 p-4 bg-background-100 w-3/4">
        <div className="">
          <div className="flex flex-row justify-between">
            <p className="font-semibold text-2xl">
              We need a few more things from you
            </p>
            <button className="rounded-full px-4 py-2 border-2 border-secondary-100 text-secondary-100 text-sm font-medium">
              Skip for now
            </button>
          </div>
          <div className="mt-4">
            <div className="bg-[#DFEEFD] rounded-md flex flex-row w-full mt-4 p-4">
              <div className="flex flex-row items-center w-full justify-between">
                <div className="w-3/4 flex flex-row items-center ">
                  <div className="px-4">
                    <img
                      src="/img/icons/dashboard/camera_icon.svg"
                      className="mx-auto"
                    />
                  </div>
                  <div className="ml-4">
                    <p className="text-base text-secondary-100 font-semibold">
                      Upload a profile photo
                    </p>
                    <p className="text-sm font-medium opacity-80">
                      Required to apply to projects.
                    </p>
                  </div>
                </div>
              </div>
              <div className="px-4 flex items-center">
                <img
                  src="/img/icons/dashboard/check_green.svg"
                  className=" items-end"
                />
              </div>
            </div>
            <div className="bg-[#DFEEFD] rounded-md flex flex-row w-full mt-4 p-4">
              <div className="flex flex-row items-center w-full justify-between">
                <div className=" flex flex-row items-center ">
                  <div className="px-4">
                    <img
                      src="/img/icons/dashboard/message_icon.svg"
                      className="mx-auto"
                    />
                  </div>
                  <div className="ml-4">
                    <p className="text-base text-secondary-100 font-semibold">
                      Add and verify work email
                    </p>
                    <p className="text-sm font-medium opacity-80">
                      Required to apply to industry professional projects.
                    </p>
                  </div>
                </div>
              </div>

              <div className="px-4 flex items-center">
                <div className=" items-center">
                  <button className="px-2 py-2 bg-white text-xs w-44 mx-auto rounded-full font-medium">
                    I don’t have a work email
                  </button>
                </div>
                <img
                  src="/img/icons/dashboard/check_gray.svg"
                  className="ml-2 mr-7 mx-auto"
                />
              </div>
            </div>
            <div className="bg-[#DFEEFD] rounded-md flex flex-row w-full mt-4 p-4">
              <div className="flex flex-row items-center w-full justify-between">
                <div className=" flex flex-row items-center ">
                  <div className="px-4">
                    <img
                      src="/img/icons/dashboard/linkedin_icon.svg"
                      className="mx-auto"
                    />
                  </div>
                  <div className="ml-4">
                    <p className="text-base text-secondary-100 font-semibold">
                      Add LinkedIn
                    </p>
                    <p className="text-sm font-medium opacity-80">
                      Help researchers verify your identity and increase your
                      chances of being selected for projects.{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="px-4 flex items-center">
                <img
                  src="/img/icons/dashboard/check_gray.svg"
                  className=" items-end"
                />
              </div>
            </div>
            <div className="bg-[#DFEEFD] rounded-md flex flex-row w-full mt-4 p-4">
              <div className="flex flex-row items-center w-full justify-between">
                <div className="w-3/4 flex flex-row items-center ">
                  <div className="px-4">
                    <img
                      src="/img/icons/dashboard/video_icon.svg"
                      className="mx-auto"
                    />
                  </div>
                  <div className="ml-4">
                    <p className="text-base text-secondary-100 font-semibold flex flex-row items-center">
                      Add personal video introduction{" "}
                      <span className="ml-2 px-2 py-1 font-normal bg-gradient-to-r from-primary-100 to-secondary-100 text-white rounded-full border-0   focus:outline-none hover:bg-gray-200  text-xs bg-blue-500 ">
                        NEW
                      </span>
                    </p>
                    <p className="text-sm font-medium opacity-80">
                      This is your chance to personally introduce yourself to
                      researchers.
                    </p>
                  </div>
                </div>
              </div>
              <div className="px-4 flex items-center">
                <img
                  src="/img/icons/dashboard/check_gray.svg"
                  className=" items-end"
                />
              </div>
            </div>
            <div className="bg-[#DFEEFD] rounded-md flex flex-row w-full mt-4 p-4">
              <div className="flex flex-row items-center w-full justify-between">
                <div className="w-3/4 flex flex-row items-center ">
                  <div className="px-4">
                    <img
                      src="/img/icons/dashboard/income_icon.svg"
                      className="mx-auto"
                    />
                  </div>
                  <div className="ml-4">
                    <p className="text-base text-secondary-100 font-semibold">
                      Add your household income
                    </p>
                    <p className="text-sm font-medium opacity-80">
                      This helps qualify you for more general population
                      projects.
                    </p>
                  </div>
                </div>
              </div>
              <div className="px-4 flex items-center">
                <img
                  src="/img/icons/dashboard/check_gray.svg"
                  className=" items-end"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="py-4  flex flex-row gap-x-6">
          <button className="rounded-full bg-white text-center   font-medium text-sm justify-between  w-[48em]  flex flex-row gap-2 ">
            <span className=" items-center py-3 px-4 text-sm font-medium opacity-40">
              Search projects by keyword
            </span>
            <img src="/img/icons/respondent_d/search_icon.svg" />
          </button>
          <button className="rounded-full bg-white text-center py-2 px-4 font-medium text-sm     flex flex-row gap-2 items-center ">
            <img
              src="/img/icons/respondent_d/filter_icon.svg"
              className="opacity-80"
            />
            <span className="opacity-80 text-sm">Filter (0)</span>
          </button>
          <button className="rounded-full bg-white text-center py-2 px-4 font-medium text-sm     flex flex-row gap-2  items-center">
            <span className="opacity-80 text-sm">Sort Most Relevant</span>
            <img
              src="/img/icons/respondent_d/row_icon.svg"
              className="opacity-80"
            />
          </button>
        </div>
        <div className="mb-4">
          <p className="font-medium text-sm">15 of 40 projects</p>
        </div>
        {projects.map((p) => (
          <div key={p} className="rounded-xl bg-white">
            <div className="flex flex-col sm:p-4 p-2">
              <div className="flex flex-row justify-between">
                <p className="ml-2 text-[#4965C6] font-bold sm:text-lg text-base">
                  {/* Customer Experience for
                  <br className="sm:hidden visible" />
                  E-Commerce */}
                  {p.title}
                </p>
                <div>
                  <p className="ml-4 text-[#139045] font-bold sm:text-2xl text-xl">
                    {p.payout}
                  </p>
                  <p className="text-black opacity-60 sm:text-sm text-xs text-center">
                    30 minutes
                  </p>
                </div>
              </div>
              <div className="flex flex-row space-x-2  ">
                <button className="rounded-full bg-background-100 text-center py-2 px-4 font-medium text-sm   flex flex-row gap-2 ">
                  <img
                    src="/img/icons/respondent_d/globe_icon.svg"
                    className="opacity-60"
                  />
                  <span className="opacity-60">{p.facility}</span>
                </button>
                <button className="rounded-full bg-background-100 text-center py-2 px-4 font-medium text-sm   flex flex-row gap-2 ">
                  <img
                    src="/img/icons/respondent_d/thunder_icon.svg"
                    className="opacity-60"
                  />
                  <span className="opacity-60">Easy Apply</span>
                </button>
              </div>
              <div className="w-full sm:mt-2 mt-4">
                <p className="ml-2 text-sm text-medium text-black sm:leading-relaxed">
                  {p.description}
                </p>
              </div>
              <div className="flex flex-row space-x-2 sm:hidden visible sm:mt-0 mt-2">
                {/* <button className="rounded-full bg-background-100 text-center py-2 sm:px-4 px-2 items-center font-medium text-xs  bg-opacity-10 flex flex-row">
                <img src="/img/microfone_icon.svg" />
                1-on-1 Interview
              </button> */}
                <button className="rounded-full bg-background-100 text-center py-2 sm:px-4 px-2 items-center font-medium text-xs  bg-opacity-10 flex flex-row">
                  <img src="/img/world_icon.svg" />
                  Online
                </button>
                <button className="rounded-full bg-background-100 text-center py-2 sm:px-4 px-2 items-center font-medium text-xs  bg-opacity-10 flex flex-row">
                  <img src="/img/thunder_icon.svg" />
                  Easy Apply
                </button>
              </div>
              <div className="ml-2 sm:flex sm:flex-row flex-col justify-between mt-4  hidden">
                <div className="flex sm:flex-row flex-col space-x-2">
                  <div>
                    <p className="font-medium text-black text-opacity-60 text-sm">
                      DEVICE REQUIREMENTS
                    </p>
                    <p className="mt-2 text-sm text-black font-medium text-opacity-75">
                      Computer with webcam
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-black text-opacity-60 text-sm">
                      STUDY DATES
                    </p>
                    <p className="mt-2 text-sm text-black font-medium text-opacity-75">
                      10/10/2022 - 11/13/2022
                    </p>
                  </div>
                </div>
                <div className="">
                  <button className="px-4 py-2 font-medium bg-gradient-to-tr from-primary-100 to-secondary-100 text-white rounded-full border-0  focus:outline-none hover:bg-gray-200  sm:ml-0 ml-64  text-sm mt-8 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110">
                    <Link href="/signup">View Project</Link>
                  </button>
                </div>
              </div>
              <div className="mt-4 ml-2 sm:hidden visible">
                <div>
                  <p className="font-medium text-black text-opacity-60 text-sm">
                    DEVICE REQUIREMENTS
                  </p>
                  <p className="mt-2 text-sm text-black font-medium text-opacity-75">
                    Computer with webcam
                  </p>
                </div>
                <div className="flex flex-row mt-2">
                  <div>
                    <p className="font-medium text-black text-opacity-60 text-sm">
                      STUDY DATES
                    </p>
                    <p className="mt-2 text-sm text-black font-medium text-opacity-75">
                      {p.published}-{p.expires}
                    </p>
                  </div>
                  <div className="">
                    <button className="px-4 py-2 font-medium bg-gradient-to-tr from-primary-100 to-secondary-100 text-white rounded-full border-0 ml-40  focus:outline-none hover:bg-gray-200  text-sm mt-8 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110">
                      <Link href="/signup">View Project</Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        {/* <div className="rounded-xl bg-white sm:mt-8 mt-4">
        <div className="flex flex-col sm:p-4 p-2">
            <div className="flex flex-row justify-between">
              <p className="ml-2 text-[#4965C6] font-bold sm:text-lg text-base">
                Improve customer experience
                <br className="sm:hidden visible" />
              </p>

              <div>
                <p className="ml-4 text-[#139045] font-bold sm:text-2xl text-xl">
                  $400
                </p>
                <p className="text-black opacity-60 sm:text-sm text-xs text-center">
                  1 Hour
                </p>
              </div>
            </div>
            <div className="flex flex-row space-x-2  ">
              <button className="rounded-full bg-background-100 text-center py-2 px-4 font-medium text-sm   flex flex-row gap-2 ">
                <img
                  src="/img/icons/respondent_d/globe_icon.svg"
                  className="opacity-60"
                />
                <span className="opacity-60">Online</span>
              </button>
              <button className="rounded-full bg-background-100 text-center py-2 px-4 font-medium text-sm   flex flex-row gap-2 ">
                <img
                  src="/img/icons/respondent_d/thunder_icon.svg"
                  className="opacity-60"
                />
                <span className="opacity-60">Easy Apply</span>
              </button>
            </div>
            <div className="w-full sm:mt-2 mt-4">
              <p className="ml-2 text-sm text-medium text-black sm:leading-relaxed">
                We&apos;re looking for people to take part in a 45-60 minute
                research interview to determine whether our product meets the
                needs of users and to get your feedback on experience, design,
                and development.
              </p>
            </div>
            <div className="flex flex-row space-x-2 sm:hidden visible sm:mt-0 mt-2">
              <button className="rounded-full bg-background-100 text-center py-2 sm:px-4 px-2 items-center font-medium text-xs  bg-opacity-10 flex flex-row">
                <img src="/img/microfone_icon.svg" />
                1-on-1 Interview
              </button>
              <button className="rounded-full bg-background-100 text-center py-2 sm:px-4 px-2 items-center font-medium text-xs  bg-opacity-10 flex flex-row">
                <img src="/img/world_icon.svg" />
                Online
              </button>
              <button className="rounded-full bg-background-100 text-center py-2 sm:px-4 px-2 items-center font-medium text-xs  bg-opacity-10 flex flex-row">
                <img src="/img/thunder_icon.svg" />
                Easy Apply
              </button>
            </div>
            <div className="ml-2 sm:flex sm:flex-row flex-col justify-between mt-4  hidden">
              <div className="flex sm:flex-row flex-col space-x-2">
                <div>
                  <p className="font-medium text-black text-opacity-60 text-sm">
                    DEVICE REQUIREMENTS
                  </p>
                  <p className="mt-2 text-sm text-black font-medium text-opacity-75">
                    Computer with webcam
                  </p>
                </div>
                <div>
                  <p className="font-medium text-black text-opacity-60 text-sm">
                    STUDY DATES
                  </p>
                  <p className="mt-2 text-sm text-black font-medium text-opacity-75">
                    10/10/2022 - 12/05/2022
                  </p>
                </div>
              </div>
              <div className="">
                <button className="px-4 py-2 font-medium bg-gradient-to-tr from-primary-100 to-secondary-100 text-white rounded-full border-0  focus:outline-none hover:bg-gray-200  sm:ml-0 ml-64  text-sm mt-8 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110">
                  <Link href="/signup">View Project</Link>
                </button>
              </div>
            </div>
            <div className="mt-4 ml-2 sm:hidden visible">
              <div>
                <p className="font-medium text-black text-opacity-60 text-sm">
                  DEVICE REQUIREMENTS
                </p>
                <p className="mt-2 text-sm text-black font-medium text-opacity-75">
                  Computer with webcam
                </p>
              </div>
              <div className="flex flex-row mt-2">
                <div>
                  <p className="font-medium text-black text-opacity-60 text-sm">
                    STUDY DATES
                  </p>
                  <p className="mt-2 text-sm text-black font-medium text-opacity-75">
                    10/10/2022 - 12/05/2022
                  </p>
                </div>
                <div className="">
                  <button className="px-4 py-2 font-medium bg-gradient-to-tr from-primary-100 to-secondary-100 text-white rounded-full border-0 ml-40  focus:outline-none hover:bg-gray-200  text-sm mt-8 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110">
                    <Link href="/signup">View Project</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-xl bg-white sm:mt-8 mt-4">
          <div className="flex flex-col sm:p-4 p-2">
            <div className="flex flex-row justify-between">
              <p className="ml-2 text-[#4965C6] font-bold sm:text-lg text-base">
                Calling all fast food lovers!
              </p>

              <div>
                <p className="ml-4 text-[#139045] font-bold sm:text-2xl text-xl">
                  $75
                </p>
                <p className="text-black opacity-60 sm:text-sm text-xs text-center">
                  30 minutes
                </p>
              </div>
            </div>
            <div className="flex flex-row space-x-2  ">
              <button className="rounded-full bg-background-100 text-center py-2 px-4 font-medium text-sm   flex flex-row gap-2 ">
                <img
                  src="/img/icons/respondent_d/globe_icon.svg"
                  className="opacity-60"
                />
                <span className="opacity-60">Online</span>
              </button>
              <button className="rounded-full bg-background-100 text-center py-2 px-4 font-medium text-sm   flex flex-row gap-2 ">
                <img
                  src="/img/icons/respondent_d/thunder_icon.svg"
                  className="opacity-60"
                />
                <span className="opacity-60">Easy Apply</span>
              </button>
            </div>
            <div className="w-full sm:mt-2 mt-4">
              <p className="ml-2 text-sm text-medium text-black sm:leading-relaxed">
                We are looking for people to take part in an exciting consumer
                research study on fast food ordering. Participants in this
                project will place a mobile order for pick-up at a specific fast
                food restaurant and immediately complete an online survey.
              </p>
            </div>
            <div className="flex flex-row space-x-2 sm:hidden visible sm:mt-0 mt-2">
              <button className="rounded-full bg-background-100 text-center py-2 sm:px-4 px-2 items-center font-medium text-xs  bg-opacity-10 flex flex-row">
                <img src="/img/world_icon.svg" />
                Online
              </button>
              <button className="rounded-full bg-background-100 text-center py-2 sm:px-4 px-2 items-center font-medium text-xs  bg-opacity-10 flex flex-row">
                <img src="/img/thunder_icon.svg" />
                Easy Apply
              </button>
            </div>
            <div className="ml-2 sm:flex sm:flex-row flex-col justify-between mt-4  hidden">
              <div className="flex sm:flex-row flex-col space-x-2">
                <div>
                  <p className="font-medium text-black text-opacity-60 text-sm">
                    DEVICE REQUIREMENTS
                  </p>
                  <p className="mt-2 text-sm text-black font-medium text-opacity-75">
                    Smartphone with webcam
                  </p>
                </div>
                <div>
                  <p className="font-medium text-black text-opacity-60 text-sm">
                    STUDY DATES
                  </p>
                  <p className="mt-2 text-sm text-black font-medium text-opacity-75">
                    10/10/2022 - 11/22/2022
                  </p>
                </div>
              </div>
              <div className="">
                <button className="px-4 py-2 font-medium bg-gradient-to-tr from-primary-100 to-secondary-100 text-white rounded-full border-0  focus:outline-none hover:bg-gray-200  sm:ml-0 ml-64  text-sm mt-8 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110">
                  <Link href="/signup">View Project</Link>
                </button>
              </div>
            </div>
            <div className="mt-4 ml-2 sm:hidden visible">
              <div>
                <p className="font-medium text-black text-opacity-60 text-sm">
                  DEVICE REQUIREMENTS
                </p>
                <p className="mt-2 text-sm text-black font-medium text-opacity-75">
                  Computer with webcam
                </p>
              </div>
              <div className="flex flex-row mt-2">
                <div>
                  <p className="font-medium text-black text-opacity-60 text-sm">
                    STUDY DATES
                  </p>
                  <p className="mt-2 text-sm text-black font-medium text-opacity-75">
                    10/10/2022 - 11/22/2022
                  </p>
                </div>
                <div className="">
                  <button className="px-4 py-2 font-bold bg-gradient-to-r from-primary-100 to-secondary-100 text-white rounded-full border-0 ml-40  focus:outline-none hover:bg-gray-200  text-sm mt-8 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110">
                    <Link href="/signup">View Project</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
      <div className="w-1/4">
        <div>
          <div className="bg-white rounded-lg  py-4">
            <p className="text-base font-semibold ml-4">
              Welcome to Shape the
              <br />
              Future!
            </p>
            <p className="text-sm font-medium opacity-60 mt-2 ml-4">
              We’d love to take you on a quick tour and show you how you can get
              paid for your opinions and insights.
            </p>
            <div className="flex flex-row gap-x-2 ml-4">
              <button className="px-4 py-2 font-medium bg-gradient-to-r from-primary-100 to-secondary-100 text-white rounded-full border-0   focus:outline-none hover:bg-gray-200  text-xs mt-8 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110">
                Let’s go
              </button>
              <button className=" py-2 font-medium bg-white text-secondary-100 rounded-full border-0   focus:outline-none   text-sm mt-8 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110">
                Dismiss
              </button>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <div className="bg-white rounded-lg  py-4">
            <p className="text-base font-semibold ml-4">
              Share your referral link
            </p>
            <p className="text-sm font-medium opacity-60 mt-2 ml-4">
              Earn $20 when you refer a new Respondent user who earns $75 in
              total incentive.
            </p>
            <div className="flex flex-row gap-x-2 ml-4">
              <button className="px-4 py-2 font-medium bg-gradient-to-r from-primary-100 to-secondary-100 text-white rounded-full border-0   focus:outline-none hover:bg-gray-200  text-xs mt-8 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110">
                Share link
              </button>
              <button className=" py-2 font-medium bg-white text-secondary-100 rounded-full border-0   focus:outline-none   text-sm mt-8 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110">
                Referral policy
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
