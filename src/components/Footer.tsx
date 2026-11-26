import Link from "next/link";
import Image from "next/image";

const navItems = [
  { label: "Test", href: "#test" },
  { label: "Formazione", href: "#formazione" },
  { label: "Risorse", href: "#risorse" },
  { label: "Contatti", href: "#contatti" },
];

// Iconos placeholder: sustituye los href por los perfiles reales
const socials = [
  {
    label: "LinkedIn",
    href: "#",
    path: "M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3a1.97 1.97 0 1 0 0 3.94 1.97 1.97 0 0 0 0-3.94ZM20.44 13.2c0-3.1-1.65-4.9-4.3-4.9-1.4 0-2.5.6-3.1 1.5V8.5H9.7V20h3.38v-6.1c0-1.6.6-2.7 2-2.7 1.3 0 1.9.9 1.9 2.7V20h3.46v-6.8Z",
  },
  {
    label: "Facebook",
    href: "#",
    path: "M13.5 21v-8h2.7l.4-3.2h-3.1V7.8c0-.9.3-1.5 1.6-1.5h1.7V3.4c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.1v2.4H7.7V13h2.7v8h3.1Z",
  },
  {
    label: "Instagram",
    href: "#",
    path: "M7.5 3h9A4.5 4.5 0 0 1 21 7.5v9a4.5 4.5 0 0 1-4.5 4.5h-9A4.5 4.5 0 0 1 3 16.5v-9A4.5 4.5 0 0 1 7.5 3Zm0 1.8a2.7 2.7 0 0 0-2.7 2.7v9a2.7 2.7 0 0 0 2.7 2.7h9a2.7 2.7 0 0 0 2.7-2.7v-9a2.7 2.7 0 0 0-2.7-2.7h-9ZM12 7.6a4.4 4.4 0 1 1 0 8.8 4.4 4.4 0 0 1 0-8.8Zm0 1.8a2.6 2.6 0 1 0 0 5.2 2.6 2.6 0 0 0 0-5.2Zm4.7-2.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z",
  },
  {
    label: "YouTube",
    href: "#",
    path: "M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 0 0 2.4 7.2C2 8.8 2 12 2 12s0 3.2.4 4.8a2.5 2.5 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8c.4-1.6.4-4.8.4-4.8s0-3.2-.4-4.8ZM10 15V9l5.2 3L10 15Z",
  },
];

export default function Footer() {
  const year = 2026

  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          {/* Logo + descripción */}
          <div className="max-w-sm">
            <Link href="/" aria-label="Giunti Psychometrics - Home" className="inline-flex items-center">
              <Image
                src="/logo.png"
                alt="Giunti Psychometrics"
                width={180}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              Test, scale e formazione per la valutazione psicologica e il
              lavoro dei professionisti.
            </p>
          </div>

          {/* Navegación */}
          <nav aria-label="Footer">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-white">
              Naviga
            </h2>
            <ul className="mt-4 space-y-2">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/70 transition-colors hover:text-accent"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Redes sociales */}
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-white">
              Seguici
            </h2>
            <ul className="mt-4 flex gap-3">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    aria-label={s.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/80 transition-colors hover:border-accent hover:bg-accent hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                  >
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      className="h-5 w-5"
                      fill="currentColor"
                    >
                      <path d={s.path} />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 border-t border-white/15 pt-6 text-center text-sm text-white/60 md:text-left">
          © {year} Giunti Psychometrics. Tutti i diritti riservati.
        </div>
      </div>
    </footer>
  );
}