"use client";

import { useEffect } from "react";
import type { Hospital } from "@/lib/hospitals/types";

export function HospitalDetailDrawer({
  hospital,
  onClose,
}: {
  hospital: Hospital | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!hospital) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [hospital, onClose]);

  if (!hospital) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50">
      <button
        type="button"
        aria-label="Close hospital details"
        className="absolute inset-0 bg-slate-950/30 backdrop-blur-sm"
        onClick={onClose}
      />
      <aside
        role="dialog"
        aria-modal="true"
        aria-labelledby="hospital-detail-title"
        className="absolute inset-x-0 bottom-0 max-h-[88svh] overflow-y-auto rounded-t-3xl bg-white p-5 shadow-2xl shadow-slate-900/20 sm:left-auto sm:right-4 sm:top-4 sm:h-[calc(100svh-2rem)] sm:w-full sm:max-w-lg sm:rounded-lg sm:p-6"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-medium text-sky-700">
              {hospital.location.cityName} · verified {hospital.lastVerifiedAt}
            </p>
            <h2
              id="hospital-detail-title"
              className="mt-2 text-3xl font-semibold leading-tight text-slate-950"
            >
              {hospital.nameEn}
            </h2>
            <p className="mt-1 text-lg text-slate-500">{hospital.nameZh}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="grid size-11 shrink-0 place-items-center rounded-full bg-slate-100 text-xl leading-none text-slate-700 transition hover:bg-slate-200"
            aria-label="Close"
          >
            ×
          </button>
        </div>

        <p className="mt-6 text-base leading-7 text-slate-600">{hospital.summary}</p>

        <div className="mt-6 grid grid-cols-2 gap-3">
          <div className="rounded-lg border border-slate-200 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
              Clinic
            </p>
            <p className="mt-2 text-base font-semibold text-slate-950">
              {hospital.services.hasInternationalClinic ? "International" : "General"}
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
              Emergency
            </p>
            <p className="mt-2 text-base font-semibold text-slate-950">
              {hospital.services.hasEmergency
                ? hospital.services.emergencyHours ?? "Available"
                : "Not available"}
            </p>
          </div>
        </div>

        <section className="mt-7">
          <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-400">
            Language support
          </h3>
          <div className="mt-3 space-y-3">
            {hospital.languages.map((language) => (
              <div key={language.code} className="border-b border-slate-100 pb-3 last:border-0">
                <div className="flex items-center justify-between gap-4">
                  <p className="font-semibold text-slate-950">
                    {language.name} · {language.nativeName}
                  </p>
                  <p className="text-sm text-slate-500">{language.availability.replace("_", " ")}</p>
                </div>
                {language.notes ? (
                  <p className="mt-1 text-sm leading-6 text-slate-500">{language.notes}</p>
                ) : null}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-7">
          <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-400">
            Departments
          </h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {hospital.services.departments.map((department) => (
              <span
                key={department}
                className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-medium text-slate-600"
              >
                {department}
              </span>
            ))}
          </div>
        </section>

        <dl className="mt-7 space-y-5">
          <div>
            <dt className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-400">
              Opening hours
            </dt>
            <dd className="mt-2 text-base leading-7 text-slate-700">{hospital.openingHours}</dd>
          </div>
          <div>
            <dt className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-400">
              Address
            </dt>
            <dd className="mt-2 text-base leading-7 text-slate-700">
              {hospital.location.addressEn}
              <br />
              {hospital.location.addressZh}
            </dd>
          </div>
          <div>
            <dt className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-400">
              Phone
            </dt>
            <dd className="mt-2 text-base leading-7 text-slate-700">
              {hospital.contact.internationalPhone}
            </dd>
          </div>
        </dl>

        <div className="sticky bottom-0 -mx-5 mt-8 grid gap-3 border-t border-slate-100 bg-white/95 px-5 py-4 backdrop-blur sm:-mx-6 sm:px-6">
          <a
            href={hospital.location.mapUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-sky-600 px-5 text-sm font-semibold text-white shadow-lg shadow-sky-100 transition hover:bg-sky-700"
          >
            Open map
          </a>
          <a
            href={`tel:${hospital.contact.internationalPhone.replaceAll(" ", "")}`}
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-slate-200 px-5 text-sm font-semibold text-slate-950 transition hover:bg-slate-50"
          >
            Call hospital
          </a>
        </div>
      </aside>
    </div>
  );
}
