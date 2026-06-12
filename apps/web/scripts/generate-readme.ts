import { writeFile } from "node:fs/promises"
import { resolve } from "node:path"

import { categories, categoryLabels, resources } from "../lib/catalog"

const repositoryUrl = "https://github.com/jesusoldekamp-hue/awesome-modern-ui"
const websiteUrl = "https://awesome-modern-ui.vercel.app"

const categoryIndex = categories
  .map((category) => {
    const count = resources.filter((item) => item.category === category).length
    return `- [${categoryLabels[category]}](#${category}) · ${count}`
  })
  .join("\n")

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
    <img src="./docs/images/awesome-modern-ui-cover.svg" alt="Awesome Modern UI: recursos para diseñar webs y apps modernas" width="100%">
  </a>
</p>

<h1 align="center">Awesome Modern UI</h1>

<p align="center">
  Directorio visual de herramientas para diseñar páginas web y aplicaciones modernas.
</p>

<p align="center">
  <a href="${websiteUrl}"><strong>Explorar la web</strong></a>
  ·
  <a href="${websiteUrl}/recursos">Ver recursos</a>
  ·
  <a href="${websiteUrl}/plantillas">Ver diseños</a>
  ·
  <a href="${websiteUrl}/componentes">Ver componentes</a>
</p>

<p align="center">
  <img alt="${resources.length} recursos" src="https://img.shields.io/badge/recursos-${resources.length}-6d5dfc">
  <img alt="${categories.length} categorías" src="https://img.shields.io/badge/categorías-${categories.length}-22d3ee">
  <img alt="Licencia MIT" src="https://img.shields.io/badge/licencia-MIT-34d399">
</p>

## Qué encontrarás

- Herramientas para UI, animación, 3D, accesibilidad, rendimiento y SEO.
- Referencias visuales para landings, dashboards, portfolios y productos digitales.
- Una ficha por recurso con descripción, recomendación, licencia, precio y sitio oficial.
- Imágenes locales para que el catálogo también sea visual dentro de GitHub.
- Una selección corta: solo recursos útiles para crear mejores webs y apps.

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

## Ejecutar la web

\`\`\`bash
corepack pnpm install
corepack pnpm dev
\`\`\`

Después abre \`http://localhost:3000\`.

## Actualizar el catálogo

\`\`\`bash
corepack pnpm resources:images
corepack pnpm readme:generate
corepack pnpm check
\`\`\`

El catálogo, las portadas y este README se generan desde
\`apps/web/lib/catalog.ts\`.

## Contribuir

Abre un issue o pull request en [${repositoryUrl}](${repositoryUrl}) con:

- enlace oficial;
- licencia y precio;
- motivo concreto para recomendarlo;
- evidencia de mantenimiento activo;
- categoría adecuada y alternativas que reemplazaría.

## Créditos

Proyecto original de [Jesus Sagaon](https://github.com/jesusoldekamp-hue).
Inspirado por la recopilación pública
[AndersonMoncayo/awesome-modern-ui](https://github.com/AndersonMoncayo/awesome-modern-ui).

## Licencia

Código propio bajo [MIT](./LICENSE). Los recursos enlazados conservan las
licencias, marcas y derechos de sus respectivos autores.
`

await writeFile(resolve(process.cwd(), "../../README.md"), readme)
console.log("README.md generado desde lib/catalog.ts")
