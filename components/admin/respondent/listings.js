import Link from "next/link"
export default function Listings(){
    return (<div>
        <div id="listings" className="sm:p-4 p-4 bg-background-100">
            <div className="py-4  flex flex-row gap-x-6">

        <button className="rounded-full bg-white text-center   font-medium text-sm justify-between  w-[48em]  flex flex-row gap-2 "><span className=" items-center py-3 px-4 text-sm font-medium opacity-40">Search projects by keyword</span><img src="/img/icons/respondent_d/search_icon.svg" /></button>
        <button className="rounded-full bg-white text-center py-2 px-4 font-medium text-sm     flex flex-row gap-2 items-center "><img src="/img/icons/respondent_d/filter_icon.svg" className="opacity-80"/><span className="opacity-80 text-sm">Filter (0)</span></button>
        <button className="rounded-full bg-white text-center py-2 px-4 font-medium text-sm     flex flex-row gap-2  items-center"><span className="opacity-80 text-sm">Sort Most Relevant</span><img src="/img/icons/respondent_d/row_icon.svg" className="opacity-80"/></button>

            </div>
            <div className="mb-4">
                <p className="font-medium text-sm">15 of 40 projects</p>
            </div>
            
            <div className="rounded-xl bg-white">
                <div className="flex flex-col sm:p-4 p-2">
                    <div className="flex flex-row justify-between">
                        <p className="ml-2 text-[#4965C6] font-bold sm:text-lg text-base">Customer Experience for <br className="sm:hidden visible"/>
                            E-Commerce</p>
                        <div>
                            <p className="ml-4 text-[#139045] font-bold sm:text-2xl text-xl">$25</p>
                            <p className="text-black opacity-60 sm:text-sm text-xs text-center">30 minutes</p>
                        </div>
                    </div>
                    <div className="flex flex-row space-x-2  ">
                        <button className="rounded-full bg-background-100 text-center py-2 px-4 font-medium text-sm   flex flex-row gap-2 "><img src="/img/icons/respondent_d/interview_icon.svg" className="opacity-60"/><span className="opacity-60">1-on-1 Interview</span></button>
                        <button className="rounded-full bg-background-100 text-center py-2 px-4 font-medium text-sm   flex flex-row gap-2 "><img src="/img/icons/respondent_d/globe_icon.svg" className="opacity-60"/><span className="opacity-60">Online</span></button>
                        <button className="rounded-full bg-background-100 text-center py-2 px-4 font-medium text-sm   flex flex-row gap-2 "><img src="/img/icons/respondent_d/thunder_icon.svg" className="opacity-60"/><span className="opacity-60">Easy Apply</span></button>

                    </div>
                    <div className="w-full sm:mt-2 mt-4">
                        <p className="ml-2 text-sm text-medium text-black sm:leading-relaxed">We are looking for individuals who would be willing to try our current product that helps sellers launch their online shop in less than an hour for free. This will be an online interview where you will talk about your experience while using the product.</p>

                    </div>
                    <div className="flex flex-row space-x-2 sm:hidden visible sm:mt-0 mt-2">
                        <button className="rounded-full bg-background-100 text-center py-2 sm:px-4 px-2 items-center font-medium text-xs  bg-opacity-10 flex flex-row"><img src="/img/microfone_icon.svg"/>1-on-1 Interview</button>
                        <button className="rounded-full bg-background-100 text-center py-2 sm:px-4 px-2 items-center font-medium text-xs  bg-opacity-10 flex flex-row"><img src="/img/world_icon.svg"/>Online</button>
                        <button className="rounded-full bg-background-100 text-center py-2 sm:px-4 px-2 items-center font-medium text-xs  bg-opacity-10 flex flex-row"><img src="/img/thunder_icon.svg"/>Easy Apply</button>

                    </div>
                    <div className="ml-2 sm:flex sm:flex-row flex-col justify-between mt-4  hidden">
                        <div className="flex sm:flex-row flex-col space-x-2">
                            <div>
                                <p className="font-medium text-black text-opacity-60 text-sm">DEVICE REQUIREMENTS</p>
                                <p className="mt-2 text-sm text-black font-medium text-opacity-75">Computer with
                                    webcam</p>
                            </div>
                            <div>
                                <p className="font-medium text-black text-opacity-60 text-sm">STUDY DATES</p>
                                <p className="mt-2 text-sm text-black font-medium text-opacity-75">10/10/2022 -
                                11/13/2022</p>
                            </div>
                        </div>
                        <div className="">
                            <button className="px-4 py-2 font-medium bg-gradient-to-tr from-primary-100 to-secondary-100 text-white rounded-full border-0  focus:outline-none hover:bg-gray-200  sm:ml-0 ml-64  text-sm mt-8 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110"><Link href="/signup" >View Project</Link></button>
                        </div>

                    </div>
                    <div className="mt-4 ml-2 sm:hidden visible">
                        <div>
                            <p className="font-medium text-black text-opacity-60 text-sm">DEVICE REQUIREMENTS</p>
                            <p className="mt-2 text-sm text-black font-medium text-opacity-75">Computer with webcam</p>

                        </div>
                        <div className="flex flex-row mt-2">
                            <div>
                                <p className="font-medium text-black text-opacity-60 text-sm">STUDY DATES</p>
                                <p className="mt-2 text-sm text-black font-medium text-opacity-75">10/10/2022 -
                                11/13/2022</p>
                            </div>
                            <div className="">
                                <button className="px-4 py-2 font-medium bg-gradient-to-tr from-primary-100 to-secondary-100 text-white rounded-full border-0 ml-40  focus:outline-none hover:bg-gray-200  text-sm mt-8 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110"><Link href="/signup" >View Project</Link></button>
                            </div>

                        </div>
                    </div>

                </div>

            </div>
            <div className="rounded-xl bg-white sm:mt-8 mt-4">
                <div className="flex flex-col sm:p-4 p-2">
                    <div className="flex flex-row justify-between">
                        <p className="ml-2 text-[#4965C6] font-bold sm:text-lg text-base">Improve customer experience<br className="sm:hidden visible"/></p>
                           
                        <div>
                            <p className="ml-4 text-[#139045] font-bold sm:text-2xl text-xl">$400</p>
                            <p className="text-black opacity-60 sm:text-sm text-xs text-center">1 Hour</p>
                        </div>
                    </div>
                    <div className="flex flex-row space-x-2  ">
                        <button className="rounded-full bg-background-100 text-center py-2 px-4 font-medium text-sm   flex flex-row gap-2 "><img src="/img/icons/respondent_d/interview_icon.svg" className="opacity-60"/><span className="opacity-60">1-on-1 Interview</span></button>
                        <button className="rounded-full bg-background-100 text-center py-2 px-4 font-medium text-sm   flex flex-row gap-2 "><img src="/img/icons/respondent_d/globe_icon.svg" className="opacity-60"/><span className="opacity-60">Online</span></button>
                        <button className="rounded-full bg-background-100 text-center py-2 px-4 font-medium text-sm   flex flex-row gap-2 "><img src="/img/icons/respondent_d/thunder_icon.svg" className="opacity-60"/><span className="opacity-60">Easy Apply</span></button>

                    </div>
                    <div className="w-full sm:mt-2 mt-4">
                        <p className="ml-2 text-sm text-medium text-black sm:leading-relaxed">We&apos;re looking for people to take part in a 45-60 minute research interview to determine whether our product meets the needs of users and to get your feedback on experience, design, and development.</p>

                    </div>
                    <div className="flex flex-row space-x-2 sm:hidden visible sm:mt-0 mt-2">
                        <button className="rounded-full bg-background-100 text-center py-2 sm:px-4 px-2 items-center font-medium text-xs  bg-opacity-10 flex flex-row"><img src="/img/microfone_icon.svg"/>1-on-1 Interview</button>
                        <button className="rounded-full bg-background-100 text-center py-2 sm:px-4 px-2 items-center font-medium text-xs  bg-opacity-10 flex flex-row"><img src="/img/world_icon.svg"/>Online</button>
                        <button className="rounded-full bg-background-100 text-center py-2 sm:px-4 px-2 items-center font-medium text-xs  bg-opacity-10 flex flex-row"><img src="/img/thunder_icon.svg"/>Easy Apply</button>

                    </div>
                    <div className="ml-2 sm:flex sm:flex-row flex-col justify-between mt-4  hidden">
                        <div className="flex sm:flex-row flex-col space-x-2">
                            <div>
                                <p className="font-medium text-black text-opacity-60 text-sm">DEVICE REQUIREMENTS</p>
                                <p className="mt-2 text-sm text-black font-medium text-opacity-75">Computer with
                                    webcam</p>
                            </div>
                            <div>
                                <p className="font-medium text-black text-opacity-60 text-sm">STUDY DATES</p>
                                <p className="mt-2 text-sm text-black font-medium text-opacity-75">10/10/2022 -
                                12/05/2022</p>
                            </div>
                        </div>
                        <div className="">
                            <button className="px-4 py-2 font-medium bg-gradient-to-tr from-primary-100 to-secondary-100 text-white rounded-full border-0  focus:outline-none hover:bg-gray-200  sm:ml-0 ml-64  text-sm mt-8 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110"><Link href="/signup" >View Project</Link></button>
                        </div>

                    </div>
                    <div className="mt-4 ml-2 sm:hidden visible">
                        <div>
                            <p className="font-medium text-black text-opacity-60 text-sm">DEVICE REQUIREMENTS</p>
                            <p className="mt-2 text-sm text-black font-medium text-opacity-75">Computer with webcam</p>

                        </div>
                        <div className="flex flex-row mt-2">
                            <div>
                                <p className="font-medium text-black text-opacity-60 text-sm">STUDY DATES</p>
                                <p className="mt-2 text-sm text-black font-medium text-opacity-75">10/10/2022 -
                                12/05/2022</p>
                            </div>
                            <div className="">
                                <button className="px-4 py-2 font-medium bg-gradient-to-tr from-primary-100 to-secondary-100 text-white rounded-full border-0 ml-40  focus:outline-none hover:bg-gray-200  text-sm mt-8 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110"><Link href="/signup" >View Project</Link></button>
                            </div>

                        </div>
                    </div>

                </div>

            </div>
            <div className="rounded-xl bg-white sm:mt-8 mt-4">
                <div className="flex flex-col sm:p-4 p-2">
                    <div className="flex flex-row justify-between">
                        <p className="ml-2 text-[#4965C6] font-bold sm:text-lg text-base">Calling all fast food lovers!</p>
                           
                        <div>
                            <p className="ml-4 text-[#139045] font-bold sm:text-2xl text-xl">$75</p>
                            <p className="text-black opacity-60 sm:text-sm text-xs text-center">30 minutes</p>
                        </div>
                    </div>
                    <div className="flex flex-row space-x-2  ">
                        <button className="rounded-full bg-background-100 text-center py-2 px-4 font-medium text-sm   flex flex-row gap-2 "><img src="/img/icons/respondent_d/interview_icon.svg" className="opacity-60"/><span className="opacity-60">1-on-1 Interview</span></button>
                        <button className="rounded-full bg-background-100 text-center py-2 px-4 font-medium text-sm   flex flex-row gap-2 "><img src="/img/icons/respondent_d/globe_icon.svg" className="opacity-60"/><span className="opacity-60">Online</span></button>
                        <button className="rounded-full bg-background-100 text-center py-2 px-4 font-medium text-sm   flex flex-row gap-2 "><img src="/img/icons/respondent_d/thunder_icon.svg" className="opacity-60"/><span className="opacity-60">Easy Apply</span></button>

                    </div>
                    <div className="w-full sm:mt-2 mt-4">
                        <p className="ml-2 text-sm text-medium text-black sm:leading-relaxed">We are looking for people to take part in an exciting consumer research study on fast food ordering. Participants in this project will place a mobile order for pick-up at a specific fast food restaurant and immediately complete an online survey.</p>

                    </div>
                    <div className="flex flex-row space-x-2 sm:hidden visible sm:mt-0 mt-2">
                        <button className="rounded-full bg-background-100 text-center py-2 sm:px-4 px-2 items-center font-medium text-xs  bg-opacity-10 flex flex-row"><img src="/img/microfone_icon.svg"/>1-on-1 Interview</button>
                        <button className="rounded-full bg-background-100 text-center py-2 sm:px-4 px-2 items-center font-medium text-xs  bg-opacity-10 flex flex-row"><img src="/img/world_icon.svg"/>Online</button>
                        <button className="rounded-full bg-background-100 text-center py-2 sm:px-4 px-2 items-center font-medium text-xs  bg-opacity-10 flex flex-row"><img src="/img/thunder_icon.svg"/>Easy Apply</button>

                    </div>
                    <div className="ml-2 sm:flex sm:flex-row flex-col justify-between mt-4  hidden">
                        <div className="flex sm:flex-row flex-col space-x-2">
                            <div>
                                <p className="font-medium text-black text-opacity-60 text-sm">DEVICE REQUIREMENTS</p>
                                <p className="mt-2 text-sm text-black font-medium text-opacity-75">Smartphone with webcam</p>
                            </div>
                            <div>
                                <p className="font-medium text-black text-opacity-60 text-sm">STUDY DATES</p>
                                <p className="mt-2 text-sm text-black font-medium text-opacity-75">10/10/2022 -
                                11/22/2022</p>
                            </div>
                        </div>
                        <div className="">
                            <button className="px-4 py-2 font-medium bg-gradient-to-tr from-primary-100 to-secondary-100 text-white rounded-full border-0  focus:outline-none hover:bg-gray-200  sm:ml-0 ml-64  text-sm mt-8 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110"><Link href="/signup" >View Project</Link></button>
                        </div>

                    </div>
                    <div className="mt-4 ml-2 sm:hidden visible">
                        <div>
                            <p className="font-medium text-black text-opacity-60 text-sm">DEVICE REQUIREMENTS</p>
                            <p className="mt-2 text-sm text-black font-medium text-opacity-75">Computer with webcam</p>

                        </div>
                        <div className="flex flex-row mt-2">
                            <div>
                                <p className="font-medium text-black text-opacity-60 text-sm">STUDY DATES</p>
                                <p className="mt-2 text-sm text-black font-medium text-opacity-75">10/10/2022 -
                                11/22/2022</p>
                            </div>
                            <div className="">
                                <button className="px-4 py-2 font-bold bg-gradient-to-r from-primary-100 to-secondary-100 text-white rounded-full border-0 ml-40  focus:outline-none hover:bg-gray-200  text-sm mt-8 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110"><Link href="/signup" >View Project</Link></button>
                            </div>

                        </div>
                    </div>

                </div>

            </div>
            
           
        </div>
    </div>)
}