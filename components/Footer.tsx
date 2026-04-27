import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-stone-200 bg-stone-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid gap-8 md:grid-cols-3 text-sm text-stone-600">
        <div>
          <div className="font-display text-xl text-stone-900">
            Heavy <span className="text-amber-700">&amp;</span> Kind
          </div>
          <p className="mt-3 max-w-xs">
            Strength training for women who want to lift heavy and be treated
            kindly.
          </p>
        </div>

        <div>
          <div className="font-medium text-stone-900 mb-3">Site</div>
          <ul className="space-y-2">
            <li><Link href="/plans" className="hover:text-amber-700">Plans</Link></li>
            <li><Link href="/coach" className="hover:text-amber-700">Structure Coach</Link></li>
            <li><Link href="/about" className="hover:text-amber-700">About</Link></li>
            <li><Link href="/contact" className="hover:text-amber-700">Contact</Link></li>
          </ul>
        </div>

        <div>
          <div className="font-medium text-stone-900 mb-3">Get in touch</div>
          <p>
            <a
              href="mailto:hello@heavyandkind.example"
              className="hover:text-amber-700"
            >
              hello@heavyandkind.example
            </a>
          </p>
          <p className="mt-6 text-xs text-stone-500">
            &copy; {year} Heavy &amp; Kind. Demo site.
          </p>
        </div>
      </div>
    </footer>
  );
}
