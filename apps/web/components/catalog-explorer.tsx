"use client"

import { Search, SlidersHorizontal, X } from "lucide-react"
import { usePathname, useSearchParams } from "next/navigation"
import { useDeferredValue, useMemo, useState } from "react"

import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"

import {
  categories,
  categoryLabels,
  filterResources,
  resources,
} from "@/lib/catalog"

import { ResourceCard } from "./resource-card"

export function CatalogExplorer({ compact = false }: { compact?: boolean }) {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [query, setQuery] = useState(searchParams.get("q") ?? "")
  const [category, setCategory] = useState(searchParams.get("category") ?? "")
  const [framework, setFramework] = useState(searchParams.get("framework") ?? "")
  const [pricing, setPricing] = useState(searchParams.get("pricing") ?? "")
  const deferredQuery = useDeferredValue(query)

  const filtered = useMemo(
    () =>
      filterResources({
        q: deferredQuery,
        category,
        framework,
        pricing,
      }),
    [deferredQuery, category, framework, pricing]
  )

  function setParam(key: string, value: string) {
    const next = new URLSearchParams(window.location.search)
    if (value) next.set(key, value)
    else next.delete(key)
    if (key === "q") setQuery(value)
    if (key === "category") setCategory(value)
    if (key === "framework") setFramework(value)
    if (key === "pricing") setPricing(value)
    window.history.replaceState(null, "", `${pathname}${next.size ? `?${next}` : ""}`)
  }

  const shown = compact ? filtered.slice(0, 8) : filtered

  return (
    <section className="glass rounded-2xl p-4 sm:p-6">
      <div className="flex flex-col gap-4">
        <label className="relative block">
          <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={query}
            onInput={(event) => {
              const value = event.currentTarget.value
              setQuery(value)
              setParam("q", value)
            }}
            className="h-11 pl-10"
            placeholder="Buscar herramientas para diseño y desarrollo web..."
            aria-label="Buscar recursos"
          />
        </label>
        <div className="flex gap-2 overflow-x-auto pb-1">
          <Button variant={category ? "outline" : "default"} size="sm" onClick={() => setParam("category", "")}>
            Todos
          </Button>
          {categories.map((item) => (
            <Button
              key={item}
              variant={category === item ? "default" : "outline"}
              size="sm"
              onClick={() => setParam("category", item)}
            >
              {categoryLabels[item]}
            </Button>
          ))}
        </div>
        {!compact ? (
          <div className="flex flex-wrap items-center gap-3 border-t pt-4">
            <SlidersHorizontal className="size-4 text-muted-foreground" />
            <select
              aria-label="Framework"
              value={framework}
              onChange={(event) => setParam("framework", event.target.value)}
              className="h-9 rounded-lg border bg-background px-3 text-sm"
            >
              <option value="">Todos los frameworks</option>
              {Array.from(new Set(resources.flatMap((item) => item.frameworks))).sort().map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
            <select
              aria-label="Precio"
              value={pricing}
              onChange={(event) => setParam("pricing", event.target.value)}
              className="h-9 rounded-lg border bg-background px-3 text-sm"
            >
              <option value="">Cualquier precio</option>
              <option value="gratis">Gratis</option>
              <option value="freemium">Freemium</option>
              <option value="pago">Pago</option>
            </select>
            {(query || category || framework || pricing) ? (
              <Button
                variant="ghost"
                size="sm"
              onClick={() => {
                setQuery("")
                setCategory("")
                setFramework("")
                setPricing("")
                window.history.replaceState(null, "", pathname)
              }}
              >
                <X data-icon="inline-start" />
                Limpiar
              </Button>
            ) : null}
            <span className="ml-auto text-sm text-muted-foreground">{filtered.length} recursos</span>
          </div>
        ) : null}
      </div>
      <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {shown.map((item) => <ResourceCard key={item.slug} item={item} />)}
      </div>
      {shown.length === 0 ? (
        <div className="py-16 text-center text-muted-foreground">
          No encontramos recursos con esos filtros.
        </div>
      ) : null}
    </section>
  )
}
