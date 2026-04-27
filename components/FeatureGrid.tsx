import { LucideIcon } from "lucide-react";

export type Feature = {
  title: string;
  body: string;
  icon: LucideIcon;
};

export default function FeatureGrid({
  features,
  columns = 3,
}: {
  features: Feature[];
  columns?: 2 | 3 | 4;
}) {
  const colClass =
    columns === 4
      ? "md:grid-cols-2 lg:grid-cols-4"
      : columns === 2
      ? "md:grid-cols-2"
      : "md:grid-cols-3";

  return (
    <ul className={`grid gap-6 ${colClass}`}>
      {features.map((f) => {
        const Icon = f.icon;
        return (
          <li
            key={f.title}
            className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm"
          >
            <Icon className="w-6 h-6 text-amber-700" />
            <h3 className="mt-4 font-display text-xl text-stone-900">
              {f.title}
            </h3>
            <p className="mt-2 text-sm text-stone-700 leading-relaxed">
              {f.body}
            </p>
          </li>
        );
      })}
    </ul>
  );
}
