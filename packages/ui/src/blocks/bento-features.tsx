import type { LucideIcon } from "lucide-react"

export type BentoFeature = {
  title: string
  description: string
  icon: LucideIcon
  wide?: boolean
}

export function BentoFeatures({ items }: { items: BentoFeature[] }) {
  return (
    <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {items.map(({ title, description, icon: Icon, wide }) => (
        <article key={title} className={`glass rounded-2xl p-6 ${wide ? "lg:col-span-2" : ""}`}>
          <div className="mb-10 grid size-10 place-items-center rounded-xl bg-primary/12 text-primary">
            <Icon className="size-5" />
          </div>
          <h3 className="text-lg font-medium">{title}</h3>
          <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">{description}</p>
        </article>
      ))}
    </section>
  )
}
