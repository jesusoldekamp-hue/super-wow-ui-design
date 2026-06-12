import { Orbit } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"

import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"

import { CinematicDemo } from "@/components/cinematic-demo"
import {
  DashboardCinematicDemo,
  LandingCinematicDemo,
  PortfolioCinematicDemo,
} from "@/components/premium-template-demos"

const slugs = ["landing", "dashboard", "portfolio", "cinematic"] as const
type TemplateSlug = (typeof slugs)[number]

export function generateStaticParams() {
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const slug = (await params).slug
  return { title: `Diseño ${slug}` }
}

export default async function TemplatePage({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug as TemplateSlug
  if (!slugs.includes(slug)) notFound()

  const demos = {
    landing: <LandingCinematicDemo />,
    dashboard: <DashboardCinematicDemo />,
    portfolio: <PortfolioCinematicDemo />,
    cinematic: <CinematicDemo />,
  }

  return (
    <main className="mx-auto max-w-[1500px] px-4 py-8 lg:px-8">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div>
          <Badge variant="outline"><Orbit data-icon="inline-start" /> Experiencia cinematográfica</Badge>
          <h1 className="mt-2 text-3xl font-semibold capitalize">{slug}</h1>
        </div>
        <Button asChild variant="outline"><Link href="/plantillas">Ver diseños</Link></Button>
      </div>
      {demos[slug]}
    </main>
  )
}
