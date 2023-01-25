import React from "react";

const Testimonial = () => {
  return (
    <>
      <section className="bg-white">
        <div className="max-w-[1170px] md:py-12 sm:py-8 py-6 mx-auto px-3 xl:px-0">
          <h3 className="text-[#595959] font-semibold lg:text-[24px] md:text-[18px] sm:text-[15px] text-[12px]  leading-[120%] ff-Roboto text-center max-w-[780px] mx-auto mb-5">
            &quot;I love being able to share my knowledge with companies and
            seeing them make these adjustments. It&apos;s a great feeling
            knowing that in a way, I am shaping the future&quot;
          </h3>
          <div className="flex flex-col items-center justify-center">
            <img
              src="/img/user1.jpg"
              alt="/img/user1.jpg"
              className="sm:w-[100px] w-[55px] h-[55px] sm:h-[100px] rounded-full"
            />
            <p className="mt-3 text-black opacity-80 font-bold lg:text-[24px] md:text-[18px] sm:text-[15px] text-[12px]">
              Nina
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
