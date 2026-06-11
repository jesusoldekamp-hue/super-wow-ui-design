# Stack operativo

Todo lo siguiente queda instalado con `corepack pnpm install`.

| Necesidad | Herramienta | Import o ubicación |
| --- | --- | --- |
| Framework | Next.js 16 + React 19 | `apps/web` |
| Tipado | TypeScript | Todo el monorepo |
| Estilos | Tailwind CSS 4 | `@workspace/ui/globals.css` |
| Componentes | shadcn/ui + Radix UI | `@workspace/ui/components/*` |
| Liquid Glass | Superficie refractiva interactiva | `@workspace/ui/components/liquid-glass` |
| Interacción | Motion | `motion/react` |
| Timelines | GSAP | `gsap` |
| React + GSAP | useGSAP | `@gsap/react` |
| Scroll narrativo | ScrollTrigger | `@workspace/effects/scroll-story` |
| Texto cinético | SplitText | `@workspace/effects/split-text-reveal` |
| Morphing SVG | MorphSVG | `@workspace/effects/morphing-symbol` |
| Scroll suave | Lenis | `@workspace/effects/lenis-provider` |
| WebGL | Three.js + R3F + Drei | `@workspace/effects/ambient-orb` |
| View Transitions | API nativa | `@workspace/effects/view-transition-link` |
| Scroll CSS | API nativa | `.cinematic-scroll-reveal` |
| Imágenes | next/image | `next/image` |
| Fuentes | next/font | `next/font/*` |
| SEO | Metadata + JSON-LD | App Router |
| Analítica | Vercel Analytics + Speed Insights | `apps/web/app/layout.tsx` |

## Principio de carga

Que una herramienta esté instalada no significa que deba entrar en todas las páginas. Los paquetes están divididos por imports para que tree-shaking, Server Components y `next/dynamic` mantengan ligero el bundle inicial.

## Ejemplos ejecutables

```tsx
import { LenisProvider } from "@workspace/effects/lenis-provider"
import { ScrollStory } from "@workspace/effects/scroll-story"
import { SplitTextReveal } from "@workspace/effects/split-text-reveal"
```

Para 3D, carga el módulo por ruta:

```tsx
const AmbientOrb = dynamic(
  () => import("@workspace/effects/ambient-orb").then((module) => module.AmbientOrb),
  { ssr: false },
)
```

Consulta `apps/web/components/cinematic-demo.tsx` para una integración completa.
