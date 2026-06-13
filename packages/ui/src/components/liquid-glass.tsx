import type { CSSProperties, ComponentPropsWithoutRef } from "react"

import { cn } from "@workspace/ui/lib/utils"

type LiquidGlassStyle = CSSProperties & {
  "--glass-x"?: string
  "--glass-y"?: string
}

type LiquidGlassProps = Omit<ComponentPropsWithoutRef<"div">, "style"> & {
  contentClassName?: string
  style?: LiquidGlassStyle
}

export function LiquidGlass({
  children,
  className,
  contentClassName,
  style,
  ...props
}: LiquidGlassProps) {
  return (
    <div
      className={cn(
        "liquid-glass relative overflow-hidden border bg-background/45 shadow-2xl shadow-primary/10 backdrop-blur-2xl",
        className,
      )}
      style={{ "--glass-x": "50%", "--glass-y": "20%", ...style } as LiquidGlassStyle}
      {...props}
    >
      <span
        aria-hidden="true"
        className="liquid-glass__shine pointer-events-none absolute -inset-16 bg-[radial-gradient(circle_at_var(--glass-x)_var(--glass-y),rgba(255,255,255,.32),transparent_34%)] opacity-70 blur-2xl"
      />
      <div className={cn("liquid-glass__content relative z-10", contentClassName)}>{children}</div>
    </div>
  )
}
