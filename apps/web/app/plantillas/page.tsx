import { ArrowRight, BarChart3, BriefcaseBusiness, Orbit, PanelsTopLeft } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"

import { Button } from "@workspace/ui/components/button"

export const metadata: Metadata = { title: "Plantillas" }

const templates = [
  ["landing", "Landing", "Una página de marketing completa con hero, beneficios, pricing, FAQ y CTA.", PanelsTopLeft],
  ["dashboard", "Dashboard", "Shell de producto con sidebar, métricas, tabla y ajustes.", BarChart3],
  ["portfolio", "Portfolio", "Presentación editorial de proyectos, experiencia y contacto.", BriefcaseBusiness],
  ["cinematic", "Cinematic", "Narrativa de producto con GSAP, SplitText, MorphSVG, Lenis, Motion y WebGL.", Orbit],
] as const

export default function TemplatesPage() {
  return (
    <main className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
      <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Cuatro puntos de partida completos</h1>
      <p className="mt-4 max-w-2xl text-lg text-muted-foreground">No son screenshots: cada plantilla es responsiva, navegable y está construida con los mismos componentes del kit.</p>
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
