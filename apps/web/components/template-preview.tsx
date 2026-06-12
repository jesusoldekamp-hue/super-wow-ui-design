import { ArrowRight, BarChart3, BriefcaseBusiness, Orbit, PanelsTopLeft } from "lucide-react"
import Link from "next/link"

import { LiquidGlass } from "@workspace/ui/components/liquid-glass"

const templates = [
  { slug: "landing", name: "Landing Signal", text: "Lanzamiento inmersivo orientado a conversión.", icon: PanelsTopLeft },
  { slug: "dashboard", name: "Dashboard Command", text: "Inteligencia operativa visual y cinematográfica.", icon: BarChart3 },
  { slug: "portfolio", name: "Portfolio Editorial", text: "Proyectos narrados con escala y carácter.", icon: BriefcaseBusiness },
  { slug: "cinematic", name: "Cinematic", text: "Storytelling premium con scroll, SVG y WebGL.", icon: Orbit },
]

export function TemplatePreview() {
  return (
    <LiquidGlass className="rounded-3xl p-4" style={{ "--glass-x": "12%", "--glass-y": "0%" }}>
      <div className="mb-3">
        <h2 className="font-semibold">Diseños para web y apps</h2>
        <p className="text-sm text-muted-foreground">Referencias completas y adaptables.</p>
      </div>
      <div className="flex flex-col gap-2">
        {templates.map(({ slug, name, text, icon: Icon }) => (
          <Link
            key={slug}
            href={`/plantillas/${slug}`}
            className="group grid grid-cols-[88px_1fr_auto] items-center gap-3 rounded-2xl border border-white/10 bg-background/38 p-2 transition-all hover:-translate-y-0.5 hover:bg-accent/60"
          >
            <div className="grid h-16 place-items-center rounded-xl bg-gradient-to-br from-blue-500/25 via-violet-500/15 to-cyan-400/15 shadow-inner">
              <Icon className="size-6 text-primary" />
            </div>
            <div>
              <p className="font-medium">{name}</p>
              <p className="text-xs leading-relaxed text-muted-foreground">{text}</p>
            </div>
            <ArrowRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-1" />
          </Link>
        ))}
      </div>
    </LiquidGlass>
  )
}
