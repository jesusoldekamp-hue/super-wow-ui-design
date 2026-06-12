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

Starter operativo para que Claude Code, Codex y desarrolladores construyan interfaces web modernas con una base visual y técnica de producción.

[Sitio web](https://awesome-modern-ui.vercel.app) · [Componentes](https://awesome-modern-ui.vercel.app/componentes) · [Plantillas](https://awesome-modern-ui.vercel.app/plantillas) · [Guías](https://awesome-modern-ui.vercel.app/guias)

## Qué incluye

- Next.js 16, React 19, TypeScript y Tailwind CSS 4.
- Componentes basados en shadcn/ui y Radix UI.
- Motion, GSAP, ScrollTrigger, SplitText, MorphSVG y Lenis instalados.
- Three.js, React Three Fiber y Drei con carga dinámica.
- Soporte automático para \`prefers-reduced-motion\`.
- Plantillas para landing, dashboard, portfolio y experiencias cinematográficas.
- Registry compatible con shadcn.
- SEO, JSON-LD, sitemap, Vercel Analytics y Speed Insights.
- Instrucciones nativas para Claude Code y Codex.
- Seis Web Quality Skills de Addy Osmani para Lighthouse, Core Web Vitals, WCAG 2.2, SEO y buenas prácticas.
- ${resources.length} recursos modernos, mantenidos y sin alternativas redundantes.

## Inicio rápido

\`\`\`bash
corepack pnpm install
corepack pnpm dev
\`\`\`

Abre el repositorio con Claude Code o Codex y describe el sitio. Ambos agentes reciben reglas, mapa de herramientas y barra de calidad desde \`CLAUDE.md\`, \`AGENTS.md\`, \`.claude/\` y \`.codex/\`.

Ejemplo:

\`\`\`text
Usa este starter para crear una landing cinematográfica para un producto de audio.
Necesito narrativa por scroll, comparación interactiva y una escena 3D ligera.
Respeta reduced motion y conserva Lighthouse >= 90.
\`\`\`

Instalar un bloque en otro proyecto:

\`\`\`bash
pnpm dlx shadcn@latest add https://awesome-modern-ui.vercel.app/r/hero-modern.json
\`\`\`

Instalar el conocimiento para agentes o el pack avanzado desde GitHub:

\`\`\`bash
pnpm dlx shadcn@latest add jesusoldekamp-hue/awesome-modern-ui/agent-workflow
pnpm dlx shadcn@latest add jesusoldekamp-hue/awesome-modern-ui/web-quality-skills
pnpm dlx shadcn@latest add jesusoldekamp-hue/awesome-modern-ui/advanced-effects
\`\`\`

${tables}

## Capacidades avanzadas

GSAP, ScrollTrigger, SplitText, MorphSVG, Lenis, Three.js y React Three Fiber ya están instalados en \`@workspace/effects\`. Se importan por módulo para no aumentar el bundle de rutas que no los usan. Consulta [docs/STACK.md](./docs/STACK.md) y la plantilla [cinematic](https://awesome-modern-ui.vercel.app/plantillas/cinematic).

## Flujo para agentes

- [Proceso de construcción](./docs/AI_WORKFLOW.md)
- [Stack e imports](./docs/STACK.md)
- [Barra de calidad](./docs/QUALITY_BAR.md)
- [Plantilla de brief](./docs/BRIEF_TEMPLATE.md)
- [Web Quality Skills](./docs/WEB_QUALITY_SKILLS.md)

Las skills \`web-quality-audit\`, \`performance\`, \`core-web-vitals\`,
\`accessibility\`, \`seo\` y \`best-practices\` ya están incluidas para Claude
Code y Codex. Se actualizan desde el repositorio original con:

\`\`\`bash
corepack pnpm quality:skills:update
\`\`\`

## Calidad

\`\`\`bash
corepack pnpm doctor
corepack pnpm ready
\`\`\`

## Créditos

Proyecto original de [Jesus Sagaon](https://github.com/jesusoldekamp-hue). Inspirado por la recopilación pública [AndersonMoncayo/awesome-modern-ui](https://github.com/AndersonMoncayo/awesome-modern-ui); este repositorio contiene una implementación, estructura y código originales.

## Licencia

Código propio bajo [MIT](./LICENSE). Los recursos enlazados conservan las licencias de sus respectivos autores.
Las Web Quality Skills incluidas conservan la licencia MIT y atribución de Addy
Osmani en [THIRD_PARTY_NOTICES.md](./THIRD_PARTY_NOTICES.md).
`

await writeFile(resolve(process.cwd(), "../../README.md"), readme)
console.log("README.md generado desde lib/catalog.ts")
