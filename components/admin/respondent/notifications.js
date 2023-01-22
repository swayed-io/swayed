export default function Notifications() {
    return (
        <div>
            <div className="bg-white rounded-md p-4">
                <div className="flex flex-row">
                    <div className="w-1/2 p-4">
                        <div>
                            <label className="inline-flex items-center">
                                <input type="checkbox" className="form-checkbox text-secondary-100 rounded-sm" checked/>
                                <span className="ml-2 text-base font-medium opacity-80">Daily Digest</span>
                            </label>
                        </div>


                    </div>
                    <div className="w-1/2 p-4">
                        <div>
                            <label className="inline-flex items-center">
                                <input type="checkbox" className="form-checkbox text-secondary-100 rounded-sm" checked/>
                                <span className="ml-2 text-base font-medium opacity-80">Targeted Research Invitation</span>
                            </label>
                        </div>
                    </div>


                </div>
                <div className="flex flex-row-reverse">
                    <button className="px-6 py-2  font-medium bg-gradient-to-tr from-primary-100 to-secondary-100  text-white rounded-full border-0  focus:outline-none hover:bg-gray-200  sm:ml-0 ml-64  text-base mt-8 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110">
                        Save
                    </button>

                </div>

            </div>
            <div className="mt-4 rounded-md bg-[#DFEEFD] flex flex-row  p-4">
                <div className=" flex flex-row items-center w-full  ">
                    <div className="flex flex-row items-center w-full ">

                        <img src="/img/icons/notifications/ex_icon.svg"/>
                        <p className="ml-4 text-base font-medium">Your email is johnsmith@gmail.com</p>
                    </div>


                    <div className="flex w-32 ">

                        <button className=" w-64 items-center px-6 py-2  font-medium bg-secondary-100  text-white rounded-full border-0  focus:outline-none   sm:ml-0   text-base  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110">
                            Edit
                        </button>
                    </div>

                </div>


            </div>
        </div>
    )
}
