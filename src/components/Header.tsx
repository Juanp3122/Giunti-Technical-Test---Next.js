"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useCatalog } from "@/context/CatalogContext";
import Image from "next/image";

const navItems = [
    { label: "Test", href: "#test" },
    { label: "Formazione", href: "#formazione" },
    { label: "Risorse", href: "#risorse" },
    { label: "Contatti", href: "#contatti" },
];

export default function Header() {
    const { query, setQuery } = useCatalog();
    const [open, setOpen] = useState(false);

    // Cierra el menú con Escape
    useEffect(() => {
        if (!open) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") setOpen(false);
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [open]);

    return (
        <header className="sticky top-0 z-50 border-b border-primary/15 bg-white/90 backdrop-blur">
            <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-8 gap-y-3 px-4 py-3 sm:px-6">
                {/* Logo */}
                <Link href="/" aria-label="Giunti Psychometrics - Home" className="flex items-center">
                    <Image
                        src="/logo.png"
                        alt="Giunti Psychometrics"
                        width={180}
                        height={40}
                        priority
                        className="h-9 w-auto sm:h-10"
                    />
                </Link>

                {/* Botón hamburguesa (solo móvil) */}
                <button
                    type="button"
                    onClick={() => setOpen((v) => !v)}
                    aria-expanded={open}
                    aria-controls="mobile-menu"
                    aria-label={open ? "Chiudi il menu" : "Apri il menu"}
                    className="ml-auto flex h-10 w-10 items-center justify-center rounded-md text-ink transition-colors hover:bg-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent md:hidden"
                >
                    <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                    >
                        {open ? (
                            <path d="M6 6l12 12M18 6 6 18" />
                        ) : (
                            <path d="M4 7h16M4 12h16M4 17h16" />
                        )}
                    </svg>
                </button>

                {/* Navegación desktop */}
                <nav aria-label="Principale" className="hidden md:block">
                    <ul className="flex items-center gap-6">
                        {navItems.map((item) => (
                            <li key={item.label}>
                                <Link
                                    href={item.href}
                                    className="border-b-2 border-transparent pb-0.5 text-sm font-medium text-ink/70 transition-colors hover:border-accent hover:text-primary"
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Navegación móvil (desplegable) */}
                {open && (
                    <nav
                        id="mobile-menu"
                        aria-label="Principale"
                        className="w-full rounded-lg border border-primary/10 bg-white md:hidden"
                    >
                        <ul className="divide-y divide-primary/10">
                            {navItems.map((item) => (
                                <li key={item.label}>
                                    <Link
                                        href={item.href}
                                        onClick={() => setOpen(false)}
                                        className="block px-4 py-3 text-base font-medium text-ink transition-colors hover:bg-surface hover:text-primary"
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                )}

                {/* Buscador + botón */}
                <div className="ml-auto flex w-full items-center gap-3 md:w-auto">
                    <div className="relative flex-1 md:w-64 md:flex-none">
                        <svg
                            aria-hidden="true"
                            viewBox="0 0 24 24"
                            className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-primary/60"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                        >
                            <circle cx="11" cy="11" r="7" />
                            <path d="m20 20-3.5-3.5" />
                        </svg>
                        <input
                            type="search"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Cerca un prodotto..."
                            aria-label="Cerca un prodotto"
                            className="w-full rounded-full border border-primary/25 bg-surface py-2 pl-9 pr-4 text-sm text-ink outline-none transition placeholder:text-ink/50 focus:border-accent focus:bg-white focus:ring-2 focus:ring-accent/30"
                        />
                    </div>

                    <button
                        type="button"
                        className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                    >
                        Accedi
                    </button>
                </div>
            </div>
        </header>
    );
}