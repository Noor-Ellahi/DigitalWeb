// import {
//     Code2,
//     Search,
//     PenLine,
//     Palette,
//     Image,
//     Globe,
//     Settings,
//     ShoppingCart,
//     Layout,
//     UserRound,
// } from "lucide-react";

import {
    FaReact,
    FaSearch,
    FaPenNib,
    FaPalette,
    FaWordpress,
    FaShoppingCart,
    FaCode,
    FaImage,
    FaCog,
    FaGlobe,
    FaUser,
} from "react-icons/fa";

const services = [
    {
        number: "01",
        icon: FaReact,
        title: "Web Development",
        description: "Fast, modern websites built around your business.",
    },
    {
        number: "02",
        icon: FaSearch,
        title: "SEO Management",
        description: "Improve your visibility and reach the right audience.",
    },
    {
        number: "03",
        icon: FaPenNib,
        title: "Content Writing",
        description: "Clear and engaging content that speaks to your audience.",
    },
    {
        number: "04",
        icon: FaPalette,
        title: "Logo Design",
        description: "Distinctive logos that give your brand an identity.",
    },
    {
        number: "05",
        icon: FaImage,
        title: "Graphic Design",
        description: "Visual designs made to communicate and stand out.",
    },
    {
        number: "06",
        icon: FaWordpress,
        title: "WordPress Development",
        description: "Flexible WordPress websites that are easy to manage.",
    },
    {
        number: "07",
        icon: FaCog,
        title: "Website Management",
        description: "Keep your website updated, secure, and running smoothly.",
    },
    {
        number: "08",
        icon: FaShoppingCart,
        title: "Ecommerce Sites",
        description: "Online stores designed to turn visitors into customers.",
    },
    {
        number: "09",
        icon: FaGlobe,
        title: "Website Designing",
        description: "Clean interfaces designed around your users.",
    },
    {
        number: "10",
        icon: FaUser,
        title: "Portfolio Development",
        description: "Professional portfolios that showcase your work.",
    },
];

// const services = [
//     {
//         number: "01",
//         icon: Code2,
//         title: "Web Development",
//         description: "Fast, modern websites built around your business.",
//     },
//     {
//         number: "02",
//         icon: Search,
//         title: "SEO Management",
//         description: "Improve your visibility and reach the right audience.",
//     },
//     {
//         number: "03",
//         icon: PenLine,
//         title: "Content Writing",
//         description: "Clear and engaging content that speaks to your audience.",
//     },
//     {
//         number: "04",
//         icon: Palette,
//         title: "Logo Design",
//         description: "Distinctive logos that give your brand an identity.",
//     },
//     {
//         number: "05",
//         icon: Image,
//         title: "Graphic Design",
//         description: "Visual designs made to communicate and stand out.",
//     },
//     {
//         number: "06",
//         icon: Globe,
//         title: "WordPress Development",
//         description: "Flexible WordPress websites that are easy to manage.",
//     },
//     {
//         number: "07",
//         icon: Settings,
//         title: "Website Management",
//         description: "Keep your website updated, secure, and running smoothly.",
//     },
//     {
//         number: "08",
//         icon: ShoppingCart,
//         title: "Ecommerce Sites",
//         description: "Online stores designed to turn visitors into customers.",
//     },
//     {
//         number: "09",
//         icon: Layout,
//         title: "Website Designing",
//         description: "Clean interfaces designed around your users.",
//     },
//     {
//         number: "10",
//         icon: UserRound,
//         title: "Portfolio Development",
//         description: "Professional portfolios that showcase your work.",
//     },
// ];

const Services = () => {
    return (
        <section className="bg-white px-5 py-24 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-7xl">

                {/* Heading */}
                <div className="mb-12">
                    <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-[#337DDC]">
                        What we offer
                    </p>

                    <h2 className="max-w-2xl text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                        Everything you need to build your digital presence.
                    </h2>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
                    {services.map((service) => {
                        const Icon = service.icon;

                        return (
                            <div
                                key={service.number}
                                className="group relative min-h-[190px] rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#337DDC]/40 hover:shadow-lg hover:shadow-gray-200/50"
                            >
                                <div className="mb-8 flex items-start justify-between">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#337DDC]/10 text-[#337DDC] transition-colors duration-300 group-hover:bg-[#337DDC] group-hover:text-white">
                                        <Icon className="h-5 w-5" />
                                    </div>

                                    <span className="text-xs font-medium text-gray-400">
                                        {service.number}
                                    </span>
                                </div>

                                <h3 className="text-lg font-semibold text-gray-900">
                                    {service.title}
                                </h3>

                                <p className="mt-2 max-w-[260px] text-sm leading-6 text-gray-500">
                                    {service.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Services;