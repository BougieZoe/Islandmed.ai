type HospitalCardProps = {
  name: string;
  nameZh: string;
  languages: string[];
  phone: string;
  verified: boolean;
};

export function HospitalCard({
  name,
  nameZh,
  languages,
  phone,
  verified,
}: HospitalCardProps) {
  const telHref = `tel:${phone.replace(/\s/g, "")}`;

  return (
    <article className="rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm">
      <div className="flex flex-col gap-3">
        <div>
          <h3 className="text-[15px] font-semibold leading-snug text-slate-900">
            {name}
          </h3>
          <p className="mt-0.5 text-sm text-slate-500">{nameZh}</p>
        </div>

        {verified ? (
          <span className="inline-flex w-fit items-center rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-800">
            ✅ English confirmed
          </span>
        ) : (
          <span className="inline-flex w-fit items-nter rounded-full border border-amber-200 bg-amber-50 px-2.5 py-1 text-xs font-medium text-amber-900">
            ⚠️ Language support unconfirmed
          </span>
        )}

        {languages.length > 0 ? (
          <div className="flex flex-wrap gap-1.5">
            <span className="sr-only">Supported languages:</span>
            {languages.map((language) => (
              <span
                key={language}
                className="inline-flex items-center rounded-full border border-sky-100 bg-sky-50 px-2.5 py-0.5 text-xs font-medium text-sky-800"
              >
                {language}
              </span>
            ))}
          </div>
        ) : null}

        <div className="flex gap-2">
          
            href={`https://www.google.com/maps/search/${encodeURIComponent(name + " " + nameZh)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex min-h-9 items-center justify-center rounded-lg border border-slate-200 bg-white3 text-xs font-medium text-slate-700 transition hover:bg-slate-50"
          >
            📍 Google Maps
          </a>
          
            href={`https://map.baidu.com/search/${encodeURIComponent(nameZh)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex min-h-9 items-center justify-center rounded-lg border border-slate-200 bg-white px-3 text-xs font-medium text-slate-700 transition hover:bg-slate-50"
          >
            🗺️ 百度地图
          </a>
        </div>

        
          href={telHref}
          className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-sky-600 px-4 text-sm font-semibold text-white transition hover:bg-sky-700 active:bg-sky-800"
        >
          <PhoneIcon />
          Call {phone}
        </a>

        {!verified ? (
          <p className="text-center text-xs leading-relaxed text-slate-500">
            We recommend calling ahead to confirm English service.
          </ null}
      </div>
    </article>
  );
}

function PhoneIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="size-4 shrink-0"
      aria-hidden
    >
      <path
        fillRule="evenodd"
        d="M2 3.5A1.5 1.5 0 0 1 3.5 2h1.148a1.5 1.5 0 0 1 1.465 1.175l.716 3.223a1.5 1.5 0 0 1-1.052 1.78l-1.018.339a11.042 11.042 0 0 0 5.516 5.516l.339-1.018a1.5 1.5 0 0 1 1.78-1.052l3.223.716A1.5 1.5 0 0 1 18 15.352V16.5a1.5 1.5 0 0 1-1.5 1.5H15c-7.18 0-13-5.82-13-13V4.5A1.5 1.5 0 0 1 3.5 3H2Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
