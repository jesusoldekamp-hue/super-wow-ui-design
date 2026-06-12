import { ArrowRight, BarChart3, BriefcaseBusiness, Orbit, PanelsTopLeft } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"

import { Button } from "@workspace/ui/components/button"
import { LiquidGlass } from "@workspace/ui/components/liquid-glass"

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
    <main className="relative mx-auto max-w-7xl px-5 py-14 lg:px-8">
      <span className="liquid-orb -left-24 top-12 size-72" />
      <span className="liquid-orb right-10 top-24 size-72 bg-[radial-gradient(circle,rgba(34,211,238,.2),transparent_62%)]" />
      <h1 className="relative text-4xl font-semibold tracking-[-0.055em] sm:text-6xl">
        Interfaces para web y aplicaciones
      </h1>
      <p className="relative mt-4 max-w-2xl text-lg text-muted-foreground">
        Landings, dashboards y portfolios con dirección visual, movimiento, liquid glass, scroll y composición responsive.
      </p>
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {templates.map(([slug, name, description, Icon]) => (
          <LiquidGlass
            key={slug}
            className="min-h-96 rounded-[1.75rem] p-6"
            contentClassName="flex h-full flex-col"
            style={{ "--glass-x": slug === "cinematic" ? "72%" : "18%", "--glass-y": "4%" }}
          >
            <div className="grid flex-1 place-items-center rounded-2xl border border-white/10 bg-gradient-to-br from-primary/18 via-violet-500/10 to-cyan-400/10 shadow-inner">
              <Icon className="size-14 text-primary drop-shadow-[0_0_18px_rgba(139,92,246,0.45)]" />
            </div>
            <h2 className="mt-6 text-2xl font-medium">{name}</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
            <Button asChild className="mt-6">
              <Link href={`/plantillas/${slug}`}>Abrir demo <ArrowRight data-icon="inline-end" /></Link>
            </Button>
          </LiquidGlass>
        ))}
      </div>
    </main>
  )
}
