import { features, type Feature } from "./content";

const accentStyles: Record<Feature["accent"], string> = {
  blue: "border-sky-100 bg-sky-50 text-sky-700",
  green: "border-emerald-100 bg-emerald-50 text-emerald-700",
  coral: "border-orange-100 bg-orange-50 text-orange-700",
};

function FeatureCard({ feature, index }: { feature: Feature; index: number }) {
  return (
    <article
      id={feature.id}
      className="scroll-mt-28 rounded-lg border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/70 sm:p-7"
    >
      <div className="flex items-start justify-between gap-4">
        <span
          className={`rounded-full border px-3 py-1 text-xs font-semibold ${accentStyles[feature.accent]}`}
        >
          {feature.eyebrow}
        </span>
        <span className="text-sm font-semibold text-slate-300">0{index + 1}</span>
      </div>
      <h3 className="mt-8 text-2xl font-semibold leading-tight text-slate-950">
        {feature.title}
      </h3>
      <p className="mt-4 text-base leading-7 text-slate-600">{feature.description}</p>
      <ul className="mt-7 space-y-3">
        {feature.points.map((point) => (
          <li key={point} className="flex gap-3 text-sm leading-6 text-slate-600">
            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-sky-500" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export function FeatureSection() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-600">
            Designed for the moments that feel hardest abroad
          </p>
          <h2 className="mt-4 text-4xl font-semibold leading-tight text-slate-950 sm:text-5xl">
            Three tools, one calm path to care.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            The landing experience mirrors the product: simple choices, reassuring
            language, and fast mobile actions for visitors who need clarity now.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard key={feature.id} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
