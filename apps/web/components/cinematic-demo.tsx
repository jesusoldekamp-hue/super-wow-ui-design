"use client"

import dynamic from "next/dynamic"
import { ArrowDown, ArrowUpRight, Gauge, Layers3, Sparkles } from "lucide-react"
import { motion } from "motion/react"

import { LenisProvider } from "@workspace/effects/lenis-provider"
import { MorphingSymbol } from "@workspace/effects/morphing-symbol"
import { ScrollStory } from "@workspace/effects/scroll-story"
import { SplitTextReveal } from "@workspace/effects/split-text-reveal"
import { ViewTransitionLink } from "@workspace/effects/view-transition-link"
import { LiquidGlass } from "@workspace/ui/components/liquid-glass"

const AmbientOrb = dynamic(
  () => import("@workspace/effects/ambient-orb").then((module) => module.AmbientOrb),
  {
    loading: () => (
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-full bg-violet-500/15 blur-3xl"
        data-testid="ambient-orb"
      />
    ),
    ssr: false,
  },
)

const chapters = [
  {
    eyebrow: "01 / Claridad",
    title: "Una idea fuerte antes que cien efectos.",
    text: "Jerarquía tipográfica, espacio y ritmo construyen la experiencia. La animación llega después para explicar y dirigir.",
    accent: "from-violet-500/35 via-indigo-500/10",
  },
  {
    eyebrow: "02 / Movimiento",
    title: "Cada transición tiene una razón.",
    text: "Motion resuelve interacción y layout. GSAP entra cuando la historia exige timelines, texto dividido, SVG o scroll preciso.",
    accent: "from-cyan-400/30 via-blue-500/10",
  },
  {
    eyebrow: "03 / Profundidad",
    title: "3D progresivo, nunca obligatorio.",
    text: "React Three Fiber se carga por ruta y conserva una alternativa visual. La interfaz sigue funcionando con menos potencia o movimiento reducido.",
    accent: "from-fuchsia-500/30 via-violet-500/10",
  },
]

export function CinematicDemo() {
  return (
    <LenisProvider>
      <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#050507] text-white">
        <div className="cinematic-noise pointer-events-none absolute inset-0 z-20 opacity-[0.045]" />

        <section className="relative grid min-h-[min(900px,85vh)] items-center overflow-hidden px-6 py-20 md:px-12 lg:grid-cols-[1.05fr_0.95fr] lg:px-20">
          <div className="relative z-10 max-w-4xl">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 text-xs font-medium uppercase tracking-[0.28em] text-violet-300"
            >
              Creative web design / 2026
            </motion.p>
            <SplitTextReveal className="text-6xl font-semibold tracking-[-0.07em] text-balance sm:text-7xl lg:text-[clamp(5rem,9vw,9.5rem)] lg:leading-[0.82]">
              Construye lo que todavía no existe.
            </SplitTextReveal>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.7 }}
              className="mt-8 max-w-xl text-lg leading-relaxed text-white/58"
            >
              Una referencia ejecutable para crear experiencias de producto cinematográficas, rápidas y accesibles sin copiar la identidad de otra marca.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-10 flex flex-wrap gap-3"
            >
              <ViewTransitionLink href="#story" className="inline-flex h-11 items-center gap-2 rounded-full bg-white px-5 text-sm font-medium text-black">
                Explorar historia <ArrowDown className="size-4" />
              </ViewTransitionLink>
              <ViewTransitionLink href="/guias" className="inline-flex h-11 items-center gap-2 rounded-full border border-white/15 px-5 text-sm text-white/75">
                Ver sistema <ArrowUpRight className="size-4" />
              </ViewTransitionLink>
            </motion.div>
          </div>

          <div className="relative min-h-[420px] lg:min-h-[700px]">
            <div className="absolute inset-[-15%] bg-[radial-gradient(circle,rgba(108,88,255,.24),transparent_58%)] blur-3xl" />
            <AmbientOrb className="absolute inset-0" />
            <MorphingSymbol className="absolute right-[8%] top-[14%] z-10 size-12 text-cyan-300 drop-shadow-[0_0_30px_rgba(103,232,249,.65)]" />
            <LiquidGlass className="absolute bottom-[12%] left-[5%] z-10 rounded-2xl p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-white/40">Render strategy</p>
              <p className="mt-2 text-sm text-white/80">Dynamic WebGL · DOM fallback</p>
            </LiquidGlass>
          </div>
        </section>

        <section id="story" className="border-t border-white/10 px-6 py-24 md:px-12 lg:px-20">
          <div className="mb-20 grid gap-8 lg:grid-cols-2">
            <h2 className="cinematic-scroll-reveal text-5xl font-semibold tracking-[-0.055em] sm:text-7xl">
              Tecnología al servicio de la historia.
            </h2>
            <p className="max-w-xl self-end text-lg leading-relaxed text-white/50">
              Este diseño combina tipografía, movimiento, profundidad y 3D para presentar un producto digital con una narrativa clara.
            </p>
          </div>

          <ScrollStory className="grid gap-8">
            {chapters.map((chapter, index) => (
              <LiquidGlass
                key={chapter.eyebrow}
                data-story-panel
                className="relative min-h-[520px] rounded-[2rem] p-7 md:p-12"
                contentClassName="grid h-full lg:grid-cols-[0.72fr_1.28fr]"
              >
                <div className="relative z-10 flex flex-col justify-between">
                  <p className="text-xs uppercase tracking-[0.24em] text-white/40">{chapter.eyebrow}</p>
                  <div>
                    <span className="text-sm text-white/35">0{index + 1}</span>
                    <h3 className="mt-4 max-w-xl text-4xl font-medium tracking-[-0.045em] sm:text-6xl">{chapter.title}</h3>
                    <p className="mt-6 max-w-lg text-base leading-relaxed text-white/50">{chapter.text}</p>
                  </div>
                </div>
                <div className={`mt-12 min-h-64 rounded-[1.5rem] border border-white/10 bg-gradient-to-br ${chapter.accent} to-transparent lg:ml-12 lg:mt-0`}>
                  <div className="grid h-full place-items-center">
                    {index === 0 ? <Layers3 className="size-24 text-violet-300/70" strokeWidth={0.8} /> : null}
                    {index === 1 ? <Sparkles className="size-24 text-cyan-200/70" strokeWidth={0.8} /> : null}
                    {index === 2 ? <Gauge className="size-24 text-fuchsia-200/70" strokeWidth={0.8} /> : null}
                  </div>
                </div>
              </LiquidGlass>
            ))}
          </ScrollStory>
        </section>

        <section className="border-t border-white/10 px-6 py-24 text-center md:px-12">
          <MorphingSymbol className="mx-auto size-16 text-violet-300" />
          <h2 className="mx-auto mt-8 max-w-4xl text-5xl font-semibold tracking-[-0.055em] sm:text-7xl">
            Cambia el contenido. Conserva el nivel.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/50">
            Cada efecto está separado para mantener la experiencia rápida, accesible y fácil de adaptar a una web real.
          </p>
        </section>
      </div>
    </LenisProvider>
  )
}
