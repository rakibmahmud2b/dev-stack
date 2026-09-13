import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import TechnologyCard from "./TechnologyCard";
import YourStack from "../YourStack/YourStack";
import type { Technology } from "../../types/technology";

interface TechnologiesProps {
    stack: Technology[];
    onAddToStack: (technology: Technology) => void;
    onRemove: (id: string) => void;
    onRemoveAll: () => void;
}

const Technologies = ({
    stack,
    onAddToStack,
    onRemove,
    onRemoveAll,
}: TechnologiesProps) => {
    const [technologies, setTechnologies] = useState<Technology[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadTechnologies = async () => {
            try {
                setLoading(true);

                const response = await fetch("/technologies.json");

                if (!response.ok) {
                    throw new Error("Failed to load technologies");
                }

                const data: Technology[] = await response.json();

                setTechnologies(data);
            } catch (error) {
                console.error(error);

                toast.error("Failed to load technologies");
            } finally {
                setLoading(false);
            }
        };

        loadTechnologies();
    }, []);

    const handleAdd = (technology: Technology) => {
        onAddToStack(technology);
    };

    return (
        <section
            id="technologies"
            className="bg-gray-50 py-20"
        >
            <div className="container mx-auto px-4">

                <div className="mb-10 text-center">
                    <p className="font-semibold text-pink-600">
                        TECHNOLOGIES
                    </p>

                    <h2 className="mt-2 text-3xl font-black text-gray-900 sm:text-4xl">
                        Explore Our{" "}
                        <span className="brand-gradient">
                            Technology Stack
                        </span>
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl text-gray-600">
                        Choose the technologies that match your project
                        and create your ideal development stack.
                    </p>
                </div>

                {loading ? (
                    <div className="flex min-h-75 items-center justify-center">
                        <div className="text-center">
                            <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-pink-600"></div>

                            <p className="mt-4 font-medium text-gray-600">
                                Loading technologies...
                            </p>
                        </div>
                    </div>
                ) : (
                    <div className="grid gap-6 lg:grid-cols-[1fr_320px]">

                        {/* Technology Grid */}
                        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                            {technologies.map((technology) => (
                                <TechnologyCard
                                    key={technology.id}
                                    technology={technology}
                                    isAdded={stack.some(
                                        (item) =>
                                            item.id === technology.id
                                    )}
                                    onAdd={handleAdd}
                                />
                            ))}
                        </div>

                        <YourStack
                            stack={stack}
                            onRemove={onRemove}
                            onRemoveAll={onRemoveAll}
                        />
                    </div>
                )}
            </div>
        </section>
    );
};

export default Technologies;