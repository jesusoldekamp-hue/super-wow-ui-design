import { ArrowLeft } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"

import { Button } from "@workspace/ui/components/button"
import { LiquidGlass } from "@workspace/ui/components/liquid-glass"

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
    <main className="relative mx-auto max-w-4xl px-5 py-14 lg:px-8">
      <span className="liquid-orb -left-24 top-16 size-72" />
      <Button asChild variant="ghost" className="relative">
        <Link href="/guias"><ArrowLeft data-icon="inline-start" />Guías</Link>
      </Button>
      <article className="relative mt-8">
        <LiquidGlass
          className="liquid-glass--deep rounded-[2rem] p-7 sm:p-10"
          style={{ "--glass-x": "14%", "--glass-y": "0%" }}
        >
          <h1 className="text-4xl font-semibold tracking-[-0.05em] sm:text-6xl">{guide.title}</h1>
          <p className="mt-6 text-xl leading-relaxed text-muted-foreground">{guide.description}</p>
        </LiquidGlass>
        <div className="mt-8 flex flex-col gap-4">
          {guide.sections.map(([title, content]) => (
            <section key={title} className="liquid-card rounded-2xl p-6 sm:p-7">
              <h2 className="text-2xl font-medium">{title}</h2>
              <p className="mt-3 text-lg leading-8 text-muted-foreground">{content}</p>
            </section>
          ))}
        </div>
      </article>
    </main>
  )
}
