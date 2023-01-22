import Onboard from "../../../components/onboarding/onboard"
import BasicForm from "../../../components/onboarding/basicform"
import WorkForm from "../../../components/onboarding/workform"
import PersonalForm from "../../../components/onboarding/personalform"
import TechnicalForm from "../../../components/onboarding/technicalform"
import {useState} from "react"
import {saveParticipant} from "../../../lib/data"

import { withProtected } from "../../../hook/route";

import { getAuth } from "firebase/auth";

 function OnboardPage({auth}) {

   
 let   au = getAuth();
   let  user = au.currentUser;

    const [formData, setFormData] = useState({
        created : new Date().toLocaleString(),
        userId : user?.uid,
        fullName : '',
        lastName : '',
        code_country : '',
        phone : '',
        birth:  '',
        city: '',
        gender: '',
        ethnicity : '',
        household_income : '',
        level_education : '',
        marital_status : '',
        children : '',
        living_situation : '',
        home_owner : '',
        computer_with_webcam : '',
        internet_browser : '',
        computer_os : '',
        smarthphone_os : '',
        tablet_os : '',
        interests : []
        

        
      });

    const [page, setPage] = useState(0);
    const componentList = [
        <BasicForm page={page} key={page}
            setPage={setPage}
            formData={formData}
            setFormData={setFormData} />,
        <WorkForm page={page} key={page}
            setPage={setPage}
            formData={formData}
            setFormData={setFormData}
            />,
        <PersonalForm page={page} key={page}
            setPage={setPage}
            formData={formData}
            setFormData={setFormData}
            />,
        <TechnicalForm page={page} key={page}
            setPage={setPage}
            formData={formData}
            setFormData={setFormData}
            saveinfo={saveParticipant}
            />

    ];


    return (
        <div>



            <div>{
                componentList[page]
            }</div>
            


        </div>

    )
}
export default withProtected(OnboardPage)