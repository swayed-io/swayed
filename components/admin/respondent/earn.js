import Link from "next/link"
import {Fragment, useState} from "react"
import {Dialog, Transition} from '@headlessui/react'
export default function Earn() {
    let [isOpen, setIsOpen] = useState(false)
    let [isOpen2, setIsOpen2] = useState(false)

    function openModal() {
        setIsOpen(true)
    }

    function closeModal() {
        setIsOpen(false)
    }

    function openModal2() {
        setIsOpen2(true)
    }
    function closeModal2() {
        setIsOpen2(false)
    }


    return (
        <div>
            <div id="listings" className="sm:p-4 p-2  bg-background-100 overflow-y-auto overflow-x-hidden">
                <div className="mb-8 sm:p-6 px-2 py-4 flex flex-row  bg-[#DFEEFD] rounded-lg ">
                    <div className="w-1/2  flex flex-col">


                        <span className="sm:text-2xl text-base font-semibold text-secondary-100">Welcome to the Earn Page!</span>
                        <span className="sm:text-base text-sm font-medium mt-2">Let’s earn your first dollar now</span>
                        <div className="flex flex-row gap-x-4 mt-2">
                            {/* <button className="px-6 py-2 font-medium bg-gradient-to-tr from-primary-100 to-secondary-100 text-white rounded-full border-0  focus:outline-none hover:bg-gray-200  sm:ml-0 ml-64  text-sm mt-8 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110"><Link href="/signup" >Show me how</Link></button>
                <button className="px-4 py-2 font-medium  text-secondary-100 text-base    focus:outline-none   sm:ml-0 ml-64   mt-8 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110"><Link href="/signup" >Skip for now</Link></button>*/} </div>
                    </div>
                    <div className="w-1/2 flex">

                        <img src="/img/woman_earn.png" className="relative sm:-bottom-5 -bottom-0 sm:-right-60"/>
                    </div>

                </div>

                <div className=" bg-white sm:px-16 px-8 py-8 rounded-lg shadow-xl">
                    <div className="flex flex-row items-center gap-2 mb-4">
                        <img src="/img/icons/earn/star_icon.svg"/>
                        <p className="text-base font-semibold">Popular Offers</p>
                    </div>
                    <p className="text-sm text-black opacity-60 font-medium mb-4">The most frequently completed tasks by people from your country recently.
                    </p>
                    <div className="flex sm:flex-row flex-col justify-between rounded-t-2xl p-4 items-center   w-full sm:h-24 shadow-lg sm:mb-6 mb-4">

                        <div className="flex sm:flex-row flex-col items-center">
                            <div className="flex sm:flex-row flex-col  py-1 items-center">
                                <div className="  rounded-xl ">


                                    <img src="/img/earn_fiverr.png" className="flex py-2 items-center  "/>
                                </div>
                                <div className="flex flex-col     ml-4 ">
                                    <p className="items-center text-xl text-black font-bold  ">Fiverr</p>
                                    <p className="text-sm text-black font-bold">Launch the app, register and place a first order for at least $5.</p>

                                </div>

                            </div>
                            <button className="ml-64"></button>
                        </div>
                        <div className="flex sm:flex-row flex-col items-center">


                            <button className="text-xl  sm:ml-2 ml-0 text-black rounded-lg bg-[#7AED93] font-bold px-4 py-2">25$</button>

                        </div>

                    </div>
                    <div className="flex sm:flex-row flex-col justify-between rounded-t-2xl p-4 items-center   w-full sm:h-24 shadow-lg sm:mb-6 mb-4">

                        <div className="flex sm:flex-row flex-col items-center">
                            <div className="flex sm:flex-row flex-col  py-1 items-center">
                                <div className="  rounded-xl ">


                                    <img src="/img/heart_logo.png" className="flex py-2 items-center "/>
                                </div>
                                <div className="flex flex-col     ml-4 ">
                                    <p className="items-center text-xl text-black font-bold  ">iHeartRadio</p>
                                    <p className="text-sm text-black font-bold">Listen to thousands of live radio stations, tune in to podcasts and stream<br/>
                                        unlimited music playlist.</p>

                                </div>

                            </div>
                        </div>
                        <div className="flex sm:flex-row flex-col items-center">


                            <button className="text-xl  sm:ml-2 ml-0 text-black rounded-lg bg-[#7AED93] font-bold px-4 py-2">25$</button>

                        </div>

                    </div>
                      <div className="flex sm:flex-row flex-col justify-between rounded-t-2xl p-4 items-center   w-full sm:h-24 shadow-lg sm:mb-6 mb-4">

                        <div className="flex sm:flex-row flex-col items-center">
                            <div className="flex sm:flex-row flex-col  py-1 items-center">
                                <div className="  rounded-xl ">


                                    <img src="/img/earn_fiverr.png" className="flex py-2 items-center  "/>
                                </div>
                                <div className="flex flex-col     ml-4 ">
                                    <p className="items-center text-xl text-black font-bold  ">Fiverr</p>
                                    <p className="text-sm text-black font-bold">Launch the app, register and place a first order for at least $5.</p>

                                </div>

                            </div>
                        </div>
                        <div className="flex sm:flex-row flex-col items-center">


                            <button className="text-xl  sm:ml-2 ml-0 text-black rounded-lg bg-[#7AED93] font-bold px-4 py-2">25$</button>

                        </div>

                    </div>
                    <div className="flex sm:flex-row flex-col justify-between rounded-t-2xl p-4 items-center   w-full sm:h-24 shadow-lg sm:mb-6 mb-4">

                        <div className="flex sm:flex-row flex-col items-center">
                            <div className="flex sm:flex-row flex-col  py-1 items-center">
                                <div className="  rounded-xl ">


                                    <img src="/img/heart_logo.png" className="flex py-2 items-center "/>
                                </div>
                                <div className="flex flex-col     ml-4 ">
                                    <p className="items-center text-xl text-black font-bold  ">iHeartRadio</p>
                                    <p className="text-sm text-black font-bold">Listen to thousands of live radio stations, tune in to podcasts and stream<br/>
                                        unlimited music playlist.</p>

                                </div>

                            </div>
                        </div>
                        <div className="flex sm:flex-row flex-col items-center">


                            <button className="text-xl  sm:ml-2 ml-0 text-black rounded-lg bg-[#7AED93] font-bold px-4 py-2">25$</button>

                        </div>

                    </div>
                


                </div>
                <div className="mt-8 bg-white sm:px-16 px-4 py-8 rounded-lg shadow-xl">
                    <div className="flex flex-row items-center gap-2 mb-4">
                        <img src="/img/icons/earn/star_icon.svg"/>
                        <p className="text-base font-semibold">Featured Offers</p>
                    </div>
                    <p className="text-sm text-black opacity-60 font-medium mb-4">Quick & Easy offers completed by everyone recently.
                    </p>
                    <div onClick={openModal} className="flex sm:flex-row flex-col justify-between rounded-t-2xl p-4 items-center   w-full sm:h-24 shadow-lg sm:mb-6 mb-4">
                    <Transition appear
                            show={isOpen}
                            as={Fragment}>
                            <Dialog as="div" className="relative z-10" open={isOpen}
                                onClose={closeModal}>
                                <Transition.Child as={Fragment}
                                    enter="ease-out duration-300"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="ease-in duration-200"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0">
                                    <div className="fixed inset-0 bg-black bg-opacity-25"/>
                                </Transition.Child>

                                <div className="fixed inset-0 overflow-y-auto">
                                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                                        <Transition.Child as={Fragment}
                                            enter="ease-out duration-300"
                                            enterFrom="opacity-0 scale-95"
                                            enterTo="opacity-100 scale-100"
                                            leave="ease-in duration-200"
                                            leaveFrom="opacity-100 scale-100"
                                            leaveTo="opacity-0 scale-95">
                                            <Dialog.Panel className="w-full max-w-4xl p-0.5 transform overflow-hidden rounded-2xl bg-white  text-left align-middle shadow-xl transition-all">
                                                <div className="flex sm:flex-row flex-col sm:justify-between rounded-t-2xl p-6 items-center  bg-gradient-to-tr from-primary-100 to-secondary-100 w-full sm:h-24">

                                                    <div className="flex flex-row items-center">
                                                        <img src="/img/icons/earn/fiver.png" className="w-24"/>
                                                        <p className="text-white font-semibold text-xl ml-4">Fiverr iOS (Shape the Future)</p>
                                                    </div>
                                                    <div className="flex flex-row items-center  sm:mt-0 mt-2 ">
                                                        
                                                        <button className="text-xl   sm:ml-2 mx-auto text-black rounded-lg bg-[#7AED93] font-bold px-4 py-2">25$</button>
                                                        <button className="ml-4 sm:mt-0 mt-2 text-base font-black text-secondary-100 px-8 py-2 bg-white rounded-full">Start Offer</button>

                                                    </div>

                                                </div>
                                                <div className="py-6 px-12">


                                                    <div className="mt-2">
                                                        <p className="text-base font-semibold text-secondary-100">
                                                            Description
                                                        </p>
                                                        <p className="mt-2 text-sm text-black font-medium">
                                                            Launch the app, register and place a first order for at least $5.
                                                        </p>
                                                    </div>
                                                    <div className="mt-4">
                                                        <p className="text-base font-semibold text-secondary-100">
                                                            Rewards
                                                        </p>
                                                        <p className="mt-2 flex flex-row text-sm text-black font-medium">
                                                            <img src="/img/icons/earn/one_icon.svg"/>
                                                            <span className="ml-2">Place a first order for at least $5 | 14,000 coins</span>
                                                        </p>
                                                    </div>
                                                    <div className="mt-4">
                                                        <p className="text-base font-semibold text-secondary-100">
                                                            Requirements
                                                        </p>
                                                        <p className="mt-2 flex flex-row text-sm text-black font-medium">
                                                            <img src="/img/icons/earn/one_icon.svg"/>
                                                            <span className="ml-2">Install and open the app, New users only.</span>
                                                        </p>
                                                        <p className="mt-2 flex flex-row text-sm text-black font-medium">
                                                            <img src="/img/icons/earn/two_icon.svg"/>
                                                            <span className="ml-2">Make sure to “Allow Tracking” when the pop-up shows up (you might not recieve a reward otherwise)</span>
                                                        </p>
                                                        <p className="mt-2 flex flex-row text-sm text-black font-medium">
                                                            <img src="/img/icons/earn/three_icon.svg"/>
                                                            <span className="ml-2">Register</span>
                                                        </p>
                                                        <p className="mt-2 flex flex-row text-sm text-black font-medium">
                                                            <img src="/img/icons/earn/four_icon.svg"/>
                                                            <span className="ml-2">Place a first order for at least $5 (Note: Fiverr may take a $2 fee for a $5 order)</span>
                                                        </p>
                                                    </div>


                                                </div>
                                            </Dialog.Panel>
                                        </Transition.Child>
                                    </div>
                                </div>
                            </Dialog>
                        </Transition>
                        <div className="flex sm:flex-row flex-col items-center">
                            <div className="flex sm:flex-row flex-col  py-1 items-center">
                                <div className="  rounded-xl ">


                                    <img src="/img/earn_fiverr.png" className="flex py-2 items-center "/>
                                </div>
                                <div className="flex flex-col     ml-4 ">
                                    <p className="items-center text-xl text-black font-bold  ">Fiverr</p>
                                    <p className="text-sm text-black font-bold">Launch the app, register and place a first order for at least $5.</p>

                                </div>

                            </div>
                        </div>
                        <div className="flex sm:flex-row flex-col items-center">


                            <button className="text-xl  ml-2 text-black rounded-lg bg-[#7AED93] font-bold px-4 py-2">25$</button>

                        </div>
                      
                    </div>
                    <div onClick={openModal2} className="flex sm:flex-row flex-col justify-between rounded-t-2xl p-4 items-center   w-full sm:h-24 shadow-lg sm:mb-6 mb-4">

                        <div className="flex sm:flex-row flex-col items-center">
                            <div className="flex sm:flex-row flex-col  py-1 items-center">
                                <div className="  rounded-xl ">


                                    <img src="/img/heart_logo.png" className="flex py-2 items-center "/>
                                </div>
                                <div className="flex flex-col     ml-4 ">
                                    <p className="items-center text-xl text-black font-bold  ">iHeartRadio</p>
                                    <p className="text-sm text-black font-bold">Listen to thousands of live radio stations, tune in to podcasts and stream<br/>
                                        unlimited music playlist.</p>

                                </div>

                            </div>
                        </div>
                        <div className="flex sm:flex-row flex-col items-center">


                            <button className="text-xl  sm:ml-2 ml-0 text-black rounded-lg bg-[#7AED93] font-bold px-4 py-2">25$</button>

                        </div>
                        <Transition appear
                            show={isOpen2}
                            as={Fragment}>
                            <Dialog as="div" className="relative z-10" open={isOpen2}
                                onClose={closeModal2}>
                                <Transition.Child as={Fragment}
                                    enter="ease-out duration-300"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="ease-in duration-200"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0">
                                    <div className="fixed inset-0 bg-black bg-opacity-25"/>
                                </Transition.Child>

                                <div className="fixed inset-0 overflow-y-auto">
                                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                                        <Transition.Child as={Fragment}
                                            enter="ease-out duration-300"
                                            enterFrom="opacity-0 scale-95"
                                            enterTo="opacity-100 scale-100"
                                            leave="ease-in duration-200"
                                            leaveFrom="opacity-100 scale-100"
                                            leaveTo="opacity-0 scale-95">
                                            <Dialog.Panel className="w-full max-w-4xl p-0.5 transform overflow-hidden rounded-2xl bg-white  text-left align-middle shadow-xl transition-all">
                                                <div className="flex sm:flex-row flex-col sm:justify-between rounded-t-2xl p-6 items-center  bg-gradient-to-tr from-primary-100 to-secondary-100 w-full sm:h-24">

                                                    <div className="flex flex-row items-center">

                                                        <p className="text-white font-semibold text-xl ml-4">Scan the QR Code with your phone</p>
                                                    </div>


                                                </div>
                                                <div className="py-6 px-12 flex flex-row">
                                                    <div className="flex flex-col w-1/2">
                                                        <img src="/img/icons/earn/iosqr.png" className="mx-auto"/>
                                                        <p className="text-center font-medium text-base mt-8">iOS</p>
                                                    </div>
                                                    <div className="flex flex-col w-1/2">
                                                        <img src="/img/icons/earn/androidqr.png" className="mx-auto"/>
                                                        <p className="text-center font-medium text-base mt-8">Android</p>
                                                    </div>


                                                </div>
                                            </Dialog.Panel>
                                        </Transition.Child>
                                    </div>
                                </div>
                            </Dialog>
                        </Transition>
                    </div>
               
               


                </div>
               
            </div>
        </div>
    )
}
