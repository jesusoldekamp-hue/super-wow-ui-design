import { Code2, Menu } from "lucide-react"
import Link from "next/link"

import { Button } from "@workspace/ui/components/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@workspace/ui/components/sheet"

import { ThemeToggle } from "./theme-toggle"
import { SiteNavOutline } from "./site-nav-outline"

const links = [
  ["Recursos", "/recursos"],
  ["Diseños", "/plantillas"],
  ["Componentes", "/componentes"],
  ["Guías", "/guias"],
] as const

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 px-3 pt-3 sm:px-4">
      <div className="site-nav-shell relative isolate mx-auto flex h-16 max-w-7xl items-center justify-between overflow-hidden rounded-2xl px-5 lg:px-8">
        <SiteNavOutline />
        <Link href="/" className="flex items-center gap-3 font-semibold">
          <span className="grid size-9 place-items-center rounded-xl border border-white/15 bg-gradient-to-br from-blue-500 via-violet-500 to-cyan-400 text-sm text-white shadow-lg shadow-violet-500/25">
            S
          </span>
          <span className="tracking-[-0.02em]">Super Wow UI Design</span>
        </Link>
        <nav className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
          {links.map(([label, href]) => (
            <Link key={href} href={href} className="transition-colors hover:text-foreground">
              {label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild variant="outline" className="hidden sm:inline-flex">
            <a href="https://github.com/jesusoldekamp-hue/super-wow-ui-design">
              <Code2 data-icon="inline-start" />
              GitHub
            </a>
          </Button>
          <ThemeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden" aria-label="Abrir menú">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetTitle>Navegación</SheetTitle>
              <SheetDescription className="sr-only">
                Enlaces principales de Super Wow UI Design.
              </SheetDescription>
              <nav className="flex flex-col gap-2 px-4">
                {links.map(([label, href]) => (
                  <Button key={href} asChild variant="ghost" className="justify-start">
                    <Link href={href}>{label}</Link>
                  </Button>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
