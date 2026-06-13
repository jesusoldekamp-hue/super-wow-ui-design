import { mkdir, readFile, writeFile } from "node:fs/promises"
import { resolve } from "node:path"

const root = resolve(process.cwd(), "../..")
const output = resolve(process.cwd(), "public/r")
await mkdir(output, { recursive: true })

const items = [
  {
    name: "liquid-hero",
    file: "liquid-hero.tsx",
    title: "Liquid Hero",
    description: "Hero cinematic con liquid glass, profundidad y preview de producto.",
    registryDependencies: ["button"],
  },
  {
    name: "liquid-bento",
    file: "liquid-bento.tsx",
    title: "Liquid Bento",
    description: "Grid bento con tarjetas liquid, iconos y jerarquía editorial.",
    registryDependencies: [],
  },
  {
    name: "liquid-dashboard-shell",
    file: "liquid-dashboard-shell.tsx",
    title: "Liquid Dashboard Shell",
    description: "Shell de dashboard con métricas, navegación y gráficos visuales.",
    registryDependencies: [],
  },
  {
    name: "cinematic-section",
    file: "cinematic-section.tsx",
    title: "Cinematic Section",
    description: "Sección narrativa con escala tipográfica y superficie liquid glass.",
    registryDependencies: [],
  },
  {
    name: "liquid-resource-card",
    file: "liquid-resource-card.tsx",
    title: "Liquid Resource Card",
    description: "Tarjeta de recurso con glass, CTA y estado hover.",
    registryDependencies: [],
  },
  {
    name: "hero-modern",
    file: "hero-modern.tsx",
    title: "Hero Modern",
    description: "Hero moderno con acciones y preview.",
    registryDependencies: ["button"],
  },
  {
    name: "bento-features",
    file: "bento-features.tsx",
    title: "Bento Features",
    description: "Grid bento accesible para beneficios.",
    registryDependencies: [],
  },
]

function rewriteImports(source: string) {
  return source
    .replaceAll("@workspace/ui/components/", "@/components/ui/")
    .replaceAll("@workspace/ui/lib/utils", "@/lib/utils")
}

for (const item of items) {
  const source = await readFile(resolve(root, `packages/ui/src/blocks/${item.file}`), "utf8")
  const content = rewriteImports(source)
  const files = [
    {
      path: `components/amui/${item.file}`,
      type: "registry:component",
      content,
    },
  ]

  if (source.includes("@workspace/ui/components/liquid-glass")) {
    files.push({
      path: "components/ui/liquid-glass.tsx",
      type: "registry:component",
      content: rewriteImports(await readFile(resolve(root, "packages/ui/src/components/liquid-glass.tsx"), "utf8")),
    })
  }

  const payload = {
    $schema: "https://ui.shadcn.com/schema/registry-item.json",
    name: item.name,
    type: "registry:block",
    title: item.title,
    description: item.description,
    dependencies: ["lucide-react"],
    registryDependencies: item.registryDependencies,
    files,
  }
  await writeFile(resolve(output, `${item.name}.json`), `${JSON.stringify(payload, null, 2)}\n`)
}

await writeFile(
  resolve(process.cwd(), "public/registry.json"),
  `${JSON.stringify({
    $schema: "https://ui.shadcn.com/schema/registry.json",
    name: "awesome-modern-ui",
    homepage: "https://awesome-modern-ui.vercel.app",
    items: items.map((item) => ({
      name: item.name,
      type: "registry:block",
      title: item.title,
      description: item.description,
    })),
  }, null, 2)}\n`
)

console.log(`Registry generado: ${items.length} bloques.`)
