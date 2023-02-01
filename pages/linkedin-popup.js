import Head from "next/head";
import { useState, useEffect } from "react";
import { signInWithCustomToken } from "firebase/auth";
import { getApp } from "firebase/app";

const LinkedInPopup = () => {
  function getURLParameter(name) {
    return (
      decodeURIComponent(
        (new RegExp("[?|&]" + name + "=" + "([^&;]+?)(&|#|;|$)").exec(
          location.search
        ) || [null, ""])[1].replace(/\+/g, "%20")
      ) || null
    );
  }

  /**
   * Returns the ID of the Firebase project.
   */
  function getFirebaseProjectId() {
    return getApp().options.authDomain.split(".")[0];
  }

  /**
   * This callback is called by the JSONP callback of the 'token' Firebase Function with the Firebase auth token.
   */
  function tokenReceived(data) {
    console.log(data);
    if (data.token) {
      signInWithCustomToken(data.token).then(function () {
        setLogin(false);
        window.close();
      });
    } else {
      document.body.innerText = "Error in the token Function: " + error;
    }
  }

  const [code, setCode] = useState();
  const [state, setState] = useState();
  const [error, setError] = useState();
  useEffect(() => {
    setCode(getURLParameter("code"));
    setState(getURLParameter("state"));
    setError(getURLParameter("error"));
    if (code) {
      alert("Going to call token function");
      var tokenFunctionURL =
        "https://us-central1-" +
        getFirebaseProjectId() +
        ".cloudfunctions.net/token";
      const scriptSrc =
        tokenFunctionURL +
        "?code=" +
        encodeURIComponent(code) +
        "&state=" +
        encodeURIComponent(state);
      alert("After url");
      fetch(scriptSrc, { credentials: "include" })
        .then((res) => res.json())
        .then((data) => tokenReceived(data));
      // alert("Waiting for login");
    }
  }, [code, state]);
  if (error) {
    return (
      <div className="">Error back from the LinkedIn auth page:{error}</div>
    );
  } else {
    // setLogin(true);
    return <div className="">Login...</div>;
  }
};

export default LinkedInPopup;
