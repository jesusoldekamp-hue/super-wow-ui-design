import { describe, expect, it } from "vitest"

import { filterResources, getResource, resources } from "./catalog"

describe("catalog", () => {
  it("mantiene una selección estricta de 41 recursos", () => {
    expect(resources).toHaveLength(41)
    expect(new Set(resources.map((item) => item.slug)).size).toBe(41)
  })

  it("encuentra recursos por tecnología y categoría", () => {
    expect(filterResources({ q: "scroll" }).length).toBeGreaterThan(2)
    expect(filterResources({ category: "3d" }).map((item) => item.slug)).toContain("threejs")
    expect(filterResources({ framework: "Next.js" }).map((item) => item.slug)).toContain("next-image")
  })

  it("resuelve páginas por slug", () => {
    expect(getResource("motion")?.name).toBe("Motion")
    expect(getResource("web-quality-skills")?.license).toBe("MIT")
    expect(getResource("no-existe")).toBeUndefined()
  })

  it("incluye una portada local para cada recurso", () => {
    for (const resource of resources) {
      expect(resource.image).toBe(`/resources/${resource.slug}.svg`)
      expect(resource.imageAlt).toContain(resource.name)
    }
  })
})
