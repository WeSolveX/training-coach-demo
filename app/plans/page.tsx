import PlanCard from "@/components/PlanCard";
import CTABanner from "@/components/CTABanner";
import { plans } from "@/lib/plans";

export const metadata = {
  title: "Training Plans — Heavy & Kind",
  description:
    "Three plans, one philosophy: Beginner Power, Intermediate Strength, Advanced Power.",
};

export default function PlansPage() {
  return (
    <>
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-widest text-amber-700">
              Training plans
            </p>
            <h1 className="mt-3 font-display text-5xl md:text-6xl text-stone-900">
              Not another app. A real plan.
            </h1>
            <p className="mt-5 text-lg text-stone-700">
              Periodized programming you can actually follow, with check-ins
              that matter.
            </p>
          </div>

          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {plans.map((p) => (
              <PlanCard key={p.slug} plan={p} />
            ))}
          </div>

          <div className="mt-16 rounded-2xl border border-stone-200 bg-white p-8 shadow-sm">
            <h2 className="font-display text-2xl text-stone-900">
              How to choose
            </h2>
            <ul className="mt-4 grid gap-3 md:grid-cols-3 text-sm text-stone-700">
              <li>
                <span className="font-medium text-stone-900">
                  New to lifting?
                </span>{" "}
                Start with Beginner Power. Eight weeks builds the base.
              </li>
              <li>
                <span className="font-medium text-stone-900">
                  Lifted before?
                </span>{" "}
                Intermediate Strength is where most lifters spend the longest
                and gain the most.
              </li>
              <li>
                <span className="font-medium text-stone-900">
                  Chasing a number?
                </span>{" "}
                Advanced Power peaks you for a tested 1RM or meet day.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <CTABanner
        title="Not sure which plan?"
        body="Tell us your training history, your schedule, and where you want to go. We'll point you at the right starting block."
        ctaLabel="Talk to a coach"
      />
    </>
  );
}
