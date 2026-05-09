export function CTASection() {
  return (
    <section id="early-access" className="bg-white py-16 sm:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-lg bg-slate-950 px-5 py-10 text-white shadow-2xl shadow-slate-200 sm:px-10 sm:py-14 lg:px-14">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-300">
                IslandMed AI
              </p>
              <h2 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
                Healthcare support for foreigners in Hainan.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-300">
                Join the early access list for hospital discovery, medical translation,
                and symptom guidance designed around calm travel healthcare.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <a
                href="mailto:hello@islandmed.ai"
                className="inline-flex min-h-14 items-center justify-center rounded-full bg-white px-6 text-base font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-sky-50"
              >
                Request early access
              </a>
              <a
                href="#top"
                className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/20 px-6 text-base font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
              >
                Back to top
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
