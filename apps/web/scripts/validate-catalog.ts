import { access } from "node:fs/promises"
import { resolve } from "node:path"

import { z } from "zod"

import { categories, resources } from "../lib/catalog"

const schema = z.object({
  name: z.string().min(2),
  slug: z.string().regex(/^[a-z0-9-]+$/),
  url: z.url(),
  image: z.string().regex(/^\/resources\/[a-z0-9-]+\.svg$/),
  imageAlt: z.string().min(20),
  description: z.string().min(20),
  reason: z.string().min(20),
  category: z.enum(categories),
  type: z.enum(["framework", "libreria", "plugin", "api", "plataforma", "metrica", "patron", "feature", "skill"]),
  frameworks: z.array(z.string()).min(1),
  tags: z.array(z.string()).min(1),
  pricing: z.enum(["gratis", "freemium", "pago"]),
  license: z.string().min(2),
  maintained: z.boolean(),
  featured: z.boolean().optional(),
})

const slugs = new Set<string>()
const urls = new Set<string>()
const minResources = 40
const maxResources = 60
const minFeatured = 6
const maxFeatured = 12

for (const item of resources) {
  schema.parse(item)
  if (slugs.has(item.slug)) throw new Error(`Slug duplicado: ${item.slug}`)
  if (urls.has(item.url)) throw new Error(`URL duplicada: ${item.url}`)
  if (item.image !== `/resources/${item.slug}.svg`) {
    throw new Error(`Imagen desalineada con el slug: ${item.slug}`)
  }
  await access(resolve(process.cwd(), "public", item.image.slice(1)))
  slugs.add(item.slug)
  urls.add(item.url)
}

if (resources.length < minResources || resources.length > maxResources) {
  throw new Error(
    `El catálogo debe contener entre ${minResources} y ${maxResources} recursos curados; contiene ${resources.length}.`
  )
}

for (const category of categories) {
  const count = resources.filter((item) => item.category === category).length
  if (count < 3) {
    throw new Error(`La categoría ${category} debe tener al menos 3 recursos; contiene ${count}.`)
  }
}

const featuredCount = resources.filter((item) => item.featured).length
if (featuredCount < minFeatured || featuredCount > maxFeatured) {
  throw new Error(
    `El catálogo debe tener entre ${minFeatured} y ${maxFeatured} destacados; contiene ${featuredCount}.`
  )
}

console.log(`Catálogo válido: ${resources.length} recursos, ${categories.length} categorías.`)
