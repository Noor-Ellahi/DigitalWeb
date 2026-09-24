
'use client'
import { useState } from "react"


const Pricing = () => {

    const [priceSection, setPriceSection] = useState(0)


    return (
        <div className="py-10">
            <div className="mb-14 flex items-start flex-col pl-20 max-xl:pl-12 max-md:pl-8">
                <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-[#337DDC]">
                    Pricing
                </p>

                <h2 className="max-w-2xl text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                    Everything you need to Know.
                </h2>
            </div>
            <div>
                <ul className="flex items-center justify-center gap-2 text-xl">
                    {
                        ['SEO Manangement', "Content-Writing", "Web-Development", "Logo-Design"].map((it, ind) => {
                            return (
                                <li key={ind} onClick={() => setPriceSection(ind)} className={`${priceSection === ind ? "text-[#000]!" : ""} font-semibold transition duration-400 text-[#000]/50 flex flex-col gap-2 ${ind === 3 ? "border-r-0" : "border-r-1"}  cursor-pointer  pr-3 `}>
                                    {it}
                                    <span className={`${priceSection === ind ? "h-[2px] w-full opacity-100" : " opacity-0 "} block   bg-[#337DDC] `}></span>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}



export default Pricing