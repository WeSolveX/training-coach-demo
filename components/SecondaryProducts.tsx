import Link from "next/link";
import { ArrowUpRight, Mail, Cookie } from "lucide-react";

export default function SecondaryProducts() {
  return (
    <section className="bg-[var(--color-bone-soft)] border-y border-[var(--color-bone-deep)]">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 py-24 md:py-32">
        <div className="max-w-3xl">
          <div className="eyebrow">Andet fra mig</div>
          <h2 className="mt-5 font-display text-[clamp(2.4rem,5vw,4rem)] text-[var(--color-ink)]">
            Ikke klar til hele systemet endnu?
          </h2>
          <p className="mt-5 text-lg text-[var(--color-ink-soft)]">
            Start her. To måder at komme i gang uden at købe programmet.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <Link
            href="/programmet"
            className="group rounded-3xl bg-[var(--color-bone)] border border-[var(--color-bone-deep)] p-8 md:p-10 flex flex-col gap-6 min-h-[320px] hover:border-[var(--color-rust)] transition-colors"
          >
            <div className="flex items-start justify-between">
              <Cookie className="w-7 h-7 text-[var(--color-rust)]" />
              <ArrowUpRight className="w-5 h-5 text-[var(--color-ink-mute)] group-hover:text-[var(--color-rust)] transition-colors" />
            </div>
            <div className="mt-auto">
              <p className="text-xs uppercase tracking-widest text-[var(--color-ink-mute)]">
                Mini-system
              </p>
              <h3 className="mt-2 font-display text-3xl text-[var(--color-ink)]">
                Mine søde <span className="font-display-italic text-[var(--color-rust)]">vaner</span>
              </h3>
              <p className="mt-4 text-[var(--color-ink-soft)] leading-snug">
                System til daglig sødt uden kontrol-tab. Opskrifter, snack-struktur, og en simpel måde at gøre det rigtigt på.
              </p>
            </div>
          </Link>

          <Link
            href="/kontakt"
            className="group rounded-3xl bg-[var(--color-ink)] text-[var(--color-bone)] p-8 md:p-10 flex flex-col gap-6 min-h-[320px] hover:bg-[var(--color-rust)] transition-colors"
          >
            <div className="flex items-start justify-between">
              <Mail className="w-7 h-7 text-[var(--color-rust-soft)] group-hover:text-[var(--color-bone)] transition-colors" />
              <ArrowUpRight className="w-5 h-5 text-[var(--color-bone)]/65 group-hover:text-[var(--color-bone)] transition-colors" />
            </div>
            <div className="mt-auto">
              <p className="text-xs uppercase tracking-widest text-[var(--color-bone)]/55">
                Gratis · Lead magnet
              </p>
              <h3 className="mt-2 font-display text-3xl">
                3 træninger <span className="font-display-italic">helt gratis</span>
              </h3>
              <p className="mt-4 text-[var(--color-bone)]/80 leading-snug">
                En smagsprøve på systemet — tre færdige træninger til travle kvinder. Kommer direkte i din indbakke.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
