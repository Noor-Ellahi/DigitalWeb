
import {
    FaFacebookF,
    FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="mt-20 bg-[#111827] text-white">

            <div className="mx-auto max-w-7xl px-6 py-14 sm:px-10 lg:px-16">

                {/* Footer Links */}
                <div className="grid grid-cols-2 gap-10 md:grid-cols-4">

                    {/* Company */}
                    <div>
                        <h3 className="mb-5 text-sm font-semibold text-white">
                            Company
                        </h3>

                        <ul className="space-y-3 text-sm text-white/50">
                            <li>
                                <a
                                    href="#"
                                    className="transition hover:text-[#337DDC]"
                                >
                                    Home
                                </a>
                            </li>

                            <li>
                                <a
                                    href="/portfolio"
                                    className="transition hover:text-[#337DDC]"
                                >
                                    Portfolio
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    className="transition hover:text-[#337DDC]"
                                >
                                    Team
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Web & App */}
                    <div>
                        <h3 className="mb-5 text-sm font-semibold text-white">
                            Web & App
                        </h3>

                        <ul className="space-y-3 text-sm text-white/50">
                            <li>
                                <a
                                    href="#"
                                    className="transition hover:text-[#337DDC]"
                                >
                                    Web Development
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    className="transition hover:text-[#337DDC]"
                                >
                                    Ecommerce
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    className="transition hover:text-[#337DDC]"
                                >
                                    WordPress Development
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    className="transition hover:text-[#337DDC]"
                                >
                                    Website Management
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Other Services */}
                    <div>
                        <h3 className="mb-5 text-sm font-semibold text-white">
                            Other Services
                        </h3>

                        <ul className="space-y-3 text-sm text-white/50">
                            <li>
                                <a
                                    href="#"
                                    className="transition hover:text-[#337DDC]"
                                >
                                    SEO Management
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    className="transition hover:text-[#337DDC]"
                                >
                                    Content Writing
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    className="transition hover:text-[#337DDC]"
                                >
                                    Logo Design
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    className="transition hover:text-[#337DDC]"
                                >
                                    Graphic Design
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="mb-5 text-sm font-semibold text-white">
                            Contact Us
                        </h3>

                        {/* <a
                            href="#contact"
                            className="inline-flex rounded-full bg-[#337DDC] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#286bc2]"
                        >
                            Start a Project →
                        </a> */}

                        <ul className="space-y-3 text-sm text-white/50">
                            <li>
                                <a
                                    className="transition hover:text-[#337DDC]"
                                >
                                    +928125305356
                                </a>
                            </li>

                            <li>
                                <a
                                    className="transition hover:text-[#337DDC]"
                                >
                                    noorellahi220@gmail.com
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Logo + Socials */}
                <div className="mt-14 flex items-center justify-between border-t border-white/10 pt-8">

                    <div className="text-2xl font-semibold tracking-tight">
                        vizcom
                    </div>

                    <div className="flex items-center gap-3">

                        <a
                            href="#"
                            aria-label="Facebook"
                            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/60 transition hover:border-[#337DDC] hover:bg-[#337DDC] hover:text-white"
                        >
                            <FaFacebookF className="h-3.5 w-3.5" />
                        </a>

                        <a
                            href="#"
                            aria-label="LinkedIn"
                            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/60 transition hover:border-[#337DDC] hover:bg-[#337DDC] hover:text-white"
                        >
                            <FaLinkedinIn className="h-3.5 w-3.5" />
                        </a>

                    </div>

                </div>

                {/* Bottom Footer */}
                <div className="mt-6 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">

                    <div className="flex gap-5">
                        <a
                            href="#"
                            className="transition hover:text-white"
                        >
                            Privacy Policy
                        </a>

                        <a
                            href="#"
                            className="transition hover:text-white"
                        >
                            Terms & Conditions
                        </a>
                    </div>

                    <p>
                        © 2026 Vizcom <span className="mx-1">|</span> All Rights Reserved
                    </p>

                </div>

            </div>
        </footer>
    );
};

export default Footer;

