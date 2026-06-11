import { ArrowLeft } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"

import { Button } from "@workspace/ui/components/button"

import { getGuide, guides } from "@/lib/guides"

export function generateStaticParams() {
  return guides.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const guide = getGuide((await params).slug)
  return guide ? { title: guide.title, description: guide.description } : {}
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const guide = getGuide((await params).slug)
  if (!guide) notFound()

  return (
    <main className="mx-auto max-w-3xl px-5 py-14 lg:px-8">
      <Button asChild variant="ghost"><Link href="/guias"><ArrowLeft data-icon="inline-start" />Guías</Link></Button>
      <article className="mt-8">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">{guide.title}</h1>
        <p className="mt-6 text-xl leading-relaxed text-muted-foreground">{guide.description}</p>
        <div className="mt-12 flex flex-col gap-10">
          {guide.sections.map(([title, content]) => (
            <section key={title}>
              <h2 className="text-2xl font-medium">{title}</h2>
              <p className="mt-3 text-lg leading-8 text-muted-foreground">{content}</p>
            </section>
          ))}
        </div>
      </article>
    </main>
  )
}
