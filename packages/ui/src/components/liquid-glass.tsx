import type { CSSProperties, ComponentPropsWithoutRef } from "react"

import { cn } from "@workspace/ui/lib/utils"

type LiquidGlassStyle = CSSProperties & {
  "--glass-x"?: string
  "--glass-y"?: string
}

export function LiquidGlass({
  children,
  className,
  contentClassName,
  style,
  ...props
}: ComponentPropsWithoutRef<"div"> & { contentClassName?: string }) {
  return (
    <div
      className={cn("liquid-glass", className)}
      style={{ "--glass-x": "50%", "--glass-y": "20%", ...style } as LiquidGlassStyle}
      {...props}
    >
      <span aria-hidden="true" className="liquid-glass__shine" />
      <div className={cn("liquid-glass__content", contentClassName)}>{children}</div>
    </div>
  )
}
