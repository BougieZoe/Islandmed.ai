import { medicalCards } from "@/components/landing/content";

function FloatingMedicalCards() {
  return (
    <div
      className="pointer-events-none absolute inset-x-0 bottom-6 top-24 mx-auto hidden w-full max-w-6xl sm:block"
      aria-hidden="true"
    >
      <div className="absolute right-8 top-6 h-64 w-64 rounded-lg border border-sky-100 bg-sky-50/50" />
      <div className="absolute left-8 top-40 h-48 w-48 rounded-lg border border-emerald-100 bg-emerald-50/40" />

      {medicalCards.map((card) => (
        <div
          key={card.label}
          className={`${card.className} absolute w-64 rounded-lg border border-white/80 bg-white/90 p-5 shadow-2xl shadow-slate-200/70 backdrop-blur-xl`}
        >
          <div className="mb-4 flex items-center justify-between gap-3">
            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
              {card.label}
            </span>
            <span className="size-3 rounded-full bg-emerald-400 shadow-[0_0_0_6px_rgba(52,211,153,0.16)]" />
          </div>
          <p className="text-lg font-semibold text-slate-950">{card.value}</p>
          <p className="mt-2 text-sm leading-6 text-slate-500">{card.meta}</p>
        </div>
      ))}
    </div>
  );
}

function PhonePreview() {
  return (
    <div className="relative mx-auto mt-12 w-full max-w-sm sm:mt-16 lg:mt-0">
      <div className="absolute inset-8 rounded-[2.25rem] border border-sky-100 bg-sky-100/35" />
      <div className="relative rounded-[2.8rem] border border-slate-200 bg-slate-950 p-2 shadow-2xl shadow-slate-300/60">
        <div className="rounded-[2.25rem] bg-gradient-to-b from-white to-sky-50 p-4">
          <div className="mx-auto mb-5 h-1.5 w-16 rounded-full bg-slate-200" />
          <div className="rounded-lg bg-white p-4 shadow-sm shadow-slate-200/80">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-600">
                  Nearby
                </p>
                <h3 className="mt-1 text-xl font-semibold text-slate-950">
                  Sanya International Clinic
                </h3>
              </div>
              <span className="grid size-12 place-items-center rounded-lg bg-sky-100 text-sm font-bold text-sky-700">
                1.2
              </span>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="rounded-lg bg-slate-50 p-3">
                <p className="text-xs text-slate-500">Languages</p>
                <p className="mt-1 text-sm font-semibold text-slate-900">EN / CN / JP</p>
              </div>
              <div className="rounded-lg bg-emerald-50 p-3">
                <p className="text-xs text-emerald-700">Clinic</p>
                <p className="mt-1 text-sm font-semibold text-emerald-950">Available</p>
              </div>
            </div>
          </div>

          <div className="mt-4 rounded-lg bg-slate-950 p-4 text-white shadow-lg shadow-slate-300/40">
            <p className="text-sm text-slate-300">Translator</p>
            <div className="mt-4 space-y-3">
              <div className="max-w-[82%] rounded-lg bg-white/10 p-3 text-sm leading-6">
                I have stomach pain since this morning.
              </div>
              <div className="ml-auto max-w-[82%] rounded-lg bg-sky-300 p-3 text-sm font-medium leading-6 text-slate-950">
                Patient reports stomach pain from this morning.
              </div>
            </div>
          </div>

          <div className="mt-4 rounded-lg border border-orange-100 bg-orange-50 p-4">
            <p className="text-sm font-semibold text-orange-950">Symptom assistant</p>
            <p className="mt-2 text-sm leading-6 text-orange-900/75">
              Suggested department: Internal medicine. Seek care today.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#f2f8ff_72%,#ffffff_100%)] pt-28 sm:pt-36"
    >
      <FloatingMedicalCards />
      <div className="absolute inset-x-0 top-16 h-px bg-gradient-to-r from-transparent via-sky-200 to-transparent" />
      <div className="relative mx-auto grid min-h-[calc(100svh-4rem)] w-full max-w-7xl items-center gap-10 px-4 pb-16 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:px-8">
        <div className="max-w-3xl">
          <p className="inline-flex min-h-10 items-center rounded-full border border-sky-100 bg-white/80 px-4 text-sm font-semibold text-sky-700 shadow-sm shadow-sky-100/70">
            Calm healthcare guidance for island travel
          </p>
          <h1 className="mt-7 max-w-4xl text-5xl font-semibold leading-[1.03] tracking-normal text-slate-950 sm:text-6xl lg:text-7xl">
            Healthcare feels closer when every step is clear.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl sm:leading-9">
            IslandMed AI helps foreigners in Hainan find hospitals, translate medical
            conversations, and understand where to go next without stress.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#early-access"
              className="inline-flex min-h-14 items-center justify-center rounded-full bg-sky-600 px-6 text-base font-semibold text-white shadow-xl shadow-sky-200 transition hover:-translate-y-0.5 hover:bg-sky-700"
            >
              Start with IslandMed AI
            </a>
            <a
              href="#directory"
              className="inline-flex min-h-14 items-center justify-center rounded-full border border-slate-200 bg-white px-6 text-base font-semibold text-slate-900 shadow-sm shadow-slate-200/60 transition hover:-translate-y-0.5 hover:border-sky-200 hover:bg-sky-50"
            >
              Explore features {"->"}
            </a>
          </div>
          <div className="mt-9 grid max-w-xl grid-cols-3 gap-3 text-sm text-slate-500">
            <div>
              <p className="text-2xl font-semibold text-slate-950">4</p>
              <p className="mt-1 leading-5">Core languages</p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-slate-950">24/7</p>
              <p className="mt-1 leading-5">Travel-ready guidance</p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-slate-950">1 tap</p>
              <p className="mt-1 leading-5">To care direction</p>
            </div>
          </div>
        </div>
        <PhonePreview />
      </div>
    </section>
  );
}
