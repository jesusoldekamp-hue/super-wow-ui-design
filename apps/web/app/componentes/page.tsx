import { ArrowRight, Box, Code2, Gauge, Layers3, MousePointer2, PanelsTopLeft, Sparkles } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"

import { LiquidDashboardShell } from "@workspace/ui/blocks/liquid-dashboard-shell"
import { LiquidHero } from "@workspace/ui/blocks/liquid-hero"
import { Button } from "@workspace/ui/components/button"
import { LiquidGlass } from "@workspace/ui/components/liquid-glass"

export const metadata: Metadata = { title: "Componentes" }

const blocks = [
  ["liquid-hero", "Liquid Hero", "Hero cinematic con glass, profundidad y preview.", PanelsTopLeft],
  ["liquid-bento", "Liquid Bento", "Grid bento para beneficios y features visuales.", Layers3],
  ["liquid-dashboard-shell", "Liquid Dashboard Shell", "Dashboard shell con métricas y actividad.", Gauge],
  ["cinematic-section", "Cinematic Section", "Sección narrativa para landing, SaaS o portfolio.", Sparkles],
  ["liquid-resource-card", "Liquid Resource Card", "Tarjeta de recurso con hover y CTA.", Box],
] as const

const qualityPoints: Array<[string, string, LucideIcon]> = [
  ["Accesibilidad primero", "Foco visible, teclado y reduced motion.", MousePointer2],
  ["Tokens editables", "Color, radio, glass y espaciado desde el sistema.", Layers3],
  ["Movimiento seguro", "Motion y CSS moderno sin bloquear usuarios sensibles.", Sparkles],
  ["Rendimiento medible", "Build estático, E2E y link check antes de publicar.", Gauge],
]

export default function ComponentsPage() {
  return (
    <main className="relative mx-auto max-w-7xl px-5 pb-20 lg:px-8">
      <span className="liquid-orb -left-24 top-16 size-72" />
      <span className="liquid-orb right-4 top-36 size-64 bg-[radial-gradient(circle,rgba(34,211,238,.22),transparent_62%)]" />
      <LiquidHero
        className="mt-8"
        title="Liquid UI instalable para webs modernas."
        description="Bloques compatibles con shadcn registry: glass, cinematic sections, dashboard shell, bento y cards listas para copiar a proyectos reales."
        primaryAction={<a href="/r/liquid-hero.json">Ver liquid hero <ArrowRight data-icon="inline-end" /></a>}
        secondaryAction={<Link href="/plantillas">Ver demos cinematic</Link>}
        preview={
          <LiquidDashboardShell />
        }
      />

      <section className="mt-14">
        <div className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <h1 className="text-4xl font-semibold tracking-[-0.055em] sm:text-6xl">
              Registry liquid UI
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
              Instala bloques desde URL, mantén el código en tu proyecto y adapta tokens, copy y layout.
            </p>
          </div>
          <Button asChild variant="outline">
            <a href="/registry.json">
              <Code2 data-icon="inline-start" />
              Abrir registry
            </a>
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {blocks.map(([slug, title, description, Icon]) => (
            <LiquidGlass
              key={slug}
              className="rounded-[1.5rem] p-5"
              contentClassName="flex min-h-72 flex-col justify-between"
              style={{ "--glass-x": slug === "liquid-dashboard-shell" ? "72%" : "18%", "--glass-y": "4%" }}
            >
              <div>
                <div className="grid size-12 place-items-center rounded-2xl border bg-background/45 text-primary">
                  <Icon className="size-5" />
                </div>
                <h2 className="mt-8 text-2xl font-medium tracking-[-0.04em]">{title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{description}</p>
              </div>
              <div className="mt-8 rounded-2xl border bg-background/45 p-3 font-mono text-[11px] text-muted-foreground">
                pnpm dlx shadcn@latest add https://super-wow-ui-design.vercel.app/r/{slug}.json
              </div>
              <Button asChild className="mt-5">
                <a href={`/r/${slug}.json`}>Ver JSON <ArrowRight data-icon="inline-end" /></a>
              </Button>
            </LiquidGlass>
          ))}
        </div>
      </section>

      <section className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {qualityPoints.map(([title, description, Icon]) => (
          <div key={title} className="liquid-card rounded-2xl p-5">
            <Icon className="size-5 text-primary" />
            <h3 className="mt-8 font-medium">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
          </div>
        ))}
      </section>
    </main>
  )
}
