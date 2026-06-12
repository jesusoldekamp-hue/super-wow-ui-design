import { ArrowRight } from "lucide-react"
import type { ReactNode } from "react"

import { Button } from "@workspace/ui/components/button"
import { LiquidGlass } from "@workspace/ui/components/liquid-glass"
import { cn } from "@workspace/ui/lib/utils"

export function HeroModern({
  title,
  description,
  primaryAction,
  secondaryAction,
  preview,
  className,
}: {
  title: string
  description: string
  primaryAction: ReactNode
  secondaryAction?: ReactNode
  preview?: ReactNode
  className?: string
}) {
  return (
    <section className={cn("grid items-center gap-10 py-20 lg:grid-cols-2", className)}>
      <div>
        <h1 className="text-5xl font-semibold tracking-[-0.05em] sm:text-6xl">{title}</h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">{description}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild size="lg">{primaryAction}</Button>
          {secondaryAction ? <Button asChild variant="outline" size="lg">{secondaryAction}</Button> : null}
        </div>
      </div>
      <LiquidGlass className="min-h-80 rounded-[1.75rem] p-6" style={{ "--glass-x": "18%", "--glass-y": "0%" }}>
        {preview ?? (
          <div className="grid h-full min-h-64 place-items-center">
            <ArrowRight className="size-10 text-primary" />
          </div>
        )}
      </LiquidGlass>
    </section>
  )
}
