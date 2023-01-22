


import { withPublic } from "../hook/route";
import Signin from "../components/auth/signin";
import AuthService from "../lib/auth"


export default function SignInPage() {
  return (
    <div>
     <Signin login={AuthService}/>
      
    </div>
    
  )
}

