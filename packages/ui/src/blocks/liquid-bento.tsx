import type { LucideIcon } from "lucide-react"

export type LiquidBentoItem = {
  title: string
  description: string
  icon: LucideIcon
  wide?: boolean
}

export function LiquidBento({ items }: { items: LiquidBentoItem[] }) {
  return (
    <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {items.map(({ title, description, icon: Icon, wide }, index) => (
        <article
          key={title}
          className={`group relative min-h-64 overflow-hidden rounded-3xl border bg-background/45 p-6 shadow-2xl shadow-primary/10 backdrop-blur-xl transition-transform duration-300 hover:-translate-y-1 ${
            wide ? "lg:col-span-2" : ""
          }`}
        >
          <span className="pointer-events-none absolute -right-12 -top-12 size-40 rounded-full bg-primary/15 blur-3xl transition-opacity duration-300 group-hover:opacity-100" />
          <div className="relative flex h-full flex-col justify-between">
            <div className="grid size-12 place-items-center rounded-2xl border bg-background/45 text-primary backdrop-blur-xl">
              <Icon className="size-5" />
            </div>
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.18em] text-muted-foreground">0{index + 1}</p>
              <h3 className="text-2xl font-medium tracking-[-0.04em]">{title}</h3>
              <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground">{description}</p>
            </div>
          </div>
        </article>
      ))}
    </section>
  )
}
