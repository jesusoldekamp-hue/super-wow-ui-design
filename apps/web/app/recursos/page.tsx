import type { Metadata } from "next"
import { Suspense } from "react"

import { CatalogExplorer } from "@/components/catalog-explorer"

export const metadata: Metadata = {
  title: "Recursos",
  description: "40 herramientas y patrones modernos, seleccionados y clasificados.",
}

export default function ResourcesPage() {
  return (
    <main className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
      <div className="mb-9 max-w-3xl">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Recursos que sí usaríamos</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Una selección intencional: mantenidos, útiles y sin veinte alternativas que resuelven lo mismo.
        </p>
      </div>
      <Suspense fallback={<div className="glass h-96 animate-pulse rounded-2xl" />}>
        <CatalogExplorer />
      </Suspense>
    </main>
  )
}
