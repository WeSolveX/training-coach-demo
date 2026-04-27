import Link from "next/link";
import { Instagram, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[var(--color-ink)] text-[var(--color-bone)]">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 py-20">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-6">
            <div className="flex items-baseline gap-1.5">
              <span className="font-display text-4xl">monika</span>
              <span className="font-display-italic text-4xl text-[var(--color-rust-soft)]">powers</span>
            </div>
            <p className="mt-6 max-w-md text-lg leading-snug text-[var(--color-bone)]/75">
              Stærk krop, klart hoved, ingen bullshit. Til kvinder 30+ der træner — men ikke kan se forskel endnu.
            </p>
            <a
              href="https://instagram.com/monika_sattler_"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-[var(--color-bone)] hover:text-[var(--color-rust-soft)] transition-colors"
            >
              <Instagram className="w-4 h-4" />
              @monika_sattler_
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="md:col-span-3">
            <div className="eyebrow text-[var(--color-bone)]/55">Sider</div>
            <ul className="mt-5 space-y-3 text-sm">
              <li><Link href="/" className="hover:text-[var(--color-rust-soft)]">Forside</Link></li>
              <li><Link href="/programmet" className="hover:text-[var(--color-rust-soft)]">Stærk &amp; Struktureret</Link></li>
              <li><Link href="/filosofi" className="hover:text-[var(--color-rust-soft)]">Filosofi</Link></li>
              <li><Link href="/om" className="hover:text-[var(--color-rust-soft)]">Om Monika</Link></li>
              <li><Link href="/kontakt" className="hover:text-[var(--color-rust-soft)]">Kontakt</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <div className="eyebrow text-[var(--color-bone)]/55">Kontakt</div>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a href="mailto:testtest@..." className="hover:text-[var(--color-rust-soft)]">
                  testtest@...
                </a>
              </li>
              <li>CVR: 39827905</li>
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-[var(--color-bone)]/15 flex flex-col sm:flex-row justify-between gap-4 text-xs text-[var(--color-bone)]/55">
          <p>© {year} Monika Sattler · Alle rettigheder forbeholdes</p>
          <p>Engangsbetaling · Ingen abonnement · Adgang med det samme</p>
        </div>
      </div>
    </footer>
  );
}
