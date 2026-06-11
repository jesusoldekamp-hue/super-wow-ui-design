import { z } from "zod"

import { categories, resources } from "../lib/catalog"

const schema = z.object({
  name: z.string().min(2),
  slug: z.string().regex(/^[a-z0-9-]+$/),
  url: z.url(),
  description: z.string().min(20),
  reason: z.string().min(20),
  category: z.enum(categories),
  type: z.enum(["framework", "libreria", "plugin", "api", "plataforma", "metrica", "patron", "feature"]),
  frameworks: z.array(z.string()).min(1),
  tags: z.array(z.string()).min(1),
  pricing: z.enum(["gratis", "freemium", "pago"]),
  license: z.string().min(2),
  maintained: z.boolean(),
  featured: z.boolean().optional(),
})

const slugs = new Set<string>()
const urls = new Set<string>()

for (const item of resources) {
  schema.parse(item)
  if (slugs.has(item.slug)) throw new Error(`Slug duplicado: ${item.slug}`)
  if (urls.has(item.url)) throw new Error(`URL duplicada: ${item.url}`)
  slugs.add(item.slug)
  urls.add(item.url)
}

if (resources.length !== 40) {
  throw new Error(`El catálogo debe contener exactamente 40 recursos; contiene ${resources.length}.`)
}

console.log(`Catálogo válido: ${resources.length} recursos, ${categories.length} categorías.`)
