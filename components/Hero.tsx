import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-bone)]">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <div className="eyebrow">For kvinder 30+ der træner</div>
            <h1 className="mt-6 font-display text-[clamp(3.2rem,8vw,7rem)] text-[var(--color-ink)]">
              Stærk krop.
              <br />
              <span className="font-display-italic text-[var(--color-rust)]">Klart hoved.</span>
              <br />
              Ingen bullshit.
            </h1>
            <p className="mt-8 text-lg md:text-xl text-[var(--color-ink-soft)] max-w-xl leading-snug">
              Du træner 3–4 gange om ugen. Så hvorfor kan du ikke se det? Det er ikke din indsats der er problemet — det er måden du gør det på.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="/programmet" className="btn-primary">
                Få struktur der virker
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/filosofi" className="btn-outline">
                Læs min tilgang
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-[var(--color-bone-deep)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1200&q=85"
                alt="Kvinde der løfter tunge vægte"
                className="w-full h-full object-cover grayscale-[15%]"
                loading="eager"
              />
              <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-[var(--color-ink)]/70 via-[var(--color-ink)]/20 to-transparent">
                <p className="font-display-italic text-2xl text-[var(--color-bone)]">
                  &ldquo;Tunge vægte former kroppen.&rdquo;
                </p>
              </div>
            </div>

            <div className="absolute -top-6 -left-6 hidden lg:block bg-[var(--color-ink)] text-[var(--color-bone)] rounded-2xl px-5 py-4 max-w-[200px] shadow-xl">
              <p className="numeral text-3xl">12</p>
              <p className="text-xs uppercase tracking-widest mt-1 text-[var(--color-bone)]/65">
                ugers system
              </p>
            </div>
            <div className="absolute -bottom-5 -right-5 hidden lg:block bg-[var(--color-rust)] text-[var(--color-bone)] rounded-2xl px-5 py-4 max-w-[220px]">
              <p className="numeral text-3xl">3×</p>
              <p className="text-xs uppercase tracking-widest mt-1 text-[var(--color-bone)]/85">
                om ugen · 45–60 min
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 rule-soft grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            ["Push", "Skuldre · bryst · triceps"],
            ["Pull", "Ryg · biceps"],
            ["Legs", "Baller · ben · core"],
            ["+ Bonus", "Full body — valgfri"],
          ].map(([h, sub]) => (
            <div key={h}>
              <div className="font-display-italic text-2xl text-[var(--color-ink)]">{h}</div>
              <div className="mt-1 text-sm text-[var(--color-ink-mute)]">{sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
