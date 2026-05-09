"use client";

import { useMemo, useState } from "react";
import type {
  Hospital,
  HospitalFilterKey,
  HospitalFilters,
  LanguageCode,
} from "@/lib/hospitals/types";
import { HospitalCard } from "./HospitalCard";
import {
  emptyHospitalFilters,
  HospitalFiltersPanel,
} from "./HospitalFilters";
import { HospitalDetailDrawer } from "./HospitalDetailDrawer";

function hospitalHasLanguage(hospital: Hospital, code: LanguageCode) {
  return hospital.languages.some((language) => language.code === code);
}

function hospitalMatchesFilters(hospital: Hospital, filters: HospitalFilters) {
  if (filters.english && !hospitalHasLanguage(hospital, "en")) {
    return false;
  }

  if (filters.korean && !hospitalHasLanguage(hospital, "ko")) {
    return false;
  }

  if (filters.japanese && !hospitalHasLanguage(hospital, "ja")) {
    return false;
  }

  if (filters.internationalClinic && !hospital.services.hasInternationalClinic) {
    return false;
  }

  if (filters.emergency && !hospital.services.hasEmergency) {
    return false;
  }

  return true;
}

function hospitalMatchesQuery(hospital: Hospital, query: string) {
  const normalizedQuery = query.trim().toLowerCase();

  if (!normalizedQuery) {
    return true;
  }

  const searchableText = [
    hospital.nameEn,
    hospital.nameZh,
    hospital.location.cityName,
    hospital.location.district,
    hospital.location.addressEn,
    hospital.location.addressZh,
    hospital.summary,
    ...hospital.services.departments,
    ...hospital.languages.map((language) => language.name),
  ]
    .join(" ")
    .toLowerCase();

  return searchableText.includes(normalizedQuery);
}

export function HospitalDirectory({ hospitals }: { hospitals: Hospital[] }) {
  const [query, setQuery] = useState("");
  const [filters, setFilters] = useState<HospitalFilters>(emptyHospitalFilters);
  const [selectedHospital, setSelectedHospital] = useState<Hospital | null>(null);

  const filteredHospitals = useMemo(
    () =>
      hospitals.filter(
        (hospital) =>
          hospitalMatchesQuery(hospital, query) &&
          hospitalMatchesFilters(hospital, filters),
      ),
    [filters, hospitals, query],
  );

  const cityCounts = useMemo(
    () =>
      filteredHospitals.reduce<Record<string, number>>((accumulator, hospital) => {
        accumulator[hospital.location.cityName] =
          (accumulator[hospital.location.cityName] ?? 0) + 1;
        return accumulator;
      }, {}),
    [filteredHospitals],
  );

  function handleFilterChange(key: HospitalFilterKey) {
    setFilters((currentFilters) => ({
      ...currentFilters,
      [key]: !currentFilters[key],
    }));
  }

  function handleClear() {
    setQuery("");
    setFilters(emptyHospitalFilters);
  }

  return (
    <>
      <div className="grid gap-6 lg:grid-cols-[22rem_1fr] lg:items-start">
        <aside className="lg:sticky lg:top-24">
          <HospitalFiltersPanel
            query={query}
            filters={filters}
            onQueryChange={setQuery}
            onFilterChange={handleFilterChange}
            onClear={handleClear}
          />
        </aside>

        <section aria-live="polite">
          <div className="mb-4 flex flex-col gap-3 rounded-lg border border-slate-200 bg-white p-4 shadow-sm shadow-slate-200/70 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-slate-500">Showing</p>
              <p className="text-2xl font-semibold text-slate-950">
                {filteredHospitals.length} hospital
                {filteredHospitals.length === 1 ? "" : "s"}
              </p>
            </div>
            <div className="flex flex-wrap gap-2 text-sm text-slate-600">
              {Object.entries(cityCounts).map(([city, count]) => (
                <span
                  key={city}
                  className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 font-medium"
                >
                  {city}: {count}
                </span>
              ))}
            </div>
          </div>

          {filteredHospitals.length > 0 ? (
            <div className="grid gap-4">
              {filteredHospitals.map((hospital) => (
                <HospitalCard
                  key={hospital.id}
                  hospital={hospital}
                  onViewDetails={setSelectedHospital}
                />
              ))}
            </div>
          ) : (
            <div className="rounded-lg border border-dashed border-slate-300 bg-white p-8 text-center">
              <h2 className="text-2xl font-semibold text-slate-950">No hospitals found</h2>
              <p className="mx-auto mt-3 max-w-md text-base leading-7 text-slate-600">
                Try clearing one filter or searching for a broader city, department,
                or language.
              </p>
              <button
                type="button"
                onClick={handleClear}
                className="mt-6 inline-flex min-h-12 items-center justify-center rounded-full bg-slate-950 px-5 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Reset search
              </button>
            </div>
          )}
        </section>
      </div>

      <HospitalDetailDrawer
        hospital={selectedHospital}
        onClose={() => setSelectedHospital(null)}
      />
    </>
  );
}
