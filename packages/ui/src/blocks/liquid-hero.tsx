import { ArrowRight, Sparkles } from "lucide-react"
import type { ReactNode } from "react"

import { Button } from "@workspace/ui/components/button"
import { LiquidGlass } from "@workspace/ui/components/liquid-glass"
import { cn } from "@workspace/ui/lib/utils"

export function LiquidHero({
  title = "Build interfaces that feel alive.",
  description = "A cinematic hero with layered liquid glass, sharp hierarchy, and a preview surface ready for modern product pages.",
  primaryAction,
  secondaryAction,
  preview,
  className,
}: {
  title?: string
  description?: string
  primaryAction?: ReactNode
  secondaryAction?: ReactNode
  preview?: ReactNode
  className?: string
}) {
  return (
    <section className={cn("relative overflow-hidden rounded-[2rem] border bg-background px-6 py-20 text-foreground sm:px-10 lg:px-14", className)}>
      <span className="pointer-events-none absolute -left-24 top-10 size-72 rounded-full bg-primary/20 blur-3xl" />
      <span className="pointer-events-none absolute -right-20 bottom-0 size-80 rounded-full bg-cyan-400/15 blur-3xl" />
      <div className="relative grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <h1 className="max-w-4xl text-5xl font-semibold leading-[0.92] tracking-[-0.07em] sm:text-7xl">
            {title}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">{description}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg">
              {primaryAction ?? (
                <a href="#start">
                  Start building <ArrowRight data-icon="inline-end" />
                </a>
              )}
            </Button>
            {secondaryAction ? (
              <Button asChild variant="outline" size="lg">
                {secondaryAction}
              </Button>
            ) : null}
          </div>
        </div>
        <LiquidGlass className="rounded-[1.75rem] p-3" style={{ "--glass-x": "20%", "--glass-y": "0%" }}>
          {preview ?? (
            <div className="relative min-h-80 overflow-hidden rounded-[1.35rem] border bg-background/55 p-6 shadow-2xl shadow-primary/10 backdrop-blur-xl">
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>liquid-ui.app</span>
                <Sparkles className="size-4 text-primary" />
              </div>
              <div className="mt-16 max-w-sm">
                <p className="text-4xl font-semibold tracking-[-0.06em]">Liquid system</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Depth, motion and reusable glass surfaces without hiding the real UI.
                </p>
              </div>
              <div className="absolute bottom-6 right-6 grid size-24 place-items-center rounded-3xl border bg-primary/15 text-primary shadow-2xl">
                <ArrowRight className="size-8" />
              </div>
            </div>
          )}
        </LiquidGlass>
      </div>
    </section>
  )
}
