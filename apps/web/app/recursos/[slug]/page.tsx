import { ArrowLeft, ArrowUpRight, CheckCircle2 } from "lucide-react"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import { LiquidGlass } from "@workspace/ui/components/liquid-glass"

import { ResourceCard } from "@/components/resource-card"
import { categoryLabels, getResource, resources } from "@/lib/catalog"

export function generateStaticParams() {
  return resources.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const item = getResource((await params).slug)
  return item
    ? {
        title: item.name,
        description: item.description,
        openGraph: { images: [{ url: item.image, alt: item.imageAlt }] },
      }
    : {}
}

export default async function ResourcePage({ params }: { params: Promise<{ slug: string }> }) {
  const item = getResource((await params).slug)
  if (!item) notFound()

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: item.name,
    url: item.url,
    description: item.description,
    applicationCategory: categoryLabels[item.category],
  }
  const related = resources
    .filter((resource) => resource.category === item.category && resource.slug !== item.slug)
    .slice(0, 3)

  return (
    <main className="relative mx-auto max-w-7xl px-5 py-14 lg:px-8">
      <span className="liquid-orb -left-20 top-16 size-72" />
      <span className="liquid-orb right-4 top-40 size-72 bg-[radial-gradient(circle,rgba(34,211,238,.2),transparent_62%)]" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Button asChild variant="ghost" className="relative">
        <Link href="/recursos"><ArrowLeft data-icon="inline-start" />Recursos</Link>
      </Button>
      <article className="relative mt-6">
        <LiquidGlass
          className="liquid-glass--deep overflow-hidden rounded-[2rem]"
          style={{ "--glass-x": "14%", "--glass-y": "0%" }}
        >
          <div className="relative aspect-[16/9] border-b bg-muted lg:aspect-[2/1]">
            <Image
              src={item.image}
              alt={item.imageAlt}
              fill
              priority
              sizes="(min-width: 1280px) 1200px, 100vw"
              className="object-cover"
            />
            <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/72 via-transparent to-white/10" />
          </div>
          <div className="grid gap-10 p-7 sm:p-10 lg:grid-cols-[1.4fr_0.6fr]">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge>{categoryLabels[item.category]}</Badge>
                <Badge variant="outline">{item.type}</Badge>
                <Badge variant="outline">{item.pricing}</Badge>
              </div>
              <h1 className="mt-6 text-4xl font-semibold tracking-[-0.045em] sm:text-6xl">
                {item.name}
              </h1>
              <p className="mt-5 text-xl leading-relaxed text-muted-foreground">{item.description}</p>
              <div className="liquid-card mt-9 rounded-2xl p-6">
                <p className="flex items-center gap-2 font-medium">
                  <CheckCircle2 className="size-5 text-primary" />
                  Por qué lo recomendamos
                </p>
                <p className="mt-3 leading-relaxed text-muted-foreground">{item.reason}</p>
              </div>
              <Button asChild size="lg" className="mt-8">
                <a href={item.url}>
                  Abrir sitio oficial <ArrowUpRight data-icon="inline-end" />
                </a>
              </Button>
            </div>
            <aside className="liquid-card rounded-2xl p-6">
              <h2 className="font-semibold">Ficha rápida</h2>
              <dl className="mt-6 grid gap-6">
                <div><dt className="text-sm text-muted-foreground">Licencia</dt><dd className="mt-1 font-medium">{item.license}</dd></div>
                <div><dt className="text-sm text-muted-foreground">Frameworks</dt><dd className="mt-1 font-medium">{item.frameworks.join(", ")}</dd></div>
                <div><dt className="text-sm text-muted-foreground">Mantenimiento</dt><dd className="mt-1 font-medium">{item.maintained ? "Activo" : "Revisar"}</dd></div>
                <div>
                  <dt className="text-sm text-muted-foreground">Ideal para</dt>
                  <dd className="mt-2 flex flex-wrap gap-2">
                    {item.tags.map((tag) => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                  </dd>
                </div>
              </dl>
            </aside>
          </div>
        </LiquidGlass>
      </article>

      {related.length ? (
        <section className="py-14">
          <h2 className="text-2xl font-semibold tracking-tight">Más recursos de esta categoría</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {related.map((resource) => <ResourceCard key={resource.slug} item={resource} />)}
          </div>
        </section>
      ) : null}
    </main>
  )
}
