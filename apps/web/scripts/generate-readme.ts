import { writeFile } from "node:fs/promises"
import { resolve } from "node:path"

import { categories, categoryLabels, resources } from "../lib/catalog"

const tables = categories
  .map((category) => {
    const rows = resources
      .filter((item) => item.category === category)
      .map(
        (item) =>
          `| [${item.name}](${item.url}) | ${item.description} | ${item.license} | ${item.pricing} |`
      )
      .join("\n")
    return `## ${categoryLabels[category]}\n\n| Recurso | Qué resuelve | Licencia | Precio |\n| --- | --- | --- | --- |\n${rows}`
  })
  .join("\n\n")

const readme = `# Awesome Modern UI

Starter, componentes, plantillas y una selección estricta de herramientas para construir interfaces web modernas.

[Sitio web](https://awesome-modern-ui.vercel.app) · [Componentes](https://awesome-modern-ui.vercel.app/componentes) · [Plantillas](https://awesome-modern-ui.vercel.app/plantillas) · [Guías](https://awesome-modern-ui.vercel.app/guias)

## Qué incluye

- Next.js 16, React 19, TypeScript y Tailwind CSS 4.
- Componentes basados en shadcn/ui y Radix UI.
- Motion con soporte para \`prefers-reduced-motion\`.
- Plantillas completas para landing, dashboard y portfolio.
- Registry compatible con shadcn.
- SEO, JSON-LD, sitemap, Vercel Analytics y Speed Insights.
- 40 recursos modernos, mantenidos y sin alternativas redundantes.

## Uso

\`\`\`bash
pnpm install
pnpm dev
\`\`\`

Instalar un bloque en otro proyecto:

\`\`\`bash
pnpm dlx shadcn@latest add https://awesome-modern-ui.vercel.app/r/hero-modern.json
\`\`\`

${tables}

## Recetas opcionales

El starter mantiene el bundle principal ligero. GSAP, ScrollTrigger, SplitText, MorphSVG, Lenis, Three.js y React Three Fiber están documentados en [docs/recipes](./docs/recipes) y deben instalarse únicamente en las rutas que los necesiten.

## Calidad

\`\`\`bash
pnpm check
pnpm test:e2e
\`\`\`

## Créditos

Proyecto original de [Jesus Sagaon](https://github.com/jesusoldekamp-hue). Inspirado por la recopilación pública [AndersonMoncayo/awesome-modern-ui](https://github.com/AndersonMoncayo/awesome-modern-ui); este repositorio contiene una implementación, estructura y código originales.

## Licencia

Código propio bajo [MIT](./LICENSE). Los recursos enlazados conservan las licencias de sus respectivos autores.
`

await writeFile(resolve(process.cwd(), "../../README.md"), readme)
console.log("README.md generado desde lib/catalog.ts")
