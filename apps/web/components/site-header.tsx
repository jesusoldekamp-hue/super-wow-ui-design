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

const links = [
  ["Componentes", "/componentes"],
  ["Plantillas", "/plantillas"],
  ["Recursos", "/recursos"],
  ["Guías", "/guias"],
] as const

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 px-3 pt-3 sm:px-4">
      <div className="site-nav-shell relative isolate mx-auto flex h-16 max-w-7xl items-center justify-between overflow-hidden rounded-2xl px-5 lg:px-8">
        <svg
          aria-hidden="true"
          className="site-nav-outline pointer-events-none absolute inset-0 size-full"
          preserveAspectRatio="none"
          viewBox="0 0 1000 64"
        >
          <defs>
            <linearGradient id="site-nav-progress-gradient" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0" stopColor="#6d5dfc" />
              <stop offset="0.48" stopColor="#8b5cf6" />
              <stop offset="0.76" stopColor="#22d3ee" />
              <stop offset="1" stopColor="#34d399" />
            </linearGradient>
          </defs>
          <rect
            className="site-nav-outline-base"
            height="62"
            rx="16"
            width="998"
            x="1"
            y="1"
          />
          <rect
            className="site-nav-outline-progress"
            data-testid="nav-scroll-progress"
            height="62"
            pathLength="1"
            rx="16"
            width="998"
            x="1"
            y="1"
          />
        </svg>
        <Link href="/" className="flex items-center gap-3 font-semibold">
          <span className="grid size-8 place-items-center rounded-lg bg-gradient-to-br from-blue-500 to-violet-600 text-sm text-white shadow-lg shadow-violet-500/20">
            A
          </span>
          <span>Awesome Modern UI</span>
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
            <a href="https://github.com/jesusoldekamp-hue/awesome-modern-ui">
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
                Enlaces principales de Awesome Modern UI.
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
