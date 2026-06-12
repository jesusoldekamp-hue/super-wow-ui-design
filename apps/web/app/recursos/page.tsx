import type { Metadata } from "next"
import { Suspense } from "react"

import { CatalogExplorer } from "@/components/catalog-explorer"

export const metadata: Metadata = {
  title: "Recursos",
  description: "Herramientas visuales y técnicas para diseñar páginas web y aplicaciones modernas.",
}

export default function ResourcesPage() {
  return (
    <main className="relative mx-auto max-w-7xl px-5 py-14 lg:px-8">
      <span className="liquid-orb -left-20 top-10 size-72" />
      <span className="liquid-orb right-0 top-28 size-64 bg-[radial-gradient(circle,rgba(34,211,238,.22),transparent_62%)]" />
      <div className="relative mb-9 max-w-4xl">
        <h1 className="text-4xl font-semibold tracking-[-0.055em] sm:text-6xl">
          Recursos para diseñar webs y apps modernas
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Componentes, animación, 3D, rendimiento e inspiración. Cada herramienta incluye
          una explicación clara de para qué sirve y por qué merece estar aquí.
        </p>
      </div>
      <Suspense fallback={<div className="liquid-card h-96 animate-pulse rounded-2xl" />}>
        <CatalogExplorer />
      </Suspense>
    </main>
  )
}
