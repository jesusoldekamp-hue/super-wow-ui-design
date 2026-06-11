import { ArrowLeft, ArrowUpRight, CheckCircle2 } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"

import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"

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
  return item ? { title: item.name, description: item.description } : {}
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

  return (
    <main className="mx-auto max-w-4xl px-5 py-14 lg:px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Button asChild variant="ghost"><Link href="/recursos"><ArrowLeft data-icon="inline-start" />Recursos</Link></Button>
      <div className="glass mt-6 rounded-3xl p-7 sm:p-10">
        <div className="flex flex-wrap gap-2">
          <Badge>{categoryLabels[item.category]}</Badge>
          <Badge variant="outline">{item.type}</Badge>
          <Badge variant="outline">{item.pricing}</Badge>
        </div>
        <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-6xl">{item.name}</h1>
        <p className="mt-5 text-xl leading-relaxed text-muted-foreground">{item.description}</p>
        <div className="mt-9 rounded-2xl border bg-background/50 p-6">
          <p className="flex items-center gap-2 font-medium"><CheckCircle2 className="size-5 text-primary" />Por qué está aquí</p>
          <p className="mt-3 leading-relaxed text-muted-foreground">{item.reason}</p>
        </div>
        <dl className="mt-8 grid gap-6 sm:grid-cols-3">
          <div><dt className="text-sm text-muted-foreground">Licencia</dt><dd className="mt-1 font-medium">{item.license}</dd></div>
          <div><dt className="text-sm text-muted-foreground">Frameworks</dt><dd className="mt-1 font-medium">{item.frameworks.join(", ")}</dd></div>
          <div><dt className="text-sm text-muted-foreground">Mantenimiento</dt><dd className="mt-1 font-medium">{item.maintained ? "Activo" : "Revisar"}</dd></div>
        </dl>
        <Button asChild size="lg" className="mt-10"><a href={item.url}>Abrir sitio oficial <ArrowUpRight data-icon="inline-end" /></a></Button>
      </div>
    </main>
  )
}
