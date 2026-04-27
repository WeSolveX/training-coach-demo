import Link from "next/link";
import { ArrowRight, Check, X } from "lucide-react";
import Modules from "@/components/Modules";
import WeekStructure from "@/components/WeekStructure";
import WeekPhases from "@/components/WeekPhases";
import FAQ from "@/components/FAQ";
import CTABanner from "@/components/CTABanner";

export const metadata = {
  title: "Stærk & Struktureret — Monika Powers",
  description:
    "12 ugers styrketræningssystem til kvinder 30+. 3 træninger om ugen, 45-60 minutter. Engangsbetaling, adgang med det samme.",
};

const checklist = [
  "3 faste træninger — Push, Pull, Legs",
  "12 ugers struktureret progression",
  "Træningskalender — du ved altid hvad der venter",
  "Klare regler for hvornår du øger vægten",
  "Anbefalet træningsapp til at tracke dine løft",
  "Videoforklaringer på øvelserne",
  "Protein guide — gjort simpelt",
  "Gym & hjemme version inkluderet",
  "Adgang fra din telefon med det samme",
];

const forYou = [
  "Du træner allerede — men ser ingen forskel",
  "Du har et travlt liv og ikke tid til kompleksitet",
  "Du vil have resultater uden at bruge mere tid",
  "Du er færdig med at starte forfra",
];

const notForYou = [
  "Du vil træne 5–6 gange om ugen",
  "Du elsker at skifte program hele tiden",
  "Du ikke vil følge en plan",
];

export default function ProgrammetPage() {
  return (
    <>
      {/* Hero / Pitch */}
      <section className="relative overflow-hidden bg-[var(--color-bone)]">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 pt-16 pb-24 md:pt-24 md:pb-32">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <div className="eyebrow">Et 12-ugers styrketræningssystem</div>
              <h1 className="mt-6 font-display text-[clamp(3rem,8vw,7rem)] text-[var(--color-ink)] leading-[0.92]">
                Stærk &amp;
                <br />
                <span className="font-display-italic text-[var(--color-rust)]">
                  Struktureret
                </span>
              </h1>
              <p className="mt-8 text-xl text-[var(--color-ink-soft)] max-w-xl leading-snug">
                Ikke et kursus. Ikke coaching. Ikke endnu et program du glemmer. Et system du følger.
              </p>

              <div className="mt-10 flex items-end gap-6">
                <div>
                  <div className="flex items-baseline gap-3">
                    <span className="numeral text-6xl text-[var(--color-ink)]">899</span>
                    <span className="text-base text-[var(--color-ink-mute)]">kr.</span>
                  </div>
                  <div className="mt-1 text-sm line-through text-[var(--color-ink-mute)]">
                    Normalpris 1299 kr.
                  </div>
                </div>
                <Link href="#kob" className="btn-primary">
                  Køb nu
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <p className="mt-4 text-sm text-[var(--color-ink-mute)]">
                Engangsbetaling · Ingen abonnement · Adgang med det samme
              </p>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="aspect-[4/5] overflow-hidden rounded-[2rem] bg-[var(--color-bone-deep)]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=85"
                  alt="Kvinde der løfter en barbell"
                  className="w-full h-full object-cover grayscale-[10%]"
                  loading="eager"
                />
              </div>
              <div className="absolute -top-5 -right-5 hidden lg:block bg-[var(--color-ink)] text-[var(--color-bone)] rounded-2xl px-5 py-4">
                <p className="numeral text-2xl">12 uger</p>
                <p className="text-xs uppercase tracking-widest mt-1 text-[var(--color-bone)]/65">
                  fra start til resultat
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Modules />
      <WeekStructure />
      <WeekPhases />

      {/* Alt du får + Er det for dig */}
      <section id="kob" className="bg-[var(--color-bone)]">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 py-28 md:py-36">
          <div className="grid gap-16 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="eyebrow">Alt du får</div>
              <h2 className="mt-5 font-display text-[clamp(2.4rem,5vw,4rem)] text-[var(--color-ink)]">
                Det er alt du behøver. <span className="font-display-italic">Engangsbeløb.</span>
              </h2>
              <ul className="mt-10 grid sm:grid-cols-2 gap-x-8 gap-y-4">
                {checklist.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[var(--color-ink-soft)]">
                    <Check className="w-4 h-4 mt-1 flex-shrink-0 text-[var(--color-rust)]" />
                    <span className="text-[15px] leading-snug">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-12 inline-flex flex-wrap items-baseline gap-3 rounded-2xl border border-[var(--color-ink)] px-6 py-5">
                <span className="numeral text-5xl text-[var(--color-ink)]">899</span>
                <span className="text-sm text-[var(--color-ink-mute)]">kr.</span>
                <span className="ml-3 text-sm line-through text-[var(--color-ink-mute)]">
                  1299 kr.
                </span>
              </div>
              <div className="mt-6">
                <button className="btn-primary text-base px-8 py-4">
                  Køb nu — adgang med det samme
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <aside className="lg:col-span-5 grid gap-5">
              <div className="rounded-3xl bg-[var(--color-ink)] text-[var(--color-bone)] p-8">
                <div className="eyebrow text-[var(--color-rust-soft)]">Det her er for dig hvis</div>
                <ul className="mt-6 space-y-4">
                  {forYou.map((it) => (
                    <li key={it} className="flex items-start gap-3">
                      <Check className="w-4 h-4 mt-1 text-[var(--color-rust-soft)]" />
                      <span className="text-[15px] leading-snug">{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-3xl border border-[var(--color-bone-deep)] bg-[var(--color-bone-soft)] p-8">
                <div className="eyebrow">Det her er ikke for dig hvis</div>
                <ul className="mt-6 space-y-4">
                  {notForYou.map((it) => (
                    <li key={it} className="flex items-start gap-3 text-[var(--color-ink-soft)]">
                      <X className="w-4 h-4 mt-1 text-[var(--color-ink-mute)]" />
                      <span className="text-[15px] leading-snug">{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>

          <p className="mt-20 font-display-italic text-3xl md:text-4xl text-[var(--color-ink)] max-w-3xl">
            Du starter ikke forfra. Du fortsætter.
          </p>
        </div>
      </section>

      <FAQ />

      <CTABanner
        title="Få struktur der virker. Allerede i dag."
        body="Du har prøvet at starte forfra nok gange. Nu gør du det anderledes — med et system du følger."
        ctaLabel="Køb nu — 899 kr."
        variant="rust"
      />
    </>
  );
}
