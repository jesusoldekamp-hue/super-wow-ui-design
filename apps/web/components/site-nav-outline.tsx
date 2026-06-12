"use client"

import { useLayoutEffect, useRef } from "react"

const INSET = 1
const RADIUS = 15
const ORIGIN_X = 42

function createOutlinePath(width: number, height: number) {
  const left = INSET
  const top = INSET
  const right = width - INSET
  const bottom = height - INSET
  const origin = Math.min(Math.max(ORIGIN_X, left + RADIUS), right - RADIUS)

  return [
    `M ${origin} ${top}`,
    `H ${right - RADIUS}`,
    `A ${RADIUS} ${RADIUS} 0 0 1 ${right} ${top + RADIUS}`,
    `V ${bottom - RADIUS}`,
    `A ${RADIUS} ${RADIUS} 0 0 1 ${right - RADIUS} ${bottom}`,
    `H ${left + RADIUS}`,
    `A ${RADIUS} ${RADIUS} 0 0 1 ${left} ${bottom - RADIUS}`,
    `V ${top + RADIUS}`,
    `A ${RADIUS} ${RADIUS} 0 0 1 ${left + RADIUS} ${top}`,
    `H ${origin}`,
  ].join(" ")
}

export function SiteNavOutline() {
  const svgRef = useRef<SVGSVGElement>(null)
  const baseRef = useRef<SVGPathElement>(null)
  const progressRef = useRef<SVGPathElement>(null)

  useLayoutEffect(() => {
    const svg = svgRef.current
    const base = baseRef.current
    const progress = progressRef.current
    if (!svg || !base || !progress) return

    const syncPath = () => {
      const path = createOutlinePath(svg.clientWidth, svg.clientHeight)
      base.setAttribute("d", path)
      progress.setAttribute("d", path)
    }

    syncPath()

    const resizeObserver = new ResizeObserver(syncPath)
    resizeObserver.observe(svg)

    return () => resizeObserver.disconnect()
  }, [])

  return (
    <svg
      ref={svgRef}
      aria-hidden="true"
      className="site-nav-outline pointer-events-none absolute inset-0 size-full"
    >
      <defs>
        <linearGradient id="site-nav-progress-gradient" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="#6d5dfc" />
          <stop offset="0.48" stopColor="#8b5cf6" />
          <stop offset="0.76" stopColor="#22d3ee" />
          <stop offset="1" stopColor="#34d399" />
        </linearGradient>
      </defs>
      <path ref={baseRef} className="site-nav-outline-base" />
      <path
        ref={progressRef}
        className="site-nav-outline-progress"
        data-testid="nav-scroll-progress"
        pathLength="1"
      />
    </svg>
  )
}
