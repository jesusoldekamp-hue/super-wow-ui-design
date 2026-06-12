import { ArrowRight, Gauge, Layers3, MousePointer2, Sparkles } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"

import { BentoFeatures } from "@workspace/ui/blocks/bento-features"
import { HeroModern } from "@workspace/ui/blocks/hero-modern"
import { Button } from "@workspace/ui/components/button"

export const metadata: Metadata = { title: "Componentes" }

export default function ComponentsPage() {
  return (
    <main className="relative mx-auto max-w-7xl px-5 pb-20 lg:px-8">
      <span className="liquid-orb -left-24 top-16 size-72" />
      <span className="liquid-orb right-4 top-36 size-64 bg-[radial-gradient(circle,rgba(34,211,238,.22),transparent_62%)]" />
      <HeroModern
        title="Bloques modernos. Código tuyo."
        description="Primitives accesibles y composiciones listas para adaptar. Sin caja negra, sin estilos imposibles de sobrescribir."
        primaryAction={<a href="/r/hero-modern.json">Instalar hero <ArrowRight data-icon="inline-end" /></a>}
        secondaryAction={<Link href="/plantillas">Ver diseños</Link>}
        preview={
          <div className="liquid-card flex min-h-64 flex-col justify-between rounded-2xl p-6">
            <div className="h-2 w-20 rounded-full bg-primary/70" />
            <div>
              <div className="h-8 w-4/5 rounded-lg bg-foreground/90" />
              <div className="mt-3 h-3 w-3/5 rounded bg-muted-foreground/35" />
              <div className="mt-2 h-3 w-2/5 rounded bg-muted-foreground/25" />
            </div>
            <div className="flex gap-2"><div className="h-9 w-28 rounded-lg bg-primary" /><div className="h-9 w-24 rounded-lg border" /></div>
          </div>
        }
      />
      <BentoFeatures items={[
        { title: "Accesibilidad primero", description: "Radix UI, foco visible, teclado y semántica listos desde el inicio.", icon: MousePointer2, wide: true },
        { title: "Tokens editables", description: "Color, tipografía, radio y espacio desde variables semánticas.", icon: Layers3 },
        { title: "Movimiento seguro", description: "Motion respeta automáticamente la preferencia de reducir movimiento.", icon: Sparkles },
        { title: "Rendimiento medible", description: "Server Components por defecto y JavaScript cliente solo donde aporta valor.", icon: Gauge, wide: true },
      ]} />
      <div className="mt-10 text-center"><Button asChild><a href="/r/bento-features.json">Instalar bento</a></Button></div>
    </main>
  )
}
