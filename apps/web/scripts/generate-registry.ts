import { mkdir, readFile, writeFile } from "node:fs/promises"
import { resolve } from "node:path"

const root = resolve(process.cwd(), "../..")
const output = resolve(process.cwd(), "public/r")
await mkdir(output, { recursive: true })

const items = [
  { name: "hero-modern", file: "hero-modern.tsx", registryDependencies: ["button"] },
  { name: "bento-features", file: "bento-features.tsx", registryDependencies: [] },
]

for (const item of items) {
  const source = await readFile(resolve(root, `packages/ui/src/blocks/${item.file}`), "utf8")
  const content = source
    .replaceAll("@workspace/ui/components/", "@/components/ui/")
    .replaceAll("@workspace/ui/lib/utils", "@/lib/utils")

  const payload = {
    $schema: "https://ui.shadcn.com/schema/registry-item.json",
    name: item.name,
    type: "registry:block",
    title: item.name === "hero-modern" ? "Hero Modern" : "Bento Features",
    description: item.name === "hero-modern"
      ? "Hero moderno con acciones y preview."
      : "Grid bento accesible para beneficios.",
    dependencies: ["lucide-react"],
    registryDependencies: item.registryDependencies,
    files: [
      {
        path: `components/amui/${item.file}`,
        type: "registry:component",
        content,
      },
    ],
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
      title: item.name === "hero-modern" ? "Hero Modern" : "Bento Features",
      description: "Bloque reutilizable de Awesome Modern UI.",
    })),
  }, null, 2)}\n`
)

console.log(`Registry generado: ${items.length} bloques.`)
