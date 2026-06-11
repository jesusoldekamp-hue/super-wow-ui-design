"use client"

import { motion } from "motion/react"
import type { ReactNode } from "react"

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
    <motion.div
      className={className}
      initial={eager ? false : { opacity: 0, y: 20 }}
      whileInView={eager ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
