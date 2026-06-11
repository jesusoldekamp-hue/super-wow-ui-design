import { Code2 } from "lucide-react"
import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-10 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <div>
          <p className="font-medium text-foreground">Awesome Modern UI</p>
          <p>Curado para construir mejores interfaces.</p>
        </div>
        <div className="flex flex-wrap gap-5">
          <a className="inline-flex items-center gap-2 hover:text-foreground" href="https://github.com/jesusoldekamp-hue/awesome-modern-ui">
            <Code2 className="size-4" /> GitHub
          </a>
          <Link href="/guias" className="hover:text-foreground">Guías</Link>
          <a href="https://github.com/AndersonMoncayo/awesome-modern-ui" className="hover:text-foreground">Inspirado por AndersonMoncayo</a>
        </div>
      </div>
    </footer>
  )
}
