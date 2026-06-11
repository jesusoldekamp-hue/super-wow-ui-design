import {
  ArrowRight,
  BarChart3,
  Check,
  FolderKanban,
  Mail,
  Menu,
  Orbit,
  Settings,
  Users,
} from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@workspace/ui/components/accordion"
import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@workspace/ui/components/card"
import { Input } from "@workspace/ui/components/input"
import { Switch } from "@workspace/ui/components/switch"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@workspace/ui/components/table"

import { CinematicDemo } from "@/components/cinematic-demo"

const slugs = ["landing", "dashboard", "portfolio", "cinematic"] as const
type TemplateSlug = (typeof slugs)[number]

export function generateStaticParams() {
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const slug = (await params).slug
  return { title: `Plantilla ${slug}` }
}

function LandingDemo() {
  return (
    <div className="overflow-hidden rounded-2xl border bg-background">
      <div className="flex h-14 items-center justify-between border-b px-5">
        <span className="font-semibold">NOVA</span>
        <nav className="hidden gap-5 text-sm text-muted-foreground sm:flex"><span>Producto</span><span>Precios</span><span>Docs</span></nav>
        <Button size="sm">Empezar</Button>
      </div>
      <section className="grid min-h-[540px] place-items-center bg-[radial-gradient(circle_at_50%_20%,color-mix(in_oklch,var(--primary)_18%,transparent),transparent_42%)] px-6 text-center">
        <div className="max-w-3xl">
          <h2 className="text-5xl font-semibold tracking-[-0.05em] sm:text-7xl">Construye mejor. Lanza antes.</h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">Una base enfocada para convertir una buena idea en un producto rápido, claro y memorable.</p>
          <div className="mt-8 flex justify-center gap-3"><Button>Crear proyecto <ArrowRight data-icon="inline-end" /></Button><Button variant="outline">Ver demo</Button></div>
        </div>
      </section>
      <section className="grid gap-3 border-t p-5 md:grid-cols-3">
        {["Sistema visual consistente", "Rendimiento desde el inicio", "Accesibilidad real"].map((title) => (
          <Card key={title}><CardHeader><CardTitle>{title}</CardTitle><CardDescription>Una base pragmática que puedes adaptar sin rehacerlo todo.</CardDescription></CardHeader></Card>
        ))}
      </section>
      <section className="grid gap-4 border-t p-5 lg:grid-cols-3">
        {["Starter", "Pro", "Studio"].map((name, index) => (
          <Card key={name} className={index === 1 ? "ring-primary" : ""}>
            <CardHeader><CardTitle>{name}</CardTitle><CardDescription>Para equipos que quieren moverse con claridad.</CardDescription></CardHeader>
            <CardContent><p className="text-3xl font-semibold">{index === 0 ? "$0" : index === 1 ? "$29" : "$79"}<span className="text-sm font-normal text-muted-foreground"> / mes</span></p><ul className="mt-5 flex flex-col gap-3 text-sm">{["Componentes esenciales", "Actualizaciones", "Soporte de comunidad"].map((item) => <li key={item} className="flex gap-2"><Check className="size-4 text-primary" />{item}</li>)}</ul></CardContent>
          </Card>
        ))}
      </section>
      <section className="border-t p-5">
        <Accordion type="single" collapsible>
          {["¿Puedo cambiar el diseño?", "¿Funciona con Next.js?", "¿Respeta reduced motion?"].map((item) => (
            <AccordionItem value={item} key={item}><AccordionTrigger>{item}</AccordionTrigger><AccordionContent>Sí. El código, los tokens y los componentes quedan dentro de tu proyecto.</AccordionContent></AccordionItem>
          ))}
        </Accordion>
      </section>
    </div>
  )
}

function DashboardDemo() {
  return (
    <div className="grid min-h-[760px] overflow-hidden rounded-2xl border bg-background md:grid-cols-[220px_1fr]">
      <aside className="hidden border-r p-4 md:block">
        <p className="mb-8 font-semibold">Orbit Admin</p>
        <nav className="flex flex-col gap-1 text-sm">
          {[[BarChart3, "Resumen"], [FolderKanban, "Proyectos"], [Users, "Clientes"], [Settings, "Ajustes"]].map(([Icon, label]) => {
            const C = Icon as typeof BarChart3
            return <Button key={label as string} variant={label === "Resumen" ? "secondary" : "ghost"} className="justify-start"><C data-icon="inline-start" />{label as string}</Button>
          })}
        </nav>
      </aside>
      <div>
        <header className="flex h-16 items-center gap-3 border-b px-5"><Menu className="size-5 md:hidden" /><Input placeholder="Buscar..." className="max-w-sm" /><div className="ml-auto size-8 rounded-full bg-primary/30" /></header>
        <div className="p-5">
          <div className="flex items-end justify-between"><div><h2 className="text-2xl font-semibold">Resumen</h2><p className="text-sm text-muted-foreground">Actividad de los últimos 30 días.</p></div><Button>Nuevo proyecto</Button></div>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {[["Ingresos", "$48,290"], ["Clientes", "1,284"], ["Conversión", "8.42%"]].map(([label, value]) => <Card key={label}><CardHeader><CardDescription>{label}</CardDescription><CardTitle className="text-2xl">{value}</CardTitle></CardHeader></Card>)}
          </div>
          <Card className="mt-4">
            <CardHeader><CardTitle>Rendimiento</CardTitle><CardDescription>Una visualización ligera sin cargar una librería de gráficas para la demo.</CardDescription></CardHeader>
            <CardContent><div className="flex h-44 items-end gap-2">{[32, 48, 40, 68, 58, 82, 72, 92, 74, 88, 96, 84].map((height, index) => <div key={index} className="flex-1 rounded-t bg-gradient-to-t from-primary/35 to-primary" style={{ height: `${height}%` }} />)}</div></CardContent>
          </Card>
          <Card className="mt-4">
            <CardHeader><CardTitle>Proyectos recientes</CardTitle></CardHeader>
            <CardContent><Table><TableHeader><TableRow><TableHead>Proyecto</TableHead><TableHead>Estado</TableHead><TableHead>Equipo</TableHead></TableRow></TableHeader><TableBody>{[["Atlas", "Activo", "8"], ["Nova", "Revisión", "4"], ["Pulse", "Activo", "6"]].map(([name, status, team]) => <TableRow key={name}><TableCell>{name}</TableCell><TableCell><Badge variant="secondary">{status}</Badge></TableCell><TableCell>{team}</TableCell></TableRow>)}</TableBody></Table></CardContent>
          </Card>
          <Card className="mt-4"><CardHeader><CardTitle>Ajustes rápidos</CardTitle></CardHeader><CardContent className="flex items-center justify-between"><div><p className="font-medium">Informes semanales</p><p className="text-sm text-muted-foreground">Recibe un resumen cada lunes.</p></div><Switch aria-label="Informes semanales" /></CardContent></Card>
        </div>
      </div>
    </div>
  )
}

function PortfolioDemo() {
  return (
    <div className="overflow-hidden rounded-2xl border bg-[#080a0f] text-white">
      <header className="flex h-16 items-center justify-between border-b border-white/10 px-6"><span className="font-semibold">DIEGO / 26</span><nav className="hidden gap-6 text-sm text-white/60 sm:flex"><span>Trabajo</span><span>Sobre mí</span><span>Contacto</span></nav><Button variant="outline" size="sm">Hablemos</Button></header>
      <section className="grid min-h-[580px] items-end gap-10 px-6 py-12 lg:grid-cols-[1fr_0.7fr] lg:px-12">
        <div><p className="text-sm text-blue-400">Diseñador y desarrollador independiente</p><h2 className="mt-5 text-6xl font-semibold tracking-[-0.06em] sm:text-8xl">Creo productos digitales con carácter.</h2><p className="mt-6 max-w-xl text-lg leading-relaxed text-white/60">Estrategia, identidad e interfaces para equipos que quieren hacer menos ruido y más impacto.</p></div>
        <div className="aspect-[4/5] rounded-2xl border border-white/10 bg-[radial-gradient(circle_at_50%_25%,#25315c,transparent_55%),linear-gradient(145deg,#111726,#05060a)]" />
      </section>
      <section className="grid gap-px border-t border-white/10 bg-white/10 md:grid-cols-3">{["Fintech Atlas", "Editorial Norte", "Sistema Orbit"].map((project, index) => <article key={project} className="bg-[#080a0f] p-6"><div className={`aspect-[4/3] rounded-xl bg-gradient-to-br ${index === 0 ? "from-blue-500/35" : index === 1 ? "from-violet-500/35" : "from-cyan-500/30"} to-transparent`} /><p className="mt-4 font-medium">{project}</p><p className="mt-1 text-sm text-white/50">Dirección de producto · 2026</p></article>)}</section>
      <section className="flex flex-col items-start justify-between gap-6 border-t border-white/10 px-6 py-16 sm:flex-row sm:items-end lg:px-12"><div><p className="text-white/50">Disponible para proyectos selectos</p><h3 className="mt-2 text-4xl font-medium">Construyamos algo útil.</h3></div><Button><Mail data-icon="inline-start" />Escribir un correo</Button></section>
    </div>
  )
}

export default async function TemplatePage({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug as TemplateSlug
  if (!slugs.includes(slug)) notFound()

  const demos = {
    landing: <LandingDemo />,
    dashboard: <DashboardDemo />,
    portfolio: <PortfolioDemo />,
    cinematic: <CinematicDemo />,
  }

  return (
    <main className="mx-auto max-w-[1500px] px-4 py-8 lg:px-8">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div>
          <Badge variant="outline">{slug === "cinematic" ? <Orbit data-icon="inline-start" /> : null} Demo reutilizable</Badge>
          <h1 className="mt-2 text-3xl font-semibold capitalize">{slug}</h1>
        </div>
        <Button asChild variant="outline"><Link href="/plantillas">Ver plantillas</Link></Button>
      </div>
      {demos[slug]}
    </main>
  )
}
