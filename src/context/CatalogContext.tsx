"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import { categories, products, type Product } from "@/data/products";

export type CategoryValue = "Tutti" | (typeof categories)[number];

type CatalogContextValue = {
  query: string;
  setQuery: (value: string) => void;
  category: CategoryValue;
  setCategory: (value: CategoryValue) => void;
  filtered: Product[];
  counts: Record<CategoryValue, number>;
};

const CatalogContext = createContext<CatalogContextValue | null>(null);

const normalize = (s: string) =>
  s.normalize("NFD").replace(/\p{Diacritic}/gu, "").toLowerCase().trim();

export function CatalogProvider({ children }: { children: ReactNode }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<CategoryValue>("Tutti");

  const searched = products.filter((p) =>
    normalize(p.name).includes(normalize(query))
  );

  const filtered =
    category === "Tutti"
      ? searched
      : searched.filter((p) => p.category === category);

  const counts = {
    Tutti: searched.length,
    ...Object.fromEntries(
      categories.map((c) => [c, searched.filter((p) => p.category === c).length])
    ),
  } as Record<CategoryValue, number>;

  return (
    <CatalogContext.Provider
      value={{ query, setQuery, category, setCategory, filtered, counts }}
    >
      {children}
    </CatalogContext.Provider>
  );
}

export function useCatalog() {
  const ctx = useContext(CatalogContext);
  if (!ctx) throw new Error("useCatalog debe usarse dentro de <CatalogProvider>");
  return ctx;
}