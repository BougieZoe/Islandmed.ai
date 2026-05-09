import { navItems } from "@/components/landing/content";

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/70 bg-white/80 backdrop-blur-2xl">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8"
      >
        <a href="#top" className="flex items-center gap-3" aria-label="IslandMed AI home">
          <span className="grid size-10 place-items-center rounded-lg bg-sky-100 text-sm font-semibold text-sky-700 shadow-sm shadow-sky-100">
            IM
          </span>
          <span className="text-base font-semibold tracking-normal text-slate-950">
            IslandMed AI
          </span>
        </a>

        <div className="hidden items-center gap-1 rounded-full border border-slate-200 bg-white/70 p-1 shadow-sm shadow-slate-200/50 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-sky-50 hover:text-slate-950"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="#early-access"
          className="inline-flex min-h-11 items-center justify-center rounded-full bg-slate-950 px-4 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition hover:-translate-y-0.5 hover:bg-slate-800"
        >
          Join waitlist
        </a>
      </nav>
    </header>
  );
}
