export default function PullQuote() {
  return (
    <section className="bg-[var(--color-rust)] text-[var(--color-bone)] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 py-28 md:py-40 relative">
        <span
          aria-hidden
          className="absolute top-4 left-4 md:top-8 md:left-8 font-display text-[clamp(8rem,20vw,18rem)] leading-[0.7] text-[var(--color-bone)]/15 select-none pointer-events-none"
        >
          &ldquo;
        </span>
        <blockquote className="relative max-w-5xl">
          <p className="font-display-italic text-[clamp(2.2rem,5.5vw,5rem)] leading-[1.05]">
            Du støtter ikke din træning med det rigtige.
            <br />
            <span className="font-display not-italic">Det kan vi lave om på — nu.</span>
          </p>
          <footer className="mt-10 flex items-center gap-4 text-sm uppercase tracking-widest text-[var(--color-bone)]/75">
            <span className="h-px w-12 bg-[var(--color-bone)]/40" />
            Monika Powers
          </footer>
        </blockquote>
      </div>
    </section>
  );
}
