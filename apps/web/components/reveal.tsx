import type { CSSProperties, ReactNode } from "react"

import { cn } from "@workspace/ui/lib/utils"

type RevealStyle = CSSProperties & {
  "--reveal-delay": string
}

export function Reveal({
  children,
  className,
  delay = 0,
  eager = false,
}: {
  children: ReactNode
  className?: string
  delay?: number
  eager?: boolean
}) {
  return (
    <div
      className={cn("reveal", eager && "reveal--eager", className)}
      style={{ "--reveal-delay": `${delay}s` } as RevealStyle}
    >
      {children}
    </div>
  )
}
