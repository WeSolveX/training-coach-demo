import CTABanner from "@/components/CTABanner";

export const metadata = {
  title: "Filosofi — Monika Powers",
  description:
    "Tunge vægte former kroppen. Protein som fundament. Struktur over selvhad. Min tilgang til styrketræning og ernæring.",
};

const principles = [
  {
    n: "01",
    head: "Tunge vægte former kroppen",
    body: "Lette vægte med 15+ reps holder dig bare optaget. Tunge vægte med god teknik bygger den krop du faktisk vil have. Du bliver ikke stor — du bliver stærk.",
  },
  {
    n: "02",
    head: "Protein er fundamentet",
    body: "Du kan ikke bygge muskler uden materialet. Det handler ikke om kosttilskud. Det handler om at du faktisk får protein — i hver dag og i hver måltid.",
  },
  {
    n: "03",
    head: "Kalorier betyder noget — men de er ikke fjenden",
    body: "Du behøver ikke tælle alt. Du behøver heller ikke ignorere det. Der er en simpel retning der virker uden at gøre kosten til endnu en stressfaktor.",
  },
  {
    n: "04",
    head: "Struktur over selvhad",
    body: "Det er ikke disciplin der mangler. Det er en plan. Når du følger en plan der hænger sammen, behøver du ikke kæmpe mod dig selv hver dag.",
  },
  {
    n: "05",
    head: "Spis klogere. Træn bedre.",
    body: "Du behøver ikke spise mindre. Du behøver ikke træne mere. Du har brug for at gøre det rigtige — ikke gøre mere af det forkerte.",
  },
];

export default function FilosofiPage() {
  return (
    <>
      <section className="bg-[var(--color-bone)]">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 pt-16 pb-20 md:pt-24 md:pb-28">
          <div className="max-w-4xl">
            <div className="eyebrow">Min tilgang</div>
            <h1 className="mt-6 font-display text-[clamp(3rem,8vw,7rem)] text-[var(--color-ink)] leading-[0.95]">
              Stop med at <span className="font-display-italic text-[var(--color-rust)]">starte forfra.</span>
            </h1>
            <p className="mt-8 text-xl text-[var(--color-ink-soft)] max-w-2xl leading-snug">
              Jeg tror på praktisk styrketræning. På protein. På kalorier som retning, ikke regler. Og på at du fortjener bedre end et nyt program hver tredje måned.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-bone-soft)] border-y border-[var(--color-bone-deep)]">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 py-24 md:py-32">
          <ul className="space-y-px bg-[var(--color-bone-deep)] rounded-3xl overflow-hidden">
            {principles.map((p) => (
              <li
                key={p.n}
                className="bg-[var(--color-bone-soft)] hover:bg-[var(--color-bone)] transition-colors p-8 md:p-12 grid gap-6 md:grid-cols-12 md:items-start"
              >
                <div className="md:col-span-2 numeral text-5xl text-[var(--color-rust)]">
                  {p.n}
                </div>
                <h2 className="md:col-span-4 font-display text-3xl md:text-4xl text-[var(--color-ink)] leading-tight">
                  {p.head}
                </h2>
                <p className="md:col-span-6 text-lg text-[var(--color-ink-soft)] leading-snug">
                  {p.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-[var(--color-bone)]">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 py-28 md:py-36">
          <p className="font-display-italic text-4xl md:text-6xl text-[var(--color-ink)] max-w-4xl leading-tight">
            &ldquo;Du mangler ikke motivation. Du mangler et system.&rdquo;
          </p>
          <p className="mt-8 text-sm uppercase tracking-widest text-[var(--color-ink-mute)]">
            — Monika Powers
          </p>
        </div>
      </section>

      <CTABanner
        title="Klar til at gøre det anderledes?"
        body="12 ugers system, 3 træninger om ugen, ingen bullshit. Stærk & Struktureret er bygget til at virke i din hverdag."
        ctaLabel="Se programmet"
      />
    </>
  );
}
