import React from "react";
import { participantsdata } from "./common/Helper";

const Participants = () => {
  return (
    <>
      {" "}
      <section className="max-w-[1286px] px-3 mx-auto ff-Roboto md:my-16 md:pb-16 my-4 sm:my-10 md:pt-6">
        <h2 className="text-black lg:text-[36px] md:text-[28px] sm:text-[22px] text-[17px] font-bold text-center md:mb-16 mb-7">
          What our participants are saying
        </h2>

        <div className="flex flex-wrap items-center justify-center xl:justify-between">
          {participantsdata &&
            participantsdata.map((obj, index) => (
              <article
                className="mb-12 mx-5  xl:mx-0 xl:mb-0 p-6 flex flex-col justify-between items-center bg-white lg:text-left text-center lg:bg-[#EEF6FE] shadow-how-it-works rounded-[24px] sm:min-h-[270px] min-h-[230px] max-w-[342px] lg:max-w-[387px] transition-all duration-200 ease-in hover:-translate-y-2"
                key={index}
              >
                <h4 className="mb-3 sm:text-[16px] text-[14px] font-medium text-black leading-[130%] sm:leading-[170%]">
                  {obj.review}
                </h4>
                <div className="flex items-center justify-center">
                  <img
                    className="rounded-full object-contain sm:w-[75px] w-[53px] sm:h-[75px] h-[53px]"
                    src={obj.imageURL}
                    alt={obj.imageURL}
                  />
                  <p className="ml-3 text-black opacity-80 font-bold sm:text-[24px] text-[17px]">
                    {obj.name}
                  </p>
                </div>
              </article>
            ))}
        </div>
      </section>
    </>
  );
};

export default Participants;
