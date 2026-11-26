import Image from "next/image";

export default function Hero() {
  return (
    <section className="border-b border-primary/10 bg-surface"> 
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-2 lg:gap-14">
        {/* Texto */}
        <div className="max-w-2xl">
          <span className="inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
            Test psicologici e valutazione
          </span>

          <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-ink sm:text-5xl xl:text-6xl">
            Strumenti affidabili per
            <span className="text-primary"> comprendere la persona</span>
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-ink/70">
            Test, scale e questionari validati scientificamente per psicologi,
            clinici e professionisti delle risorse umane. Dalla valutazione
            cognitiva alla personalità, tutto in un unico catalogo.
          </p>
        </div>

        {/* Imagen con gradiente */}
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-accent shadow-xl">
          <Image
            src="/images/hero.jpg"
            alt="Professionista durante una valutazione psicologica"
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
          {/* Gradiente superpuesto */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-tr from-primary/70 via-primary/20 to-transparent"
          />
        </div>
      </div>
    </section>
  );
}