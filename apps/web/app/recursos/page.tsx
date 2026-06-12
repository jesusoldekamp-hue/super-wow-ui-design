import type { Metadata } from "next"
import { Suspense } from "react"

import { CatalogExplorer } from "@/components/catalog-explorer"

export const metadata: Metadata = {
  title: "Recursos",
  description: "Herramientas visuales y técnicas para diseñar páginas web y aplicaciones modernas.",
}

export default function ResourcesPage() {
  return (
    <main className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
      <div className="mb-9 max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
          Directorio visual
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-[-0.045em] sm:text-6xl">
          Recursos para diseñar webs y apps modernas
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Componentes, animación, 3D, rendimiento e inspiración. Cada herramienta incluye
          una explicación clara de para qué sirve y por qué merece estar aquí.
        </p>
      </div>
      <Suspense fallback={<div className="glass h-96 animate-pulse rounded-2xl" />}>
        <CatalogExplorer />
      </Suspense>
    </main>
  )
}
