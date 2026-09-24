
'use client'
import { useState } from "react"


const Pricing = () => {

    const [priceSection, setPriceSection] = useState(0)


    const pricingData = [
        {
            id: 0,
            categoryName: "SEO Management",
            tiers: [
                {
                    title: "Local Growth",
                    price: "$499 / mo",
                    popular: false,
                    buttonText: "Start Local Campaign",
                    bullets: [
                        "5 Target Keywords",
                        "Google Business Profile Setup",
                        "On-Page SEO Optimization",
                        "Monthly Reporting Dashboard"
                    ]
                },
                {
                    title: "National Authority",
                    price: "$1,299 / mo",
                    popular: true,
                    buttonText: "Scale My Rankings",
                    bullets: [
                        "25 Target Keywords",
                        "Technical SEO Architecture Audit",
                        "Competitor Backlink Analysis",
                        "2 Quality Guest Posts / month"
                    ]
                },
                {
                    title: "Enterprise Custom",
                    price: "Contact Us",
                    popular: false,
                    buttonText: "Request Custom Proposal",
                    bullets: [
                        "Unlimited Keywords",
                        "Dedicated SEO Strategist",
                        "Custom Content Integration",
                        "Priority Developer Support"
                    ]
                }
            ]
        },
        {
            id: 1,
            categoryName: "Content Writing",
            tiers: [
                {
                    title: "Essential Pack",
                    price: "$350 / mo",
                    popular: false,
                    buttonText: "Get Started",
                    bullets: [
                        "4 SEO-Optimized Articles (1k words)",
                        "In-Depth Keyword Research",
                        "1 Round of Revisions per post",
                        "Royalty-Free Stock Images"
                    ]
                },
                {
                    title: "Authority Builder",
                    price: "$799 / mo",
                    popular: true,
                    buttonText: "Build My Brand",
                    bullets: [
                        "8 Premium Articles (1.5k words)",
                        "Competitor Gap Analysis",
                        "Unlimited Design Revisions",
                        "CMS Direct Publishing"
                    ]
                },
                {
                    title: "Enterprise Scale",
                    price: "Contact Us",
                    popular: false,
                    buttonText: "Request Content Strategy",
                    bullets: [
                        "Dedicated Content Editor",
                        "High-Volume Content Output",
                        "Custom Topic Ideation Pipelines",
                        "Full SEO Keyword Clusters"
                    ]
                }

            ]
        },
        {
            id: 2,
            categoryName: "Web Development",
            tiers: [
                {
                    title: "Business Launch",
                    price: "$1,499",
                    popular: false,
                    buttonText: "Launch My Site",
                    bullets: [
                        "5 Custom Designed Pages",
                        "Mobile & Tablet Responsive",
                        "Basic SEO & Speed Setup",
                        "30 Days Post-Launch Support"
                    ]
                },
                {
                    title: "Custom E-Commerce",
                    price: "$3,499",
                    popular: true,
                    buttonText: "Build My Store",
                    bullets: [
                        "Advanced Product System",
                        "Secure Payment Integration",
                        "Tailored CMS Platform",
                        "90 Days Premium Maintenance"
                    ]
                },
                {
                    title: "Enterprise Custom",
                    price: "Contact Us",
                    popular: false,
                    buttonText: "Get an Estimate",
                    bullets: [
                        "Custom API Integrations",
                        "Dedicated Tech Stack Architecture",
                        "Advanced Security Auditing",
                        "Continuous Dev Dedicated Hours"
                    ]
                }

            ]
        },
        {
            id: 3,
            categoryName: "Logo & Brand Design",
            tiers: [
                {
                    title: "Core Identity",
                    price: "$299",
                    popular: false,
                    buttonText: "Start Designing",
                    bullets: [
                        "3 Unique Logo Concepts",
                        "Primary Brand Color Palette",
                        "Essential Typography Rules",
                        "High-Res Export Files"
                    ]
                },
                {
                    title: "Complete Brand Kit",
                    price: "$699",
                    popular: true,
                    buttonText: "Build My Identity",
                    bullets: [
                        "5 Custom Logo Variations",
                        "Brand Guideline Book",
                        "Social Media Graphics Kit",
                        "Business Card Mockups"
                    ]
                },
                {
                    title: "Full Corporate Identity",
                    price: "$1,499",
                    popular: false,
                    buttonText: "Transform My Brand",
                    bullets: [
                        "Complete UI Component System",
                        "Trademark-Ready Vector Clearances",
                        "Marketing Asset Master Templates",
                        "Unlimited Revision Concept Cycles"
                    ]
                }
            ]
        }
    ];


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
            {/* <div>
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
            </div> */}
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-6">
                <div className="flex justify-center border-b border-gray-100 pb-px overflow-x-auto scrollbar-none max-w-full">
                    <ul className="flex items-center gap-1 sm:gap-2 whitespace-nowrap px-2">
                        {
                            ['SEO Management', "Content Writing", "Web Development", "Logo Design"].map((it, ind) => {
                                const isActive = priceSection === ind;
                                return (
                                    <li
                                        key={ind}
                                        onClick={() => setPriceSection(ind)}
                                        className={`group relative cursor-pointer px-4 py-3 text-sm sm:text-base font-semibold tracking-tight transition-all duration-300 select-none ${isActive
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

            {/* Cards */}
            <div className="mx-auto mt-12 max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 justify-center items-stretch">
                    {pricingData[priceSection]?.tiers.map((tier, index) => {
                        return (
                            <div
                                key={index}
                                className={`group relative flex flex-col justify-between rounded-2xl border bg-white p-6 transition-all duration-300 hover:-translate-y-1 ${tier.popular
                                    ? "border-[#337DDC] shadow-lg shadow-[#337DDC]/5"
                                    : "border-gray-200 hover:border-[#337DDC]/40 hover:shadow-lg hover:shadow-gray-200/55"
                                    }`}
                            >
                                {/* Popular Badge Anchor */}
                                {tier.popular && (
                                    <span className="absolute -top-3 right-6 rounded-full bg-[#337DDC] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
                                        Popular
                                    </span>
                                )}

                                <div>
                                    {/* Title & Price Header */}
                                    <div className="mb-6 flex items-baseline justify-between border-b border-gray-100 pb-4">
                                        <h3 className="text-lg font-bold tracking-tight text-gray-900">
                                            {tier.title}
                                        </h3>
                                        <span className="text-xl font-bold text-[#337DDC]">
                                            {tier.price}
                                        </span>
                                    </div>

                                    {/* Scannable Feature List */}
                                    <ul className="space-y-3 mb-8">
                                        {tier.bullets.map((bullet, bulletIdx) => (
                                            <li key={bulletIdx} className="flex items-start gap-2.5 text-sm text-gray-600 leading-normal">
                                                <svg
                                                    className="h-4 w-4 mt-0.5 shrink-0 text-[#337DDC]"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth="2.5"
                                                    stroke="currentColor"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                                </svg>
                                                <span>{bullet}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Action Call to Action Button */}
                                <button
                                    className={`w-full rounded-xl py-3 text-sm font-semibold transition-all duration-200 ${tier.popular
                                        ? "bg-[#337DDC] text-white hover:bg-[#2864b3] shadow-md shadow-[#337DDC]/20"
                                        : "bg-[#337DDC]/10 text-[#337DDC] hover:bg-[#337DDC] hover:text-white"
                                        }`}
                                >
                                    {/* {tier.buttonText} */}
                                    Get Started
                                </button>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}



export default Pricing