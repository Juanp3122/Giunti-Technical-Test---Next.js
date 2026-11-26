import Image from "next/image";
import type { Format, Product } from "@/data/products";

// Formato italiano: 1.250,00 €
const euro = new Intl.NumberFormat("it-IT", {
  style: "currency",
  currency: "EUR",
});

// timeZone UTC evita desfases de día entre servidor y navegador
const dateFmt = new Intl.DateTimeFormat("it-IT", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

const badgeStyles: Record<Format, string> = {
  Cartaceo: "bg-white text-primary",
  Digitale: "bg-accent text-white",
  "Corso online": "bg-primary text-white",
  "In presenza": "bg-ink text-white",
};

function ProductCard({ p }: { p: Product }) {
  const discount = Math.round((1 - p.discountPrice / p.price) * 100);

  return (
<li className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-xl border border-primary/10 bg-white shadow-sm transition duration-300 hover:border-accent/50 hover:shadow-xl motion-safe:hover:-translate-y-1">      {/* Imagen + badge de formato */}
      <div className="relative aspect-[16/10] overflow-hidden bg-surface">
        <Image
          src={p.image}
          alt={`Immagine di ${p.name}`}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 motion-safe:group-hover:scale-105"
        />
        <span
          className={`absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-semibold shadow-sm ${badgeStyles[p.format]}`}
        >
          {p.format}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-semibold leading-snug text-ink">
          {p.name}
        </h3>
        <p className="mt-1 text-sm text-ink/70">{p.author}</p>

        {/* Edad (tests) o fecha de inicio (cursos) */}
        <p className="mt-3 text-sm font-medium text-primary">
          {p.kind === "test" ? (
            <>Età: {p.ageRange}</>
          ) : (
            <>
              Inizio:{" "}
              <time dateTime={p.startDate}>
                {dateFmt.format(new Date(p.startDate))}
              </time>
            </>
          )}
        </p>

        {/* Precios */}
        <div className="mt-4 flex flex-wrap items-baseline gap-x-2">
          <span className="text-xl font-bold text-ink">
            {euro.format(p.discountPrice)}
          </span>
          <s className="text-sm text-ink/50">{euro.format(p.price)}</s>
          <span className="rounded bg-accent/15 px-1.5 py-0.5 text-xs font-semibold text-primary">
            -{discount}%
          </span>
        </div>

        {/* Botón: mt-auto lo mantiene al fondo aunque cambie la altura del texto */}
        <button
          type="button"
          className="mt-5 w-full rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          {p.kind === "test" ? "Aggiungi al carrello" : "Scopri di più"}
        </button>
      </div>
    </li>
  );
}

export default function ProductGrid({ items }: { items: Product[] }) {
  if (items.length === 0) {
    return (
      <p className="py-16 text-center text-ink/60">
        Nessun prodotto trovato.
      </p>
    );
  }

  return (
    <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {items.map((p) => (
        <ProductCard key={p.id} p={p} />
      ))}
    </ul>
  );
}