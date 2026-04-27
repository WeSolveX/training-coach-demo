const days = [
  {
    n: "Dag 1",
    label: "Push",
    body: "Skuldre, bryst & triceps",
    detail: "Du bygger styrke og form i overkroppen → det du ser i spejlet og mærker i din hverdag.",
  },
  {
    n: "Dag 2",
    label: "Pull",
    body: "Ryg & biceps",
    detail: "Bedre holdning, stærkere ryg → du mærker forskellen hurtigt.",
  },
  {
    n: "Dag 3",
    label: "Legs + Core",
    body: "Baller & ben",
    detail: "Tunge, kontrollerede løft. Core der gør dig stærkere — ikke bare planken du hader.",
  },
  {
    n: "Dag 4",
    label: "Full body",
    body: "Bonus træning · valgfri",
    detail: "Til dig der vil træne fire gange om ugen. Ikke et krav — men den er der hvis du vil mere.",
    optional: true,
  },
];

export default function WeekStructure() {
  return (
    <section className="bg-[var(--color-bone-soft)] border-y border-[var(--color-bone-deep)]">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 py-28 md:py-36">
        <div className="max-w-3xl">
          <div className="eyebrow">Sådan ser din uge ud</div>
          <h2 className="mt-5 font-display text-[clamp(2.5rem,5vw,4.5rem)] text-[var(--color-ink)]">
            3 træninger. Samme struktur. <span className="font-display-italic">Hver uge.</span>
          </h2>
          <p className="mt-6 text-lg text-[var(--color-ink-soft)]">
            Du ved altid hvad du skal. Ingen tilfældige træninger. 45–60 minutter per gang. Ikke mere.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {days.map((d) => (
            <article
              key={d.n}
              className={
                "rounded-3xl p-8 flex flex-col gap-6 min-h-[320px] " +
                (d.optional
                  ? "border-2 border-dashed border-[var(--color-ink-mute)]/40 bg-transparent"
                  : "bg-[var(--color-ink)] text-[var(--color-bone)]")
              }
            >
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-widest opacity-70">
                  {d.n}
                </span>
                {d.optional && (
                  <span className="text-[10px] uppercase tracking-widest text-[var(--color-rust)] border border-[var(--color-rust)] px-2 py-0.5 rounded-full">
                    Valgfri
                  </span>
                )}
              </div>
              <div>
                <h3 className="font-display text-3xl">{d.label}</h3>
                <p className={"mt-2 text-sm " + (d.optional ? "text-[var(--color-ink-mute)]" : "text-[var(--color-bone)]/70")}>
                  {d.body}
                </p>
              </div>
              <p className={"text-sm leading-snug mt-auto " + (d.optional ? "text-[var(--color-ink-soft)]" : "text-[var(--color-bone)]/80")}>
                {d.detail}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
