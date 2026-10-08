


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
    const [dropOne, setDropOne] = useState(false)
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

                    <RotateText

                        text="Programs"
                        subItems={["web-development", "wordpress", "web-design", "logo-design"]}
                        sub2Items={["SEO", "Ecommerce", "Graphic-design", "content-writing"]}
                        onHoverStart={() => setActiveTab("Team")}
                        onHoverEnd={() => setActiveTab(null)}
                    />

                    <Link href={'/portfolio'}>
                        <RotateText text="Portfolio" />
                    </Link>



                    <RotateText text="Contact" />

                    <RotateText text="Testimony" />

                    {/* <RotateText text="Programs" /> */}
                </ul>

                {/* Desktop Buttons */}
                <div className="flex gap-2 font-semibold text-sm items-center max-lg:hidden">
                    {/* <button className="text-[#F8F4F1] px-2 py-2">
                        <RotateText text="Login" />
                    </button> */}

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
                    ? "max-h-73 opacity-100 "
                    : "max-h-0 opacity-0"
                    } ${activeTab
                        ? "max-h-60 opacity-100"
                        : "max-h-0 opacity-0"
                    }
                    ${dropOne ? "max-h-80" : ""}
                    `}
            >
                <div
                    className={`bg-[#242425] ${activeTab === "Home" ? "pr-25" : ""
                        } ${activeTab === "Team" ? "pr-5" : ""
                        } pt-5 flex justify-end border border-[#333]  h-65 ${dropOne ? "h-80" : ""} text-xs text-[#EDEAE7] font-medium text-center shadow-xl`}
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
                                <Link href={'/'} className="w-full">
                                    <li className="py-1.5 cursor-pointer flex w-full items-center justify-between">
                                        Home
                                    </li>
                                </Link>

                                <Link href={'/portfolio'} className="w-full">
                                    <li className="py-1.5 cursor-pointer flex w-full items-center justify-between">
                                        Projects
                                    </li>
                                </Link>


                                <li className={`py-1.5 cursor-pointer flex flex-col w-full relative overflow-hidden`}>
                                    <div onClick={() => setDropOne(!dropOne)} className="flex w-full items-center justify-between">
                                        Programs
                                        <FaAngleDown />
                                    </div>
                                    <ul className={`${dropOne ? "h-20 px-5 py-3 max-sm:px-0" : "h-0 opacity-0 pointer-events-none  "} transition-all flex justify-between  capatalize  w-full`}>
                                        <div className="flex items-start flex-col gap-2 cursor-pointer text-[14px] font-medium tracking-wide text-zinc-400 hover:text-zinc-100">
                                            <Link href="/services/web-development"><li>Web-development</li></Link>
                                            <Link href="/services/wordpress-development"><li>Wordpress</li></Link>
                                            <Link href="/services/website-designing"><li>web-design</li></Link>
                                        </div>
                                        <div className="flex items-start flex-col gap-2 cursor-pointer text-[14px] font-medium tracking-wide text-zinc-400 hover:text-zinc-100">
                                            <Link href="/services/logo-design"><li>logo-design</li></Link>
                                            <Link href="/services/seo-management"><li>SEO</li></Link>
                                            <Link href="/services/ecommerce-sites"><li>Ecommerce</li></Link>
                                        </div>
                                        <div className="flex items-start flex-col gap-2 cursor-pointer text-[14px] font-medium tracking-wide text-zinc-400 hover:text-zinc-100">
                                            <Link href="/services/graphic-design"><li>Graphic-design</li></Link>
                                            <Link href="/services/content-writing"><li>content-writing</li></Link>
                                        </div>
                                    </ul>
                                </li>


                                {/* <li className="py-1.5 cursor-pointer flex w-full items-center justify-between">
                                    Team
                                    <FaAngleDown />
                                </li> */}

                                <li className="py-1.5 cursor-pointer flex w-full items-center justify-between">
                                    Contact
                                </li>

                                <li className="py-1.5 cursor-pointer flex w-full items-center justify-between">
                                    Testimony
                                </li>

                                {/* <li className="py-1.5 cursor-pointer flex w-full items-center justify-between">
                                    Programs
                                </li> */}
                            </ul>
                        </div>
                    ) : null}
                </div>
            </div>
        </div>
    );
};

export default Navbar;



