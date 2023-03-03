export default function SocialA({ authService }) {
  const user = authService.getUser();
 // console.log(user);
  const socialNetwork = user.providerData.reduce(
    (sn, p) => ({ ...sn, [p.providerId.split(".")[0]]: p }),
    {}
  );
  console.log(socialNetwork);
  return (
    <div>
      <div>
       
        <p className="text-base font-medium">
          Connecting your social media accounts adds credibility to your profile
          and increases your chances of being selected for studies.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-4 mt-4">
        <div className="rounded-md px-8 py-4 bg-white">
       
          <div className="flex flex-row items-center">
            <div>
              <img src="/img/icons/socialA/linkedin_icon.svg" className="w-8" />
            </div>
            <div className="ml-4">
              <p className="text-base font-semibold">Linked in</p>
              
              {socialNetwork.linkedin ? (
                <p className="text-base font-medium opacity-60">
                  Your LinkedIn account is connected to swayed
                  
                </p>
              ) : (
                <p className="text-base font-medium opacity-60">
                  Your LinkedIn account not connected
                </p>
              )}
            </div>
          </div>
          <div className="flex flex-row-reverse mt-4">
            {socialNetwork.linkedin ? (
              <button className="text-sm font-medium bg-[#18D284] text-white rounded-full px-4 py-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 ">
                Connected
              </button>
            ) : (
              <button
                onClick={() => authService.linkWithLinkedin()}
                className="text-sm font-medium bg-secondary-100 text-white rounded-full px-4 py-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 "
              >
                Connect Account
              </button>
            )}
          </div>
        </div>
        <div className="rounded-md px-8 py-4 bg-white">
          <div className="flex flex-row items-center">
            <div>
              <img src="/img/icons/socialA/facebook_icon.svg" className="w-8" />
            </div>
            <div className="ml-4">
              <p className="text-base font-semibold">Facebook</p>
              {socialNetwork.facebook ? (
                <p className="text-base font-medium opacity-60">
                  Your Facebook account is connected to swayed
                </p>
              ) : (
                <p className="text-base font-medium opacity-60">
                  Your Facebook account is not connected
                </p>
              )}
            </div>
          </div>
          <div className="flex flex-row-reverse mt-4">
            {socialNetwork.facebook ? (
              <button className="text-sm font-medium bg-[#18D284] text-white rounded-full px-4 py-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 ">
                Connected
              </button>
            ) : (
              <button
                onClick={() => authService.linkWithFacebook()}
                className="text-sm font-medium bg-secondary-100 text-white rounded-full px-4 py-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 "
              >
                Connect Account
              </button>
            )}
          </div>
        </div>
        <div className="rounded-md px-8 py-4 bg-white">
          <div className="flex flex-row items-center">
            <div>
              <img src="/img/icons/socialA/google_icon.svg" className="w-8" />
            </div>
            <div className="ml-4">
              <p className="text-base font-semibold">Google</p>
              {socialNetwork.google ? (
                <p className="text-base font-medium opacity-60">
                  Your Google account connected to swayed
                </p>
              ) : (
                <p className="text-base font-medium opacity-60">
                  Your Google account is not connected
                </p>
              )}
            </div>
          </div>
          <div className="flex flex-row-reverse mt-4">
            {socialNetwork.google ? (
              <button className="text-sm font-medium bg-[#18D284] text-white rounded-full px-4 py-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 ">
                Connected
              </button>
            ) : (
              <button
                onClick={() => authService.linkWithGoogle()}
                className="text-sm font-medium bg-secondary-100 text-white rounded-full px-4 py-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 "
              >
                Connect Account
               
              </button>
            )}
            <button className="ml-64"></button>
          </div>
        </div>
        {/* <div className="rounded-md px-8 py-4 bg-white">
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
        </div> */}
      </div>
    </div>
  );
}
