import { ArrowRight, BarChart3, BriefcaseBusiness, Orbit, PanelsTopLeft } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"

import { Button } from "@workspace/ui/components/button"

export const metadata: Metadata = {
  title: "Diseños",
  description: "Ejemplos visuales de landings, dashboards, portfolios y experiencias web.",
}

const templates = [
  ["landing", "Landing Signal", "Lanzamiento cinematográfico con narrativa, señal visual, prueba y conversión.", PanelsTopLeft],
  ["dashboard", "Dashboard Command", "Centro de inteligencia vivo con datos, sistemas y observabilidad.", BarChart3],
  ["portfolio", "Portfolio Editorial", "Portfolio inmersivo con tipografía monumental y proyectos narrativos.", BriefcaseBusiness],
  ["cinematic", "Cinematic", "Narrativa de producto con GSAP, SplitText, MorphSVG, Lenis, Motion y WebGL.", Orbit],
] as const

export default function TemplatesPage() {
  return (
    <main className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Galería de diseños</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">Interfaces para web y aplicaciones</h1>
      <p className="mt-4 max-w-2xl text-lg text-muted-foreground">Landings, dashboards y portfolios con dirección visual, movimiento, glass, scroll y composición responsive.</p>
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {templates.map(([slug, name, description, Icon]) => (
          <article key={slug} className="glass flex min-h-96 flex-col rounded-2xl p-6">
            <div className="grid flex-1 place-items-center rounded-xl border bg-gradient-to-br from-primary/15 to-transparent">
              <Icon className="size-14 text-primary" />
            </div>
            <h2 className="mt-6 text-2xl font-medium">{name}</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
            <Button asChild className="mt-6"><Link href={`/plantillas/${slug}`}>Abrir demo <ArrowRight data-icon="inline-end" /></Link></Button>
          </article>
        ))}
      </div>
    </main>
  )
}
