"use client";

import { categories } from "@/data/products";
import { useCatalog, type CategoryValue } from "@/context/CatalogContext";

const options: CategoryValue[] = ["Tutti", ...categories];

export default function CategoryFilter() {
    const { category: selected, setCategory: onSelect, counts } = useCatalog();
    return (
        <div
            role="group"
            aria-label="Filtra per categoria"
            className="mb-8 flex flex-wrap gap-2"
        >
            {options.map((option) => {
                const active = option === selected;
                return (
                    <button
                        key={option}
                        type="button"
                        aria-pressed={active}
                        onClick={() => onSelect(option)}
                        className={`flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${active
                                ? "border-primary bg-primary text-white"
                                : "border-primary/25 bg-white text-ink hover:border-accent hover:text-primary"
                            }`}
                    >
                        {option}
                        <span
                            className={`rounded-full px-2 py-0.5 text-xs ${active ? "bg-white/20 text-white" : "bg-surface text-primary"
                                }`}
                        >
                            {counts[option]}
                        </span>
                    </button>
                );
            })}
        </div>
    );
}