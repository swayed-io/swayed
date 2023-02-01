// Import the functions you need from the SDKs you need V9
import { getApps, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import "firebase/auth";
import "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {
  apiKey: "AIzaSyA6RyjZnpxUzDh3SMbwUVVLcGwoKgzRCp4",
  authDomain: "swayed-a8e31.firebaseapp.com",
  projectId: "swayed-a8e31",
  storageBucket: "swayed-a8e31.appspot.com",
  messagingSenderId: "142901614291",
  appId: "1:142901614291:web:dc58aa2949a716338de626",
  measurementId: "G-SZJKZSG33M",
};

let app;

if (!getApps.length) {
  try {
    app = initializeApp(config);
    if (typeof window !== "undefined") {
      if ("measurementId" in config) {
        getAnalytics();
      }
    }
  } catch (error) {
    console.log("Error:", error);
  }
}
export const db = getFirestore(app);
export const getProdApp = () => {
  return app;
};
