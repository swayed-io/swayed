import Header from "./header";
import Footer from "./footer";
import AuthProvider from "../../hook/auth";
import { useRouter } from "next/router";
import HeaderAdmin from "./admin/header";
import HeaderParticipant from "./admin/header_participant";
import Sidebar from "./admin/Sidebar";
import Navbar from "./admin/navbar";
import AuthService from "../../lib/auth"
import React, { useEffect, useState } from "react";


function Layout(props) {

  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const router = useRouter();
  if (!router.pathname.includes("/admin")) {
    return (
      <div>
        {/* <Header /> */}
        <main>{props.children}</main>
        {/* <Footer /> */}
      </div>
    );
  } else if (router.pathname.includes("/admin/respondent/dashboard")) {
    return (
      <div className="bg-background-100 w-full">
        <div className="flex flex-row ">
          <div className="w-1/4 h-full sticky top-0">
            <Navbar />
          </div>
          <div className="w-full">
            <HeaderParticipant setSidebarOpen={setSidebarOpen} />
            <Sidebar setSidebarOpen={setSidebarOpen} isSidebarOpen={isSidebarOpen} />
            <main className="overflow-y-hidden">{props.children}</main>
          </div>
          <div></div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <HeaderAdmin />
        <main>{props.children}</main>
      </div>
    );
  }
}

export default Layout;
