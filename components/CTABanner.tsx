import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTABanner({
  title,
  body,
  ctaLabel = "Start the conversation",
  ctaHref = "/contact",
}: {
  title: string;
  body: string;
  ctaLabel?: string;
  ctaHref?: string;
}) {
  return (
    <section className="bg-stone-900 text-stone-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24 grid gap-8 md:grid-cols-2 md:items-center">
        <div>
          <h2 className="font-display text-4xl md:text-5xl">{title}</h2>
          <p className="mt-4 text-stone-300 max-w-xl">{body}</p>
        </div>
        <div className="md:justify-self-end">
          <Link
            href={ctaHref}
            className="inline-flex items-center gap-2 rounded-full bg-amber-700 text-stone-100 px-6 py-3 text-sm font-medium hover:bg-amber-600 transition-colors"
          >
            {ctaLabel}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
