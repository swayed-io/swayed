import React from "react";


const Team = () => {
  return (
    <>
      {" "}
      <div className="sm:bg-[#4DA3F0] sm:bg-opacity-10">
      <section className="max-w-[1286px] px-3 mx-auto ff-Roboto md:my-16 md:pb-16 my-4 sm:my-10 md:pt-6 ">
        <h2 className="ff-Roboto text-black lg:text-[36px] md:text-[28px] sm:text-[22px] text-[17px] font-bold text-center md:mb-16 mb-7">
          What our participants are saying
        </h2>

        <div className="flex flex-wrap items-center justify-center xl:justify-between">
          
              <article
                className="mb-12 mx-5  xl:mx-0 xl:mb-0 p-6 flex flex-col justify-between items-center bg-white lg:text-left text-center lg:bg-[#EEF6FE] shadow-how-it-works rounded-[24px] sm:min-h-[270px] min-h-[230px] max-w-[342px] lg:max-w-[387px] transition-all duration-200 ease-in hover:-translate-y-2"
                
              >
                <h4 className="ff-Roboto mb-3 sm:text-[16px] text-[14px] font-medium text-black leading-[130%] sm:leading-[170%]">
                “I feel privileged to be part of Swayed developing team. It is an absolute honor working and collaborating on such amazing project”
                </h4>
                <div className="flex items-center justify-center">
                  <img
                    className="rounded-full object-contain sm:w-[75px] w-[53px] sm:h-[75px] h-[53px]"
                    src="/img/team/zakaria.png"
                    alt="Zakaria developer"
                  />
                  <p className="ml-3 text-black opacity-80 font-bold sm:text-[24px] text-[17px]">
                    Zakaria
                  </p>
                </div>
              </article>
              <article
                className="mb-12 mx-5  xl:mx-0 xl:mb-0 p-6 flex flex-col justify-between items-center bg-white lg:text-left text-center lg:bg-[#EEF6FE] shadow-how-it-works rounded-[24px] sm:min-h-[270px] min-h-[230px] max-w-[342px] lg:max-w-[387px] transition-all duration-200 ease-in hover:-translate-y-2"
                
              >
                <h4 className=" ff-Roboto mb-3 sm:text-[16px] text-[14px] font-medium text-black leading-[130%] sm:leading-[170%]">
                “I feel privileged to be part of Swayed developing team. It is an absolute honor working and collaborating on such amazing project”
                </h4>
                <div className="flex items-center justify-center">
                  <img
                    className="rounded-full object-contain sm:w-[75px] w-[53px] sm:h-[75px] h-[53px]"
                    src="/img/team/mateo.png"
                    alt="Zakaria developer"
                  />
                  <p className="ml-3 text-black opacity-80 font-bold sm:text-[24px] text-[17px]">
                    Mateo
                  </p>
                </div>
              </article>
              <article
                className="mb-12 mx-5  xl:mx-0 xl:mb-0 p-6 flex flex-col justify-between items-center bg-white lg:text-left text-center lg:bg-[#EEF6FE] shadow-how-it-works rounded-[24px] sm:min-h-[270px] min-h-[230px] max-w-[342px] lg:max-w-[387px] transition-all duration-200 ease-in hover:-translate-y-2"
                
              >
                <h4 className="ff-Roboto mb-3 sm:text-[16px] text-[14px] font-medium text-black leading-[130%] sm:leading-[170%]">
                “Working at Swayed is a pleasure! The flexible work culture allows me to balance my work and personal life effectively, and I`&apos;m proud to be part of an organization with a great mission.”
                </h4>
                <div className="flex items-center justify-center">
                  <img
                    className="rounded-full object-contain sm:w-[75px] w-[53px] sm:h-[75px] h-[53px]"
                    src="/img/team/rutvi.jpeg"
                    alt="Zakaria developer"
                  />
                  <p className="ml-3 text-black opacity-80 font-bold sm:text-[24px] text-[17px]">
                    Rutvi
                  </p>
                </div>
              </article>
            
        </div>
      </section>
      </div>
    </>
  );
};

export default Team;