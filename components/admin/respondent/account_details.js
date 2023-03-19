import cogoToast from "cogo-toast";
import { collection, doc, getDocs, setDoc, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../../firebaseConfig";
export default function AccountDetails({ authService }) {
  const user = authService.getUser();
  const [isEditing, setIsEditing] = useState(false);
  const [disable, setDisable] = useState(false);
  const [profile, setProfile] = useState({
    email: user.email,
    phoneNumber: user.phoneNumber ? user.phoneNumber : "",
    firstName: user.displayName ? user.displayName.split(" ")[0] : "",
    lastName: user.displayName ? user.displayName.split(" ")[1] : "",
  });

  const messagesDoc = collection(db, "participants");
  const [messages, setMassages] = useState([]);
  const getMassages = async () => {
    let data = [];
    const querySnapshot = await getDocs(messagesDoc);
    // console.log(querySnapshot);
    querySnapshot.forEach((doc) => {
      data.push({ data: doc.data(), id: doc.id });
    });
    setMassages(data);
  };
  useEffect(() => {
    getMassages();
  }, []);

  const participant = messages.filter((d) => d?.data?.userId === user?.uid)[0]?.data;
  const participantWith = messages.filter((d) => d?.data?.userId === user?.uid)[0];

  console.log(participantWith);

  const saveProfile = async () => {
    setDisable(true);
    let message = "";
    let validate = true;
    if (profile.email === "") {
      message = "Please add an email!";
      validate = "false";
    }
    if (validate) {
      const newProfile = {
        email: profile.email,
        phoneNumber: profile.phoneNumber,
        displayName: `${profile.firstName} ${profile.lastName}`,
      };
       // console.log(newProfile);

      if (participantWith?.id) {
        await updateDoc(doc(db, "participants", participantWith?.id), {
          email: profile.email,
          phoneNumber: profile.phoneNumber,
          firstname: profile.firstName,
          lastName: profile.lastName,
          phone: profile.phoneNumber
        });
      }
      // await authService.updateProfile(newProfile);
      setDisable(false);
      setIsEditing(false);
    } else {
      cogoToast.warn(message);
      validate = true;
      setDisable(false);
    }
  };
  
  return (
    <div>
      <div className="bg-white rounded-md p-4">
        <div className="flex sm:flex-row flex-col">
          <div className="sm:w-1/2 w-full p-4">
            {isEditing ? (
              <div className="flex flex-row mt-4 items-center">
                <div className="w-1/2">
                  <p className="text-sm font-medium opacity-60">First Name</p>
                </div>
                <input type="text" name="email" defaultValue={participant?.firstname} onChange={(e) => setProfile({ ...profile, firstName: e.target.value })} className="w-full rounded-full border-gray-200 bg-background-100 placeholder-opacity-80  font-medium px-4 py-2 pr-12 text-sm shadow-sm" />
              </div>
            ) : (
              <div className="grid grid-cols-3">
                <p className="text-sm font-medium opacity-60">First Name</p>
                <p className="text-base font-medium opacity-80 ">{participant?.firstname === "" ? "First Name" : participant?.firstname}</p>
              </div>
            )}
            {isEditing ? (
              <div className="flex flex-row mt-4 items-center">
                <div className="w-1/2">
                  <p className="text-sm font-medium opacity-60">Phone</p>
                </div>
                <input type="text" name="email" defaultValue={participant?.phone} onChange={(e) => setProfile({ ...profile, phoneNumber: e.target.value })} className="w-full rounded-full border-gray-200 bg-background-100 placeholder-opacity-80  font-medium px-4 py-2 pr-12 text-sm shadow-sm" />
              </div>
            ) : (
              <div className="grid grid-cols-3 mt-4">
                <p className="text-sm font-medium opacity-60">Phone</p>
                <p className="text-base font-medium opacity-80 flex flex-row gap-2 ">
                  {participant?.phone === "" ? "Phone number" : participant?.phone}
                  {participant?.phone !== "" && <img src="/img/icons/account_details/check_icon.svg" />}
                </p>
              </div>
            )}
          </div>
          <div className="sm:w-1/2 w-full p-4">
            {isEditing ? (
              <div className="flex flex-row mt-4 items-center">
                <div className="w-1/2">
                  <p className="text-sm font-medium opacity-60">Last Name</p>
                </div>
                <input type="text" name="email" defaultValue={participant?.lastName} onChange={(e) => setProfile({ ...profile, lastName: e.target.value })} className="w-full rounded-full border-gray-200 bg-background-100 placeholder-opacity-80  font-medium px-4 py-2 pr-12 text-sm shadow-sm" />
              </div>
            ) : (
              <div className="grid grid-cols-3 ">
                <p className="text-sm font-medium opacity-60">Last Name</p>
                <p className="text-base font-medium opacity-80 ">{participant?.lastName === "" ? "Last Name" : participant?.lastName}</p>
              </div>
            )}
            {isEditing ? (
              <div className="flex flex-row mt-4 items-center">
                <div className="w-1/2">
                  <p className="text-sm font-medium opacity-60">Email</p>
                </div>
                <input type="text" name="email" defaultValue={participant?.email} onChange={(e) => setProfile({ ...profile, email: e.target.value })} className="w-full rounded-full border-gray-200 bg-background-100 placeholder-opacity-80  font-medium px-4 py-2 pr-12 text-sm shadow-sm" />
              </div>
            ) : (
              <div className="flex flex-row mt-4 items-center">
                <div className="w-1/2">
                  <p className="text-sm font-medium opacity-60">Email</p>
                </div>
                <input type="text" name="email" defaultValue={participant?.email} className="w-full rounded-full border-gray-200 bg-background-100 placeholder-opacity-80  font-medium px-4 py-2 pr-12 text-sm shadow-sm" />
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-row-reverse">
          {isEditing ? (
            <button
              onClick={saveProfile}
              disabled={disable}
              className="px-6 py-2  font-medium bg-gradient-to-tr from-primary-100 to-secondary-100  text-white rounded-full border-0  focus:outline-none hover:bg-gray-200  sm:ml-0 ml-64  text-base mt-8 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110"
            >
              Save
            </button>
          ) : (
            <button
              onClick={() => setIsEditing(true)}
              disabled={disable}
              className="px-6 py-2  font-medium bg-gradient-to-tr from-primary-100 to-secondary-100  text-white rounded-full border-0  focus:outline-none hover:bg-gray-200  sm:ml-0 ml-64  text-base mt-8 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110"
            >
              Edit
            </button>
          )}
        </div>
      </div>
      <div className="mt-4 rounded-md bg-[#FFD9D9] flex flex-row  p-4">
        <div className=" flex sm:flex-row flex-col items-center">
          <div className="flex sm:flex-row flex-col items-center">
            <img src="/img/icons/account_details/danger_icon.svg" />
            <p className="ml-4 text-base font-medium">
              Please be cautious this operation is not reversible. You will have 30 days to reactivate it
              <br /> after which it will be deleted.
            </p>
          </div>

          <div className="sm:ml-16 ml-0">
            <button onClick={() => authService.disableUser()} className=" w-64  items-center px-6 py-2  font-medium bg-[#FF5252]  text-white rounded-full border-0  focus:outline-none hover:bg-gray-200  sm:ml-0   text-base  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110">
              Deactivate Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
