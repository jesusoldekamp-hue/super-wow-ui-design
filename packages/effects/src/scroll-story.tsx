"use client"

import { useGSAP } from "@gsap/react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useRef, type ReactNode } from "react"

import { useReducedMotionPreference } from "./use-reduced-motion"

gsap.registerPlugin(ScrollTrigger, useGSAP)

export function ScrollStory({ children, className }: { children: ReactNode; className?: string }) {
  const rootRef = useRef<HTMLDivElement>(null)
  const reducedMotion = useReducedMotionPreference()

  useGSAP(
    () => {
      if (reducedMotion) return

      const panels = gsap.utils.toArray<HTMLElement>("[data-story-panel]", rootRef.current)
      panels.forEach((panel) => {
        gsap.fromTo(
          panel,
          { autoAlpha: 0.35, scale: 0.94, y: 70 },
          {
            autoAlpha: 1,
            duration: 1,
            ease: "power3.out",
            scale: 1,
            scrollTrigger: {
              end: "center 35%",
              scrub: 0.6,
              start: "top 85%",
              trigger: panel,
            },
            y: 0,
          },
        )
      })
    },
    { dependencies: [reducedMotion], scope: rootRef },
  )

  return <div ref={rootRef} className={className}>{children}</div>
}
