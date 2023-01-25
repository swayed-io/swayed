import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { FaqIcon, MinusIcon, PlusIcon } from "../home/common/Icons";

const FaqListItem = ({ activeHandler, index, item, view }) => {
  return (
    <>
      <div
        onClick={() => activeHandler(index)}
        className={`mb-4   cursor-pointer     ${index === view ? " " : " "}`}
      >
        <div className="">
          <div
            className={`${
              index === view ? " " : ""
            } text-black  ff-roboto shadow-2xl  bg-white rounded-[30px] mt-[10px] sm:mt-[34px] px-[10px]  sm:px-[18px] box_shadow_faq  flex items-center justify-between  text-[16px] py-4`}
          >
            <div className="flex items-center">
              <span className="mr-[10px] sm:mr-[24px] ">
                {" "}
                <FaqIcon />
              </span>{" "}
              {item.questions}
            </div>
            {index === view ? <MinusIcon /> : <PlusIcon />}
          </div>
          <AnimatePresence>
            {index === view && (
              <>
                <motion.div
                  transition={{ type: "none", stiffness: 60 }}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: "auto",
                    opacity: 1,
                  }}
                  exit={{
                    height: 0,
                    opacity: 0,
                    transition: { type: "none", stiffness: 50 },
                  }}
                >
                  <p className="  text-gray  text-sm py-4 px-4  mt-3">
                    {item.answer}
                  </p>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};

export default FaqListItem;
