"use client";

import { FiArrowUpRight, FiArrowRight } from "react-icons/fi";

type MoreServicesProps = {
    type: 1 | 2 | 3 | 4;
};

const serviceData = {
    1: {
        services: [
            {
                title: "WordPress Development",
                description: "Flexible websites built around your needs.",
            },
            {
                title: "Content Writing",
                description: "Clear content created for your audience.",
            },
            {
                title: "Website Management",
                description: "Keep your website updated and running smoothly.",
            },
            {
                title: "Ecommerce Websites",
                description: "Online stores built to support your business.",
            },
        ],
    },

    2: {
        services: [
            {
                title: "SEO",
                description: "Improve your visibility and reach online.",
            },
            {
                title: "WordPress Development",
                description: "Flexible websites built around your needs.",
            },
            {
                title: "Content Writing",
                description: "Clear content created for your audience.",
            },
            {
                title: "Website Management",
                description: "Keep your website updated and running smoothly.",
            },
        ],
    },

    3: {
        services: [
            {
                title: "Graphic Design",
                description: "Visuals that give your brand a stronger identity.",
            },
            {
                title: "Website Designing",
                description: "Clean interfaces designed around your brand.",
            },
            {
                title: "Content Writing",
                description: "Clear content created for your audience.",
            },
            {
                title: "Ecommerce Websites",
                description: "Online stores built to support your business.",
            },
        ],
    },

    4: {
        services: [
            {
                title: "SEO",
                description: "Improve your visibility and reach online.",
            },
            {
                title: "Website Designing",
                description: "Clean interfaces designed around your brand.",
            },
            {
                title: "WordPress Development",
                description: "Flexible websites built around your needs.",
            },
            {
                title: "Ecommerce Websites",
                description: "Online stores built to support your business.",
            },
        ],
    },
};

export default function MoreServices({ type }: MoreServicesProps) {
    const data = serviceData[type];

    return (
        <section className="px-2 max-sm:px-0 py-12 md:px-7.5 lg:px-16">
            <div className="mx-auto max-w-7xl max-md:px-6 max-sm:px-4 max-md:py-10 ">

                {/* Header */}
                <div className="mb-10 max-w-3xl">
                    <p className="mb-3 text-sm font-semibold tracking-[0.18em] text-[#337DDC]">
                        MORE FROM US
                    </p>

                    <h2 className="text-4xl font-bold leading-[1.05] tracking-tight text-[#242425] md:text-5xl lg:text-6xl">
                        One project often needs{" "}
                        <span className="text-[#337DDC]">
                            more than one service.
                        </span>
                    </h2>

                    <p className="mt-5 max-w-xl text-base leading-7 text-[#242425]/50">
                        Explore more ways our team can help bring your digital goals
                        together.
                    </p>
                </div>

                {/* Services */}
                <div className="border-t border-[#242425]/10">
                    {data.services.map((service, index) => (
                        <a
                            href="#"
                            key={service.title}
                            className="group flex items-center gap-5 border-b border-[#242425]/10 py-7 transition-all duration-300 hover:px-3"
                        >
                            <span className="w-8 shrink-0 text-sm font-medium text-[#337DDC]">
                                0{index + 1}
                            </span>

                            <div className="flex-1">
                                <h3 className="text-xl font-semibold tracking-tight text-[#242425] transition-colors duration-300 group-hover:text-[#337DDC] md:text-2xl">
                                    {service.title}
                                </h3>

                                <p className="mt-1 hidden text-sm text-[#242425]/45 sm:block">
                                    {service.description}
                                </p>
                            </div>

                            <FiArrowUpRight className="h-6 w-6 shrink-0 text-[#242425]/30 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[#337DDC]" />
                        </a>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-8 flex flex-col justify-between gap-5 rounded-2xl border border-[#242425]/10 bg-white p-5 sm:flex-row sm:items-center sm:px-6">
                    <div>
                        <p className="text-lg font-semibold text-[#242425]">
                            Not sure what you need?
                        </p>

                        <p className="mt-1 text-sm text-[#242425]/45">
                            Let’s figure it out together.
                        </p>
                    </div>

                    <a
                        href="/contact"
                        className="group flex w-fit items-center gap-2 rounded-full bg-[#337DDC] px-5 py-2.5 text-sm font-semibold text-white transition-transform duration-300 hover:scale-[1.03]"
                    >
                        Talk to us
                        <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                </div>

            </div>
        </section>
    );
}