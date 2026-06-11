"use client"

import { useGSAP } from "@gsap/react"
import { gsap } from "gsap"
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin"
import { useRef } from "react"

import { useReducedMotionPreference } from "./use-reduced-motion"

gsap.registerPlugin(MorphSVGPlugin, useGSAP)

const sparkPath = "M50 4 C57 31 69 43 96 50 C69 57 57 69 50 96 C43 69 31 57 4 50 C31 43 43 31 50 4 Z"
const orbPath = "M50 5 C75 5 95 25 95 50 C95 75 75 95 50 95 C25 95 5 75 5 50 C5 25 25 5 50 5 Z"

export function MorphingSymbol({ className }: { className?: string }) {
  const pathRef = useRef<SVGPathElement>(null)
  const reducedMotion = useReducedMotionPreference()

  useGSAP(
    () => {
      if (!pathRef.current || reducedMotion) return

      gsap
        .timeline({ repeat: -1, repeatDelay: 0.5, yoyo: true })
        .to(pathRef.current, {
          duration: 1.6,
          ease: "power2.inOut",
          morphSVG: orbPath,
        })
    },
    { dependencies: [reducedMotion], scope: pathRef },
  )

  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 100 100"
    >
      <path ref={pathRef} d={sparkPath} fill="currentColor" />
    </svg>
  )
}
