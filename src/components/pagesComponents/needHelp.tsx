import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const NeedHelp = () => {
    return (
        <section className="px-5 py-5 sm:px-8 lg:px-12">
            <div className="mx-auto flex min-h-[100px] max-w-7xl items-center justify-between gap-10 border-y border-gray-300 py-6">

                {/* Title */}
                <div>
                    <p className="text-3xl font-semibold tracking-tight text-[#000] sm:text-4xl">
                        Need Help?
                    </p>

                    <p className="mt-1 text-sm text-gray-500">
                        We&apos;re here to help you get started.
                    </p>
                </div>

                {/* Contact Info */}
                <ul className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-8">

                    <li className="flex items-center gap-3 text-sm font-medium text-gray-700">
                        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-[#337DDC]">
                            <FaPhoneAlt className="h-3 w-3" />
                        </span>
                        <span>+92 300 0000000</span>
                    </li>

                    <li className="flex items-center gap-3 text-sm font-medium text-gray-700">
                        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-[#337DDC]">
                            <FaEnvelope className="h-3 w-3" />
                        </span>
                        <span>hello@vizcom.com</span>
                    </li>

                </ul>
            </div>
        </section>
    );
};

export default NeedHelp;