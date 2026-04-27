import Link from "next/link";
import Hero from "@/components/Hero";
import FeatureGrid, { Feature } from "@/components/FeatureGrid";
import CTABanner from "@/components/CTABanner";
import { plans } from "@/lib/plans";
import {
  Dumbbell,
  CalendarCheck,
  PhoneCall,
  ArrowRight,
} from "lucide-react";

const features: Feature[] = [
  {
    title: "Real loading, real progression",
    body: "Periodized programming with sets, reps, and intensity targets you can actually follow week to week.",
    icon: Dumbbell,
  },
  {
    title: "Weekly check-ins",
    body: "We review what you trained, what felt heavy, and what to adjust. No autopilot, no ghosting.",
    icon: CalendarCheck,
  },
  {
    title: "A coach who picks up the phone",
    body: "When something goes sideways at the gym, you have a human you can reach. Not a chatbot.",
    icon: PhoneCall,
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-widest text-amber-700">
              The approach
            </p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl text-stone-900">
              Built for women. Built for power.
            </h2>
            <p className="mt-5 text-lg text-stone-700">
              Strength training that respects your time, your body, and your
              goals.
            </p>
          </div>

          <div className="mt-12">
            <FeatureGrid features={features} />
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white border-y border-stone-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-2 md:items-end">
            <div>
              <p className="text-sm font-medium uppercase tracking-widest text-amber-700">
                Three plans
              </p>
              <h2 className="mt-3 font-display text-4xl md:text-5xl text-stone-900">
                Beginners welcome. Advanced lifters too.
              </h2>
              <p className="mt-5 text-lg text-stone-700 max-w-xl">
                Three plans, one philosophy: the bar gets heavier when
                you&apos;re ready, not before.
              </p>
            </div>
            <div className="md:justify-self-end">
              <Link
                href="/plans"
                className="inline-flex items-center gap-2 text-amber-700 font-medium hover:text-stone-900 transition-colors"
              >
                Compare the plans
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {plans.map((p) => (
              <Link
                key={p.slug}
                href="/plans"
                className="group rounded-2xl border border-stone-200 bg-stone-50 p-8 hover:border-amber-700 transition-colors"
              >
                <p className="text-xs uppercase tracking-widest text-amber-700">
                  {p.weeks}
                </p>
                <h3 className="mt-2 font-display text-2xl text-stone-900">
                  {p.name}
                </h3>
                <p className="mt-3 text-stone-700 text-sm">{p.tagline}</p>
                <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-stone-900 group-hover:text-amber-700">
                  See details
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="aspect-[4/3] overflow-hidden rounded-3xl border border-stone-200 bg-stone-200">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80"
              alt="Coach correcting a barbell setup"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-amber-700">
              The method
            </p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl text-stone-900">
              Heavy is the goal. Kind is the method.
            </h2>
            <p className="mt-5 text-lg text-stone-700">
              Hard training, calm coaching. No screaming, no shame, no
              shortcuts.
            </p>
            <Link
              href="/coach"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-stone-900 text-stone-900 px-6 py-3 text-sm font-medium hover:bg-stone-900 hover:text-stone-100 transition-colors"
            >
              How structure coaching works
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to lift heavy?"
        body="Tell us where you are, and we'll point you at the plan that fits. Real programming, real coaching, no nonsense."
        ctaLabel="Get in touch"
      />
    </>
  );
}
