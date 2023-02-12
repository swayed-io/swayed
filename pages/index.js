import React, { useState } from "react";
import GetStartedToday from "../components/earners/GetStartedToday";
import EarnersHero from "../components/earners/EarnersHero";
import ShareYourStudy from "../components/earners/ShareYourStudy";
import EarnersMonthly from "../components/earners/EarnersMonthly";
import Ourobsession from "../components/earners/Ourobsession";
import Navbar from "../components/home/Navbar";
import Sidebar from "../components/home/Sidebar";
import Footer from "../components/home/Footer";
import Faq from "../components/earners/Faq";

const Earners = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <Navbar setSidebarOpen={setSidebarOpen} />
      <Sidebar setSidebarOpen={setSidebarOpen} isSidebarOpen={isSidebarOpen} />
      <EarnersHero />
      <div className="  ">
        <GetStartedToday />
      </div>{" "}
      <ShareYourStudy />
      <EarnersMonthly />
      <Ourobsession />
      <Faq />
      <Footer />
    </>
  );
};

export default Earners;
