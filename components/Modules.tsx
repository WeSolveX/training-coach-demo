const modules = [
  {
    n: "01",
    label: "Styrketræning",
    title: "3 træninger om ugen",
    body: "Et fast styrkesystem du kan følge. Du stopper med at gætte og begynder at følge en plan der hænger sammen fra dag ét.",
  },
  {
    n: "02",
    label: "Progressive overload",
    title: "12 ugers progression",
    body: "Du lærer præcis hvornår og hvordan du øger dine løft — og hvad du skriver ned. Din træning rykker noget for første gang.",
  },
  {
    n: "03",
    label: "Kost & protein",
    title: "Simpel protein-guide",
    body: "Ingen madplan. En simpel måde at spise på der fungerer i en travl hverdag og støtter din træning.",
  },
  {
    n: "04",
    label: "Mindset",
    title: "Når livet sker",
    body: "Stop med at starte forfra. Konkrete strategier til at holde fast — også når hverdagen rammer og det normalt ville falde fra hinanden.",
  },
  {
    n: "05",
    label: "Support",
    title: "Du er ikke alene",
    body: "Efter køb får du adgang til et lukket medlemsområde, hvor du kan stille spørgsmål og få svar undervejs.",
  },
];

export default function Modules() {
  return (
    <section className="bg-[var(--color-bone)]">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 py-28 md:py-36">
        <div className="grid gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <div className="eyebrow">5 moduler</div>
            <h2 className="mt-5 font-display text-[clamp(2.5rem,5vw,4.5rem)] text-[var(--color-ink)]">
              Bygget til én ting:{" "}
              <span className="font-display-italic text-[var(--color-rust)]">
                resultater der vises.
              </span>
            </h2>
          </div>
          <p className="md:col-span-5 text-lg text-[var(--color-ink-soft)]">
            Du åbner systemet på din telefon → og går i gang med det samme. Inddelt i moduler så du altid ved hvor du er.
          </p>
        </div>

        <ul className="mt-16 grid gap-px bg-[var(--color-bone-deep)] rounded-3xl overflow-hidden md:grid-cols-2 lg:grid-cols-5">
          {modules.map((m) => (
            <li
              key={m.n}
              className="bg-[var(--color-bone-soft)] p-8 flex flex-col justify-between min-h-[280px] hover:bg-[var(--color-ink)] hover:text-[var(--color-bone)] transition-colors group"
            >
              <div>
                <span className="numeral text-sm text-[var(--color-rust)] group-hover:text-[var(--color-rust-soft)]">
                  {m.n}
                </span>
                <p className="mt-1 text-xs uppercase tracking-widest text-[var(--color-ink-mute)] group-hover:text-[var(--color-bone)]/60">
                  {m.label}
                </p>
              </div>
              <div>
                <h3 className="font-display text-2xl leading-tight">{m.title}</h3>
                <p className="mt-3 text-sm text-[var(--color-ink-soft)] group-hover:text-[var(--color-bone)]/80 leading-snug">
                  {m.body}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
