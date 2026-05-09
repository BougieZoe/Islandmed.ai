"use client";

import type { HospitalFilters, HospitalFilterKey } from "@/lib/hospitals/types";
import { hospitalFilters } from "./filter-config";

export const emptyHospitalFilters: HospitalFilters = {
  english: false,
  korean: false,
  japanese: false,
  internationalClinic: false,
  emergency: false,
};

export function HospitalFiltersPanel({
  query,
  filters,
  onQueryChange,
  onFilterChange,
  onClear,
}: {
  query: string;
  filters: HospitalFilters;
  onQueryChange: (query: string) => void;
  onFilterChange: (key: HospitalFilterKey) => void;
  onClear: () => void;
}) {
  const activeFilterCount = Object.values(filters).filter(Boolean).length;

  return (
    <section className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm shadow-slate-200/70 sm:p-5">
      <div className="flex flex-col gap-3">
        <label className="text-sm font-semibold text-slate-950" htmlFor="hospital-search">
          Search hospitals
        </label>
        <input
          id="hospital-search"
          value={query}
          onChange={(event) => onQueryChange(event.target.value)}
          placeholder="Search by hospital, city, address, or department"
          className="min-h-14 w-full rounded-full border border-slate-200 bg-slate-50 px-5 text-base text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-sky-300 focus:bg-white focus:ring-4 focus:ring-sky-100"
          type="search"
        />
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {hospitalFilters.map((filter) => {
          const isActive = filters[filter.key];

          return (
            <button
              key={filter.key}
              type="button"
              aria-pressed={isActive}
              onClick={() => onFilterChange(filter.key)}
              className={`min-h-11 rounded-full border px-4 text-sm font-semibold transition ${
                isActive
                  ? "border-sky-200 bg-sky-100 text-sky-800"
                  : "border-slate-200 bg-white text-slate-600 hover:border-sky-200 hover:bg-sky-50"
              }`}
            >
              {filter.label}
            </button>
          );
        })}
      </div>

      <div className="mt-5 flex items-center justify-between gap-4 text-sm text-slate-500">
        <p>
          {activeFilterCount === 0
            ? "No filters selected"
            : `${activeFilterCount} filter${activeFilterCount === 1 ? "" : "s"} selected`}
        </p>
        <button
          type="button"
          onClick={onClear}
          className="min-h-10 rounded-full px-4 font-semibold text-slate-700 transition hover:bg-slate-100"
        >
          Clear
        </button>
      </div>
    </section>
  );
}
