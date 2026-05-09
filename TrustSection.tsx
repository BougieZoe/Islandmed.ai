const steps = [
  {
    title: "Choose your situation",
    text: "Find a hospital, translate a visit, or describe symptoms.",
  },
  {
    title: "See clear options",
    text: "Language, clinic availability, urgency, and next-step guidance stay visible.",
  },
  {
    title: "Move with confidence",
    text: "Open maps, start translation, or save the recommended care type.",
  },
];

export function TrustSection() {
  return (
    <section className="bg-slate-50 py-16 sm:py-24">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
            Mobile-first care flow
          </p>
          <h2 className="mt-4 text-4xl font-semibold leading-tight text-slate-950">
            Built for anxious, tired, jet-lagged users.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            IslandMed AI keeps every screen quiet and directional. The interface avoids
            dense forms and technical labels so older travelers and first-time visitors
            can act quickly.
          </p>
        </div>

        <div className="grid gap-4">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="flex gap-4 rounded-lg border border-white bg-white p-5 shadow-sm shadow-slate-200/70"
            >
              <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-sky-100 text-sm font-semibold text-sky-700">
                {index + 1}
              </span>
              <div>
                <h3 className="text-lg font-semibold text-slate-950">{step.title}</h3>
                <p className="mt-2 text-base leading-7 text-slate-600">{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
