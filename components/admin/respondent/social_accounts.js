export default function SocialA({ authService }) {
  const user = authService.getUser();
  console.log(user);
  return (
    <div>
      <div>
        <p className="text-base font-medium">
          Connecting your social media accounts adds credibility to your profile
          and increases your chances of being selected for studies.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div className="rounded-md px-8 py-4 bg-white">
          <div className="flex flex-row items-center">
            <div>
              <img src="/img/icons/socialA/linkedin_icon.svg" className="w-8" />
            </div>
            <div className="ml-4">
              <p className="text-base font-semibold">Linked in</p>
              <p className="text-base font-medium opacity-60">
                Your LinkedIn account is not connected
              </p>
            </div>
          </div>
          <div className="flex flex-row-reverse mt-4">
            <button className="text-sm font-medium bg-[#18D284] text-white rounded-full px-4 py-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 ">
              Connected
            </button>
          </div>
        </div>
        <div className="rounded-md px-8 py-4 bg-white">
          <div className="flex flex-row items-center">
            <div>
              <img src="/img/icons/socialA/facebook_icon.svg" className="w-8" />
            </div>
            <div className="ml-4">
              <p className="text-base font-semibold">Facebook</p>
              <p className="text-base font-medium opacity-60">
                Your Facebook account is not connected
              </p>
            </div>
          </div>
          <div className="flex flex-row-reverse mt-4">
            <button className="text-sm font-medium bg-secondary-100 text-white rounded-full px-4 py-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 ">
              Connect Account
            </button>
          </div>
        </div>
        <div className="rounded-md px-8 py-4 bg-white">
          <div className="flex flex-row items-center">
            <div>
              <img src="/img/icons/socialA/github_icon.svg" className="w-8" />
            </div>
            <div className="ml-4">
              <p className="text-base font-semibold">GitHub</p>
              <p className="text-base font-medium opacity-60">
                Your GitHub account is not connected
              </p>
            </div>
          </div>
          <div className="flex flex-row-reverse mt-4">
            <button className="text-sm font-medium bg-secondary-100 text-white rounded-full px-4 py-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 ">
              Connect Account
            </button>
          </div>
        </div>
        <div className="rounded-md px-8 py-4 bg-white">
          <div className="flex flex-row items-center">
            <div>
              <img src="/img/icons/socialA/slack_icon.svg" className="w-8" />
            </div>
            <div className="ml-4">
              <p className="text-base font-semibold">Slack</p>
              <p className="text-base font-medium opacity-60">
                Your Slack account is not connected
              </p>
            </div>
          </div>
          <div className="flex flex-row-reverse mt-4">
            <button className="text-sm font-medium bg-secondary-100 text-white rounded-full px-4 py-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 ">
              Connect Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
