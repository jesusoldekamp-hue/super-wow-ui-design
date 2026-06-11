import { describe, expect, it } from "vitest"

import { filterResources, getResource, resources } from "./catalog"

describe("catalog", () => {
  it("mantiene una selección estricta de 40 recursos", () => {
    expect(resources).toHaveLength(40)
    expect(new Set(resources.map((item) => item.slug)).size).toBe(40)
  })

  it("encuentra recursos por tecnología y categoría", () => {
    expect(filterResources({ q: "scroll" }).length).toBeGreaterThan(2)
    expect(filterResources({ category: "3d" }).map((item) => item.slug)).toContain("threejs")
    expect(filterResources({ framework: "Next.js" }).map((item) => item.slug)).toContain("next-image")
  })

  it("resuelve páginas por slug", () => {
    expect(getResource("motion")?.name).toBe("Motion")
    expect(getResource("no-existe")).toBeUndefined()
  })
})
