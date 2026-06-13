"use client"

import {
  Activity,
  ArrowDown,
  ArrowUpRight,
  Box,
  Command,
  Cpu,
  Crosshair,
  Layers3,
  MousePointer2,
  Radio,
  ScanLine,
  Sparkles,
  Workflow,
} from "lucide-react"
import { motion } from "motion/react"

import { LenisProvider } from "@workspace/effects/lenis-provider"
import { MorphingSymbol } from "@workspace/effects/morphing-symbol"
import { ScrollStory } from "@workspace/effects/scroll-story"
import { SplitTextReveal } from "@workspace/effects/split-text-reveal"
import { ViewTransitionLink } from "@workspace/effects/view-transition-link"
import { LiquidGlass } from "@workspace/ui/components/liquid-glass"

const reveal = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
}

function TemplateActions({ target }: { target: string }) {
  return (
    <motion.div
      {...reveal}
      transition={{ delay: 0.7, duration: 0.7 }}
      className="mt-10 flex flex-wrap gap-3"
    >
      <ViewTransitionLink
        href={target}
        className="inline-flex h-11 items-center gap-2 rounded-full bg-white px-5 text-sm font-medium text-black"
      >
        Explorar experiencia <ArrowDown className="size-4" />
      </ViewTransitionLink>
      <ViewTransitionLink
        href="/guias"
        className="inline-flex h-11 items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-5 text-sm text-white/70 backdrop-blur-xl"
      >
        Ver sistema <ArrowUpRight className="size-4" />
      </ViewTransitionLink>
    </motion.div>
  )
}

function SignalVisualizer() {
  return (
    <div className="relative min-h-[460px] lg:min-h-[700px]">
      <div className="absolute inset-[5%] rounded-full bg-[conic-gradient(from_210deg,rgba(236,72,153,.7),rgba(249,115,22,.1),rgba(34,211,238,.55),rgba(236,72,153,.7))] opacity-45 blur-3xl" />
      <div className="template-orbit absolute inset-[12%] rounded-full border border-white/10">
        <div className="absolute left-1/2 top-0 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-300 shadow-[0_0_28px_#fb923c]" />
      </div>
      <div className="template-orbit template-orbit--reverse absolute inset-[24%] rounded-full border border-white/10">
        <div className="absolute bottom-[8%] right-[5%] size-2 rounded-full bg-cyan-300 shadow-[0_0_24px_#67e8f9]" />
      </div>
      <LiquidGlass className="absolute left-[8%] top-[18%] w-[72%] rounded-[1.75rem] p-5 sm:w-[64%]">
        <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.2em] text-white/40">
          <span>Launch signal</span>
          <span className="flex items-center gap-2 text-emerald-300"><span className="size-1.5 rounded-full bg-current" /> Live</span>
        </div>
        <div className="mt-16 flex items-end justify-between">
          <div>
            <p className="text-5xl font-medium tracking-[-0.06em]">94.8</p>
            <p className="mt-2 text-sm text-white/45">Momentum index</p>
          </div>
          <Activity className="size-12 text-orange-300" strokeWidth={1} />
        </div>
        <div className="mt-8 flex h-20 items-end gap-1.5">
          {[26, 38, 31, 54, 48, 72, 58, 82, 68, 92, 78, 100].map((height, index) => (
            <span
              key={height + index}
              className="flex-1 rounded-full bg-gradient-to-t from-orange-500/20 via-pink-400/70 to-cyan-200"
              style={{ height: `${height}%` }}
            />
          ))}
        </div>
      </LiquidGlass>
      <LiquidGlass className="absolute bottom-[15%] right-[3%] w-48 rounded-2xl p-4">
        <p className="text-xs uppercase tracking-[0.18em] text-white/35">Audience pulse</p>
        <p className="mt-3 text-2xl font-medium">+38.2%</p>
        <p className="mt-1 text-xs text-emerald-300">Accelerating</p>
      </LiquidGlass>
    </div>
  )
}

export function LandingCinematicDemo() {
  const moments = [
    {
      index: "01",
      label: "Positioning",
      title: "Haz que la idea se entienda antes de explicarla.",
      text: "Una apertura editorial de alto impacto combina mensaje, producto y movimiento sin llenar el primer viewport de ruido.",
      icon: Crosshair,
      color: "from-orange-500/30 via-pink-500/10",
    },
    {
      index: "02",
      label: "Proof",
      title: "Convierte evidencia en una escena memorable.",
      text: "Métricas, casos y demostraciones aparecen como parte de la historia, no como una cuadrícula genérica de tarjetas.",
      icon: Radio,
      color: "from-pink-500/30 via-violet-500/10",
    },
    {
      index: "03",
      label: "Action",
      title: "Cierra con una decisión, no con otro bloque.",
      text: "La dirección visual conduce a una única acción clara y conserva la velocidad, accesibilidad y jerarquía en móvil.",
      icon: MousePointer2,
      color: "from-cyan-400/25 via-blue-500/10",
    },
  ]

  return (
    <LenisProvider>
      <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#070506] text-white">
        <div className="cinematic-noise pointer-events-none absolute inset-0 z-20 opacity-[0.045]" />
        <section className="relative grid min-h-[min(920px,86vh)] items-center overflow-hidden px-6 py-20 md:px-12 lg:grid-cols-[1.05fr_0.95fr] lg:px-20">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(249,115,22,.16),transparent_30%),radial-gradient(circle_at_88%_65%,rgba(236,72,153,.12),transparent_36%)]" />
          <div className="relative z-10 max-w-4xl">
            <motion.p {...reveal} transition={{ duration: 0.6 }} className="mb-6 text-xs uppercase tracking-[0.3em] text-orange-300">
              Launch system / Signal 01
            </motion.p>
            <SplitTextReveal className="text-6xl font-semibold leading-[0.9] tracking-[-0.07em] text-balance sm:text-7xl lg:text-[clamp(5rem,8.5vw,9rem)]">
              No lances una página. Lanza una señal.
            </SplitTextReveal>
            <motion.p {...reveal} transition={{ delay: 0.4, duration: 0.7 }} className="mt-8 max-w-xl text-lg leading-relaxed text-white/55">
              Una landing cinematográfica para productos que necesitan sentirse inevitables desde el primer segundo.
            </motion.p>
            <TemplateActions target="#landing-story" />
          </div>
          <SignalVisualizer />
        </section>

        <div className="template-marquee border-y border-white/10 bg-white/[0.025] py-4">
          <div className="template-marquee-track text-xs uppercase tracking-[0.28em] text-white/40">
            {Array.from({ length: 2 }).map((_, group) => (
              <div key={group} className="flex shrink-0 items-center gap-12 pr-12">
                <span>Positioning</span><Sparkles className="size-3 text-orange-300" />
                <span>Product story</span><Sparkles className="size-3 text-pink-300" />
                <span>Motion language</span><Sparkles className="size-3 text-cyan-300" />
                <span>Conversion</span><Sparkles className="size-3 text-violet-300" />
              </div>
            ))}
          </div>
        </div>

        <section id="landing-story" className="px-6 py-24 md:px-12 lg:px-20">
          <div className="mb-20 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <h2 className="cinematic-scroll-reveal max-w-4xl text-5xl font-semibold tracking-[-0.055em] sm:text-7xl">
              Cada sección aumenta el deseo de seguir.
            </h2>
            <p className="max-w-lg self-end text-lg leading-relaxed text-white/48">
              La plantilla reemplaza el patrón hero-features-pricing por una progresión visual con tensión, prueba y acción.
            </p>
          </div>
          <ScrollStory className="grid gap-8">
            {moments.map(({ icon: Icon, ...moment }) => (
              <LiquidGlass
                key={moment.index}
                data-story-panel
                className="min-h-[520px] rounded-[2rem] p-7 md:p-12"
                contentClassName="grid h-full gap-10 lg:grid-cols-[0.8fr_1.2fr]"
              >
                <div className="flex flex-col justify-between">
                  <p className="text-xs uppercase tracking-[0.24em] text-white/35">{moment.index} / {moment.label}</p>
                  <div>
                    <h3 className="max-w-2xl text-4xl font-medium tracking-[-0.05em] sm:text-6xl">{moment.title}</h3>
                    <p className="mt-6 max-w-xl text-base leading-relaxed text-white/48">{moment.text}</p>
                  </div>
                </div>
                <div className={`grid min-h-72 place-items-center rounded-[1.5rem] border border-white/10 bg-gradient-to-br ${moment.color} to-transparent`}>
                  <Icon className="size-24 text-white/65" strokeWidth={0.75} />
                </div>
              </LiquidGlass>
            ))}
          </ScrollStory>
        </section>
      </div>
    </LenisProvider>
  )
}

function CommandCenter() {
  const metrics = [
    ["Velocity", "82.4", "+12.8%"],
    ["Active flows", "1,248", "Live"],
    ["System health", "99.99", "Stable"],
  ]

  return (
    <LiquidGlass className="relative mx-auto w-full max-w-3xl rounded-[1.75rem] p-3 md:p-4">
      <div className="overflow-hidden rounded-[1.35rem] border border-white/10 bg-[#080d13]/92">
        <div className="flex h-12 items-center gap-2 border-b border-white/10 px-4">
          <span className="size-2 rounded-full bg-rose-400/70" />
          <span className="size-2 rounded-full bg-amber-300/70" />
          <span className="size-2 rounded-full bg-emerald-300/70" />
          <p className="ml-3 text-[10px] uppercase tracking-[0.2em] text-white/30">Command / Live operations</p>
          <Command className="ml-auto size-4 text-cyan-300/70" />
        </div>
        <div className="grid min-h-[480px] md:grid-cols-[150px_1fr]">
          <aside className="hidden border-r border-white/10 p-3 md:block">
            {["Overview", "Signals", "Automations", "Models"].map((item, index) => (
              <div key={item} className={`mb-1 rounded-lg px-3 py-2 text-xs ${index === 0 ? "bg-cyan-300/10 text-cyan-200" : "text-white/35"}`}>
                {item}
              </div>
            ))}
          </aside>
          <div className="p-4">
            <div className="grid gap-2 sm:grid-cols-3">
              {metrics.map(([label, value, status]) => (
                <div key={label} className="rounded-xl border border-white/8 bg-white/[0.025] p-3">
                  <p className="text-[10px] uppercase tracking-[0.16em] text-white/30">{label}</p>
                  <p className="mt-4 text-2xl font-medium">{value}</p>
                  <p className="mt-1 text-[10px] text-emerald-300">{status}</p>
                </div>
              ))}
            </div>
            <div className="mt-3 rounded-xl border border-white/8 bg-white/[0.02] p-4">
              <div className="flex items-center justify-between">
                <p className="text-xs text-white/45">Network activity</p>
                <ScanLine className="size-4 text-cyan-300" />
              </div>
              <div className="mt-8 flex h-36 items-end gap-1">
                {[32, 52, 44, 68, 58, 84, 64, 92, 72, 100, 82, 94, 76, 88, 98, 72].map((height, index) => (
                  <span key={height + index} className="flex-1 rounded-t-sm bg-gradient-to-t from-blue-500/15 to-cyan-300/85" style={{ height: `${height}%` }} />
                ))}
              </div>
            </div>
            <div className="mt-3 grid gap-2 sm:grid-cols-2">
              <div className="rounded-xl border border-white/8 p-4">
                <p className="text-xs text-white/35">Latest signal</p>
                <p className="mt-3 text-sm">Conversion anomaly resolved automatically.</p>
              </div>
              <div className="rounded-xl border border-emerald-300/15 bg-emerald-300/[0.04] p-4">
                <p className="text-xs text-emerald-200/60">System status</p>
                <p className="mt-3 text-sm text-emerald-100">All systems operational</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LiquidGlass>
  )
}

export function DashboardCinematicDemo() {
  const systems = [
    { index: "01", title: "Información que respira.", text: "La densidad se organiza en capas, estados y señales. Todo se entiende sin convertir la interfaz en una pared de tarjetas.", icon: Layers3 },
    { index: "02", title: "El sistema responde contigo.", text: "Microinteracciones, cambios de estado y transiciones de layout hacen visible lo que ocurre sin distraer de la operación.", icon: Workflow },
    { index: "03", title: "Complejidad bajo control.", text: "Tablas, comandos, automatizaciones y observabilidad comparten tokens y jerarquía para escalar sin perder claridad.", icon: Cpu },
  ]

  return (
    <LenisProvider>
      <div className="relative overflow-hidden rounded-[2rem] border border-cyan-300/10 bg-[#03080d] text-white">
        <div className="cinematic-noise pointer-events-none absolute inset-0 z-20 opacity-[0.035]" />
        <section className="relative min-h-[min(980px,88vh)] overflow-hidden px-6 py-20 md:px-12 lg:px-20">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(34,211,238,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,.035)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
          <div className="relative z-10 grid items-center gap-16 lg:grid-cols-[0.82fr_1.18fr]">
            <div>
              <motion.p {...reveal} transition={{ duration: 0.6 }} className="mb-6 flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-cyan-300">
                <span className="size-1.5 rounded-full bg-cyan-300 shadow-[0_0_14px_#67e8f9]" /> Intelligence workspace
              </motion.p>
              <SplitTextReveal className="text-6xl font-semibold leading-[0.88] tracking-[-0.07em] text-balance sm:text-7xl lg:text-[clamp(4.8rem,7.2vw,8rem)]">
                Controla el sistema. No persigas los datos.
              </SplitTextReveal>
              <motion.p {...reveal} transition={{ delay: 0.4, duration: 0.7 }} className="mt-8 max-w-xl text-lg leading-relaxed text-white/50">
                Un dashboard cinematográfico para productos complejos que necesitan sentirse precisos, vivos y completamente bajo control.
              </motion.p>
              <TemplateActions target="#dashboard-story" />
            </div>
            <CommandCenter />
          </div>
          <div className="relative z-10 mt-20 grid gap-3 sm:grid-cols-3">
            {[["01", "Realtime"], ["02", "Predictive"], ["03", "Composable"]].map(([index, label]) => (
              <div key={index} className="border-t border-white/12 pt-4">
                <p className="text-xs text-cyan-300/60">{index}</p>
                <p className="mt-2 text-sm uppercase tracking-[0.18em] text-white/45">{label}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="dashboard-story" className="border-t border-white/10 px-6 py-24 md:px-12 lg:px-20">
          <div className="mb-20 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="cinematic-scroll-reveal max-w-4xl text-5xl font-semibold tracking-[-0.055em] sm:text-7xl">
              Una interfaz que explica el estado del mundo.
            </h2>
            <p className="max-w-md text-lg leading-relaxed text-white/45">No es una colección de widgets. Es un lenguaje operativo completo.</p>
          </div>
          <ScrollStory className="grid gap-8">
            {systems.map(({ icon: Icon, ...system }) => (
              <LiquidGlass
                key={system.index}
                data-story-panel
                className="min-h-[480px] rounded-[2rem] p-7 md:p-12"
                contentClassName="grid h-full items-end gap-10 lg:grid-cols-[1.15fr_0.85fr]"
              >
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-cyan-200/45">{system.index} / System principle</p>
                  <h3 className="mt-8 max-w-3xl text-4xl font-medium tracking-[-0.05em] sm:text-6xl">{system.title}</h3>
                  <p className="mt-6 max-w-xl text-base leading-relaxed text-white/45">{system.text}</p>
                </div>
                <div className="grid min-h-64 place-items-center rounded-[1.5rem] border border-cyan-300/10 bg-[radial-gradient(circle,rgba(34,211,238,.16),transparent_60%)]">
                  <Icon className="size-24 text-cyan-200/65" strokeWidth={0.75} />
                </div>
              </LiquidGlass>
            ))}
          </ScrollStory>
        </section>
      </div>
    </LenisProvider>
  )
}

function ProjectFrame({ number, title, tone }: { number: string; title: string; tone: string }) {
  return (
    <article data-story-panel className="group border-t border-white/12 py-10 md:py-14">
      <div className="grid items-center gap-8 lg:grid-cols-[0.16fr_0.5fr_1.1fr_0.12fr]">
        <p className="text-xs text-white/35">{number}</p>
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-white/32">Selected work / 2026</p>
          <h3 className="mt-4 text-4xl font-medium tracking-[-0.05em] sm:text-6xl">{title}</h3>
        </div>
        <div className={`relative aspect-[16/9] overflow-hidden rounded-[1.5rem] border border-white/10 bg-gradient-to-br ${tone} to-[#090909]`}>
          <div className="absolute inset-[12%] rounded-[1.2rem] border border-white/12 bg-black/25 backdrop-blur-md transition-transform duration-700 group-hover:scale-[1.025]">
            <div className="grid h-full place-items-center">
              <MorphingSymbol className="size-20 text-white/60" />
            </div>
          </div>
        </div>
        <ArrowUpRight className="size-6 text-white/35 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white" />
      </div>
    </article>
  )
}

export function PortfolioCinematicDemo() {
  return (
    <LenisProvider>
      <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#080808] text-white">
        <div className="cinematic-noise pointer-events-none absolute inset-0 z-20 opacity-[0.055]" />
        <section className="relative min-h-[min(980px,88vh)] overflow-hidden px-6 py-20 md:px-12 lg:px-20">
          <div className="absolute right-[-10%] top-[-15%] size-[55vw] rounded-full bg-amber-200/[0.06] blur-[120px]" />
          <div className="relative z-10 flex min-h-[720px] flex-col justify-between">
            <div className="flex items-start justify-between gap-8">
              <motion.p {...reveal} transition={{ duration: 0.6 }} className="text-xs uppercase tracking-[0.3em] text-amber-100/55">
                Independent creative technologist
              </motion.p>
              <p className="hidden max-w-xs text-right text-sm leading-relaxed text-white/35 md:block">
                Dirección, diseño y tecnología para productos digitales con carácter.
              </p>
            </div>
            <div className="my-20">
              <SplitTextReveal className="max-w-[1200px] text-6xl font-medium leading-[0.84] tracking-[-0.075em] text-balance sm:text-8xl lg:text-[clamp(6rem,11vw,12rem)]">
                Trabajo que deja una impresión.
              </SplitTextReveal>
              <motion.div {...reveal} transition={{ delay: 0.55, duration: 0.7 }} className="mt-10 flex flex-wrap items-end justify-between gap-8">
                <p className="max-w-xl text-lg leading-relaxed text-white/45">
                  Un portfolio editorial donde cada proyecto tiene ritmo, escala y una identidad propia, sin depender de una cuadrícula predecible.
                </p>
                <TemplateActions target="#portfolio-work" />
              </motion.div>
            </div>
            <div className="grid gap-4 border-t border-white/12 pt-5 sm:grid-cols-3">
              <p className="text-xs uppercase tracking-[0.2em] text-white/30">Based everywhere</p>
              <p className="text-xs uppercase tracking-[0.2em] text-white/30">Available selectively</p>
              <p className="text-xs uppercase tracking-[0.2em] text-white/30 sm:text-right">Scroll to explore</p>
            </div>
          </div>
        </section>

        <section id="portfolio-work" className="border-t border-white/10 px-6 py-24 md:px-12 lg:px-20">
          <div className="mb-20 grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
            <p className="text-xs uppercase tracking-[0.24em] text-amber-100/45">Selected work / 2024—2026</p>
            <h2 className="cinematic-scroll-reveal text-5xl font-medium tracking-[-0.06em] sm:text-7xl">
              Tres mundos. Un mismo estándar.
            </h2>
          </div>
          <ScrollStory>
            <ProjectFrame number="01" title="Atlas Finance" tone="from-blue-500/35 via-indigo-500/10" />
            <ProjectFrame number="02" title="New Matter" tone="from-amber-300/30 via-orange-500/10" />
            <ProjectFrame number="03" title="Forma Studio" tone="from-fuchsia-500/30 via-violet-500/10" />
          </ScrollStory>
        </section>

        <section className="border-t border-white/10 px-6 py-28 text-center md:px-12">
          <Box className="mx-auto size-10 text-amber-100/55" strokeWidth={1} />
          <h2 className="mx-auto mt-8 max-w-5xl text-5xl font-medium tracking-[-0.06em] sm:text-8xl">
            El próximo proyecto puede cambiar la conversación.
          </h2>
          <ViewTransitionLink href="https://github.com/jesusoldekamp-hue/super-wow-ui-design" className="mt-10 inline-flex h-12 items-center gap-2 rounded-full bg-white px-6 text-sm font-medium text-black">
            Ver el repositorio <ArrowUpRight className="size-4" />
          </ViewTransitionLink>
        </section>
      </div>
    </LenisProvider>
  )
}
