

'use client'

import { useState } from "react";
import RotateText from "../animations/RotText";

// Img
import Image from "next/image";
import test from "../../../public/image/img.jpg"
import test1 from "../../../public/image/img2.avif"

// Icons
import { FaHamburger, FaAngleDown } from "react-icons/fa";


// Define a map of colors or content depending on the active tab
// const tabData: Record<string, { color: string; info: string }> = {
//     "Home": { color: "bg-[#1a1a1b]", info: "Welcome back to Vizcom! Explore your recent assets." },
//     "Projects": { color: "bg-[#1E3A8A]", info: "Browse shared files, rendering nodes, and active canvas sheets." },
//     "Team": { color: "bg-[#065F46]", info: "Manage workspace collaborators, permissions, and roles." },
//     "Programs": { color: "bg-[#B45309]", info: "Check active scripts, extensions, and automated render schedules." }
// };

const Navbar = () => {
    // 1. Keep track of which item is currently hovered
    const [activeTab, setActiveTab] = useState<string | null>(null);
    const [dropDowner, setDropDowner] = useState(false)

    // Get the dynamic styles or content for the hovered tab (fallback to default dark style if none)
    // const currentStyle = activeTab && tabData[activeTab] ? tabData[activeTab].color : "bg-[#242425]";
    // const currentInfo = activeTab && tabData[activeTab] ? tabData[activeTab].info : null;

    return (
        <div className="flex absolute flex-col items-center bg-transparent py-4 w-full">

            {/* The Navbar Pill — its background changes based on the state variable 'currentStyle' */}
            <div className={`w-[60%] max-xl:w-[70%] flex ${activeTab || dropDowner ? 'rounded-[0px] rounded-tr-[5px] rounded-tl-[5px]' : 'rounded-[15px]'} justify-between items-center  pl-6 pr-2 py-3  bg-[#242425] transition-all duration-500`}>
                <div className="font-extrabold text-[#F8F4F1] text-2xl select-none">vizcom</div>

                <ul className="flex text-sm font-semibold text-[#F8F4F1] gap-6 max-xl:gap-4 max-lg:hidden items-center">
                    <RotateText text="Home" subItems={["First", "Second"]} onHoverStart={() => setActiveTab("Home")} onHoverEnd={() => setActiveTab(null)} />
                    <RotateText text="Projects" />
                    <RotateText text="Team" subItems={["First", "Second", 'Hasbi rabbi']} onHoverStart={() => setActiveTab("Team")} onHoverEnd={() => setActiveTab(null)} />
                    <RotateText text="Contact" />
                    <RotateText text="Testimony" />
                    <RotateText text="Programs" />
                </ul>

                <div className="flex gap-2 font-semibold text-sm items-center max-lg:hidden">
                    <button className="text-[#F8F4F1] px-2 py-2">
                        <RotateText text='Login' />
                    </button>
                    <button className="px-4 py-2 bg-[#337DDC] rounded-[10px] text-[#fff]">
                        <RotateText text='Try it Out' />
                    </button>
                </div>
                <div className="pr-4 hidden max-lg:block" onClick={() => setDropDowner(!dropDowner)}>
                    <span className="text-[#fff] text-xl">
                        <FaHamburger />
                    </span>
                </div>
            </div>

            {/* 2. Prints info completely outside the menu, directly below the Navbar list */}
            <div className={`w-[60%] max-xl:w-[70%] z-10  overflow-hidden transition-all rounded-bl-[5px] rounded-br-[5px] duration-300 ${dropDowner ? "max-h-73  opacity-100 " : "max-h-0 opacity-0"} ${activeTab ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}`}>
                <div className={`bg-[#242425] ${activeTab === "Home" ? "pr-25" : ""} ${activeTab === "Team" ? 'pr-5' : ""} pt-5 flex justify-end border border-[#333]   h-73  text-xs text-[#EDEAE7] font-medium text-center shadow-xl`}>
                    {/* {currentInfo} */}

                    {
                        activeTab ?
                            (
                                <div className="w-90">
                                    <Image
                                        src={activeTab === "Home" ? test : test1}
                                        width={1920}
                                        height={1080}
                                        alt="Testimg"
                                        className=" w-full h-full object-contan"
                                    />
                                </div>
                            ) : null
                    }


                    {
                        dropDowner ?
                            (
                                <div className="w-full flex items-start z-19">
                                    <ul className="flex w-full flex-col gap-3 px-4 text-[15px] items-start">
                                        <li className="py-1.5 cursor-pointer flex w-full items-center justify-between">Home <FaAngleDown /></li>
                                        <li className="py-1.5 cursor-pointer flex w-full items-center justify-between">Projects </li>
                                        <li className="py-1.5 cursor-pointer flex w-full items-center justify-between">Team <FaAngleDown /></li>
                                        <li className="py-1.5 cursor-pointer flex w-full items-center justify-between">Contact </li>
                                        <li className="py-1.5 cursor-pointer flex w-full items-center justify-between">Testimony</li>
                                        <li className="py-1.5 cursor-pointer flex w-full items-center justify-between">Programs</li>
                                    </ul>
                                </div>
                            ) : null
                    }





                </div>
            </div>

        </div>
    );
};

export default Navbar;






