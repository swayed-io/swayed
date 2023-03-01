import { useRouter } from 'next/router';
import React from 'react'
import axios from 'axios';

export default function Linkedin  () {
  console.log("linkedin");
  const router = useRouter();

  let tokenn = router.asPath.toString().split("code=")[1];
 function getAccessToken(){
  console.log("running");
  console.log(window.location.origin);
  axios({
    method: 'post',
    url: `https://www.linkedin.com/oauth/v2/accessToken?grant_type=authorization_code&code=${tokenn}&client_id=861qb9wf2l994n&client_secret=2XCrMvvsdOIinznb&redirect_uri=${window.location.origin}/linkedin`,
    headers: {
     "content-type": "application/x-www-form-urlencoded" ,
    //  "Access-Control-Allow-Origin": "localhost:3000",
    //  "Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Accept"
    }
  })
    .then(function (response) {
      console.log(response);
    });
 

}
 
getAccessToken();

  
  return (
    <div>linkedin</div>
  )
}
