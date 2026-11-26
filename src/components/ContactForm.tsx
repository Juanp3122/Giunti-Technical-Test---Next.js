"use client";

import { useState, type FormEvent } from "react";

type Values = { name: string; email: string; message: string };
type Errors = Partial<Record<keyof Values, string>>;

const initialValues: Values = { name: "", email: "", message: "" };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validate(v: Values): Errors {
  const errors: Errors = {};

  if (!v.name.trim()) errors.name = "Il nome è obbligatorio.";
  else if (v.name.trim().length < 2)
    errors.name = "Il nome deve contenere almeno 2 caratteri.";

  if (!v.email.trim()) errors.email = "L'email è obbligatoria.";
  else if (!EMAIL_RE.test(v.email.trim()))
    errors.email = "Inserisci un indirizzo email valido.";

  if (!v.message.trim()) errors.message = "Il messaggio è obbligatorio.";
  else if (v.message.trim().length < 10)
    errors.message = "Il messaggio deve contenere almeno 10 caratteri.";

  return errors;
}

const fieldBase =
  "w-full rounded-lg border bg-white px-4 py-2.5 text-sm text-ink outline-none transition placeholder:text-ink/40 focus:ring-2";
const fieldOk =
  "border-primary/25 focus:border-accent focus:ring-accent/30";
const fieldBad =
  "border-red-600 focus:border-red-600 focus:ring-red-600/20";

export default function ContactForm() {
  const [values, setValues] = useState<Values>(initialValues);
  const [touched, setTouched] = useState<Partial<Record<keyof Values, boolean>>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");

  const errors = validate(values);
  const showError = (f: keyof Values) => touched[f] && errors[f];

  const handleChange =
    (field: keyof Values) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setValues((prev) => ({ ...prev, [field]: e.target.value }));

  const handleBlur = (field: keyof Values) => () =>
    setTouched((prev) => ({ ...prev, [field]: true }));

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setTouched({ name: true, email: true, message: true });
    if (Object.keys(errors).length > 0) return;

    setStatus("sending");
    // Simula el envío (sin backend)
    setTimeout(() => setStatus("success"), 900);
  };

  const reset = () => {
    setValues(initialValues);
    setTouched({});
    setStatus("idle");
  };

  return (
    <section id="contatti" className="border-t border-primary/30 ">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold text-ink">Contattaci</h2>
          <p className="mt-2 text-ink/70">
            Hai domande su un test o su un corso? Scrivici e ti risponderemo
            il prima possibile.
          </p>

          <div className="mt-8 rounded-xl border border-primary/10   bg-white p-6 shadow-sm sm:p-8">
            {status === "success" ? (
              <div role="status" className="py-6 text-center">
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent/15 text-primary">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-7 w-7"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m5 13 4 4L19 7" />
                  </svg>
                </span>
                <h3 className="mt-4 text-xl font-semibold text-ink">
                  Messaggio inviato!
                </h3>
                <p className="mt-2 text-sm text-ink/70">
                  Grazie, {values.name.trim()}. Ti risponderemo all&apos;indirizzo{" "}
                  <strong className="text-ink">{values.email.trim()}</strong>.
                </p>
                <button
                  type="button"
                  onClick={reset}
                  className="mt-6 rounded-full border border-primary/30 px-5 py-2 text-sm font-semibold text-primary transition-colors hover:border-accent hover:bg-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  Invia un altro messaggio
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {/* Nombre */}
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-ink">
                    Nome <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    autoComplete="name"
                    value={values.name}
                    onChange={handleChange("name")}
                    onBlur={handleBlur("name")}
                    aria-invalid={!!showError("name")}
                    aria-describedby={showError("name") ? "name-error" : undefined}
                    placeholder="Il tuo nome"
                    className={`${fieldBase} ${showError("name") ? fieldBad : fieldOk}`}
                  />
                  {showError("name") && (
                    <p id="name-error" className="mt-1.5 text-sm text-red-600">
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-ink">
                    Email <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    value={values.email}
                    onChange={handleChange("email")}
                    onBlur={handleBlur("email")}
                    aria-invalid={!!showError("email")}
                    aria-describedby={showError("email") ? "email-error" : undefined}
                    placeholder="nome@esempio.it"
                    className={`${fieldBase} ${showError("email") ? fieldBad : fieldOk}`}
                  />
                  {showError("email") && (
                    <p id="email-error" className="mt-1.5 text-sm text-red-600">
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Mensaje */}
                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink">
                    Messaggio <span className="text-red-600">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={values.message}
                    onChange={handleChange("message")}
                    onBlur={handleBlur("message")}
                    aria-invalid={!!showError("message")}
                    aria-describedby={showError("message") ? "message-error" : undefined}
                    placeholder="Scrivi qui il tuo messaggio..."
                    className={`${fieldBase} resize-y ${showError("message") ? fieldBad : fieldOk}`}
                  />
                  {showError("message") && (
                    <p id="message-error" className="mt-1.5 text-sm text-red-600">
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {status === "sending" ? "Invio in corso..." : "Invia messaggio"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}