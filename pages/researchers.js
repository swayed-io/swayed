import { useState } from "react";
import Sidebar from "../components/home/Sidebar";
import EarnersHero from "../components/earners/EarnersHero";
import GetStartedToday from "../components/earners/GetStartedToday";
import ShareYourStudy from "../components/earners/ShareYourStudy";
import EarnersMonthly from "../components/earners/EarnersMonthly";
import Ourobsession from "../components/earners/Ourobsession";
import Faq from "../components/earners/Faq";
import Footer from "../components/common/footer";
import Navbar from "../components/home/Navbar";

function Reachearcher() {
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
}

export default Reachearcher;
