import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
    return (
        <section
            id="home"
            className="overflow-hidden bg-white"
        >
            <div className="container mx-auto grid min-h-162.5 items-center gap-12 px-4 py-16 lg:grid-cols-2 lg:py-20">

                {/* Content */}
                <div>
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-pink-200 bg-pink-50 px-4 py-2 text-sm font-medium text-pink-600">
                        <Sparkles size={16} />
                        Build Your Perfect Stack
                    </div>

                    <h1 className="max-w-2xl text-4xl font-black leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
                        Build Your Ideal{" "}
                        <span className="brand-gradient">
                            Development Stack
                        </span>
                    </h1>

                    <p className="mt-6 max-w-xl text-base leading-8 text-gray-600 sm:text-lg">
                        Discover the best technologies for modern web
                        development. Explore, compare, and build your
                        perfect technology stack.
                    </p>

                    <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                        <a
                            href="#technologies"
                            className="flex items-center justify-center gap-2 rounded-full gradient-bg px-7 py-3.5 font-semibold text-white shadow-lg transition hover:-translate-y-1"
                        >
                            Explore Technologies
                            <ArrowRight size={18} />
                        </a>

                        <a
                            href="#about"
                            className="rounded-full border border-gray-300 px-7 py-3.5 text-center font-semibold text-gray-700 transition hover:border-pink-500 hover:text-pink-600"
                        >
                            Learn More
                        </a>
                    </div>
                </div>

                {/* Image */}
                <div className="relative flex justify-center">
                    <div className="absolute h-72 w-72 rounded-full bg-pink-200/40 blur-3xl"></div>

                    <img
                        src="/hero-image.png"
                        alt="Developer illustration"
                        className="relative z-10 w-full max-w-lg object-contain"
                        onError={(e) => {
                            e.currentTarget.style.display = "none";
                        }}
                    />

                    {/* Fallback visual */}
                    <div className="relative z-10 flex h-80 w-full max-w-lg items-center justify-center rounded-3xl bg-linear-to-br from-orange-100 via-pink-100 to-purple-100">
                        <div className="text-center">
                            <div className="mx-auto mb-5 flex h-24 w-24 items-center justify-center rounded-3xl gradient-bg text-3xl font-black text-white shadow-xl">
                                {"</>"}
                            </div>

                            <h3 className="text-2xl font-bold text-gray-800">
                                Modern Tech Stack
                            </h3>

                            <p className="mt-2 text-gray-600">
                                Build • Learn • Create
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;