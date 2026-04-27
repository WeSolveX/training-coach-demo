import CTABanner from "@/components/CTABanner";

export const metadata = {
  title: "About — Heavy & Kind",
  description: "Coach Maria. Ten years coaching. Lifelong lifter.",
};

const philosophy = [
  {
    heading: "Programming over personality",
    body: "A loud coach is not a good coach. A good coach has a plan, watches your numbers, and adjusts when the plan stops working. Volume goes up. The voice does not.",
  },
  {
    heading: "Heavy means heavy for you",
    body: "Heavy is relative, not absolute. The point is loading that demands respect from your nervous system on the day you train. We start there and we build.",
  },
  {
    heading: "Kindness is not softness",
    body: "Calm coaching is not low standards. The standards are real. The pressure is the bar, not the coach.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="aspect-[4/5] overflow-hidden rounded-3xl border border-stone-200 bg-stone-200">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=1000&q=80"
              alt="Coach Maria in the gym"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-amber-700">
              About the coach
            </p>
            <h1 className="mt-3 font-display text-5xl md:text-6xl text-stone-900">
              Meet Coach Maria.
            </h1>
            <p className="mt-6 text-xl text-stone-700">
              Coach Maria &mdash; 10 years coaching, certified strength
              specialist, lifelong lifter.
            </p>
            <p className="mt-6 text-stone-700 leading-relaxed">
              Maria has coached beginners through their first deadlift and
              taken intermediate lifters to tested 1RMs they didn&apos;t
              think they had in them. The thread through all of it is the
              same: real programming, calm delivery, and a standard that
              doesn&apos;t move.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white border-y border-stone-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-widest text-amber-700">
              Philosophy
            </p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl text-stone-900">
              Women have been sold weak training for decades. You deserve
              real programming.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {philosophy.map((p) => (
              <div
                key={p.heading}
                className="rounded-2xl border border-stone-200 bg-stone-50 p-8"
              >
                <h3 className="font-display text-xl text-stone-900">
                  {p.heading}
                </h3>
                <p className="mt-3 text-stone-700">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Train with a coach who picks up the phone."
        body="Heavy weights. Kind coaching. A real plan and a real human on the other end."
        ctaLabel="Get in touch"
      />
    </>
  );
}
