import { useState } from "react";
import { Menu, X } from "lucide-react";
import logoText from "../../assets/logo-text.png";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const navLinks = [
        { label: "Home", target: "home" },
        { label: "Technologies", target: "technologies" },
        { label: "Your Stack", target: "stack" },
        { label: "About", target: "about" },
        { label: "Contact", target: "contact" },
    ];

    return (
        <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur">
            <nav className="container mx-auto px-4">

                {/* Desktop Navbar */}
                <div className="hidden h-20 items-center justify-between lg:flex">

                    <a
                        href="#home"
                        className="flex items-center gap-3"
                    >
                        <img
                            src={logoText}
                            alt="Dev Stack Logo"
                            className="h-8 w-auto object-contain"
                        />
                    </a>

                    <ul className="flex items-center gap-8">
                        {navLinks.map((link) => (
                            <li key={link.target}>
                                <a
                                    href={`#${link.target}`}
                                    className="text-sm font-medium text-gray-700 transition hover:text-pink-600"
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <div className="flex items-center gap-3">
                        <button className="px-4 py-2 font-medium text-gray-700 hover:text-pink-600">
                            Sign In
                        </button>

                        <button className="rounded-full gradient-bg px-6 py-2.5 font-semibold text-white shadow-md transition hover:scale-105">
                            Sign Up
                        </button>
                    </div>
                </div>

                {/* Mobile Navbar */}
                <div className="flex h-16 items-center justify-between lg:hidden">

                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="rounded-lg p-2 text-gray-700"
                    >
                        {menuOpen ? (
                            <X size={24} />
                        ) : (
                            <Menu size={24} />
                        )}
                    </button>

                    <a
                        href="#home"
                        className="flex items-center"
                    >
                        <img
                            src={logoText}
                            alt="Dev Stack Logo"
                            className="h-7 w-auto object-contain"
                        />
                    </a>

                    <div className="flex items-center gap-1">
                        <button className="px-2 py-1 text-xs font-medium">
                            Sign In
                        </button>

                        <button className="rounded-full gradient-bg px-3 py-1.5 text-xs font-semibold text-white">
                            Sign Up
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {menuOpen && (
                    <div className="border-t border-gray-200 py-4 lg:hidden">
                        <ul className="flex flex-col gap-3">
                            {navLinks.map((link) => (
                                <li key={link.target}>
                                    <a
                                        onClick={() => setMenuOpen(false)}
                                        href={`#${link.target}`}
                                        className="block rounded-lg px-3 py-2 font-medium hover:bg-gray-100"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Navbar;