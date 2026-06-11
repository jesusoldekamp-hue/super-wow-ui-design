import { ArrowLeft } from "lucide-react"
import Link from "next/link"

import { Button } from "@workspace/ui/components/button"

export default function NotFound() {
  return (
    <main className="grid min-h-[70vh] place-items-center px-5 text-center">
      <div>
        <p className="font-mono text-primary">404</p>
        <h1 className="mt-3 text-4xl font-semibold">Esta página no existe</h1>
        <p className="mt-3 text-muted-foreground">El recurso pudo cambiar o todavía no forma parte de la selección.</p>
        <Button asChild className="mt-7"><Link href="/"><ArrowLeft data-icon="inline-start" />Volver al inicio</Link></Button>
      </div>
    </main>
  )
}
