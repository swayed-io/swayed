export default function Referrals(){
    return (<div>
        <div className="bg-white flex flex-col px-8 py-4 items-center justify-between rounded-md">
           <div className="flex flex-row">

            <div>
                <p className="font-semibold sm:text-2xl text-lg">Start referring friends and colleagues to<br/> Shape the Future!</p>
            </div>
            <div>
                <img src="/img/ilustration_referrals.png" />
            </div>
           </div>
            <button className="sm:hidden ml-64"></button>

        </div>
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-4 mt-8 ">
            <div className="bg-white p-4 rounded-md">
                <img src="/img/icons/referrals/share_icon.svg"/>
                <p className="font-semibold text-lg mt-2">Share your referral link</p>
                <p className="font-medium text-base opacity-60 mt-2">Earn $20 when you refer a new user who earns $75 in total incentive.</p>
                <div className="flex  sm:flex-row-reverse flex-col">
                    <div>
                    <button className="px-4 py-2 w-full font-medium bg-gradient-to-tr from-primary-100 to-secondary-100  text-white rounded-full border-0  focus:outline-none hover:bg-gray-200  sm:ml-0   text-sm mt-8 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110">
                    Share link
                                </button>
                    </div>
                    <div>
                    <button className="px-4 py-2 w-full font-medium  text-secondary-100 rounded-full border-0  focus:outline-none   sm:ml-0   text-sm mt-8 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110">

                    Referral policy
                                </button>
                                
                    </div>

                </div>

            </div>
            <div className="bg-white p-4 rounded-md">
                <img src="/img/icons/referrals/find_icon.svg"/>
                <p className="font-semibold text-lg mt-2">Find a specific project to refer</p>
                <p className="font-medium text-base opacity-60 mt-2">Earn $50 when you refer a new user who completes a referred project and earns $100 in total incentive.</p>
                <div className="flex  sm:flex-row-reverse flex-col">
                    <div>
                    <button className="px-4 py-2 w-full font-medium bg-gradient-to-tr from-primary-100 to-secondary-100  text-white rounded-full border-0  focus:outline-none hover:bg-gray-200  sm:ml-0   text-sm mt-8 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110">
                    Browse Projects
                                </button>
                    </div>
                    <div>
                    <button className="px-4 py-2 w-full font-medium  text-secondary-100 rounded-full border-0  focus:outline-none   sm:ml-0   text-sm mt-8 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110">

                    Referral policy
                                </button>
                    </div>

                </div>

            </div>

        </div>
    </div>)
}