import React, { useState } from "react";
import CurrentProjects from "../components/home/CurrentProjects";
import Footer from "../components/home/Footer";
import Hero from "../components/home/Hero";
import HowItWorks from "../components/home/HowItWorks";
import Navbar from "../components/home/Navbar";
import Participants from "../components/home/Participants";
import Sidebar from "../components/home/Sidebar";
import Testimonial from "../components/home/Testimonial";
import EarnersHero from "../components/earners/EarnersHero";
import GetStartedToday from "../components/earners/GetStartedToday";
import ShareYourStudy from "../components/earners/ShareYourStudy";
import EarnersMonthly from "../components/earners/EarnersMonthly";
import Ourobsession from "../components/earners/Ourobsession";
import Faq from "../components/earners/Faq";

const Homepage = () => {
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

export default Homepage;
