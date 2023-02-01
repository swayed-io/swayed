import { getApp } from "firebase/app";
import { getProdApp } from "../firebaseConfig";
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
} from "firebase/auth";
import cogoToast from "cogo-toast";
import Router from "next/router";
import { OAuthProvider } from "firebase/auth";

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
            url:
              "http://localhost:3000/admin/respondent/dashboard?email=" +
              user.email,
          };
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
      .then((userCred) => {
        cogoToast.success("Welcome!");
        //	Router.push("/admin/respondent/thankyou");
        Router.push("/admin/respondent/onboard");
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
      .then((userCred) => {
        cogoToast.success("Welcome!");
        //	Router.push("/admin/respondent/thankyou");
        Router.push("/admin/respondent/onboard");
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
    // window.open("/linkedin-popup1", "Popup", "height=585,width=400");
    // const provider = new OAuthProvider("oidc.linkedin");
    // // return signInWithPopup(this.auth, new OAuthProvider("oidc.linkedin"))
    // return signInWithPopup(this.auth, provider)
    //   .then((userCred) => {
    //     return {
    //       user: userCred.user,
    //     };
    //   })
    //   .catch((error) => {
    //     console.log(error.message);
    //     return {
    //       error: error.message,
    //     };
    //   });
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
  getUser() {
    return this.auth.currentUser;
  }

  updateProfile(newData) {
    cogoToast.loading("Saving ...").then(async () => {
      return updateProfile(this.auth.currentUser, newData)
        .then(() => {
          cogoToast.success("Profile updated sucessfully!");
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
