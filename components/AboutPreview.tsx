import Link from "next/link";
import { ArrowRight } from "lucide-react";

const principles = [
  ["Tunge vægte", "former kroppen"],
  ["Protein", "som fundament"],
  ["Kalorier", "betyder noget"],
  ["Struktur", "over selvhad"],
];

export default function AboutPreview() {
  return (
    <section className="bg-[var(--color-bone)]">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 py-28 md:py-36 grid gap-16 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-5 relative">
          <div className="aspect-[4/5] overflow-hidden rounded-[2rem] bg-[var(--color-bone-deep)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&w=1200&q=85"
              alt="Monika Powers"
              className="w-full h-full object-cover grayscale-[10%]"
              loading="lazy"
            />
          </div>
          <div className="absolute -bottom-6 left-6 right-6 md:right-auto md:max-w-xs bg-[var(--color-rust)] text-[var(--color-bone)] rounded-2xl px-6 py-5">
            <p className="font-display-italic text-2xl leading-tight">
              &ldquo;Spis klogere. Træn bedre. Stop med at starte forfra.&rdquo;
            </p>
            <p className="mt-3 text-xs uppercase tracking-widest text-[var(--color-bone)]/75">
              — Monika
            </p>
          </div>
        </div>

        <div className="lg:col-span-7 lg:pl-8">
          <div className="eyebrow">Min tilgang</div>
          <h2 className="mt-5 font-display text-[clamp(2.5rem,5vw,4.5rem)] text-[var(--color-ink)]">
            Du støtter ikke din træning med <span className="font-display-italic">det rigtige</span> — endnu.
          </h2>
          <p className="mt-8 text-lg text-[var(--color-ink-soft)] leading-snug max-w-xl">
            Jeg er Monika. Jeg hjælper kvinder med at blive stærkere gennem praktisk træning og ernæring — uden fadser, uden selvhad, uden perfektionisme.
          </p>

          <ul className="mt-10 grid sm:grid-cols-2 gap-px bg-[var(--color-bone-deep)] rounded-2xl overflow-hidden">
            {principles.map(([k, v]) => (
              <li key={k} className="bg-[var(--color-bone)] p-6">
                <p className="font-display text-2xl text-[var(--color-ink)]">{k}</p>
                <p className="text-sm text-[var(--color-ink-mute)] mt-1">{v}</p>
              </li>
            ))}
          </ul>

          <Link
            href="/om"
            className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-[var(--color-rust)] hover:text-[var(--color-ink)] transition-colors"
          >
            Læs mere om Monika
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
