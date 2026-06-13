import { Code2 } from "lucide-react"
import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="border-t px-3 py-4 sm:px-4">
      <div className="liquid-rail mx-auto flex max-w-7xl flex-col gap-5 rounded-2xl px-5 py-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <div>
          <p className="font-medium text-foreground">Super Wow UI Design</p>
          <p>Recursos visuales para diseñar mejores webs y apps.</p>
        </div>
        <div className="flex flex-wrap gap-5">
          <Link href="/recursos" className="hover:text-foreground">Recursos</Link>
          <Link href="/plantillas" className="hover:text-foreground">Diseños</Link>
          <Link href="/componentes" className="hover:text-foreground">Componentes</Link>
          <a className="inline-flex items-center gap-2 hover:text-foreground" href="https://github.com/jesusoldekamp-hue/super-wow-ui-design">
            <Code2 className="size-4" /> GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}
