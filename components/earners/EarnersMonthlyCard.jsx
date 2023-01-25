import { list } from "postcss";
import React from "react";
import { YesIcon } from "../home/common/Icons";
import Link from "next/link";

const EarnersMonthlyCard = ({ item }) => {
  return (
    <div className="sm:my-5 my-10 ">
      <div className="monthly_card w-[305px] flex flex-col justify-between  h-[519px]  pt-[19px] pb-[17px] ">
        <div>
          <div className="flex justify-center">
            <button className="bg-[#EFEFEF] text-[#09B2E8] ff-poppins text-[10px] font-extrabold w-[121px] h-[27px] rounded-[13px] ">
              {item.premium}
            </button>
          </div>
          <p className="text-white font-bold mt-[15px] ff-poppins items-center flex text-center justify-center text-[36px]  ">
            {item.price}
            <span className="font-medium text-[17px] ff-roboto ">/month</span>
          </p>
          <p className="text-[20px] mt-[13px] text_shadow text-[#F8F3F3] text-center font-medium ff-poppins text-shadow">
            {item.day}
          </p>

          <div className="mx-[24px] mt-[29px]">
            {item.list.map((items, index) => (
              <div key={index} className="flex items-center  mt-[13px] ">
                <div className="bg-white/10 w-[23px] h-[20px] flex justify-center items-center rounded-[50%] ">
                  <YesIcon />
                </div>
                <p className="font-medium text-[15px] ml-[11px] ff-poppins text-white">
                  {items.li}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-[16px] ">
          <Link href="/share">
            <button className="text-[#312ECF] text-[15px] font-medium bg-white rounded-[24px] h-[44px] w-[232px] ff-poppins transition-all duration-300 ease-in-out hover:-translate-y-1  ">
              Get Started Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EarnersMonthlyCard;
