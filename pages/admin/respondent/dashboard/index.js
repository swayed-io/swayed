import React from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { withProtected } from "../../../../hook/route";
import Dashboard from "../../../../components/admin/respondent/dashboard";
import Listings from "../../../../components/admin/respondent/listings";
import Cashout from "../../../../components/admin/respondent/cashout";
import Earn from "../../../../components/admin/respondent/earn";
import SocialA from "../../../../components/admin/respondent/social_accounts";
import EditProfile from "../../../../components/admin/respondent/edit_profile";
import ChangePassword from "../../../../components/admin/respondent/change_password";
import Referrals from "../../../../components/admin/respondent/referrals";
import AccountDetails from "../../../../components/admin/respondent/account_details";
import Notifications from "../../../../components/admin/respondent/notifications";
import ProjectsBlank from "../../../../components/admin/respondent/projects_blank";
import AuthService from "/lib/auth";

function DashboardPage() {
  const router = useRouter();
  if (router.asPath.includes("/admin/respondent/dashboard#projects")) {
    return <div className="p-4 ">{<Dashboard authService={AuthService} />}</div>;
  }
  if (router.asPath.includes("/admin/respondent/dashboard#earn")) {
    return <div className="p-4 ">{<Earn />}</div>;
  }
  if (router.asPath.includes("/admin/respondent/dashboard#cashout")) {
    return <div className="p-4 ">{<Cashout />}</div>;
  }
  if (router.asPath.includes("/admin/respondent/dashboard#messages")) {
    return <div className="p-4 ">{<Listings />}</div>;
  }
  if (router.asPath.includes("/admin/respondent/dashboard#referrals")) {
    return <div className="p-4 ">{<Referrals />}</div>;
  }
  if (router.asPath.includes("/admin/respondent/dashboard#editprofile")) {
    return (
      <div className="p-4 ">{<EditProfile authService={AuthService} />}</div>
    );
  }
  if (router.asPath.includes("/admin/respondent/dashboard#accountdetails")) {
    return (
      <div className="p-4 ">{<AccountDetails authService={AuthService} />}</div>
    );
  }
  if (router.asPath.includes("/admin/respondent/dashboard#changepassword")) {
    return (
      <div className="p-4 ">{<ChangePassword authService={AuthService} />}</div>
    );
  }
  if (router.asPath.includes("/admin/respondent/dashboard#socialaccounts")) {
    return <div className="p-4 ">{<SocialA authService={AuthService} />}</div>;
  }
  if (router.asPath.includes("/admin/respondent/dashboard#notifications")) {
    return (
      <div className="p-4 ">{<Notifications authService={AuthService} />}</div>
    );
  }
  if (router.asPath.includes("/admin/respondent/dashboard#helpcenter")) {
    return <div className="p-4 ">{<Dashboard authService={AuthService} />}</div>;
  } else {
    return <div className="p-4 ">{<Dashboard authService={AuthService} />}</div>;
  }
}

export default withProtected(DashboardPage);
