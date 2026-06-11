"use client"

import Lenis from "lenis"
import { useEffect, type ReactNode } from "react"

import { useReducedMotionPreference } from "./use-reduced-motion"

export function LenisProvider({ children }: { children: ReactNode }) {
  const reducedMotion = useReducedMotionPreference()

  useEffect(() => {
    if (reducedMotion) return

    const lenis = new Lenis({
      anchors: true,
      autoRaf: true,
      lerp: 0.09,
      smoothWheel: true,
    })

    return () => lenis.destroy()
  }, [reducedMotion])

  return children
}
