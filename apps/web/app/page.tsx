import { ArrowRight, Code2, Layers3, Palette, Sparkles } from "lucide-react"
import Link from "next/link"

import { Button } from "@workspace/ui/components/button"
import { LiquidGlass } from "@workspace/ui/components/liquid-glass"

import { LiquidResourceStage } from "@/components/liquid-resource-stage"
import { ResourceCard } from "@/components/resource-card"
import { Reveal } from "@/components/reveal"
import { TemplatePreview } from "@/components/template-preview"
import { categories, categoryLabels, resources } from "@/lib/catalog"

export default function Page() {
  const featured = resources.filter((item) => item.featured)
  const heroResources = featured.slice(0, 4)
  const highlighted = featured.slice(0, 8)

  return (
    <main className="overflow-hidden">
      <section className="liquid-hero-shell relative overflow-hidden border-b">
        <div className="grid-background pointer-events-none absolute inset-0 opacity-45" />
        <span className="liquid-orb left-[7%] top-16 size-64" />
        <span className="liquid-orb right-[9%] top-24 size-80 bg-[radial-gradient(circle,rgba(34,211,238,.28),transparent_62%)]" />
        <span className="liquid-orb bottom-[-8rem] left-[42%] size-96 bg-[radial-gradient(circle,rgba(192,132,252,.18),transparent_65%)]" />
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-24">
          <Reveal eager className="relative flex flex-col justify-center">
            <h1 className="max-w-3xl text-5xl font-semibold tracking-[-0.065em] sm:text-6xl lg:text-7xl">
              Construye interfaces modernas con mejores herramientas.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Una colección visual y curada de componentes, animación, 3D, rendimiento e
              inspiración para crear páginas web y productos digitales con estética actual.
            </p>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
              Comparte esta página o el GitHub con Codex, Claude u otra IA para darle un
              contexto curado de recursos, patrones liquid UI y bloques listos para crear
              interfaces premium.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href="/recursos">
                  Explorar {resources.length} recursos <ArrowRight data-icon="inline-end" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/plantillas">
                  Ver diseños de apps <Palette data-icon="inline-end" />
                </Link>
              </Button>
            </div>
            <div className="mt-8 grid max-w-xl grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                [`${resources.length}`, "recursos"],
                [`${categories.length}`, "categorías"],
                ["4", "diseños"],
                ["100%", "visual"],
              ].map(([value, label]) => (
                <div key={label} className="liquid-card rounded-2xl px-4 py-3">
                  <p className="text-2xl font-semibold tracking-[-0.04em]">{value}</p>
                  <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">{label}</p>
                </div>
              ))}
            </div>
            <p className="mt-5 flex items-center gap-2 text-sm text-muted-foreground">
              <Sparkles className="size-4 text-primary" />
              Selección breve, mantenida, visual y sin alternativas repetidas.
            </p>
          </Reveal>

          <Reveal eager delay={0.1} className="relative">
            <LiquidResourceStage items={heroResources} />
          </Reveal>
        </div>
      </section>

      <section className="relative border-b bg-transparent">
        <div className="mx-auto max-w-7xl px-5 py-8 lg:px-8">
          <div className="liquid-rail flex gap-3 overflow-x-auto rounded-full p-2">
            {categories.map((category) => (
              <Link
                key={category}
                href={`/recursos?category=${category}`}
                className="relative z-10 whitespace-nowrap rounded-full border border-white/10 bg-background/45 px-4 py-2 text-sm transition-colors hover:border-primary/50 hover:text-primary"
              >
                {categoryLabels[category]}
                <span className="ml-2 text-muted-foreground">
                  {resources.filter((item) => item.category === category).length}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <Reveal>
          <div className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <p className="text-sm font-medium text-primary">Selección destacada</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                Herramientas que mejoran el resultado
              </h2>
              <p className="mt-3 text-muted-foreground">
                Cada ficha explica qué resuelve, cuándo usarla, su licencia y su precio.
              </p>
            </div>
            <Button asChild variant="outline">
              <Link href="/recursos">
                Ver todo el directorio <ArrowRight data-icon="inline-end" />
              </Link>
            </Button>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {highlighted.map((item) => <ResourceCard key={item.slug} item={item} />)}
          </div>
        </Reveal>
      </section>

      <section className="liquid-hero-shell border-y">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-[0.75fr_1.25fr] lg:px-8">
          <Reveal className="flex flex-col justify-center">
            <Layers3 className="size-9 text-primary" />
            <p className="mt-5 text-sm font-medium text-primary">Diseños aplicados</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
              Mira cómo se combinan en una interfaz real
            </h2>
            <p className="mt-4 max-w-lg text-muted-foreground">
              Landings, dashboards, portfolios y experiencias cinematográficas creadas con
              las herramientas del directorio.
            </p>
            <Button asChild className="mt-7 self-start">
              <Link href="/plantillas">
                Explorar diseños <ArrowRight data-icon="inline-end" />
              </Link>
            </Button>
          </Reveal>
          <Reveal delay={0.08}>
            <TemplatePreview />
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="flex flex-col justify-center">
              <Code2 className="size-9 text-primary" />
              <p className="mt-5 text-sm font-medium text-primary">Kit instalable</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">
                No sólo inspiración. Bloques liquid UI para copiar a tus proyectos.
              </h2>
              <p className="mt-4 max-w-xl text-muted-foreground">
                El registry publica heroes, bentos, dashboard shells, secciones cinematic y resource cards compatibles con shadcn.
              </p>
              <Button asChild className="mt-7 self-start">
                <Link href="/componentes">
                  Explorar registry <ArrowRight data-icon="inline-end" />
                </Link>
              </Button>
            </div>
            <LiquidGlass
              className="rounded-[2rem] p-4"
              contentClassName="grid gap-3 sm:grid-cols-2"
              style={{ "--glass-x": "70%", "--glass-y": "0%" }}
            >
              {["liquid-hero", "liquid-bento", "liquid-dashboard-shell", "cinematic-section"].map((block) => (
                <a key={block} href={`/r/${block}.json`} className="liquid-card rounded-2xl p-5">
                  <p className="font-mono text-xs text-primary">/r/{block}.json</p>
                  <p className="mt-12 text-xl font-medium tracking-[-0.04em]">{block}</p>
                  <p className="mt-2 text-sm text-muted-foreground">pnpm dlx shadcn@latest add</p>
                </a>
              ))}
            </LiquidGlass>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <Reveal>
          <LiquidGlass
            className="rounded-[2rem] p-7 sm:p-10"
            contentClassName="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]"
            style={{ "--glass-x": "82%", "--glass-y": "12%" }}
          >
            <div>
              <p className="text-sm font-medium text-primary">Contexto para IA</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">
                Dale a tu asistente una referencia clara de diseño moderno.
              </h2>
              <p className="mt-4 max-w-xl text-muted-foreground">
                El repo y la web funcionan como una base de contexto para Codex, Claude o
                cualquier IA de desarrollo: stack recomendado, recursos curados, criterios
                de calidad, patrones cinematic y bloques liquid UI instalables.
              </p>
            </div>
            <div className="liquid-card rounded-3xl p-5 font-mono text-xs leading-relaxed text-muted-foreground">
              <p className="text-primary">Prompt sugerido</p>
              <p className="mt-4">
                Usa super-wow-ui-design como referencia de diseño para construir una
                interfaz con liquid UI, accesibilidad, performance, motion safety y
                componentes modernos.
              </p>
            </div>
          </LiquidGlass>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <Reveal>
          <LiquidGlass
            className="rounded-[2rem] p-7 sm:p-10"
            contentClassName="flex flex-col items-start justify-between gap-7 sm:flex-row sm:items-center"
            style={{ "--glass-x": "8%", "--glass-y": "0%" }}
          >
            <div className="max-w-2xl">
              <p className="text-sm font-medium text-primary">Código y catálogo abiertos</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight">
                Una colección para consultar, compartir y mejorar.
              </h2>
              <p className="mt-3 text-muted-foreground">
                El repositorio contiene el catálogo, sus imágenes, ejemplos y criterios de
                selección para construir mejores productos web.
              </p>
            </div>
            <Button asChild variant="outline" size="lg">
              <a href="https://github.com/jesusoldekamp-hue/super-wow-ui-design">
                <Code2 data-icon="inline-start" />
                Abrir GitHub
              </a>
            </Button>
          </LiquidGlass>
        </Reveal>
      </section>
    </main>
  )
}
