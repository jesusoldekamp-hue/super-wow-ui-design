import { ArrowRight, Code2, Layers3, Palette, Sparkles } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@workspace/ui/components/button"

import { ResourceCard } from "@/components/resource-card"
import { Reveal } from "@/components/reveal"
import { TemplatePreview } from "@/components/template-preview"
import { categories, categoryLabels, resources } from "@/lib/catalog"

export default function Page() {
  const featured = resources.filter((item) => item.featured)
  const heroResources = featured.slice(0, 4)
  const highlighted = featured.slice(0, 8)

  return (
    <main>
      <section className="relative overflow-hidden border-b">
        <div className="grid-background pointer-events-none absolute inset-0 opacity-45" />
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-[0.92fr_1.08fr] lg:px-8 lg:py-24">
          <Reveal eager className="relative flex flex-col justify-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Recursos para diseño web y apps
            </p>
            <h1 className="mt-4 max-w-3xl text-5xl font-semibold tracking-[-0.06em] sm:text-6xl lg:text-7xl">
              Construye interfaces modernas con mejores herramientas.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Una colección visual y curada de componentes, animación, 3D, rendimiento e
              inspiración para crear páginas web y productos digitales.
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
            <p className="mt-5 flex items-center gap-2 text-sm text-muted-foreground">
              <Sparkles className="size-4 text-primary" />
              Selección breve, mantenida y sin alternativas repetidas.
            </p>
          </Reveal>

          <Reveal eager delay={0.1} className="relative grid gap-3 sm:grid-cols-2">
            {heroResources.map((item, index) => (
              <Link
                key={item.slug}
                href={`/recursos/${item.slug}`}
                className={`group relative overflow-hidden rounded-2xl border bg-muted shadow-2xl ${
                  index === 0 ? "sm:col-span-2" : ""
                }`}
              >
                <div className={`relative ${index === 0 ? "aspect-[16/7]" : "aspect-[16/10]"}`}>
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    priority
                    sizes="(min-width: 1024px) 55vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>
                <span className="absolute bottom-3 left-3 rounded-full border border-white/15 bg-black/60 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                  {item.name}
                </span>
              </Link>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="border-b bg-muted/25">
        <div className="mx-auto max-w-7xl px-5 py-8 lg:px-8">
          <div className="flex gap-3 overflow-x-auto pb-1">
            {categories.map((category) => (
              <Link
                key={category}
                href={`/recursos?category=${category}`}
                className="whitespace-nowrap rounded-full border bg-background/70 px-4 py-2 text-sm transition-colors hover:border-primary/50 hover:text-primary"
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

      <section className="border-y bg-muted/20">
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
        <Reveal className="glass flex flex-col items-start justify-between gap-7 rounded-3xl p-7 sm:flex-row sm:items-center sm:p-10">
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
            <a href="https://github.com/jesusoldekamp-hue/awesome-modern-ui">
              <Code2 data-icon="inline-start" />
              Abrir GitHub
            </a>
          </Button>
        </Reveal>
      </section>
    </main>
  )
}
