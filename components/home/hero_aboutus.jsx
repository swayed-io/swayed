import React from "react";

const HeroAboutUS = () => {
  return (
    <>
      <div className="sm:bg-[#4DA3F0] sm:bg-opacity-10 ">
        <div className="hero-bg-img mb-4   ">
          <div className="flex flex-col max-w-[1170px] px-5 mx-auto items-start     ">
            <div className="sm:my-4 my-4 w-full sm:w-full   sm:text-left text-center ">
              <h1 className="lg:text-[65px] ff-Roboto sm:mt-8 mt-4 text-center md:text-[45px] sm:text-[35px] text-[23px] text-white font-bold  leading-[110%] text-shadow pt-2 ">
                Built by the people for the  <span className="text-[#09B2E8]"> people</span> <br /> by the people
               
              </h1>
              
                <div className="mb-4 mt-4 bg-[#3D49AF] bg-opacity-30  shadow-lg rounded-3xl p-4">
                <img
                  src="/img/heroaboutus.png"
                  alt="img"
                  className=""
                />
               </div>

             
            </div>
            <div className="sm:w-full w-full sm:mb-0 ">
              <div className="sm:mt-16 ml-auto  mx-auto sm:mx-0  justify-center">
                
              </div>
            </div>
          </div>
        </div>
        <div className="smt:mt-8 mt-2 p-8 ">
            <h3 className="text-center font-bold sm:text-4xl text-xl  text-shadow text-[#2F2F2F] ff-Roboto">Empowering User Insights with Diversity and Efficiency: Our<br/> Mission to Elevate Your Research Experience</h3>
            <p className="text-center font-medium sm:text-3xl text-lg text-black text-opacity-75 sm:mt-4 mt-2 ff-Roboto">At our company, we`&apos;re on a mission to make the world of user insights<br/> more diverse and efficient. These two solutions alone can take your <br/>projects to the next level. Therefore, for us, our participants happiness is <br/>our motivation and we provide our community with high-quality, <br/>reputable projects. So whether you`&apos;re a researcher, team, or participant,<br/> we`&apos;ve got you covered with the most efficient solutions around!</p>
        </div>
      </div>
    </>
  );
};

export default HeroAboutUS;