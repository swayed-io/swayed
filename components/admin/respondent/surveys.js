import Link from "next/link"


export default function Surveys() {

    return (
        <div className="">
            <div>
                <div id="listings" className="sm:p-4 p-4  bg-background-100 overflow-y-auto overflow-x-hidden">
                    <div className="mb-4 sm:p-6 px-2 py-4 flex flex-row  bg-[#DFEEFD] rounded-[20px] ">
                        <div className="w-1/2 flex flex-col">


                            <span className="sm:text-2xl text-base font-semibold text-secondary-100">Welcome to the Earn Page!</span>
                            <span className="sm:text-base text-sm font-medium mt-2">Let’s earn your first dollar now</span>
                           
                        </div>
                        <div className="w-1/2 flex">

                            <img src="/img/woman_earn.png" className="relative sm:-bottom-5 -bottom-0 sm:-right-60"/>
                        </div>

                    </div>
                    
                    <div className=" bg-white sm:px-16 px-8 py-8 rounded-[20px] shadow-[0_10px_20px_rgba(0,0,0,0.25)]">
                        <div className="flex flex-row items-center gap-2 mb-4">
                            <img src="/img/icons/earn/star_icon.svg"/>
                            <p className="text-base font-semibold">Featured Offers</p>
                        </div>
                        <p className="text-sm text-black opacity-60 font-medium mb-4">The most frequently completed tasks by people from your country recently. </p>
                        <div className="flex sm:flex-row flex-col justify-between rounded-t-2xl p-4 items-center   w-full sm:h-24  shadow-lg mb-6">

                            <div className="flex sm:flex-row flex-col items-center">
                                <div className="flex flex-row   ">
                                    <div className="bg-gradient-to-tr from-primary-100 to-secondary-100 w-20 h-20 rounded-xl ">


                                        <img src="/img/surveys_img.png" className="flex py-2 items-center "/>
                                    </div>
                                    <div className="flex flex-col  ml-4 ">
                                        <p className="items-center text-xl text-black font-bold">Hot survey</p>
                                        <p className="text-sm text-black font-bold">5 min</p>

                                    </div>

                                </div>
                            </div>
                            <div className="flex flex-row sm:mt-0 mt-2 items-center">
                               
                                <button className="text-xl  ml-2 text-black rounded-lg bg-[#FBBC00] font-bold px-4 py-2">Start</button>
                                <button className="text-xl  ml-2 text-black rounded-lg bg-[#7AED93] font-bold px-4 py-2">25$</button>
                               

                            </div>
                            <button className="sm:hidden ml-64"></button>
                        </div>
                        <div className="flex sm:flex-row flex-col justify-between rounded-t-2xl p-4 items-center   w-full sm:h-24  shadow-lg mb-6">

                            <div className="flex sm:flex-row flex-col items-center">
                                <div className="flex flex-row   ">
                                    <div className="bg-gradient-to-tr from-primary-100 to-secondary-100 w-20 h-20 rounded-xl ">


                                        <img src="/img/surveys_img.png" className="flex py-2 items-center "/>
                                    </div>
                                    <div className="flex flex-col  ml-4 ">
                                        <p className="items-center text-xl text-black font-bold">Hot survey</p>
                                        <p className="text-sm text-black font-bold">5 min</p>

                                    </div>

                                </div>
                            </div>
                            <div className="flex flex-row sm:mt-0 mt-2 items-center">
                               
                                <button className="text-xl  ml-2 text-black rounded-lg bg-[#FBBC00] font-bold px-4 py-2">Start</button>
                                <button className="text-xl  ml-2 text-black rounded-lg bg-[#7AED93] font-bold px-4 py-2">25$</button>

                            </div>

                        </div>
                        <div className="flex sm:flex-row flex-col justify-between rounded-t-2xl p-4 items-center   w-full sm:h-24  shadow-lg mb-6">

                            <div className="flex sm:flex-row flex-col items-center">
                                <div className="flex flex-row   ">
                                    <div className="bg-gradient-to-tr from-primary-100 to-secondary-100 w-20 h-20 rounded-xl ">


                                        <img src="/img/surveys_img.png" className="flex py-2 items-center "/>
                                    </div>
                                    <div className="flex flex-col  ml-4 ">
                                        <p className="items-center text-xl text-black font-bold">Hot survey</p>
                                        <p className="text-sm text-black font-bold">5 min</p>

                                    </div>

                                </div>
                            </div>
                            <div className="flex flex-row sm:mt-0 mt-2 items-center">
                               
                                <button className="text-xl  ml-2 text-black rounded-lg bg-[#FBBC00] font-bold px-4 py-2">Start</button>
                                <button className="text-xl  ml-2 text-black rounded-lg bg-[#7AED93] font-bold px-4 py-2">25$</button>

                            </div>

                        </div>
                        <div className="flex sm:flex-row flex-col justify-between rounded-t-2xl p-4 items-center   w-full sm:h-24  shadow-lg mb-6">

<div className="flex sm:flex-row flex-col items-center">
    <div className="flex flex-row   ">
        <div className="bg-gradient-to-tr from-primary-100 to-secondary-100 w-20 h-20 rounded-xl ">


            <img src="/img/surveys_img.png" className="flex py-2 items-center "/>
        </div>
        <div className="flex flex-col  ml-4 ">
            <p className="items-center text-xl text-black font-bold">Hot survey</p>
            <p className="text-sm text-black font-bold">5 min</p>

        </div>

    </div>
</div>
<div className="flex flex-row sm:mt-0 mt-2 items-center">
   
    <button className="text-xl  ml-2 text-black rounded-lg bg-[#FBBC00] font-bold px-4 py-2 ">Start</button>
    <button className="text-xl  ml-2 text-black rounded-lg bg-[#7AED93] font-bold px-4 py-2">25$</button>

</div>

</div>


                     
                    </div>
                                      


                </div>
            </div>
        </div>
    )
}
