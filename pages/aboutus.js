import React, { useState } from "react";
import CurrentProjects from "../components/home/CurrentProjects";
import Footer from "../components/home/Footer";
import Hero from "../components/home/hero_aboutus";
import HowItWorks from "../components/home/HowItWorks";
import Navbar from "../components/home/Navbar";
import Team from "../components/home/team";
import Sidebar from "../components/home/Sidebar";
import Testimonial from "../components/home/Testimonial";
import Values from "../components/home/values"

const Aboutus = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <Navbar setSidebarOpen={setSidebarOpen} />
      <Sidebar setSidebarOpen={setSidebarOpen} isSidebarOpen={isSidebarOpen} />
      <Hero />
      <Values/>
      <Team />
      <Footer />
    </>
  );
};

export default Aboutus;