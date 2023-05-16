import React, { useState } from "react";
import CurrentProjects from "../components/home/CurrentProjects";
import Footer from "../components/home/Footer";
import Hero from "../components/home/Hero";
import HowItWorks from "../components/home/HowItWorks";
import Navbar from "../components/home/Navbar";
import Participants from "../components/home/Participants";
import Sidebar from "../components/home/Sidebar";
import Testimonial from "../components/home/Testimonial";

const Homepage = () => {
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

export default Homepage;
