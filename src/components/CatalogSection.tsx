"use client";

import CategoryFilter from "@/components/CategoryFilter";
import ProductGrid from "@/components/ProductGrid";
import { useCatalog } from "@/context/CatalogContext";

export default function CatalogSection() {
  const { filtered } = useCatalog();

  return (
    <section id="test" className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <h2 className="mb-6 text-3xl font-bold text-ink">I nostri prodotti</h2>
      <CategoryFilter />
      <ProductGrid items={filtered} />
    </section>
  );
}