import CTABanner from "@/components/CTABanner";
import { Instagram, ArrowUpRight } from "lucide-react";

export const metadata = {
  title: "Om Monika — Monika Powers",
  description:
    "Monika hjælper kvinder med at blive stærkere gennem praktisk styrketræning og ernæring. Uden fadser, uden selvhad, uden perfektionisme.",
};

const values = [
  {
    head: "Ærlighed over fluffy",
    body: "Du får ingen positivitets-spam. Du får det jeg ved virker — også når det er ubekvemt at høre.",
  },
  {
    head: "Praktisk over perfekt",
    body: "Det skal kunne lade sig gøre i en travl hverdag. Hvis ikke, er det ikke godt nok.",
  },
  {
    head: "Konsistens over intensitet",
    body: "Du behøver ikke gøre det perfekt. Du har brug for at gøre det igen og igen — i 12 uger.",
  },
];

export default function OmPage() {
  return (
    <>
      <section className="bg-[var(--color-bone)]">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 pt-16 pb-24 md:pt-24 md:pb-32 grid gap-16 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/5] overflow-hidden rounded-[2rem] bg-[var(--color-bone-deep)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1200&q=85"
                alt="Monika Powers portræt"
                className="w-full h-full object-cover grayscale-[10%]"
                loading="eager"
              />
            </div>
            <a
              href="https://instagram.com/monika_sattler_"
              target="_blank"
              rel="noreferrer"
              className="absolute -bottom-5 -right-5 inline-flex items-center gap-2 bg-[var(--color-ink)] text-[var(--color-bone)] rounded-full px-5 py-3 text-sm font-medium hover:bg-[var(--color-rust)] transition-colors"
            >
              <Instagram className="w-4 h-4" />
              @monika_sattler_
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="lg:col-span-7 lg:pl-8">
            <div className="eyebrow">Om Monika</div>
            <h1 className="mt-5 font-display text-[clamp(2.8rem,7vw,6rem)] text-[var(--color-ink)] leading-[0.95]">
              Hej, jeg er <span className="font-display-italic text-[var(--color-rust)]">Monika.</span>
            </h1>
            <p className="mt-8 text-xl text-[var(--color-ink-soft)] leading-snug max-w-xl">
              Jeg hjælper kvinder 30+ med at blive stærkere — gennem praktisk styrketræning og ernæring. Uden fadser. Uden selvhad. Uden perfektionisme.
            </p>
            <p className="mt-6 text-lg text-[var(--color-ink-soft)] leading-snug max-w-xl">
              Jeg startede Monika Powers fordi jeg var træt af at se kvinder gå op i alt det forkerte. Ikke fordi de ikke gad — men fordi de aldrig fik vist hvad der faktisk virker.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-ink)] text-[var(--color-bone)]">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 py-28 md:py-36">
          <div className="max-w-3xl">
            <div className="eyebrow text-[var(--color-rust-soft)]">Det jeg står for</div>
            <h2 className="mt-5 font-display text-[clamp(2.4rem,5.5vw,4.5rem)]">
              Tre ting jeg <span className="font-display-italic">ikke giver køb</span> på.
            </h2>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {values.map((v, i) => (
              <div key={v.head} className="border-t border-[var(--color-bone)]/15 pt-6">
                <div className="numeral text-sm text-[var(--color-rust-soft)]">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-4 font-display text-2xl">{v.head}</h3>
                <p className="mt-4 text-[var(--color-bone)]/75 leading-snug">
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Klar til struktur der virker?"
        body="Stærk & Struktureret er 12 uger med ægte progression — bygget til kvinder der træner men ikke ser forskel endnu."
        ctaLabel="Se programmet"
      />
    </>
  );
}
