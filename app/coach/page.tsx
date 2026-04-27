import Link from "next/link";
import FeatureGrid, { Feature } from "@/components/FeatureGrid";
import CTABanner from "@/components/CTABanner";
import {
  ClipboardList,
  CalendarClock,
  Video,
  TrendingUp,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "Structure Coach — Heavy & Kind",
  description:
    "What a structure coach is, what we do, and what we don't do.",
};

const includes: Feature[] = [
  {
    title: "Periodized plan",
    body: "A real training block, not a list of exercises. Sets, reps, intensity targets, and progression rules.",
    icon: ClipboardList,
  },
  {
    title: "Weekly check-ins",
    body: "Short, focused calls or messages. We look at what you trained, what felt off, and what to adjust.",
    icon: CalendarClock,
  },
  {
    title: "Form review on video",
    body: "Send a clip from your phone. We review it and reply with specific cues you can use the next session.",
    icon: Video,
  },
  {
    title: "Deload management",
    body: "Planned recovery weeks so you arrive at the next block fresh, not fried. We see the fatigue before you do.",
    icon: TrendingUp,
  },
  {
    title: "Progression tracking",
    body: "Numbers on paper. We track what's actually moving and act on it. No guesswork, no vibes.",
    icon: ShieldCheck,
  },
];

const excludes = [
  "Real-time gym coaching (we are not standing next to the rack)",
  "Meal plans and macros (we leave that to nutrition specialists)",
  "Magic (the work is the work)",
];

export default function CoachPage() {
  return (
    <>
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-widest text-amber-700">
              The structure coach
            </p>
            <h1 className="mt-3 font-display text-5xl md:text-6xl text-stone-900">
              Structure, not theatrics.
            </h1>
            <p className="mt-6 text-lg text-stone-700">
              A structure coach is not a personal trainer in your gym, and not
              a generic app. We give you the framework &mdash; the right plan,
              the right progression, the right check-ins &mdash; so you can
              train with confidence.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {[
              {
                step: "1",
                title: "We assess where you are.",
                body: "Training history, current numbers, schedule, equipment, recovery. Nothing fancy. Just enough to build the right plan.",
              },
              {
                step: "2",
                title: "You get a plan built around your life.",
                body: "Three or four sessions, the right movements, the right loading. Designed to fit your week, not break it.",
              },
              {
                step: "3",
                title: "We adjust as you progress.",
                body: "The bar moves. Life moves. We adjust together. The standard stays put, the path bends.",
              },
            ].map((s) => (
              <div
                key={s.step}
                className="rounded-2xl border border-stone-200 bg-white p-8 shadow-sm"
              >
                <div className="font-display text-5xl text-amber-700">
                  {s.step}
                </div>
                <h3 className="mt-4 font-display text-2xl text-stone-900">
                  {s.title}
                </h3>
                <p className="mt-3 text-stone-700">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white border-y border-stone-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-widest text-amber-700">
              What you get
            </p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl text-stone-900">
              The plan adjusts. The standards don&apos;t.
            </h2>
            <p className="mt-5 text-lg text-stone-700">
              We meet you where you are. We don&apos;t lower the bar &mdash;
              we help you raise it.
            </p>
          </div>

          <div className="mt-12">
            <FeatureGrid features={includes} columns={3} />
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-stone-200 bg-stone-50 p-8">
              <h3 className="font-display text-2xl text-stone-900">
                What this is
              </h3>
              <p className="mt-3 text-stone-700">
                A real coaching relationship with a real human. Programming,
                check-ins, and a phone you can actually call when something
                feels off.
              </p>
            </div>
            <div className="rounded-2xl border border-stone-200 bg-stone-50 p-8">
              <h3 className="font-display text-2xl text-stone-900">
                What this is not
              </h3>
              <ul className="mt-3 space-y-2 text-stone-700">
                {excludes.map((e) => (
                  <li key={e}>&mdash; {e}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12">
            <Link
              href="/plans"
              className="inline-flex items-center gap-2 text-amber-700 font-medium hover:text-stone-900"
            >
              See the three plans
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <CTABanner
        title="Want a plan that fits your life?"
        body="Tell us your training history and your goal. We'll point you at the right plan and the right starting point."
        ctaLabel="Start the conversation"
      />
    </>
  );
}
