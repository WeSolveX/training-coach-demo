const points = [
  "Din krop står stille — selvom du møder op igen og igen",
  "Du starter med cardio fordi det føles som det rigtige",
  "Samme vægt, 12+ reps — uge efter uge",
  "Du er bange for tunge vægte og tror du bliver stor",
  "Ingen plan. Ingen progression. Intet overblik.",
  "Du starter hårdt ud — og stopper igen. Starter forfra.",
  "Du spiser for lidt, glemmer at spise, får ikke nok protein",
  "&ldquo;Jeg mangler motivation&rdquo; — men det er ikke det der mangler",
];

export default function ProblemRecognition() {
  return (
    <section className="bg-[var(--color-bone-soft)] border-y border-[var(--color-bone-deep)]">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 py-24 md:py-32">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <div className="eyebrow">Det handler ikke om indsats</div>
            <h2 className="mt-5 font-display text-[clamp(2.5rem,5vw,4.5rem)] text-[var(--color-ink)]">
              Genkender du <span className="font-display-italic text-[var(--color-rust)]">det her?</span>
            </h2>
            <p className="mt-6 text-lg text-[var(--color-ink-soft)] max-w-md">
              De fleste kvinder i din situation gør faktisk for meget — og uden retning.
            </p>
          </div>

          <ul className="lg:col-span-8 grid sm:grid-cols-2 gap-px bg-[var(--color-bone-deep)] rounded-2xl overflow-hidden">
            {points.map((p, i) => (
              <li
                key={i}
                className="bg-[var(--color-bone-soft)] p-7 flex gap-4"
              >
                <span className="numeral text-sm text-[var(--color-rust)] mt-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className="text-[var(--color-ink-soft)] text-base leading-snug"
                  dangerouslySetInnerHTML={{ __html: p }}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
