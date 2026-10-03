type HowItWorksProps = {
    type: 1 | 2 | 3 | 4;
};

const serviceSteps = {
    1: {
        label: "SEO",
        intro: "Turn your online presence into measurable growth.",
        steps: [
            ["01", "DISCOVER", "We understand your goals and current position."],
            ["02", "STRATEGIZE", "We research keywords and build your SEO plan."],
            ["03", "OPTIMIZE", "We improve your website and content."],
            ["04", "GROW", "We track results and continuously improve."],
        ],
    },

    2: {
        label: "WEB DEVELOPMENT",
        intro: "From an idea to a website that is ready to launch.",
        steps: [
            ["01", "DISCOVER", "We understand your idea and requirements."],
            ["02", "DESIGN", "We shape the structure and visual direction."],
            ["03", "BUILD", "We develop, test and refine your website."],
            ["04", "LAUNCH", "Your website goes live and ready for users."],
        ],
    },

    3: {
        label: "DESIGN",
        intro: "Turn your ideas into a visual identity people remember.",
        steps: [
            ["01", "DISCOVER", "We understand your brand and vision."],
            ["02", "CONCEPT", "We explore ideas and creative directions."],
            ["03", "REFINE", "We polish the chosen direction together."],
            ["04", "DELIVER", "You receive your final design files."],
        ],
    },

    4: {
        label: "CONTENT WRITING",
        intro: "Content that communicates clearly and gets your message across.",
        steps: [
            ["01", "DISCOVER", "We understand your audience and goals."],
            ["02", "RESEARCH", "We gather the information your content needs."],
            ["03", "WRITE", "We create clear, purposeful content."],
            ["04", "DELIVER", "Your polished content is ready to use."],
        ],
    },
};

export default function HowItWorks({ type }: HowItWorksProps) {
    const service = serviceSteps[type];

    return (
        <section className="px-6 py-20 md:px-10 lg:px-16">
            <div className="mx-auto max-w-7xl">

                {/* Header */}
                <div className="mb-16">
                    <p className="mb-4 text-sm font-semibold tracking-[0.18em] text-[#337DDC]">
                        HOW IT WORKS
                    </p>

                    <h2 className="max-w-3xl text-4xl font-bold leading-[1.05] tracking-tight text-[#242425] md:text-6xl">
                        From idea to{" "}
                        <span className="text-[#337DDC]">finished work.</span>
                    </h2>

                    <p className="mt-5 max-w-xl text-lg leading-7 text-[#242425]/60">
                        {service.intro}
                    </p>
                </div>

                {/* Process */}
                <div className="grid gap-0 border-t border-[#242425]/15 md:grid-cols-4">
                    {service.steps.map(([number, title, description], index) => (
                        <div
                            key={number}
                            className={`group relative py-8 md:pr-8 ${index !== 0
                                    ? "border-t border-[#242425]/15 md:border-l md:border-t-0 md:pl-8"
                                    : ""
                                }`}
                        >
                            {/* Number */}
                            <div className="mb-10 text-5xl font-bold tracking-tight text-[#337DDC] transition-transform duration-300 group-hover:-translate-y-1 md:text-6xl">
                                {number}
                            </div>

                            {/* Step */}
                            <h3 className="text-xl font-bold tracking-tight text-[#242425] md:text-2xl">
                                {title}
                            </h3>

                            <p className="mt-3 max-w-xs text-base leading-6 text-[#242425]/60">
                                {description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}