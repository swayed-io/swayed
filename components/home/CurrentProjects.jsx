import React from "react";
import ProjectDetails from "./common/ProjectDetails";
import ProjectThree from "./common/ProjectThree";
import ProjectTwo from "./common/ProjectTwo";

const CurrentProjects = () => {
  return (
    <>
      <div className="lg:bg-[#edf6fd] py-10">
        <div className=" bg-project   mb-14 relative ">
          {/* <div className="absolute left-0 bottom-0 hidden lg:flex  ">
          <img
            src="/img/project-bottoms.png"
            alt=""
            className="w-[482px] h-[489px]"
          />  
        </div> */}
          <div className="max-w-[1366px] z-10 relative mx-auto px-3 xl:px-[80px] py-4 current-project-bg">
            <div className="md:py-8 sm:py-6 py-2 text-center">
              <button
                className=" lg:text-[35px] md:text-[24px] sm:text-[18px] text-[14px] font-bold  ff-Roboto sm:py-4 py-2 sm:px-12 md:px-8 px-6 rounded-[100px] text-[#4965C6]
             bg-[#EFEFEF] transition-all duration-300 hover:-translate-y-1   "
              >
                Current Projects
              </button>
            </div>
            <div className=" xl:translate-x-[-20px] xl:px-0">
              <ProjectDetails /> <ProjectTwo />
              <ProjectThree />
            </div>{" "}
            <div className="md:py-8 sm:py-6 py-3 text-center md:mb-12 mb-4">
              <button
                className="  md:text-[22px] sm:text-[18px] text-[14px] font-bold ff-Roboto sm:py-2 py-[6px] sm:px-10 md:px-8 px-6 rounded-[100px] text-white 
             btn-bg-gradients transition-all duration-300  hover:-translate-y-1   "
              >
                View More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CurrentProjects;
