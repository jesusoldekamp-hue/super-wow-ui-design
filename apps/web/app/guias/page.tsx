import { ArrowRight, BookOpen } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"

import { Button } from "@workspace/ui/components/button"
import { LiquidGlass } from "@workspace/ui/components/liquid-glass"

import { guides } from "@/lib/guides"

export const metadata: Metadata = { title: "Guías" }

export default function GuidesPage() {
  return (
    <main className="relative mx-auto max-w-5xl px-5 py-14 lg:px-8">
      <span className="liquid-orb -left-24 top-14 size-72" />
      <span className="liquid-orb right-0 top-28 size-64 bg-[radial-gradient(circle,rgba(34,211,238,.2),transparent_62%)]" />
      <BookOpen className="relative size-9 text-primary" />
      <h1 className="relative mt-5 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">
        Guías para mejores interfaces web
      </h1>
      <p className="relative mt-4 max-w-2xl text-lg text-muted-foreground">
        Cómo elegir componentes, animación, tipografía y patrones para páginas web y productos digitales.
      </p>
      <div className="mt-10 flex flex-col gap-4">
        {guides.map((guide) => (
          <LiquidGlass
            key={guide.slug}
            className="rounded-[1.5rem] p-6 sm:p-8"
            style={{ "--glass-x": "12%", "--glass-y": "0%" }}
          >
            <h2 className="text-2xl font-medium">{guide.title}</h2>
            <p className="mt-2 text-muted-foreground">{guide.description}</p>
            <Button asChild variant="link" className="mt-4 px-0">
              <Link href={`/guias/${guide.slug}`}>Leer guía <ArrowRight data-icon="inline-end" /></Link>
            </Button>
          </LiquidGlass>
        ))}
      </div>
    </main>
  )
}
