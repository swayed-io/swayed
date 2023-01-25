import React from "react";
import Image from "next/image";
const EarnersHero = () => {
  return (
    <>
      <div className="sm:bg-[#4DA3F0] sm:bg-opacity-10 ">
        <div className="hero-bg-img-earners ">
          <div className="flex flex-wrap  max-w-[1170px] px-2 sm:px-5 mx-auto items-start sm:pb-0 pb-6">
            <div className="sm:my-16  mt-9   w-full sm:w-1/2   xl:pb-[130px]   sm:pb-[100px] sm:text-left text-center ">
              <h1 className="lg:text-[65px] md:text-[45px] sm:text-[35px] text-[28px] text-white font-bold  leading-[110%] text-shadow  sm:pt-10">
                Recruit <span className="text-[#09B2E8]"> the right</span>{" "}
                participants at your fingertips
              </h1>

              <h4 className="lg:text-[30px] sm:text-[20px] text-[12px] font-bold text-white ff-Roboto sm:my-8 my-3 text-shadow leading-[130%] ">
                Speed is everything when it comes to market research. Tap into
                thousands of diverse participants in seconds.{" "}
              </h4>
              <button className="bg-[#4ABEFF] text-white lg:px-10 md:px-8  px-3   md:py-2 py-[2px] lg:text-[22px] md:text-[18px] sm:text-[16px] text-[13px] font-bold text-shadow rounded-full transition-all ease-in-out duration-300 hover:-translate-y-1   ">
                Get Started Now
              </button>
            </div>
            <div className="sm:w-1/2 w-full  ">
              <div className="sm:mt-16 ml-auto max-w-[200px] mx-auto sm:mr-0 sm:max-w-fit hidden sm:flex">
                <Image
                  src="/img/earners-img.png"
                  alt="img"
                  className="w-full "
                  width={602}
                  height={523}
                />
              </div>{" "}
              <div className="sm:mt-16 mt-4 -mb-4 ml-auto sm:hidden  flex justify-center ">
                <img
                  src="/img/researchphoto3.png"
                  alt="img"
                  className="w-[85%]  "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EarnersHero;
