"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const nav = [
  { href: "/plans", label: "Plans" },
  { href: "/coach", label: "Structure Coach" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-stone-200 bg-stone-100/80 backdrop-blur sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <Link
          href="/"
          className="font-display text-2xl tracking-tight text-stone-900"
          onClick={() => setOpen(false)}
        >
          Heavy <span className="text-amber-700">&amp;</span> Kind
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-700">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-amber-700 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="md:hidden p-2 -mr-2 text-stone-900"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t border-stone-200 bg-stone-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col gap-3 text-base font-medium text-stone-700">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-2 hover:text-amber-700 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
