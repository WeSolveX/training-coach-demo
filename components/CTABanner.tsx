import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTABanner({
  title,
  body,
  ctaLabel = "Kom i gang",
  ctaHref = "/programmet",
  variant = "ink",
}: {
  title: string;
  body: string;
  ctaLabel?: string;
  ctaHref?: string;
  variant?: "ink" | "rust";
}) {
  const isRust = variant === "rust";
  return (
    <section
      className={
        isRust
          ? "bg-[var(--color-rust)] text-[var(--color-bone)]"
          : "bg-[var(--color-ink)] text-[var(--color-bone)]"
      }
    >
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 py-24 md:py-32 grid gap-10 md:grid-cols-12 md:items-end">
        <div className="md:col-span-8">
          <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-[0.95]">
            {title}
          </h2>
          <p className="mt-6 text-lg text-[var(--color-bone)]/80 max-w-2xl">
            {body}
          </p>
        </div>
        <div className="md:col-span-4 md:justify-self-end">
          <Link
            href={ctaHref}
            className={
              isRust
                ? "inline-flex items-center gap-2 rounded-full bg-[var(--color-ink)] text-[var(--color-bone)] px-7 py-4 text-sm font-medium hover:bg-[var(--color-bone)] hover:text-[var(--color-ink)] transition-colors"
                : "inline-flex items-center gap-2 rounded-full bg-[var(--color-rust)] text-[var(--color-bone)] px-7 py-4 text-sm font-medium hover:bg-[var(--color-bone)] hover:text-[var(--color-ink)] transition-colors"
            }
          >
            {ctaLabel}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
