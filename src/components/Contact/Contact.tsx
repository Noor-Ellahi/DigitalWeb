



import { FaChevronDown, FaArrowRight } from "react-icons/fa";


const services = [
    "Web Development",
    "SEO Management",
    "Content Writing",
    "Logo Design",
    "Graphic Design",
    "WordPress Development",
    "Website Management",
    "Ecommerce Sites",
    "Website Designing",
    "Portfolio Development",
];

const Contact = () => {
    return (
        <section className="mt-24 px-4 pb-20 sm:px-8 lg:px-12">
            <div className=" xl:mx-10 max-w-7xl">

                {/* Heading */}
                <div className="mb-12">
                    <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-[#337DDC]">
                        Contact Us
                    </p>

                    <h2 className="max-w-3xl text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                        Have a project in mind?
                        <br />
                        <span className="text-gray-400">
                            Let's make it happen.
                        </span>
                    </h2>

                    <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
                        Tell us a little about your project, and we'll get
                        back to you to discuss your ideas, requirements,
                        and how we can help.
                    </p>
                </div>

                {/* Form */}
                <form className="space-y-6">

                    {/* Name + Email */}
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

                        <div>
                            <label className="mb-2 block text-sm font-medium text-gray-700">
                                Name
                            </label>

                            <input
                                type="text"
                                placeholder="Your name"
                                className="w-full rounded-xl border border-gray-300 bg-transparent px-5 py-4 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-[#337DDC]"
                            />
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-medium text-gray-700">
                                Email
                            </label>

                            <input
                                type="email"
                                placeholder="you@example.com"
                                className="w-full rounded-xl border border-gray-300 bg-transparent px-5 py-4 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-[#337DDC]"
                            />
                        </div>

                    </div>

                    {/* Phone + Service */}
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

                        <div>
                            <label className="mb-2 block text-sm font-medium text-gray-700">
                                Phone
                            </label>

                            <input
                                type="tel"
                                placeholder="+92 300 0000000"
                                className="w-full rounded-xl border border-gray-300 bg-transparent px-5 py-4 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-[#337DDC]"
                            />
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-medium text-gray-700">
                                I'm interested in
                            </label>

                            <div className="relative">
                                <select
                                    defaultValue=""
                                    className="w-full appearance-none rounded-xl border border-gray-300 bg-transparent px-5 py-4 text-sm text-gray-900 outline-none transition focus:border-[#337DDC]"
                                >
                                    <option value="" disabled>
                                        Select a service
                                    </option>

                                    {services.map((service) => (
                                        <option key={service} value={service}>
                                            {service}
                                        </option>
                                    ))}
                                </select>

                                <FaChevronDown className="pointer-events-none absolute right-5 top-1/2 h-3 w-3 -translate-y-1/2 text-gray-400" />
                            </div>
                        </div>

                    </div>

                    {/* Project */}
                    <div>
                        <label className="mb-2 block text-sm font-medium text-gray-700">
                            Talk about your project
                        </label>

                        <textarea
                            rows={7}
                            placeholder="Tell us about your project, requirements, goals, timeline..."
                            className="w-full resize-none rounded-xl border border-gray-300 bg-transparent px-5 py-4 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-[#337DDC]"
                        />
                    </div>

                    {/* Submit */}
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="group inline-flex items-center gap-3 rounded-[3px] bg-[#337DDC] px-7 py-3.5 text-sm font-medium text-white transition hover:bg-[#286bc2]"
                        >
                            Send Inquiry

                            <FaArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
                        </button>
                    </div>

                </form>
            </div>
        </section>
    );
};

export default Contact

