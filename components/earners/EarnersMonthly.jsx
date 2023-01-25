import Image from "next/image";
import React from "react";
import { monthlyCard } from "../home/common/Helper";
import EarnersMonthlyCard from "./EarnersMonthlyCard";

const EarnersMonthly = () => {
  return (
    <>
      <div className=" py-5 sm:py-10">
        <div className=" bg_monthly   sm:mb-14 relative ">
          <div className="max-w-[1366px]  z-10 relative mx-auto px-3 xl:px-[80px]  current-project-bg">
            <div className="pt-[33px] ">
              <div className="monthly_bg pt-[20px] mx-auto max-w-[670px] lg:max-w-[896px] w-full flex flex-col sm:flex-row justify-between sm:pb-[10px] pb-[20px]">
                <div className="w-full">
                  <p className="text-[24px] text-center text_shadow font-medium leading-[28px] text-[#4253E7] ff-Roboto ">
                    {" "}
                    MONTHLY VISITORS
                  </p>
                  <p className="text-[24px] text-center text_shadow mt-[16px] font-medium leading-[28px] text-[#60C4E3] ff-Roboto">
                    85,000+
                  </p>
                </div>
                <div className="w-full sm:w-[234px] flex justify-center my-3 sm:my-0 sm:block">
                  <span className="max-w-[70px] sm:max-w-none">
                    {" "}
                    <Image
                      src="/img/share-study-img-1.png"
                      width={101}
                      height={100}
                    />
                  </span>
                </div>
                <div className="w-full">
                  <p className="text-[24px] text-center text_shadow font-medium leading-[28px] text-[#4253E7] ff-Roboto ">
                    {" "}
                    MONTHLY PAGEVIEWS
                  </p>
                  <p className="text-[24px] text-center text_shadow mt-[16px] font-medium leading-[28px] text-[#60C4E3] ">
                    100,000+
                  </p>
                </div>
              </div>
            </div>
            <div
              id="get-started"
              className=" max-w-[705px] mx-auto w-full flex sm:flex-row flex-col justify-center items-center sm:items-start sm:justify-between xl:translate-x-[-20px] sm:mt-[60px] mt-[30px] md:mt-[100px] pb-[30px] sm:pb-[84px] xl:px-0"
            >
              {monthlyCard.map((item, index) => (
                <EarnersMonthlyCard item={item} key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EarnersMonthly;
