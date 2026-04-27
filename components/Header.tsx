"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const nav = [
  { href: "/programmet", label: "Programmet" },
  { href: "/filosofi", label: "Filosofi" },
  { href: "/om", label: "Om Monika" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-[var(--color-bone-deep)] bg-[var(--color-bone)]/85 backdrop-blur sticky top-0 z-50">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between h-20">
        <Link
          href="/"
          className="flex items-baseline gap-1 text-[var(--color-ink)]"
          onClick={() => setOpen(false)}
        >
          <span className="font-display text-2xl tracking-tight">monika</span>
          <span className="font-display-italic text-2xl text-[var(--color-rust)]">powers</span>
        </Link>

        <nav className="hidden md:flex items-center gap-10 text-sm font-medium text-[var(--color-ink-soft)]">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-[var(--color-rust)] transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link href="/programmet" className="btn-primary text-xs">
            Køb programmet
          </Link>
        </div>

        <button
          aria-label={open ? "Luk menu" : "Åbn menu"}
          aria-expanded={open}
          className="md:hidden p-2 -mr-2 text-[var(--color-ink)]"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t border-[var(--color-bone-deep)] bg-[var(--color-bone)]">
          <div className="max-w-[1400px] mx-auto px-5 sm:px-8 py-6 flex flex-col gap-4 text-base font-medium text-[var(--color-ink-soft)]">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-2 hover:text-[var(--color-rust)] transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/programmet"
              onClick={() => setOpen(false)}
              className="btn-primary mt-2 self-start"
            >
              Køb programmet
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
