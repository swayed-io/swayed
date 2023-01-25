import { React, useEffect, useState } from "react";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="text-gray-600 body-font sm:bg-[url('/img/hero_bg.png')] bg-white  sm:bg-cover sm:h-screen font-manrope"
    >
      <div className="container mx-auto flex sm:px-5 px-0 sm:py-24 py-0 smt:mt-0 mt-0 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center sm:mt-8 mt-0">
          <h1 className="title-font sm:text-5xl text-3xl mb-4 font-bold sm:text-white text-[#413F9D]">
            Your opinion matters.
            <br />
            Get paid to shape <br />
            the <span className="text-secondary-100">future</span>.
          </h1>
          <p className="mb-8 leading-relaxed text-lg sm:text-white text-black">
            Earn money for
            <br />
            knowledge and products you already use.
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-secondary-100   border-0 py-2 px-6 focus:outline-none  rounded-full text-lg transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110">
              <Link href="/signup">Sign Up and Get Paid</Link>
            </button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full  ">
          <img
            src="/img/hero_small_bg.png"
            alt="hero share the future"
            className="sm:invisible visible w-full"
          />
        </div>
      </div>
    </section>
  );
}
