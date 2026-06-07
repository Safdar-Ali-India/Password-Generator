import { BRAND } from "../lib/constants"
import { EXTERNAL_LINKS } from "../lib/links"

function AppIcon() {
  return (
    <div
      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-orange-500/15 ring-1 ring-orange-500/30"
      aria-hidden="true"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-orange-400">
        <path
          d="M7 11V8a5 5 0 0 1 10 0v3"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <rect x="5" y="11" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="16" r="1.5" fill="currentColor" />
      </svg>
    </div>
  )
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-zinc-700/80 bg-zinc-900/95 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between gap-3 px-4">
        <div className="flex min-w-0 items-center gap-2.5">
          <AppIcon />
          <div className="min-w-0">
            <p className="text-base font-semibold tracking-tight text-zinc-100">{BRAND.name}</p>
            <p className="hidden text-xs text-zinc-400 lg:block">{BRAND.tagline}</p>
          </div>
        </div>

        <a
          href={EXTERNAL_LINKS.coffee}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex shrink-0 items-center gap-1.5 rounded-full border border-amber-200/80 bg-gradient-to-r from-amber-50 to-yellow-50 px-3 py-1.5 text-xs font-semibold text-amber-900 shadow-sm transition-all hover:border-amber-300 hover:from-amber-100 hover:to-yellow-100 hover:shadow-md sm:px-4 sm:text-sm"
        >
          <span className="text-base leading-none transition-transform group-hover:scale-110" aria-hidden="true">
            ☕
          </span>
          <span className="hidden sm:inline">Buy me a coffee</span>
          <span className="sm:hidden">Coffee</span>
        </a>
      </div>
    </header>
  )
}
