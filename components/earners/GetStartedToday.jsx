import React from "react";
import { getstartedtoday } from "../home/common/Helper";

const GetStartedToday = () => {
  return (
    <>
      <div className="sm:bg-[#4DA3F0] sm:bg-opacity-10 sm:pb-16 pb-8 pt-6 sm:pt-0 ">
        <section className="max-w-[1170px] mx-auto ff-Roboto">
          <h2 className="text-black lg:text-[36px] sm:text-[30px]  text-[25px] font-bold text-center sm:mb-3 leading-[120%] text-shadow ">
            Get Started Today
          </h2>
          <p className="text-black opacity-60 lg:text-[24px] sm:text-[20px] text-[15px] font-medium text-center mb-10 sm:mb-16">
            Start earning in 3 easy steps
          </p>

          <div className="flex flex-wrap items-center justify-center xl:justify-between lg:pb-10">
            {getstartedtoday &&
              getstartedtoday.map((obj, index) => (
                <article
                  className="mb-12 mx-5  xl:mx-0 xl:mb-0 p-6 lg:p-7 bg-white shadow-how-it-works rounded-[24px] md:min-h-[232px] max-w-[342px] transition-all duration-200 ease-in hover:-translate-y-2 lg:text-left text-center"
                  key={index}
                >
                  <div className="flex  justify-center lg:justify-start ">
                    {" "}
                    <span>{obj.icon}</span>
                  </div>
                  <h4 className="mt-5 mb-3 sm:text-[18px] text-[14px] font-bold text-[#1E1E1E]">
                    {obj.heading}
                  </h4>
                  <p className="text-black opacity-60 text-[17px] font-medium leading-[24px] md:mb-0  mb-2">
                    {" "}
                    {obj.desc}
                  </p>
                </article>
              ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default GetStartedToday;
