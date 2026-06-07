import { SiteFooter } from "./SiteFooter"
import { SiteHeader } from "./SiteHeader"

export function Layout({ children }) {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-800 font-sans text-zinc-100">
      <SiteHeader />
      <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col px-4">{children}</main>
      <SiteFooter />
    </div>
  )
}
