import { FaCheck } from "react-icons/fa";

type serviceTier = {
    numbering : string;
}
const Programs = (
    {numbering}: serviceTier
) => {

    const services = [
        {
            id: "web-dev",
            category: "Web Development",
            tiers: {
                basic: {
                    title: "Basic Website Package",
                    price: "$160",
                    bullets: [
                        "1-page professional website",
                        "Responsive across all devices",
                        "Custom branded design",
                        "Contact section included",
                        "Basic SEO setup",
                        "3 days delivery",
                    ],
                },
                standard: {
                    title: "Standard Business Package",
                    price: "$350",
                    bullets: [
                        "Up to 5 pages",
                        "Fully responsive design",
                        "Custom business sections",
                        "Contact form integration",
                        "Performance optimization",
                        "7 days delivery",
                    ],
                },
                premium: {
                    title: "Premium E-Commerce Package",
                    price: "$700",
                    bullets: [
                        "Complete ecommerce website",
                        "Product management system",
                        "Shopping cart functionality",
                        "Payment gateway integration",
                        "Responsive optimized design",
                        "Advanced store functionality",
                    ],
                },
            },
        },

        {
            id: "seo",
            category: "Search Engine Optimization",
            tiers: {
                basic: {
                    title: "SEO Audit & Setup",
                    price: "$100",
                    bullets: [
                        "Complete SEO audit",
                        "Keyword research",
                        "On-page optimization",
                        "Meta tag optimization",
                        "Technical SEO review",
                        "Detailed SEO report",
                    ],
                },
                standard: {
                    title: "Monthly Growth SEO",
                    price: "$250",
                    bullets: [
                        "Monthly keyword research",
                        "On-page SEO improvements",
                        "Competitor analysis",
                        "Content optimization",
                        "Technical SEO monitoring",
                        "Monthly ranking reports",
                    ],
                },
                premium: {
                    title: "Advanced SEO Growth",
                    price: "$500",
                    bullets: [
                        "Complete SEO strategy",
                        "Advanced keyword research",
                        "Competitor strategy analysis",
                        "Technical SEO optimization",
                        "Content growth strategy",
                        "Monthly performance reporting",
                    ],
                },
            },
        },

        {
            id: "content-writing",
            category: "Content Writing",
            tiers: {
                basic: {
                    title: "Starter Content Package",
                    price: "$80",
                    bullets: [
                        "Three website pages",
                        "Original business content",
                        "Basic keyword integration",
                        "Audience-focused writing",
                        "Clear content structure",
                    ],
                },
                standard: {
                    title: "Business Content Package",
                    price: "$180",
                    bullets: [
                        "Up to 8 pages",
                        "SEO-focused content",
                        "Audience research",
                        "Brand voice consistency",
                        "Conversion-focused copy",
                        "Content revisions included",
                    ],
                },
                premium: {
                    title: "Complete Content Strategy",
                    price: "$350",
                    bullets: [
                        "Complete content strategy",
                        "Full website copy",
                        "Advanced keyword research",
                        "Blog content strategy",
                        "Conversion-focused writing",
                        "Ongoing content recommendations",
                    ],
                },
            },
        },

        {
            id: "logo-design",
            category: "Logo Design",
            tiers: {
                basic: {
                    title: "Basic Logo Package",
                    price: "$50",
                    bullets: [
                        "One custom logo",
                        "Business-focused design",
                        "Two design revisions",
                        "High-resolution files",
                        "PNG and JPG formats",
                    ],
                },
                standard: {
                    title: "Professional Logo Package",
                    price: "$100",
                    bullets: [
                        "Three logo concepts",
                        "Custom typography selection",
                        "Unlimited design revisions",
                        "Multiple file formats",
                        "Light and dark versions",
                        "High-resolution exports",
                    ],
                },
                premium: {
                    title: "Complete Brand Identity",
                    price: "$200",
                    bullets: [
                        "Multiple logo concepts",
                        "Primary logo variations",
                        "Complete color palette",
                        "Typography recommendations",
                        "Digital brand assets",
                        "Basic brand guidelines",
                    ],
                },
            },
        },

        {
            id: "graphic-design",
            category: "Graphic Design",
            tiers: {
                basic: {
                    title: "Starter Design Package",
                    price: "$60",
                    bullets: [
                        "Three custom graphics",
                        "Brand-matched visual style",
                        "Social media dimensions",
                        "High-resolution files",
                        "Basic design revisions",
                    ],
                },
                standard: {
                    title: "Business Design Package",
                    price: "$150",
                    bullets: [
                        "Ten custom graphics",
                        "Consistent brand styling",
                        "Social media designs",
                        "Marketing graphics included",
                        "Multiple file formats",
                        "Design revisions included",
                    ],
                },
                premium: {
                    title: "Complete Design Package",
                    price: "$300",
                    bullets: [
                        "Twenty-plus custom graphics",
                        "Social media graphics",
                        "Marketing campaign designs",
                        "Advertising graphics included",
                        "Multiple platform dimensions",
                        "Priority design revisions",
                    ],
                },
            },
        },

        {
            id: "wordpress",
            category: "WordPress Development",
            tiers: {
                basic: {
                    title: "WordPress Starter",
                    price: "$150",
                    bullets: [
                        "Up to 3 pages",
                        "Responsive WordPress design",
                        "Custom theme styling",
                        "Contact form integration",
                        "Basic SEO configuration",
                        "WordPress dashboard setup",
                    ],
                },
                standard: {
                    title: "WordPress Business",
                    price: "$300",
                    bullets: [
                        "Up to 7 pages",
                        "Custom theme design",
                        "Contact form integration",
                        "SEO configuration",
                        "Performance optimization",
                        "Mobile responsive design",
                    ],
                },
                premium: {
                    title: "Advanced WordPress",
                    price: "$550",
                    bullets: [
                        "Complete custom website",
                        "Advanced website functionality",
                        "Custom business features",
                        "Performance optimization",
                        "SEO-friendly structure",
                        "Complete WordPress setup",
                    ],
                },
            },
        },

        {
            id: "website-management",
            category: "Website Management",
            tiers: {
                basic: {
                    title: "Basic Website Care",
                    price: "$50/mo",
                    bullets: [
                        "Regular content updates",
                        "Basic plugin updates",
                        "Monthly website checks",
                        "Minor content changes",
                        "Basic issue monitoring",
                    ],
                },
                standard: {
                    title: "Business Website Care",
                    price: "$120/mo",
                    bullets: [
                        "Regular website updates",
                        "Plugin maintenance",
                        "Performance monitoring",
                        "Security maintenance",
                        "Minor website fixes",
                        "Priority technical support",
                    ],
                },
                premium: {
                    title: "Complete Website Management",
                    price: "$250/mo",
                    bullets: [
                        "Complete website maintenance",
                        "Security monitoring",
                        "Performance monitoring",
                        "Content updates",
                        "Technical troubleshooting",
                        "Priority support",
                    ],
                },
            },
        },

        {
            id: "ecommerce",
            category: "E-Commerce Sites",
            tiers: {
                basic: {
                    title: "Starter Online Store",
                    price: "$300",
                    bullets: [
                        "Up to 10 products",
                        "Responsive store design",
                        "Product category setup",
                        "Shopping cart functionality",
                        "Basic checkout configuration",
                        "Essential store settings",
                    ],
                },
                standard: {
                    title: "Business E-Commerce",
                    price: "$550",
                    bullets: [
                        "Up to 50 products",
                        "Custom ecommerce design",
                        "Shopping cart system",
                        "Payment gateway integration",
                        "Product management",
                        "Order management system",
                    ],
                },
                premium: {
                    title: "Advanced E-Commerce",
                    price: "$900",
                    bullets: [
                        "Complete ecommerce website",
                        "Advanced product management",
                        "Payment integration",
                        "Customer management system",
                        "Custom store functionality",
                        "Performance optimization",
                    ],
                },
            },
        },

        {
            id: "website-design",
            category: "Website Designing",
            tiers: {
                basic: {
                    title: "Basic UI Design",
                    price: "$120",
                    bullets: [
                        "One-page website design",
                        "Modern visual layout",
                        "Responsive design",
                        "Clear visual hierarchy",
                        "Basic design system",
                    ],
                },
                standard: {
                    title: "Business UI Design",
                    price: "$250",
                    bullets: [
                        "Up to 5 pages",
                        "Custom UI design",
                        "Responsive layouts",
                        "Custom visual styling",
                        "Consistent design system",
                        "Design revisions included",
                    ],
                },
                premium: {
                    title: "Complete Website Design",
                    price: "$450",
                    bullets: [
                        "Complete website interface",
                        "Custom design system",
                        "Desktop and mobile layouts",
                        "Advanced visual sections",
                        "Interactive prototype",
                        "Multiple design revisions",
                    ],
                },
            },
        },

        {
            id: "portfolio",
            category: "Portfolio Development",
            tiers: {
                basic: {
                    title: "Starter Portfolio",
                    price: "$120",
                    bullets: [
                        "Single-page portfolio",
                        "About and skills sections",
                        "Responsive design",
                        "Project showcase",
                        "Contact section",
                    ],
                },
                standard: {
                    title: "Professional Portfolio",
                    price: "$250",
                    bullets: [
                        "Multi-page portfolio",
                        "Project showcase sections",
                        "Detailed case studies",
                        "Responsive website design",
                        "Contact form integration",
                        "Basic SEO setup",
                    ],
                },
                premium: {
                    title: "Premium Portfolio",
                    price: "$400",
                    bullets: [
                        "Fully customized portfolio",
                        "Advanced project presentation",
                        "Custom animations",
                        "Responsive performance",
                        "CMS integration",
                        "Professional deployment",
                    ],
                },
            },
        },
    ];

    return (
        <section className="px-5 py-24 pt-5 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-7xl">

                {/* Programs heading */}
                <div className="mb-10">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#337DDC]">
                        Programs
                    </p>

                    <h2 className="max-w-3xl text-4xl font-bold tracking-[-0.03em] text-gray-950 sm:text-5xl">
                        Choose a program that{" "}
                        <span className="font-semibold text-gray-400">
                            fits your needs.
                        </span>
                    </h2>

                    <p className="mt-4 max-w-xl text-sm leading-6 text-gray-500">
                        Flexible packages designed to give your business
                        exactly what it needs to move forward.
                    </p>
                </div>

                {/* Pricing cards */}
                <div className="grid grid-cols-1 gap-5 md:grid-cols-3">

                    {/* Basic */}
                    <div className="group rounded-2xl border border-gray-300 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gray-400 hover:shadow-lg">

                        <p className="text-sm font-semibold tracking-tight text-gray-900">
                            Basic plan
                        </p>

                        <h3 className="mt-4 text-4xl font-bold tracking-[-0.04em] text-gray-950">
                            {services[Number(numbering)].tiers.basic.price}
                        </h3>

                        <p className="mt-2 text-xs font-medium leading-5 text-gray-500">
                            {services[Number(numbering)].tiers.basic.title}
                        </p>

                        <button className="mt-6 w-full rounded-lg border border-gray-200 bg-gray-100 py-2.5 text-xs font-semibold text-gray-700 shadow-sm transition-all duration-300 hover:border-gray-300 hover:bg-gray-200 hover:shadow-md">
                            Get started
                        </button>

                        <div className="my-7 border-t border-dashed border-gray-200" />

                        <p className="text-[14px] font-bold uppercase tracking-[0.12em] text-gray-900">
                            Features
                        </p>

                        <ul className="mt-5 space-y-3.5">
                            {services[Number(numbering)].tiers.premium.bullets.map((item, index) => (
                                <li
                                    key={index}
                                    className="flex items-center gap-2.5 text-[12px] font-medium leading-5 text-gray-600 transition-colors duration-200 group-hover:text-gray-700"
                                >
                                    <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-green-600 text-green-600">
                                        <FaCheck className="h-2 w-2" />
                                    </span>

                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Standard */}
                    <div className="group relative rounded-2xl border border-gray-300 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#337DDC]/40 hover:shadow-lg">

                        <div className="flex items-center justify-between gap-3">
                            <p className="text-sm font-semibold tracking-tight text-gray-900">
                                Business plan
                            </p>

                            <span className="rounded-md border border-[#337DDC]/10 bg-[#337DDC]/10 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wide text-[#337DDC]">
                                Most popular
                            </span>
                        </div>

                        <h3 className="mt-4 text-4xl font-bold tracking-[-0.04em] text-gray-950">
                            {services[Number(numbering)].tiers.standard.price}
                        </h3>

                        <p className="mt-2 text-xs font-medium leading-5 text-gray-500">
                            {services[Number(numbering)].tiers.standard.title}
                        </p>

                        <button className="mt-6 w-full rounded-lg bg-gray-950 py-2.5 text-xs font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-black hover:shadow-lg">
                            Get started
                        </button>

                        <div className="my-7 border-t border-dashed border-gray-200" />

                        <p className="text-[14px] font-bold uppercase tracking-[0.12em] text-gray-900">
                            Features
                        </p>

                        <ul className="mt-5 space-y-3.5">
                            {services[Number(numbering)].tiers.premium.bullets.map((item, index) => (
                                <li
                                    key={index}
                                    className="flex items-center gap-2.5 text-[12px] font-medium leading-5 text-gray-600 transition-colors duration-200 group-hover:text-gray-700"
                                >
                                    <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-green-600 text-green-600">
                                        <FaCheck className="h-2 w-2" />
                                    </span>

                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Premium */}
                    <div className="group rounded-2xl border border-gray-300 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gray-400 hover:shadow-lg">

                        <p className="text-sm font-semibold tracking-tight text-gray-900">
                            Enterprise plan
                        </p>

                        <h3 className="mt-4 text-4xl font-bold tracking-[-0.04em] text-gray-950">
                            {services[Number(numbering)].tiers.premium.price}
                        </h3>

                        <p className="mt-2 text-xs font-medium leading-5 text-gray-500">
                            {services[Number(numbering)].tiers.premium.title}
                        </p>

                        <button className="mt-6 w-full rounded-lg bg-gray-950 py-2.5 text-xs font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-black hover:shadow-lg">
                            Get started
                        </button>

                        <div className="my-7 border-t border-dashed border-gray-200" />

                        <p className="text-[14px] font-bold uppercase tracking-[0.12em] text-gray-900">
                            Features
                        </p>

                        <ul className="mt-5 space-y-3.5">
                            {services[Number(numbering)].tiers.premium.bullets.map((item, index) => (
                                <li
                                    key={index}
                                    className="flex items-center gap-2.5 text-[12px] font-medium leading-5 text-gray-600 transition-colors duration-200 group-hover:text-gray-700"
                                >
                                    <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-green-600 text-green-600">
                                        <FaCheck className="h-2 w-2" />
                                    </span>

                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Programs