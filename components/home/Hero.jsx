import React from "react";

const Hero = () => {
  return (
    <>
      <div className="sm:bg-[#4DA3F0] sm:bg-opacity-10 ">
        <div className="hero-bg-img  ">
          <div className="flex flex-wrap max-w-[1170px] px-5 mx-auto items-start    ">
            <div className="sm:my-16 my-4 w-full sm:w-1/2   xl:pb-[200px]   sm:pb-[100px] sm:text-left text-center ">
              <h1 className="lg:text-[65px] md:text-[45px] sm:text-[35px] text-[27px] text-white font-bold  leading-[110%] text-shadow pt-2 ">
                Your opinion matters. <br /> Get paid to shape the
                <span className="text-[#09B2E8]"> future.</span>
              </h1>
              <h4 className="lg:text-[30px] sm:text-[20px] text-[13px] font-bold text-white ff-Roboto sm:my-8 my-3 text-shadow max-w-[301px] sm:max-w-fit mx-auto">
                Earn money for your experience, knowledge and products you
                already use.
              </h4>

              <button className="bg-[#4ABEFF] text-white lg:px-10 md:px-8  px-3   md:py-2 py-[2px] lg:text-[22px] md:text-[18px] sm:text-[16px] text-[13px] font-bold text-shadow rounded-full transition-all ease-in-out duration-300 hover:-translate-y-1   ">
                Get Started Now
              </button>
            </div>
            <div className="sm:w-1/2 w-full sm:mb-0 mb-6">
              <div className="sm:mt-16 ml-auto xl:mr-[-50px]   mx-auto sm:mx-0 flex justify-center">
                <img
                  src="/img/heroside.png"
                  alt="img"
                  className="sm:w-full w-[80%] "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
