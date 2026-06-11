import { ArrowRight, Check, Code2, Copy, Sparkles } from "lucide-react"
import Link from "next/link"
import { Suspense } from "react"

import { Button } from "@workspace/ui/components/button"
import { LiquidGlass } from "@workspace/ui/components/liquid-glass"

import { CatalogExplorer } from "@/components/catalog-explorer"
import { Reveal } from "@/components/reveal"
import { TemplatePreview } from "@/components/template-preview"
import { resources } from "@/lib/catalog"

export default function Page() {
  const featured = resources.filter((item) => item.featured).slice(0, 5)

  return (
    <main>
      <section className="relative overflow-hidden border-b">
        <div className="grid-background pointer-events-none absolute inset-0 opacity-50" />
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-[1.05fr_1fr] lg:px-8 lg:py-24">
          <Reveal eager className="relative flex flex-col justify-center">
            <h1 className="text-gradient max-w-3xl text-5xl font-semibold tracking-[-0.055em] sm:text-6xl lg:text-7xl">
              Diseña a la velocidad de tus ideas.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Componentes, plantillas y recursos modernos para construir interfaces excepcionales con herramientas open source.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href="/componentes">Explorar componentes <ArrowRight data-icon="inline-end" /></Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="https://github.com/jesusoldekamp-hue/awesome-modern-ui">
                  <Code2 data-icon="inline-start" /> Ver en GitHub
                </a>
              </Button>
            </div>
            <LiquidGlass className="mt-8 max-w-xl rounded-2xl p-4 font-mono text-sm">
              <div className="mb-3 flex items-center justify-between text-xs text-muted-foreground">
                <span>Instalar un bloque</span>
                <Copy className="size-3.5" />
              </div>
              <code><span className="text-primary">pnpm dlx shadcn@latest add</span> https://awesome-modern-ui.vercel.app/r/hero-modern.json</code>
            </LiquidGlass>
            <p className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
              <Check className="size-4 text-primary" /> Next.js, React, Tailwind CSS y TypeScript.
            </p>
          </Reveal>
          <Reveal eager className="grid gap-3 sm:grid-cols-[1.25fr_0.9fr]" delay={0.1}>
            <TemplatePreview />
            <LiquidGlass className="rounded-2xl p-4">
              <h2 className="font-semibold">Recursos curados</h2>
              <p className="mb-3 text-sm text-muted-foreground">Solo lo mejor del ecosistema.</p>
              <div className="flex flex-col gap-2">
                {featured.map((item) => (
                  <Link key={item.slug} href={`/recursos/${item.slug}`} className="rounded-xl border bg-background/45 p-3 transition-colors hover:bg-accent">
                    <p className="font-medium">{item.name}</p>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{item.description}</p>
                  </Link>
                ))}
              </div>
            </LiquidGlass>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
        <Reveal>
          <Suspense fallback={<div className="glass h-96 rounded-2xl" />}>
            <CatalogExplorer compact />
          </Suspense>
          <div className="mt-5 text-center">
            <Button asChild variant="outline"><Link href="/recursos">Ver los 40 recursos <ArrowRight data-icon="inline-end" /></Link></Button>
          </div>
        </Reveal>
      </section>

      <section className="border-t">
        <div className="mx-auto grid max-w-7xl gap-5 px-5 py-16 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <Reveal>
            <Sparkles className="mb-5 size-8 text-primary" />
            <h2 className="text-3xl font-semibold tracking-tight">Guías y principios</h2>
            <p className="mt-3 max-w-md text-muted-foreground">
              Decisiones técnicas y visuales para que lo moderno no sacrifique claridad, accesibilidad ni velocidad.
            </p>
            <Button asChild variant="outline" className="mt-6"><Link href="/guias">Ver todas las guías</Link></Button>
          </Reveal>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              ["Sistema de diseño moderno", "Tokens, composición y escalabilidad."],
              ["Accesibilidad por defecto", "Teclado, contraste y movimiento seguro."],
              ["Rendimiento web", "Imágenes, fuentes y Core Web Vitals."],
              ["Animaciones con propósito", "Movimiento que mejora la experiencia."],
            ].map(([title, text], index) => (
              <Reveal key={title} delay={index * 0.05} className="glass rounded-2xl p-6">
                <h3 className="font-medium">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
