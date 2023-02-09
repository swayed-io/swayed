import Onboard from "../../../components/edit/onboard";
import BasicForm from "../../../components/edit/basicform";
import WorkForm from "../../../components/edit/workform";
import PersonalForm from "../../../components/edit/personalform";
import TechnicalForm from "../../../components/edit/technicalform";
import { useState, useEffect } from "react";
import { updateParticipant, getParticipantsByUserID } from "../../../lib/data";

import { withProtected } from "../../../hook/route";

import { getAuth } from "firebase/auth";
import { useRouter } from "next/router";

function OnboardPage({ auth }) {
  const router = useRouter();
  const { pageQuery } = router.query;
  let au = getAuth();
  let user = au.currentUser;
  useEffect(() => {
    (async () => {
      const participant = await getParticipantsByUserID(user.uid);
      setFormData(participant);
      console.log(participant)
    })();
    return () => {
      console.log("cleaning up");
    };
  }, [user.uid]);
  const [formData, setFormData] = useState({
    created: new Date().toLocaleString(),
    userId: user?.uid,
    fullName: "",
    lastName: "",
    code_country: "",
    phone: "",
    birth: "",
    city: "",
    gender: "",
    ethnicity: "",
    household_income: "",
    level_education: "",
    marital_status: "",
    children: "",
    living_situation: "",
    home_owner: "",
    computer_with_webcam: "",
    internet_browser: "",
    computer_os: "",
    smarthphone_os: "",
    tablet_os: "",
    interests: [],
  });

  const [page, setPage] = useState(pageQuery);
  const componentList = [
    <BasicForm
      page={page}
      key={page}
      setPage={setPage}
      formData={formData}
      setFormData={setFormData}
      saveinfo={updateParticipant}
    />,
    <WorkForm
      page={page}
      key={page}
      setPage={setPage}
      formData={formData}
      setFormData={setFormData}
      saveinfo={updateParticipant}
    />,
    <PersonalForm
      page={page}
      key={page}
      setPage={setPage}
      formData={formData}
      setFormData={setFormData}
      saveinfo={updateParticipant}
    />,
    <TechnicalForm
      page={page}
      key={page}
      setPage={setPage}
      formData={formData}
      setFormData={setFormData}
      saveinfo={updateParticipant}
    />,
  ];

  return (
    <div>
      <div>{componentList[page]}</div>
    </div>
  );
}
export default withProtected(OnboardPage);
