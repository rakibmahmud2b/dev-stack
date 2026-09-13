import {
    ExternalLink,
    Globe,
    Mail,
} from "lucide-react";

const Footer = () => {
    return (
        <footer
            id="contact"
            className="bg-gray-950 text-gray-300"
        >
            <div className="container mx-auto px-4 py-14">

                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">

                    {/* Brand */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl gradient-bg font-bold text-white">
                                DS
                            </div>

                            <span className="text-2xl font-bold text-white">
                                Dev Stack
                            </span>
                        </div>

                        <p className="mt-5 max-w-sm leading-7 text-gray-400">
                            Discover modern technologies and build
                            the perfect development stack for your
                            next project.
                        </p>

                        <div className="mt-6 flex gap-3">
                            <a
                                href="#"
                                className="rounded-full bg-gray-800 p-2.5 transition hover:bg-pink-600"
                            >
                                <Globe size={18} />
                            </a>

                            <a
                                href="#"
                                className="rounded-full bg-gray-800 p-2.5 transition hover:bg-pink-600"
                            >
                                <Mail size={18} />
                            </a>

                            <a
                                href="#"
                                className="rounded-full bg-gray-800 p-2.5 transition hover:bg-pink-600"
                            >
                                <ExternalLink size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Product */}
                    <div>
                        <h3 className="font-semibold text-white">
                            Product
                        </h3>

                        <ul className="mt-5 space-y-3 text-sm">
                            <li>Technologies</li>
                            <li>Projects</li>
                            <li>Features</li>
                            <li>Pricing</li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div id="about">
                        <h3 className="font-semibold text-white">
                            Company
                        </h3>

                        <ul className="mt-5 space-y-3 text-sm">
                            <li>About</li>
                            <li>Contact</li>
                            <li>Careers</li>
                            <li>Blog</li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h3 className="font-semibold text-white">
                            Legal
                        </h3>

                        <ul className="mt-5 space-y-3 text-sm">
                            <li>Privacy</li>
                            <li>Terms</li>
                            <li>Security</li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 flex flex-col justify-between gap-4 border-t border-gray-800 pt-6 text-sm text-gray-500 sm:flex-row">
                    <p>
                        © 2026 Dev Stack. All rights reserved.
                    </p>

                    <div className="flex gap-5">
                        <a href="#" className="hover:text-white">
                            Privacy
                        </a>

                        <a href="#" className="hover:text-white">
                            Terms
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;