import { db } from "../firebaseConfig";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  setDoc,
  query,
  getDocs,
  where,
  updateDoc,
} from "firebase/firestore";
import cogoToast from "cogo-toast";
import Router from "next/router";
import { async } from "@firebase/util";

export async function getMenu(id) {
  const db = firebase.firestore();
  let result = await new Promise((resolve, reject) => {
    db.collection("menus")
      .where("code", "==", id)
      .get()
      .then((snapshot) => {
        let data = [];
        snapshot.forEach((doc) => {
          data.push(
            Object.assign(
              {
                id: doc.id,
              },
              doc.data()
            )
          );
        });
        resolve(data);
      })
      .catch((error) => {
        reject([]);
      });
  });

  return result;
}

export async function getMenuById(id) {
  const db = firebase.firestore();
  let result = await new Promise((resolve, reject) => {
    db.collection("menus")
      .doc(id)
      .get()
      .then((snapshot) => {
        resolve(snapshot.data());
      })
      .catch((error) => {
        console.log(error);
        reject([]);
      });
  });

  return result;
}

export async function getMenusUser(uuid) {
  const db = firebase.firestore();
  let result = await new Promise((resolve, reject) => {
    db.collection("menus")
      .where("user", "==", uuid)
      .get()
      .then((snapshot) => {
        let data = [];
        snapshot.forEach((doc) => {
          data.push(
            Object.assign(
              {
                id: doc.id,
              },
              doc.data()
            )
          );
        });
        resolve(data);
      })
      .catch((error) => {
        reject([]);
      });
  });
  return result;
}
export async function getParticipantsByUserID(uuid) {
  const q = query(collection(db, "participants"), where("userId", "==", uuid));
  try {
    const querySnapshot = await getDocs(q);
    let data = [];
    querySnapshot.forEach((doc) => {
      data.push(Object.assign({ id: doc.id }, doc.data()));
    });
    return data[0];
  } catch (error) {
    cogoToast.error(error.message);
    return {
      error: error.message,
    };
  }
}

export async function updateParticipant(participant) {
  const participantRef = doc(db, "participants", participant.id);
  try {
    await updateDoc(participantRef, participant);
    cogoToast.success("Your profile has been updated successfully");
    Router.push("/admin/respondent/dashboard#editprofile");
  } catch (error) {
    cogoToast.error(error.message);
    return {
      error: error.message,
    };
  }
}

export async function saveParticipant(participant) {
  cogoToast.loading("Sending...").then(async () => {
    let result = await new Promise((resolve, reject) => {
      addDoc(collection(db, "participants"), participant)
        .then((docRef) => {
          resolve(docRef);

          cogoToast.success("Saved!");
          Router.push("/admin/respondent/thankyou");
        })
        .catch((error) => {
          console.log(error);
          reject([]);
          cogoToast.error("Error ");
        });
    });
    console.log(result);
    return result;
  });
}
export async function getProjects() {
  try {
    const res = await fetch("http://localhost:8080/scrape-offers");
    const projects = await res.json();
    return projects;
  } catch (error) {
    console.log(error);
  }
}
