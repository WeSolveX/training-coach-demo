const stats = [
  { n: "12", label: "ugers system" },
  { n: "3×", label: "om ugen" },
  { n: "45", label: "min. pr. træning" },
  { n: "0", label: "abonnement" },
];

export default function StatsStrip() {
  return (
    <section className="bg-[var(--color-bone)]">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 py-12 md:py-16">
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x divide-[var(--color-bone-deep)]">
          {stats.map((s, i) => (
            <li
              key={s.label}
              className={
                "flex flex-col gap-1 " +
                (i > 0 ? "md:pl-8 lg:pl-12" : "") +
                (i < stats.length - 1 ? " md:pr-8 lg:pr-12" : "")
              }
            >
              <span className="numeral text-5xl md:text-6xl text-[var(--color-ink)] leading-none">
                {s.n}
              </span>
              <span className="text-xs uppercase tracking-widest text-[var(--color-ink-mute)] mt-3">
                {s.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
