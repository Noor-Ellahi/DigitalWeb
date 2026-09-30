

// // 'use client'

// // import { useState } from "react";
// // import RotateText from "../animations/RotText";

// // // Img
// // import Image from "next/image";
// // import test from "../../../public/image/img.jpg"
// // import test1 from "../../../public/image/img2.avif"

// // // Icons
// // import { FaHamburger, FaAngleDown } from "react-icons/fa";




// // const Navbar = () => {
// //     const [activeTab, setActiveTab] = useState<string | null>(null);
// //     const [dropDowner, setDropDowner] = useState(false)


// //     return (
// //         <div className="flex absolute flex-col z-1 items-center bg-transparent py-4 w-full">

// //             <div className={`w-[60%] max-xl:w-[70%] max-lg:w-[90%] flex ${activeTab || dropDowner ? 'rounded-[0px] rounded-tr-[5px] rounded-tl-[5px]' : 'rounded-[15px]'} justify-between items-center  pl-6 pr-2 py-3  bg-[#242425] transition-all duration-500`}>
// //                 <div className="font-extrabold text-[#F8F4F1] text-2xl select-none">vizcom</div>

// //                 <ul className="flex text-sm font-semibold text-[#F8F4F1] gap-6 max-xl:gap-4 max-lg:hidden items-center">
// //                     <RotateText text="Home" subItems={["First", "Second"]} onHoverStart={() => setActiveTab("Home")} onHoverEnd={() => setActiveTab(null)} />
// //                     <RotateText text="Projects" />
// //                     <RotateText text="Team" subItems={["First", "Second", 'Hasbi rabbi']} onHoverStart={() => setActiveTab("Team")} onHoverEnd={() => setActiveTab(null)} />
// //                     <RotateText text="Contact" />
// //                     <RotateText text="Testimony" />
// //                     <RotateText text="Programs" />
// //                 </ul>

// //                 <div className="flex gap-2 font-semibold text-sm items-center max-lg:hidden">
// //                     <button className="text-[#F8F4F1] px-2 py-2">
// //                         <RotateText text='Login' />
// //                     </button>
// //                     <button className="px-4 py-2 bg-[#337DDC] rounded-[10px] text-[#fff]">
// //                         <RotateText text='Try it Out' />
// //                     </button>
// //                 </div>
// //                 <div className="pr-4 hidden max-lg:block" onClick={() => setDropDowner(!dropDowner)}>
// //                     <span className="text-[#fff] text-xl">
// //                         <FaHamburger />
// //                     </span>
// //                 </div>
// //             </div>

// //             {/* 2. Prints info completely outside the menu, directly below the Navbar list */}
// //             <div className={`w-[60%] max-xl:w-[70%] max-lg:w-[90%] z-10  overflow-hidden transition-all rounded-bl-[5px] rounded-br-[5px] duration-300 ${dropDowner ? "max-h-73  opacity-100 " : "max-h-0 opacity-0"} ${activeTab ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}`}>
// //                 <div className={`bg-[#242425] ${activeTab === "Home" ? "pr-25" : ""} ${activeTab === "Team" ? 'pr-5' : ""} pt-5 flex justify-end border border-[#333]   h-73  text-xs text-[#EDEAE7] font-medium text-center shadow-xl`}>
// //                     {/* {currentInfo} */}

// //                     {
// //                         activeTab ?
// //                             (
// //                                 <div className="w-90">
// //                                     <Image
// //                                         src={activeTab === "Home" ? test : test1}
// //                                         width={1920}
// //                                         height={1080}
// //                                         alt="Testimg"
// //                                         className=" w-full h-full object-contan"
// //                                     />
// //                                 </div>
// //                             ) : null
// //                     }


// //                     {
// //                         dropDowner ?
// //                             (
// //                                 <div className="w-full flex items-start z-19">
// //                                     <ul className="flex w-full flex-col gap-3 px-4 text-[15px] items-start">
// //                                         <li className="py-1.5 cursor-pointer flex w-full items-center justify-between">Home <FaAngleDown /></li>
// //                                         <li className="py-1.5 cursor-pointer flex w-full items-center justify-between">Projects </li>
// //                                         <li className="py-1.5 cursor-pointer flex w-full items-center justify-between">Team <FaAngleDown /></li>
// //                                         <li className="py-1.5 cursor-pointer flex w-full items-center justify-between">Contact </li>
// //                                         <li className="py-1.5 cursor-pointer flex w-full items-center justify-between">Testimony</li>
// //                                         <li className="py-1.5 cursor-pointer flex w-full items-center justify-between">Programs</li>
// //                                     </ul>
// //                                 </div>
// //                             ) : null
// //                     }





// //                 </div>
// //             </div>

// //         </div>
// //     );
// // };

// // export default Navbar;




// "use client";

// import { useEffect, useState } from "react";
// import RotateText from "../animations/RotText";

// // Img
// import Image from "next/image";
// import test from "../../../public/image/img.jpg"
// import test1 from "../../../public/image/img2.avif"

// // Icons
// import { FaHamburger, FaAngleDown } from "react-icons/fa";

// const Navbar = () => {
//     const [showNavbar, setShowNavbar] = useState(true);
//     const [lastScrollY, setLastScrollY] = useState(0);


//     const [activeTab, setActiveTab] = useState<string | null>(null);
//     const [dropDowner, setDropDowner] = useState(false)

//     useEffect(() => {
//         const handleScroll = () => {
//             const currentScrollY = window.scrollY;

//             if (currentScrollY <= 0) {
//                 setShowNavbar(true);
//             } else if (currentScrollY < lastScrollY) {
//                 // Scrolling up
//                 setShowNavbar(true);
//             } else {
//                 // Scrolling down
//                 setShowNavbar(false);
//             }

//             setLastScrollY(currentScrollY);
//         };

//         window.addEventListener("scroll", handleScroll);

//         return () => {
//             window.removeEventListener("scroll", handleScroll);
//         };
//     }, [lastScrollY]);

//     return (
//         <nav
//             className={`fixed left-1/2  top-4 z-50 w-[60%] -translate-x-1/2 rounded-full bg-[#242425] transition-transform duration-300 ${showNavbar
//                     ? "translate-y-0"
//                     : "-translate-y-[200%]"
//                 }`}
//         >


//         </nav>
//     );
// };

// export default Navbar;

"use client";

import { useEffect, useRef, useState } from "react";
import RotateText from "../animations/RotText";

// Img
import Image from "next/image";
import test from "../../../public/image/img.jpg";
import test1 from "../../../public/image/img2.avif";

// Icons
import { FaHamburger, FaAngleDown } from "react-icons/fa";
import Link from "next/link";

const Navbar = () => {
    const [activeTab, setActiveTab] = useState<string | null>(null);
    const [dropDowner, setDropDowner] = useState(false);

    // Navbar scroll state
    const [showNavbar, setShowNavbar] = useState(true);
    const lastScrollY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Always show navbar at the top
            if (currentScrollY <= 0) {
                setShowNavbar(true);
            }
            // Scrolling up
            else if (currentScrollY < lastScrollY.current) {
                setShowNavbar(true);
            }
            // Scrolling down
            else {
                setShowNavbar(false);
            }

            lastScrollY.current = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div
            className={`
                fixed left-0 top-0 z-50 flex w-full flex-col items-center bg-transparent py-4 transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]
                ${showNavbar
                    ? "translate-y-0"
                    : "-translate-y-full"
                }`}
        >
            {/* <div
                className={`w-[60%] max-xl:w-[70%] max-lg:w-[90%] flex ${
                    activeTab || dropDowner
                        ? "rounded-[0px] rounded-tr-[5px]  rounded-tl-[5px]"
                        : "rounded-[15px]"
                } justify-between items-center pl-6 pr-2 py-3 bg-[#242425] transition-all duration-500`}
            > */}

            <div
                className={`w-[60%] max-xl:w-[70%] max-lg:w-[90%] flex ${showNavbar && !activeTab && !dropDowner
                    ? "rounded-[15px]"
                    : "rounded-[0px] rounded-tr-[5px] rounded-tl-[5px]"
                    } justify-between items-center pl-6 pr-2 py-3 bg-[#242425] transition-[border-radius] duration-1000 transition-all duration-500`}
            >
                {/* Logo */}
                <div className="font-extrabold text-[#F8F4F1] text-2xl select-none">
                    vizcom
                </div>

                {/* Desktop Navigation */}
                <ul className="flex text-sm font-semibold text-[#F8F4F1] gap-6 max-xl:gap-4 max-lg:hidden items-center">
                    <Link href={'/'}>
                        <RotateText
                            text="Home"
                            // subItems={["First", "Second"]}
                            // onHoverStart={() => setActiveTab("Home")}
                            // onHoverEnd={() => setActiveTab(null)}
                        />
                    </Link>

                    <Link href={'/portfolio'}>
                        <RotateText text="Projects" />
                    </Link>

                    <RotateText
                        text="Team"
                        subItems={["First", "Second", "Hasbi rabbi"]}
                        onHoverStart={() => setActiveTab("Team")}
                        onHoverEnd={() => setActiveTab(null)}
                    />

                    <RotateText text="Contact" />

                    <RotateText text="Testimony" />

                    <RotateText text="Programs" />
                </ul>

                {/* Desktop Buttons */}
                <div className="flex gap-2 font-semibold text-sm items-center max-lg:hidden">
                    <button className="text-[#F8F4F1] px-2 py-2">
                        <RotateText text="Login" />
                    </button>

                    <button className="px-4 py-2 bg-[#337DDC] rounded-[10px] text-[#fff]">
                        <RotateText text="Try it Out" />
                    </button>
                </div>

                {/* Mobile Hamburger */}
                <div
                    className="pr-4 hidden max-lg:block"
                    onClick={() => setDropDowner(!dropDowner)}
                >
                    <span className="text-[#fff] text-xl">
                        <FaHamburger />
                    </span>
                </div>
            </div>

            {/* Dropdown / Mega Menu */}
            <div
                className={`w-[60%] max-xl:w-[70%] max-lg:w-[90%] z-10 overflow-hidden transition-all rounded-bl-[5px] rounded-br-[5px] duration-300 ${dropDowner
                    ? "max-h-73 opacity-100"
                    : "max-h-0 opacity-0"
                    } ${activeTab
                        ? "max-h-60 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
            >
                <div
                    className={`bg-[#242425] ${activeTab === "Home" ? "pr-25" : ""
                        } ${activeTab === "Team" ? "pr-5" : ""
                        } pt-5 flex justify-end border border-[#333] h-73 text-xs text-[#EDEAE7] font-medium text-center shadow-xl`}
                >
                    {/* Desktop Dropdown Content */}
                    {activeTab ? (
                        <div className="w-90">
                            <Image
                                src={
                                    activeTab === "Home"
                                        ? test
                                        : test1
                                }
                                width={1920}
                                height={1080}
                                alt="Testimg"
                                className="w-full h-full object-contain"
                            />
                        </div>
                    ) : null}

                    {/* Mobile Dropdown Content */}
                    {dropDowner ? (
                        <div className="w-full flex items-start z-19">
                            <ul className="flex w-full flex-col gap-3 px-4 text-[15px] items-start">
                                <Link href={'/'}>
                                    <li className="py-1.5 cursor-pointer flex w-full items-center justify-between">
                                        Home
                                        <FaAngleDown />
                                    </li>
                                </Link>

                                <Link href={'/portfolio'}>
                                    <li className="py-1.5 cursor-pointer flex w-full items-center justify-between">
                                        Projects
                                    </li>
                                </Link>

                                <li className="py-1.5 cursor-pointer flex w-full items-center justify-between">
                                    Team
                                    <FaAngleDown />
                                </li>

                                <li className="py-1.5 cursor-pointer flex w-full items-center justify-between">
                                    Contact
                                </li>

                                <li className="py-1.5 cursor-pointer flex w-full items-center justify-between">
                                    Testimony
                                </li>

                                <li className="py-1.5 cursor-pointer flex w-full items-center justify-between">
                                    Programs
                                </li>
                            </ul>
                        </div>
                    ) : null}
                </div>
            </div>
        </div>
    );
};

export default Navbar;



