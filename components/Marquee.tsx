const items = [
  "Stærk",
  "Struktureret",
  "Ingen bullshit",
  "Tunge vægte",
  "12 uger",
  "Klart hoved",
  "Du fortsætter",
  "899 kr.",
];

export default function Marquee() {
  const loop = [...items, ...items, ...items];
  return (
    <div className="bg-[var(--color-ink)] text-[var(--color-bone)] overflow-hidden border-y border-[var(--color-rust)]/40">
      <div className="flex gap-12 py-6 mp-marquee whitespace-nowrap">
        {loop.map((t, i) => (
          <span
            key={i}
            className="font-display-italic text-3xl md:text-4xl flex items-center gap-12"
          >
            <span>{t}</span>
            <span className="text-[var(--color-rust)]">·</span>
          </span>
        ))}
      </div>
      <style>{`
        @keyframes mp-marquee-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(calc(-100% / 3)); }
        }
        .mp-marquee {
          animation: mp-marquee-scroll 40s linear infinite;
          width: max-content;
        }
        @media (prefers-reduced-motion: reduce) {
          .mp-marquee { animation: none; }
        }
      `}</style>
    </div>
  );
}
