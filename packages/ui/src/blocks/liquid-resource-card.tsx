import { ArrowUpRight } from "lucide-react"

export function LiquidResourceCard({
  name = "Motion",
  description = "Animation for modern interfaces, layout transitions and gesture-driven UI.",
  category = "Animation",
  href = "#",
}: {
  name?: string
  description?: string
  category?: string
  href?: string
}) {
  return (
    <a href={href} className="group block min-h-72 overflow-hidden rounded-3xl border bg-background/45 p-5 shadow-2xl shadow-primary/10 backdrop-blur-xl transition-transform duration-300 hover:-translate-y-1">
      <div className="flex items-start justify-between gap-4">
        <span className="rounded-full border bg-background/50 px-3 py-1 text-xs text-muted-foreground backdrop-blur-xl">
          {category}
        </span>
        <span className="grid size-10 place-items-center rounded-full border bg-background/45 text-muted-foreground transition-colors group-hover:text-primary">
          <ArrowUpRight className="size-4" />
        </span>
      </div>
      <div className="mt-20">
        <p className="text-3xl font-semibold tracking-[-0.055em]">{name}</p>
        <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">{description}</p>
      </div>
    </a>
  )
}
