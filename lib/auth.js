import { getApp } from "firebase/app";
import { getProdApp } from "../firebaseConfig";

import { useLinkedIn } from 'react-linkedin-login-oauth2';
import {
  signInWithPopup,
  getAuth,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithRedirect,
  signInWithEmailAndPassword,
  FacebookAuthProvider,
  sendEmailVerification,
  sendPasswordResetEmail,
  updateProfile,
  updatePassword,
  getRedirectResult,
  updateCurrentUser
} from "firebase/auth";
import cogoToast from "cogo-toast";
import Router from "next/router";
import { OAuthProvider } from "firebase/auth";
import { getParticipantsByUserID } from "./data"

class AuthService {
  constructor(firebaseApp) {
    this.auth = getAuth(firebaseApp);
  }

  waitForUser(callback) {
    return onAuthStateChanged(this.auth, (userCred) => {
      callback(userCred);
    });
  }

  signupWithEmail(user) {
    cogoToast.loading("Sending...").then(async () => {
      return createUserWithEmailAndPassword(
        this.auth,
        user.email,
        user.password
      )
        .then((userCred) => {
          let actionCodeSettings = {
            url: "http://localhost:3000/admin/respondent/onboard"
          };
          console.log(userCred)
          sendEmailVerification(userCred.user, actionCodeSettings);
          Router.push("/verify-email");
          return {
            user: userCred.user,
          };
        })
        .catch((error) => {
          console.log(error);
          cogoToast.error("Error: " + error);
          return {
            error: error.message,
          };
        });
    });
  }

  loginWithEmail(user) {
    cogoToast.loading("Sending...").then(async () => {
      return signInWithEmailAndPassword(this.auth, user.email, user.password)
        .then((userCred) => {
          cogoToast.success("Welcome!");

          Router.push("/admin/respondent/dashboard");
          return {
            user: userCred.user,
          };
        })
        .catch((error) => {
          console.log(error);
          cogoToast.error("Error: " + error);
          return {
            error: error.message,
          };
        });
    });
  }

  loginWithGoogle() {
    return signInWithPopup(this.auth, new GoogleAuthProvider())
      .then(async (userCred) => {
        cogoToast.success("Welcome!");
        //	Router.push("/admin/respondent/thankyou");
        const participent = await getParticipantsByUserID(userCred.user.uid);

        console.log(userCred)

        console.log(participent);
        if (participent) {
          Router.push("/admin/respondent/dashboard");
        } else {
          Router.push("/admin/respondent/onboard");
        }
        return {
          user: userCred.user,
        };
      })
      .catch((error) => {
        return {
          error: error.message,
        };
      });
  }
  linkWithGoogle() {
    return signInWithPopup(this.auth, new GoogleAuthProvider())
      .then((userCred) => {
        cogoToast.success("Your google account has been linked!");
        return {
          user: userCred.user,
        };
      })
      .catch((error) => {
        return {
          error: error.message,
        };
      });
  }
  loginWithFacebook() {
    return signInWithPopup(this.auth, new FacebookAuthProvider())
      .then(async (userCred) => {
        cogoToast.success("Welcome!");
        //	Router.push("/admin/respondent/thankyou");
        const participent = await getParticipantsByUserID(userCred.user.uid);
        console.log(participent);
        if (participent) {
          Router.push("/admin/respondent/dashboard");
        } else {
          Router.push("/admin/respondent/onboard");
        }
        return {
          user: userCred.user,
        };
      })
      .catch((error) => {
        return {
          error: error.message,
        };
      });
  }
  linkWithFacebook() {
    return signInWithPopup(this.auth, new FacebookAuthProvider())
      .then((userCred) => {
        cogoToast.success("Your facebook has been linked!");

        // Router.push("/admin/respondent/onboard");
        return {
          user: userCred.user,
        };
      })
      .catch((error) => {
        return {
          error: error.message,
        };
      });
  }
  loginWitLinkedin() {
    // const { linkedInLogin } = useLinkedIn({
    //   clientId: '86vhj2q7ukf83q',
    //   redirectUri: `${window.location.origin}/linkedin`, // for Next.js, you can use `${typeof window === 'object' && window.location.origin}/linkedin`
    //   onSuccess: (code) => {
    //     console.log(code);
    //   },
    //   onError: (error) => {
    //     console.log(error);
    //   },
    // });
  }

  linkWithLinkedin() {
    console.log("Not implemented");
  }

  resetPassword(email) {
    cogoToast.loading("Sending...").then(async () => {
      return sendPasswordResetEmail(this.auth, email)
        .then(() => {
          cogoToast.success("Check your email to reset password");
          Router.push("/signin");
        })
        .catch((error) => {
          cogoToast.error("Error:" + error);
          return {
            error: error.message,
          };
        });
    });
  }
  updateUserPassword(newPassword) {
    cogoToast.loading("Sending...").then(async () => {
      return updatePassword(this.auth.currentUser, newPassword)
        .then(() => {
          cogoToast.success("Password updated sucessfully!");
        })
        .catch((error) => {
          cogoToast.error(error.message);
          return {
            error: error.message,
          };
        });
    });
  }
  disableUser() {
    // return updateCurrentUser(this.auth, { ...this.auth.currentUser, disabled: true });
  }
  getUser() {
    return this.auth.currentUser;
  }

  updateProfile(newData) {
    cogoToast.loading("Saving ...").then(async () => {
      console.log(newData)
      return updateProfile(this.auth.currentUser, newData)
        .then(() => {
          cogoToast.success("Profile updated successfully!");
        })
        .catch((error) => {
          cogoToast.error(error.message);
          return {
            error: error.message,
          };
        });
    });
  }
  async logout() {
    await signOut(this.auth);
  }
}

export default new AuthService(getProdApp());
