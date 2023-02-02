import React, { useState } from 'react'
import Link from "next/link";


function ScrappedOffer({ offer }) {

    const [showMore, setShowMore] = useState(true);


    return (
        <div className="rounded-xl bg-white mb-2">
            <div className="flex flex-col sm:p-4 p-2">
                <div className="flex flex-row justify-between">
                    <p className="ml-2 text-[#4965C6] font-bold sm:text-lg text-base">{offer.title}<br className="sm:hidden visible" /></p>

                    <div>
                        <p className="ml-4 text-[#139045] font-bold sm:text-2xl text-xl">{offer.payout}</p>
                        {/* <p className="text-black opacity-60 sm:text-sm text-xs text-center">1 Hour</p> */}
                    </div>
                </div>
                <div className="flex flex-row space-x-2  ">
                    {/* <button className="rounded-full bg-background-100 text-center py-2 px-4 font-medium text-sm   flex flex-row gap-2 "><img src="/img/icons/respondent_d/interview_icon.svg" className="opacity-60" /><span className="opacity-60">1-on-1 Interview</span></button> */}
                    <button className="rounded-full bg-background-100 text-center py-2 px-4 font-medium text-sm   flex flex-row gap-2 "><img src="/img/icons/respondent_d/globe_icon.svg" className="opacity-60" /><span className="opacity-60">{offer.facility}</span></button>
                    <button className="rounded-full bg-background-100 text-center py-2 px-4 font-medium text-sm   flex flex-row gap-2 "><img src="/img/icons/respondent_d/thunder_icon.svg" className="opacity-60" /><span className="opacity-60">Easy Apply</span></button>

                </div>
                <div className="w-full sm:mt-2 mt-4">
                    {
                        showMore
                            ? <p className="ml-2 text-sm text-medium text-black sm:leading-relaxed">{offer.description.substring(0, 250)} {offer.description?.length > 250 && < span className='text-blue-500' onClick={() => setShowMore(!showMore)}>{showMore ? "Show more" : "Show less"}</span>}</p>
                            : <p className="ml-2 text-sm text-medium text-black sm:leading-relaxed">{offer.description} {offer.description?.length > 250 && < span className='text-blue-500' onClick={() => setShowMore(!showMore)}>{showMore ? "Show more" : "Show less"}</span>}</p>
                    }


                </div>
                <div className="flex flex-row space-x-2 sm:hidden visible sm:mt-0 mt-2">
                    {/* <button className="rounded-full bg-background-100 text-center py-2 sm:px-4 px-2 items-center font-medium text-xs  bg-opacity-10 flex flex-row"><img src="/img/microfone_icon.svg" />1-on-1 Interview</button> */}
                    <button className="rounded-full bg-background-100 text-center py-2 sm:px-4 px-2 items-center font-medium text-xs  bg-opacity-10 flex flex-row"><img src="/img/world_icon.svg" />{offer.facility}</button>
                    <button className="rounded-full bg-background-100 text-center py-2 sm:px-4 px-2 items-center font-medium text-xs  bg-opacity-10 flex flex-row"><img src="/img/thunder_icon.svg" />Easy Apply</button>

                </div>
                <div className="ml-2 sm:flex sm:flex-row flex-col justify-between mt-4">
                    <div className="flex sm:flex-row flex-col space-x-2">
                        <div>
                            <p className="font-medium text-black text-opacity-60 text-sm">GENDER AND AGE REQUIREMENTS</p>
                            <p className="mt-2 text-sm text-black font-medium text-opacity-75">{offer.gender} with {offer.age} years</p>
                        </div>
                        <div>
                            <p className="font-medium text-black text-opacity-60 text-sm">STUDY DATES</p>
                            <p className="mt-2 text-sm text-black font-medium text-opacity-75">{offer.published} -
                                {offer.expires}</p>
                        </div>
                    </div>
                    <div className="">
                        <button className="px-4 py-2 font-medium bg-gradient-to-tr from-primary-100 to-secondary-100 text-white rounded-full border-0  focus:outline-none hover:bg-gray-200  sm:ml-0 ml-64  text-sm mt-8 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110"><Link href="/signup" >View Project</Link></button>
                    </div>

                </div>
            </div>
        </div >
    )
}

export default ScrappedOffer