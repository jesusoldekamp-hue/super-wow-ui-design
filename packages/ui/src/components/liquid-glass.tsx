"use client"

import type { CSSProperties, ComponentPropsWithoutRef, PointerEvent } from "react"

import { cn } from "@workspace/ui/lib/utils"

type LiquidGlassStyle = CSSProperties & {
  "--glass-x"?: string
  "--glass-y"?: string
}

export function LiquidGlass({
  children,
  className,
  contentClassName,
  onPointerMove,
  style,
  ...props
}: ComponentPropsWithoutRef<"div"> & { contentClassName?: string }) {
  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    onPointerMove?.(event)
    const rect = event.currentTarget.getBoundingClientRect()
    event.currentTarget.style.setProperty("--glass-x", `${event.clientX - rect.left}px`)
    event.currentTarget.style.setProperty("--glass-y", `${event.clientY - rect.top}px`)
  }

  return (
    <div
      className={cn("liquid-glass", className)}
      onPointerMove={handlePointerMove}
      style={{ "--glass-x": "50%", "--glass-y": "20%", ...style } as LiquidGlassStyle}
      {...props}
    >
      <span aria-hidden="true" className="liquid-glass__shine" />
      <div className={cn("liquid-glass__content", contentClassName)}>{children}</div>
    </div>
  )
}
