import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-sm font-medium uppercase tracking-widest text-amber-700">
            Strength training, structured
          </p>
          <h1 className="mt-4 font-display text-5xl sm:text-6xl md:text-7xl leading-[1.05] text-stone-900">
            Heavy weights. Kind coaching.
          </h1>
          <p className="mt-6 text-xl text-stone-700 max-w-xl">
            Three plans. Real loading. A coach who picks up the phone.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/plans"
              className="inline-flex items-center gap-2 rounded-full bg-stone-900 text-stone-100 px-6 py-3 text-sm font-medium hover:bg-amber-700 transition-colors"
            >
              See the plans
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/coach"
              className="inline-flex items-center gap-2 rounded-full border border-stone-900 text-stone-900 px-6 py-3 text-sm font-medium hover:bg-stone-900 hover:text-stone-100 transition-colors"
            >
              Meet your structure coach
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-[4/5] overflow-hidden rounded-3xl border border-stone-200 bg-stone-200 shadow-sm">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80"
              alt="Woman deadlifting in a strength gym"
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden md:block bg-white border border-stone-200 rounded-2xl shadow-sm p-5 max-w-xs">
            <p className="text-xs uppercase tracking-widest text-stone-500">
              This week
            </p>
            <p className="mt-2 text-sm font-medium text-stone-900">
              Back squat — work up to a heavy 3 at RPE 8. Then 3x5 at 80%.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
