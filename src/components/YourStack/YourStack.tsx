import { Trash2 } from "lucide-react";
import { toast } from "react-toastify";

import StackItem from "./StackItem";
import type { Technology } from "../../types/technology";

interface YourStackProps {
    stack: Technology[];
    onRemove: (id: string) => void;
    onRemoveAll: () => void;
}

const YourStack = ({
    stack,
    onRemove,
    onRemoveAll,
}: YourStackProps) => {

    const handleRemove = (id: string) => {
        onRemove(id);
        toast.success("Technology removed from stack");
    };

    const handleRemoveAll = () => {
        if (stack.length === 0) return;

        onRemoveAll();
        toast.success("All technologies removed");
    };

    return (
        <aside
            id="stack"
            className="h-fit rounded-2xl border border-gray-200 bg-white p-5 shadow-sm lg:sticky lg:top-24"
        >
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-xl font-bold text-gray-900">
                        Your Stack
                    </h2>

                    <p className="mt-1 text-sm text-gray-500">
                        {stack.length} {stack.length === 1 ? "Technology" : "Technologies"} Selected
                    </p>
                </div>

                {stack.length > 0 && (
                    <button
                        onClick={handleRemoveAll}
                        className="flex items-center gap-1 text-sm font-medium text-red-500 hover:text-red-600"
                    >
                        <Trash2 size={15} />
                        Remove All
                    </button>
                )}
            </div>

            {stack.length === 0 ? (
                <div className="mt-8 rounded-xl bg-gray-50 px-5 py-10 text-center">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white text-2xl shadow-sm">
                        🧰
                    </div>

                    <h3 className="mt-4 font-semibold text-gray-800">
                        Your Stack is Empty
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-gray-500">
                        Add technologies from the list to
                        build your development stack.
                    </p>
                </div>
            ) : (
                <div className="mt-5 flex flex-col gap-3">
                    {stack.map((technology) => (
                        <StackItem
                            key={technology.id}
                            technology={technology}
                            onRemove={handleRemove}
                        />
                    ))}
                </div>
            )}
        </aside>
    );
};

export default YourStack;