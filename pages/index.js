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
import Hero from "../components/home/Hero";
import HowItWorks from "../components/home/HowItWorks";
import Testimonial from "../components/home/Testimonial";
import CurrentProjects from "../components/home/CurrentProjects";
import Participants from "../components/home/Participants";

const Earners = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <Navbar setSidebarOpen={setSidebarOpen} />
      <Sidebar setSidebarOpen={setSidebarOpen} isSidebarOpen={isSidebarOpen} />

      <Hero />
      <HowItWorks />
      <Testimonial />
      <CurrentProjects />
      <Participants />
      
      <Footer />
    </>
  );
};

export default Earners;
