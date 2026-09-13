import { X } from "lucide-react";
import type { Technology } from "../../types/technology";

interface StackItemProps {
    technology: Technology;
    onRemove: (id: string) => void;
}

const StackItem = ({
    technology,
    onRemove,
}: StackItemProps) => {
    return (
        <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-3">

            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gray-50 p-2">
                <img
                    src={technology.icon}
                    alt={technology.name}
                    className="h-full w-full object-contain"
                />
            </div>

            <div className="min-w-0 flex-1">
                <h4 className="truncate font-semibold text-gray-800">
                    {technology.name}
                </h4>

                <p className="text-xs text-gray-500">
                    {technology.category}
                </p>
            </div>

            <button
                onClick={() => onRemove(technology.id)}
                className="rounded-full p-1.5 text-gray-400 transition hover:bg-red-50 hover:text-red-500"
                aria-label={`Remove ${technology.name}`}
            >
                <X size={17} />
            </button>
        </div>
    );
};

export default StackItem;