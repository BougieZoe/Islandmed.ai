import type { Hospital, LanguageCode } from "@/lib/hospitals/types";

const languageTone: Record<LanguageCode, string> = {
  en: "border-sky-100 bg-sky-50 text-sky-700",
  ko: "border-violet-100 bg-violet-50 text-violet-700",
  ja: "border-rose-100 bg-rose-50 text-rose-700",
  zh: "border-slate-200 bg-slate-50 text-slate-600",
};

function StatusPill({ active, label }: { active: boolean; label: string }) {
  return (
    <span
      className={`inline-flex min-h-8 items-center rounded-full border px-3 text-xs font-semibold ${
        active
          ? "border-emerald-100 bg-emerald-50 text-emerald-700"
          : "border-slate-200 bg-slate-50 text-slate-500"
      }`}
    >
      {label}
    </span>
  );
}

export function HospitalCard({
  hospital,
  onViewDetails,
}: {
  hospital: Hospital;
  onViewDetails: (hospital: Hospital) => void;
}) {
  return (
    <article className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/70 transition hover:-translate-y-0.5 hover:border-sky-200 hover:shadow-md hover:shadow-sky-100/80">
      <div className="flex flex-col gap-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-medium text-slate-500">
              {hospital.location.cityName} · {hospital.location.district}
            </p>
            <h2 className="mt-2 text-2xl font-semibold leading-tight text-slate-950">
              {hospital.nameEn}
            </h2>
            <p className="mt-1 text-base text-slate-500">{hospital.nameZh}</p>
          </div>
          <span className="hidden rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-sky-700 sm:inline-flex">
            {hospital.careLevel}
          </span>
        </div>

        <p className="text-base leading-7 text-slate-600">{hospital.summary}</p>

        <div className="flex flex-wrap gap-2">
          {hospital.languages.map((language) => (
            <span
              key={language.code}
              className={`inline-flex min-h-8 items-center rounded-full border px-3 text-xs font-semibold ${languageTone[language.code]}`}
              title={language.nativeName}
            >
              {language.name}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-2">
          <StatusPill
            active={hospital.services.hasInternationalClinic}
            label={
              hospital.services.hasInternationalClinic
                ? "International clinic"
                : "No international clinic"
            }
          />
          <StatusPill
            active={hospital.services.hasEmergency}
            label={
              hospital.services.hasEmergency
                ? `Emergency ${hospital.services.emergencyHours ?? ""}`.trim()
                : "No emergency"
            }
          />
        </div>

        <dl className="grid gap-4 text-sm sm:grid-cols-2">
          <div>
            <dt className="font-semibold text-slate-950">Opening hours</dt>
            <dd className="mt-1 leading-6 text-slate-600">{hospital.openingHours}</dd>
          </div>
          <div>
            <dt className="font-semibold text-slate-950">Address</dt>
            <dd className="mt-1 leading-6 text-slate-600">{hospital.location.addressEn}</dd>
          </div>
        </dl>

        <div className="grid gap-3 sm:grid-cols-3">
          <a
            href={hospital.location.mapUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-900 transition hover:border-sky-200 hover:bg-sky-50"
          >
            Map
          </a>
          <a
            href={`tel:${hospital.contact.internationalPhone.replaceAll(" ", "")}`}
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-sky-600 px-4 text-sm font-semibold text-white shadow-lg shadow-sky-100 transition hover:bg-sky-700"
          >
            Phone
          </a>
          <button
            type="button"
            onClick={() => onViewDetails(hospital)}
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-slate-950 px-4 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Details
          </button>
        </div>
      </div>
    </article>
  );
}
