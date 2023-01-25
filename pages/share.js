import AuthService from "../lib/auth";
import CookieConsent from "react-cookie-consent";
import Link from "next/link";
import Share from "/components/share";
export default function SharePage() {
  return (
    <div>
      <Share />
      <CookieConsent>
        This website stores cookies on your computer. These cookies are used to
        collect information about how you interact with our website and allow us
        to remember you. We use this information in order to improve and
        customize your browsing experience and for analytics about our website
        visitors. To find out more about the cookies we see our{" "}
        <Link href="/privacy">
          <a className="font-semibold">Privacy Policy</a>
        </Link>
      </CookieConsent>
    </div>
  );
}
