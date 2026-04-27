const issues = [
  { n: "01", t: "Du bruger energi på det forkerte" },
  { n: "02", t: "Du følger ikke progression" },
  { n: "03", t: "Du træner uden en plan" },
  { n: "04", t: "Du støtter ikke din træning med det rigtige" },
];

export default function RealityCheck() {
  return (
    <section className="bg-[var(--color-ink)] text-[var(--color-bone)]">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 py-28 md:py-40">
        <div className="max-w-4xl">
          <div className="eyebrow text-[var(--color-rust-soft)]">Realitet</div>
          <h2 className="mt-6 font-display text-[clamp(2.6rem,6vw,5.5rem)]">
            Problemet er ikke at du <span className="font-display-italic">gør for lidt.</span>
          </h2>
          <p className="mt-8 text-xl md:text-2xl text-[var(--color-bone)]/75 leading-snug max-w-2xl">
            De fleste kvinder gør for meget — og uden retning. Derfor ingen synlige resultater.
          </p>
        </div>

        <div className="mt-20 grid gap-px bg-[var(--color-bone)]/15 rounded-2xl overflow-hidden md:grid-cols-2 lg:grid-cols-4">
          {issues.map((i) => (
            <div key={i.n} className="bg-[var(--color-ink)] p-8 min-h-[180px] flex flex-col justify-between">
              <span className="numeral text-sm text-[var(--color-rust-soft)]">{i.n}</span>
              <p className="font-display text-2xl leading-tight">{i.t}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 max-w-3xl">
          <p className="font-display-italic text-3xl md:text-4xl text-[var(--color-bone)]">
            Du mangler ikke motivation. Du mangler et system.
          </p>
        </div>
      </div>
    </section>
  );
}
