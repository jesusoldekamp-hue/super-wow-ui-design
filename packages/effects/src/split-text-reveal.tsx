"use client"

import { useGSAP } from "@gsap/react"
import { gsap } from "gsap"
import { SplitText } from "gsap/SplitText"
import { useRef, type ComponentPropsWithoutRef } from "react"

import { useReducedMotionPreference } from "./use-reduced-motion"

gsap.registerPlugin(SplitText, useGSAP)

export function SplitTextReveal({
  children,
  className,
  ...props
}: ComponentPropsWithoutRef<"h1">) {
  const headingRef = useRef<HTMLHeadingElement>(null)
  const reducedMotion = useReducedMotionPreference()

  useGSAP(
    () => {
      if (!headingRef.current || reducedMotion) return

      const split = SplitText.create(headingRef.current, {
        type: "lines,words",
        linesClass: "split-line",
      })

      gsap.from(split.words, {
        autoAlpha: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.035,
        yPercent: 110,
      })

      return () => split.revert()
    },
    { dependencies: [reducedMotion], scope: headingRef },
  )

  return (
    <h1 ref={headingRef} className={className} {...props}>
      {children}
    </h1>
  )
}
