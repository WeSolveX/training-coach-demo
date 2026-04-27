const phases = [
  {
    weeks: "Uge 1–4",
    label: "Fundament",
    title: "Du lærer systemet",
    body: "Du lærer øvelserne, finder dine vægte og bygger en base. Ingen stress — bare start.",
  },
  {
    weeks: "Uge 5–8",
    label: "Progression",
    title: "Du løfter tungere",
    body: "Du begynder at løfte tungere og kan mærke tydelig forskel. Tallene i logbogen beviser det.",
  },
  {
    weeks: "Uge 9–12",
    label: "Resultater",
    title: "Det bliver synligt",
    body: "Din styrke er højere, din krop ser anderledes ud. Det er her det virkelig kan ses.",
  },
];

export default function WeekPhases() {
  return (
    <section className="bg-[var(--color-ink)] text-[var(--color-bone)]">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 py-28 md:py-36">
        <div className="max-w-3xl">
          <div className="eyebrow text-[var(--color-rust-soft)]">12 uger der rykker</div>
          <h2 className="mt-5 font-display text-[clamp(2.6rem,6vw,5rem)]">
            Du starter ikke hårdt. Du starter <span className="font-display-italic">rigtigt.</span>
          </h2>
        </div>

        <ol className="mt-20 grid gap-8 md:grid-cols-3">
          {phases.map((p, i) => (
            <li key={p.label} className="relative">
              <div className="numeral text-7xl text-[var(--color-rust-soft)] leading-none">
                0{i + 1}
              </div>
              <div className="mt-6 pt-6 rule-soft border-[var(--color-bone)]/15">
                <p className="text-xs uppercase tracking-widest text-[var(--color-bone)]/60">
                  {p.weeks}
                </p>
                <h3 className="mt-3 font-display text-3xl">{p.label}</h3>
                <p className="mt-4 font-display-italic text-xl text-[var(--color-rust-soft)]">
                  {p.title}
                </p>
                <p className="mt-4 text-[var(--color-bone)]/75 leading-snug">
                  {p.body}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <p className="mt-16 text-sm text-[var(--color-bone)]/55 max-w-2xl">
          Programmet er bygget til fitnesscenter — med adgang til vægte og maskiner. Hjemmeversion med håndvægte er inkluderet som bonus.
        </p>
      </div>
    </section>
  );
}
