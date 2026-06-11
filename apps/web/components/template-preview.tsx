import { ArrowRight, BarChart3, BriefcaseBusiness, PanelsTopLeft } from "lucide-react"
import Link from "next/link"

const templates = [
  { slug: "landing", name: "Landing", text: "Marketing moderna con secciones esenciales.", icon: PanelsTopLeft },
  { slug: "dashboard", name: "Dashboard", text: "Panel de control completo y responsivo.", icon: BarChart3 },
  { slug: "portfolio", name: "Portfolio", text: "Portafolio personal minimalista y elegante.", icon: BriefcaseBusiness },
]

export function TemplatePreview() {
  return (
    <div className="glass rounded-2xl p-4">
      <div className="mb-3">
        <h2 className="font-semibold">Plantillas reutilizables</h2>
        <p className="text-sm text-muted-foreground">Listas para usar. Fáciles de adaptar.</p>
      </div>
      <div className="flex flex-col gap-2">
        {templates.map(({ slug, name, text, icon: Icon }) => (
          <Link
            key={slug}
            href={`/plantillas/${slug}`}
            className="group grid grid-cols-[88px_1fr_auto] items-center gap-3 rounded-xl border bg-background/45 p-2 transition-colors hover:bg-accent"
          >
            <div className="grid h-16 place-items-center rounded-lg bg-gradient-to-br from-blue-500/20 to-violet-500/20">
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
    </div>
  )
}
