import Link from "next/link"
import { Fragment,useState } from "react"
import { Dialog, Transition } from '@headlessui/react'
export default function Earn(){
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
    
      
    return (<div>
        <div id="listings" className="sm:p-4 p-4  bg-background-100 overflow-y-auto overflow-x-hidden">
            <div className="mb-4 p-6 flex flex-row  bg-[#DFEEFD] rounded-lg ">
                <div className="w-1/2 flex flex-col">

                
                <span className="text-2xl font-semibold text-secondary-100">Welcome to the Earn Page!</span>
                <span className="text-base font-medium mt-2">Let’s earn your first dollar now</span>
                <div className="flex flex-row gap-x-4 mt-2">
                <button className="px-6 py-2 font-medium bg-gradient-to-tr from-primary-100 to-secondary-100 text-white rounded-full border-0  focus:outline-none hover:bg-gray-200  sm:ml-0 ml-64  text-sm mt-8 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110"><Link href="/signup" >Show me how</Link></button>
                <button className="px-4 py-2 font-medium  text-secondary-100 text-base    focus:outline-none   sm:ml-0 ml-64   mt-8 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110"><Link href="/signup" >Skip for now</Link></button>
               
                </div>
                </div>
                <div className="w-1/2 flex">
                    
        <img src="/img/woman_earn.png" className="relative -bottom-5 -right-60" />
                </div>

            </div>
            <div className="mb-4">
                <span className="text-base font-semibold">Withdraw cash using</span>
            </div>
            <div className=" bg-white p-8 rounded-lg">
                <div className="flex flex-row items-center gap-2 mb-4">
                    <img src="/img/icons/earn/star_icon.svg" />
                    <p className="text-base font-semibold">Featured Offers</p>
                </div>
                <p className="text-sm text-black opacity-60 font-medium mb-4">The most frequently completed tasks by people from your country recently. (1000 coins = $1.00)</p>
                <div className="grid grid-cols-4 gap-x-6"> 
                <div className="flex bg-[#FFEBEB] p-8 rounded-lg"  onClick={openModal}>
                    <div className="mx-auto flex flex-col">
                        <img className="mx-auto" src="/img/logo_company1.png" />
                        <div className="">
                        <p className="mt-4 text-sm font-medium flex flex-row gap-1 mb-2">Popularity <img src="/img/icons/earn/enflag_icon.svg" />: 40</p>
                        <div className="bg-secondary-100 w-36 h-1 bg-opacity-20 rounded-lg">
                        <div className=" w-20 h-1 bg-secondary-100 rounded-lg " />
                            
                        </div>

                        </div>

                    </div>
            </div>
                    <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-4xl p-0.5 transform overflow-hidden rounded-2xl bg-white  text-left align-middle shadow-xl transition-all">
                    <div className="flex flex-row justify-between rounded-t-2xl p-6 items-center  bg-gradient-to-tr from-primary-100 to-secondary-100 w-full h-24">

<div className="flex flex-row items-center">
    <img src="/img/icons/earn/fiver.png" className="w-24"/>
<p className="text-white font-semibold text-xl ml-4">Fiverr iOS (Shape the Future)</p>
    </div>
<div className="flex flex-row items-center">
    <img src="/img/icons/earn/apple_icon.svg"/>
    <p className="text-base font-medium ml-2 text-white">$15</p>
    <button className="ml-4 text-base font-semibold text-secondary-100 px-6 py-2 bg-white rounded-full">Start Offer</button>

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
                <div className="flex bg-[#FFEBEB] p-8 rounded-lg"  onClick={openModal2}>
                <div className="mx-auto flex flex-col">
                        <img className="mx-auto" src="/img/logo_company2.png" />
                        <div className="">
                        <p className="mt-4 text-sm font-medium flex flex-row gap-1 mb-2">Popularity <img src="/img/icons/earn/enflag_icon.svg" />: 40</p>
                        <div className="bg-secondary-100 w-36 h-1 bg-opacity-20 rounded-lg">
                        <div className=" w-20 h-1 bg-secondary-100 rounded-lg " />
                            
                        </div>

                        </div>

                    </div>
                    
                </div>
                <Transition appear show={isOpen2} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal2}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-4xl p-0.5 transform overflow-hidden rounded-2xl bg-white  text-left align-middle shadow-xl transition-all">
                    <div className="flex flex-row justify-between rounded-t-2xl p-6 items-center  bg-gradient-to-tr from-primary-100 to-secondary-100 w-full h-24">

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
                <div className="flex bg-[#FFEBEB] p-8 rounded-lg">
                <div className="mx-auto flex flex-col">
                        <img className="mx-auto" src="/img/logo_company3.png" />
                        <div className="">
                        <p className="mt-4 text-sm font-medium flex flex-row gap-1 mb-2">Popularity <img src="/img/icons/earn/enflag_icon.svg" />: 40</p>
                        <div className="bg-secondary-100 w-36 h-1 bg-opacity-20 rounded-lg">
                        <div className=" w-20 h-1 bg-secondary-100 rounded-lg " />
                            
                        </div>

                        </div>

                    </div>
                </div>
                <div className="flex bg-[#FFEBEB] p-8 rounded-lg">
                <div className="mx-auto flex flex-col">
                        <img className="mx-auto" src="/img/logo_company4.png" />
                        <div className="">
                        <p className="mt-4 text-sm font-medium flex flex-row gap-1 mb-2">Popularity <img src="/img/icons/earn/enflag_icon.svg" />: 40</p>
                        <div className="bg-secondary-100 w-36 h-1 bg-opacity-20 rounded-lg">
                        <div className=" w-20 h-1 bg-secondary-100 rounded-lg " />
                            
                        </div>

                        </div>

                    </div>
                </div>
                
                </div>
            </div>
            <div className=" bg-white p-8 rounded-lg mt-6">
                <div className="flex flex-row items-center gap-2 mb-4">
                   
                    <p className="text-base font-semibold">Offer Walls</p>
                </div>
                <p className="text-sm text-black opacity-60 font-medium mb-4">Each offer walls contains hundreds of tasks to complete. Choose one of them to start earning coins. (1000 coins = $1.00)</p>
                <div className="grid grid-cols-4 gap-x-6"> 
                <div className="flex flex-col bg-[#EDF1FF] p-4 rounded-lg">
                    <p className="text-xs font-medium text-secondary-100 bg-white rounded-full w-20 px-1">+50% Bonus</p>
                    <div className="mx-auto flex flex-col">
                        <img className="mx-auto" src="/img/logo_company5.png" />
                        <div className="">
                        <p className="mt-4 text-sm font-medium flex flex-row gap-1 mb-2">Popularity <img src="/img/icons/earn/enflag_icon.svg" />: 40</p>
                        <div className="bg-secondary-100 w-36 h-1 bg-opacity-20 rounded-lg">
                        <div className=" w-20 h-1 bg-secondary-100 rounded-lg " />
                            
                        </div>

                        </div>

                    </div>
                </div>
                <div className="flex flex-col bg-[#F3EDFF] p-4 rounded-lg">
                <p className="text-xs font-medium text-secondary-100 bg-white rounded-full w-20 px-1">+50% Bonus</p>
                <div className="mx-auto flex flex-col">
                        <img className="mx-auto" src="/img/logo_company6.png" />
                        <div className="">
                        <p className="mt-4 text-sm font-medium flex flex-row gap-1 mb-2">Popularity <img src="/img/icons/earn/enflag_icon.svg" />: 40</p>
                        <div className="bg-secondary-100 w-36 h-1 bg-opacity-20 rounded-lg">
                        <div className=" w-20 h-1 bg-secondary-100 rounded-lg " />
                            
                        </div>

                        </div>

                    </div>
                </div>
                <div className="flex flex-col bg-[#FFEBEB] p-4 rounded-lg">
                <p className="text-xs font-medium text-secondary-100 bg-white rounded-full w-20 px-1">+50% Bonus</p>
                <div className="mx-auto flex flex-col">
                        <img className="mx-auto" src="/img/logo_company4.png" />
                        <div className="">
                        <p className="mt-4 text-sm font-medium flex flex-row gap-1 mb-2">Popularity <img src="/img/icons/earn/enflag_icon.svg" />: 40</p>
                        <div className="bg-secondary-100 w-36 h-1 bg-opacity-20 rounded-lg">
                        <div className=" w-20 h-1 bg-secondary-100 rounded-lg " />
                            
                        </div>

                        </div>

                    </div>
                </div>
                <div className="flex flex-col bg-[#FFF6E9] p-4 rounded-lg">
                <p className="text-xs font-medium text-secondary-100 bg-white rounded-full w-20 px-1">+50% Bonus</p>
                <div className="mx-auto flex flex-col">
                        <img className="mx-auto" src="/img/logo_company7.png" />
                        <div className="">
                        <p className="mt-4 text-sm font-medium flex flex-row gap-1 mb-2">Popularity <img src="/img/icons/earn/enflag_icon.svg" />: 40</p>
                        <div className="bg-secondary-100 w-36 h-1 bg-opacity-20 rounded-lg">
                        <div className=" w-20 h-1 bg-secondary-100 rounded-lg " />
                            
                        </div>

                        </div>

                    </div>
                </div>
                </div>
                <div className="grid grid-cols-4 gap-x-6 mt-4"> 
                <div className="flex flex-col bg-[#E9FDFF] p-4 rounded-lg">
                    <p className="text-xs font-medium text-secondary-100 bg-white rounded-full w-20 px-1">+50% Bonus</p>
                    <div className="mx-auto flex flex-col">
                        <img className="mx-auto" src="/img/logo_company8.png" />
                        <div className="">
                        <p className="mt-4 text-sm font-medium flex flex-row gap-1 mb-2">Popularity <img src="/img/icons/earn/enflag_icon.svg" />: 40</p>
                        <div className="bg-secondary-100 w-36 h-1 bg-opacity-20 rounded-lg">
                        <div className=" w-20 h-1 bg-secondary-100 rounded-lg " />
                            
                        </div>

                        </div>

                    </div>
                </div>
                <div className="flex flex-col bg-[#E9FDFF] p-4 rounded-lg">
                <p className="text-xs font-medium text-secondary-100 bg-white rounded-full w-20 px-1">+50% Bonus</p>
                <div className="mx-auto flex flex-col">
                        <img className="mx-auto" src="/img/logo_company9.png" />
                        <div className="">
                        <p className="mt-4 text-sm font-medium flex flex-row gap-1 mb-2">Popularity <img src="/img/icons/earn/enflag_icon.svg" />: 40</p>
                        <div className="bg-secondary-100 w-36 h-1 bg-opacity-20 rounded-lg">
                        <div className=" w-20 h-1 bg-secondary-100 rounded-lg " />
                            
                        </div>

                        </div>

                    </div>
                </div>
                <div className="flex flex-col bg-[#FFEBEB] p-4 rounded-lg">
                <p className="text-xs font-medium text-secondary-100 bg-white rounded-full w-20 px-1">+50% Bonus</p>
                <div className="mx-auto flex flex-col">
                        <img className="mx-auto" src="/img/logo_company10.png" />
                        <div className="">
                        <p className="mt-4 text-sm font-medium flex flex-row gap-1 mb-2">Popularity <img src="/img/icons/earn/enflag_icon.svg" />: 40</p>
                        <div className="bg-secondary-100 w-36 h-1 bg-opacity-20 rounded-lg">
                        <div className=" w-20 h-1 bg-secondary-100 rounded-lg " />
                            
                        </div>

                        </div>

                    </div>
                </div>
                <div className="flex flex-col bg-[#FFF6E9] p-4 rounded-lg">
                <p className="text-xs font-medium text-secondary-100 bg-white rounded-full w-20 px-1">+50% Bonus</p>
                <div className="mx-auto flex flex-col">
                        <img className="mx-auto" src="/img/logo_company11.png" />
                        <div className="">
                        <p className="mt-4 text-sm font-medium flex flex-row gap-1 mb-2">Popularity <img src="/img/icons/earn/enflag_icon.svg" />: 40</p>
                        <div className="bg-secondary-100 w-36 h-1 bg-opacity-20 rounded-lg">
                        <div className=" w-20 h-1 bg-secondary-100 rounded-lg " />
                            
                        </div>

                        </div>

                    </div>
                </div>
                </div>
            </div>
            <div className=" bg-white p-8 rounded-lg mt-6">
                <div className="flex flex-row items-center gap-2 mb-4">
                   
                    <p className="text-base font-semibold">Survey</p>
                </div>
                <p className="text-sm text-black opacity-60 font-medium mb-4">Complete surveys to earn coins. You will be rewarded for each survey completed.</p>
                <div className="grid grid-cols-4 gap-x-6"> 
                <div className="flex flex-col bg-[#EDF1FF] p-4 rounded-lg">
                    
                    <div className="mx-auto flex flex-col">
                        <img className="mx-auto" src="/img/logo_company5.png" />
                        <div className="">
                        <p className="mt-4 text-sm font-medium flex flex-row gap-1 mb-2">Popularity <img src="/img/icons/earn/enflag_icon.svg" />: 40</p>
                        <div className="bg-secondary-100 w-36 h-1 bg-opacity-20 rounded-lg">
                        <div className=" w-20 h-1 bg-secondary-100 rounded-lg " />
                            
                        </div>

                        </div>

                    </div>
                </div>
                <div className="flex flex-col bg-[#F3EDFF] p-4 rounded-lg">
                
                <div className="mx-auto flex flex-col">
                        <img className="mx-auto" src="/img/logo_company6.png" />
                        <div className="">
                        <p className="mt-4 text-sm font-medium flex flex-row gap-1 mb-2">Popularity <img src="/img/icons/earn/enflag_icon.svg" />: 40</p>
                        <div className="bg-secondary-100 w-36 h-1 bg-opacity-20 rounded-lg">
                        <div className=" w-20 h-1 bg-secondary-100 rounded-lg " />
                            
                        </div>

                        </div>

                    </div>
                </div>
                <div className="flex flex-col bg-[#FFEBEB] p-4 rounded-lg">
               
                <div className="mx-auto flex flex-col">
                        <img className="mx-auto" src="/img/logo_company4.png" />
                        <div className="">
                        <p className="mt-4 text-sm font-medium flex flex-row gap-1 mb-2">Popularity <img src="/img/icons/earn/enflag_icon.svg" />: 40</p>
                        <div className="bg-secondary-100 w-36 h-1 bg-opacity-20 rounded-lg">
                        <div className=" w-20 h-1 bg-secondary-100 rounded-lg " />
                            
                        </div>

                        </div>

                    </div>
                </div>
                <div className="flex flex-col bg-[#FFF6E9] p-4 rounded-lg">
               
                <div className="mx-auto flex flex-col">
                        <img className="mx-auto" src="/img/logo_company7.png" />
                        <div className="">
                        <p className="mt-4 text-sm font-medium flex flex-row gap-1 mb-2">Popularity <img src="/img/icons/earn/enflag_icon.svg" />: 40</p>
                        <div className="bg-secondary-100 w-36 h-1 bg-opacity-20 rounded-lg">
                        <div className=" w-20 h-1 bg-secondary-100 rounded-lg " />
                            
                        </div>

                        </div>

                    </div>
                </div>
                </div>
                <div className="grid grid-cols-4 gap-x-6 mt-4"> 
                <div className="flex flex-col bg-[#E9FDFF] p-4 rounded-lg">
                   
                    <div className="mx-auto flex flex-col">
                        <img className="mx-auto" src="/img/logo_company12.png" />
                        <div className="">
                        <p className="mt-4 text-sm font-medium flex flex-row gap-1 mb-2">Popularity <img src="/img/icons/earn/enflag_icon.svg" />: 40</p>
                        <div className="bg-secondary-100 w-36 h-1 bg-opacity-20 rounded-lg">
                        <div className=" w-20 h-1 bg-secondary-100 rounded-lg " />
                            
                        </div>

                        </div>

                    </div>
                </div>
                <div className="flex flex-col bg-[#E9FDFF] p-4 rounded-lg">
               
                <div className="mx-auto flex flex-col">
                        <img className="mx-auto mt-4" src="/img/logo_company13.png" />
                       

                    </div>
                </div>
                <div className="flex flex-col bg-[#FFEBEB] p-4 rounded-lg">
                
                <div className="mx-auto flex flex-col">
                        <img className="mx-auto mt-4" src="/img/logo_company14.png" />
                       

                    </div>
                </div>
                <div className="flex flex-col bg-[#FFF6E9] p-4 rounded-lg">
               
                <div className="mx-auto flex flex-col">
                        <img className="mx-auto mt-4" src="/img/logo_company15.png" />
                       
                    </div>
                </div>
                </div>
            </div>
            
            

            
           
        </div>
    </div>)
}