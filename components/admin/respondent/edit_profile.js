export default function EditProfile({ authService }) {
  const user = authService.getUser();
  return (
    <div>
      <div className="bg-white p-8">
        <div className="flex flex-col">
          <img
            src="/img/icons/editprofile/profile_icon.svg"
            className="mx-auto"
          />
          <p className="font-semibold text-2xl mt-2 mx-auto">
            {user.displayName}
          </p>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-8">
          <div className="bg-background-100 p-4 flex flex-col rounded-md hover:text-secondary-100 cursor-pointer">
            <img
              src="/img/icons/editprofile/contact_icon.svg"
              className="mx-auto w-8"
            />
            <div className="text-center">
              <p className="text-lg font-semibold mt-2">Contact Details</p>
              <p className="text-base font-medium opacity-60 mt-2">
                Basic information about you and how to best reach you.
              </p>
            </div>
          </div>
          <div className="bg-background-100 p-4 flex flex-col rounded-md hover:text-secondary-100 cursor-pointer">
            <img
              src="/img/icons/editprofile/demo_icon.svg"
              className="mx-auto w-8"
            />
            <div className="text-center">
              <p className="text-lg font-semibold mt-2">Demographics</p>
              <p className="text-base font-medium opacity-60 mt-2">
                Review your gender, ethnicity, education, and income
                information.
              </p>
            </div>
          </div>
          <div className="bg-background-100 p-4 flex flex-col rounded-md hover:text-secondary-100 cursor-pointer">
            <img
              src="/img/icons/editprofile/social_icon.svg"
              className="mx-auto w-8"
            />
            <div className="text-center">
              <p className="text-lg font-semibold mt-2">Social Media</p>
              <p className="text-base font-medium opacity-60 mt-2">
                Help researchers verify your identity & increase your selection
                chances.
              </p>
            </div>
          </div>
          <div className="bg-background-100 p-4 flex flex-col rounded-md hover:text-secondary-100 cursor-pointer">
            <img
              src="/img/icons/editprofile/employment_icon.svg"
              className="mx-auto w-8"
            />
            <div className="text-center">
              <p className="text-lg font-semibold mt-2">Employement</p>
              <p className="text-base font-medium opacity-60 mt-2">
                Details around your professional work experience.
              </p>
            </div>
          </div>
          <div className="bg-background-100 p-4 flex flex-col rounded-md hover:text-secondary-100 cursor-pointer">
            <img
              src="/img/icons/editprofile/skills_icon.svg"
              className="mx-auto w-8"
            />
            <div className="text-center">
              <p className="text-lg font-semibold mt-2">Skills</p>
              <p className="text-base font-medium opacity-60 mt-2">
                Show off your expertise in specific skills, tools, or software.
              </p>
            </div>
          </div>
          <div className="bg-background-100 p-4 flex flex-col rounded-md hover:text-secondary-100 cursor-pointer">
            <img
              src="/img/icons/editprofile/video_icon.svg"
              className="mx-auto w-8"
            />
            <div className="text-center">
              <p className="text-lg font-semibold mt-2">Video Introduction</p>
              <p className="text-base font-medium opacity-60 mt-2">
                Stand out by adding a video introduction to your profile.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
