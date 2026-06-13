import { ArrowRight, Sparkles } from "lucide-react"
import type { ReactNode } from "react"

import { LiquidGlass } from "@workspace/ui/components/liquid-glass"
import { cn } from "@workspace/ui/lib/utils"

export function CinematicSection({
  title = "Make every section feel intentional.",
  description = "Use scale, rhythm, liquid surfaces and one strong visual idea to turn a normal content band into a cinematic product moment.",
  children,
  className,
}: {
  title?: string
  description?: string
  children?: ReactNode
  className?: string
}) {
  return (
    <section className={cn("relative overflow-hidden rounded-[2rem] border bg-background px-6 py-20 sm:px-10", className)}>
      <span className="pointer-events-none absolute -right-24 top-0 size-80 rounded-full bg-primary/15 blur-3xl" />
      <div className="relative grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <Sparkles className="size-8 text-primary" />
          <h2 className="mt-8 max-w-3xl text-5xl font-semibold leading-[0.95] tracking-[-0.06em] sm:text-7xl">
            {title}
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">{description}</p>
        </div>
        <LiquidGlass className="min-h-96 rounded-[1.75rem] p-5" style={{ "--glass-x": "74%", "--glass-y": "0%" }}>
          {children ?? (
            <div className="flex h-full min-h-80 flex-col justify-between rounded-[1.25rem] border bg-background/40 p-6">
              <p className="text-sm text-muted-foreground">Cinematic system</p>
              <div>
                <p className="text-4xl font-medium tracking-[-0.05em]">Liquid UI block</p>
                <p className="mt-3 text-sm text-muted-foreground">Drop it into a landing, dashboard, portfolio or SaaS page.</p>
              </div>
              <span className="inline-flex items-center gap-2 text-sm text-primary">
                Explore pattern <ArrowRight className="size-4" />
              </span>
            </div>
          )}
        </LiquidGlass>
      </div>
    </section>
  )
}
