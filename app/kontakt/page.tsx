import ContactForm from "@/components/ContactForm";
import { Mail, Instagram, Clock, ArrowUpRight } from "lucide-react";

export const metadata = {
  title: "Kontakt — Monika Powers",
  description: "Skriv til Monika. Svar inden for 24 timer på hverdage.",
};

export default function KontaktPage() {
  return (
    <section className="bg-[var(--color-bone)]">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 pt-16 pb-24 md:pt-24 md:pb-32">
        <div className="max-w-3xl">
          <div className="eyebrow">Kontakt</div>
          <h1 className="mt-6 font-display text-[clamp(3rem,8vw,7rem)] text-[var(--color-ink)] leading-[0.95]">
            Skriv <span className="font-display-italic text-[var(--color-rust)]">til mig.</span>
          </h1>
          <p className="mt-8 text-xl text-[var(--color-ink-soft)] max-w-xl leading-snug">
            Spørgsmål til programmet, samarbejde eller noget helt tredje? Skriv hellere én gang for meget end for lidt.
          </p>
        </div>

        <div className="mt-20 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <ContactForm />

          <aside className="space-y-5">
            <a
              href="mailto:testtest@..."
              className="block rounded-3xl border border-[var(--color-bone-deep)] bg-[var(--color-bone-soft)] p-7 hover:border-[var(--color-rust)] transition-colors"
            >
              <Mail className="w-5 h-5 text-[var(--color-rust)]" />
              <p className="mt-4 text-xs uppercase tracking-widest text-[var(--color-ink-mute)]">
                Email
              </p>
              <p className="mt-1 font-display text-xl text-[var(--color-ink)]">
                testtest@...
              </p>
            </a>

            <a
              href="https://instagram.com/monika_sattler_"
              target="_blank"
              rel="noreferrer"
              className="block rounded-3xl border border-[var(--color-bone-deep)] bg-[var(--color-bone-soft)] p-7 hover:border-[var(--color-rust)] transition-colors"
            >
              <div className="flex items-center justify-between">
                <Instagram className="w-5 h-5 text-[var(--color-rust)]" />
                <ArrowUpRight className="w-4 h-4 text-[var(--color-ink-mute)]" />
              </div>
              <p className="mt-4 text-xs uppercase tracking-widest text-[var(--color-ink-mute)]">
                Instagram
              </p>
              <p className="mt-1 font-display text-xl text-[var(--color-ink)]">
                @monika_sattler_
              </p>
            </a>

            <div className="rounded-3xl border border-[var(--color-bone-deep)] bg-[var(--color-bone-soft)] p-7">
              <Clock className="w-5 h-5 text-[var(--color-rust)]" />
              <p className="mt-4 text-xs uppercase tracking-widest text-[var(--color-ink-mute)]">
                Svartid
              </p>
              <p className="mt-1 font-display text-xl text-[var(--color-ink)]">
                Inden for 24 timer
              </p>
              <p className="mt-2 text-sm text-[var(--color-ink-mute)]">
                Hverdage. Weekend kan tage lidt længere.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
