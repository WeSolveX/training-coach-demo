import { Plan } from "@/lib/plans";
import { Check } from "lucide-react";

export default function PlanCard({ plan }: { plan: Plan }) {
  return (
    <article className="rounded-2xl border border-stone-200 bg-white p-8 shadow-sm flex flex-col">
      <div>
        <p className="text-xs uppercase tracking-widest text-amber-700">
          {plan.weeks}
        </p>
        <h3 className="mt-2 font-display text-3xl text-stone-900">
          {plan.name}
        </h3>
        <p className="mt-3 text-stone-700">{plan.tagline}</p>
      </div>

      <dl className="mt-6 grid grid-cols-2 gap-4 text-sm">
        <div>
          <dt className="text-stone-500">Frequency</dt>
          <dd className="mt-1 font-medium text-stone-900">
            {plan.sessionsPerWeek}
          </dd>
        </div>
        <div>
          <dt className="text-stone-500">Session length</dt>
          <dd className="mt-1 font-medium text-stone-900">
            {plan.sessionLength}
          </dd>
        </div>
      </dl>

      <div className="mt-6">
        <p className="text-sm font-medium text-stone-900">In focus</p>
        <ul className="mt-3 space-y-2 text-sm text-stone-700">
          {plan.focus.map((f) => (
            <li key={f} className="flex items-start gap-2">
              <Check className="w-4 h-4 mt-0.5 text-amber-700 flex-shrink-0" />
              <span>{f}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6">
        <p className="text-sm font-medium text-stone-900">Sample week</p>
        <ul className="mt-3 space-y-1.5 text-sm text-stone-700">
          {plan.sampleWeek.map((d) => (
            <li key={d.day}>
              <span className="font-medium text-stone-900">{d.day}.</span>{" "}
              {d.focus}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8 pt-6 border-t border-stone-200">
        <p className="text-xs uppercase tracking-widest text-stone-500">
          Outcome
        </p>
        <p className="mt-2 text-stone-900 font-medium">{plan.outcome}</p>
      </div>
    </article>
  );
}
