import React from "react";
import { GlobIcon, LightIcon, MiceIcon } from "./Icons";
import Link from "next/link";
function ProjectDetails() {
  return (
    <>
      <div className="max-w-[1138px] mx-auto mt-4 bg-white md:bg-opacity-90 md:rounded-3xl rounded-lg  sm:py-5 py-3 md:px-7 sm:px-5  px-3 md:mb-10 sm:mb-8 mb-6 relative z-10  ">
        <div className=" ">
          <div className="flex   justify-between mb-4   ">
            <div className="md:mt-2 ">
              <h1 className="lg:text-[36px] md:text-[24px] sm:text-[18px] text-[16px]  ff-Roboto font-bold    text-[#4965C6] mr-10 leading-[120%]">
                Online Study on Smart Devices
              </h1>
            </div>
            <div className=" mt-0 sm:mt-1 flex flex-col items-center justify-center">
              <p className="lg:text-[36px] md:text-[24px] sm:text-[18px] text-[14px]   font-bold    text-[#139045]">
                $325
              </p>
              <span className="text-[9px] sm:text-[12px] lg:text-[18px] font-medium text-center text-black opacity-60  ml-[6px] leading-[0]">
                {" "}
                2.5 Hr
              </span>
            </div>
          </div>
          <div className="  item-center  flex-wrap mb-2 hidden md:flex  ">
            <span className="bg-[#58656F] bg-opacity-10 flex items-center text-black ff-Roboto font-medium sm:py-1 py-[2px] md:px-7 sm:px-4 px-2 xl:mr-7 lg:mr-5 md:mr-3 mr-2  rounded-3xl  text-[9px] sm:text-[14px] md:text-[18px] lg:text-[20px] xl:text-[24px] ">
              <span className="mr-1 sm:mr-2">
                {" "}
                <MiceIcon />
              </span>
              1-on-1 Interview
            </span>{" "}
            <span className="bg-[#58656F] bg-opacity-10 flex items-center text-black ff-Roboto font-medium sm:py-1 py-[2px] md:px-7 sm:px-4 px-2 xl:mr-7 lg:mr-5 md:mr-3 mr-2  rounded-3xl  text-[9px] sm:text-[14px] md:text-[18px] lg:text-[20px] xl:text-[24px] ">
              <span className="mr-1 sm:mr-2">
                {" "}
                <GlobIcon />
              </span>
              Online
            </span>{" "}
            <span className="bg-[#58656F] bg-opacity-10 flex items-center text-black ff-Roboto font-medium sm:py-1 py-[2px] md:px-7 sm:px-4 px-2 xl:mr-7    rounded-3xl  text-[9px] sm:text-[14px] md:text-[18px] lg:text-[20px] xl:text-[24px] ">
              <span className="mr-1 sm:mr-2">
                {" "}
                <LightIcon />
              </span>
              Easy Apply
            </span>
          </div>
          <p className="text-[11px] sm:text-[12px] lg:text-[18px] font-medium ff-Roboto md:leading-[200%] text-black opacity-60  leading-[150%]  ">
            {" "}
            Looking for participants between the ages of 21 and 64 to take part
            in a paid study on smart devices? If you&apos;re interested, sign up
            and take our survey to find out if you qualify! If you are chosen,
            our Insight Coordinators will get in touch with you.
          </p>
          <div className="  item-center  flex-wrap my-3 pt-1 flex md:hidden  ">
            <span className="bg-[#58656F] bg-opacity-10 flex items-center text-black ff-Roboto font-medium sm:py-1 py-[2px] md:px-7 sm:px-4 px-2 xl:mr-7 lg:mr-5 md:mr-3 mr-2  rounded-3xl  text-[9px] sm:text-[14px] md:text-[18px] lg:text-[20px] xl:text-[24px] ">
              <span className="mr-1 sm:mr-2">
                {" "}
                <MiceIcon />
              </span>
              1-on-1 Interview
            </span>{" "}
            <span className="bg-[#58656F] bg-opacity-10 flex items-center text-black ff-Roboto font-medium sm:py-1 py-[2px] md:px-7 sm:px-4 px-2 xl:mr-7 lg:mr-5 md:mr-3 mr-2  rounded-3xl  text-[9px] sm:text-[14px] md:text-[18px] lg:text-[20px] xl:text-[24px] ">
              <span className="mr-1 sm:mr-2">
                {" "}
                <GlobIcon />
              </span>
              Online
            </span>{" "}
            <span className="bg-[#58656F] bg-opacity-10 flex items-center text-black ff-Roboto font-medium sm:py-1 py-[2px] md:px-7 sm:px-4 px-2 xl:mr-7    rounded-3xl  text-[9px] sm:text-[14px] md:text-[18px] lg:text-[20px] xl:text-[24px] ">
              <span className="mr-1 sm:mr-2">
                {" "}
                <LightIcon />
              </span>
              Easy Apply
            </span>
          </div>
          <div className="flex items-end justify-between">
            <div className="flex my-2 flex-wrap">
              <div className="mr-14">
                <p className="text-[10px] sm:text-[14px] lg:text-[20px] font-medium ff-Roboto md:leading-[200%] text-black opacity-60">
                  {" "}
                  DEVICE REQUIREMENTS
                </p>
                <p className="max-w-[193px] mt-0 sm:mt-2 text-[10px] sm:text-[12px] lg:text-[18px] font-medium ff-Roboto   text-black opacity-[77%]  leading-[150%]">
                  {" "}
                  Computer/Phone with Camera
                </p>
              </div>
              <div>
                <p className="text-[10px] sm:text-[14px] lg:text-[20px] font-medium ff-Roboto md:leading-[200%] text-black opacity-60">
                  {" "}
                  STUDY DATES
                </p>
                <p className="max-w-[193px] mt-0 sm:mt-2 text-[10px] sm:text-[12px] lg:text-[18px] font-medium ff-Roboto   text-black opacity-[77%]  leading-[150%]">
                  {" "}
                  01/09/2023 - 01/26/203
                </p>
              </div>
            </div>
            <div className="sm:mb-4 mb-2">
              <Link href="/signup">
                <button className="lg:text-[20px] sm:text-[15px] text-[12px] text-white font-bold  sm:py-2 py-1 sm:px-5 px-4 btn-gradients duration-300 transition-all ease-in-out hover:-translate-y-1 rounded-[22px]">
                  Apply{" "}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectDetails;
