"use client"

import { ArrowUpRight } from "lucide-react"
import {
  motion,
  type MotionStyle,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react"
import Image from "next/image"
import Link from "next/link"
import type { PointerEvent } from "react"

import { LiquidGlass } from "@workspace/ui/components/liquid-glass"

import { categoryLabels, type Resource } from "@/lib/catalog"

const spring = { stiffness: 180, damping: 24, mass: 0.45 }

function StageCard({
  item,
  index,
  shouldReduceMotion,
}: {
  item: Resource
  index: number
  shouldReduceMotion: boolean
}) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [7, -7]), spring)
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), spring)
  const shineX = useSpring(useTransform(x, [-0.5, 0.5], [-95, 95]), spring)
  const shineY = useSpring(useTransform(y, [-0.5, 0.5], [-60, 60]), spring)
  const isWide = index === 0

  function handlePointerMove(event: PointerEvent<HTMLElement>) {
    if (shouldReduceMotion) {
      return
    }

    const rect = event.currentTarget.getBoundingClientRect()
    x.set((event.clientX - rect.left) / rect.width - 0.5)
    y.set((event.clientY - rect.top) / rect.height - 0.5)
  }

  function resetTilt() {
    x.set(0)
    y.set(0)
  }

  const animatedStyle: MotionStyle = shouldReduceMotion
    ? {}
    : {
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }

  return (
    <motion.article
      className={`group liquid-card relative overflow-hidden rounded-2xl ${
        isWide ? "sm:col-span-2 lg:col-span-3" : ""
      }`}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 22, rotateX: -6 }}
      animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.58, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={shouldReduceMotion ? undefined : { y: -7, scale: 1.012 }}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetTilt}
      style={animatedStyle}
    >
      <Link
        href={`/recursos/${item.slug}`}
        className="relative block rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        <div className={`relative ${isWide ? "aspect-[16/7]" : "aspect-[16/10]"}`}>
          <Image
            src={item.image}
            alt={item.imageAlt}
            fill
            priority={index === 0}
            sizes="(min-width: 1024px) 55vw, 100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-[1.035]"
          />
          <span className="absolute inset-0 bg-gradient-to-t from-black/76 via-black/10 to-white/15" />
          <motion.span
            aria-hidden
            className="pointer-events-none absolute -inset-14 rounded-[2rem] bg-[radial-gradient(circle,rgba(255,255,255,.28),transparent_34%)] blur-2xl"
            style={shouldReduceMotion ? undefined : { x: shineX, y: shineY }}
          />
          <span className="absolute inset-x-0 bottom-0 h-1/2 bg-[linear-gradient(180deg,transparent,rgba(99,102,241,.22),rgba(0,0,0,.78))]" />
        </div>

        <div className="absolute inset-0 flex flex-col justify-between p-3">
          <div className="flex items-start justify-between gap-3">
            <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-medium text-white/80 shadow-2xl backdrop-blur-xl">
              {categoryLabels[item.category]}
            </span>
            <span className="grid size-9 place-items-center rounded-full border border-white/15 bg-black/35 text-white/85 shadow-2xl backdrop-blur-xl transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              <ArrowUpRight className="size-4" />
            </span>
          </div>

          <div className="max-w-[88%] rounded-2xl border border-white/15 bg-black/45 px-4 py-3 text-white shadow-2xl backdrop-blur-xl [transform:translateZ(28px)]">
            <p className="text-sm font-semibold tracking-[-0.02em]">{item.name}</p>
            {isWide ? <p className="mt-1 line-clamp-2 text-xs text-white/70">{item.reason}</p> : null}
          </div>
        </div>
      </Link>
    </motion.article>
  )
}

export function LiquidResourceStage({ items }: { items: Resource[] }) {
  const shouldReduceMotion = useReducedMotion() ?? false

  return (
    <LiquidGlass
      className="rounded-[2rem] p-3 sm:p-4"
      contentClassName="relative overflow-hidden"
      style={{ "--glass-x": "16%", "--glass-y": "4%" }}
    >
      <motion.span
        aria-hidden
        className="pointer-events-none absolute -right-20 -top-24 size-72 rounded-full bg-[radial-gradient(circle,rgba(125,92,255,.28),transparent_66%)] blur-3xl"
        animate={shouldReduceMotion ? undefined : { y: [0, 18, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="relative grid gap-3 sm:grid-cols-2 lg:grid-cols-3 [perspective:1200px]">
        {items.map((item, index) => (
          <StageCard
            key={item.slug}
            item={item}
            index={index}
            shouldReduceMotion={shouldReduceMotion}
          />
        ))}
      </div>
    </LiquidGlass>
  )
}
