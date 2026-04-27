import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

const includes = [
  "3 faste træninger — Push · Pull · Legs",
  "12 ugers struktureret progression",
  "Træningskalender — du ved altid hvad der venter",
  "Klare regler for hvornår du øger vægten",
  "Videoforklaringer på alle øvelser",
  "Simpel protein-guide",
  "Gym + hjemme version inkluderet",
  "Adgang fra din telefon med det samme",
];

export default function ProgramFeature() {
  return (
    <section className="bg-[var(--color-bone)]">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 py-28 md:py-36">
        <div className="grid gap-16 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <div className="eyebrow">Hovedproduktet</div>
            <h2 className="mt-5 font-display text-[clamp(2.6rem,5.5vw,5rem)] text-[var(--color-ink)]">
              Stærk &amp;{" "}
              <span className="font-display-italic text-[var(--color-rust)]">
                Struktureret
              </span>
            </h2>
            <p className="mt-6 text-lg text-[var(--color-ink-soft)] leading-snug max-w-md">
              Et 12-ugers styrketræningssystem. Ikke et kursus. Ikke coaching.
              Ikke endnu et program du glemmer. Et system du følger.
            </p>

            <div className="mt-10 inline-flex items-baseline gap-3 rounded-2xl border border-[var(--color-ink)] px-6 py-5">
              <span className="numeral text-5xl text-[var(--color-ink)]">899</span>
              <span className="text-sm text-[var(--color-ink-mute)]">kr.</span>
              <span className="ml-3 text-sm line-through text-[var(--color-ink-mute)]">
                1299 kr.
              </span>
            </div>
            <p className="mt-3 text-sm text-[var(--color-ink-mute)]">
              Engangsbetaling · Ingen abonnement · Adgang med det samme
            </p>

            <div className="mt-10">
              <Link href="/programmet" className="btn-primary">
                Se hele programmet
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-[var(--color-bone-deep)] bg-[var(--color-bone-soft)] p-8 md:p-12">
              <div className="eyebrow">Alt du får</div>
              <ul className="mt-8 grid sm:grid-cols-2 gap-x-8 gap-y-4">
                {includes.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[var(--color-ink-soft)]">
                    <Check className="w-4 h-4 mt-1 flex-shrink-0 text-[var(--color-rust)]" />
                    <span className="text-[15px] leading-snug">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 pt-8 rule-soft grid grid-cols-3 gap-6">
                <div>
                  <div className="numeral text-3xl text-[var(--color-ink)]">12</div>
                  <div className="text-xs uppercase tracking-widest text-[var(--color-ink-mute)] mt-1">
                    uger
                  </div>
                </div>
                <div>
                  <div className="numeral text-3xl text-[var(--color-ink)]">3×</div>
                  <div className="text-xs uppercase tracking-widest text-[var(--color-ink-mute)] mt-1">
                    pr. uge
                  </div>
                </div>
                <div>
                  <div className="numeral text-3xl text-[var(--color-ink)]">45–60</div>
                  <div className="text-xs uppercase tracking-widest text-[var(--color-ink-mute)] mt-1">
                    minutter
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
