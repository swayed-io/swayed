

import React from 'react'
import { useEffect} from "react";
import Thankyou from "../../../components/onboarding/thankyou"
import { withProtected } from "../../../hook/route";
import { getAuth } from "firebase/auth";






 function ThankyouPage() {

  let   au = getAuth();
  let  user = au.currentUser;
 
  const [data,setData] = React.useState({
    email : user.email,
      
  })
  
  

  
  return (
    <div>
      <Thankyou   />
    </div>
    
  )
}

export default withProtected(ThankyouPage)