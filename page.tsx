import type { Metadata } from "next";
import Link from "next/link";
import { HospitalDirectory } from "@/components/hospitals/HospitalDirectory";
import { hospitals } from "@/lib/hospitals/mock-data";

export const metadata: Metadata = {
  title: "Hospital Directory | IslandMed AI",
  description:
    "Search hospitals in Haikou and Sanya by language support, international clinic availability, and emergency service.",
};

export default function HospitalsPage() {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#f5faff_0%,#ffffff_42%,#f8fafc_100%)]">
      <header className="border-b border-white/80 bg-white/85 backdrop-blur-2xl">
        <nav className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-3" aria-label="IslandMed AI home">
            <span className="grid size-10 place-items-center rounded-lg bg-sky-100 text-sm font-semibold text-sky-700 shadow-sm shadow-sky-100">
              IM
            </span>
            <span className="text-base font-semibold text-slate-950">IslandMed AI</span>
          </Link>
          <Link
            href="/"
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-700 transition hover:border-sky-200 hover:bg-sky-50"
          >
            Home
          </Link>
        </nav>
      </header>

      <section className="mx-auto w-full max-w-7xl px-4 pb-10 pt-10 sm:px-6 sm:pb-14 sm:pt-14 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_22rem] lg:items-end">
          <div>
            <p className="inline-flex min-h-9 items-center rounded-full border border-sky-100 bg-white px-3 text-sm font-semibold text-sky-700 shadow-sm shadow-sky-100/70">
              Hospital directory
            </p>
            <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight text-slate-950 sm:text-6xl">
              Find foreigner-friendly care in Haikou and Sanya.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              Search hospitals by language support, international clinic access, and
              emergency availability. Each result keeps the next action simple:
              open a map, call, or review details.
            </p>
          </div>

          <div className="rounded-lg border border-sky-100 bg-white p-5 shadow-sm shadow-sky-100/80">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-400">
              Directory status
            </p>
            <div className="mt-4 grid grid-cols-3 gap-3 text-center">
              <div>
                <p className="text-2xl font-semibold text-slate-950">{hospitals.length}</p>
                <p className="mt-1 text-xs leading-5 text-slate-500">Hospitals</p>
              </div>
              <div>
                <p className="text-2xl font-semibold text-slate-950">2</p>
                <p className="mt-1 text-xs leading-5 text-slate-500">Cities</p>
              </div>
              <div>
                <p className="text-2xl font-semibold text-slate-950">4</p>
                <p className="mt-1 text-xs leading-5 text-slate-500">Languages</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8">
        <HospitalDirectory hospitals={hospitals} />
      </section>
    </main>
  );
}
