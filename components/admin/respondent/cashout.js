import Link from "next/link"
import {Fragment, useState} from "react"
import {Dialog, Transition} from '@headlessui/react'
export default function Cashout() {
    let [isOpen, setIsOpen] = useState(false)
    let [isOpen2, setIsOpen2] = useState(false)
    let [isOpen3, setIsOpen3] = useState(false)

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
    function openModal3() {
        setIsOpen3(true)
    }
    function closeModal3() {
        setIsOpen3(false)
    }
    function openModal4() {
        setIsOpen4(true)
    }
    function closeModal4() {
        setIsOpen4(false)
    }
    return (
        <div>
            <div id="listings" className="sm:p-4 p-4 bg-background-100">
                <div className="mb-4 py-4 px-4 flex flex-row gap-x-6 bg-[#DFEEFD] rounded-lg items-center">
                    <img src="/img/icons/cashout/alert_icon.svg"/>
                    <span className="text-base font-medium">You must have to earn $2.00 before being able to withdraw.</span>

                </div>
                <div className="mb-4">
                    <span className="text-base font-semibold">Withdraw cash using</span>
                </div>
                <div className="grid grid-cols-4 gap-x-6">
                    <div className="flex bg-white p-8 rounded-lg"
                        onClick={openModal}>
                        <div className="mx-auto flex flex-col">
                            <img className="mx-auto" src="/img/icons/cashout/paypal_icon.svg"/>
                            <p className="mt-4 text-lg font-semibold">Paypal</p>

                        </div>
                    </div>
                    <Transition appear
                        show={isOpen}
                        as={Fragment}>
                        <Dialog as="div" className="relative z-10"
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
                                            <div className="flex flex-row justify-between rounded-t-2xl p-6 items-center  bg-gradient-to-tr from-primary-100 to-secondary-100 w-full h-24">

                                                <div className="flex flex-row items-center">

                                                    <p className="text-white font-semibold text-xl ml-4">Revenue Universe</p>
                                                </div>
                                                <div className="flex flex-row-reverse items-center">
                                                    <img src="/img/icons/cashout/close_icon.svg" className="cursor-pointer"
                                                        onClick={closeModal}/>

                                                </div>

                                            </div>
                                            <div className="py-6 px-12 h-64"></div>
                                        </Dialog.Panel>
                                    </Transition.Child>
                                </div>
                            </div>
                        </Dialog>
                    </Transition>

                    <div className="flex bg-white p-8 rounded-lg"
                        onClick={openModal2}>
                        <div className="mx-auto flex flex-col">
                            <img className="mx-auto" src="/img/icons/cashout/bitcoin_icon.svg"/>
                            <p className="mt-4 text-lg font-semibold">Bitcoin</p>

                        </div>
                    </div>
                    <Transition appear
                        show={isOpen2}
                        as={Fragment}>
                        <Dialog as="div" className="relative z-10"
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
                                        <Dialog.Panel className="w-full max-w-md p-6 transform overflow-hidden rounded-2xl bg-white   align-middle shadow-xl transition-all">

                                            <div className="  py-6 px-12 ">
                                                <p className="text-base font-medium text-black text-center">You don’t have enough balance!</p>
                                                    <button onClick={closeModal} className="w-36 px-4 py-2 font-medium bg-gradient-to-tr from-primary-100 to-secondary-100 text-white rounded-full border-0  focus:outline-none hover:bg-gray-200  sm:ml-0 ml-64  text-sm mt-8 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110">
                                                        Close
                                                    </button>
                                               


                                            </div>
                                        </Dialog.Panel>
                                    </Transition.Child>
                                </div>
                            </div>
                        </Dialog>
                    </Transition>
                    <div className="flex bg-white p-8 rounded-lg" onClick={openModal2}>
                        <div className="mx-auto flex flex-col">
                            <img className="mx-auto" src="/img/icons/cashout/ethereum_icon.svg"/>
                            <p className="mt-4 text-lg font-semibold">Ethereum</p>

                        </div>
                        <Transition appear
                        show={isOpen2}
                        as={Fragment}>
                        <Dialog as="div" className="relative z-10"
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
                    <div className="flex flex-row justify-between rounded-t-2xl p-6 items-center  bg-gradient-to-tr from-primary-100 to-secondary-100 w-full h-32">

<div className="flex flex-row items-center">
    <img src="/img/icons/cashout/paypal_logo.png" className="w-64"/>

    </div>
<div className="flex flex-row items-center bg-black bg-opacity-10 p-4 rounded-lg">
    <img src="/img/icons/cashout/exclamation_icon.svg"/>
    <div className="flex flex-col ml-2 ">

    <p className="text-sm font-medium  text-white opacity-80">PayPal withdrawals have a 5% free.</p>
    <button className=" text-sm font-medium text-white opacity-80">After paynig out, you can claim your PayPal Cashout on your profile.</button>
    </div>

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
                    </div>
                    <div className="flex bg-white p-8 rounded-lg">
                        <div className="mx-auto flex flex-col">
                            <img className="mx-auto" src="/img/icons/cashout/bank_icon.svg"/>
                            <p className="mt-4 text-lg font-semibold">Bank Transfer</p>

                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}
