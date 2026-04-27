"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Hvor lang tid tager en træning?",
    a: "45–60 minutter. Ikke mere end det.",
  },
  {
    q: "Hvad hvis jeg kun kan træne 2 gange om ugen?",
    a: "Du følger stadig strukturen — bare i dit tempo.",
  },
  {
    q: "Skal jeg tælle kalorier?",
    a: "Nej. Du får en simpel retning, ikke regler.",
  },
  {
    q: "Virker det til vægttab?",
    a: "Ja — fokus er styrke. Vægttab følger med.",
  },
  {
    q: "Er det for begyndere?",
    a: "Det er for dig der træner — men mangler struktur.",
  },
  {
    q: "Hvornår får jeg adgang?",
    a: "Med det samme. Du starter i dag.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-[var(--color-bone-soft)] border-y border-[var(--color-bone-deep)]">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 py-28 md:py-36">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="eyebrow">Spørgsmål</div>
            <h2 className="mt-5 font-display text-[clamp(2.5rem,5vw,4.5rem)] text-[var(--color-ink)]">
              <span className="font-display-italic text-[var(--color-rust)]">Spørgsmål</span> &amp; svar
            </h2>
          </div>

          <ul className="lg:col-span-8 divide-y divide-[var(--color-bone-deep)] border-y border-[var(--color-bone-deep)]">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <li key={f.q}>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-start justify-between gap-6 py-7 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display text-xl md:text-2xl text-[var(--color-ink)]">
                      {f.q}
                    </span>
                    <span className="flex-shrink-0 mt-1.5 w-8 h-8 rounded-full border border-[var(--color-ink)] flex items-center justify-center">
                      {isOpen ? (
                        <Minus className="w-4 h-4 text-[var(--color-ink)]" />
                      ) : (
                        <Plus className="w-4 h-4 text-[var(--color-ink)]" />
                      )}
                    </span>
                  </button>
                  {isOpen && (
                    <p className="pb-7 -mt-2 text-lg text-[var(--color-ink-soft)] max-w-2xl">
                      {f.a}
                    </p>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
