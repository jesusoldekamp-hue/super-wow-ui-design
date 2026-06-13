import { writeFile } from "node:fs/promises"
import { resolve } from "node:path"

import { categories, categoryLabels, resources } from "../lib/catalog"

const repositoryUrl = "https://github.com/jesusoldekamp-hue/super-wow-ui-design"
const websiteUrl = "https://super-wow-ui-design.vercel.app"

const categoryIndex = categories
  .map((category) => {
    const count = resources.filter((item) => item.category === category).length
    return `<a href="#${category}"><img alt="${categoryLabels[category]}" src="https://img.shields.io/badge/${encodeURIComponent(categoryLabels[category])}-${count}-111827?style=for-the-badge&labelColor=060913&color=6d5dfc"></a>`
  })
  .join(" ")

const featured = resources
  .filter((item) => item.featured)
  .slice(0, 8)
  .map(
    (item) =>
      `<a href="${websiteUrl}/recursos/${item.slug}"><img src="./apps/web/public/resources/${item.slug}.svg" alt="${item.imageAlt}" width="390"></a>`
  )

const featuredGrid = Array.from({ length: Math.ceil(featured.length / 2) }, (_, index) => {
  const left = featured[index * 2] ?? ""
  const right = featured[index * 2 + 1] ?? ""
  return `| ${left} | ${right} |`
}).join("\n")

const stackHighlights = [
  "Next.js 16",
  "React 19",
  "Tailwind CSS 4",
  "Motion",
  "shadcn/ui",
  "Radix UI",
  "Three.js",
  "Liquid Glass",
  "shadcn registry",
]
  .map((item) => `<code>${item}</code>`)
  .join(" ")

const registryBlocks = [
  ["liquid-hero", "Hero cinematic con liquid glass, profundidad y preview."],
  ["liquid-bento", "Grid bento con tarjetas liquid y jerarquía editorial."],
  ["liquid-dashboard-shell", "Shell de dashboard con métricas y actividad."],
  ["cinematic-section", "Sección narrativa para landing, SaaS o portfolio."],
  ["liquid-resource-card", "Tarjeta de recurso con glass, CTA y hover."],
]

const registryRows = registryBlocks
  .map(([slug, description]) => `| \`${slug}\` | ${description} | \`pnpm dlx shadcn@latest add ${websiteUrl}/r/${slug}.json\` |`)
  .join("\n")

const tables = categories
  .map((category) => {
    const rows = resources
      .filter((item) => item.category === category)
      .map(
        (item) =>
          `| <a href="${websiteUrl}/recursos/${item.slug}"><img src="./apps/web/public/resources/${item.slug}.svg" alt="${item.imageAlt}" width="180"></a> | **[${item.name}](${item.url})**<br>${item.description}<br><sub>${item.license} · ${item.pricing}</sub> |`
      )
      .join("\n")

    return `<a id="${category}"></a>

## ${categoryLabels[category]}

| Vista | Recurso |
| --- | --- |
${rows}`
  })
  .join("\n\n")

const readme = `<p align="center">
  <a href="${websiteUrl}">
    <img src="./docs/images/super-wow-ui-design-cover.svg" alt="Super Wow UI Design: recursos para diseñar webs y apps modernas" width="100%">
  </a>
</p>

<h1 align="center">Super Wow UI Design</h1>

<p align="center">
  Directorio visual, galería liquid UI y kit de bloques instalables para diseñar páginas web, apps y productos digitales modernos.
  Comparte este GitHub o la web con Codex, Claude u otra IA para darle una fuente de contexto lista para crear interfaces premium.
</p>

<p align="center">
  <a href="${websiteUrl}"><img alt="Explorar web" src="https://img.shields.io/badge/Explorar_web-6d5dfc?style=for-the-badge&labelColor=090d19"></a>
  <a href="${websiteUrl}/recursos"><img alt="Recursos" src="https://img.shields.io/badge/Recursos-22d3ee?style=for-the-badge&labelColor=090d19"></a>
  <a href="${websiteUrl}/plantillas"><img alt="Diseños" src="https://img.shields.io/badge/Disenos-c084fc?style=for-the-badge&labelColor=090d19"></a>
  <a href="${websiteUrl}/componentes"><img alt="Componentes" src="https://img.shields.io/badge/Componentes-ec4899?style=for-the-badge&labelColor=090d19"></a>
</p>

<p align="center">
  <img alt="${resources.length} recursos" src="https://img.shields.io/badge/${resources.length}_recursos-curados-6d5dfc?style=flat-square">
  <img alt="${categories.length} categorías" src="https://img.shields.io/badge/${categories.length}_categorias-visuales-22d3ee?style=flat-square">
  <img alt="Next.js" src="https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=nextdotjs">
  <img alt="Licencia MIT" src="https://img.shields.io/badge/licencia-MIT-34d399?style=flat-square">
</p>

## Vista rápida

| Curado | Visual | Moderno | Listo para usar |
| --- | --- | --- | --- |
| ${resources.length} recursos útiles, no una lista infinita. | Portadas SVG locales para navegar desde GitHub. | UI, motion, 3D, SEO, performance y accesibilidad. | Web con liquid glass, registry shadcn, filtros y fichas. |

<p align="center">
  ${stackHighlights}
</p>

## Por qué existe

Este repo no intenta guardar todo. Guarda lo que sí vale la pena tener a mano cuando vas a construir interfaces modernas: herramientas mantenidas, documentación útil, patrones liquid UI y bloques instalables para landings, portfolios, dashboards, SaaS y sitios creativos.

## Contexto para IA

La función principal es simple: compartir la página o el GitHub y darle a cualquier asistente de código una base curada para diseñar mejor. Aquí encuentra stack recomendado, recursos modernos, criterios de calidad, patrones cinematic/liquid UI y comandos del registry para instalar bloques directamente en un proyecto.

Úsalo como prompt de contexto:

\`\`\`txt
Usa https://super-wow-ui-design.vercel.app y https://github.com/jesusoldekamp-hue/super-wow-ui-design como referencia de diseño.
Construye la interfaz con estética liquid UI, buenas prácticas de accesibilidad, performance, motion safety y componentes modernos.
\`\`\`

## Qué lo hace diferente

| Selección estricta | Galería visual | Registry instalable | Calidad continua |
| --- | --- | --- | --- |
| Entran recursos con valor real para diseño web y app. | Cada ficha tiene portada local, enlace oficial y una interfaz liquid glass. | Bloques compatibles con shadcn desde \`${websiteUrl}/registry.json\`. | CI valida catálogo, registry, lint, tipos, pruebas y build. |

## Explorar por categoría

${categoryIndex}

## Recursos destacados

| | |
| --- | --- |
${featuredGrid}

${tables}

## Diseños y componentes

La web incluye ejemplos completos para ver cómo se combinan estas herramientas:

- [Landing cinematográfica](${websiteUrl}/plantillas/landing)
- [Dashboard moderno](${websiteUrl}/plantillas/dashboard)
- [Portfolio editorial](${websiteUrl}/plantillas/portfolio)
- [Experiencia inmersiva](${websiteUrl}/plantillas/cinematic)
- [Bloques de interfaz](${websiteUrl}/componentes)

## Instalar bloques liquid UI

El registry público está en [\`${websiteUrl}/registry.json\`](${websiteUrl}/registry.json).

| Bloque | Uso | Instalar |
| --- | --- | --- |
${registryRows}

Ejemplo:

\`\`\`bash
pnpm dlx shadcn@latest add ${websiteUrl}/r/liquid-hero.json
\`\`\`

## Estructura

\`\`\`txt
apps/web                 Next.js app, galería y documentación
apps/web/lib/catalog.ts  Fuente tipada del catálogo
apps/web/public          Portadas SVG y assets públicos
packages/ui              Componentes compartidos y bloques liquid UI
packages/effects         Utilidades de animación y motion safety
apps/web/public/r        Bloques compatibles con shadcn registry
\`\`\`

## Ejecutar la web

\`\`\`bash
corepack enable
corepack pnpm install
corepack pnpm dev
\`\`\`

Después abre \`http://localhost:3000\`.

## Actualizar el catálogo

\`\`\`bash
corepack pnpm resources:images
corepack pnpm readme:generate
corepack pnpm links:check
corepack pnpm check
\`\`\`

El catálogo, las portadas y este README se generan desde
\`apps/web/lib/catalog.ts\`.

## Contribuir

Abre un issue o pull request en [${repositoryUrl}](${repositoryUrl}). Para que un recurso entre debe incluir:

- enlace oficial;
- licencia y precio;
- motivo concreto para recomendarlo;
- evidencia de mantenimiento activo;
- categoría adecuada y alternativas que reemplazaría.

No se aceptan recursos abandonados, duplicados o premium sin valor claro para construir mejores interfaces.

## Licencia

Código propio bajo [MIT](./LICENSE). Los recursos enlazados conservan las
licencias, marcas y derechos de sus respectivos autores.
`

await writeFile(resolve(process.cwd(), "../../README.md"), readme)
console.log("README.md generado desde lib/catalog.ts")
