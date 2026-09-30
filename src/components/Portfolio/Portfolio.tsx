
'use client'

// Imgs
import Image from "next/image"
import bg from "../../../public/image/portimg1.jpg"

// Imports
import { usePathname } from "next/navigation"
import { useState } from "react"







const Porfolio = () => {

    const pathName = usePathname()

    // States
    const [portSection, setPortSection] = useState(0)


    const section = [
        {
            id: 0,
            catgoryName: "WebApp",
            tiers: [
                {
                    title: "Eco-story",
                    work: "E-commerce",
                    imgUrl: "/image/section6.jpg"
                },
                {
                    title: "Eco-story",
                    work: "E-commerce",
                    imgUrl: "/image/section2.avif"
                },
                {
                    title: "Eco-story",
                    work: "E-commerce",
                    imgUrl: "/image/section1.avif"
                },
                {
                    title: "Eco-story",
                    work: "E-commerce",
                    imgUrl: "/image/section6.jpg"
                },
                {
                    title: "Eco-story",
                    work: "E-commerce",
                    imgUrl: "/image/section2.avif"
                },
                {
                    title: "Eco-story",
                    work: "E-commerce",
                    imgUrl: "/image/section1.avif"
                }
            ]
        },
        {
            id: 1,
            category: "Logos",
            tiers: [
                {
                    title: "",
                    work: "",
                    imgUrl: "/image/logo1.avif"
                },
                {
                    title: "",
                    work: "",
                    imgUrl: "/image/logo2.png"
                },
                {
                    title: "",
                    work: "",
                    imgUrl: "/image/logo3.jpg"
                },
                {
                    title: "",
                    work: "",
                    imgUrl: "/image/logo4.webp"
                },
                {
                    title: "",
                    work: "",
                    imgUrl: "/image/logo5.jpg"
                },
                {
                    title: "",
                    work: "",
                    imgUrl: "/image/logo6.jpg"
                },
            ]
        }

    ]


    return (
        <div className="my-20">
            <div className="mb-12 px-20 max-lg:px-10 max-md:px-5">
                <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-[#337DDC]">
                    Portfolio
                </p>

                <h2 className="max-w-2xl text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                    Projects we've built for various industries.
                </h2>
            </div>


            {
                pathName === '/' ?
                    <div className="mx-20 max-lg:mx-10 max-md:mx-5 overflow-hidden ">
                        <div className="relative min-h-[420px]">

                            {/* Background image */}
                            <Image
                                className=" w-full h-full object-cover z-[-1] absolute"
                                alt="bgImg"
                                width={1920}
                                height={1080}
                                src={bg}
                            />


                            <div className="absolute z-[-1] inset-0 bg-black/20" />

                            {/* dark overlay */}

                            <div className="relative z-10 flex min-h-[420px] items-center justify-center px-6 text-center text-white">
                                <div className="max-w-2xl">
                                    <h3 className="text-4xl font-semibold">
                                        Take a Look at Our Work
                                    </h3>

                                    <p className="mt-4 text-white/75">
                                        From websites and ecommerce platforms to creative digital experiences,
                                        explore the projects we've built and see how we turn ideas into solutions
                                        that help businesses grow and stand out online.
                                    </p>


                                    <button className="mt-7 rounded-full bg-white px-7 py-3 text-sm font-medium text-black transition hover:bg-white/90">
                                        View Our Work →
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div> :
                    <div>
                        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-6">
                            <div className="flex justify-center border-b border-gray-100 pb-px overflow-x-auto scrollbar-none max-w-full">
                                <ul className="flex items-center gap-1 sm:gap-2 whitespace-nowrap px-2">
                                    {
                                        ['SEO Management', "Content Writing", "Web Development", "Logo Design"].map((it, ind) => {
                                            const isActive = portSection === ind;
                                            return (
                                                <li
                                                    key={ind}
                                                    onClick={() => setPortSection(ind)}
                                                    className={`group relative  cursor-pointer px-4 py-3 text-sm sm:text-base font-semibold tracking-tight transition-all duration-300 select-none ${isActive
                                                        ? "text-gray-900"
                                                        : "text-gray-400 hover:text-gray-600"
                                                        }`}
                                                >
                                                    <span>{it}</span>

                                                    <span
                                                        className={`absolute bottom-0 left-0 h-[2.5px] bg-[#337DDC] transition-all duration-300 rounded-full ${isActive
                                                            ? "w-full opacity-100"
                                                            : "w-0 opacity-0 group-hover:w-1/2 group-hover:opacity-50 left-1/2 -translate-x-1/2"
                                                            }`}
                                                    ></span>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>

                        <div className="py-15 px-10">
                            <div className="grid grid-cols-3 gap-5">
                                {
                                    section[portSection]?.tiers.map((it, ind) => {
                                        return (
                                            <div key={ind} className="relative group bg-gray-900 h-70 overflow-hidden">
                                                <Image
                                                    className="w-full object-cover  group-hover:opacity-20 transition-all h-full duration-300 group-hover:scale-115"
                                                    src={it.imgUrl}
                                                    width={1920}
                                                    height={1080}
                                                    alt="projectImg"
                                                />

                                                <div className="flex absolute inset-0 text-[#fff] items-center justify-center flex-col opacity-0 group-hover:opacity-90 transition-opacity duration-300">
                                                    <h1 className="text-3xl transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 delay-100 font-bold">{it.title}</h1>
                                                    <p className="text-[15px] transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 delay-150">{it.work}</p>
                                                </div>


                                            </div>


                                        )
                                    })
                                }

                            </div>

                        </div>





                    </div>

            }
        </div>
    )
}

export default Porfolio