

"use client";

import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
type FAQProps = {
    type: 1 | 2 | 3 | 4;
};

const faqData = {
    1: {
        label: "SEO",
        title: "Frequently asked questions.",
        questions: [
            {
                question: "How long does SEO take to show results?",
                answer:
                    "SEO is a long-term process. The timeline depends on your website, competition, keywords and the work required.",
            },
            {
                question: "Do you provide keyword research?",
                answer:
                    "Yes. Keyword research is part of our SEO process and helps us build content and optimization around relevant search terms.",
            },
            {
                question: "Can you improve my existing website?",
                answer:
                    "Yes. We can review your existing website and identify technical, content and on-page SEO improvements.",
            },
            {
                question: "Do you provide ongoing SEO?",
                answer:
                    "Yes. SEO can be handled as an ongoing service so that performance can be monitored and continuously improved.",
            },
        ],
    },

    2: {
        label: "WEB DEVELOPMENT",
        title: "Frequently asked questions.",
        questions: [
            {
                question: "How long does it take to build a website?",
                answer:
                    "It depends on the size and requirements of the project. After discussing your needs, we can provide a clearer timeline.",
            },
            {
                question: "Can you build a custom website?",
                answer:
                    "Yes. We can build websites around your specific requirements rather than relying only on pre-built templates.",
            },
            {
                question: "Can you redesign my existing website?",
                answer:
                    "Yes. We can improve the structure, design, responsiveness and overall experience of an existing website.",
            },
            {
                question: "Will my website work on mobile?",
                answer:
                    "Yes. Responsive design is considered so the website works across desktop, tablet and mobile devices.",
            },
        ],
    },

    3: {
        label: "DESIGN",
        title: "Frequently asked questions.",
        questions: [
            {
                question: "What type of designs do you create?",
                answer:
                    "We can work on logos, branding assets, social media graphics and other visual materials depending on your requirements.",
            },
            {
                question: "Can I request revisions?",
                answer:
                    "Yes. We can refine the selected design based on your feedback until the direction is ready for final delivery.",
            },
            {
                question: "What files will I receive?",
                answer:
                    "The final file formats depend on the project. We can provide commonly used formats suitable for digital and print use.",
            },
            {
                question: "Can you design something from scratch?",
                answer:
                    "Yes. You can provide your idea, references or requirements and we'll develop the visual direction from there.",
            },
        ],
    },

    4: {
        label: "CONTENT",
        title: "Frequently asked questions.",
        questions: [
            {
                question: "What type of content do you write?",
                answer:
                    "We can create website content, blog articles, product descriptions and other business-focused content based on your needs.",
            },
            {
                question: "Do you research before writing?",
                answer:
                    "Yes. We research the topic, audience and requirements before creating the content.",
            },
            {
                question: "Can you match my brand's tone?",
                answer:
                    "Yes. We can adapt the writing style and tone to fit your brand, audience and communication goals.",
            },
            {
                question: "Can I request changes?",
                answer:
                    "Yes. Feedback can be used to refine the content before the final version is delivered.",
            },
        ],
    },
};

export default function FAQ({ type }: FAQProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const data = faqData[type];

    return (
        <section className="px-6 py-20 md:px-10 lg:px-16">
            <div className="mx-auto ">

                {/* Heading */}
                <div className="mb-12">
                    <p className="mb-4 text-sm font-semibold tracking-[0.18em] text-[#337DDC]">
                        {data.label}
                    </p>

                    <h2 className="text-4xl font-bold tracking-tight text-[#242425] md:text-5xl">
                        {data.title}
                    </h2>
                </div>

                {/* Questions */}
                <div className="border-t border-[#242425]/15">
                    {data.questions.map((item, index) => {
                        const isOpen = openIndex === index;

                        return (
                            <div
                                key={item.question}
                                className="border-b border-[#242425]/15"
                            >
                                <button
                                    onClick={() =>
                                        setOpenIndex(isOpen ? null : index)
                                    }
                                    className="flex w-full items-center justify-between gap-6 py-6 text-left"
                                >
                                    <div className="flex items-start gap-5">
                                        <span className="pt-1 text-sm font-medium text-[#337DDC]">
                                            0{index + 1}
                                        </span>

                                        <span className="text-lg font-semibold text-[#242425] md:text-xl">
                                            {item.question}
                                        </span>
                                    </div>

                                    <span className="shrink-0 text-[#337DDC]">
                                        {isOpen ? (
                                            <FiMinus className="h-5 w-5" />
                                        ) : (
                                            <FiPlus className="h-5 w-5" />
                                        )}
                                    </span>
                                </button>

                                {isOpen && (
                                    <div className="pb-6 pl-12 pr-8">
                                        <p className="max-w-2xl text-base leading-7 text-[#242425]/60">
                                            {item.answer}
                                        </p>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}