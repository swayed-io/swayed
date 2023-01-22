import { getApp } from "firebase/app";
import {
	signInWithPopup,
	getAuth,
	GoogleAuthProvider,
	signOut,
	onAuthStateChanged,
	createUserWithEmailAndPassword,
	signInWithRedirect, 
	signInWithEmailAndPassword,
	FacebookAuthProvider
} from "firebase/auth";
import cogoToast from "cogo-toast";
import  Router  from "next/router";
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
	
	signupWithEmail(user){
		
		cogoToast.loading("Sending...").then(async () => {
		return  createUserWithEmailAndPassword(this.auth,user.email,user.password)
		.then((userCred) => {
			
			
			cogoToast.success("Welcome!");
		//	Router.push("/admin/respondent/thankyou");
			Router.push("/admin/respondent/onboard");
			return {
				user : userCred.user
				
			};
			
		})
		.catch((error) => {
			console.log(error)
			cogoToast.error("Error: "+error)
			return {
				error : error.message,
			};
		});
	});
	}

	loginWithEmail(user){
		cogoToast.loading("Sending...").then(async () => {
			return  signInWithEmailAndPassword(this.auth,user.email,user.password)
			.then((userCred) => {
				
				
				cogoToast.success("Welcome!");
			
				Router.push("/admin/respondent/dashboard");
				return {
					user : userCred.user
					
				};
				
			})
			.catch((error) => {
				console.log(error)
				cogoToast.error("Error: "+error)
				return {
					error : error.message,
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
	loginWitLinkedin() {
		return signInWithPopup(this.auth, new OAuthProvider('linkedin.com'))
			.then((userCred) => {
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
	async logout() {
		await signOut(this.auth);
	}
}

export default new AuthService(getApp());