# Awesome Modern UI

Starter operativo para que Claude Code, Codex y desarrolladores construyan interfaces web modernas con una base visual y técnica de producción.

[Sitio web](https://awesome-modern-ui.vercel.app) · [Componentes](https://awesome-modern-ui.vercel.app/componentes) · [Plantillas](https://awesome-modern-ui.vercel.app/plantillas) · [Guías](https://awesome-modern-ui.vercel.app/guias)

## Qué incluye

- Next.js 16, React 19, TypeScript y Tailwind CSS 4.
- Componentes basados en shadcn/ui y Radix UI.
- Motion, GSAP, ScrollTrigger, SplitText, MorphSVG y Lenis instalados.
- Three.js, React Three Fiber y Drei con carga dinámica.
- Soporte automático para `prefers-reduced-motion`.
- Plantillas para landing, dashboard, portfolio y experiencias cinematográficas.
- Registry compatible con shadcn.
- SEO, JSON-LD, sitemap, Vercel Analytics y Speed Insights.
- Instrucciones nativas para Claude Code y Codex.
- Seis Web Quality Skills de Addy Osmani para Lighthouse, Core Web Vitals, WCAG 2.2, SEO y buenas prácticas.
- 41 recursos modernos, mantenidos y sin alternativas redundantes.

## Inicio rápido

```bash
corepack pnpm install
corepack pnpm dev
```

Abre el repositorio con Claude Code o Codex y describe el sitio. Ambos agentes reciben reglas, mapa de herramientas y barra de calidad desde `CLAUDE.md`, `AGENTS.md`, `.claude/` y `.codex/`.

Ejemplo:

```text
Usa este starter para crear una landing cinematográfica para un producto de audio.
Necesito narrativa por scroll, comparación interactiva y una escena 3D ligera.
Respeta reduced motion y conserva Lighthouse >= 90.
```

Instalar un bloque en otro proyecto:

```bash
pnpm dlx shadcn@latest add https://awesome-modern-ui.vercel.app/r/hero-modern.json
```

Instalar el conocimiento para agentes o el pack avanzado desde GitHub:

```bash
pnpm dlx shadcn@latest add jesusoldekamp-hue/awesome-modern-ui/agent-workflow
pnpm dlx shadcn@latest add jesusoldekamp-hue/awesome-modern-ui/web-quality-skills
pnpm dlx shadcn@latest add jesusoldekamp-hue/awesome-modern-ui/advanced-effects
```

## Stack moderno

| Recurso | Qué resuelve | Licencia | Precio |
| --- | --- | --- | --- |
| [Next.js](https://nextjs.org) | Framework React para aplicaciones web de producción. | MIT | gratis |
| [React](https://react.dev) | Biblioteca para construir interfaces por componentes. | MIT | gratis |
| [TypeScript](https://www.typescriptlang.org) | JavaScript con tipos para proyectos mantenibles. | Apache-2.0 | gratis |
| [Node.js](https://nodejs.org) | Runtime JavaScript para tooling y servidor. | MIT | gratis |
| [Tailwind CSS](https://tailwindcss.com) | Framework CSS utility-first para sistemas visuales. | MIT | gratis |

## Componentes y UI

| Recurso | Qué resuelve | Licencia | Precio |
| --- | --- | --- | --- |
| [shadcn/ui](https://ui.shadcn.com) | Componentes accesibles que pasan a ser parte de tu código. | MIT | gratis |
| [Radix UI](https://www.radix-ui.com) | Primitivos accesibles y sin estilos para React. | MIT | gratis |
| [Base UI](https://base-ui.com) | Primitivos React sin estilos y con accesibilidad. | MIT | gratis |
| [React Aria](https://react-spectrum.adobe.com/react-aria) | Hooks y componentes accesibles de Adobe. | Apache-2.0 | gratis |
| [Magic UI](https://magicui.design) | Bloques animados para productos y landings. | MIT | freemium |
| [React Bits](https://reactbits.dev) | Componentes React creativos y animados. | MIT | gratis |

## Animación

| Recurso | Qué resuelve | Licencia | Precio |
| --- | --- | --- | --- |
| [GSAP](https://gsap.com) | Motor profesional de animación web. | GSAP | gratis |
| [ScrollTrigger](https://gsap.com/docs/v3/Plugins/ScrollTrigger) | Plugin GSAP para animación vinculada al scroll. | GSAP | gratis |
| [SplitText](https://gsap.com/docs/v3/Plugins/SplitText) | Plugin GSAP para animar texto por líneas y caracteres. | GSAP | gratis |
| [MorphSVG](https://gsap.com/docs/v3/Plugins/MorphSVGPlugin) | Transformaciones fluidas entre formas SVG. | GSAP | gratis |
| [Motion](https://motion.dev) | Animación productiva para React y JavaScript. | MIT | gratis |
| [Lenis](https://lenis.darkroom.engineering) | Scroll suave accesible y ligero. | MIT | gratis |
| [Rive](https://rive.app) | Diseño y runtime para animación interactiva. | Propietaria | freemium |
| [AutoAnimate](https://auto-animate.formkit.com) | Animaciones automáticas para cambios de layout. | MIT | gratis |
| [CSS View Transitions API](https://developer.mozilla.org/docs/Web/API/View_Transition_API) | Transiciones nativas entre estados y documentos. | Estándar web | gratis |
| [CSS Scroll-Driven Animations](https://developer.mozilla.org/docs/Web/CSS/CSS_scroll-driven_animations) | Animaciones CSS ligadas al progreso del scroll. | Estándar web | gratis |

## 3D

| Recurso | Qué resuelve | Licencia | Precio |
| --- | --- | --- | --- |
| [Three.js](https://threejs.org) | Motor 3D de referencia para la web. | MIT | gratis |
| [React Three Fiber](https://r3f.docs.pmnd.rs) | Renderer React para Three.js. | MIT | gratis |
| [Spline](https://spline.design) | Editor colaborativo de diseño 3D para web. | Propietaria | freemium |

## Rendimiento

| Recurso | Qué resuelve | Licencia | Precio |
| --- | --- | --- | --- |
| [next/image](https://nextjs.org/docs/app/api-reference/components/image) | Optimización integrada de imágenes en Next.js. | MIT | gratis |
| [next/font](https://nextjs.org/docs/app/getting-started/fonts) | Carga y autoalojamiento optimizado de fuentes. | MIT | gratis |
| [Vercel](https://vercel.com) | Plataforma de despliegue optimizada para frontend. | Propietaria | freemium |
| [Core Web Vitals](https://web.dev/vitals) | Métricas de experiencia real: LCP, INP y CLS. | Estándar web | gratis |
| [Web Quality Skills](https://github.com/addyosmani/web-quality-skills) | Agent Skills para Lighthouse, Core Web Vitals, WCAG 2.2, SEO y buenas prácticas. | MIT | gratis |

## Accesibilidad

| Recurso | Qué resuelve | Licencia | Precio |
| --- | --- | --- | --- |
| [prefers-reduced-motion](https://developer.mozilla.org/docs/Web/CSS/@media/prefers-reduced-motion) | Preferencia del sistema para reducir movimiento. | Estándar web | gratis |
| [Lucide](https://lucide.dev) | Iconos SVG consistentes y personalizables. | ISC | gratis |
| [Fontsource](https://fontsource.org) | Fuentes open source empaquetadas para autoalojamiento. | MIT | gratis |

## SEO y analítica

| Recurso | Qué resuelve | Licencia | Precio |
| --- | --- | --- | --- |
| [Vercel Web Analytics](https://vercel.com/analytics) | Analítica web conectada al despliegue. | Propietaria | freemium |
| [Google Analytics 4](https://developers.google.com/analytics/devguides/collection/ga4) | Analítica avanzada y medición de campañas. | Propietaria | gratis |
| [JSON-LD](https://json-ld.org) | Datos estructurados enlazados en JSON. | Estándar web | gratis |

## Patrones e inspiración

| Recurso | Qué resuelve | Licencia | Precio |
| --- | --- | --- | --- |
| [backdrop-filter](https://developer.mozilla.org/docs/Web/CSS/backdrop-filter) | Filtros detrás de superficies translúcidas. | Estándar web | gratis |
| [Liquid Glass](https://developer.apple.com/design/human-interface-guidelines/materials) | Dirección visual de superficies fluidas y estratificadas. | Patrón de diseño | gratis |
| [Glassmorphism](https://www.smashingmagazine.com/2021/07/glassmorphism-css) | Paneles translúcidos con profundidad. | Patrón de diseño | gratis |
| [Bento Grid](https://bentogrids.com) | Composición modular con jerarquía variable. | Patrón de diseño | gratis |
| [Mobbin](https://mobbin.com) | Biblioteca de flujos reales de productos digitales. | Propietaria | freemium |
| [Godly](https://godly.website) | Curaduría de sitios con dirección visual actual. | Propietaria | gratis |

## Capacidades avanzadas

GSAP, ScrollTrigger, SplitText, MorphSVG, Lenis, Three.js y React Three Fiber ya están instalados en `@workspace/effects`. Se importan por módulo para no aumentar el bundle de rutas que no los usan. Consulta [docs/STACK.md](./docs/STACK.md) y la plantilla [cinematic](https://awesome-modern-ui.vercel.app/plantillas/cinematic).

## Flujo para agentes

- [Proceso de construcción](./docs/AI_WORKFLOW.md)
- [Stack e imports](./docs/STACK.md)
- [Barra de calidad](./docs/QUALITY_BAR.md)
- [Plantilla de brief](./docs/BRIEF_TEMPLATE.md)
- [Web Quality Skills](./docs/WEB_QUALITY_SKILLS.md)

Las skills `web-quality-audit`, `performance`, `core-web-vitals`,
`accessibility`, `seo` y `best-practices` ya están incluidas para Claude
Code y Codex. Se actualizan desde el repositorio original con:

```bash
corepack pnpm quality:skills:update
```

## Calidad

```bash
corepack pnpm doctor
corepack pnpm ready
```

## Créditos

Proyecto original de [Jesus Sagaon](https://github.com/jesusoldekamp-hue). Inspirado por la recopilación pública [AndersonMoncayo/awesome-modern-ui](https://github.com/AndersonMoncayo/awesome-modern-ui); este repositorio contiene una implementación, estructura y código originales.

## Licencia

Código propio bajo [MIT](./LICENSE). Los recursos enlazados conservan las licencias de sus respectivos autores.
Las Web Quality Skills incluidas conservan la licencia MIT y atribución de Addy
Osmani en [THIRD_PARTY_NOTICES.md](./THIRD_PARTY_NOTICES.md).
