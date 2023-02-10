import PersonalInfoForm from "/components/researchers/PersonalInfoForm";
import ProjectInfoForm from "/components/researchers/ProjectInfoForm";
import PaymentInfoForm from "/components/researchers/PaymentInfoForm";
import { useState } from "react";
import { saveResearcher } from "../lib/data";
const saveShareProject = (data) => {
  // console.log(data);
  saveResearcher(data)
};
export default function Share() {
  const [formData, setFormData] = useState({
    email: "",
    first_name: "",
    last_name: "",
    research_method: "",
    city: "",
    state: "",
    project_title: "",
    project_description: "",
    payout: "",
    gender: "",
    age: "",
    registration_url: "",
    published_on: "",
    expires_on: "",
    plan_cost: "",
    payment_method: "",
  });
  const [page, setPage] = useState(0);
  const componentList = [
    <PersonalInfoForm
      page={page}
      setPage={setPage}
      formData={formData}
      setFormData={setFormData}
      key={page}
    />,
    <ProjectInfoForm
      page={page}
      setPage={setPage}
      formData={formData}
      setFormData={setFormData}
      key={page}
    />,
    <PaymentInfoForm
      page={page}
      setPage={setPage}
      formData={formData}
      setFormData={setFormData}
      key={page}
      saveShareProject={saveShareProject}
    />,
  ];
  return (
    <div>
      <div className="">{componentList[page]}</div>
    </div>
  );
}
