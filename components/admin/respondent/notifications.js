import Link from "next/link";
import { useEffect, useState } from "react";
import { getParticipantsByUserID, updateParticipantNotificationsSettings } from "../../../lib/data";
export default function Notifications({ authService }) {
  const user = authService.getUser();
  const [participant, setParticipant] = useState();
  const [notifications, setNotifications] = useState({
    isMonthlyDigestChecked: false,
    isTargetedResearchInvitationChecked: false,
  });

  useEffect(() => {
    (async () => {
      const participant = await getParticipantsByUserID(user.uid);
      setParticipant(participant);
      setNotifications({ isMonthlyDigestChecked: (participant.isMonthlyDigestChecked || false), isTargetedResearchInvitationChecked: (participant.isTargetedResearchInvitationChecked || false) })
      console.log(participant)
    })();
  }, [user.uid]);

  return (
    <div>
      <div className="bg-white rounded-md p-4">
        <div className="flex flex-row">
          <div className="w-1/2 p-4">
            <div>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox text-secondary-100 rounded-sm"
                  checked={notifications.isMonthlyDigestChecked}
                  onChange={() => {
                    setNotifications({
                      ...notifications,
                      isMonthlyDigestChecked: !notifications.isMonthlyDigestChecked,
                    });
                  }}
                />
                <span className="ml-2 text-base font-medium opacity-80">
                  Monthly Digest
                </span>
              </label>
            </div>
          </div>
          <div className="w-1/2 p-4">
            <div>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox text-secondary-100 rounded-sm"
                  checked={notifications.isTargetedResearchInvitationChecked}
                  onChange={() => {
                    setNotifications({
                      ...notifications,
                      isTargetedResearchInvitationChecked: !notifications.isTargetedResearchInvitationChecked,
                    });
                  }}
                />
                <span className="ml-2 text-base font-medium opacity-80">
                  Targeted Research Invitation
                </span>
              </label>
            </div>
          </div>
        </div>
        <div className="flex flex-row-reverse">
          {(participant?.id) && (<button
            onClick={() => updateParticipantNotificationsSettings(participant, notifications)}
            className="px-6 py-2 font-medium bg-gradient-to-tr from-primary-100 to-secondary-100  text-white rounded-full border-0  focus:outline-none hover:bg-gray-200  sm:ml-0 ml-64  text-base mt-8 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110">
            Save
          </button>)}
        </div>
      </div>
      <div className="mt-4 rounded-md bg-[#DFEEFD] flex flex-row  p-4">
        <div className=" flex flex-row items-center w-full  ">
          <div className="flex flex-row items-center w-full ">
            <img src="/img/icons/notifications/ex_icon.svg" />
            <p className="ml-4 text-base font-medium">
              Your email is {user.email}
            </p>
          </div>

          <div className="flex w-32 ">
            <Link href="/admin/respondent/dashboard#accountdetails">
              <button className=" w-64 items-center px-6 py-2  font-medium bg-secondary-100  text-white rounded-full border-0  focus:outline-none   sm:ml-0   text-base  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110">
                Edit
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div >
  );
}
