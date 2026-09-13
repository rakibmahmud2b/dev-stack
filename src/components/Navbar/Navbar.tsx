import { useState } from "react";
import { Menu, X } from "lucide-react";

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
        <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
            <nav className="container mx-auto px-4">

                {/* Desktop Navbar */}
                <div className="hidden h-20 items-center justify-between lg:flex">

                    {/* Logo */}
                    <a
                        href="#home"
                        className="flex items-center gap-3"
                    >
                        <div className="gradient-bg flex h-10 w-10 items-center justify-center rounded-xl text-xl font-bold text-white">
                            DS
                        </div>

                        <span className="brand-gradient text-2xl font-extrabold">
                            Dev Stack
                        </span>
                    </a>

                    {/* Navigation */}
                    <ul className="flex items-center gap-8">
                        {navLinks.map((link) => (
                            <li key={link.target}>
                                <a
                                    href={`#${link.target}`}
                                    className="text-sm font-medium text-slate-700 transition hover:text-indigo-600"
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Auth Buttons */}
                    <div className="flex items-center gap-3">
                        <button className="px-4 py-2 font-medium text-slate-700 transition hover:text-indigo-600">
                            Sign In
                        </button>

                        <button className="gradient-bg rounded-full px-6 py-2.5 font-semibold text-white shadow-md transition hover:scale-105">
                            Sign Up
                        </button>
                    </div>
                </div>

                {/* Mobile Navbar */}
                <div className="flex h-16 items-center justify-between lg:hidden">

                    {/* Menu Button */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="rounded-lg p-2 text-slate-700 transition hover:bg-slate-100"
                    >
                        {menuOpen ? (
                            <X size={24} />
                        ) : (
                            <Menu size={24} />
                        )}
                    </button>

                    {/* Mobile Logo */}
                    <a
                        href="#home"
                        className="brand-gradient text-xl font-extrabold"
                    >
                        DS
                    </a>

                    {/* Mobile Auth */}
                    <div className="flex items-center gap-1">
                        <button className="px-2 py-1 text-xs font-medium text-slate-700">
                            Sign In
                        </button>

                        <button className="gradient-bg rounded-full px-3 py-1.5 text-xs font-semibold text-white">
                            Sign Up
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {menuOpen && (
                    <div className="border-t border-slate-200 py-4 lg:hidden">
                        <ul className="flex flex-col gap-3">
                            {navLinks.map((link) => (
                                <li key={link.target}>
                                    <a
                                        onClick={() => setMenuOpen(false)}
                                        href={`#${link.target}`}
                                        className="block rounded-lg px-3 py-2 font-medium text-slate-700 transition hover:bg-indigo-50 hover:text-indigo-600"
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