import { Check, Star } from "lucide-react";
import type { Technology } from "../../types/technology";

interface TechnologyCardProps {
    technology: Technology;
    isAdded: boolean;
    onAdd: (technology: Technology) => void;
}

const TechnologyCard = ({
    technology,
    isAdded,
    onAdd,
}: TechnologyCardProps) => {
    return (
        <article className="group rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">

            <div className="flex items-start justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gray-50 p-3">
                    <img
                        src={technology.icon}
                        alt={technology.name}
                        className="h-full w-full object-contain"
                    />
                </div>

                <span className="rounded-full bg-pink-50 px-3 py-1 text-xs font-semibold text-pink-600">
                    {technology.badge}
                </span>
            </div>

            <h3 className="mt-5 text-xl font-bold text-gray-900">
                {technology.name}
            </h3>

            <p className="mt-2 min-h-18 text-sm leading-6 text-gray-600">
                {technology.description}
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
                    {technology.category}
                </span>

                <span className="rounded-full bg-purple-50 px-3 py-1 text-xs font-medium text-purple-600">
                    {technology.difficulty}
                </span>
            </div>

            <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-4">
                <div className="flex items-center gap-1">
                    <Star
                        size={17}
                        className="fill-yellow-400 text-yellow-400"
                    />

                    <span className="font-semibold text-gray-800">
                        {technology.rating}
                    </span>
                </div>

                <button
                    disabled={isAdded}
                    onClick={() => onAdd(technology)}
                    className={`rounded-full px-4 py-2 text-sm font-semibold transition ${isAdded
                        ? "cursor-not-allowed bg-green-100 text-green-600"
                        : "gradient-bg text-white hover:scale-105"
                        }`}
                >
                    {isAdded ? (
                        <span className="flex items-center gap-1">
                            <Check size={16} />
                            Added to Stack
                        </span>
                    ) : (
                        "Add to Stack"
                    )}
                </button>
            </div>
        </article>
    );
};

export default TechnologyCard;