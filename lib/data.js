
import { db } from "../firebaseConfig";
import { addDoc, collection, doc, setDoc } from "firebase/firestore"; 
import cogoToast from "cogo-toast";
import  Router  from "next/router";


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

  export async function getMenusUser(uuid){
   

  
  
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

export async function saveParticipant(participant){
  cogoToast.loading("Sending...").then(async () => {
  let result = await new Promise((resolve, reject) => { 
    addDoc(collection(db,'participants'),participant).then((docRef)=>{
      resolve(docRef);
      
      cogoToast.success("Saved!");
      Router.push("/admin/respondent/thankyou");

    }).catch((error) => {
      console.log(error)
      reject([]);
      cogoToast.error("Error ")
    });
  });
  console.log(result)
  return result
});

}  