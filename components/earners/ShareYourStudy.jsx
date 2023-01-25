import React from "react";

const ShareYourStudy = () => {
  return (
    <>
      <section className="bg-white">
        <div className="max-w-[1170px] md:py-12 sm:py-8 py-6 mx-auto px-3 xl:px-0">
          <h3 className="text-[#595959] font-bold lg:text-[64px] md:text-[50px] sm:text-[30px] text-[25px]  leading-[120%] ff-Roboto text-center max-w-[780px] mx-auto mb-4 text-shadow ">
            Share <span className="font-manrope your_study">your study</span>{" "}
            with us
          </h3>
          <div className="flex flex-col items-center justify-center">
            {/* <img src="/img/user1.jpg" alt="/img/user1.jpg" className="sm:w-[100px] w-[55px] h-[55px] sm:h-[100px] rounded-full" /> */}
            <p className="  text-black opacity-90 font-medium lg:text-[24px] md:text-[18px]  sm:text-start text-center text-[15px] ">
              Feature your study on the fastest growing recruiting network
              online
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShareYourStudy;
