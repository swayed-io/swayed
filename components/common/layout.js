import Header from "./header";
import Footer from "./footer";
import AuthProvider from "../../hook/auth";
import { useRouter } from "next/router";
import HeaderAdmin from "./admin/header";
import HeaderParticipant from "./admin/header_participant";
import Navbar from "./admin/navbar";

function Layout(props) {
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
        <div className="flex flex-row">
          <div className="w-1/4 h-screen sticky top-0">
            <Navbar />
          </div>
          <div className="w-full">
            <HeaderParticipant />
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
